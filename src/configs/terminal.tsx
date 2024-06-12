import type { TerminalData } from "~/types";

const terminal: TerminalData[] = [
  {
    id: "about",
    title: "about",
    type: "folder",
    children: [
      {
        id: "about-bio",
        title: "bio.txt",
        type: "file",
        content: (
          <div className="py-1">
            <div>
              Hi, this is Jayesh Jain. I am a Software Develover and  student in Computer Science 
              in Engineering department of Uttranchal University.
            </div>
          </div>
        )
      },
      {
        id: "about-interests",
        title: "interests.txt",
        type: "file",
        content: "Automation / Machine Learning / Solving Every Day Probles"
      },
      {
        id: "about-who-cares",
        title: "who-cares.txt",
        type: "file",
        content:
          "I'm looking for a job  I Like Automating Various Tasks Such as Instagram Automation and Birthday Message Automation and Also Developed Various MVC Applications using C#."
      },
      {
        id: "about-contact",
        title: "contact.txt",
        type: "file",
        content: (
          <ul className="list-disc ml-6">
            <li>
              Email:{" "}
              <a
                className="text-blue-300"
                href="mailto:jayeshdarda9@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                jayeshdarda9@gmail.com
              </a>
            </li>
            <li>
              Github:{" "}
              <a
                className="text-blue-300"
                href="https://github.com/JayeshandCompany"
                target="_blank"
                rel="noreferrer"
              >
                @jayeshandcompany
              </a>
            </li>
            <li>
              Linkedin:{" "}
              <a
                className="text-blue-300"
                href="https://www.linkedin.com/in/jayeshjain18"
                target="_blank"
                rel="noreferrer"
              >
                Jayesh Jain
              </a>
            </li>
            <li>
              Personal Website:{" "}
              <a
                className="text-blue-300"
                href="https://portfolio-rj4k.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                https://portfolio-rj4k.vercel.app/
              </a>
            </li>
           
          </ul>
        )
      }
    ]
  },
  {
    id: "about-dream",
    title: "my-dream.cpp",
    type: "file",
    content: (
      <div className="py-1">
                <div>
          <span className="text-yellow-400">Automate</span>(
          <span className="text-blue-400">Work</span>) <span>{"{"}</span>
        </div>

        <div>
          <span className="text-yellow-400">while</span>(
          <span className="text-blue-400">sleeping</span>) <span>{"{"}</span>
        </div>
        <div>
          <span className="text-blue-400 ml-9">money</span>
          <span className="text-yellow-400">++</span>;
        </div>
        <div>
          <span>{"}"}</span>
        </div>
      </div>
    )
  }
];

export default terminal;
