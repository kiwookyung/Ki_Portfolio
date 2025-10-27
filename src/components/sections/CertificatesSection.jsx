import { Award, Calendar, Building, GraduationCap, Trophy, FileText } from 'lucide-react';
import { certifications } from '../../data/certificates';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const CertificatesSection = () => {
  const [headerRef, isHeaderVisible] = useIntersectionObserver();
  const [cardsRef, isCardsVisible] = useIntersectionObserver();

  const getTypeColor = (type) => {
    switch (type) {
      case 'education':
        return {
          bg: 'bg-gradient-to-br from-blue-400 to-blue-600',
          border: 'border-blue-200',
          hover: 'hover:border-blue-300',
          iconBg: 'bg-gradient-to-br from-blue-400 to-blue-600',
        };
      case 'award':
        return {
          bg: 'bg-gradient-to-br from-yellow-400 to-orange-400',
          border: 'border-yellow-200',
          hover: 'hover:border-yellow-300',
          iconBg: 'bg-gradient-to-br from-yellow-400 to-orange-400',
        };
      case 'certificate':
        return {
          bg: 'bg-gradient-to-br from-green-400 to-green-600',
          border: 'border-green-200',
          hover: 'hover:border-green-300',
          iconBg: 'bg-gradient-to-br from-green-400 to-green-600',
        };
      default:
        return {
          bg: 'bg-gradient-to-br from-gray-400 to-gray-600',
          border: 'border-gray-200',
          hover: 'hover:border-gray-300',
          iconBg: 'bg-gradient-to-br from-gray-400 to-gray-600',
        };
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'education':
        return <GraduationCap size={32} className="text-white" />;
      case 'award':
        return <Trophy size={32} className="text-white" />;
      case 'certificate':
        return <FileText size={32} className="text-white" />;
      default:
        return <Award size={32} className="text-white" />;
    }
  };

  const getTypeLabel = (type) => {
    switch (type) {
      case 'education':
        return '교육';
      case 'award':
        return '수상';
      case 'certificate':
        return '자격증';
      default:
        return '기타';
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
            Certificates & Awards
          </h2>
          <p className="text-xl text-theme-secondary max-w-3xl mx-auto font-body">
            수상 경력 및 자격증
          </p>
        </div>

        {/* Certificates Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certifications.map((cert, index) => {
            const colors = getTypeColor(cert.type);
            return (
              <div
                key={cert.id}
                className={`bg-gradient-to-br from-theme-card-subtle to-theme-card rounded-2xl p-8 shadow-xl border-2 border-theme-accent hover:border-theme-primary hover:shadow-2xl hover:scale-105 transition-all duration-500 ${isCardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                {/* Type Badge */}
                <div className="inline-block bg-theme-primary text-white px-3 py-1 rounded-full text-xs font-bold mb-4">
                  {getTypeLabel(cert.type)}
                </div>

                {/* Type-specific Icon */}
                <div className="flex items-center justify-center w-16 h-16 bg-theme-primary rounded-2xl mb-6 mx-auto shadow-lg hover:rotate-12 transition-transform duration-300">
                  {getTypeIcon(cert.type)}
                </div>

                {/* Certificate Name */}
                <h3 className="text-xl font-bold text-theme-primary mb-4 text-center leading-snug">
                  {cert.name}
                </h3>

                {/* Issuer */}
                <div className="flex items-center gap-2 mb-3 text-gray-700">
                  <Building size={18} className="text-theme-primary flex-shrink-0" />
                  <p className="text-sm font-medium">{cert.issuer}</p>
                </div>

                {/* Date */}
                <div className="flex items-center gap-2 mb-4 text-gray-700">
                  <Calendar size={18} className="text-theme-primary flex-shrink-0" />
                  <p className="text-sm font-medium">{cert.date}</p>
                </div>

                {/* Description */}
                <div className="pt-4 border-t border-theme-accent/30">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary Banner */}
        <div
          className={`mt-12 bg-gradient-to-r from-theme-primary via-theme-accent to-theme-primary-dark rounded-2xl p-8 text-center shadow-2xl transition-all duration-1000 delay-500 ${isCardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award size={32} className="text-white" />
            <h3 className="text-2xl font-bold text-white">
              Total {certifications.length} Achievements
            </h3>
          </div>
          <p className="text-white text-lg">
            지속적인 학습과 도전을 통해 성장하고 있습니다
          </p>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;

