import React, { useState } from 'react';
import { Moon, Sun, Github, Linkedin, Mail, Download, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Sample data - replace with your information
  const personalInfo = {
    name: "Your Name",
    title: "Software Developer",
    about: "Passionate software developer with expertise in building modern web applications. I love turning complex problems into simple, beautiful, and intuitive solutions.",
    email: "your.email@example.com",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    resume: "/path-to-your-resume.pdf"
  };

  const skills = [
    { category: "Frontend", items: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind"] },
    { category: "Backend", items: ["Node.js", "Python", "Java", "SQL", "MongoDB"] },
    { category: "Tools", items: ["Git", "Docker", "AWS", "Figma", "VS Code"] }
  ];

  const education = [
    {
      school: "University Name",
      degree: "Bachelor of Science in Computer Science",
      year: "2018 - 2022",
      description: "Relevant coursework in Data Structures, Algorithms, and Software Engineering"
    }
  ];

  const experience = [
    {
      company: "Company Name",
      position: "Software Developer",
      period: "2022 - Present",
      description: "Developed and maintained web applications using React and Node.js"
    }
  ];

  const projects = [
    {
      title: "Project Name",
      description: "A brief description of your project",
      tech: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/project-link",
      live: "https://project-demo.com"
    }
  ];

  const achievements = [
    "Winner of XYZ Hackathon 2023",
    "Published research paper in ABC Conference",
    "Open source contributor to major projects"
  ];

  const blogs = [
    {
      title: "Understanding React Hooks",
      description: "A comprehensive guide to React Hooks and their use cases",
      link: "https://your-blog-link.com"
    }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-opacity-70 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">{personalInfo.name}</h1>
          <div className="flex items-center gap-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a href={personalInfo.resume} className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600">
              <Download size={16} />
              Resume
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{personalInfo.title}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{personalInfo.about}</p>
          <div className="flex justify-center gap-4 mt-8">
            <a href={personalInfo.github} className="p-2 hover:text-blue-500"><Github /></a>
            <a href={personalInfo.linkedin} className="p-2 hover:text-blue-500"><Linkedin /></a>
            <a href={`mailto:${personalInfo.email}`} className="p-2 hover:text-blue-500"><Mail /></a>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-16" id="skills">
          <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skillSet, index) => (
              <div key={index} className="p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold mb-4">{skillSet.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillSet.items.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="py-16" id="education">
          <h2 className="text-3xl font-bold mb-8">Education</h2>
          {education.map((edu, index) => (
            <div key={index} className="mb-6 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold">{edu.school}</h3>
              <p className="text-gray-600 dark:text-gray-400">{edu.degree}</p>
              <p className="text-sm text-gray-500 dark:text-gray-500">{edu.year}</p>
              <p className="mt-2">{edu.description}</p>
            </div>
          ))}
        </section>

        {/* Experience Section */}
        <section className="py-16" id="experience">
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          {experience.map((exp, index) => (
            <div key={index} className="mb-6 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold">{exp.company}</h3>
              <p className="text-gray-600 dark:text-gray-400">{exp.position}</p>
              <p className="text-sm text-gray-500 dark:text-gray-500">{exp.period}</p>
              <p className="mt-2">{exp.description}</p>
            </div>
          ))}
        </section>

        {/* Projects Section */}
        <section className="py-16" id="projects">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.github} className="flex items-center gap-1 text-blue-500 hover:underline">
                    <Github size={16} /> Code
                  </a>
                  <a href={project.live} className="flex items-center gap-1 text-blue-500 hover:underline">
                    <ExternalLink size={16} /> Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-16" id="achievements">
          <h2 className="text-3xl font-bold mb-8">Achievements</h2>
          <ul className="space-y-4">
            {achievements.map((achievement, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                {achievement}
              </li>
            ))}
          </ul>
        </section>

        {/* Blogs Section */}
        <section className="py-16" id="blogs">
          <h2 className="text-3xl font-bold mb-8">Blogs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogs.map((blog, index) => (
              <a 
                key={index} 
                href={blog.link}
                className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{blog.description}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16" id="contact">
          <h2 className="text-3xl font-bold mb-8">Contact</h2>
          <div className="max-w-xl">
            <p className="mb-6">Feel free to reach out to me for any opportunities or collaboration.</p>
            <div className="space-y-4">
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 text-blue-500 hover:underline">
                <Mail size={20} /> {personalInfo.email}
              </a>
              <a href={personalInfo.linkedin} className="flex items-center gap-2 text-blue-500 hover:underline">
                <Linkedin size={20} /> LinkedIn
              </a>
              <a href={personalInfo.github} className="flex items-center gap-2 text-blue-500 hover:underline">
                <Github size={20} /> Github
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-5xl mx-auto px-4 py-8 text-center text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;