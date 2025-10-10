import ProfileSection from '../components/sections/ProfileSection';
import SkillsVisualizationSection from '../components/sections/SkillsVisualizationSection';
import TimelineSection from '../components/sections/TimelineSection';
import CertificatesSection from '../components/sections/CertificatesSection';
import GoalsSection from '../components/sections/GoalsSection';
import ContactSection from '../components/sections/ContactSection';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
      <ProfileSection />
      <SkillsVisualizationSection />
      <TimelineSection />
      <CertificatesSection />
      <GoalsSection />
      <ContactSection />
    </div>
  );
};

export default AboutPage;
