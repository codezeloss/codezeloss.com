import Image from "next/image";
import Link from "next/link";

const btnClasses = "uppercase text-white font-space-grotesk font-bold text-base pb-2.5 border-b-[2px] border-b-[#4EE1A0] z-[20] hover:text-[#4EE1A0]";

const btnClassesSm = "uppercase text-[#000] font-space-grotesk font-bold text-base pb-2.5 border-b-[2px] border-b-[#4EE1A0] z-[20] hover:text-[#4EE1A0] 6bp:text-sm";

const ProjectItem = ({ src, title, techs, preview, code }) => {
  return (
    <div className="font-space-grotesk uppercase 6bp:w-[375px] 6bp:mx-auto 8bp:w-[100%]">
      <div className="object-cover relative w-[100%] max-h-[450px] h-[450px] mb-5 hover:border-2 hover:border-[#4EE1A0] active:border-[#4EE1A0] 1bp:h-[350px] 3bp:h-[330px] 3bp:hover:border-0 4bp:h-[300px] 5bp:h-[250px] 6bp:h-[260px] 6bp:mx-auto 9bp:h-[230px]">
        <Image
          className="absolute w-[100%] h-[100%] z-[5]"
          src={src}
          alt="Project image"
          fill
          priority
        />
        <div className="w-[100%] h-[100%] absolute bg-[#000]/[.75] flex flex-col justify-center items-center gap-[48px] z-[10] opacity-0 hover:opacity-100 3bp:hidden">
          <Link href={`${preview}`} target="_blank">
            <button className={btnClasses}>
              View Project
            </button>
          </Link>
          <Link href={`${code}`} target="_blank">
            <button className={btnClasses}>
              View Code
            </button>
          </Link>
        </div>
      </div>

      <div>
       <p className="font-bold text-2xl 3bp:text-xl 6bp:text-lg">{title}</p>
       <div  className="font-medium text-[#919191] text-lg flex gap-x-4 3bp:text-base 6bp:text-sm">
        <p>{techs.tech1}</p>
        <p>{techs.tech2}</p>
        <p>{techs?.tech3}</p>
        </div>
      </div>

      <div className="hidden 3bp:flex text-[#000] gap-7 mt-5">
      <Link href={`${preview}`} target="_blank">
            <button className={btnClassesSm}>
              View Project
            </button>
          </Link>
          <Link href={`${code}`} target="_blank">
            <button className={btnClassesSm}>
              View Code
            </button>
          </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
