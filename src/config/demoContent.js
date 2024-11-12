// config/content.js

export const portfolioContent = {
    personalInfo: {
        name: "Your Name",
        title: "Your Title",
        about: "Your brief description here",
        email: "your.email@example.com",
        phone: "+1 234 567 8900",
        location: "City, Country",
        social: {
            github: "https://github.com/yourusername",
            linkedin: "https://linkedin.com/in/yourusername",
            twitter: "https://twitter.com/yourusername",
            leetcode: "https://leetcode.com/yourusername",
        },
        resume: "/path-to-your-resume.pdf"
    },

    navigation: [
        { title: 'Skills', href: '#skills' },
        { title: 'Experience', href: '#experience' },
        { title: 'Projects', href: '#projects' },
        { title: 'Achievements', href: '#achievements' },
        { title: 'Education', href: '#education' },
        { title: 'Contact', href: '#contact' },
    ],

    skills: [
        {
            category: "Frontend",
            items: ["React.js", "Vue.js", "Next.js", "Tailwind CSS", "TypeScript"]
        },
        {
            category: "Backend",
            items: ["Node.js", "Python", "Java", "GraphQL", "REST APIs"]
        },
        {
            category: "DevOps & Tools",
            items: ["Docker", "AWS", "Git", "CI/CD", "Linux"]
        }
    ],

    experience: [
        {
            company: "Company Name",
            position: "Position Title",
            period: "Start Date - End Date",
            description: "• Achievement 1\n• Achievement 2\n• Achievement 3"
        },
        // Add more experiences...
    ],

    projects: [
        {
            title: "Project Name",
            description: "Project description goes here",
            tech: ["Tech1", "Tech2", "Tech3"],
            github: "https://github.com/project-link",
            live: "https://project-demo.com"
        },
        // Add more projects...
    ],

    achievements: [
        "Achievement 1",
        "Achievement 2",
        "Achievement 3",
        // Add more achievements...
    ],

    education: [
        {
            school: "University Name",
            degree: "Degree Name",
            year: "Start Year - End Year",
            description: "Description of your education, relevant coursework, etc."
        },
        // Add more education...
    ],
    blogs: [
        {
            title: "Coming Soon",
            description: "Technical blogs and articles about web development and software engineering.",
            github: "#",
            link: "#"
        }
    ]
};