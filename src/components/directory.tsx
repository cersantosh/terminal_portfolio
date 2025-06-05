import type { CommandType } from "../type/command";
import { motion } from "framer-motion";
import {
  FaUser,
  FaEnvelope,
  FaProjectDiagram,
  FaGraduationCap,
  FaBriefcase,
} from "react-icons/fa";

const Directory = () => {
  const directoriesList: (CommandType & { icon: React.ReactElement })[] = [
    { name: "about", description: "Gives description about me", icon: <FaUser /> },
    { name: "contact", description: "Gives contact details about me", icon: <FaEnvelope /> },
    { name: "projects", description: "Gives major projects done by me", icon: <FaProjectDiagram /> },
    { name: "education", description: "Gives education details about me", icon: <FaGraduationCap /> },
    { name: "experiences", description: "Gives experiences about me", icon: <FaBriefcase /> },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.15,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120 },
    },
  };

  return (
    <motion.div
      className="bg-black max-w-3xl mx-auto p-6 rounded-md font-mono text-green-400 border border-green-700"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2
        className="flex items-center text-green-500 mb-6 text-xl font-bold tracking-wide"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <FaBriefcase className="mr-3 text-green-600" />
        Available Directories
      </motion.h2>

      <ul className="space-y-3">
        {directoriesList.map((dir, idx) => (
          <motion.li
            key={idx}
            className="flex items-center gap-3 bg-[#101010] p-3 rounded-md cursor-default transition-colors duration-200 hover:bg-green-900 hover:text-green-300"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-green-500 text-lg">{dir.icon}</span>
            <div>
              <span className="font-bold">{dir.name}</span>
              <span className="ml-2 text-green-500">: {dir.description}</span>
            </div>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Directory;
