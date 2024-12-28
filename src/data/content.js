export const portfolioContent = {
    personalInfo: {
        name: "Subrat Yadav",
        title: "Full Stack Developer | Innovator",
        email: "subratyadav29@gmail.com",
        phone: "+91 7820043752",
        location: "Agra, India",
        image: "/su.jpg",
        resume: "/SubratYadav_CV.pdf",
        social: {
            github: "https://github.com/subrat29",
            linkedin: "https://linkedin.com/in/subratyadav",
            leetcode: "https://leetcode.com/subratyadav",
            twitter: "https://x.com/findingsubrat",
            discord: "https://discord.com/subratyadav",
            blog: "https://tech-trendz-seven.vercel.app/",
        },
    },
    about: {
        title: "Full Stack Developer | Innovator | Problem Solver",
        description: "I am a passionate full stack developer from Agra, India, with a track record of delivering innovative, real-world solutions through high-performance web applications.",
        offer: {
            "Frontend Excellence": "Crafting fast, responsive, and user-friendly interfaces.",
            "Backend Optimization": "Building secure, scalable, and efficient server-side solutions.",
            "UI/UX Design": "Designing intuitive, visually appealing, and functional user experiences.",
            "Open-Source Contributions": "Actively collaborating in open-source communities to drive impactful projects.",
            "Idea-to-Execution Expertise": "Leading and managing teams to transform ideas into practical solutions, validated by 3+ successful hackathon participations."
        }
    },
    navigation: [
        { title: 'About', id: 'about' },
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
            "title": "Task Manager App",
            "description": "A web application to manage daily tasks effectively.",
            "overview": "This app helps users organize their tasks by categories, set priorities, and track progress. The project faced challenges like ensuring real-time updates and creating a user-friendly interface. Solutions included implementing WebSocket for real-time communication and using Material-UI for consistent design.",
            "image": "/project1.png",
            "tech": ["React", "Express", "PostgreSQL"],
            "github": "https://github.com/username/task-manager",
            "live": "https://taskmanager-app.com"
        },
        {
            "title": "E-commerce Platform",
            "description": "A scalable e-commerce platform for small businesses.",
            "overview": "This project offers features like product catalog management, shopping cart, and secure payments. Challenges included handling high traffic and ensuring secure transactions. Solutions involved implementing load balancing and integrating Stripe for payment processing.",
            "image": "/a.png",
            "tech": ["Next.js", "Node.js", "MongoDB"],
            "github": "https://github.com/username/ecommerce-platform",
            "live": "https://ecommerce-demo.com"
        },
        {
            "title": "Portfolio Website",
            "description": "A personal portfolio to showcase projects and skills.",
            "overview": "The portfolio was designed to highlight personal achievements, with features like a contact form and blog integration. Challenges included optimizing performance and making the design responsive. Tailwind CSS and Lighthouse audits were used to achieve these goals.",
            "image": "/b.png",
            "tech": ["React", "Vite", "Firebase"],
            "github": "https://github.com/username/portfolio-website",
            "live": "https://portfolio-demo.com"
        },
        {
            "title": "Whatsapp Website",
            "description": "A personal portfolio to showcase projects and skills.",
            "overview": "The portfolio was designed to highlight personal achievements, with features like a contact form and blog integration. Challenges included optimizing performance and making the design responsive. Tailwind CSS and Lighthouse audits were used to achieve these goals.",
            "image": "/a.png",
            "tech": ["Reactjs", "Vite", "Firebase"],
            "github": "https://github.com/username2/portfolio-website",
            "live": "https://portfolio-demo2.com"
        }
    ],

    achievements: [
        {
            title: "First Prize in Hackathon",
            description: "Won first prize in a national-level hackathon for developing a real-time collaboration tool for remote teams.",
            images: ["/src/assets/project1.png", "/src/assets/a.png", "/src/assets/b.png"],
            date: "2023"
        },
        {
            title: "Employee of the Year",
            description: "Awarded Employee of the Year for exceptional contributions to the development of the company's flagship product.",
            images: ["/src/assets/employee-award.png", "/src/assets/team.png", "/src/assets/event.png"],
            date: "2022"
        },
        {
            title: "Top Contributor in Open Source",
            description: "Recognized as a top contributor for actively maintaining and enhancing popular open-source libraries.",
            images: ["/src/assets/open-source.png", "/src/assets/contributor.png", "/src/assets/community.png"],
            date: "2021"
        },
        {
            title: "Published Research Paper",
            description: "Published a research paper on AI-driven optimization algorithms in a reputed international journal.",
            images: ["/src/assets/research-paper.png", "/src/assets/presentation.png", "/src/assets/award.png"],
            date: "2020"
        }
    ],

    education: [
        {
            school: "Dr. Bhimrao Ambedkar University",
            degree: "Bachelor of Engineering - CSE",
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
        },
        {
            title: "Coming Soon",
            description: "Technical blogs and articles about web development and software engineering.",
            link: "#"
        },
        {
            title: "Coming Soon",
            description: "Technical blogs and articles about web development and software engineering.",
            link: "#"
        }
    ] 
};