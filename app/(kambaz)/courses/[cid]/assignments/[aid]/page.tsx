import Link from "next/link";
import "@/app/labs/lab2/tailwind/utilities.css";

const label = "mb-1 block text-sm font-semibold";
const field =
  "w-full rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm";
const checkRow = "flex items-center gap-2 text-sm";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
  const list = `/courses/${cid}/assignments`;
  return (
    <div id="wd-assignments-editor" className="max-w-2xl">
      <div className="mb-4">
        <label htmlFor="wd-name" className={label}>
          Assignment Name
        </label>
        <input id="wd-name" defaultValue="A1 - ENV + HTML" className={field} />
      </div>
      <div className="mb-4">
        <label htmlFor="wd-description" className={label}>
          Description
        </label>
        <textarea
          id="wd-description"
          rows={4}
          defaultValue="The assignment is available online. Submit a link to the landing page of your Web application."
          className={field}
        />
      </div>

      <div className="mb-4 grid grid-cols-1 gap-2 sm:grid-cols-[180px_1fr] sm:gap-x-4">
        <label htmlFor="wd-points" className="text-sm font-semibold sm:text-right sm:pt-1.5">
          Points
        </label>
        <input id="wd-points" defaultValue={100} className={field} />

        <label htmlFor="wd-group" className="text-sm font-semibold sm:text-right sm:pt-1.5">
          Assignment Group
        </label>
        <select id="wd-group" defaultValue="ASSIGNMENTS" className={field}>
          <option value="ASSIGNMENTS">ASSIGNMENTS</option>
          <option value="QUIZZES">QUIZZES</option>
          <option value="EXAMS">EXAMS</option>
          <option value="PROJECT">PROJECT</option>
        </select>

        <label htmlFor="wd-display-grade-as" className="text-sm font-semibold sm:text-right sm:pt-1.5">
          Display Grade as
        </label>
        <select id="wd-display-grade-as" defaultValue="PERCENTAGE" className={field}>
          <option value="PERCENTAGE">Percentage</option>
          <option value="POINTS">Points</option>
        </select>

        <label htmlFor="wd-submission-type" className="text-sm font-semibold sm:text-right sm:pt-1.5">
          Submission Type
        </label>
        <div className="rounded border border-neutral-300 p-3">
          <select id="wd-submission-type" defaultValue="ONLINE" className={`${field} mb-3`}>
            <option value="ONLINE">Online</option>
            <option value="ON_PAPER">On Paper</option>
          </select>
          <div className="mb-2 text-sm font-semibold">Online Entry Options</div>
          <div className="flex flex-col gap-1">
            <div className={checkRow}>
              <input type="checkbox" id="wd-text-entry" />
              <label htmlFor="wd-text-entry">Text Entry</label>
            </div>
            <div className={checkRow}>
              <input type="checkbox" id="wd-website-url" defaultChecked />
              <label htmlFor="wd-website-url">Website URL</label>
            </div>
            <div className={checkRow}>
              <input type="checkbox" id="wd-media-recordings" />
              <label htmlFor="wd-media-recordings">Media Recordings</label>
            </div>
            <div className={checkRow}>
              <input type="checkbox" id="wd-student-annotation" />
              <label htmlFor="wd-student-annotation">Student Annotation</label>
            </div>
            <div className={checkRow}>
              <input type="checkbox" id="wd-file-upload" />
              <label htmlFor="wd-file-upload">File Uploads</label>
            </div>
          </div>
        </div>

        <span className="text-sm font-semibold sm:text-right sm:pt-1.5">Assign</span>
        <div className="rounded border border-neutral-300 p-3">
          <label htmlFor="wd-assign-to" className={label}>
            Assign to
          </label>
          <input id="wd-assign-to" defaultValue="Everyone" className={`${field} mb-3`} />
          <label htmlFor="wd-due-date" className={label}>
            Due
          </label>
          <input type="date" id="wd-due-date" defaultValue="2024-05-13" className={`${field} mb-3`} />
          <div className="flex gap-3">
            <div className="flex-1">
              <label htmlFor="wd-available-from" className={label}>
                Available from
              </label>
              <input type="date" id="wd-available-from" defaultValue="2024-05-06" className={field} />
            </div>
            <div className="flex-1">
              <label htmlFor="wd-available-until" className={label}>
                Until
              </label>
              <input type="date" id="wd-available-until" defaultValue="2024-05-20" className={field} />
            </div>
          </div>
        </div>
      </div>

      {/* With AI (2.4.8) */}
      <div className="mb-4">
        <label htmlFor="wd-ai-editor-notes" className={label}>
          Sample notes
        </label>
        <textarea id="wd-ai-editor-notes" rows={3} className={field} />
      </div>

      <hr className="my-4 border-neutral-300" />
      <div className="flex justify-end gap-2">
        <Link
          href={list}
          id="wd-cancel"
          className="rounded border border-neutral-300 bg-neutral-100 px-4 py-1.5 text-sm text-neutral-900 no-underline"
        >
          Cancel
        </Link>
        <Link
          href={list}
          id="wd-save"
          className="rounded border border-red-600 bg-red-600 px-4 py-1.5 text-sm font-medium text-white no-underline"
        >
          Save
        </Link>
      </div>
    </div>
  );
}
