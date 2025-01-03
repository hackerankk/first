import React from "react";
import Link from "next/link"; // Import Link from Next.js for routing
import {
  FaCheckCircle,
  FaClock,
  FaUserGraduate,
  FaSearch,
  FaClipboardList,
  FaBookOpen,
  FaDollarSign,
} from "react-icons/fa";

const SupportService = () => {
  // Array of services with title, description, and icon
  const services = [
    {
      icon: <FaCheckCircle className="text-5xl text-green-500" />,
      title: "Guaranteed A-Quality Work",
      description: "We are committed to delivering exceptional service and ensuring your complete satisfaction.",
      link: "/service/1", // Example link for each card
    },
    {
      icon: <FaClock className="text-5xl text-blue-500" />,
      title: "Delivery Before Deadline",
      description: "We understand the importance of meeting deadlines and will deliver your project on time, every time.",
      link: "/service/2", // Example link for each card
    },
    {
      icon: <FaUserGraduate className="text-5xl text-purple-500" />,
      title: "Subject Matter Expertise",
      description: "Our team consists of PhD holders and subject matter experts across various disciplines.",
      link: "/service/3", // Example link for each card
    },
    {
      icon: <FaClipboardList className="text-5xl text-yellow-500" />,
      title: "Experienced Editors and Researchers",
      description: "Senior editors analyze your work, supported by research facilities and data analysis tools.",
      link: "/service/4", // Example link for each card
    },
    {
      icon: <FaSearch className="text-5xl text-red-500" />,
      title: "Plagiarism Detection and Support",
      description: "We use advanced software to identify plagiarism and provide guidance on addressing it.",
      link: "/service/5", // Example link for each card
    },
    {
      icon: <FaBookOpen className="text-5xl text-indigo-500" />,
      title: "Dynamic Presentation Creation",
      description: "We help create impactful presentations for conferences that leave a lasting impression.",
      link: "/service/6", // Example link for each card
    },
    {
      icon: <FaDollarSign className="text-5xl text-teal-500" />,
      title: "Professional Payment Methods",
      description: "We offer flexible and student-friendly payment options.",
      link: "/service/7", // Example link for each card
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-200 py-12 px-6">
      {/* Section title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
        Why Choose Sai Associates?
      </h2>

      {/* Grid for services, responsive layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <Link key={index} href={service.link}>
            {/* Ensuring the entire card is clickable and styled */}
            <div
              className="p-6 bg-white shadow-md hover:shadow-xl rounded-lg border border-gray-200 
                transform hover:scale-105 transition-all duration-300 cursor-pointer h-full"
            >
              {/* Icon display in the card */}
              <div className="flex items-center justify-center mb-4">
                {service.icon}
              </div>

              {/* Service title */}
              <h3 className="text-lg font-semibold text-gray-800 text-center mb-2">
                {service.title}
              </h3>

              {/* Service description */}
              <p className="text-gray-600 text-center text-sm">
                {service.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SupportService;
