import React from 'react';

const Benefits = () => {
  const benefitsList = [
    {
      id: 1,
      title: 'Efficient Scheduling',
      description: 'LinkUp allows users to effortlessly schedule meetings and appointments, saving time and reducing the hassle of back-and-forth emails.',
    },
    {
      id: 2,
      title: 'User-Friendly Interface',
      description: 'Our intuitive design ensures that users of all skill levels can easily navigate and utilize the platform without any confusion.',
    },
    {
      id: 3,
      title: 'Integration with Calendars',
      description: 'LinkUp seamlessly integrates with popular calendar applications, ensuring that all your appointments are synced and up-to-date.',
    },
    {
      id: 4,
      title: 'Customizable Notifications',
      description: 'Receive personalized reminders and notifications so you never miss an important meeting or deadline.',
    },
    {
      id: 5,
      title: 'Secure and Reliable',
      description: 'We prioritize user security and privacy, implementing the latest technologies to protect your data and ensure a reliable experience.',
    },
    {
      id: 6,
      title: 'Team Collaboration',
      description: 'Facilitate team meetings and collaborations with features designed to enhance communication and workflow.',
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Benefits of Using LinkUp</h1>
      <p className="mb-6">
        Discover how LinkUp can enhance your scheduling experience with these key benefits:
      </p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {benefitsList.map(({ id, title, description }) => (
          <div key={id} className="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="mt-2 text-gray-700">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
