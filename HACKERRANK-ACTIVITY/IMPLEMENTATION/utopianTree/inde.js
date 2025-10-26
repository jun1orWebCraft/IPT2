function utopianTree(n) {
  let height = 1;
  for (let cycle = 1; cycle <= n; cycle++) {
    height = cycle % 2 === 1 ? height * 2 : height + 1;
  }
  return height;
}