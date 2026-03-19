export const portfolioContent = {
    personalInfo: {
        name: "Subrat Yadav",
        title: "Full Stack + AI Engineer | Fintech | Open to Remote",
        email: "subratyadav29@gmail.com",
        phone: "+91 7820043752",
        location: "Gurugram, India",
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
        title: "Full Stack + AI Engineer | Fintech Systems | LLM & Chatbot Builder",
        description: "Full Stack & AI Engineer with 1+ year of experience building production-grade fintech and AI systems from scratch as part of the founding team at CirclePe. I own end-to-end engineering — from a 35-module NestJS backend (LOS, CRM, BRE, eKYC) to an AI-powered WhatsApp chatbot that automates tenant journeys using AWS Bedrock, RAG pipelines, and real-time workflow orchestration.",
        offer: {
            "Fintech Infrastructure": "Building Loan Origination Systems, credit underwriting engines, eKYC/eSign workflows, and multi-lender BRE from scratch — compliant, scalable, and production-ready.",
            "AI & LLM Engineering": "Designing multi-turn chatbots, RAG pipelines on vector databases, LLM function calling, and production observability with Langfuse on AWS Bedrock (Claude 3.5).",
            "Full-Stack Systems": "End-to-end product engineering — NestJS backends, React dashboards, async BullMQ pipelines, real-time Socket.io, and serverless AWS Lambda plugins."
        },
        currentLearning: ["AI Agents", "AWS Architecture"],
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
            category: "Languages",
            items: ["JavaScript", "TypeScript", "C++", "SQL"]
        },
        {
            category: "Frontend",
            items: ["React.js", "Next.js", "Redux", "Zustand", "TailwindCSS", "Radix UI", "ShadCN", "TanStack Query", "Zod", "React Hook Form", "Framer Motion", "XYFlow"]
        },
        {
            category: "Backend",
            items: ["NestJS", "Node.js", "Express.js", "REST APIs", "BullMQ", "Socket.io", "Prisma"]
        },
        {
            category: "AI / ML",
            items: ["AWS Bedrock (Claude 3.5)", "OpenAI", "LLM Function Calling", "RAG", "MongoDB Vector Search", "Langfuse", "Prompt Engineering"]
        },
        {
            category: "Databases",
            items: ["MongoDB", "PostgreSQL", "Redis", "MySQL"]
        },
        {
            category: "Cloud & Infra",
            items: ["AWS S3", "AWS Lambda", "AWS KMS", "AWS SES/SNS", "AWS Bedrock", "AWS SAM", "Azure", "Docker"]
        },
        {
            category: "Tools",
            items: ["Git", "GitHub", "Postman", "Figma", "Sentry", "New Relic"]
        }
    ],

    experience: [
        {
            company: "CirclePe",
            position: "Software Engineer / Founding Team",
            period: "March 2025 – Present | Gurugram, India",
            location: "Gurugram, India",
            description: "CirclePe eliminates security deposits from India's rental market. As an early engineer on the founding team, I own both the core fintech infrastructure and the AI product (Coco).",
            highlights: [
                "Architected end-to-end Loan Origination System (LOS) using NestJS (35+ modules) — real-time credit underwriting, CIBIL/Experian/Equifax integrations, eKYC (Digio, Digitap), e-sign, eMandate, and Cashfree payments.",
                "Built Business Rules Engine (json-rules-engine) for dynamic multi-lender credit approval and engineered BullMQ + Redis async pipeline for email, eMandate, and lead transfers.",
                "Developed CRM, LOS & B2B operator dashboards (React 18 + TanStack + Radix UI) with real-time Socket.io updates and role-based access control.",
                "Built Coco — AI-powered WhatsApp chatbot automating tenant rental journey using AWS Bedrock (Claude 3.5 Sonnet), RAG on MongoDB Vector Search, multi-turn conversation state, and Langfuse LLM observability.",
                "Designed serverless plugin architecture (AWS Lambda + SAM) for credit underwriting and document generation; built visual workflow designer (Next.js 16 + XYFlow)."
            ]
        },
        {
            company: "KiwiQ AI",
            position: "Full Stack Developer Intern",
            period: "Sep 2024 – Feb 2025 | California, USA (Remote)",
            description: "Built responsive frontend interfaces with React.js/ShadCN and optimized Node.js backend APIs, contributing to AI-driven product features and platform performance.",
            highlights: []
        },
        {
            company: "Hacktoberfest 2023 & GSSoC 2023",
            position: "Open-Source Contributor",
            period: "May 2023 – Oct 2023 | Remote",
            description: "Contributed to multiple open-source repositories — developed new components, resolved critical bugs, and improved code quality across Hacktoberfest'23 and GirlScript Summer of Code'23.",
            highlights: []
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
            "github": "https://github.com/Subrat29/Social-Pulse",
            "live": "https://socialpulse-seven.vercel.app/",  
            "slide": "https://www.youtube.com/watch?v=-NDzl1Y_dc4"  
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
            "title": "Top 150 Finalist @CodeX-24 Hackathon - PIET Panipat",
            "description": "Selected among top 150 finalists from 1500+ submissions at CodeX-24, organized by Hackingly at Panipat Institute of Engineering and Technology. Led Team IET AGRA to develop an innovative platform connecting local businesses with customers to combat online marketplace competition.",
            "images": ["/achievement/codex24/p1.jpg", "/achievement/codex24/certificate.jpg", "/achievement/codex24/p2.jpeg"],
            "date": "2024",
        },
        {
            "title": "National Finalist @Level SuperMind Hackathon'25",
            "description": "Led Team Endgame to national finals with 'Social Pulse' - a social media analytics tool built using Langflow, OpenAI, and Astra DB. Earning recognition from industry leaders like Hitesh Choudhary and Ranveer Allahbadia.",
            "images": ["/achievement/levelsupermind-hackathon25/p1.png", "/achievement/levelsupermind-hackathon25/p2.jpeg"],
            "date": "2024"
        },
        {
            "title": "Recognition for outstanding contributions @Hacktoberfest'23",
            "description": "Awarded a Certificate of Recognition for outstanding contributions to the hackathon during Hacktoberfest'23",
            "images": ["achievement/hacktoberfest23/p1.webp", "achievement/hacktoberfest23/p2.png"],
            "date": "2023"
        },
        {
            "title": "Solved 500+ DSA Challenges",
            "description": "Solved 500+ data structure and algorithm challenges on LeetCode and GeeksforGeeks, specializing in graphs, dynamic programming, and data manipulation.",
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
