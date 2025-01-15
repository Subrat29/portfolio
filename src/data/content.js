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
            "Full-Stack Development": "Building scalable, secure, and high-performance web applications with seamless integration of frontend and backend technologies.",
            "UI/UX Design and Optimization": "Designing intuitive, visually appealing interfaces and delivering responsive, user-focused experiences that drive engagement.",
            "Innovative Problem-Solving": "Transforming ideas into impactful solutions through teamwork, real-time application development, and open-source contributions, validated by success in competitive hackathons."
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
            description: "As a Full Stack Developer, I designed and developed a comprehensive school management application leveraging React.js, Node.js, and MongoDB to streamline student operations for over 500 students. I enhanced the user experience with Tailwind CSS and Shadcn, resulting in a 30% increase in engagement. Additionally, I implemented real-time updates using WebSockets to improve user interaction by 25% and ensured secure access by integrating role-based authentication, reducing unauthorized access by 40%."
        },
        {
            company: "Hacktoberfest 2023",
            position: "Open-Source Contributor",
            period: "October 2023",
            description: "During Hacktoberfest 2023, I actively contributed to open-source projects by engineering innovative components that enhanced code quality and usability. I resolved over 20 critical bugs, significantly improving project stability and functionality. By achieving cross-browser compatibility, I delivered a seamless and consistent user experience, boosting satisfaction for a diverse user base."
        },
        {
            company: "GirlScript Summer of Code 2023",
            position: "Open-Source Contributor",
            period: "May 2023 - July 2023",
            description: "At GirlScript Summer of Code 2023, I played a key role in developing impactful features and components for various open-source projects. My contributions included optimizing workflows and refactoring code to enhance performance and scalability. Additionally, I focused on improving interface consistency across platforms, delivering a polished and user-friendly experience."
        }
    ],

    projects: [
        {
            "title": "StartSphere",
            "description": "A multi-feature solution for emerging entrepreneurs.",
            "overview": "StartSphere is a platform designed to support startups with features like ML-driven friend suggestions, real-time chat, and sections for posts, networking, and event management. The project improved networking opportunities by 50%, and challenges like real-time communication and scalability were addressed using Socket.io and a modular architecture.",
            "image": "project/startsphere.png",
            "tech": ["React.js", "Flowbite", "Tailwind CSS", "Node.js", "Socket.io", "NLP", "Machine Learning"],
            "github": "https://github.com/Subrat29/StartSphere-Your-Startup-Ecosystem-Integrator",
            "live": "https://startup-topaz.vercel.app/",
            "slide":"https://docs.google.com/presentation/d/124-wJ0WYIgkYXU4x7LfGitqw9PGSPsGR/edit?usp=sharing&ouid=101022416265119991772&rtpof=true&sd=true"
        },
        {
            "title": "Faculty Excellence Tracker",
            "description": "A system for automating career advancement for higher education faculty.",
            "overview": "This project automates faculty appraisals using predefined scoring formulas, ORCID-based profile imports, and real-time dashboards. It integrates with LMS and HR systems to streamline data synchronization and boosts engagement through incentive-based gamification features like badges and leaderboards.",
            "image": "project/fet.png",
            "tech": ["React.js", "Node.js", "D3.js"],
            "github": "https://github.com/Subrat29/FacultyExcellenceTracker",
            "live": "https://faculty-excellence-tracker.vercel.app/",
            "slide": "https://docs.google.com/presentation/d/1A_NDCD5XQUA9tzaCHK93rHoVGJsADomA/edit?usp=sharing&ouid=101022416265119991772&rtpof=true&sd=true"
        },
        {
            "title": "TechTrendz",
            "description": "A modern platform for tech blogging.",
            "overview": "TechTrendz allows users to create and manage blogs with features like real-time editing, secure access, and seamless form handling. The platform's load time was reduced by 80% using optimized parsing techniques, enhancing the user experience significantly.",
            "image": "project/techtrendz.png",
            "tech": ["React.js", "Tailwind CSS", "Shadcn", "Redux", "React Hook Form", "TinyMCE", "Appwrite"],
            "github": "https://github.com/Subrat29/TechTrendz",
            "live": "https://tech-trendz-seven.vercel.app/",
            // "slide":""
        }
    ],

    achievements: [
        {
            "title": "Winner @YourStory Digital Innovation Hackathon",
            "description": "Led team EndGame25 to secure 1st Place among 1,515 candidates by building a MERN & ML-based startup ecosystem solution.",
            "images": ["/src/assets/hackathon1.png", "/src/assets/teamwork.png", "/src/assets/award.png"],
            "date": "2024"
        },
        {
            "title": "Runner-Up @Smart India Hackathon 2024",
            "description": "Navigated the team to emerge as top 6 finalists and secure the runner-up position among 150 teams by addressing a designated problem statement.",
            "images": ["/src/assets/sih2024.png", "/src/assets/team.png", "/src/assets/presentation.png"],
            "date": "2024"
        },
        {
            "title": "Finalist @Codex24 Hackathon",
            "description": "Recognized as a finalist.",
            "images": ["/src/assets/codex24.png", "/src/assets/contributor.png", "/src/assets/certificate.png"],
            "date": "2023"
        },
        {
            "title": "Finalist @Level SuperMind Hackathon'25",
            "description": "Recognized as a finalist .",
            "images": ["/src/assets/codex24.png", "/src/assets/contributor.png", "/src/assets/certificate.png"],
            "date": "2023"
        },
        {
            "title": "Recognition for outstanding contributions @Hacktoberfest'23",
            "description": "Awarded a Certificate of Recognition for outstanding contributions to the hackathon during Hacktoberfest'23",
            "images": ["/src/assets/codex24.png", "/src/assets/contributor.png", "/src/assets/certificate.png"],
            "date": "2023"
        },
        {
            "title": "Solved 400+ DSA Challenges",
            "description": "Excelled in solving 400+ data structure and algorithm challenges on platforms like LeetCode and GeeksforGeeks, specializing in programming, graphs, and data manipulation.",
            "images": ["/src/assets/dsa.png", "/src/assets/leetcode.png", "/src/assets/graphs.png"],
            "date": "2023"
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