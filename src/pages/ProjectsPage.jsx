import { useState } from 'react';
import { Briefcase, Filter, User, Home, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
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

  // 프로젝트 타입 분류 함수
  const getProjectType = (teamSize) => {
    return teamSize.includes('1명') || teamSize.includes('개인') ? '개인' : '팀';
  };

  // 필터링된 프로젝트
  const filteredProjects = filter === 'all'
    ? projects
    : filter === '개인'
      ? projects.filter(p => getProjectType(p.teamSize) === '개인')
      : filter === '팀'
        ? projects.filter(p => getProjectType(p.teamSize) === '팀')
        : projects;

  // 필터 옵션
  const filterOptions = [
    { key: 'all', label: '전체', count: projects.length },
    {
      key: '개인',
      label: '개인 프로젝트',
      count: projects.filter(p => getProjectType(p.teamSize) === '개인').length
    },
    {
      key: '팀',
      label: '팀 프로젝트',
      count: projects.filter(p => getProjectType(p.teamSize) === '팀').length
    }
  ];

  return (
    <div className="min-h-screen bg-theme">
      {/* Page Header */}
      <div
        className="text-white py-20 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgba(37, 204, 8, 0.8), rgba(26, 138, 6, 0.9))'
        }}
      >
        <div className="absolute inset-0 bg-theme-primary opacity-10"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center justify-center gap-3 bg-white bg-opacity-20 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
            <Briefcase size={24} className="text-white" />
            <span className="font-semibold text-white">Portfolio</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-black mb-6 text-white">
            All Projects
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto font-body opacity-90">
            다양한 기술 스택과 협업 경험을 통해 완성한 프로젝트들입니다
          </p>
          <div className="mt-8 flex items-center justify-center gap-2">
            <span className="text-white font-body opacity-90">Total:</span>
            <span className="text-3xl font-display font-black text-white">{projects.length}</span>
            <span className="text-white font-body opacity-90">Projects</span>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="bg-theme-card-subtle border-b-2 border-theme-primary sticky top-16 z-10 shadow-md backdrop-blur-sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2 text-theme-secondary font-semibold font-display">
              <Filter size={20} className="text-theme-primary" />
              <span>필터:</span>
            </div>
            {filterOptions.map((option) => (
              <button
                key={option.key}
                onClick={() => setFilter(option.key)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 font-body ${filter === option.key
                  ? 'bg-theme-primary text-white shadow-lg scale-105'
                  : 'bg-theme-card-subtle text-theme-secondary hover:bg-theme-card border border-theme-accent'
                  }`}
              >
                {option.label} ({option.count})
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <ProjectsSection projects={filteredProjects} onProjectClick={openModal} />

      {/* Navigation Section */}
      <div className="bg-theme-card-subtle py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-black text-theme-primary mb-4">
              더 알아보기
            </h2>
            <p className="text-theme-secondary font-body text-lg">
              다른 섹션에서 더 많은 정보를 확인해보세요
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Home */}
            <Link
              to="/"
              className="group bg-theme-card-subtle rounded-2xl p-8 border-2 border-theme-accent hover:border-theme-primary transition-all duration-300 hover:shadow-lg hover:scale-105 shadow-md"
              onClick={() => window.scrollTo(0, 0)}
            >
              <div className="text-center">
                <div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: 'linear-gradient(135deg, var(--theme-primary), var(--theme-primary-dark))' }}
                >
                  <Home size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-display font-black text-theme-primary mb-2 group-hover:text-theme-primary transition-colors duration-300">
                  홈
                </h3>
                <p className="text-theme-secondary font-body text-sm">
                  소개 및 주요 프로젝트 둘러보기
                </p>
              </div>
            </Link>

            {/* About */}
            <Link
              to="/about"
              className="group bg-theme-card-subtle rounded-2xl p-8 border-2 border-theme-accent hover:border-theme-primary transition-all duration-300 hover:shadow-lg hover:scale-105 shadow-md"
              onClick={() => window.scrollTo(0, 0)}
            >
              <div className="text-center">
                <div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: 'linear-gradient(135deg, var(--theme-primary), var(--theme-primary-dark))' }}
                >
                  <User size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-display font-black text-theme-primary mb-2 group-hover:text-theme-primary transition-colors duration-300">
                  소개
                </h3>
                <p className="text-theme-secondary font-body text-sm">
                  경력, 기술 스택, 목표 알아보기
                </p>
              </div>
            </Link>

            {/* Extras */}
            <Link
              to="/extras"
              className="group bg-theme-card-subtle rounded-2xl p-8 border-2 border-theme-accent hover:border-theme-primary transition-all duration-300 hover:shadow-lg hover:scale-105 shadow-md"
              onClick={() => window.scrollTo(0, 0)}
            >
              <div className="text-center">
                <div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: 'linear-gradient(135deg, var(--theme-primary), var(--theme-primary-dark))' }}
                >
                  <Award size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-display font-black text-theme-primary mb-2 group-hover:text-theme-primary transition-colors duration-300">
                  Extras
                </h3>
                <p className="text-theme-secondary font-body text-sm">
                  수상 경력, 링크, 기타 정보
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>

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
