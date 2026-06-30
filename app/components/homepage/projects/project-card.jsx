// @flow strict
"use client";

import * as React from "react";

function ProjectCard({ project }) {
  return (
    <div className="glass relative w-full overflow-hidden rounded-xl">
      {/* top accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-violet-500 via-pink-500 to-teal-400" />

      <div className="p-5 lg:p-7">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-lg lg:text-xl font-semibold text-[#1e2235]">
            {project.name}
          </h3>
          <span className="flex items-center gap-2">
            <span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-medium text-violet-700">
              {project.role}
            </span>
            {project.year && (
              <span className="text-xs text-gray-400">{project.year}</span>
            )}
          </span>
        </div>

        <p className="mb-5 text-sm lg:text-[0.95rem] leading-relaxed text-gray-600">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tools.map((tag, i) => (
            <span
              key={i}
              className="rounded-md border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs text-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
