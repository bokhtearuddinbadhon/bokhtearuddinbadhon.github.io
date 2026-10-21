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
// একদম প্রথমবারের মতো একদম পারফেক্ট ফাঁকা বা স্পেসিং ফিরিয়ে আনা হলো (৮০০০ দিয়ে ভাগ)
const itemCount = Math.floor((canvas.width * canvas.height) / 8000); 

for (let i = 0; i < itemCount; i++) {
  items.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    symbol: mechSymbols[Math.floor(Math.random() * mechSymbols.length)],
    // একদম প্রথমবারের সাইজ ফিরিয়ে আনা হলো
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
    
    // একদম প্রথমবার ছিল ০.৩৫, সেখান থেকে সামান্য একটু বাড়িয়ে 0.45 করা হলো 
    // যাতে লেখাগুলো কোনোভাবেই ঢাকা না পড়ে এবং ঘিজিবিজি না লাগে, 
    // অথচ লো-ব্রাইটনেসেও যেন খুব হালকা ও সাবলীলভাবে আইকনগুলো দৃশ্যমান হয়।
    ctx.globalAlpha = 0.45; 
    
    ctx.fillText(item.symbol, 0, 0);
    ctx.restore();

    item.rotation += item.rotSpeed;
  });

  requestAnimationFrame(draw);
}

// অ্যানিমেশন লুপ চালু করা হলো
draw();
