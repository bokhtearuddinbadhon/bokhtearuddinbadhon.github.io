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
// ঘনত্ব কমিয়ে আগের অবস্থায় ফিরিয়ে আনা হলো (reduced density for spacing)
// আইটেমের সংখ্যা নির্ধারণে ভাজক ৪০০০ থেকে বাড়িয়ে ৮০০০ করা হলো
const itemCount = Math.floor((canvas.width * canvas.height) / 8000); 

for (let i = 0; i < itemCount; i++) {
  items.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    symbol: mechSymbols[Math.floor(Math.random() * mechSymbols.length)],
    // সাইজ কমিয়ে আগের অবস্থায় ফিরিয়ে আনা হলো (smaller size)
    fontSize: Math.random() * 14 + 14, 
    rotation: Math.random() * Math.PI * 2,
    rotSpeed: (Math.random() - 0.5) * 0.005
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // আগের উজ্জ্বল অ্যাম্বার গোল্ড (#f59e0b) কালার ব্যবহার করা হলো
  ctx.fillStyle = '#f59e0b'; 

  items.forEach(item => {
    ctx.save();
    ctx.translate(item.x, item.y);
    ctx.rotate(item.rotation);
    ctx.font = `bold ${item.fontSize}px sans-serif`; 
    
    // স্বচ্ছতা (Opacity) ০.৩৫ থেকে বাড়িয়ে ০.৫৫ করা হলো 
    // যাতে ফাঁকা ফাঁকা ভাব থাকে কিন্তু আইকনগুলো লো-ব্রাইটনেসেও একটু বেশি স্পষ্ট হয়
    ctx.globalAlpha = 0.55; 
    
    ctx.fillText(item.symbol, 0, 0);
    ctx.restore();

    item.rotation += item.rotSpeed;
  });

  requestAnimationFrame(draw);
}

// অ্যানিমেশন লুপ চালু করা হলো
draw();
