import { useState } from 'react';
import { personalInfo } from '../../data/personal';
import { Mail, Github, FileText, MapPin, Phone, Lightbulb, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // EmailJS 설정 (실제 사용 시 아래 값들을 EmailJS 대시보드에서 가져와야 합니다)
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID; // EmailJS Template ID
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY; // EmailJS Public Key

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: personalInfo.profile.email,
      };

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      alert('✅ 메시지가 성공적으로 전송되었습니다!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert('❌ 메시지 전송에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "이메일",
      value: personalInfo.profile.email,
      href: `mailto:${personalInfo.profile.email}`,
      color: "text-theme-primary"
    },
    {
      icon: Phone,
      title: "연락처",
      value: personalInfo.profile.phone,
      href: `tel:${personalInfo.profile.phone}`,
      color: "text-theme-accent"
    },
    {
      icon: MapPin,
      title: "위치",
      value: personalInfo.profile.location,
      href: "#",
      color: "text-theme-primary-dark"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      href: personalInfo.profile.github,
      bgColor: "bg-gray-900 hover:bg-gray-800",
      label: "GitHub"
    },
    {
      icon: Mail,
      href: `mailto:${personalInfo.profile.email}`,
      bgColor: "bg-red-600 hover:bg-red-700",
      label: "Email"
    },
    {
      icon: FileText,
      href: personalInfo.profile.resume,
      bgColor: "bg-blue-600 hover:bg-blue-700",
      label: "Resume",
      download: true
    }
  ];

  const desiredProjects = [
    "AIoT 기반 실시간 대시보드 및 제어 시스템",
    "React/TypeScript 기반 고성능 웹 애플리케이션",
    "AI API 연동 및 음성/이미지 처리 웹 서비스",
    "대규모 팀 프로젝트의 프론트엔드 아키텍처 설계",
    "WebSocket, MQTT 등 실시간 통신 기반 서비스",
    "성능 최적화 및 사용자 경험 개선 프로젝트"
  ];

  return (
    <section id="contact" className="py-20 bg-theme">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-display font-black text-theme-primary mb-6">Contact</h2>
          <p className="text-xl text-theme-secondary max-w-4xl mx-auto leading-relaxed font-body">
            새로운 기회와 협업에 항상 열려있습니다. 언제든지 편하게 연락주세요!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info & Desired Projects */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-gradient-to-br from-theme-card-subtle to-theme-card rounded-2xl p-8 border-2 border-theme-accent hover:border-theme-primary shadow-xl hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-theme-primary mb-6">연락처 정보</h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => {
                  const IconComponent = method.icon;
                  return (
                    <div key={index} className="flex items-center space-x-4">
                      <IconComponent size={20} className={method.color} />
                      <div>
                        <span className="text-sm text-gray-600">{method.title}</span>
                        <p className="text-gray-900 font-medium text-base">{method.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-br from-theme-card-subtle to-theme-card rounded-2xl p-8 border-2 border-theme-accent hover:border-theme-primary shadow-xl hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-theme-primary mb-6">연락하기</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target={social.download ? undefined : "_blank"}
                      rel={social.download ? undefined : "noopener noreferrer"}
                      download={social.download}
                      className={`w-14 h-14 ${social.bgColor} rounded-2xl flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl`}
                      aria-label={social.label}
                    >
                      <IconComponent size={24} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Desired Projects */}
            <div className="bg-theme-card-subtle rounded-2xl p-8 border border-theme-accent">
              <h3 className="text-2xl font-bold text-theme-primary mb-6 flex items-center">
                <Lightbulb size={20} className="mr-3 text-theme-primary" />
                함께 일하고 싶은 프로젝트
              </h3>
              <ul className="space-y-2">
                {desiredProjects.map((project, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-theme-primary mt-1 text-base">•</span>
                    <span className="text-gray-700 text-base">{project}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Message Form */}
          <div className="bg-theme-card-subtle rounded-2xl p-8 border border-theme-accent">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">메시지 보내기</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    이름 *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-theme-primary focus:border-transparent transition-all duration-200 text-base"
                    placeholder="홍길동"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    이메일 *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-theme-primary focus:border-transparent transition-all duration-200 text-base"
                    placeholder="example@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  제목 *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-base"
                  placeholder="협업 제안, 프로젝트 문의 등"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  메시지 *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none text-base"
                  placeholder="안녕하세요! 프로젝트에 대해 논의하고 싶습니다..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-theme-primary text-white py-4 px-8 rounded-xl font-semibold text-lg hover:bg-theme-primary-dark transform hover:scale-105 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>전송 중...</span>
                  </>
                ) : (
                  <>
                    <Send size={24} />
                    <span>메시지 전송</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
