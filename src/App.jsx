import "./App.css";

function App() {
  const skills = {
    programming: ["JavaScript", "PHP", "Python", "C++", "Java"],
    web: ["HTML", "CSS", "React", "Tailwind CSS", "Node.js", "Express.js"],
    tools: ["MariaDB", "MySQL", "Git", "GitHub", "VS Code"],
  };

  const projects = [
    {
      title: "Community Savings & Micro-Loan Management System",
      description:
        "A database-backed system for managing community contributions, fund allocations, micro-loans, and administrative approvals. Developed as a Final Year Project.",
      stack: "PHP · MySQL · JavaScript · Chart.js",
      note: "FYP co-author: Umair Makhan",
      url: "https://github.com/farazkhanpasha/smart-community-savings-loans",
    },
    {
      title: "Todo REST API",
      description:
        "An authenticated, multi-user REST API. Users register and log in with bcrypt-hashed passwords and one-hour JWTs, then manage their own tasks through CRUD endpoints. Includes per-user access checks and parameterised database queries.",
      stack: "Node.js · Express · MariaDB · JWT · bcrypt",
      url: "https://github.com/farazkhanpasha/todo-api",
    },
    {
      title: "Village Fund Management Chatbot",
      description:
        "A chatbot that answers frequently asked questions about village fund management, using fuzzy text matching with RapidFuzz and a Flask backend.",
      stack: "Python · Flask · RapidFuzz · JavaScript",
      url: "https://github.com/farazkhanpasha/village-fund-management-chatbot",
    },
    {
      title: "Bike Fuel Monitoring – Backend Prototype",
      description:
        "An early-stage backend prototype exploring data management for a motorcycle fuel-monitoring concept. Hardware integration and trip-management functionality are not yet complete.",
      stack: "PHP · MySQL",
      url: "https://github.com/farazkhanpasha/bike-fuel-monitor",
    },
  ];

  const navLinks = [
    ["Home", "#home"],
    ["Projects", "#projects"],
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Education", "#education"],
    ["Contact", "#contact"],
  ];

  return (
    <div className="site-shell min-h-screen bg-slate-950 text-white selection:bg-blue-600 selection:text-white">
      <nav className="site-nav sticky top-0 z-50 border-b border-slate-800/70 bg-slate-950/90 backdrop-blur">
        <div className="site-nav-inner max-w-6xl mx-auto px-5 sm:px-8">
          <a
            href="#home"
            className="site-brand text-xl font-bold hover:text-blue-400 transition"
            aria-label="Muhammad Faraz Khan home"
          >
            Muhammad Faraz Khan<span className="text-blue-500">.</span>
          </a>

          <div className="site-nav-links text-sm text-slate-300">
            {navLinks.map(([label, href]) => (
              <a key={href} href={href} className="nav-link hover:text-blue-400 transition">
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main
        id="home"
        className="hero-section max-w-6xl mx-auto px-5 sm:px-8 py-16 md:py-24 flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-16"
      >
        <div className="flex-1 min-w-0">
          <p className="text-blue-400 font-medium mb-5">Hello, I&apos;m</p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Muhammad Faraz Khan
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl text-slate-300 mb-5">
            Computer Science Student &amp; Web Developer
          </h2>

          <p className="inline-block bg-blue-600/15 text-blue-300 border border-blue-500/30 px-3 py-2 rounded-full text-sm font-medium mb-8">
            Open to internship &amp; junior roles · On-site / Remote
          </p>

          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mb-10">
            I build web applications to solve practical problems. I am
            developing my skills in JavaScript, Node.js, Express, and backend
            development, while gaining familiarity with React through academic
            and personal projects.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="primary-button">
              View My Projects
            </a>
            <a href="#contact" className="secondary-button">
              Contact Me
            </a>
            <a href="/files/Faraz_Khan_CV.pdf" download className="secondary-button">
              Download CV
            </a>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-5 mt-12 text-sm">
            <div>
              <p className="text-2xl font-bold text-white">4</p>
              <p className="text-slate-500">Projects with code</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">Node.js · PHP</p>
              <p className="text-slate-500">Backend technologies</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">BSCS</p>
              <p className="text-slate-500">In progress</p>
            </div>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <img
            src="/images/profile.jpeg"
            alt="Portrait of Muhammad Faraz Khan"
            className="profile-image w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 object-cover rounded-full border-4 border-slate-800 shadow-xl"
          />
        </div>
      </main>

      <section id="projects" className="content-section max-w-6xl mx-auto px-5 sm:px-8 py-16 md:py-24">
        <div className="mb-12">
          <p className="section-kicker">MY WORK</p>
          <h2 className="section-title">Featured Projects</h2>
          <p className="text-slate-400 max-w-2xl">
            A selection of projects I&apos;ve worked on while learning and
            building practical software solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className="project-card group bg-slate-900 border border-slate-800 rounded-xl p-6 sm:p-7"
            >
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition">
                {project.title}
              </h3>
              <p className="text-slate-400 leading-relaxed mb-5">
                {project.description}
              </p>
              <p className="text-blue-400 text-sm mb-3">{project.stack}</p>
              {project.note && (
                <p className="text-slate-500 text-sm mb-6">{project.note}</p>
              )}
              {!project.note && <div className="mb-6" />}
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-white hover:text-blue-400 font-medium transition"
              >
                View on GitHub <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="content-section max-w-6xl mx-auto px-5 sm:px-8 py-16 md:py-24">
        <p className="section-kicker">ABOUT ME</p>
        <h2 className="section-title">A Little About Me</h2>

        <div className="max-w-3xl">
          <p className="text-slate-400 text-lg leading-relaxed mb-6">
            I&apos;m a Computer Science student at the University of Poonch,
            Rawalakot. I began my degree in October 2022, and it has introduced
            me to programming, databases, web technologies, and software
            engineering.
          </p>

          <p className="text-slate-400 text-lg leading-relaxed mb-6">
            I&apos;m strengthening my foundations in JavaScript, Node.js,
            Express, and backend development. I also have familiarity with
            React and continue to build practical experience through academic
            and personal projects.
          </p>

          <p className="text-slate-400 text-lg leading-relaxed">
            I&apos;m looking for an internship or junior role where I can
            contribute to real codebases, receive code reviews, and continue
            developing my software engineering skills.
          </p>
        </div>
      </section>

      <section id="skills" className="content-section max-w-6xl mx-auto px-5 sm:px-8 py-16 md:py-24">
        <p className="section-kicker">MY TOOLKIT</p>
        <h2 className="section-title">Skills &amp; Technologies</h2>
        <p className="text-slate-500 mb-10 max-w-2xl">
  Technologies and tools I have used across my academic and personal projects.
</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            ["Programming", skills.programming],
            ["Web Development", skills.web],
            ["Tools & Database", skills.tools],
          ].map(([heading, items]) => (
            <div
              key={heading}
              className="skill-card bg-slate-900 border border-slate-800 rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold mb-5">{heading}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="bg-slate-800 text-slate-300 px-3 py-2 rounded-md text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="education" className="content-section max-w-6xl mx-auto px-5 sm:px-8 py-16 md:py-24">
        <p className="section-kicker">MY BACKGROUND</p>
        <h2 className="section-title">Education</h2>

        <div className="education-card max-w-3xl bg-slate-900 border border-slate-800 rounded-xl p-6 sm:p-7">
          <h3 className="text-xl font-bold mb-2">
            Bachelor of Science in Computer Science
          </h3>
          <p className="text-slate-300 mb-2">University of Poonch, Rawalakot</p>
          <p className="text-slate-500 text-sm">
            October 2022 – Present · BSCS in progress
          </p>
        </div>
      </section>

      <section id="contact" className="content-section max-w-6xl mx-auto px-5 sm:px-8 py-16 md:py-24">
        <p className="section-kicker">GET IN TOUCH</p>
        <h2 className="section-title">Let&apos;s Connect</h2>
        <p className="text-slate-400 text-lg max-w-2xl mb-10">
          I&apos;m interested in internship and junior developer opportunities,
          collaboration, and connecting with people working in software
          development.
        </p>

        <div className="flex flex-wrap gap-4">
          <a href="mailto:farazzubair098@gmail.com" className="primary-button">
            Email Me
          </a>
          <a
            href="https://github.com/farazkhanpasha"
            target="_blank"
            rel="noreferrer"
            className="secondary-button"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-faraz-khan-pasha/"
            target="_blank"
            rel="noreferrer"
            className="secondary-button"
          >
            LinkedIn
          </a>
        </div>
      </section>

      <footer className="border-t border-slate-800 mt-12">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-center sm:text-left">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Muhammad Faraz Khan. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm">Built with React &amp; Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
