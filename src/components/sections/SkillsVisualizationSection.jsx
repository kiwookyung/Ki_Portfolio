import { Code, Server, Wrench, Brain } from 'lucide-react';
import { skills } from '../../data/skills';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import {
  FaReact, FaVuejs, FaRoute, FaBrain, FaChartLine, FaPython, FaBolt, FaPlug, FaGithub, FaDocker, FaAws, FaFigma, FaJenkins, FaSatelliteDish, FaMicrophone, FaPalette, FaFilm, FaEye, FaRobot
} from 'react-icons/fa';
import {
  SiTypescript, SiTailwindcss, SiOpenstreetmap, SiFastapi, SiPostgresql, SiRedis, SiVite, SiPostman, SiTensorflow, SiNginx, SiGoogle
} from 'react-icons/si';

const SkillsVisualizationSection = () => {
  const [headerRef, isHeaderVisible] = useIntersectionObserver();
  const [skillsRef, isSkillsVisible] = useIntersectionObserver();

  // 아이콘 매핑 함수
  const getIcon = (iconName, iconColor) => {
    const iconMap = {
      FaReact, FaVuejs, FaRoute, FaBrain, FaChartLine, FaPython, FaBolt, FaPlug,
      FaGithub, FaDocker, FaAws, FaFigma, FaJenkins, FaSatelliteDish, FaMicrophone,
      FaPalette, FaFilm, FaEye, FaRobot,
      SiTypescript, SiTailwindcss, SiOpenstreetmap, SiFastapi,
      SiPostgresql, SiRedis, SiVite, SiPostman, SiTensorflow, SiNginx, SiGoogle
    };

    const IconComponent = iconMap[iconName];
    if (IconComponent) {
      return <IconComponent className={iconColor} />;
    }
    return null;
  };

  const getProgressWidth = (level) => {
    switch (level) {
      case 'expert':
        return 95;
      case 'advanced':
        return 85;
      case 'intermediate':
        return 70;
      case 'basic':
        return 50;
      default:
        return 0;
    }
  };

  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Code size={28} />,
      skills: skills.frontend,
      gradient: 'from-theme-primary to-theme-primary-dark',
      bgColor: 'bg-theme-card-subtle',
      borderColor: 'border-theme-accent',
    },
    {
      title: '협업 & 연동',
      icon: <Server size={28} />,
      skills: skills.collaboration,
      gradient: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
    },
    {
      title: '개발 도구',
      icon: <Wrench size={28} />,
      skills: skills.tools,
      gradient: 'from-slate-500 to-gray-600',
      bgColor: 'bg-slate-50',
      borderColor: 'border-slate-200',
    },
    {
      title: '통합 & 연동',
      icon: <Brain size={28} />,
      skills: skills.integration,
      gradient: 'from-indigo-500 to-blue-500',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200',
    },
  ];

  return (
    <section className="py-20 bg-theme">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <h2 className="text-4xl sm:text-5xl font-display font-black text-theme-primary mb-4">
            Tech Stack
          </h2>
          <p className="text-xl text-theme-secondary max-w-3xl mx-auto font-body">
            실무에서 활용하는 다양한 기술 스택과 도구들
          </p>
        </div>

        {/* Skills Grid */}
        <div
          ref={skillsRef}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 transition-all duration-1000 ${isSkillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`bg-gradient-to-br from-theme-card-subtle to-theme-card rounded-2xl p-8 shadow-xl border-2 border-theme-accent hover:border-theme-primary hover:shadow-2xl hover:scale-105 transition-all duration-500`}
              style={{
                transitionDelay: `${categoryIndex * 150}ms`,
              }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-theme-primary p-3 rounded-xl text-white">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-theme-primary">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xl flex items-center justify-center w-6 h-6">
                          {getIcon(skill.icon, skill.iconColor)}
                        </span>
                        <span className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                          {skill.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        {skill.level === 'expert' && (
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-semibold">
                            Expert
                          </span>
                        )}
                        {skill.level === 'advanced' && (
                          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-semibold">
                            Advanced
                          </span>
                        )}
                        {skill.level === 'intermediate' && (
                          <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full font-semibold">
                            Intermediate
                          </span>
                        )}
                        {skill.level === 'basic' && (
                          <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full font-semibold">
                            Basic
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="relative w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`absolute top-0 left-0 h-full bg-gradient-to-r ${category.gradient} rounded-full transition-all duration-1000 ease-out group-hover:opacity-90`}
                        style={{
                          width: isSkillsVisible ? `${getProgressWidth(skill.level)}%` : '0%',
                          transitionDelay: `${categoryIndex * 150 + skillIndex * 100}ms`,
                        }}
                      >
                        <div className="absolute inset-0 bg-white opacity-20 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div
          className={`mt-12 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-2xl p-8 border border-gray-200 transition-all duration-1000 delay-700 ${isSkillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              지속적인 학습과 성장
            </h3>
            <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
              새로운 기술에 대한 호기심과 열정을 가지고 꾸준히 학습하며,<br />
              실무 프로젝트를 통해 기술 역량을 지속적으로 향상시키고 있습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsVisualizationSection;


