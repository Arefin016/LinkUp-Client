import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: '5 Tips for Effective Scheduling',
      date: 'October 24, 2024',
      excerpt: 'Discover how to streamline your scheduling process and make the most of your time.',
      link: '/blog/5-tips-for-effective-scheduling',
    },
    {
      id: 2,
      title: 'How to Optimize Your Meeting Schedule',
      date: 'October 20, 2024',
      excerpt: 'Learn strategies for optimizing your meeting schedule to improve productivity.',
      link: '/blog/how-to-optimize-your-meeting-schedule',
    },
    {
      id: 3,
      title: 'Benefits of Using Scheduling Tools',
      date: 'October 18, 2024',
      excerpt: 'Explore the benefits of using scheduling tools like LinkUp for managing appointments.',
      link: '/blog/benefits-of-using-scheduling-tools',
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map(({ id, title, date, excerpt, link }) => (
          <div key={id} className="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="text-gray-600">{date}</p>
            <p className="mt-2 text-gray-700">{excerpt}</p>
            <Link to="/EffectiveScheduling" className="text-emerald-500 mt-4 inline-block hover:underline">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
