function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-6xl mx-auto">
        <h2 className="text-xl font-bold">
          Faraz<span className="text-blue-500">.</span>
        </h2>

      <div className="flex flex-wrap gap-6 text-sm text-slate-300">
  <a href="#home" className="hover:text-blue-400">Home</a>
  <a href="#projects" className="hover:text-blue-400">Projects</a>
  <a href="#about" className="hover:text-blue-400">About</a>
  <a href="#skills" className="hover:text-blue-400">Skills</a>
  <a href="#education" className="hover:text-blue-400">Education</a>
  <a href="#contact" className="hover:text-blue-400">Contact</a>
</div>
      </nav>

      {/* Hero Section */}
     <main
  id="home"
  className="max-w-6xl mx-auto px-8 py-24 flex flex-col-reverse md:flex-row items-center justify-between gap-16"
>
  {/* Introduction */}
  <div className="flex-1">
    <p className="text-blue-400 font-medium mb-5">
      Hello, I'm
    </p>

    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
      Faraz Khan
    </h1>

    <h2 className="text-2xl md:text-3xl text-slate-400 mb-8">
      Computer Science Student & Aspiring Developer
    </h2>

    <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mb-10">
      I build web applications and explore technologies
      to solve practical problems. Currently focused on
      JavaScript, React, Node.js, and backend development.
    </p>

    <div className="flex flex-wrap gap-4">
      <a
        href="#projects"
        className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition"
      >
        View My Projects
      </a>

      <a
        href="#contact"
        className="border border-slate-600 hover:border-blue-500 px-6 py-3 rounded-lg font-medium transition"
      >
        Contact Me
      </a>
      <a
  href="/files/Faraz_Khan_CV.pdf"
  download
  className="inline-block border border-slate-700 text-white px-6 py-3 rounded-lg hover:bg-slate-800 transition"
>
  Download CV
</a>

    </div>
  </div>

  {/* Profile Image */}
  <div className="flex-1 flex justify-center">
    <img
      src="/images/profile.jpeg"
      alt="Faraz Khan"
      className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-slate-800 shadow-xl"
    />
  </div>
</main>
{/* Projects Section */}
<section id="projects" className="max-w-6xl mx-auto px-8 py-24">

  <div className="mb-12">
    <p className="text-blue-400 font-medium mb-3">MY WORK</p>

    <h2 className="text-4xl font-bold mb-4">
      Featured Projects
    </h2>

    <p className="text-slate-400 max-w-2xl">
      A selection of projects I've worked on while learning
      and building practical software solutions.
    </p>
  </div>

  <div className="grid md:grid-cols-2 gap-8">

    {/* Project 1 */}
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-7">
      <img
  src="/images/project-1.png"
  alt="Community Savings System preview"
  className="w-full h-48 object-cover rounded-lg mb-5"
/>
      <h3 className="text-xl font-bold mb-3">
        Community Savings & Micro-Loan Management System
      </h3>

      <p className="text-slate-400 leading-relaxed mb-5">
        A web-based system designed to manage community
        contributions, fund allocation, and micro-loan workflows.
      </p>

      <p className="text-blue-400 text-sm mb-6">
        PHP · MySQL · JavaScript
      </p>

      <a
        href="https://github.com/farazkhanpasha/smart-community-savings-loans"
        target="_blank"
        rel="noreferrer"
        className="text-white hover:text-blue-400 font-medium"
      >
        View on GitHub →
      </a>
    </div>

    {/* Project 2 */}
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-7">
      <img
  src="/images/project-2.jpg"
  alt="Community Savings System preview"
  className="w-full h-48 object-cover rounded-lg mb-5"
/>
      <h3 className="text-xl font-bold mb-3">
        Todo REST API
      </h3>

      <p className="text-slate-400 leading-relaxed mb-5">
        A REST API with user registration, login,
        JWT authentication, and task management.
      </p>

      <p className="text-blue-400 text-sm mb-6">
        Node.js · Express · MariaDB · JWT
      </p>

      <a
        href="https://github.com/farazkhanpasha/todo-api"
        target="_blank"
        rel="noreferrer"
        className="text-white hover:text-blue-400 font-medium"
      >
        View on GitHub →
      </a>
    </div>

    {/* Project 3 */}
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-7">
      <img
  src="/images/project-3.jpg"
  alt="Community Savings System preview"
  className="w-full h-48 object-cover rounded-lg mb-5"
/>
      <h3 className="text-xl font-bold mb-3">
        Village Fund Management Chatbot
      </h3>

      <p className="text-slate-400 leading-relaxed mb-5">
        A chatbot that answers frequently asked questions
        using fuzzy text matching.
      </p>

      <p className="text-blue-400 text-sm mb-6">
        Python · Flask · RapidFuzz · JavaScript
      </p>

      <a
        href="https://github.com/farazkhanpasha/chatbot-for-villagef-fund-managment-web-usage"
        target="_blank"
        rel="noreferrer"
        className="text-white hover:text-blue-400 font-medium"
      >
        View on GitHub →
      </a>
    </div>

    {/* Project 4 */}
   <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-blue-500 transition">
    <img
  src="/images/project-4.jpg"
  alt="Community Savings System preview"
  className="w-full h-48 object-cover rounded-lg mb-5"
/>
  <h3 className="text-xl font-semibold mb-3">
    Bike Fuel Monitoring & Trip Management System
  </h3>

  <p className="text-slate-400 mb-5">
    An IoT-based project using NodeMCU ESP8266 to monitor motorcycle fuel
    levels and support trip management through sensor data and Wi-Fi
    connectivity.
  </p>

  <div className="flex flex-wrap gap-2 mb-5">
    {["IoT", "NodeMCU ESP8266", "Embedded Systems", "Wi-Fi"].map((skill) => (
      <span
        key={skill}
        className="text-xs bg-slate-800 text-blue-300 px-3 py-1 rounded-full"
      >
        {skill}
      </span>
    ))}
  </div>

  <a
    href="https://github.com/farazkhanpasha/bike-fuel-monitor"
   target="_blank"
        rel="noreferrer"
        className="text-white hover:text-blue-400 font-medium"
  >
    View on GitHub →
  </a>
</div>
  </div>
</section>
{/* About Section */}
<section id="about" className="max-w-6xl mx-auto px-8 py-24">

  <p className="text-blue-400 font-medium mb-3">
    ABOUT ME
  </p>

  <h2 className="text-4xl font-bold mb-8">
    A Little About Me
  </h2>

  <div className="max-w-3xl">
    <p className="text-slate-400 text-lg leading-relaxed mb-6">
      I'm a Computer Science student interested in software
      development and building practical applications. My
      academic journey has introduced me to programming,
      databases, web technologies, and software engineering.
    </p>

    <p className="text-slate-400 text-lg leading-relaxed">
      Currently, I'm strengthening my skills in JavaScript,
      React, Node.js, and backend development while working
      on academic and personal projects.
    </p>
  </div>

</section>
{/* Skills Section */}
<section id="skills" className="max-w-6xl mx-auto px-8 py-24">

  <p className="text-blue-400 font-medium mb-3">
    MY TOOLKIT
  </p>

  <h2 className="text-4xl font-bold mb-12">
    Skills & Technologies
  </h2>

  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
      <h3 className="text-xl font-semibold mb-5">Programming</h3>
      <div className="flex flex-wrap gap-2">
        {['JavaScript', 'PHP', 'Python', 'C++', 'Java'].map(skill => (
          <span key={skill} className="bg-slate-800 text-slate-300 px-3 py-2 rounded-md text-sm">
            {skill}
          </span>
        ))}
      </div>
    </div>

    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
      <h3 className="text-xl font-semibold mb-5">Web Development</h3>
      <div className="flex flex-wrap gap-2">
        {['HTML', 'CSS', 'React', 'Tailwind CSS', 'Node.js', 'Express.js'].map(skill => (
          <span key={skill} className="bg-slate-800 text-slate-300 px-3 py-2 rounded-md text-sm">
            {skill}
          </span>
        ))}
      </div>
    </div>

    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
      <h3 className="text-xl font-semibold mb-5">Tools & Database</h3>
      <div className="flex flex-wrap gap-2">
        {['MySQL', 'MariaDB', 'Git', 'GitHub', 'VS Code'].map(skill => (
          <span key={skill} className="bg-slate-800 text-slate-300 px-3 py-2 rounded-md text-sm">
            {skill}
          </span>
        ))}
      </div>
    </div>

  </div>
</section>
{/* Education Section */}
<section id="education" className="max-w-6xl mx-auto px-8 py-24">

  <p className="text-blue-400 font-medium mb-3">
    MY BACKGROUND
  </p>

  <h2 className="text-4xl font-bold mb-10">
    Education
  </h2>

  <div className="max-w-3xl bg-slate-900 border border-slate-800 rounded-xl p-7">
    <h3 className="text-xl font-bold mb-2">
      Bachelor of Science in Computer Science
    </h3>

    <p className="text-slate-300 mb-2">
      University of Poonch, Rawalakot
    </p>

    <p className="text-slate-500 text-sm">
      Currently pursuing · Expected graduation: To be updated
    </p>
  </div>

</section>
{/* Contact Section */}
<section id="contact" className="max-w-6xl mx-auto px-8 py-24">

  <p className="text-blue-400 font-medium mb-3">
    GET IN TOUCH
  </p>

  <h2 className="text-4xl font-bold mb-6">
    Let's Connect
  </h2>

  <p className="text-slate-400 text-lg max-w-2xl mb-10">
    I'm interested in internship opportunities, collaboration,
    and connecting with people working in software development.
  </p>

  <div className="flex flex-wrap gap-5">

    <a
      href="mailto:farazzubair098@gmail.com"
      className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition"
    >
      Email Me
    </a>

    <a
      href="https://github.com/farazkhanpasha"
      target="_blank"
      rel="noreferrer"
      className="border border-slate-600 hover:border-blue-500 px-6 py-3 rounded-lg transition"
    >
      GitHub
    </a>

    <a
      href="https://www.linkedin.com/in/muhammad-faraz-khan-pasha/"
      target="_blank"
      rel="noreferrer"
      className="border border-slate-600 hover:border-blue-500 px-6 py-3 rounded-lg transition"
    >
      LinkedIn
    </a>

  </div>

</section>

{/* Footer */}
<footer className="border-t border-slate-800 mt-16">

  <div className="max-w-6xl mx-auto px-8 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">

    <p className="text-slate-500 text-sm">
      © {new Date().getFullYear()} Faraz Khan. All rights reserved.
    </p>

    <p className="text-slate-500 text-sm">
      Built with React & Tailwind CSS
    </p>

  </div>

</footer>
    </div>
  )
}

export default App