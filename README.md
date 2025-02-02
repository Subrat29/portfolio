# Minimal Portfolio Template
A modern open-source, responsive portfolio template built with React, Tailwind CSS, and Vite. Features a dark/light theme, smooth animations, and sections for showcasing skills, experience, projects, achievements, and more.

## Features

- 🌓 Dark/Light theme toggle
- 📱 Fully responsive design
- 🎨 Smooth animations and transitions
- 🖼️ Lazy-loaded images
- 📊 Interactive components
- 🎯 SEO-friendly structure

## Getting Started

### Installation

1. Clone the repository:

```sh
git clone https://github.com/Subrat29/minimal-portfolio-template.git
cd minimal-portfolio-template
```

2. Install dependencies:

```sh
npm install
```

3. Start development server:

```sh
npm run dev
```

## Customization Guide

### 1. Personal Information

Edit `src/data/content.js` to update your information:

```js
export const portfolioContent = {
  personalInfo: {
    name: 'Your Name',
    title: 'Your Title',
    email: 'your.email@example.com',
    location: 'Your Location',
    image: '/path/to/your/image.jpg',
    social: {
      github: 'your-github-url',
      linkedin: 'your-linkedin-url',
      // Add other social links
    },
  },
  // ...
};
```

### 2. Sections Configuration

#### Skills

Add your skills in categories:

```js
skills: [
  {
    category: 'Frontend',
    items: ['React', 'Vue', 'TypeScript'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Python', 'Java'],
  },
];
```

#### Experience

Add your work experience:

```js
experience: [
  {
    company: 'Company Name',
    position: 'Your Role',
    period: '2023 - Present',
    description: 'Your responsibilities and achievements',
  },
];
```

#### Projects

Showcase your projects:

```js
projects: [
  {
    title: 'Project Name',
    description: 'Project description',
    overview: 'Project overview',
    image: '/path/to/project-image.png',
    tech: ['React', 'Node.js'],
    github: 'project-repo-url',
    live: 'live-demo-url',
    slides: 'slides-url',
  },
];
```

#### Achievements & Education

Add your accomplishments and education history:

```js
achievements: [
    {
        title: "Achievement Title",
        description: "Description",
        images: ["/path/to/image1.jpg", "/path/to/image2.jpg"],
        date: "2024"
    }
],

education: [
    {
        school: "University Name",
        degree: "Your Degree",
        year: "2020 - 2024",
        location: "Location",
        description: "Relevant coursework and achievements"
    }
]
```

#### Blogs

Add your blog posts:

```js
blogs: [
  {
    title: 'Blog Post Title',
    description: 'Post description',
    image: '/path/to/image.jpg',
    url: 'blog-post-url',
    tags: ['React', 'Node.js'],
  },
];
```

### 3. Styling Customization

1. Colors: Edit the gradient colors in Tailwind classes:

```jsx
className = 'bg-gradient-to-r from-blue-600 to-purple-600';
```

2. Edit `tailwind.config.js` to customize theme:

```js
theme: {
    extend: {
        colors: {
            primary: {...},
            secondary: {...}
        }
    }
}
```

### 4. Adding Assets

1. Place images in the `public` directory
2. Update image paths in `content.js`
3. Add your resume PDF to `public` directory
4. Update resume link in `personalInfo`

## Project Structure

```
src/
├── components/         # React components
├── data/              # Content configuration
├── App.jsx            # Main application
├── index.css          # Global styles
└── main.jsx          # Entry point
```

## Deployment

The project can be deployed to platforms like:

- Vercel
- Netlify
- GitHub Pages

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## Contact

For any queries, reach out to me at [subratyadav29@gmail.com](mailto:subratyadav29@gmail.com) .
