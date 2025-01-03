import React from "react";
import { FaEdit, FaSearch, FaLaptopCode, FaPrint } from "react-icons/fa";
import Link from "next/link"; // Import Link from Next.js

const Services = () => {
  // Services with icons and descriptions
  const services = [
    {
      icon: <FaEdit className="text-4xl text-blue-500" />,
      title: "Thesis Support",
      description: "We provide expert thesis editing, plagiarism checks, and modifications to meet academic standards.",
      link: "/thesis-support", // Link to Thesis Support page
    },
    {
      icon: <FaLaptopCode className="text-4xl text-green-500" />,
      title: "Project Development",
      description: "Assistance in developing projects for various courses, from research to execution and report writing.",
      link: "/project-development", // Link to Project Development page
    },
    {
      icon: <FaPrint className="text-4xl text-yellow-500" />,
      title: "Printing and Finishing",
      description: "High-quality printing, binding, and other document finishing services for your projects and theses.",
      link: "/printing-finishing", // Link to Printing and Finishing page
    },
    {
      icon: <FaSearch className="text-4xl text-teal-500" />,
      title: "Additional Services",
      description: "We offer photocopying, lamination, paper publication support, and conference assistance.",
      link: "/additional-services", // Link to Additional Services page
    },
  ];

  return (
    <div className="bg-gray-50 py-12 px-16">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
        Our Core Services
      </h2>

      {/* Grid layout for main services */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <Link href={service.link} key={index}>
            {/* Link wraps each card directly */}
            <div
              className="bg-white p-6 shadow-md rounded-lg border border-gray-200 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-xl"
            >
              {/* Service Icon */}
              <div className="flex justify-center mb-4">{service.icon}</div>

              {/* Service Title */}
              <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">{service.title}</h3>

              {/* Service Description */}
              <p className="text-gray-600 text-sm text-center">{service.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
