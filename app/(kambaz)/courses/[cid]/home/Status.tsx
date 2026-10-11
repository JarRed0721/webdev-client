import {
  FaBell,
  FaBullhorn,
  FaChartBar,
  FaCheckCircle,
  FaFileImport,
  FaHome,
  FaRocket,
  FaStar,
  FaStream,
} from "react-icons/fa";
import { MdDoNotDisturbAlt } from "react-icons/md";
import "@/app/labs/lab2/tailwind/utilities.css";

const action =
  "mb-1 flex w-full items-center rounded border border-neutral-300 bg-neutral-100 px-3 py-1.5 text-left text-sm";

export default function CourseStatus() {
  return (
    <div id="wd-course-status">
      <h2 className="mb-3 text-xl font-semibold">Course Status</h2>
      <div className="mb-2 flex gap-1">
        <button
          type="button"
          className="inline-flex min-w-0 flex-1 items-center justify-center rounded border border-neutral-300 bg-neutral-100 px-2 py-1.5 text-sm"
        >
          <MdDoNotDisturbAlt className="me-1 shrink-0 text-base" /> Unpublish
        </button>
        <button
          type="button"
          className="inline-flex min-w-0 flex-1 items-center justify-center rounded border border-green-700 bg-green-600 px-2 py-1.5 text-sm text-white"
        >
          <FaCheckCircle className="me-1 shrink-0 text-base" /> Publish
        </button>
      </div>
      <button type="button" className={action}>
        <FaFileImport className="me-2 shrink-0" /> Import Existing Content
      </button>
      {/* On your own (2.4.5): remaining full-width actions */}
      <button type="button" className={action}>
        <FaRocket className="me-2 shrink-0" /> Import from Commons
      </button>
      <button type="button" className={action}>
        <FaHome className="me-2 shrink-0" /> Choose Home Page
      </button>
      <button type="button" className={action}>
        <FaStream className="me-2 shrink-0" /> View Course Stream
      </button>
      <button type="button" className={action}>
        <FaBullhorn className="me-2 shrink-0" /> New Announcement
      </button>
      <button type="button" className={action}>
        <FaChartBar className="me-2 shrink-0" /> New Analytics
      </button>
      <button type="button" className={action}>
        <FaBell className="me-2 shrink-0" /> View Course Notifications
      </button>
      {/* With AI (2.4.5) */}
      <button type="button" id="wd-ai-status" className={action}>
        <FaStar className="me-2 shrink-0" /> Sample action
      </button>
    </div>
  );
}
