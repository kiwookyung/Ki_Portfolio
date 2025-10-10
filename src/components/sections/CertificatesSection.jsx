import { Award, Calendar, Building } from 'lucide-react';
import { certificates } from '../../data/career';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const CertificatesSection = () => {
  const [headerRef, isHeaderVisible] = useIntersectionObserver();
  const [cardsRef, isCardsVisible] = useIntersectionObserver();

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
            Certificates & Awards
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            수상 경력 및 자격증
          </p>
        </div>

        {/* Certificates Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certificates.map((cert, index) => (
            <div
              key={cert.id}
              className={`bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 shadow-xl border-2 border-yellow-200 hover:shadow-2xl hover:scale-105 hover:border-yellow-300 transition-all duration-500 ${isCardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >
              {/* Award Icon */}
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl mb-6 mx-auto shadow-lg hover:rotate-12 transition-transform duration-300">
                <Award size={32} className="text-white" />
              </div>

              {/* Certificate Name */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center leading-snug">
                {cert.name}
              </h3>

              {/* Issuer */}
              <div className="flex items-center gap-2 mb-3 text-gray-700">
                <Building size={18} className="text-orange-600 flex-shrink-0" />
                <p className="text-sm font-medium">{cert.issuer}</p>
              </div>

              {/* Date */}
              <div className="flex items-center gap-2 mb-4 text-gray-700">
                <Calendar size={18} className="text-orange-600 flex-shrink-0" />
                <p className="text-sm font-medium">{cert.date}</p>
              </div>

              {/* Description */}
              <div className="pt-4 border-t border-yellow-200">
                <p className="text-sm text-gray-600 leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Banner */}
        <div
          className={`mt-12 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-2xl p-8 text-center shadow-2xl transition-all duration-1000 delay-500 ${isCardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award size={32} className="text-white" />
            <h3 className="text-2xl font-bold text-white">
              Total {certificates.length} Achievements
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

