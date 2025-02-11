// getCardStyle.js
export function getCardStyle(size, ratio) {
    let aspectClass = "";
    if (ratio === "portrait") aspectClass = "aspect-portrait";
    if (ratio === "landscape") aspectClass = "aspect-landscape";
    if (ratio === "square") aspectClass = "aspect-square";
  
    return `card-container ${aspectClass}`;
  }
  