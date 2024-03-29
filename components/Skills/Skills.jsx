const techs = [
  "JavaScript",
  "TypeScript",
  "React.js",
  "NEXT.js",
  "TailwindCSS",
  "Material UI",
  "Redux",
  "Git",
    "More..."
];

const Skills = () => {
  return (
    <section id="skills" className="mb-36 7bp:mt-28 7bp:mb-20">
      <h1 className="mb-20">Skills</h1>

      <div className="grid gap-x-24 gap-y-20 grid-cols-3 2bp:gap-x-16 2bp:gap-y-12 2bp:mb-24 6bp:grid-cols-2 7bp:gap-x-6 7bp:gap-y-6">
        {techs.map((skill) => (
          <div>
            <h2>{skill}</h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

// "GraphQL",
// "Headless CMS",
// "Testing",
