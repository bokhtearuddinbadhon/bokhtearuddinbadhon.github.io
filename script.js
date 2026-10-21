const canvas = document.getElementById('mech-background');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// মেকানিক্যাল সিম্বল বা আইকনসমূহ
const mechSymbols = ['⚙', '🔩', '🔧', '🛠', '⚙️', '📐'];
const items = [];
const itemCount = Math.floor((canvas.width * canvas.height) / 8000);

for (let i = 0; i < itemCount; i++) {
  items.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    symbol: mechSymbols[Math.floor(Math.random() * mechSymbols.length)],
    fontSize: Math.random() * 14 + 14,
    opacity: Math.random() * 0.7 + 0.3,
    rotation: Math.random() * Math.PI * 2,
    rotSpeed: (Math.random() - 0.5) * 0.005
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#f39c12';

  items.forEach(item => {
    ctx.save();
    ctx.translate(item.x, item.y);
    ctx.rotate(item.rotation);
    ctx.font = `bold ${item.fontSize + 4}px sans-serif`; 
    ctx.globalAlpha = 0.35; 
    ctx.fillText(item.symbol, 0, 0);
    ctx.restore();

    item.rotation += item.rotSpeed;
  });

  requestAnimationFrame(draw);
}

// অ্যানিমেশন লুপ চালু করার জন্য ড্র ফাংশনটি কল করা হলো
draw();

