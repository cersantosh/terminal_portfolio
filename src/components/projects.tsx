import { FaGithub } from "react-icons/fa";
import { motion, type Variants } from "framer-motion";

type ProjectType = {
  name: string;
  description: string;
  techStack: string;
  github: string;
};

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const card: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 90, damping: 14 },
  },
};

const headline: Variants = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Projects = () => {
  const projects: ProjectType[] = [
    {
      name: "ProShorts",
      description:
        "An application where users can upload short videos related to programming.",
      techStack: "Flutter | GetX | Firebase | MongoDB | NodeJS",
      github: "https://github.com/cersantosh/proshorts",
    },
    {
      name: "QuickShare",
      description:
        "A real-time chat application where users can share messages and files quickly.",
      techStack: "React JS | Node JS | Socket.IO | Firebase | MongoDB",
      github: "https://github.com/cersantosh/QuickShare",
    },
    {
      name: "DuiPangrey",
      description:
        "A marketplace where users can list their second-hand bikes and scooters for sale.",
      techStack: "HTML | CSS | JavaScript | PHP | MySQL",
      github: "https://github.com/cersantosh/duipangrey",
    },
    {
      name: "Fire Detection",
      description:
        "Detects fire from uploaded images using AI. Built with React frontend and Python backend.",
      techStack: "React | Python | Flask | OpenCV | TensorFlow",
      github: "https://github.com/cersantosh/fire-detection",
    },
  ];

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={container}
      className="p-6 rounded-xl shadow-xl max-w-5xl mx-auto border border-green-700 mt-10 bg-black text-green-200"
    >
      {/* headline */}
      <motion.p
        variants={headline}
        className="mb-6 text-lg font-mono text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-400 to-emerald-300 animate-pulse"
      >
        <span className="text-green-500">$ --projects |</span>
      </motion.p>

      {/* project grid */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      <Footer />
    </motion.div>
  );
};

const ProjectCard = ({ project }: { project: ProjectType }) => {
  return (
    <motion.div
      variants={card}
      whileHover={{ scale: 1.04, borderColor: "#34d399" }} // hover lift
      className="p-5 rounded-xl border border-green-600 bg-gray-900 transition-colors duration-300"
    >
      <h3 className="text-xl font-bold text-green-300 mb-2">{project.name}</h3>

      <p className="mb-3 text-sm text-green-100">{project.description}</p>

      <p className="mb-3 text-sm flex flex-col space-x-1.5 sm:flex-row items-start sm:items-center">
        <span className="text-green-400 font-semibold shrink-0 mb-1">
          📦 Tech Stack:
        </span>
        <span className="text-white break-words text-center">
          {project.techStack}
        </span>
      </p>

      <div className="flex justify-center">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3 py-1 mt-2 text-sm font-mono text-green-200 bg-green-700/20 border border-green-500 rounded-lg hover:bg-green-600/40 transition-all duration-300 max-w-full break-words"
        >
          <FaGithub className="text-green-400 flex-shrink-0" />
          <span>git clone</span>
          <span className="truncate max-w-[150px] md:max-w-[180px] text-blue-300">
            {project.github}
          </span>
        </a>
      </div>
    </motion.div>
  );
};
const Footer = () => {
  return (
    <motion.p
      variants={headline}
      className="mt-10 text-center text-green-400 text-sm font-mono"
    >
      $ echo <span className="text-green-200">"Build. Share. Repeat."</span>
    </motion.p>
  );
};
export default Projects;
