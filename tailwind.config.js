/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
      },
      animation: {
        blob: "blob 7s infinite",
        "fade-in-up": "fadeInUp 0.6s ease-out",
        "fade-in-left": "fadeInLeft 0.6s ease-out",
        "fade-in-right": "fadeInRight 0.6s ease-out",
        "slide-up": "slideUp 0.8s ease-out",
        "slide-left": "slideLeft 0.8s ease-out",
        "slide-right": "slideRight 0.8s ease-out",
        "scale-in": "scaleIn 0.6s ease-out",
        "rotate-in": "rotateIn 0.8s ease-out",
        "bounce-in": "bounceIn 0.8s ease-out",
        "flip-in": "flipIn 0.8s ease-out",
        float: "float 3s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        shimmer: "shimmer 2s linear infinite",
        tilt: "tilt 10s infinite linear",
        parallax: "parallax 20s infinite linear",
        blink: "blink 1s step-end infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fadeInLeft: {
          "0%": {
            opacity: "0",
            transform: "translateX(-30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        fadeInRight: {
          "0%": {
            opacity: "0",
            transform: "translateX(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        slideUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(50px) scale(0.9)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0) scale(1)",
          },
        },
        slideLeft: {
          "0%": {
            opacity: "0",
            transform: "translateX(-50px) rotateY(-15deg)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0) rotateY(0deg)",
          },
        },
        slideRight: {
          "0%": {
            opacity: "0",
            transform: "translateX(50px) rotateY(15deg)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0) rotateY(0deg)",
          },
        },
        scaleIn: {
          "0%": {
            opacity: "0",
            transform: "scale(0.5) rotate(-10deg)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1) rotate(0deg)",
          },
        },
        rotateIn: {
          "0%": {
            opacity: "0",
            transform: "rotate(-180deg) scale(0.3)",
          },
          "100%": {
            opacity: "1",
            transform: "rotate(0deg) scale(1)",
          },
        },
        bounceIn: {
          "0%": {
            opacity: "0",
            transform: "scale(0.3) translateY(-100px)",
          },
          "50%": {
            opacity: "1",
            transform: "scale(1.05) translateY(0)",
          },
          "70%": {
            transform: "scale(0.9)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1) translateY(0)",
          },
        },
        flipIn: {
          "0%": {
            opacity: "0",
            transform: "perspective(400px) rotateY(90deg)",
          },
          "40%": {
            transform: "perspective(400px) rotateY(-20deg)",
          },
          "60%": {
            transform: "perspective(400px) rotateY(10deg)",
          },
          "80%": {
            transform: "perspective(400px) rotateY(-5deg)",
          },
          "100%": {
            opacity: "1",
            transform: "perspective(400px) rotateY(0deg)",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-20px)",
          },
        },
        glow: {
          "0%": {
            boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
          },
          "100%": {
            boxShadow:
              "0 0 30px rgba(59, 130, 246, 0.8), 0 0 40px rgba(59, 130, 246, 0.3)",
          },
        },
        shimmer: {
          "0%": {
            backgroundPosition: "-200% 0",
          },
          "100%": {
            backgroundPosition: "200% 0",
          },
        },
        tilt: {
          "0%, 50%, 100%": {
            transform: "rotateY(0deg) rotateX(0deg)",
          },
          "25%": {
            transform: "rotateY(5deg) rotateX(5deg)",
          },
          "75%": {
            transform: "rotateY(-5deg) rotateX(-5deg)",
          },
        },
        parallax: {
          "0%": {
            transform: "translateZ(0px) translateY(0px)",
          },
          "100%": {
            transform: "translateZ(100px) translateY(-100px)",
          },
        },
        blink: {
          "0%, 49%": {
            opacity: "1",
          },
          "50%, 100%": {
            opacity: "0",
          },
        },
      },
      perspective: {
        none: "none",
        250: "250px",
        500: "500px",
        750: "750px",
        1000: "1000px",
      },
      rotate: {
        15: "15deg",
        "-15": "-15deg",
        30: "30deg",
        "-30": "-30deg",
      },
      scale: {
        98: "0.98",
        102: "1.02",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
