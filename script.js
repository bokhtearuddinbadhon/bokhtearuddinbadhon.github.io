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
// ঘনত্ব বাড়ানোর জন্য আইটেমের সংখ্যা আরেকটু বাড়ানো হলো (increase density for clarity)
const itemCount = Math.floor((canvas.width * canvas.height) / 3500); 

for (let i = 0; i < itemCount; i++) {
  items.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    symbol: mechSymbols[Math.floor(Math.random() * mechSymbols.length)],
    // আকার আরেকটু বড় করা হলো যাতে লো-ব্রাইটনেসেও সহজে দেখা যায়
    fontSize: Math.random() * 26 + 22, 
    rotation: Math.random() * Math.PI * 2,
    rotSpeed: (Math.random() - 0.5) * 0.007 // ঘূর্ণন গতি ঠিক রাখা হলো
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  items.forEach(item => {
    ctx.save();
    ctx.translate(item.x, item.y);
    ctx.rotate(item.rotation);
    ctx.font = `bold ${item.fontSize}px sans-serif`; 
    
    // স্বচ্ছতা বা Opacity পুরোপুরি ১.০ (অর্থাৎ ১০০% স্পষ্ট এবং উজ্জ্বল)
    ctx.globalAlpha = 1.0; 

    // লো-ব্রাইটনেসে বা গাঢ় ব্যাকগ্রাউন্ডে স্পষ্ট দেখতে হালকা অ্যাম্বার কালার ব্যবহার করা হলো
    // (উজ্জ্বল অ্যাম্বার গোল্ড #f59e0b থেকে উজ্জ্বল হলুদ #ffcc00 তে পরিবর্তন)
    // এটি কনট্রাস্ট বা উজ্জ্বলতা বাড়াতে সাহায্য করবে।
    ctx.fillStyle = '#ffcc00'; 
    
    // টেক্সট ফিল করার পর আমরা তার উপর আবার স্টোক (বর্ডার) দিব যাতে উজ্জ্বলতা বাড়ে
    ctx.fillText(item.symbol, 0, 0);

    // ১.৫ পিক্সেল চওড়া হালকা অ্যাম্বার গোল্ড স্টোক (বর্ডার) দেওয়া হলো
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = '#ffcc00'; // একই হালকা রঙ ব্যবহার করা হলো
    ctx.strokeText(item.symbol, 0, 0);

    ctx.restore();

    item.rotation += item.rotSpeed;
  });

  requestAnimationFrame(draw);
}

// অ্যানিমেশন লুপ চালু করা হলো
draw();
