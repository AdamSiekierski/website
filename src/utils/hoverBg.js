export function hoverBg(bg) {
  return bg.replace(/#....../g, (str) => `${str}DD`);
}
