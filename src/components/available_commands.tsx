import type { CommandType } from "../type/command";
import { FaChevronRight } from "react-icons/fa"; // optional terminal-style prompt

const AvailableCommand = () => {
  const commands: CommandType[] = [
    {
      name: "--help",
      description: "Shows all available commands",
    },
    {
      name: "ls | dir",
      description: "Shows all directories",
    },
  ];

  return (
    <div className="bg-black text-green-400 font-mono p-6 rounded-lg shadow-lg max-w-2xl mx-auto border border-green-700">
      <h2 className="text-xl font-bold mb-4 text-green-300">Available Commands</h2>
      <ul className="space-y-3">
        {commands.map((cmd, index) => (
          <li
            key={index}
            className="flex items-start gap-2 hover:text-green-200 transition duration-200"
          >
            <FaChevronRight className="mt-1 text-green-500" />
            <div>
              <span className="text-green-300">{cmd.name}</span>
              <span className="text-green-500"> : {cmd.description}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AvailableCommand;
