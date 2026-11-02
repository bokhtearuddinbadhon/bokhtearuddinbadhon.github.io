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
/* =========================================================
   3D PRECISION ENGINEERING PANELS & SKILL MODAL LOGIC
   ========================================================= */

// URL Routing Map: Replace null with your dedicated page URLs when ready
const SKILL_PAGE_ROUTES = {
    "Fusion 360": null,             // e.g. "skills/fusion-360.html"
    "2D Drafting": null,            // e.g. "skills/drafting.html"
    "ANSYS FEA": null,              // e.g. "skills/ansys-fea.html"
    "Parametric Design": null,      // e.g. "skills/parametric-design.html"
    "MATLAB": null,                 // e.g. "skills/matlab.html"
    "Python": null,                 // e.g. "skills/python.html"
    "C++": null,                    // e.g. "skills/cpp.html"
    "Applied AI": null,             // e.g. "skills/applied-ai.html"
    "Automotive Diagnostics": null, // e.g. "skills/automotive-diagnostics.html"
    "Machining": null,              // e.g. "skills/machining.html"
    "Welding & Fabrication": null,  // e.g. "skills/welding-fabrication.html"
    "Industrial Maintenance": null, // e.g. "skills/industrial-maintenance.html"
    "Metrology": null               // e.g. "skills/metrology.html"
};

document.addEventListener('DOMContentLoaded', () => {
    // 1. Modal Elements
    const modalBackdrop = document.getElementById('skill-modal');
    const modalTitle = document.getElementById('modal-skill-title');
    const modalCategory = document.getElementById('modal-skill-category');
    const modalCloseBtn = document.getElementById('modal-close');
    const modalAckBtn = document.getElementById('modal-ack-btn');
    const skillButtons = document.querySelectorAll('.skill-btn');

    function openSkillModal(skillName, categoryName) {
        if (!modalBackdrop) return;
        if (modalTitle) modalTitle.textContent = skillName;
        if (modalCategory) modalCategory.textContent = categoryName;
        modalBackdrop.classList.add('is-active');
        modalBackdrop.setAttribute('aria-hidden', 'false');
        if (modalCloseBtn) modalCloseBtn.focus();
    }

    function closeSkillModal() {
        if (!modalBackdrop) return;
        modalBackdrop.classList.remove('is-active');
        modalBackdrop.setAttribute('aria-hidden', 'true');
    }

    skillButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const skill = btn.getAttribute('data-skill');
            const category = btn.getAttribute('data-category');
            
            // Check if a dedicated route exists
            if (SKILL_PAGE_ROUTES[skill]) {
                window.location.href = SKILL_PAGE_ROUTES[skill];
            } else {
                openSkillModal(skill, category);
            }
        });
    });

    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeSkillModal);
    if (modalAckBtn) modalAckBtn.addEventListener('click', closeSkillModal);

    if (modalBackdrop) {
        modalBackdrop.addEventListener('click', (e) => {
            if (e.target === modalBackdrop) closeSkillModal();
        });
    }

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalBackdrop && modalBackdrop.classList.contains('is-active')) {
            closeSkillModal();
        }
    });

    // 2. Subtle 3D Tilt Effect on Desktop Hover
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isPointerFine = window.matchMedia('(pointer: fine)').matches;

    if (!prefersReducedMotion && isPointerFine) {
        const panels = document.querySelectorAll('.tech-panel');

        panels.forEach(panel => {
            panel.addEventListener('mousemove', (e) => {
                const rect = panel.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                // Controlled tilt angles (max +/- 7 degrees)
                const rotateX = ((y - centerY) / centerY) * -7;
                const rotateY = ((x - centerX) / centerX) * 7;
                
                panel.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
            });

            panel.addEventListener('mouseleave', () => {
                panel.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
            });
        });
    }
});

const copyEmailBtn = document.getElementById('copyEmailBtn');
if (copyEmailBtn) {
  copyEmailBtn.addEventListener('click', async () => {
    const emailToCopy = 'bokhtearuddinbadhon@gmail.com';
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(emailToCopy);
      } else {
        const tempTextArea = document.createElement('textarea');
        tempTextArea.value = emailToCopy;
        tempTextArea.style.position = 'fixed';
        tempTextArea.style.left = '-9999px';
        document.body.appendChild(tempTextArea);
        tempTextArea.focus();
        tempTextArea.select();
        document.execCommand('copy');
        document.body.removeChild(tempTextArea);
      }
      const icon = copyEmailBtn.querySelector('i');
      if (icon) {
        icon.className = 'fa-solid fa-check';
        copyEmailBtn.style.borderColor = '#22c55e';
        copyEmailBtn.style.color = '#22c55e';
        setTimeout(() => {
          icon.className = 'fa-regular fa-clone';
          copyEmailBtn.style.borderColor = '';
          copyEmailBtn.style.color = '';
        }, 2200);
      }
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  });
}

// 2. Real Email Formspree Delivery Engine
const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const submitBtnText = document.getElementById('submitBtnText');
const formStatus = document.getElementById('formStatus');

if (contactForm && submitBtn && formStatus) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Check honeypot for bot protection
    const honeypot = contactForm.querySelector('input[name="_gotcha"]');
    if (honeypot && honeypot.value.trim() !== '') {
      return;
    }

    const nameInput = document.getElementById('senderName');
    const emailInput = document.getElementById('senderEmail');
    const subjectInput = document.getElementById('msgSubject');
    const messageInput = document.getElementById('senderMessage');

    const name = nameInput ? nameInput.value.trim() : '';
    const email = emailInput ? emailInput.value.trim() : '';
    const subject = subjectInput ? subjectInput.value.trim() : '';
    const message = messageInput ? messageInput.value.trim() : '';

    // Validation checks
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name || !email || !subject || !message) {
      formStatus.textContent = 'Please fill out all fields before sending.';
      formStatus.className = 'form-status is-error';
      return;
    }

    if (!emailRegex.test(email)) {
      formStatus.textContent = 'Please enter a valid email address.';
      formStatus.className = 'form-status is-error';
      return;
    }

    // Loading State
    submitBtn.disabled = true;
    if (submitBtnText) submitBtnText.textContent = 'Transmitting Message...';
    formStatus.textContent = 'Transmitting your message to Bokhtear Uddin Badhon...';
    formStatus.className = 'form-status';

    // FORMSPREE ENDPOINT SETUP
    const FORMSPREE_ENDPOINT = 'PASTE_YOUR_FORMSPREE_ID_HERE';

    if (FORMSPREE_ENDPOINT === 'PASTE_YOUR_FORMSPREE_ID_HERE') {
      submitBtn.disabled = false;
      if (submitBtnText) submitBtnText.textContent = 'Send Message';
      formStatus.textContent = 'Formspree endpoint pending. Connect your form ID in script.js to deliver messages.';
      formStatus.className = 'form-status is-error';
      return;
    }

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ENDPOINT}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          _replyto: email,
          subject: subject,
          message: message
        })
      });

      if (response.ok) {
        formStatus.textContent = 'Message delivered successfully! Thank you for getting in touch.';
        formStatus.className = 'form-status is-success';
        contactForm.reset();
        setTimeout(() => {
          formStatus.textContent = '';
          formStatus.className = 'form-status';
        }, 6000);
      } else {
        const errorData = await response.json().catch(() => ({}));
        let errorMsg = 'Failed to deliver message. Please reach out directly via bokhtearuddinbadhon@gmail.com.';
        if (errorData && errorData.errors && errorData.errors.length > 0) {
          errorMsg = errorData.errors.map(err => err.message).join(' ');
        }
        formStatus.textContent = errorMsg;
        formStatus.className = 'form-status is-error';
      }
    } catch (networkError) {
      formStatus.textContent = 'Network communication error. Please try again or email directly.';
      formStatus.className = 'form-status is-error';
    } finally {
      submitBtn.disabled = false;
      if (submitBtnText) submitBtnText.textContent = 'Send Message';
    }
  });
}
