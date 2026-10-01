# Vivek Chittibothula — Portfolio

> **Full-stack developer · CSE Data Science**<br>
> Building useful software with clean interfaces, reliable systems, and practical AI.

[![Portfolio URL](https://img.shields.io/badge/Portfolio-Visit%20Site-111111?style=for-the-badge)](https://vivek-ch-portfolio.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-VivekChittibothula-111111?style=for-the-badge&logo=github)](https://github.com/VivekChittibothula)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Vivek%20Chittibothula-111111?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/vivekchittibothula)

---

## Overview

This repository contains my personal developer portfolio — a lightweight, responsive web experience designed to showcase the software I build, the technologies I work with, and the problems I enjoy solving.

The portfolio intentionally avoids unnecessary frameworks and dependencies. It is built from the browser fundamentals — **HTML, CSS, and JavaScript** — with a focus on performance, accessibility, responsive behavior, and thoughtful interaction design.

The visual direction follows a minimal product-oriented approach: strong typography, generous spacing, restrained surfaces, subtle motion, and interactions that serve a purpose rather than compete for attention.

### Design principles

- **Clarity over complexity**
- **Interaction with purpose**
- **Fast by default**
- **Responsive from the ground up**
- **Accessible wherever possible**
- **Minimal dependencies**
- **Content before decoration**

---

## Live

🌐 **Portfolio:**<br>
https://vivek-ch-portfolio.vercel.app/

The portfolio is deployed as a static site on **Vercel**.

---

## What you'll find

### About

A short introduction covering my background as a **Computer Science Engineering undergraduate specializing in Data Science**, along with my academic foundation in programming, databases, data structures, algorithms, and software development.

### Skills

A focused overview of the technologies I currently work with:

**Languages**

`Java` · `Python` · `SQL` · `JavaScript` · `HTML` · `CSS`

**Frontend**

`React.js` · `Next.js` · `TypeScript` · `Tailwind CSS`

**Backend & Data**

`Node.js` · `Express.js` · `MySQL` · `DBMS`

**AI / ML & Tools**

`Machine Learning` · `Computer Vision` · `Generative AI` · `RAG` · `Git` · `GitHub` · `Jupyter` · `Ollama`

### Selected Work

The portfolio highlights projects that represent different areas of my development work:

| Project | Description | Technologies |
| --- | --- | --- |
| **IgniteED** | Gamified learning platform focused on improving access to engaging digital education in rural communities. Lead developer; Internal SIH 2025 finalist. | Next.js · React · TypeScript · Node.js · MySQL |
| **Employee Attendance & Payroll System** | Full-stack system covering employee records, attendance, leave management, and payroll workflows. | React · TypeScript · Node.js · Express.js · MySQL |
| **AI Interview Coach** | AI-powered interview preparation application with role-based questions, response feedback, and voice-enabled interview practice. | React · JavaScript · Gemini API · Speech-to-Text |

---

## Interface & Experience

The portfolio itself is also a small exercise in frontend engineering.

### Theme system

- Dark and light visual modes
- Theme preference persistence
- Theme-aware interface controls
- Browser-friendly fallback behavior

### Motion & interaction

- Pointer-responsive hero mark
- Smooth section transitions
- CSS-based infinite marquee
- Scroll-based reveal animations
- Subtle hover interactions
- Intentional micro-interactions

### Accessibility

- Semantic HTML structure
- Keyboard-visible focus states
- Reduced-motion support
- Accessible navigation labels
- Appropriate form labels
- ARIA attributes where interaction requires them

### Responsive design

The layout is designed from small screens upward and adapts across:

- Mobile devices
- Tablets
- Laptops
- Large desktop displays

---

## Certifications

The portfolio includes a dedicated certification section with direct access to certificate documents.

Currently featured:

- **Salesforce Certified Agentforce Specialist**
- **Google Cloud — Data Analytics**
- **Smart Interviews — Smart Coder**

Certificate previews are included directly in the portfolio, with individual certificates available for viewing.

---

## Contact

The portfolio includes a functional contact experience rather than simply displaying an email address.

Visitors can submit:

- Name
- Email
- Message

Messages are delivered through **FormSubmit** to my email.

You can also reach me directly:

📧 **248R5A6706@gmail.com**

💼 **LinkedIn:**<br>
https://linkedin.com/in/vivekchittibothula

💻 **GitHub:**<br>
https://github.com/VivekChittibothula

---

## Tech Stack

| Layer | Technology |
| --- | --- |
| Markup | HTML5 |
| Styling | CSS3 |
| Interaction | Vanilla JavaScript |
| Forms | FormSubmit |
| Hosting | Vercel |
| Version Control | Git / GitHub |

### Why no framework?

This portfolio deliberately uses vanilla web technologies.

There was no need for React, Next.js, Vite, or another application framework for a mostly static personal site. Keeping the implementation close to the platform makes the project:

- Lightweight
- Easy to understand
- Easy to deploy
- Easy to maintain
- Free from unnecessary build overhead

The goal was to demonstrate that a polished interface does not require a large dependency stack.

---

## Project Structure

```text
Vivek-Portfolio/
│
├── assets/
│   └── certificates/
│       ├── google-cloud-data-analytics.pdf
│       ├── google-cloud-data-analytics-preview.png
│       ├── salesforce-agentforce-specialist.pdf
│       ├── salesforce-agentforce-specialist-preview.png
│       └── smart-interviews-certificate.png
│
├── models/
│
├── favicon.svg
├── index.html
├── style.css
├── script.js
├── .gitignore
└── README.md
```

---

## Running Locally

Because the project is a static website, no package manager or build process is required.

### 1. Clone the repository

```bash
git clone https://github.com/VivekChittibothula/Vivek-Portfolio.git
```

### 2. Enter the project

```bash
cd Vivek-Portfolio
```

### 3. Start a local server

Using Python:

```bash
python3 -m http.server 8000
```

### 4. Open the site

```text
http://localhost:8000
```

You can technically open `index.html` directly, but using a local server provides behavior closer to the deployed environment.

---

## Deployment

The live portfolio is deployed on Vercel from this GitHub repository.

To deploy your own version:

1. Import the repository into Vercel.
2. Keep the project as a static site with no build command.
3. Set the output directory to the project root.
4. Deploy.

Vercel will provide a public `vercel.app` URL and redeploy future pushes automatically.

---

## Performance & Accessibility

The implementation keeps the browser workload intentionally small.

Some of the considerations include:

- No JavaScript framework
- No bundler or build pipeline
- No unnecessary runtime dependencies
- Native HTML controls
- CSS-driven marquee animation
- Lazy-loaded certificate imagery
- Responsive image handling
- Reduced-motion support
- Semantic page structure
- Keyboard-accessible interactive elements

The result is a portfolio that can remain visually expressive without requiring a large frontend stack.

---

## Development Philosophy

I treat a portfolio as more than a resume displayed inside a browser.

It should communicate how I think about software.

That means:

> **Build the interface people need, not the complexity developers want to show.**

The projects showcased here represent that approach — practical software, understandable interfaces, and technology used where it creates meaningful value.

---

## Roadmap

The portfolio is intentionally kept small, but future improvements may include:

- [ ] Dedicated project case-study pages
- [ ] Project architecture diagrams
- [ ] More detailed project documentation
- [ ] Additional accessibility refinements
- [ ] Performance and Lighthouse tracking
- [ ] Automated deployment workflow
- [ ] More interactive project demonstrations

---

## Author

### Vivek Chittibothula

**B.Tech — Computer Science Engineering (Data Science)**<br>
CMR Engineering College, Hyderabad

Interested in:

`Software Engineering` · `Full-Stack Development` · `AI / ML` · `Data Science`

📍 Telangana, India

---

## Connect

<p align="center">
  <a href="https://vivek-ch-portfolio.vercel.app/">
    <strong>Portfolio</strong>
  </a>
  ·
  <a href="https://github.com/VivekChittibothula">
    <strong>GitHub</strong>
  </a>
  ·
  <a href="https://linkedin.com/in/vivekchittibothula">
    <strong>LinkedIn</strong>
  </a>
  ·
  <a href="mailto:248R5A6706@gmail.com">
    <strong>Email</strong>
  </a>
</p>

<p align="center">
  Built with HTML, CSS, JavaScript, curiosity, and an unreasonable number of small UI decisions.
</p>
