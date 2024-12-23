import React from 'react';
import { portfolioContent } from '../data/content';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Blogs = () => {
  const { blogs } = portfolioContent;

  return (
    <section 
      id="blogs" 
      className="py-16 flex flex-col items-center px-4"
    >
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white transition-colors duration-200">
        BLOGS
      </h2>

      {/* Blogs Grid */}
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogs.map((blog, index) => (
          <div 
            key={index} 
            className="p-6 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 hover:shadow-lg dark:hover:shadow-blue-500/10 transition-all duration-200 group"
          >
            {/* Blog Title */}
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
              {blog.title}
            </h3>

            {/* Blog Description */}
            <p className="text-lg mt-4 mb-6 text-gray-600 dark:text-gray-400">
              {blog.description}
            </p>

            {/* Blog Link */}
            <div className="flex gap-4">
              <a 
                href={blog.live} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-200 hover:-translate-y-1"
              >
                <FaExternalLinkAlt size={16} /> Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;