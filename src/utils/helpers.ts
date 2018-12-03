export function getFontFace(
  name: string,
  src: string,
  fontStyle: string = 'normal',
  fontWeight: number = 400
): string {
  return `
    @font-face {
      font-family: ${name};
      src: url("/static/fonts/${src}.eot");
      src: url("/static/fonts/${src}.eot?#iefix") format("embedded-opentype"),
        url("/static/fonts/${src}.woff") format("woff"),
        url("/static/fonts/${src}.ttf") format("truetype"),
        url("/static/fonts/${src}.svg#${name}") format("svg");
      font-weight: ${fontWeight};
      font-style: ${fontStyle};
    }
  `;
}
