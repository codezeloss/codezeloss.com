const skills = ["HTML & CSS", "SASS", "Tailwind CSS", "Javascript", "Typescript", "Reactjs", "NEXT.js", "Git", "GraphQL", "CMS", "Jest/Cypress", "Storybook"]

const Skills = () => {
  return (
    <section className="border-t-[1px] pt-16 grid gap-x-24 gap-y-20 grid-cols-3 mt-28 mb-36 2bp:gap-x-16 2bp:gap-y-12 2bp:mb-24 6bp:grid-cols-2 3bp:text-center 7bp:gap-x-6 7bp:gap-y-6">
      {skills.map(skill => (
        <div>
          <h
        </div>
      ))}
      <div>
        <h2>HTML & CSS</h2>
      </div>
      <div>
        <h2>SASS</h2>
      </div>
      <div>
        <h2>Tailwind CSS</h2>
      </div>
      <div>
        <h2>Javascript</h2>
      </div>
      <div>
        <h2>Typescript</h2>
      </div>
      <div>
        <h2>Reactjs</h2>
      </div>
      <div>
        <h2>NEXT.js</h2>
      </div>
      <div>
        <h2>Git</h2>
      </div>
      <div>
        <h2>GraphQL</h2>
      </div>
      <div>
        <h2>CMS</h2>
      </div>
      <div>
        <h2>Jest/Cypress</h2>
      </div>
      <div>
        <h2>Storybook</h2>
      </div>
    </section>
  );
};

export default Skills;
