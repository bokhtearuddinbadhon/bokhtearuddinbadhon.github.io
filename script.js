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
// ঘনত্ব বাড়ানোর জন্য আইটেমের সংখ্যা আরও বাড়ানো হলো
const itemCount = Math.floor((canvas.width * canvas.height) / 5000); 

for (let i = 0; i < itemCount; i++) {
  items.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    symbol: mechSymbols[Math.floor(Math.random() * mechSymbols.length)],
    fontSize: Math.random() * 18 + 18, // সাইজ আরেকটু বড় করা হলো
    rotation: Math.random() * Math.PI * 2,
    rotSpeed: (Math.random() - 0.5) * 0.006 // ঘূর্ণন গতি কিছুটা বাড়ানো হলো
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // আপনার পোর্টফোলিও থিমের সাথে মিলিয়ে একেবারে উজ্জ্বল অ্যাম্বার গোল্ড (#f59e0b) কালার
  ctx.fillStyle = '#f59e0b'; 

  items.forEach(item => {
    ctx.save();
    ctx.translate(item.x, item.y);
    ctx.rotate(item.rotation);
    ctx.font = `bold ${item.fontSize}px sans-serif`; 
    
    // স্বচ্ছতা বা Opacity ০.৬৫ থেকে বাড়িয়ে ০.৮৫ করা হলো (খুবই কম স্বচ্ছ, প্রায় পুরোপুরি স্পষ্ট)
    ctx.globalAlpha = 0.85; 
    
    ctx.fillText(item.symbol, 0, 0);
    ctx.restore();

    item.rotation += item.rotSpeed;
  });

  requestAnimationFrame(draw);
}

// অ্যানিমেশন লুপ চালু করা হলো
draw();
