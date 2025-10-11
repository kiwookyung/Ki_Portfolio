import { Eye, Github, Award } from 'lucide-react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const FeaturedProjectsSection = ({ projects, onProjectClick }) => {
  const [headerRef, isHeaderVisible] = useIntersectionObserver();
  const [projectsRef, isProjectsVisible] = useIntersectionObserver();

  // 대표 프로젝트 2개만 표시
  const featuredProjects = projects ? projects.slice(0, 2) : [];

  return (
    <section id="featured-projects" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <div className="inline-flex items-center justify-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full mb-4 font-semibold">
            <Award size={20} />
            <span>Featured Projects</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            대표 프로젝트
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            실무 감각과 문제 해결 능력을 보여주는 주요 프로젝트
          </p>
        </div>

        {/* Projects Grid */}
        <div
          ref={projectsRef}
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 transition-all duration-1000 ${isProjectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:scale-105 transform ${isProjectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              style={{
                transitionDelay: `${index * 200}ms`,
              }}
            >
              {/* Project Image */}
              <div className="relative h-64 bg-gradient-to-br from-blue-100 to-purple-100 overflow-hidden">
                {project.image ? (
                  <>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </>
                ) : (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="relative z-10 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-bold group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-2xl">
                        {project.title.charAt(0)}
                      </div>
                    </div>
                  </>
                )}

                {/* Achievements Badge */}
                {project.achievements && (
                  <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1 shadow-lg z-10">
                    <Award size={16} />
                    <span>수상작</span>
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                {/* Role */}
                <div className="text-sm text-gray-500 mb-4 bg-gray-50 p-3 rounded-lg">
                  <span className="font-semibold text-gray-700">역할:</span> {project.role}
                </div>

                {/* Period & Team */}
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                  <span>📅 {project.period}</span>
                  <span>👥 {project.teamSize}</span>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.slice(0, 5).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium hover:bg-blue-100 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 5 && (
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                      +{project.tech.length - 5}
                    </span>
                  )}
                </div>

                {/* Achievements */}
                {project.achievements && (
                  <div className="mb-6 bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-lg border border-yellow-200">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <Award size={16} className="text-yellow-600" />
                      주요 성과
                    </h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      {project.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-yellow-600">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => onProjectClick(project)}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-sm font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 transform"
                  >
                    <Eye size={18} />
                    <span>자세히 보기</span>
                  </button>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-900 text-white px-4 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 text-sm font-semibold flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transform"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div
          className={`text-center transition-all duration-1000 delay-500 ${isProjectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <a
            href="/projects"
            className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-50 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transform border-2 border-gray-200"
          >
            모든 프로젝트 보기 →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;


