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
// ঘনত্ব বাড়ানোর জন্য আইটেমের সংখ্যা আরও বাড়ানো হলো (density increases)
const itemCount = Math.floor((canvas.width * canvas.height) / 4000); 

for (let i = 0; i < itemCount; i++) {
  items.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    symbol: mechSymbols[Math.floor(Math.random() * mechSymbols.length)],
    // সাইজ অনেক বড় করা হলো যাতে লো-ব্রাইটনেসেও সহজে দেখা যায়
    fontSize: Math.random() * 24 + 20, 
    rotation: Math.random() * Math.PI * 2,
    rotSpeed: (Math.random() - 0.5) * 0.007 // ঘূর্ণন গতি কিছুটা বাড়ানো হলো
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // আপনার পোর্টফোলিও থিমের সাথে মিলিয়ে উজ্জ্বল অ্যাম্বার গোল্ড (#f59e0b) কালার
  ctx.fillStyle = '#f59e0b'; 

  items.forEach(item => {
    ctx.save();
    ctx.translate(item.x, item.y);
    ctx.rotate(item.rotation);
    ctx.font = `bold ${item.fontSize}px sans-serif`; 
    
    // স্বচ্ছতা বা Opacity একদম ০.৯৫ করা হলো (প্রায় পুরোপুরি স্পষ্ট ও উজ্জ্বল)
    ctx.globalAlpha = 0.95; 
    
    // টেক্সট ফিল করার পর আমরা তার উপর আবার স্টোক (বর্ডার) দিব যাতে উজ্জ্বলতা বাড়ে
    ctx.fillText(item.symbol, 0, 0);

    // ১ পিক্সেল চওড়া উজ্জ্বল অ্যাম্বার গোল্ড স্টোক (বর্ডার) দেওয়া হলো
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#f59e0b'; // একই রঙ ব্যবহার করা হলো যাতে উজ্জ্বলতা বাড়ে
    ctx.strokeText(item.symbol, 0, 0);

    ctx.restore();

    item.rotation += item.rotSpeed;
  });

  requestAnimationFrame(draw);
}

// অ্যানিমেশন লুপ চালু করা হলো
draw();
