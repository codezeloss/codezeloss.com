const skills = ["HTML & CSS", "SASS", "Tailwind CSS", "Javascript", "Typescript", "Reactjs", "NEXT.js", "Git", "GraphQL", "CMS", "Jest/Cypress", "Storybook"]

const Skills = () => {
  return (
    <section className="border-t-[1px] pt-16 grid gap-x-24 gap-y-20 grid-cols-3 mt-28 mb-36 2bp:gap-x-16 2bp:gap-y-12 2bp:mb-24 6bp:grid-cols-2 3bp:text-center 7bp:gap-x-6 7bp:gap-y-6">
      {skills.map(skill => (
        <div>
        <h2>sk</h2>
      </div>
      ))}
      
    </section>
  );
};

export default Skills;
