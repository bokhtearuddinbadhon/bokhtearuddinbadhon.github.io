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
    "Fusion 360": "fusion-360.html",
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
   const FORMSPREE_ENDPOINT = 'xeaappnp';
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

const ENGINEERING_PROJECTS = [
  {
    title: "The Aerovent",
    category: "HVAC & Thermal Fluids",
    image: "aerovent.webp",
    icon: "fa-solid fa-wind",
    description: "Co-developed a low-cost, modular heat-recovery ventilation unit with a ceramic core for low-income households in Ladywood, Birmingham to combat fuel poverty.",
    skills: ["HVAC", "Thermal-Fluids", "Prototyping"],
    caseStudyUrl: "aerovent.html"
  },
  {
    title: "The Slider Support Project",
    category: "Rigid-Body Statics & CAD",
    image: "slider-support.webp",
    icon: "fa-solid fa-arrows-left-right",
    description: "Designed and physically evaluated a 3D-printed guided collar assembly under eccentric static loads to demonstrate rigid-body statics and degrees of freedom.",
    skills: ["Fusion 360 CAD", "Rigid-Body Statics", "FDM 3D Printing", "Kinematics"],
    caseStudyUrl: "slider-support.html"
  },
  {
    title: "Whistle Manufacturing",
    category: "Precision Workshop Machining",
    image: "whistle-manufacturing.webp",
    icon: "fa-solid fa-wrench",
    description: "Executed precision workshop machining operations using aluminium stock. Managed turning, facing, boring, and vertical milling steps for strict quality inspection.",
    skills: ["Machining", "Lathe", "Vertical Milling", "Metrology"],
    caseStudyUrl: "whistle-manufacturing.html"
  },
  {
    title: "Wind Turbine Performance Study",
    category: "Aerodynamics & Energy",
    image: "wind-turbine.webp",
    icon: "fa-solid fa-wind",
    description: "Conducted laboratory testing using the Armfield RE12 system to evaluate energy conversion, Betz efficiency, and wake deceleration between HAWT and Savonius VAWT rotors.",
    skills: ["Aerodynamics", "Armfield RE12", "HAWT vs VAWT", "Energy Balance"],
    caseStudyUrl: "wind-turbine.html"
  },
  {
    title: "StreetVault: Underground Hydraulic Parking",
    category: "Fluid Power & Hydraulics",
    image: "streetvault.webp",
    icon: "fa-solid fa-car-tunnel",
    description: "Engineered an underground multi-layer vehicle parking vault actuated by synchronized hydraulics to eliminate residential street congestion across dense London boroughs.",
    skills: ["Fluid Power", "Hydraulics", "Fusion 360", "Urban Design"],
    caseStudyUrl: "street-vault.html"
  },
  {
    title: "DC & AC Circuit Analysis",
    category: "Electrical Metrology",
    image: "dc-and-ac-circuits.webp",
    icon: "fa-solid fa-bolt",
    description: "Conducted physical bench testing across 5 laboratory experiments covering Ohm's law, KVL/KCL network validation, Thévenin/Norton equivalents, DSO waveforms, and ferrite-core coil impedance.",
    skills: ["Circuit Analysis", "Oscilloscope", "Thévenin & Norton", "LCR Metrology"],
    caseStudyUrl: "circuit-analysis.html"
  },
  {
    title: "Venturi Flow Analysis & Bernoulli Experiment",
    category: "Fluid Mechanics",
    image: "venturi-flow.webp",
    icon: "fa-solid fa-water",
    description: "Conducted fluid mechanics laboratory investigations (C1 & C2) comparing converging-diverging Venturi meters and sharp-edged orifice plates to quantify pressure recovery and discharge coefficients.",
    skills: ["Fluid Mechanics", "Bernoulli's Principle", "TecQuipment", "MATLAB"],
    caseStudyUrl: "venturi-flow.html"
  },
  {
    title: "Applied Computer Programming & Numerical Methods",
    category: "Computational Engineering",
    image: "computer-programming.webp",
    icon: "fa-solid fa-code",
    description: "Developed computational C++ engineering solutions covering thermodynamic heat energy formulations, Monte Carlo spatial probability, iterative π convergence, and object-oriented class architectures.",
    skills: ["C++", "Numerical Methods", "Monte Carlo", "OOP"],
    caseStudyUrl: "computer-programming.html"
  },
  {
    title: "Mild Steel Tensile Testing & Materials Mechanics",
    category: "Materials & Solid Mechanics",
    image: "tensile-testing.webp",
    icon: "fa-solid fa-atom",
    description: "Conducted experimental uniaxial tensile testing using a Universal Testing Machine (UTM) and extensometer to analyze Hookean elasticity, yield transitions, strain hardening, necking, and ductile fracture morphology.",
    skills: ["Materials Testing", "UTM Tensile", "Hooke's Law", "Fracture Mechanics"],
    caseStudyUrl: "tensile-testing.html"
  },
  {
    title: "Initial Hook Design: Static-Stress Analysis",
    category: "FEA & Static Stress",
    image: "hook-fea-stress.jpeg",
    icon: "fa-solid fa-cube",
    description: "Modelled an initial mild-steel hook in Autodesk Fusion 360 and evaluated one coursework static load case. The recorded maximum von Mises stress was 71.261 MPa and the minimum factor of safety was 2.905 against a target of 2.00.",
    skills: ["Fusion 360", "Linear Static FEA", "Von Mises Stress", "Factor of Safety"],
    caseStudyUrl: "hook-fea.html"
  }
];

function render3DProjectCards() {
  const container = document.getElementById('featured-projects-grid');
  if (!container) return;

  const cardsHtml = ENGINEERING_PROJECTS.map(proj => {
    const isExternal = proj.caseStudyUrl.startsWith('http');
    const targetAttr = isExternal ? 'target="_blank" rel="noopener noreferrer"' : '';

    const imageMarkup = proj.image ? `
      <img src="${proj.image}" alt="${proj.title}" class="mech-thumb-img" loading="lazy">
    ` : `
      <div class="mech-thumb-placeholder">
        <i class="${proj.icon}"></i>
        <span class="mech-placeholder-text">// ${proj.category.toUpperCase()}</span>
      </div>
    `;

    const tagsMarkup = proj.skills.map(tag => `
      <span class="mech-tech-tag">${tag}</span>
    `).join('');

    return `
      <div class="mech-card-wrapper" tabindex="0" role="article" aria-label="${proj.title}">
        <div class="mech-card-frame">
          <span class="mech-bolt top-left"></span>
          <span class="mech-bolt top-right"></span>
          <span class="mech-bolt bottom-left"></span>
          <span class="mech-bolt bottom-right"></span>
          <span class="mech-card-led"></span>

          <div class="mech-visual-box">
            ${imageMarkup}
            <div class="mech-scanline"></div>
          </div>

          <div class="mech-header-row">
            <i class="${proj.icon} mech-project-icon"></i>
            <h3 class="mech-project-title">
              <a href="${proj.caseStudyUrl}" ${targetAttr}>${proj.title}</a>
            </h3>
          </div>

          <p class="mech-project-desc">${proj.description}</p>

          <div class="mech-tech-tags">
            ${tagsMarkup}
          </div>

          <div class="mech-action-wrap">
            <a href="${proj.caseStudyUrl}" ${targetAttr} class="mech-case-study-btn">
              <span>View Full Case Study &amp; Data</span>
              <span class="mech-btn-arrow">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    `;
  }).join('');

  container.innerHTML = cardsHtml;
  init3DCardTilt();
}

function init3DCardTilt() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isPointerFine = window.matchMedia('(pointer: fine)').matches;

  if (prefersReduced || !isPointerFine) return;

  const cardWrappers = document.querySelectorAll('.mech-card-wrapper');
  cardWrappers.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-5px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
  });
}

// Automatically mount cards when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', render3DProjectCards);
} else {
  render3DProjectCards();
}
