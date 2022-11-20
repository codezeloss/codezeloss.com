import Image from "next/image";
import githubIcon from "/public/assets/images/icon-github.svg";
import linkedinIcon from "/public/assets/images/icon-linkedin.svg";
import twitterIcon from "/public/assets/images/icon-twitter.svg";
import fmIcon from "/public/assets/images/icon-frontend-mentor.svg";
import Link from "next/link";
import Navbar from "../Navbar/Navbar";
import ContactForm from "../ContactForm/ContactForm";

const Footer = () => {
  return (
    <footer>
      <div id="contact" className="flex justify-between gap-12 mb-24 3bp:flex-col 3bp:items-center px-[1.8rem]">
        <div className="max-w-[445px] 3bp:max-w-[545px] 3bp:text-center">
          <h1 className="mb-9">Contact</h1>
          <p className="text">
            I would love to hear about your project and how I could help. Please
            fill in the form, and I’ll get back to you as soon as possible.
          </p>
        </div>

        <div>
          <ContactForm />
        </div>
      </div>

      <div className="border-t-[1px] mb-24 2bp:mb-10">
        <Navbar />
      </div>
    </footer>
  );
};

export default Footer;
