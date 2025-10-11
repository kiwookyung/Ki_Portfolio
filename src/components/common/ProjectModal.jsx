import { X, Github, Calendar, Users, Award, AlertCircle, Play, Tag } from 'lucide-react';

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div
          className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity"
          onClick={onClose}
        ></div>

        {/* Modal panel */}
        <div className="inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-4 flex justify-between items-center">
            <h3 className="text-2xl font-bold text-white">{project.title}</h3>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-200 transition-colors duration-200"
            >
              <X size={24} />
            </button>
          </div>

          {/* Content */}
          <div className="px-6 py-6">
            {/* Project Image */}
            <div className="mb-6">
              <div className="h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                      {project.title.charAt(0)}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Project Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">프로젝트 설명</h4>
                <p className="text-gray-600 leading-relaxed">
                  {project.longDescription || project.description}
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">프로젝트 정보</h4>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <Calendar size={16} className="mr-2" />
                    <span>{project.period}</span>
                  </div>
                  <div className="text-gray-600">
                    <div className="flex items-center mb-2">
                      <Users size={16} className="mr-2" />
                      <span className="font-medium">팀원:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.teamSize.split(/[,(]/).map((member, index) => (
                        <span
                          key={index}
                          className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {member.trim().replace(/[()]/g, '')}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-gray-600">
                    <span className="font-medium mr-2">역할:</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.role.split(/[,·]/).map((role, index) => (
                        <span
                          key={index}
                          className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {role.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">사용 기술</h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Achievements */}
            {project.achievements && project.achievements.length > 0 && (
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">주요 성과</h4>
                <div className="space-y-2">
                  {project.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center text-gray-600">
                      <Award size={16} className="mr-2 text-yellow-500" />
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Challenges */}
            {project.challenges && project.challenges.length > 0 && (
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">기술적 도전</h4>
                <div className="space-y-2">
                  {project.challenges.map((challenge, index) => (
                    <div key={index} className="flex items-start text-gray-600">
                      <AlertCircle size={16} className="mr-2 mt-0.5 text-blue-500 flex-shrink-0" />
                      <span>{challenge}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tags */}
            {project.tags && project.tags.length > 0 && (
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">프로젝트 태그</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1"
                    >
                      <Tag size={14} />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex justify-center gap-3 pt-6 border-t border-gray-200">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 flex items-center space-x-2"
              >
                <Github size={20} />
                <span>GitHub 보기</span>
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-colors duration-200 flex items-center space-x-2"
                >
                  <Play size={20} />
                  <span>데모 보기</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
