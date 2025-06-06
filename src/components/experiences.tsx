import { motion, type Variants } from "framer-motion";

const experienceData = [
  {
    title: "Intern",
    details: `Position       : MERN Stack Developer Intern (Remote)
Company        : Nagarik Solution Pvt. Ltd.
Duration       : 3 Months
Description    : Worked on real-world MERN applications and team collaboration.

Skills Gained  : 
  - REST APIs, MongoDB aggregation
  - React hooks & component patterns
  - Git & Remote Agile collaboration`,
  },
  {
    title: "Full Time",
    details: `Position       : MERN Stack Developer (Full-Time)
Company        : Nagarik Solution Pvt. Ltd.
Duration       : Oct 2024 - Present
Description    : Building scalable web platforms using MERN stack and managing end-to-end feature development.`,
  },
];

const techStack = [
  "React.js",
  "Node.js + Express",
  "MongoDB",
  "JWT-based Authentication",
  "Tailwind CSS",
  "Firebase (Notifications & Real-time)",
  "Tanstack Query",
  "React Hook Form",
];

const projects = [
  {
    title: "NHMIS (National Health Management Information System)",
    description:
      "A full-scale national healthcare platform for managing patient records, OPD/IPD, medicine prescriptions, lab test orders, and digital reports. Integrated outreach data from FCHVs for maternal health, immunization, and disease outbreak tracking. Role-based dashboards for government and medical users.",
    skillsGained: [
      "MongoDB Aggregation for statistical reports",
      "Role-based dashboard creation",
      "Complex workflow modeling (hospital & outreach)",
      "Health data visualization",
      "User access level management",
    ],
  },
  {
    title: "Hospital Management System",
    description:
      "An internal hospital automation solution for tracking patient visits, appointments, medical history, in/out-patient details, and billing. Provided interfaces and access control tailored for doctors, administrators, and receptionists.",
    skillsGained: [
      "Patient workflow mapping",
      "Role-based UI/UX logic",
      "Doctor scheduling logic",
      "Medical record privacy handling",
      "Invoice and billing generation",
    ],
  },
  {
    title: "Data Collection System",
    description:
      "A web-based application for assigning hierarchical survey tasks to municipal officers and field enumerators. Real-time task status updates and escalation alerts powered by Firebase. Citizens’ records were analyzed for resource planning.",
    skillsGained: [
      "Task delegation system design",
      "Firebase real-time sync",
      "Role-specific notifications",
      "User-level data visibility",
      "Hierarchical data collection model",
    ],
  },
  {
    title: "Lab Registration",
    description:
      "End-to-end digital registration and certification system for diagnostic labs. Multi-step form process with document uploads, status tracking, and a reviewer dashboard with notification-based updates.",
    skillsGained: [
      "Multi-step form architecture",
      "File validation and verification",
      "Admin reviewer backend",
      "Status progression tracking",
      "Notification system integration",
    ],
  },
  {
    title: "Pharmacy Management System",
    description:
      "Software solution to handle hospital pharmacy inventory, sales, billing, and vendor management. Included stock alerts, expiry tracking, invoice generation, and secure user roles.",
    skillsGained: [
      "Inventory tracking logic",
      "Stock expiry and alert handling",
      "Dynamic invoice generation",
      "Secure role-based login system",
      "Search and autocomplete integration",
    ],
  },
];

// Animation Variants
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { when: "beforeChildren", staggerChildren: 0.15 },
  },
};

const card: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 90, damping: 14 },
  },
};

const heading: Variants = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Experiences = () => {
  return (
    <motion.div
      className="p-6 rounded-xl shadow-xl max-w-5xl mx-auto border border-green-700 mt-10 bg-black text-green-200"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <ExperienceCard />
      <ProjectCard />
      <CommonTechStack />
      <Foooter />
    </motion.div>
  );
};

const Foooter = () => {
  return (
    <motion.p
      variants={heading}
      className="mt-10 text-center text-green-400 text-sm font-mono"
    >
      $ echo{" "}
      <span className="text-green-200">
        "Consistent code. Continuous growth. Clean solutions."
      </span>
    </motion.p>
  );
};
const CommonTechStack = () => {
  return (
    <div className="mt-16 border-t border-green-800 pt-6">
      <h3 className="text-xl font-bold text-green-400 mb-2 text-center">
        🛠 Common Tech Stack
      </h3>
      <div className="flex flex-wrap justify-center gap-3 text-sm">
        {techStack.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-green-800 bg-opacity-20 border border-green-600 rounded-full text-green-200"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};
const ProjectCard = () => {
  return (
    <section>
      <motion.p
        variants={heading}
        className="mt-10 mb-4 text-lg font-mono text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-400 to-emerald-300 animate-pulse"
      >
        <span className="text-green-500">$ --projects |</span>
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={card}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{
              scale: 1.03,
              borderColor: "#34d399",
              boxShadow: "0 0 15px #10b981",
            }}
            className="p-6 rounded-2xl border border-green-700 bg-gradient-to-br from-gray-900 to-black shadow-lg"
          >
            <h3 className="text-xl font-semibold text-green-300 mb-3">
              {project.title}
            </h3>
            <pre className="text-green-200 whitespace-pre-wrap font-mono text-sm mb-3">
              {project.description}
            </pre>

            <h4 className="text-green-400 font-semibold mb-1">
              Skills Gained:
            </h4>
            <ul className="list-disc list-inside text-green-300 text-sm">
              {project.skillsGained.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const ExperienceCard = () => {
  return (
    <section>
      <motion.p
        variants={heading}
        className="mb-6 text-lg font-mono text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-400 to-emerald-300 animate-pulse"
      >
        <span className="text-green-500">$ --experiences |</span>
      </motion.p>

      {/* Experience Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6">
        {experienceData.map((exp, index) => (
          <motion.div
            key={`exp-${index}`}
            variants={card}
            whileHover={{ scale: 1.04, borderColor: "#34d399" }}
            className="p-5 rounded-xl border border-green-600 bg-gray-900 transition-colors"
          >
            <h3 className="text-xl font-bold text-green-300 mb-2">
              {exp.title}
            </h3>
            <pre className="text-green-200 whitespace-pre-wrap font-mono text-sm">
              {exp.details}
            </pre>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experiences;
