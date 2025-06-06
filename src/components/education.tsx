import { motion } from "framer-motion";

// Animation variants for container sections
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Education = () => {
  return (
    <motion.div
      className="bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 text-green-400 font-mono max-w-5xl mx-auto"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <EducationCard />
      <Experience />
      <Learning />
      <Quote />
      <Fundamental />
      <Joke />
    </motion.div>
  );
};

const Experience = () => {
  return (
    <motion.section
      className="bg-gray-800 rounded-lg p-6 mb-8 shadow-lg border border-green-700"
      variants={containerVariants}
    >
      <p className="text-green-500 font-semibold mb-4">$ cat experiences.txt</p>
      <ul className="list-disc list-inside space-y-2 text-green-300">
        <li>
          Built strong fundamentals in{" "}
          <span className="text-green-200">Data Structures</span>,{" "}
          <span className="text-green-200">Algorithms</span>, and{" "}
          <span className="text-green-200">System Design</span>
        </li>
        <li>
          Completed real-world projects using{" "}
          <span className="text-green-200">MERN Stack</span> and{" "}
          <span className="text-green-200">Flutter</span>
        </li>
        <li>
          Explored the realm of{" "}
          <span className="text-green-200">Artificial Intelligence</span> and
          its applications
        </li>
        <li>
          Led and collaborated in multiple team-based software development
          projects
        </li>
        <li>
          Learned to debug not just code, but also life’s unexpected exceptions
        </li>
      </ul>
    </motion.section>
  );
};
const EducationCard = () => {
  return (
    <section>
      <p className="mb-6 text-lg font-mono text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-400 to-emerald-300 animate-pulse">
        <span className="text-green-500">$ --education |</span>
      </p>

      <motion.section
        className="bg-gray-800 rounded-lg p-6 mb-8 shadow-lg border border-green-700"
        variants={containerVariants}
      >
        <p className="text-green-300 font-semibold flex items-center gap-2 mb-3">
          <span role="img" aria-label="graduation cap">
            🎓
          </span>{" "}
          Bachelor in Computer Engineering
        </p>
        <p className="mb-1 flex items-center gap-2">
          <span role="img" aria-label="school" className="text-green-400">
            🏫
          </span>{" "}
          Gandaki College of Engineering and Science
        </p>
        <p className="mb-0 flex items-center gap-2 text-green-300">
          <span role="img" aria-label="calendar" className="text-green-400">
            📅
          </span>{" "}
          2019 - 2024
        </p>
      </motion.section>
    </section>
  );
};

const Learning = () => {
  return (
    <motion.section
      className="bg-gray-800 rounded-lg p-6 mb-8 shadow-lg border border-green-700"
      variants={containerVariants}
    >
      <p className="text-green-500 font-semibold mb-4">$ cat learning.txt</p>
      <ul className="list-disc list-inside space-y-2 text-green-300">
        <li>
          <span className="text-green-200">
            Think logically, debug patiently.
          </span>{" "}
          Engineering is less about having the answer and more about knowing how
          to find it.
        </li>
        <li>
          <span className="text-green-200">Google is your second brain.</span>{" "}
          Don’t memorize everything — learn how to find solutions efficiently.
        </li>
        <li>
          <span className="text-green-200">Teamwork = Real Work.</span> Building
          projects with others taught me more than lectures ever could.
        </li>
        <li>
          <span className="text-green-200">Understanding over memorizing.</span>{" "}
          A concept understood once is worth more than a hundred crammed
          definitions.
        </li>
        <li>
          <span className="text-green-200">Code. Break. Fix. Repeat.</span>{" "}
          Failure is part of the process — it’s how engineers grow.
        </li>
        <li>
          <span className="text-green-200">
            Theory meets reality in projects.
          </span>{" "}
          Real-world applications made my learning come alive.
        </li>
        <li>
          <span className="text-green-200">Adaptation is a skill.</span> Tech
          evolves — and so must you.
        </li>
        <li>
          <span className="text-green-200">Discipline beats motivation.</span>{" "}
          Deadlines taught me more about time management than any course.
        </li>
        <li>
          <span className="text-green-200">Start building early.</span>{" "}
          Projects, portfolios, and experimentation are the real resume.
        </li>
      </ul>
    </motion.section>
  );
};
const Quote = () => {
  return (
    <motion.section
      className="bg-gray-800 rounded-lg p-6 mb-8 shadow-lg border border-green-700"
      variants={containerVariants}
    >
      <p className="text-green-500 font-semibold mb-4">$ cat quotes.txt</p>
      <ul className="list-disc list-inside space-y-2 text-green-300">
        <li>
          "
          <span className="text-green-200">
            The best way to predict the future is to invent it.
          </span>
          " – Alan Kay
        </li>
        <li>
          "
          <span className="text-green-200">
            Code never lies, comments sometimes do.
          </span>
          " – Ron Jeffries
        </li>
        <li>
          "
          <span className="text-green-200">
            Engineering is not only solving problems — it's understanding them
            deeply.
          </span>
          "
        </li>
        <li>
          "
          <span className="text-green-200">
            It’s not about being the smartest — it’s about being the most
            persistent.
          </span>
          "
        </li>
        <li>
          "
          <span className="text-green-200">
            First, solve the problem. Then, write the code.
          </span>
          " – John Johnson
        </li>
        <li>
          "
          <span className="text-green-200">
            Every bug teaches a lesson. Every fix is growth.
          </span>
          "
        </li>
        <li>
          "
          <span className="text-green-200">
            Computers are fast; engineers make them smart.
          </span>
          "
        </li>
        <li>
          "
          <span className="text-green-200">
            A good engineer is a perpetual student.
          </span>
          "
        </li>
      </ul>
    </motion.section>
  );
};

const Fundamental = () => {
  return (
    <motion.section
      className="bg-gray-800 rounded-lg p-6 mb-8 shadow-lg border border-green-700"
      variants={containerVariants}
    >
      <p className="text-green-500 font-semibold mb-4">
        $ cat fundamentals.txt
      </p>
      <ul className="list-disc list-inside space-y-2 text-green-300">
        <li>
          <span className="text-green-200">Data Structures:</span> Arrays,
          Linked Lists, Trees, Graphs, Hash Tables
        </li>
        <li>
          <span className="text-green-200">Algorithms:</span> Sorting,
          Searching, Dynamic Programming, Greedy Algorithms
        </li>
        <li>
          <span className="text-green-200">System Design:</span> Scalability,
          Load Balancing, Caching, Databases
        </li>
        <li>
          <span className="text-green-200">Networking:</span> TCP/IP, HTTP,
          RESTful APIs
        </li>
        <li>
          <span className="text-green-200">Databases:</span> MongoDB, MySQL,
          PostgreSQL
        </li>
      </ul>
    </motion.section>
  );
};

const Joke = () => {
  const jokes = [
    {
      id: 1,
      joke: 'MERN Developer at 3 AM: \n"Mongo, why won\'t you find my data?" \n"Express, stop throwing errors!" \n"React, why is my state always broken?" \n"Node... Node... Can I get a break?"',
    },
    {
      id: 2,
      joke: "Why do Flutter developers never get lost? \nBecause they always know where the widget is.",
    },
    {
      id: 3,
      joke: 'AI Programmer\'s Daily Struggle: \n"Model training for 5 hours... 0.1% improvement. \nI guess it’s still better than my 0.1% social life improvement."',
    },
    {
      id: 4,
      joke: "Why don’t AI developers trust the matrix? \nBecause it’s just a bunch of numbers trying to “compute” reality.",
    },
    {
      id: 5,
      joke: 'A Flutter developer walks into a bar. \nBartender says, "You want the usual?" \nFlutter dev: "No, I’ll just `setState()` and make everything dynamic."',
    },
    {
      id: 6,
      joke: 'React Developer’s Prayer: \n"Dear React, please don’t re-render everything. Amen."',
    },
    {
      id: 7,
      joke: "Why did the computer go to therapy? \nBecause it had too many unresolved issues.",
    },
    {
      id: 8,
      joke: "Why did the Node.js developer get promoted? \nBecause they’re great at handling asynchronous situations.",
    },
    {
      id: 9,
      joke: "How does a MERN developer make their coffee? \n*One filter at a time…* \nThen they `map()` their way through the day.",
    },
    {
      id: 10,
      joke: 'Computer Science Major: \n"I just solved the hardest problem of my life!" \n*Reality:* \n"I can’t even remember what my homework was about."',
    },
    {
      id: 11,
      joke: 'Why was the Flutter developer so calm during debugging? \nBecause everything in Flutter is a "widget" of joy... until it\'s not.',
    },
    {
      id: 12,
      joke: 'What did the AI model say after failing miserably? \n"I guess I just wasn’t *trained* enough for this."',
    },
    {
      id: 13,
      joke: "If I had a dollar for every time I debugged my code, \nI’d have enough money to pay for another **API request**.",
    },
  ];
  return (
    <section className="bg-gray-850 rounded-md p-6 border border-green-700 max-w-4xl mx-auto">
      <p className="text-green-400 text-xl font-semibold mb-4 border-b border-green-700 pb-2">
        # Programming Jokes for Engineers
      </p>

      <div className="space-y-5 pr-2">
        {jokes.map((joke) => (
          <div
            key={joke.id}
            className="bg-gray-800 rounded-md p-4 border border-green-800 text-green-300 font-mono text-sm leading-relaxed select-text"
          >
            <pre className="whitespace-pre-wrap">{joke.joke}</pre>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Education;
