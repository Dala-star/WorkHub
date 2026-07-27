import { FaCode, FaGraduationCap, FaPalette } from "react-icons/fa";

const services = [
  {
    id: 1,
    icon: FaCode,
    title: "Web Development",
    description:
      "Modern, responsive websites and web applications built for performance and growth.",
    items: [
      "Business Websites",
      "Landing Pages",
      "Web Applications",
      "Dashboards",
    ],
  },

  {
    id: 2,
    icon: FaPalette,
    title: "Graphic Design",
    description:
      "Professional visuals that strengthen your brand and communicate your message.",
    items: [
      "Logos & Branding",
      "Social Media Graphics",
      "Posters & Flyers",
      "Marketing Materials",
    ],
  },

  {
    id: 3,
    icon: FaGraduationCap,
    title: "Technology Tutoring",
    description:
      "One-on-one guidance to help students and professionals master modern technology.",
    items: [
      "HTML & CSS",
      "React",
      "Databases",
      "Programming Support",
    ],
  },
];

export default services;