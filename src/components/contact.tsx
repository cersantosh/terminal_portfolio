import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.6,
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.4,
    },
  },
};

const Contact = () => {
  return (
    <motion.div
      className="p-6 rounded-xl shadow-xl max-w-3xl mx-auto mt-10 border border-green-600"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Header />
      <motion.div className="space-y-5" variants={itemVariants}>
        <Body />
        <SocialMedia />
        <Footer />
      </motion.div>
    </motion.div>
  );
};

const Footer = () => {
  return (
    <section>
      <p>
        <span className="text-green-500">$</span> echo "Let's build something
        amazing together."
      </p>
      <motion.p className="pl-6 text-green-200" variants={itemVariants}>
        "Let's build something amazing together."
      </motion.p>
    </section>
  );
};
const SocialMedia = () => {
  const socialMedias = [
    {
      icon: <FaEnvelope className="text-xl" />,
      label: "Email",
      href: "mailto:ps.santoshpoudel@gmail.com",
    },
    {
      icon: <FaGithub className="text-xl" />,
      label: "GitHub",
      href: "https://github.com/cersantosh?tab=repositories",
    },
    {
      icon: <FaLinkedin className="text-xl" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/er-santosh-poudel-15299327b/",
    },
  ];
  return (
    <section>
      <p>
        <span className="text-green-500">$</span> contact --list
      </p>

      <motion.div
        className="pl-6 mt-2 flex justify-center flex-wrap gap-6 text-green-300"
        variants={itemVariants}
      >
        {socialMedias.map(({ icon, label, href }, i) => (
          <motion.a
            key={i}
            href={href}
            target="_blank"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-green-600 hover:bg-green-900 hover:text-green-200 transition duration-300"
          >
            {icon}
            {label}
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};
const Body = () => {
  return (
    <section>
      <p>
        <span className="text-green-500">$</span> contact --me
      </p>
      <p className="pl-6">
        Feel free to reach out for collaborations, freelance projects, or just
        to connect and share ideas about Business, MERN, Flutter, or AI!
      </p>
    </section>
  );
};
const Header = () => {
  return (
    <motion.div className="mb-4" variants={itemVariants}>
      <p className="text-green-300 text-sm">
        # Reach out via email or social platforms
      </p>
    </motion.div>
  );
};

export default Contact;
