export function redrawChart(canvas: HTMLCanvasElement,
                     data: [number, number][],
                     image: HTMLImageElement): void {
  const context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);
  data.forEach(([x, y]) => {
    context.drawImage(
      image,
      x * canvas.width - image.width / 2,
      y * canvas.height - image.height / 2
    );
  });
}