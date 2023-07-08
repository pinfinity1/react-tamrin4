import {
  FaInstagram,
  FaTwitter,
  FaSquareFacebook,
  FaLinkedin,
} from "react-icons/fa6";
export const Footer = () => {
  return (
    <footer className=" flex flex-col justify-center items-center p-6 bg-black text-white">
      <div className="flex gap-4 mb-5">
        <a href="" className=" hover:text-zinc-400">
          <FaInstagram className="text-4xl" />
        </a>
        <a href="" className=" hover:text-zinc-400">
          <FaTwitter className="text-4xl" />
        </a>
        <a href="" className=" hover:text-zinc-400">
          <FaSquareFacebook className="text-4xl" />
        </a>
        <a href="" className=" hover:text-zinc-400">
          <FaLinkedin className="text-4xl" />
        </a>
      </div>
      <div>
        <p>
          ©2023{" "}
          <span className=" underline cursor-pointer hover:text-zinc-400">
            Pinfinity
          </span>
        </p>
      </div>
    </footer>
  );
};
