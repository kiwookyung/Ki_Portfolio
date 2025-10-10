import { Code, Server, Wrench, Brain } from 'lucide-react';
import { skills } from '../../data/skills';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const SkillsVisualizationSection = () => {
  const [headerRef, isHeaderVisible] = useIntersectionObserver();
  const [skillsRef, isSkillsVisible] = useIntersectionObserver();

  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Code size={28} />,
      skills: skills.frontend,
      gradient: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
    },
    {
      title: 'Backend',
      icon: <Server size={28} />,
      skills: skills.backend,
      gradient: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
    },
    {
      title: 'Tools',
      icon: <Wrench size={28} />,
      skills: skills.tools,
      gradient: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
    },
    {
      title: 'AI & IoT',
      icon: <Brain size={28} />,
      skills: skills.ai,
      gradient: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Tech Stack
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
              className={`bg-white rounded-2xl p-8 shadow-xl border ${category.borderColor} hover:shadow-2xl hover:scale-105 transition-all duration-500`}
              style={{
                transitionDelay: `${categoryIndex * 150}ms`,
              }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`${category.bgColor} p-3 rounded-xl text-gray-700`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
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
                        <span className="text-xl">{skill.icon}</span>
                        <span className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                          {skill.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        {skill.level >= 85 && (
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-semibold">
                            Expert
                          </span>
                        )}
                        {skill.level >= 75 && skill.level < 85 && (
                          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-semibold">
                            Advanced
                          </span>
                        )}
                        <span className="text-sm font-bold text-gray-700">
                          {skill.level}%
                        </span>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="relative w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`absolute top-0 left-0 h-full bg-gradient-to-r ${category.gradient} rounded-full transition-all duration-1000 ease-out group-hover:opacity-90`}
                        style={{
                          width: isSkillsVisible ? `${skill.level}%` : '0%',
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


