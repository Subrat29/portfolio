export const portfolioContent = {
    personalInfo: {
        name: "Subrat Yadav",
        title: "Full Stack Developer",
        about: "Passionate full stack developer with expertise in building modern web applications. Currently based in Agra, India and seeking new opportunities to create innovative solutions.",
        email: "subratyadav29@gmail.com",
        phone: "+91 7820043752",
        location: "Agra, India",
        social: {
            github: "https://github.com/subrat29",
            linkedin: "https://linkedin.com/in/subratyadav",
            leetcode: "https://leetcode.com/subratyadav",
            portfolio: "/portfolio"
        }
    },

    navigation: [
        { title: 'Skills', id: 'skills' },
        { title: 'Experience', id: 'experience' },
        { title: 'Projects', id: 'projects' },
        { title: 'Achievements', id: 'achievements' },
        { title: 'Education', id: 'education' },
        { title: 'Blogs', id: 'blogs' },
        { title: 'Contact', id: 'contact' }
    ],

    skills: [
        {
            category: "Frontend",
            items: ["React.js", "Redux", "Tailwind CSS", "Shadcn", "HTML5/CSS3"]
        },
        {
            category: "Backend",
            items: ["Node.js", "Express.js", "RESTful APIs", "WebSocket"]
        },
        {
            category: "Database & Cloud",
            items: ["MongoDB", "Appwrite"]
        },
        {
            category: "Languages & Tools",
            items: ["JavaScript (ES6+)", "C++", "Java", "Git", "GitHub", "VS Code", "Postman"]
        }
    ],

    experience: [
        {
            company: "Freelancer",
            position: "Full Stack Developer",
            period: "May 2024 - Aug 2024",
            description: [
                "Architected a full-featured school app using React.js, Node.js, and MongoDB, streamlining student management, attendance tracking, and grading for 500+ students",
                "Optimized UI/UX with Tailwind CSS and Shadcn, driving a 30% increase in user engagement",
                "Established real-time updates using WebSockets, boosting interaction by 25%",
                "Implemented secure user authentication and authorization with role-based access control, reducing unauthorized access attempts by 40%"
            ]
        },
        {
            company: "Hacktoberfest 2023",
            position: "Open-Source Contributor",
            period: "October 2023",
            description: [
                "Engineered multiple components across open-source projects, enhancing code quality",
                "Resolved numerous bugs and improved project functionality",
                "Achieved cross-browser compatibility, improving user satisfaction"
            ]
        },
        {
            company: "GirlScript Summer of Code 2023",
            position: "Open-Source Contributor",
            period: "May 2023 - July 2023",
            description: [
                "Contributed to multiple open-source projects, developing new features and components",
                "Accelerated project performance through code refactoring and optimized workflows",
                "Improved user interface consistency across different platforms"
            ]
        }
    ],

    projects: [
        {
            title: "StartSphere",
            description: "A multi-feature web app for startups with ML-based friend suggestions, real-time chat, and sections for posts, networking, resource library, user profiles, and event management",
            tech: ["React.js", "Flowbite", "Tailwind CSS", "Node.js", "Socket.io", "NLP", "ML"],
            highlights: [
                "Improved networking by 50% through comprehensive feature set",
                "Seamless user experience for 1,000+ users",
                "Reduced latency by 20% with Socket.io implementation",
                "Increased investor interactions by 50%"
            ],
            github: "https://github.com/user/startsphere",
            live: "https://startsphere-demo.com"
        },
        {
            title: "TechTrendz",
            description: "A secure, responsive blog platform with advanced editing capabilities",
            tech: ["React.js", "TailwindCSS", "Shadcn", "Redux", "React Hook Form", "TinyMCE", "HTML React Parser", "Appwrite"],
            highlights: [
                "40% rise in user engagement",
                "30% reduction in code redundancy",
                "80% improvement in load times"
            ],
            github: "https://github.com/user/techtrendz",
            live: "https://techtrendz-demo.com"
        },
        {
            title: "MeriDukaan",
            description: "A responsive e-commerce platform for local businesses",
            tech: ["React.js", "React Router DOM", "Tailwind CSS", "Json Server"],
            highlights: [
                "Sub-500ms load times",
                "40% investor engagement",
                "20% increase in transaction efficiency",
                "25% boost in user retention"
            ],
            github: "https://github.com/user/meridukaan",
            live: "https://meridukaan-demo.com"
        }
    ],

    achievements: [
        "1st Place among 1,515 candidates in YourStory Digital Innovation Hackathon, leading team EndGame25",
        "Finalist at Codex24 Hackathon, organized by Hackingly",
        "Certificate of Recognition for outstanding contributions during Hacktoberfest 2023",
        "Solved 400+ DSA challenges on LeetCode and GeeksforGeeks"
    ],

    education: [
        {
            school: "Dr. Bhimrao Ambedkar University",
            degree: "Bachelor of Engineering - Computer Science and Engineering",
            year: "December 2021 - May 2025",
            location: "Agra, India",
            description: "Relevant coursework: Data Structures and Algorithms, Database Management System, Operating Systems, Computer Networks, Software Engineering"
        }
    ],

    blogs: [
        {
            title: "Coming Soon",
            description: "Technical blogs and articles about web development and software engineering.",
            link: "#"
        }
    ]
};