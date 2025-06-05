import { useState } from "react";
import Typewriter from "typewriter-effect";
import profilePhoto from "../assets/profile.jpeg";
import typingSound from "../assets/typing_sound.mp3";

const About = () => {
  const [step, setStep] = useState(0);

  const incrementStep = (count = 1, reset?: number) => {
    setStep(reset ? reset : step + count);
  };

  const myInfo = {
    name: "Er. Santosh Poudel",
    bio: "Computer Engineer | MERN & Flutter Developer | AI Enthusiast",
    skills: [
      "MERN Stack (MongoDB, Express, React, Node.js)",
      "Flutter | Dart | Bloc | Provider | GetX for App Development",
      "NextJS | NestJS | TypeScript | JavaScript | Tailwind CSS",
      "MongoDB | PostgreSQL | MySQL",
      "REST APIs, Firebase, Git & GitHub",
    ],
  };

  const commandsMap = {
    name: "$ whoami",
    skills: "$ skills --list",
    description: "$ --description",
  };

  const commandSpeed = 50;
  const textSpeed = 30;

  return (
    <div className="p-6 rounded-xl shadow-xl max-w-3xl mx-auto mt-10 border border-green-600 w-full text-green-300 font-mono bg-black">
      <div className="space-y-4">
        {step <= 4.1 && (
          <audio autoPlay loop>
            <source src={typingSound} type="audio/mp3" />
            Your browser does not support the audio tag.
          </audio>
        )}

        <PhotoAndName
          name={myInfo.name}
          step={step}
          incrementStep={incrementStep}
          commandSpeed={commandSpeed}
          textSpeed={textSpeed}
        />
        {step >= 1 && (
          <Bio
            command={commandsMap.name}
            bio={myInfo.bio}
            step={step}
            incrementStep={incrementStep}
            commandSpeed={commandSpeed}
            textSpeed={textSpeed}
          />
        )}
        {step >= 2 && (
          <Skills
            command={commandsMap.skills}
            skills={myInfo.skills}
            step={step}
            incrementStep={incrementStep}
            commandSpeed={commandSpeed}
            textSpeed={textSpeed}
          />
        )}
        {step >= 3 && (
          <Description
            command={commandsMap.description}
            step={step}
            incrementStep={incrementStep}
            commandSpeed={commandSpeed}
            textSpeed={textSpeed}
          />
        )}
      </div>
    </div>
  );
};

export default About;

// Terminal Box wrapper component to reuse
function TerminalBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-green-700">
      {children}
    </div>
  );
}

function PhotoAndName({
  name,
  step,
  incrementStep,
  commandSpeed,
  textSpeed,
}: {
  name: string;
  step: number;
  incrementStep: (count: number, reset: number) => void;
  commandSpeed: number;
  textSpeed: number;
}) {
  return (
      <section className="w-full flex justify-center items-center flex-col">
        <img
          src={profilePhoto}
          alt="profile photo"
          className="w-40 h-40 rounded-full border-4 border-green-500 shadow-lg transition-all duration-300 mb-4 sm:hover:w-80 sm:hover:h-80"
        />
        <p className="text-lg">
          <Typewriter
            component="span"
            onInit={(typewriter) => {
              typewriter
                .changeDelay(textSpeed)
                .typeString(name)
                .callFunction(() => {
                  incrementStep(0, 1);
                })
                .start();
            }}
            options={{
              cursor: "",
            }}
          />
        </p>
      </section>
  );
}

function Bio({
  command,
  bio,
  step,
  incrementStep,
  commandSpeed,
  textSpeed,
}: {
  command: string;
  bio: string;
  step: number;
  incrementStep: (count: number, reset?: number) => void;
  commandSpeed: number;
  textSpeed: number;
}) {
  return (
    <TerminalBox>
      <section>
        <Typewriter
          component="span"
          onInit={(typewriter) => {
            typewriter
              .changeDelay(commandSpeed)
              .typeString(command)
              .callFunction(() => {
                incrementStep(0.1);
              })
              .start();
          }}
          options={{
            cursor: "",
          }}
        />
        {step >= 1.1 && (
          <p className="pl-6 mt-2">
            <Typewriter
              component="span"
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(textSpeed)
                  .typeString(bio)
                  .callFunction(() => {
                    incrementStep(0, 2);
                  })
                  .start();
              }}
              options={{
                cursor: "",
              }}
            />
          </p>
        )}
      </section>
    </TerminalBox>
  );
}

function Skills({
  command,
  skills,
  step,
  incrementStep,
  commandSpeed,
  textSpeed,
}: {
  command: string;
  skills: string[];
  step: number;
  incrementStep: (count: number, reset?: number) => void;
  commandSpeed: number;
  textSpeed: number;
}) {
  return (
    <TerminalBox>
      <section>
        <Typewriter
          component="span"
          onInit={(typewriter) => {
            typewriter
              .changeDelay(commandSpeed)
              .typeString(command)
              .callFunction(() => {
                incrementStep(0.1);
              })
              .start();
          }}
          options={{
            cursor: "",
          }}
        />
        {step >= 2.1 && (
          <ul className="pl-6 list-disc list-inside mt-2">
            {skills.map((skill, index) => {
              const currentIndex = Math.floor((step - 2.1) * 10);

              if (index < currentIndex) {
                // Already shown skills — just render them
                return <li key={index}>{skill}</li>;
              }

              if (index === currentIndex) {
                // Currently typing skill
                return (
                  <Typewriter
                    component="span"
                    key={index}
                    onInit={(typewriter) => {
                      typewriter
                        .changeDelay(textSpeed)
                        .typeString(`<li>${skill}</li>`)
                        .callFunction(() => {
                          if (index === skills.length - 1) {
                            incrementStep(0, 3);
                          } else {
                            incrementStep(0.1);
                          }
                        })
                        .start();
                    }}
                    options={{
                      cursor: "",
                    }}
                  />
                );
              }
              return null;
            })}
          </ul>
        )}
      </section>
    </TerminalBox>
  );
}

function Description({
  command,
  step,
  incrementStep,
  commandSpeed,
  textSpeed,
}: {
  command: string;
  step: number;
  incrementStep: (count: number) => void;
  commandSpeed: number;
  textSpeed: number;
}) {
  return (
    <TerminalBox>
      <section>
        <Typewriter
          component="span"
          onInit={(typewriter) => {
            typewriter
              .changeDelay(commandSpeed)
              .typeString(command)
              .callFunction(() => {
                incrementStep(0.1);
              })
              .start();
          }}
          options={{
            cursor: "",
          }}
        />
        <p className="pl-6 leading-relaxed">
          {step >= 3.1 && (
            <Typewriter
              component="span"
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(textSpeed)
                  .typeString("Hello, I'm ")
                  .callFunction(() => {
                    incrementStep(0.1);
                  })
                  .start();
              }}
              options={{
                cursor: "",
              }}
            />
          )}
          {step >= 3.2 && (
            <span className="font-bold">
              <Typewriter
                component="span"
                onInit={(typewriter) => {
                  typewriter
                    .changeDelay(textSpeed)
                    .typeString(`Santosh Poudel, `)
                    .callFunction(() => {
                      incrementStep(0.1);
                    })
                    .start();
                }}
                options={{
                  cursor: "",
                }}
              />
            </span>
          )}
          {step >= 3.3 && (
            <span className="font-bold">
              <Typewriter
                component="span"
                onInit={(typewriter) => {
                  typewriter
                    .changeDelay(textSpeed)
                    .typeString("Computer Engineer ")
                    .callFunction(() => {
                      incrementStep(0.1);
                    })
                    .start();
                }}
                options={{
                  cursor: "",
                }}
              />
            </span>
          )}{" "}
          {step >= 3.4 && (
            <Typewriter
              component="span"
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(textSpeed)
                  .typeString(
                    "with a passion for transforming ideas into elegant digital experiences.\n I specialize in crafting full-stack applications using the "
                  )
                  .callFunction(() => {
                    incrementStep(0.1);
                  })
                  .start();
              }}
              options={{
                cursor: "",
              }}
            />
          )}
          {step >= 3.5 && (
            <span className="font-bold">
              <Typewriter
                component="span"
                onInit={(typewriter) => {
                  typewriter
                    .changeDelay(textSpeed)
                    .typeString("MERN stack ")
                    .callFunction(() => {
                      incrementStep(0.1);
                    })
                    .start();
                }}
                options={{
                  cursor: "",
                }}
              />
            </span>
          )}{" "}
          {step >= 3.6 && (
            <Typewriter
              component="span"
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(textSpeed)
                  .typeString("and developing high-performance mobile apps with ")
                  .callFunction(() => {
                    incrementStep(0.1);
                  })
                  .start();
              }}
              options={{
                cursor: "",
              }}
            />
          )}
          {step >= 3.7 && (
            <span className="font-bold">
              <Typewriter
                component="span"
                onInit={(typewriter) => {
                  typewriter
                    .changeDelay(textSpeed)
                    .typeString("Flutter.\n")
                    .callFunction(() => {
                      incrementStep(0.1);
                    })
                    .start();
                }}
                options={{
                  cursor: "",
                }}
              />
            </span>
          )}
          {step >= 3.8 && (
            <Typewriter
              component="span"
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(textSpeed)
                  .typeString(
                    "My journey in tech blends clean code with creativity, and I'm always excited to build, learn, and innovate.\n I'm deeply curious about "
                  )
                  .callFunction(() => {
                    incrementStep(0.1);
                  })
                  .start();
              }}
              options={{
                cursor: "",
              }}
            />
          )}
          {step >= 3.9 && (
            <span className="font-bold">
              <Typewriter
                component="span"
                onInit={(typewriter) => {
                  typewriter
                    .changeDelay(textSpeed)
                    .typeString("AI, Machine Learning, ")
                    .callFunction(() => {
                      incrementStep(0.1);
                    })
                    .start();
                }}
                options={{
                  cursor: "",
                }}
              />
            </span>
          )}
          {step >= 4 && (
            <Typewriter
              component="span"
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(textSpeed)
                  .typeString("and cloud technologies, aiming to contribute to the future of tech.")
                  .callFunction(() => {
                      incrementStep(0.1);
                    })
                  .start();
              }}
              options={{
                cursor: "",
              }}
            />
          )}
        </p>
      </section>
    </TerminalBox>
  );
}
