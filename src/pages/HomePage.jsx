import { useState } from 'react';
import HeroSection from '../components/sections/HeroSection';
import HighlightSkillsSection from '../components/sections/HighlightSkillsSection';
import FeaturedProjectsSection from '../components/sections/FeaturedProjectsSection';
import ProjectModal from '../components/common/ProjectModal';
import { projects } from '../data/projects';

const HomePage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <main>
      <HeroSection />
      <HighlightSkillsSection />
      <FeaturedProjectsSection projects={projects} onProjectClick={openModal} />

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </main>
  );
};

export default HomePage;
