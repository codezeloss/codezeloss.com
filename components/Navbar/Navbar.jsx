import Image from "next/image";
import githubIcon from "/public/assets/images/icon-github.svg";
import linkedinIcon from "/public/assets/images/icon-linkedin.svg";
import twitterIcon from "/public/assets/images/icon-twitter.svg";
import fmIcon from "/public/assets/images/icon-frontend-mentor.svg";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center mt-10 7bp:flex-col 7bp:mt-5 7bp:gap-4">
      <div>
        <p className="font-space-grotesk font-bold text-3xl tracking-[-0.44px]">
          codezeloss
        </p>
      </div>

      <div className="flex items-center gap-7 text 3bp:hidden">
        <Link className="hover:font-semibold hover:text-[#4EE1A0]" href="#skills">
          Skills
        </Link>
        <Link className="hover:font-semibold hover:text-[#4EE1A0]" href="#projects">
          Projects
        </Link>
        <Link className="hover:font-semibold hover:text-[#4EE1A0]" href="#about-me">
          About Me
        </Link>
        <Link className="hover:font-semibold hover:text-[#4EE1A0]" href="#contact">
          Contact
        </Link>
      </div>

      <div className="flex gap-8 items-center">
        <Link href="https://github.com/codezeloss" target="_blank">
          <Image className="w-[24px] h-[24px]" src={githubIcon} alt="Github" />
        </Link>
        {/* <Link
          href="https://www.frontendmentor.io/profile/elosscode"
          target="_blank"
        >
          <Image
            className="w-[24px] h-[22px]"
            src={fmIcon}
            alt="Frontend Mentor"
          />
        </Link> */}
        <Link href="https://www.linkedin.com/in/codezeloss/" target="_blank">
          <Image
            className="w-[24px] h-[24px]"
            src={linkedinIcon}
            alt="Linkedin"
          />
        </Link>
        <Link href="https://x.com/codezeloss" target="_blank">
          <Image
            className="w-[28px] h-[24px]"
            src={twitterIcon}
            alt="X / Twitter"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
