import { Eye, Github } from 'lucide-react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import ThemeSection from '../common/ThemeSection';

const ProjectsSection = ({ projects, onProjectClick }) => {
  const [projectsRef, isProjectsVisible] = useIntersectionObserver();

  const filteredProjects = projects || []; // 모든 프로젝트 표시

  return (
    <ThemeSection themeName="projects" className="py-20 bg-theme">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Projects Grid with 3D Card Animation */}
        <div
          ref={projectsRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 transform-gpu ${isProjectsVisible
            ? 'animate-slide-up opacity-100 translate-y-0'
            : 'opacity-0 translate-y-20'
            }`}
        >
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`card-theme rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-theme-accent hover:border-theme-primary hover:scale-[1.02] transform-gpu flex flex-col ${isProjectsVisible
                ? 'animate-slide-up opacity-100 translate-y-0'
                : 'opacity-0 translate-y-20'
                }`}
              style={{
                transitionDelay: `${index * 0.15}s`,
              }}
            >
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden">
                {project.image ? (
                  <>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                  </>
                ) : (
                  <>
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center text-white text-lg font-bold shadow-lg">
                        {project.title.charAt(0)}
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                  </>
                )}
              </div>

              {/* Project Info */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-theme-primary mb-3">
                  {project.title}
                </h3>
                <p className="text-theme-secondary mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Role */}
                <div className="text-sm text-theme-secondary mb-4">
                  <span className="font-medium text-theme-primary">역할:</span> {project.role}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6 min-h-[4rem] items-start">
                  {project.tech.slice(0, 4).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-slate-100 text-slate-700 px-3 py-1 rounded-lg text-xs font-medium hover:bg-slate-200 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-lg text-xs font-medium hover:bg-slate-200 transition-colors duration-200">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between gap-3 mt-auto">
                  <button
                    onClick={() => onProjectClick(project)}
                    className="flex-1 btn-theme-primary text-white px-4 py-2 rounded-lg hover:bg-theme-primary-dark transition-all duration-300 text-sm font-medium flex items-center justify-center space-x-2 shadow-md hover:shadow-lg"
                  >
                    <Eye size={16} />
                    <span>자세히 보기</span>
                  </button>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-700 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition-all duration-300 text-sm font-medium flex items-center justify-center shadow-md hover:shadow-lg"
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ThemeSection>
  );
};

export default ProjectsSection;
