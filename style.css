:root {
    --bg-dark: #0a0d14;
    --card-bg: rgba(16, 22, 34, 0.85);
    --primary: #f59e0b; /* Engineering Amber Gold */
    --accent: #38bdf8;  /* Technical Blue */
    --text-main: #f3f4f6;
    --text-muted: #9ca3af;
    --border-color: rgba(245, 158, 11, 0.2);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    scroll-behavior: smooth;
}

body {
    background-color: var(--bg-dark);
    color: var(--text-main);
    overflow-x: hidden;
    position: relative;
}

#bgCanvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
}

/* Navbar */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 8%;
    background: rgba(10, 13, 20, 0.9);
    backdrop-filter: blur(10px);
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
    border-bottom: 1px solid var(--border-color);
}

.logo {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text-main);
}

.logo span { color: var(--primary); }

.nav-links {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-links a {
    color: var(--text-muted);
    text-decoration: none;
    transition: 0.3s;
}

.nav-links a:hover { color: var(--primary); }

/* Hero Section */
.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: 0 10%;
    margin-top: 2rem;
}

.badge {
    background: rgba(245, 158, 11, 0.1);
    color: var(--primary);
    padding: 0.4rem 1rem;
    border-radius: 20px;
    border: 1px solid var(--primary);
    font-size: 0.9rem;
}

.hero h1 {
    font-size: 3.5rem;
    margin: 1rem 0;
}

.hero h1 span { color: var(--primary); }

.hero h2 {
    color: var(--accent);
    font-size: 1.5rem;
    font-weight: 400;
    margin-bottom: 1.5rem;
}

.hero p {
    color: var(--text-muted);
    max-width: 600px;
    line-height: 1.6;
    margin-bottom: 2rem;
}

.hero-btns { display: flex; gap: 1rem; }

.btn {
    padding: 0.8rem 1.8rem;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 600;
    transition: 0.3s;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
}

.primary-btn {
    background: var(--primary);
    color: #000;
}

.primary-btn:hover { background: #d97706; }

.secondary-btn {
    border: 1px solid var(--border-color);
    color: var(--text-main);
}

.secondary-btn:hover { background: rgba(255, 255, 255, 0.05); }

/* General Section */
.section {
    padding: 6rem 10%;
}

.section-title {
    font-size: 2rem;
    margin-bottom: 3rem;
    color: var(--text-main);
}

.section-title span { color: var(--primary); }

/* Cards & Grid */
.about-grid, .project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
}

.about-card, .project-card, .skill-category {
    background: var(--card-bg);
    border: 1px solid var(--border-color);
    padding: 2rem;
    border-radius: 12px;
    transition: transform 0.3s, border-color 0.3s;
}

.about-card:hover, .project-card:hover {
    transform: translateY(-5px);
    border-color: var(--primary);
}

.card-icon, .project-icon {
    font-size: 2rem;
    color: var(--primary);
    margin-bottom: 1rem;
}

/* Timeline */
.timeline {
    border-left: 2px solid var(--primary);
    padding-left: 2rem;
}

.timeline-item {
    position: relative;
    margin-bottom: 2.5rem;
}

.timeline-dot {
    position: absolute;
    left: -2.55rem;
    top: 5px;
    width: 15px;
    height: 15px;
    background: var(--primary);
    border-radius: 50%;
}

.timeline-content h3 { color: var(--accent); }
.timeline-content h4 { color: var(--text-muted); font-size: 0.9rem; margin-bottom: 0.5rem; }

/* Tags */
.tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1rem;
}

.tags span, .project-tech span {
    background: rgba(56, 189, 248, 0.1);
    color: var(--accent);
    padding: 0.3rem 0.8rem;
    border-radius: 4px;
    font-size: 0.85rem;
}

/* Contact & Footer */
.contact-card {
    text-align: center;
    background: var(--card-bg);
    padding: 3rem;
    border-radius: 12px;
    border: 1px solid var(--border-color);
}

.contact-details p { margin: 1rem 0; color: var(--text-muted); }
.social-icons { font-size: 1.8rem; margin: 1.5rem 0; }
.social-icons a { color: var(--text-main); margin: 0 10px; transition: 0.3s; }
.social-icons a:hover { color: var(--primary); }

footer {
    text-align: center;
    padding: 2rem;
    color: var(--text-muted);
    font-size: 0.9rem;
    border-top: 1px solid var(--border-color);
}

@media (max-width: 768px) {
    .hero h1 { font-size: 2.5rem; }
    .nav-links { display: none; }
}
