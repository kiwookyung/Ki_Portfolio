import { personalInfo } from '../../data/personal';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const HighlightSkillsSection = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Core Competencies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            실무에서 검증된 핵심 기술과 전문성
          </p>
        </div>

        {/* Keywords Grid */}
        <div
          className={`grid grid-cols-2 md:grid-cols-3 gap-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          {personalInfo.keywords.map((keyword, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 hover:shadow-xl transition-all duration-500 hover:scale-105 transform cursor-pointer border border-gray-100"
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <h3 className="relative text-xl font-bold text-gray-900 text-center group-hover:text-blue-600 transition-colors duration-300">
                {keyword}
              </h3>
            </div>
          ))}
        </div>

        {/* Strengths */}
        <div
          className={`mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          {personalInfo.strengths.map((strength, index) => (
            <div
              key={index}
              className="text-center group hover:scale-105 transition-transform duration-300"
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {strength.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {strength.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {strength.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightSkillsSection;


