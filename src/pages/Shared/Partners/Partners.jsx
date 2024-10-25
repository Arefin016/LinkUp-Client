import React from 'react';

const Partners = () => {
  const partnersList = [
    {
      id: 1,
      name: 'Company A',
      logo: 'https://via.placeholder.com/150', // Replace with actual logo URL
      link: 'https://www.companya.com',
    },
    {
      id: 2,
      name: 'Company B',
      logo: 'https://via.placeholder.com/150', // Replace with actual logo URL
      link: 'https://www.companyb.com',
    },
    {
      id: 3,
      name: 'Company C',
      logo: 'https://via.placeholder.com/150', // Replace with actual logo URL
      link: 'https://www.companyc.com',
    },
    {
      id: 4,
      name: 'Company D',
      logo: 'https://via.placeholder.com/150', // Replace with actual logo URL
      link: 'https://www.companyd.com',
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Our Partners</h1>
      <p className="mb-6">
        We are proud to collaborate with leading organizations in the industry:
      </p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {partnersList.map(({ id, name, logo, link }) => (
          <a key={id} href={link} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
            <img src={logo} alt={name} className="h-24 mb-4" /> {/* Adjust size as needed */}
            <h2 className="text-lg font-semibold text-center">{name}</h2>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Partners;
