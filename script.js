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
// একদম প্রথমবার যেমন ফাঁকা ফাঁকা ও গোছানো ছিল, সেটাই রাখা হলো (৮০০০ দিয়ে ভাগ)
const itemCount = Math.floor((canvas.width * canvas.height) / 8000); 

for (let i = 0; i < itemCount; i++) {
  items.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    symbol: mechSymbols[Math.floor(Math.random() * mechSymbols.length)],
    // একদম প্রথমবারের মতো স্বাভাবিক সাইজ
    fontSize: Math.random() * 14 + 14, 
    rotation: Math.random() * Math.PI * 2,
    rotSpeed: (Math.random() - 0.5) * 0.005
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // আসল অ্যাম্বার গোল্ড কালার
  ctx.fillStyle = '#f59e0b'; 

  items.forEach(item => {
    ctx.save();
    ctx.translate(item.x, item.y);
    ctx.rotate(item.rotation);
    ctx.font = `bold ${item.fontSize}px sans-serif`; 
    
    // স্বচ্ছতা বা Opacity কমিয়ে একদম হালকা ও ব্যাকগ্রাউন্ডমুখী করা হলো (0.38)
    // যাতে মূল লেখা, নাম বা এবাউট সেকশনই ফোকাসে থাকে এবং ব্যাকগ্রাউন্ড একদম বিরক্তিকর না লাগে।
    ctx.globalAlpha = 0.38; 
    
    ctx.fillText(item.symbol, 0, 0);
    ctx.restore();

    item.rotation += item.rotSpeed;
  });

  requestAnimationFrame(draw);
}

// অ্যানিমেশন লুপ চালু করা হলো
draw();
