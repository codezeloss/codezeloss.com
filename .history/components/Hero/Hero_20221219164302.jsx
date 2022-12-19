import Image from "next/image";
import Button from "../Button/Button";
import codezeloss from "/public/assets/images/codezeloss.jpg";
import rings from "/public/assets/images/pattern-rings.svg";
import circle from "/public/assets/images/pattern-circle.svg";

const Hero = () => {
  return (
    <section className="relative flex justify-between items-center mt-32 3bp:mt-20 3bp:flex-col-reverse 3bp:gap-12 7bp:mt-12">
      <div className="flex flex-col 3bp:items-center 3bp:text-center">
        <h1 className="max-w-[706px] mb-11 3bp:max-w-max">
          Hey There 👋!
          <br /> I&apos;m <span className="underline">Elhoussaine</span>.
        </h1>
        <p className="max-w-[445px] text mb-16 2bp:mb-8 3bp:max-w-[500px]">
          I&apos;m a{" "}
          <span className="font-bold text-xl">React Frontend developer</span>{" "}
          passionate about everything related to UI/UX, so I find my passion in
          converting designs & ideas to code.
        </p>
        <Button text="Contact me" />
      </div>

      <div className="absolute right-0 z-[-1] 3bp:relative">
        <div className="relative w-fit h-fit">
          <Image
            className="rounded-full w-[445px] h-[445px] z-[-1] 7bp:w-[245px] 7bp:h-[245px]"
            src={codezeloss}
            alt="Codezeloss"
            priority
          />
          <div className="absolute w-fit h-fit bottom-[20px] right-[300px] z-[-5] 7bp:right-[170px]">
            <Image
              className="rounded-full w-32 h-32 7bp:w-20 7bp:h-20"
              src={circle}
              alt="Rings"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
