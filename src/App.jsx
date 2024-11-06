import React, { useState } from 'react';
import { Moon, Sun, Github, Linkedin, Mail, Download, ExternalLink, Menu, X, Phone, Code } from 'lucide-react';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { title: 'Skills', href: '#skills' },
    { title: 'Experience', href: '#experience' },
    { title: 'Projects', href: '#projects' },
    { title: 'Achievements', href: '#achievements' },
    { title: 'Education', href: '#education' },
    { title: 'Contact', href: '#contact' },
  ];

  const personalInfo = {
    name: "Subrat Yadav",
    title: "Full Stack Developer",
    about: "Passionate full stack developer with expertise in building modern web applications. Currently based in Agra, India and seeking new opportunities to create innovative solutions.",
    email: "subratyadav29@gmail.com",
    github: "https://github.com/subrat29",
    linkedin: "https://linkedin.com/in/subratyadav",
    portfolio: "#",
    leetcode: "#",
    phone: "+91 7820043752",
    resume: "/path-to-your-resume.pdf"
  };

  const skills = [
    {
      category: "Frontend",
      items: ["React.js", "Redux", "Tailwind CSS", "Shadcn", "HTML5/CSS3"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "RESTful APIs", "WebSocket"]
    },
    {
      category: "Database & Tools",
      items: ["MongoDB", "Appwrite", "Git", "GitHub", "VS Code", "Postman"]
    }
  ];

  const education = [
    {
      school: "Dr. Bhimrao Ambedkar University",
      degree: "Bachelor of Engineering - Computer Science and Engineering",
      year: "December 2021 - May 2025",
      description: "Relevant coursework: Data Structures and Algorithms, Database Management System, Operating Systems, Computer Networks, Software Engineering."
    }
  ];

  const experience = [
    {
      company: "Freelancer",
      position: "Full Stack Developer",
      period: "May 2024 - Aug 2024",
      description: "• Architected a full-featured school app using React.js, Node.js, and MongoDB\n• Optimized UI/UX with Tailwind CSS and Shadcn\n• Established real-time updates using WebSockets\n• Implemented secure user authentication and authorization"
    },
    {
      company: "Open-Source Contributor",
      position: "Hacktoberfest 2023",
      period: "September 2023 - October 2023",
      description: "• Engineered 7 new components across 5 open-source projects\n• Accelerated project performance by 30%\n• Achieved cross-browser compatibility"
    }
  ];

  const projects = [
    {
      title: "StartSphere",
      description: "A Solution for Emerging Entrepreneurs with ML-based friend suggestions, real-time chat, posts, networking, resource library, user profiles, and event management.",
      tech: ["React.js", "Flowbite", "Tailwind CSS", "Node.js", "Socket.io", "NLP", "ML"],
      github: "https://github.com/project-link",
      live: "https://project-demo.com"
    },
    {
      title: "TechTrendz",
      description: "A secure, responsive blog platform with React.js and Appwrite integration, featuring real-time editing and efficient form handling.",
      tech: ["React.js", "TailwindCSS", "Shadcn", "Redux", "Appwrite"],
      github: "https://github.com/project-link",
      live: "https://project-demo.com"
    },
    {
      title: "MeriDukaan",
      description: "A responsive e-commerce platform featuring 100+ clothing and shoe items, with user accounts, order management, and advanced search.",
      tech: ["React.js", "React Router DOM", "Tailwind CSS", "JSON Server"],
      github: "https://github.com/project-link",
      live: "https://project-demo.com"
    }
  ];

  const achievements = [
    "1st Place among 1,515 candidates in YourStory Digital Innovation Hackathon",
    "Finalist at Codex24 Hackathon by Hackingly",
    "Certificate of Recognition for Hacktoberfest 2023 contributions",
    "Solved 400+ DSA challenges on LeetCode and GeeksforGeeks"
  ];

  const blogs = [
    {
      title: "Coming Soon",
      description: "Technical blogs and articles about web development and software engineering.",
      link: "#"
    }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-800'} transition-colors duration-300`}>
      {/* Rest of the component remains the same... */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200/50 dark:border-gray-700/50 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <a href="#" className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              {personalInfo.name}
            </a>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  {link.title}
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <a
                href={personalInfo.resume}
                className="flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90 transition-opacity duration-200"
              >
                <Download size={16} />
                Resume
              </a>
            </div>

            <div className="flex items-center gap-4 md:hidden">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={toggleMenu}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          <div
            className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0 overflow-hidden'
              }`}
          >
            <div className="flex flex-col gap-4 pb-6">
              {navLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200 py-2"
                >
                  {link.title}
                </a>
              ))}
              <a
                href={personalInfo.resume}
                className="flex items-center justify-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90 transition-opacity duration-200 mt-4"
              >
                <Download size={16} />
                Resume
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6">
        {/* Hero Section */}
        <section className="py-32 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/5 dark:to-purple-500/5" />
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            {personalInfo.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {personalInfo.about}
          </p>
          <div className="flex justify-center gap-6 mt-12">
            <a href={personalInfo.github} className="p-3 hover:text-blue-500 transition-colors duration-200">
              <Github size={24} />
            </a>
            <a href={personalInfo.linkedin} className="p-3 hover:text-blue-500 transition-colors duration-200">
              <Linkedin size={24} />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="p-3 hover:text-blue-500 transition-colors duration-200">
              <Mail size={24} />
            </a>
          </div>
        </section>

        {/* Rest of the sections remain structurally the same, just using the updated data */}
        {/* Skills Section */}
        <section className="py-20" id="skills">
          <h2 className="text-4xl font-bold mb-12 text-center">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skillSet, index) => (
              <div key={index} className="p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-colors duration-200 group">
                <h3 className="text-2xl font-semibold mb-6 group-hover:text-blue-500 transition-colors duration-200">
                  {skillSet.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skillSet.items.map((skill, idx) => (
                    <span key={idx} className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium hover:bg-blue-500 hover:text-white transition-colors duration-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-20" id="experience">
          <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
          <div className="max-w-3xl mx-auto">
            {experience.map((exp, index) => (
              <div key={index} className="mb-8 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-all duration-200 hover:shadow-lg dark:hover:shadow-blue-500/10">
                <h3 className="text-2xl font-semibold mb-2">{exp.company}</h3>
                <p className="text-xl text-blue-500">{exp.position}</p>
                <p className="text-gray-600 dark:text-gray-400 mt-2">{exp.period}</p>
                <p className="mt-4 text-gray-600 dark:text-gray-400 whitespace-pre-line">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20" id="projects">
          <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-all duration-200 group hover:shadow-lg dark:hover:shadow-blue-500/10">
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-blue-500 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-6">
                  <a href={project.github} className="flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors duration-200">
                    <Github size={18} /> Code
                  </a>
                  <a href={project.live} className="flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors duration-200">
                    <ExternalLink size={18} /> Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Previous code remains the same until Achievements section... */}

        {/* Achievements Section */}
        <section className="py-20" id="achievements">
          <h2 className="text-4xl font-bold mb-12 text-center">Achievements</h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="p-6 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-all duration-200 hover:shadow-lg dark:hover:shadow-blue-500/10">
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <p className="text-lg">{achievement}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-20" id="education">
          <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>
          <div className="max-w-3xl mx-auto">
            {education.map((edu, index) => (
              <div key={index} className="mb-8 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-all duration-200 hover:shadow-lg dark:hover:shadow-blue-500/10">
                <h3 className="text-2xl font-semibold mb-2">{edu.school}</h3>
                <p className="text-xl text-gray-600 dark:text-gray-400">{edu.degree}</p>
                <p className="text-blue-500 font-medium mt-2">{edu.year}</p>
                <p className="mt-4 text-gray-600 dark:text-gray-400">{edu.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Blogs Section */}
        <section className="py-20" id="blogs">
          <h2 className="text-4xl font-bold mb-12 text-center">Blogs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogs.map((blog, index) => (
              <a
                key={index}
                href={blog.link}
                className="p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-all duration-200 hover:shadow-lg dark:hover:shadow-blue-500/10 group"
              >
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-blue-500 transition-colors duration-200">
                  {blog.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{blog.description}</p>
                <div className="flex items-center gap-2 text-blue-500 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span>Read More</span>
                  <ExternalLink size={16} />
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20" id="contact">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
              Feel free to reach out for opportunities or collaboration.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-3 text-lg text-blue-500 hover:text-blue-600 transition-colors duration-200">
                <Mail size={24} /> {personalInfo.email}
              </a>
              <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-3 text-lg text-blue-500 hover:text-blue-600 transition-colors duration-200">
                <Phone size={24} /> {personalInfo.phone}
              </a>
              <a href={personalInfo.linkedin} className="flex items-center gap-3 text-lg text-blue-500 hover:text-blue-600 transition-colors duration-200">
                <Linkedin size={24} /> LinkedIn
              </a>
              <a href={personalInfo.github} className="flex items-center gap-3 text-lg text-blue-500 hover:text-blue-600 transition-colors duration-200">
                <Github size={24} /> Github
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href={personalInfo.github} className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors duration-200">
                <Github size={20} />
              </a>
              <a href={personalInfo.linkedin} className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors duration-200">
                <Linkedin size={20} />
              </a>
              <a href={personalInfo.leetcode} className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors duration-200">
                <Code size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;