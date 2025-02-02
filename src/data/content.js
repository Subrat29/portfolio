export const portfolioContent = {
    personalInfo: {
        name: "Subrat Yadav",
        title: "Full Stack Developer | Innovator",
        email: "subratyadav29@gmail.com",
        phone: "+91 7820043752",
        location: "Agra, India",
        image: "/myImages/p3.jpg",
        resume: "/SubratYadav_CV.pdf",
        social: {
            github: "https://github.com/subrat29",
            linkedin: "https://linkedin.com/in/subratyadav",
            leetcode: "https://leetcode.com/u/subrat29",
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
        },
        currentLearning: ["TypeScript", "Next.js"],
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
            company: "Stealth AI Startup",
            position: "Full Stack Developer",
            period: "Jan 2025 - Present",
            description: "As a Full Stack Developer, I'm building scalable web applications using Next.js and TypeScript for the frontend while developing and optimizing Node.js backend APIs for performance and reliability. I actively contribute to AI-driven projects, crafting innovative solutions, and collaborate with cross-functional teams to deliver impactful results. Key technologies include Next.js, TypeScript, Node.js, and various AI technologies."
        },
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
            "title": "Start Sphere",
            "description": "A multi-feature solution for emerging entrepreneurs.",
            "overview": "StartSphere is a platform designed to support startups with features like ML-driven friend suggestions, real-time chat, and sections for posts, networking, and event management. The project improved networking opportunities by 50%, and challenges like real-time communication and scalability were addressed using Socket.io and a modular architecture.",
            "image": "project/startsphere2.png",
            "tech": ["React.js", "Flowbite", "Tailwind CSS", "Node.js", "Socket.io", "NLP", "ML"],
            "github": "https://github.com/Subrat29/StartSphere-Your-Startup-Ecosystem-Integrator",
            "live": "https://startup-topaz.vercel.app/",
            "slide": "https://docs.google.com/presentation/d/124-wJ0WYIgkYXU4x7LfGitqw9PGSPsGR/edit?usp=sharing&ouid=101022416265119991772&rtpof=true&sd=true"
        },
        {
            "title": "Faculty Excellence Tracker",
            "description": "A system for automating career advancement for higher education faculty.",
            "overview": "This project automates faculty appraisals using predefined scoring formulas, ORCID-based profile imports, and real-time dashboards. It integrates with LMS and HR systems to streamline data synchronization and boosts engagement through incentive-based gamification features like badges and leaderboards.",
            "image": "project/fet2.png",
            "tech": ["React.js", "Node.js", "D3.js"],
            "github": "https://github.com/Subrat29/FacultyExcellenceTracker",
            "live": "https://faculty-excellence-tracker.vercel.app/",
            "slide": "https://docs.google.com/presentation/d/1A_NDCD5XQUA9tzaCHK93rHoVGJsADomA/edit?usp=sharing&ouid=101022416265119991772&rtpof=true&sd=true"
        },
        {
            "title": "Tech Trendz",
            "description": "A modern platform for tech blogging.",
            "overview": "TechTrendz allows users to create and manage blogs with features like real-time editing, secure access, and seamless form handling. The platform's load time was reduced by 80% using optimized parsing techniques, enhancing the user experience significantly.",
            "image": "project/techtrendz3.png",
            "tech": ["React.js", "Tailwind CSS", "Shadcn", "Redux", "React Hook Form", "TinyMCE", "Appwrite"],
            "github": "https://github.com/Subrat29/TechTrendz",
            "live": "https://tech-trendz-seven.vercel.app/",
            // "slide":""
        },
        {
            "title": "Social Pulse",
            "description": "An innovative social media analytics tool that transforms engagement data into actionable insights.",
            "overview": "Social Pulse is a comprehensive analytics platform that leverages AI to analyze social media engagement data. The platform integrates Langflow for workflow automation and uses GPT models to generate intelligent insights. Built with Astra DB for robust data management, it provides real-time performance metrics analysis to help businesses make data-driven decisions.",
            "image": "project/social-pulse4.jpeg",
            "tech": ["Langflow", "OpenAI", "Astra DB", "DataStax", "Python"],
            "github": "https://github.com/Subrat29/Social-Pulse",  // You'll need to update with the correct GitHub URL
            "live": "https://socialpulse-seven.vercel.app/",  // Based on the link you provided
            "demo": "https://www.youtube.com/watch?v=-NDzl1Y_dc4"  // I added a demo field since you have a demo video
        }
    ],

    achievements: [
        {
            "title": "Winner @YourStory Digital Innovation Hackathon",
            "description": "Led team EndGame25 to secure 1st Place among 1,515 candidates by building a MERN & ML-based startup ecosystem solution.",
            "images": ["/achievement/yourstory-hackathon/p1.png", "/achievement/yourstory-hackathon/p2.png", "/achievement/yourstory-hackathon/p3.png"],
            "date": "2024"
        },
        {
            "title": "Runner-Up @Smart India Hackathon 2024",
            "description": "Navigated the team to emerge as top 6 finalists and secure the runner-up position among 150 teams by addressing a designated problem statement.",
            "images": ["/achievement/sih24/p1.jpg", "/achievement/sih24/certificate.jpg", "/achievement/sih24/p2.jpg", "/achievement/sih24/p3.JPG", "/achievement/sih24/p4.JPG"],
            "date": "2024"
        },
        {
            "title": "Finalist @Codex24 Hackathon",
            "description": "Recognized as a finalist.",
            "images": ["/achievement/codex24/p1.jpg", "/achievement/codex24/certificate.jpg", "/achievement/codex24/p2.jpeg"],
            "date": "2023"
        },
        {
            "title": "Finalist @Level SuperMind Hackathon'25",
            "description": "Recognized as a finalist .",
            "images": ["/achievement/levelsupermind-hackathon25/p1.png", "/achievement/levelsupermind-hackathon25/p2.jpeg"],
            "date": "2023"
        },
        {
            "title": "Recognition for outstanding contributions @Hacktoberfest'23",
            "description": "Awarded a Certificate of Recognition for outstanding contributions to the hackathon during Hacktoberfest'23",
            "images": ["achievement/hacktoberfest23/p1.webp", "achievement/hacktoberfest23/p2.png"],
            "date": "2023"
        },
        {
            "title": "Solved 400+ DSA Challenges",
            "description": "Excelled in solving 400+ data structure and algorithm challenges on platforms like LeetCode and GeeksforGeeks, specializing in programming, graphs, and data manipulation.",
            "images": ["achievement/dsa_challenges/p1.jpg", "achievement/dsa_challenges/p2.png"],
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
            title: "Access Token and Refresh Token",
            description: "In today’s world, many apps and websites use access tokens and refresh tokens to keep users securely logged in without needing them to enter their password repeatedly...",
            image: "/blog/p1.png",
            url: "https://tech-trendz-seven.vercel.app/post/access-token-and-refresh-token",
            tags: ["Referesh Token", "Access Token", "Security"]
        },
        {
            title: "Writing Clean JavaScript",
            description: "JavaScript is one of the most popular programming languages in web development, known for its flexibility and wide application across browsers and servers...",
            image: "/blog/p2.png",
            url: "https://tech-trendz-seven.vercel.app/post/writing-clean-javascript",
            tags: ["JavaScript", "Clean Code", "Best Practices"]
        }
    ]
};