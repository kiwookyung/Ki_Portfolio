import { GraduationCap, Briefcase, Trophy, BookOpen } from 'lucide-react';
import { career } from '../../data/career';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const TimelineSection = () => {
  const [headerRef, isHeaderVisible] = useIntersectionObserver();
  const [timelineRef, isTimelineVisible] = useIntersectionObserver();

  const getIcon = (type) => {
    switch (type) {
      case 'education':
        return <GraduationCap size={24} />;
      case 'project':
        return <Briefcase size={24} />;
      case 'competition':
        return <Trophy size={24} />;
      default:
        return <BookOpen size={24} />;
    }
  };

  const getColor = (type) => {
    switch (type) {
      case 'education':
        return {
          bg: 'bg-blue-50',
          border: 'border-blue-200',
          icon: 'bg-blue-500',
          text: 'text-blue-600',
        };
      case 'project':
        return {
          bg: 'bg-green-50',
          border: 'border-green-200',
          icon: 'bg-green-500',
          text: 'text-green-600',
        };
      case 'competition':
        return {
          bg: 'bg-yellow-50',
          border: 'border-yellow-200',
          icon: 'bg-yellow-500',
          text: 'text-yellow-600',
        };
      default:
        return {
          bg: 'bg-gray-50',
          border: 'border-gray-200',
          icon: 'bg-gray-500',
          text: 'text-gray-600',
        };
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Education & Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            학습과 경험을 통한 성장의 여정
          </p>
        </div>

        {/* Timeline */}
        <div
          ref={timelineRef}
          className="relative"
        >
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 via-purple-200 to-pink-200 hidden md:block"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {career.map((item, index) => {
              const colors = getColor(item.type);
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`relative transition-all duration-1000 ${isTimelineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                  style={{
                    transitionDelay: `${index * 200}ms`,
                  }}
                >
                  <div className={`flex flex-col md:flex-row items-center gap-8 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Content Card */}
                    <div className={`w-full md:w-5/12 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                      <div className={`bg-white rounded-2xl p-6 shadow-xl border ${colors.border} hover:shadow-2xl hover:scale-105 transition-all duration-500`}>
                        {/* Period Badge */}
                        <div className={`inline-block ${colors.bg} ${colors.text} px-4 py-2 rounded-full text-sm font-semibold mb-4`}>
                          {item.period}
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {item.description}
                        </p>

                        {/* Details List */}
                        <ul className={`space-y-2 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                          {item.details.map((detail, detailIndex) => (
                            <li
                              key={detailIndex}
                              className="text-sm text-gray-600 flex items-start gap-2"
                            >
                              <span className={colors.text}>•</span>
                              <span className="flex-1">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Center Icon */}
                    <div className="relative flex items-center justify-center w-16 h-16 flex-shrink-0">
                      <div className={`${colors.icon} w-16 h-16 rounded-full flex items-center justify-center text-white shadow-lg z-10 hover:scale-110 transition-transform duration-300`}>
                        {getIcon(item.type)}
                      </div>
                      {/* Pulse Animation */}
                      <div className={`absolute inset-0 ${colors.icon} rounded-full animate-ping opacity-20`}></div>
                    </div>

                    {/* Empty Space for Alternating Layout */}
                    <div className="hidden md:block w-5/12"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;


