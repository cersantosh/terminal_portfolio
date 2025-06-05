import { useState } from "react";

import About from "./about";
import Contact from "./contact";
import Education from "./education";
import Projects from "./projects";
import AvailableCommand from "./available_commands";
import Directory from "./directory";
import Experiences from "./experiences";

const trimInput = (input: string) => {
  return input.trim().toLowerCase();
};

const Terminal = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [output, setOutput] = useState("");

  const commandToComponent: Record<string, React.ReactNode> = {
    "--help": <AvailableCommand />,
    ls: <Directory />,
    none: <p>command not found</p>,
    about: <About />,
    contact: <Contact />,
    education: <Education />,
    projects: <Projects />,
    experiences: <Experiences />,
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter") {
      const trimmedInput = trimInput(input);
      let outputCommand = "";
      switch (trimmedInput) {
        case "cd..":
        case "cd ..":
          setHistory((prev) => {
            const newHistory = prev.slice(0, -1);
            if (newHistory.length >= 1) {
              outputCommand = newHistory[newHistory.length - 1];
            }
            setOutput(outputCommand);
            return newHistory;
          });
          break;
        case "clear":
          outputCommand = "";
          setHistory([]);
          setOutput("");
          break;
        case "--help":
          outputCommand = "--help";
          break;
        case "ls":
        case "dir":
          outputCommand = "ls";
          break;
        case "cd about":
          outputCommand = "about";
          break;
        case "cd contact":
          outputCommand = "contact";
          break;
        case "cd education":
          outputCommand = "education";
          break;
        case "cd projects":
          outputCommand = "projects";
          break;
        case "cd experiences":
          outputCommand = "experiences";
          break;
        default:
          outputCommand = "none";
      }
      if (outputCommand) {
        setOutput(outputCommand);
        setHistory((history) => {
          const newHistory = history.filter(
            (element) => element != outputCommand
          );
          return [...newHistory, outputCommand];
        });
      }
      setInput("");
    }
  };

  return (
    <div className="bg-black text-green-500 font-mono p-4 min-h-screen">
      <div className="flex flex-row mb-2">
        <span className="mr-1 whitespace-nowrap">{"santosh >"}</span>
        <input
          autoFocus
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="bg-transparent border-none outline-none text-green-500 w-full"
        />
      </div>
      {commandToComponent[output]}
    </div>
  );
};

export default Terminal;
