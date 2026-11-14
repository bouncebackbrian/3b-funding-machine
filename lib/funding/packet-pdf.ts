import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { renderPacketSummary, type BankablePacket } from "./packet";
import { DISCLOSURES } from "./disclosures";

const width = 612;
const height = 792;
const margin = 54;
const ink = rgb(0.09, 0.14, 0.22);
const muted = rgb(0.34, 0.40, 0.47);
const accent = rgb(0.05, 0.40, 0.34);

export async function buildPacketPdf(
  packet: BankablePacket,
  loadFile: (path: string) => Promise<Blob>,
  toJpeg: (photo: Blob) => Promise<Uint8Array>,
) {
  const pdf = await PDFDocument.create();
  const regular = await pdf.embedFont(StandardFonts.Helvetica);
  const bold = await pdf.embedFont(StandardFonts.HelveticaBold);
  pdf.setTitle("3B Funding Machine Bankable Readiness Packet");
  pdf.setAuthor("3B Funding Machine");
  const evidence: string[] = [];
  const unavailable: string[] = [];

  for (const doc of packet.documents) {
    if (!doc.path) continue;
    const start = pdf.getPageCount();
    try {
      const file = await loadFile(doc.path);
      if (/\.pdf$/i.test(doc.path) || file.type === "application/pdf") {
        const source = await PDFDocument.load(await file.arrayBuffer(), { updateMetadata: false });
        if (source.getPageCount() === 0) throw new Error("Empty PDF");
        const pages = await pdf.copyPages(source, source.getPageIndices());
        for (const page of pages) pdf.addPage(page);
      } else {
        const image = await pdf.embedJpg(await toJpeg(file));
        const scale = Math.min((width - 2 * margin) / image.width, (height - 2 * margin) / image.height);
        const size = image.scale(scale);
        pdf.addPage([width, height]).drawImage(image, {
          ...size, x: (width - size.width) / 2, y: (height - size.height) / 2,
        });
      }
      const count = pdf.getPageCount() - start;
      evidence.push(`${doc.label} - ${count} ${count === 1 ? "page" : "pages"} in the appendix.`);
    } catch {
      while (pdf.getPageCount() > start) pdf.removePage(pdf.getPageCount() - 1);
      unavailable.push(doc.label);
      evidence.push(`${doc.label} - could not be included. Replace it with a readable PDF or JPG and export again.`);
    }
  }

  let summaryPage = 0;
  const addSummaryPage = () => {
    const page = pdf.insertPage(summaryPage++, [width, height]);
    page.drawText("3B FUNDING MACHINE", { x: margin, y: height - 41, font: bold, size: 9, color: accent });
    page.drawLine({ start: { x: margin, y: height - 48 }, end: { x: width - margin, y: height - 48 }, color: accent, opacity: 0.4 });
    page.drawText(`CONFIDENTIAL  /  ${summaryPage}`, { x: margin, y: 30, font: regular, size: 8, color: muted });
    return page;
  };
  let page = addSummaryPage();
  let y = height - 76;
  const encodable = (value: string) => [...value].map((character) => {
    try {
      regular.encodeText(character);
      return character;
    } catch {
      return "?";
    }
  }).join("");
  const print = (value: string, size: number, heading: boolean) => {
    const font = heading ? bold : regular;
    const lineHeight = size + 5;
    const printable = encodable(value.replace(/[–—‑]/g, "-").replace(/\s+/g, " "));
    let line = "";
    const flush = () => {
      if (y < margin + lineHeight) {
        page = addSummaryPage();
        y = height - 76;
      }
      page.drawText(line, { x: margin, y, font, size, color: heading ? accent : ink });
      y -= lineHeight;
      line = "";
    };
    for (const character of printable) {
      if (font.widthOfTextAtSize(line + character, size) > width - 2 * margin) {
        const split = line.lastIndexOf(" ");
        if (split > 0) {
          const remainder = line.slice(split + 1);
          line = line.slice(0, split);
          flush();
          line = remainder;
        } else {
          flush();
        }
      }
      line += character;
    }
    if (line) flush();
  };

  const lines = renderPacketSummary(packet, evidence).split("\n");
  if (unavailable.length) {
    lines.splice(3, 0, "", "SUPPORTING FILES NEED ATTENTION", "See the attachment list for files to replace before sharing.");
  }
  lines.push("SIGNED DISCLOSURES");
  for (const disclosure of DISCLOSURES) {
    const signature = packet.signatures.find((item) => item.type === disclosure.type);
    if (!signature) continue;
    lines.push(`${disclosure.title} (${disclosure.version})`, disclosure.text,
      `Signed and acknowledged by ${signature.name} on ${signature.date}.`, "");
  }
  for (const [index, line] of lines.entries()) {
    if (!line.trim()) {
      y -= 7;
      continue;
    }
    const heading = index === 0 || (/^[A-Z][A-Z &-]{4,}$/.test(line) && line.length <= 60);
    if (heading && y < margin + 54) {
      page = addSummaryPage();
      y = height - 76;
    }
    print(line, index === 0 ? 21 : heading ? 11 : 10, heading);
  }

  return { bytes: await pdf.save(), unavailable };
}
