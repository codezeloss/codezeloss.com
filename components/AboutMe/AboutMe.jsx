import Image from "next/image";
import Button from "../Button/Button";
import codezeloss from "/public/assets/images/aboutMe-picture.jpg";
import rings from "/public/assets/images/pattern-rings.svg";
import circle from "/public/assets/images/pattern-circle.svg";

const AboutMe = () => {
  return (
    <section id="about-me" className="pt-12 mb-36 3bp:pt-0">
      <div className="flex justify-between items-center gap-12 3bp:flex-col 3bp:items-center">
        <div className="max-w-[50%] 3bp:max-w-full">
          <h1 className="mb-11">About Me</h1>
          <p className="text mb-16 2bp:mb-8 3bp:max-w-[600px]">
            I&apos;m a{" "}
            <span className="font-bold text-xl">Frontend developer,</span> I
            convert designs & ideas to code. React/Nextjs are the technologies I
            love to work with. I code responsive websites/apps from scratch and
            contribute to existing projects.
            <br />
            <br /> Usable, enjoyable, and accessible User Interfaces are the
            motivation and the goals I work towards achieving on every project.
          </p>
        </div>

        <div>
          <div className="w-fit h-fit">
            <Image
              className="w-auto h-auto 7bp:w-auto 7bp:h-auto"
              src={codezeloss}
              alt="Codezeloss"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
