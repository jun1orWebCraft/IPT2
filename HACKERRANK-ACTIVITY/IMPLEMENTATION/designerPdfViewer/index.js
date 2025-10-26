function designerPdfViewer(h, word) {
  // Find the tallest letter in the word
  let maxHeight = 0;
  for (let ch of word) {
    let idx = ch.charCodeAt(0) - 97;
    if (h[idx] > maxHeight) {
      maxHeight = h[idx];
    }
  }
  // Area is tallest letter height * word length
  return maxHeight * word.length;
}