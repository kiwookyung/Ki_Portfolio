import { Eye, Github } from 'lucide-react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const ProjectsSection = ({ projects, onProjectClick }) => {
  const [projectsRef, isProjectsVisible] = useIntersectionObserver();

  const filteredProjects = projects || []; // 모든 프로젝트 표시

  return (
    <section id="projects" className="py-20 bg-white perspective-1000">
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
              className={`bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:scale-105 transform-gpu perspective-500 hover:rotate-y-3 hover:rotate-x-1 ${isProjectsVisible
                ? 'animate-slide-up opacity-100 translate-y-0'
                : 'opacity-0 translate-y-20'
                }`}
              style={{
                transitionDelay: `${index * 0.15}s`,
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Project Image with 3D Effect */}
              <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center relative overflow-hidden group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  {project.title.charAt(0)}
                </div>
                {/* 3D Overlay Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Project Info with 3D Hover Effects */}
              <div className="p-6 transform-gpu">
                <h3 className="text-xl font-bold text-gray-900 mb-3 hover:scale-105 transition-transform duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Role with 3D Effect */}
                <div className="text-sm text-gray-500 mb-4 hover:text-gray-700 transition-colors duration-300">
                  <span className="font-medium">역할:</span> {project.role}
                </div>

                {/* Tech Stack with 3D Hover */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.slice(0, 4).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium hover:scale-110 hover:rotate-2 hover:bg-blue-100 hover:text-blue-800 transition-all duration-300 cursor-pointer"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium hover:scale-110 hover:rotate-2 hover:bg-purple-100 hover:text-purple-800 transition-all duration-300 cursor-pointer">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>

                {/* Action Buttons with 3D Effect */}
                <div className="flex items-center justify-between gap-3">
                  <button
                    onClick={() => onProjectClick(project)}
                    className="flex-1 bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:border-blue-600 hover:text-blue-600 hover:scale-105 hover:rotate-1 transition-all duration-300 text-sm font-medium transform-gpu flex items-center justify-center space-x-2"
                  >
                    <Eye size={16} />
                    <span>자세히 보기</span>
                  </button>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 hover:scale-105 hover:rotate-1 transition-all duration-300 text-sm font-medium transform-gpu flex items-center justify-center"
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
