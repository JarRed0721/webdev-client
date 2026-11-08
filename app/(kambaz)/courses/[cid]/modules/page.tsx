"use client";

import { useParams } from "next/navigation";
import { useModulesStore } from "../../../store/modulesStore";
import Module from "./Module";
import Lesson from "./Lesson";
import ModulesControls from "./ModulesControls";

export default function Modules() {
  const { cid } = useParams();
  const modules = useModulesStore((state) => state.modules).filter(
    (module) => module.course === cid,
  );
  return (
    <div>
      <ModulesControls />
      <ul id="wd-modules" className="m-0 list-none p-0">
        {modules.map((module) => (
          <Module key={module._id} module={module}>
            {module.lessons?.map((lesson) => (
              <Lesson key={lesson._id} title={lesson.name}>
                <li className="wd-content-item">{lesson.description}</li>
              </Lesson>
            ))}
          </Module>
        ))}
      </ul>
    </div>
  );
}
