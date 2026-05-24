function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('Dark Stores Capacity Model')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function exportToCSV(data) {
  if (!data || data.length === 0) return "No data to export";
  const headers = ['Dark Store Name','Asset Type','Asset Count','Total Max Capacity','Utilization %','Demand Share %','Capacity Share %','Efficiency Ratio','Recommendation','Reason'];
  const csvRows = [headers.join(',')];
  for (const row of data) {
    const csvRow = [
      `"${row.fpName}"`,
      `"${row.assetType}"`,
      row.assetCount,
      row.totalMaxCapacity,
      row.utilization,
      (row.demandShare * 100).toFixed(1),
      (row.capacityShare * 100).toFixed(1),
      row.efficiencyRatio.toFixed(2),
      `"${row.recommendation}"`,
      `"${row.reason.replace(/"/g, '""')}"`
    ];
    csvRows.push(csvRow.join(','));
  }
  return csvRows.join('\n');
}
