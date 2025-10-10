import { useState } from 'react';
import { Briefcase, Filter } from 'lucide-react';
import ProjectsSection from '../components/sections/ProjectsSection';
import ProjectModal from '../components/common/ProjectModal';
import { projects } from '../data/projects';

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState('all');

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  // 필터링된 프로젝트
  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.tech.some(tech => tech.toLowerCase().includes(filter.toLowerCase())));

  // 주요 기술 스택
  const mainTechs = ['React', 'Vue', 'Django', 'Python', 'JavaScript'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center gap-3 bg-white bg-opacity-20 px-4 py-2 rounded-full mb-6">
            <Briefcase size={24} />
            <span className="font-semibold">Portfolio</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            All Projects
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            다양한 기술 스택과 협업 경험을 통해 완성한 프로젝트들입니다
          </p>
          <div className="mt-8 flex items-center justify-center gap-2">
            <span className="text-blue-100">Total:</span>
            <span className="text-3xl font-bold">{projects.length}</span>
            <span className="text-blue-100">Projects</span>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-10 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2 text-gray-700 font-semibold">
              <Filter size={20} />
              <span>필터:</span>
            </div>
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${filter === 'all'
                ? 'bg-blue-600 text-white shadow-lg scale-105'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
              전체 ({projects.length})
            </button>
            {mainTechs.map((tech) => (
              <button
                key={tech}
                onClick={() => setFilter(tech)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${filter === tech
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                {tech} ({projects.filter(p => p.tech.includes(tech)).length})
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <ProjectsSection projects={filteredProjects} onProjectClick={openModal} />

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default ProjectsPage;
