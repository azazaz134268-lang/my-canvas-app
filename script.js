const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

let drawing = false;

canvas.addEventListener("touchstart", e => {
  drawing = true;
  ctx.beginPath();
  const t = e.touches[0];
  ctx.moveTo(t.clientX, t.clientY);
});

canvas.addEventListener("touchmove", e => {
  if (!drawing) return;
  const t = e.touches[0];
  ctx.lineTo(t.clientX, t.clientY);
  ctx.strokeStyle = "lime";
  ctx.lineWidth = 4;
  ctx.lineCap = "round";
  ctx.stroke();
});

canvas.addEventListener("touchend", () => {
  drawing = false;
});
