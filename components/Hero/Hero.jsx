import Image from "next/image";
import Button from "../Button/Button";
import codezeloss from "/public/assets/images/main-picture.jpg";
import rings from "/public/assets/images/pattern-rings.svg";
import circle from "/public/assets/images/pattern-circle.svg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex justify-between items-center my-56 3bp:my-20 3bp:flex-col-reverse 3bp:gap-12 7bp:my-20"
    >
      <div className="z-[2] flex flex-col">
        <h1 className="max-w-[706px] mb-4 3bp:max-w-max">
          Hi There 👋!
          <br /> I&apos;m <span className="underline">Elhoussaine</span>.
        </h1>
        <p className="max-w-[50%] text text-2xl mb-16 2bp:mb-8 3bp:max-w-[600px]">
          Frontend Developer ✨
        </p>
        <Button text="Contact me" />
      </div>

      <div className="absolute right-0 z-[1] 3bp:relative">
        <div className="relative w-fit h-fit">
          <Image
            className="rounded-full w-[445px] h-[445px] z-[-1] 7bp:w-[245px] 7bp:h-[245px]"
            src={codezeloss}
            alt="Codezeloss"
            priority={true}
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
