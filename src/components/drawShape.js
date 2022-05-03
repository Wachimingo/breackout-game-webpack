export const drawShape = (color, ctx, ...args) => {
    ctx.beginPath();
    ctx.arc(...args);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}