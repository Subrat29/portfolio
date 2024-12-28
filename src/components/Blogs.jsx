import React, { useState } from 'react';
import { FaExternalLinkAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Blogs = ({ blogs }) => {
  const [showAll, setShowAll] = useState(false);
  const visibleBlogs = showAll ? blogs : blogs.slice(0, 2);

  return (
    <section className="relative py-24 max-w-6xl mx-auto px-4" id="blogs">
      {/* Section Title */}
      <div className="text-center mb-20">
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
          Featured Blogs
        </h2>
      </div>

      {/* Blogs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {visibleBlogs.map((blog, index) => (
          <div key={index} className="group relative">
            <div className="h-full p-6 transition-all duration-300 hover:translate-x-2">
              {/* Blog Image */}
              <div className="relative aspect-video mb-6 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800">
                <LazyLoadImage
                  src={blog.image}
                  alt={blog.title}
                  effect="blur"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Header with gradient line */}
              <div className="flex items-center space-x-3 mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {blog.title}
                </h3>
                <div className="flex-grow h-px bg-gradient-to-r from-blue-600/20 to-purple-600/20 dark:from-blue-400/20 dark:to-purple-400/20"></div>
              </div>

              {/* Tags if you have them */}
              {blog.tags && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {blog.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 rounded-full text-sm bg-gray-50 dark:bg-gray-800/50 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700/50 hover:border-blue-500 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {blog.description}
              </p>

              {/* Read More Link */}
              <a
                href={blog.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:translate-y-[-2px]"
              >
                <span>Read More</span>
                <FaExternalLinkAlt size={16} />
              </a>

              {/* Bottom gradient line that appears on hover */}
              <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Show More/Less Button */}
      {blogs.length > 2 && (
        <div className="flex justify-center mt-16">
          <button
            onClick={() => setShowAll(!showAll)}
            className="group px-4 py-2 rounded-full text-sm bg-gray-50 dark:bg-gray-800/50 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700/50 hover:border-blue-500 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all duration-300 flex items-center gap-2"
          >
            {showAll ? (
              <>
                Show Less <FaChevronUp className="group-hover:transform group-hover:-translate-y-1 transition-transform duration-300" />
              </>
            ) : (
              <>
                Show More Blogs <FaChevronDown className="group-hover:transform group-hover:translate-y-1 transition-transform duration-300" />
              </>
            )}
          </button>
        </div>
      )}

      {/* Decorative background elements */}
      <div className="absolute -z-10 w-full h-full top-0 left-0 opacity-30">
        <div className="absolute top-20 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-20 right-0 w-72 h-72 bg-purple-200 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
      </div>
    </section>
  );
};

export default Blogs;