import { GraduationCap, Briefcase, Trophy, BookOpen } from 'lucide-react';
import { career } from '../../data/career';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const TimelineSection = () => {
  const [headerRef, isHeaderVisible] = useIntersectionObserver();
  const [timelineRef, isTimelineVisible] = useIntersectionObserver();

  // 시간순 정렬 (최신순)
  const sortedCareer = [...career].sort((a, b) => {
    // 진행 중인 항목(end가 null)은 맨 위로
    if (a.end === null && b.end !== null) return -1;
    if (a.end !== null && b.end === null) return 1;

    // start 날짜로 정렬 (YYYY-MM 형식)
    return b.start.localeCompare(a.start);
  });

  const getIcon = (type) => {
    switch (type) {
      case 'education':
        return <GraduationCap size={24} />;
      case 'project':
        return <Briefcase size={24} />;
      case 'competition':
        return <Trophy size={24} />;
      case 'activity':
        return <BookOpen size={24} />;
      default:
        return <BookOpen size={24} />;
    }
  };

  const getTypeLabel = (type) => {
    switch (type) {
      case 'education':
        return 'Education';
      case 'project':
        return 'Project';
      case 'competition':
        return 'Competition';
      case 'activity':
        return 'Activity';
      default:
        return 'Experience';
    }
  };

  const getColor = (type) => {
    switch (type) {
      case 'education':
        return {
          border: 'border-theme-primary',
          icon: 'bg-theme-primary',
          text: 'text-theme-primary',
          typeBg: 'bg-theme-primary',
          typeText: 'text-white',
        };
      case 'project':
        return {
          border: 'border-theme-accent',
          icon: 'bg-theme-accent',
          text: 'text-theme-accent',
          typeBg: 'bg-theme-accent',
          typeText: 'text-white',
        };
      case 'competition':
        return {
          border: 'border-theme-primary-dark',
          icon: 'bg-theme-primary-dark',
          text: 'text-theme-primary-dark',
          typeBg: 'bg-theme-primary-dark',
          typeText: 'text-white',
        };
      case 'activity':
        return {
          border: 'border-theme-primary',
          icon: 'bg-theme-primary',
          text: 'text-theme-primary',
          typeBg: 'bg-theme-primary',
          typeText: 'text-white',
        };
      default:
        return {
          border: 'border-theme-primary',
          icon: 'bg-theme-primary',
          text: 'text-theme-primary',
          typeBg: 'bg-theme-primary',
          typeText: 'text-white',
        };
    }
  };

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
            Education & Experience
          </h2>
          <p className="text-xl text-theme-secondary max-w-3xl mx-auto font-body">
            학습과 경험을 통한 성장의 여정
          </p>
        </div>

        {/* Timeline */}
        <div
          ref={timelineRef}
          className="relative"
        >
          {/* Vertical Line */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full hidden md:block"
            style={{
              background: 'linear-gradient(to bottom, var(--theme-primary), var(--theme-accent), var(--theme-primary-dark))'
            }}
          ></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {sortedCareer.map((item, index) => {
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
                  {/* Timeline Icon - 완벽한 중앙 정렬 */}
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className={`${colors.icon} w-16 h-16 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-300`}>
                      {getIcon(item.type)}
                    </div>
                    {/* Pulse Animation */}
                    <div className={`absolute inset-0 ${colors.icon} rounded-full animate-ping opacity-20`}></div>
                  </div>

                  <div className={`flex flex-col md:flex-row gap-8 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Content Card */}
                    <div className="w-full md:w-5/12">
                      <div className={`bg-gradient-to-br from-theme-card-subtle to-theme-card rounded-2xl p-6 shadow-xl border-2 ${colors.border} hover:border-theme-primary hover:shadow-2xl hover:scale-105 transition-all duration-500 text-left`}>
                        {/* Type Badge */}
                        <div className={`inline-block ${colors.typeBg} ${colors.typeText} px-3 py-1 rounded-full text-xs font-bold mb-4`}>
                          {getTypeLabel(item.type)}
                        </div>

                        {/* Organization */}
                        <div className="text-sm text-gray-500 mb-2 font-medium">
                          {item.org}
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-theme-text-primary mb-3">
                          {item.title}
                        </h3>

                        {/* Description */}
                        <p className="text-theme-text-secondary mb-4 leading-relaxed">
                          {item.description}
                        </p>

                        {/* Details List */}
                        <ul className="space-y-2 mb-4 text-left">
                          {item.details.map((detail, detailIndex) => (
                            <li
                              key={detailIndex}
                              className="text-sm text-theme-text-secondary flex items-start gap-2"
                            >
                              <span className={colors.text}>•</span>
                              <span className="flex-1">{detail}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Period */}
                        <div className={`text-sm ${colors.text} font-semibold border-t pt-3 text-left`}>
                          📅 {item.period}
                        </div>
                      </div>
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


