import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';

const Projects = () => {

  return (
    <div id='projects' className="relative z-10 my-12 lg:my-24 scroll-mt-24">
      <div className="sticky top-10 z-20">
        <div className="flex items-center justify-start relative">
          <span className="absolute left-0 w-fit rounded-md bg-gradient-to-r from-violet-600 to-pink-500 px-5 py-3 text-xl font-semibold text-white shadow-md shadow-violet-200">
            PROJECTS
          </span>
          <span className="w-full h-[2px] bg-gradient-to-r from-violet-300 to-transparent"></span>
        </div>
      </div>

      <div className="pt-24">
        <div className="flex flex-col gap-6">
          {projectsData.slice(0, 4).map((project, index) => (
            <div
              id={`sticky-card-${index + 1}`}
              key={index}
              className="sticky-card w-full mx-auto max-w-2xl sticky"
            >
              <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;