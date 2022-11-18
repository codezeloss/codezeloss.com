import Link from "next/link";

const Button = ({text}) => {
  return (
    <Link href="/#contact">
      <button className="uppercase font-space-grotesk font-bold text-base pb-2.5 border-b-[2px] hover:border-b-[#4EE1A0]">
        {text}
      </button>
    </Link>
  );
}

export default Button;

// border-b-[#64ffb2]