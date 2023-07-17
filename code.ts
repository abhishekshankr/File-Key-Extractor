// This shows the HTML page in "ui.html".
figma.showUI(__html__, {width: 300, height: 360});

figma.ui.onmessage = (msg) => {
  if (msg.type === 'parse-url') {
    const fileKey = extractFileKey(msg.url);
    const nodeId = extractNodeId(msg.url);
    figma.ui.postMessage({ type: 'url-parsed', fileKey, nodeId });
  }
};

function extractFileKey(url: string): string | null {
  const match = url.match(/file\/([^\/]+)\//) || url.match(/proto\/([^\/]+)\//);
  return match ? match[1] :  null;
}

function extractNodeId(url: string): string | null {
  const match = url.match(/node-id=([^&]+)/);
  return match ? match[1] : null;
}
