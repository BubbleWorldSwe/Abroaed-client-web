import jsPDF from 'jspdf';
import 'jspdf-autotable';

export const generatePDF = ({
  header = '',
  upperBoxContent = [],
  lowerBoxContent = [],
  resolveSummary = [],
  tableHead,
  tableBody,
  colorSummaryHeader = 'Color Summary',
  colorSummaryTableHead = [],
  colorSummaryTableBody = [],

}) => {
  const doc = new jsPDF();
  const headerFontSize = 16;
  const boxFontSize = 11;
  doc.setFontSize(boxFontSize);
  const pageWidth = doc.internal.pageSize.width;
  const headerToUpperBoxSpace = 8;
  const boxPadding = 6;
  const upperBoxToResolveSummarySpace = 7;
  const resolveSummaryToParticularsSpace = 7;
  const particularsToTableSpace = 7;
  const tableToSummarySpace = 7;
  const summaryToLowerBoxSpace = 7;
  const tableToColorSummarySpace = 7;

  const drawText = (label, value, x, y) => {
    if (value !== undefined && value !== null) {
      doc.setFont(undefined, 'normal');
      doc.text(label ? `${label}: ` : '', x, y);
      doc.setFont(undefined, 'bold');
      doc.text(`${value}`, x + 25, y);
    }
  };

  const checkPageOverflow = (heightRequired) => {
    const pageHeight = doc.internal.pageSize.height;
    const currentY = doc.internal.cursorY;
    if (currentY + heightRequired > pageHeight) {
      doc.addPage();
      doc.setFontSize(boxFontSize);
      doc.setTextColor(0, 0, 0);
    }
  };

  // Header
  doc.setFontSize(headerFontSize);
  doc.setFont(undefined, 'bold');
  const headerText = header;
  const headerY = 20;
  doc.text(headerText, pageWidth / 2, headerY, { align: 'center' });
  const textWidth = doc.getTextWidth(headerText);
  const underlineStartX = (pageWidth - textWidth) / 2 - 2;
  const underlineEndX = (pageWidth + textWidth) / 2 + 2;
  doc.setLineWidth(0.5);
  doc.line(underlineStartX, headerY + 2, underlineEndX, headerY + 2);

  let currentY = headerY + headerToUpperBoxSpace;
  if (upperBoxContent.length > 0) {
    const rowHeight = 6;
    const numberOfRows = Math.ceil(upperBoxContent.length / 2 + 1);
    const boxHeight = numberOfRows * rowHeight;
    const leftColumnX = 20;
    const rightColumnX = pageWidth / 2 + 6;
    checkPageOverflow(boxHeight + upperBoxToResolveSummarySpace);
    doc.rect(14, currentY, pageWidth - 28, boxHeight);
    doc.line(pageWidth / 2, currentY, pageWidth / 2, currentY + boxHeight);
    doc.setFontSize(boxFontSize);
    doc.setFont(undefined, 'bold');
    upperBoxContent.forEach((item, index) => {
      const rowIndex = Math.floor(index / 2);
      const isLeftColumn = index % 2 === 0;
      const yOffset = currentY + boxPadding + (rowIndex * rowHeight);
      const xOffset = isLeftColumn ? leftColumnX : rightColumnX;
      drawText(item.label, item.value, xOffset, yOffset);
    });
    currentY += boxHeight + upperBoxToResolveSummarySpace;
  }

  // Resolve Summary with consistent font size
  if (resolveSummary.length > 0) {
    const resolveSummaryText = 'Resolve Summary';
    const rowHeight = 6;
    const numberOfRows = Math.ceil(resolveSummary.length / 2 + 1);
    const boxHeight = numberOfRows * rowHeight;
    const leftColumnX = 20;
    const rightColumnX = pageWidth / 2 + 6;

    // Title for Resolve Summary
    doc.setFontSize(boxFontSize);
    doc.setFont(undefined, 'bold');
    doc.text(resolveSummaryText, pageWidth / 2, currentY, { align: 'center' });
    currentY += 7;

    // Resolve Summary Box
    checkPageOverflow(boxHeight + resolveSummaryToParticularsSpace);
    doc.rect(14, currentY, pageWidth - 28, boxHeight);
    doc.line(pageWidth / 2, currentY, pageWidth / 2, currentY + boxHeight);

    resolveSummary.forEach((item, index) => {
      const rowIndex = Math.floor(index / 2);
      const isLeftColumn = index % 2 === 0;
      const yOffset = currentY + boxPadding + (rowIndex * rowHeight);
      const xOffset = isLeftColumn ? leftColumnX : rightColumnX;
      drawText(item.label, item.value, xOffset, yOffset);
    });

    currentY += boxHeight + resolveSummaryToParticularsSpace;
  }

  // Particulars Section
  const particularsText = 'Particulars';
  checkPageOverflow(10);
  doc.setFontSize(boxFontSize);
  doc.setFont(undefined, 'bold');
  doc.text(particularsText, pageWidth / 2, currentY, { align: 'center' });
  currentY += particularsToTableSpace;

  // Table
  doc.autoTable({
    head: [tableHead],
    body: tableBody,
    startY: currentY,
    didDrawPage: () => {
      currentY = doc.autoTable.previous.finalY;
    },
  });

  currentY = doc.autoTable.previous.finalY + tableToSummarySpace;

  // Color Summary Section (New)
  if (colorSummaryTableHead.length > 0 && colorSummaryTableBody.length > 0) {
    const colorSummaryText = colorSummaryHeader;
    checkPageOverflow(10);
    doc.setFontSize(boxFontSize);
    doc.setFont(undefined, 'bold');
    doc.text(colorSummaryText, pageWidth / 2, currentY, { align: 'center' });
    currentY += tableToColorSummarySpace;

    // Color Summary Table
    doc.autoTable({
      head: [colorSummaryTableHead],
      body: colorSummaryTableBody,
      startY: currentY,
      styles: { fontSize: boxFontSize },
      didDrawPage: () => {
        currentY = doc.autoTable.previous.finalY;
      },
    });

    currentY = doc.autoTable.previous.finalY + tableToSummarySpace;
  }

  // Lower Box Content (Summary) with consistent font size
  if (lowerBoxContent.length > 0) {
    const summaryText = 'Summary';

    // Calculate box height before drawing
    const rowHeight = 6;
    const numberOfRows = Math.ceil(lowerBoxContent.length / 2 + 1);
    const boxHeight = numberOfRows * rowHeight;
    const leftColumnX = 20;
    const rightColumnX = pageWidth / 2 + 6;
    checkPageOverflow(boxHeight + 10);
    const pageHeight = doc.internal.pageSize.height;
    let currentY = doc.internal.cursorY || doc.lastAutoTable.finalY || doc.autoTable.previous.finalY;

    if (currentY + boxHeight + 10 > pageHeight) {
      doc.addPage();
      currentY = 20;
    }

    // Title of the Summary Section
    doc.setFontSize(boxFontSize);
    doc.setFont(undefined, 'bold');
    doc.text(summaryText, pageWidth / 2, currentY+5, { align: 'center' });
    currentY += summaryToLowerBoxSpace+2;

    // Draw the Summary box
    doc.rect(14, currentY, pageWidth - 28, boxHeight);
    doc.line(pageWidth / 2, currentY, pageWidth / 2, currentY + boxHeight);
    lowerBoxContent.forEach((item, index) => {
      const rowIndex = Math.floor(index / 2);
      const isLeftColumn = index % 2 === 0;
      const yOffset = currentY + boxPadding + (rowIndex * rowHeight);
      const xOffset = isLeftColumn ? leftColumnX : rightColumnX;
      drawText(item.label, item.value, xOffset, yOffset);
    });
    currentY += boxHeight;
  }
  // Save the 
  window.open(doc.output('bloburl'));
  // doc.save(`${fileName}.pdf`);
};
