import { Target, Rocket } from 'lucide-react';
import { personalInfo } from '../../data/personal';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const GoalsSection = () => {
  const [headerRef, isHeaderVisible] = useIntersectionObserver();
  const [goalsRef, isGoalsVisible] = useIntersectionObserver();

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Goals & Vision
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            지속적인 성장을 위한 목표와 비전
          </p>
        </div>

        <div
          ref={goalsRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Short Term Goals */}
          <div
            className={`transition-all duration-1000 ${isGoalsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-blue-200 h-full hover:shadow-2xl hover:scale-105 transition-all duration-500">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-blue-500 p-3 rounded-xl text-white">
                  <Target size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    단기 목표
                  </h3>
                  <p className="text-sm text-gray-600">Short Term Goals</p>
                </div>
              </div>

              <div className="space-y-6">
                {personalInfo.goals.shortTerm.map((goal, index) => (
                  <div
                    key={index}
                    className="group bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-5 border border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
                    style={{
                      transitionDelay: `${index * 100}ms`,
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-3xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        {goal.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                          {goal.title}
                        </h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {goal.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Long Term Goals */}
          <div
            className={`transition-all duration-1000 delay-300 ${isGoalsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-purple-200 h-full hover:shadow-2xl hover:scale-105 transition-all duration-500">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-xl text-white">
                  <Rocket size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    중장기 목표
                  </h3>
                  <p className="text-sm text-gray-600">Long Term Goals</p>
                </div>
              </div>

              <div className="space-y-6">
                {personalInfo.goals.longTerm.map((goal, index) => (
                  <div
                    key={index}
                    className="group bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-5 border border-purple-100 hover:border-purple-300 hover:shadow-lg transition-all duration-300"
                    style={{
                      transitionDelay: `${index * 100 + 300}ms`,
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-3xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        {goal.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                          {goal.title}
                        </h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {goal.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Next Step Banner */}
        <div
          className={`mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center shadow-2xl transition-all duration-1000 delay-700 ${isGoalsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Next Step 🚀
          </h3>
          <p className="text-white text-lg max-w-3xl mx-auto leading-relaxed">
            새로운 도전과 학습을 통해 더 나은 개발자로 성장하고,<br />
            사용자에게 가치 있는 서비스를 제공하는 것이 저의 다음 목표입니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GoalsSection;


