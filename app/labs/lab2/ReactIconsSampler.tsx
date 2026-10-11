import "@/app/labs/lab2/tailwind/utilities.css";
import { FaCalendar, FaEnvelopeOpenText, FaRegClock } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaBookBible } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";
// On your own (2.2): two icons from families not used above
import { IoRocketSharp } from "react-icons/io5";
import { BsFillBrightnessHighFill } from "react-icons/bs";
// With AI (2.2): two sample icons from two more new families
import { MdOutlineSchool } from "react-icons/md";
import { HiOutlineAcademicCap } from "react-icons/hi2";

export default function ReactIconsSampler() {
  return (
    <div id="wd-react-icons-sampler" className="mb-4 font-sans">
      <h2 className="text-lg font-semibold">React Icons Sampler</h2>
      <div className="flex gap-3 text-3xl">
        <VscAccount />
        <AiOutlineDashboard />
        <FaBookBible />
        <FaCalendar />
        <FaEnvelopeOpenText />
        <FaRegClock />
      </div>
      {/* With AI (2.2) */}
      <div id="wd-ai-icons" className="flex gap-3">
        <MdOutlineSchool className="text-4xl text-blue-600" />
        <HiOutlineAcademicCap className="text-4xl text-blue-600" />
      </div>
      {/* On your own (2.2) */}
      <div id="wd-my-icons" className="flex gap-3">
        <IoRocketSharp className="text-4xl text-red-600" />
        <BsFillBrightnessHighFill className="text-4xl text-green-600" />
      </div>
    </div>
  );
}
