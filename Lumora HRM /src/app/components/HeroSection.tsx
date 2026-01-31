import { motion } from 'motion/react';
import { ArrowRight, Play, CheckCircle2, Sparkles, Shield, Zap } from 'lucide-react';

export function HeroSection() {
  const highlights = [
    { icon: Shield, text: 'Enterprise Security' },
    { icon: Zap, text: 'Cloud-Ready Platform' },
    { icon: CheckCircle2, text: 'Compliance Built-in' },
  ];

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#625aeb]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#625aeb]/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#625aeb]/10 to-purple-100/50 rounded-full border border-[#625aeb]/20 mb-6"
            >
              <Sparkles className="w-4 h-4 text-[#625aeb]" />
              <span className="text-sm font-medium text-[#625aeb]">
                Next-Gen HR Platform
              </span>
            </motion.div>

            {/* Logo Heading (Replaced Text) */}
            <div className="mb-6">
              <img
                src="https://services.hashxinnovations.com/logo/Lumora.png"
                alt="Lumora HRM"
                className="h-16 lg:h-20 xl:h-24 w-auto"
              />
            </div>

            {/* Tagline */}
            <p className="text-xl lg:text-2xl text-gray-700 mb-4 font-medium">
              A Smart, Secure & Scalable Human Resource Management Solution
            </p>

            {/* Subtitle */}
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Simplify People Management. Strengthen Workforce Performance. Enable Digital HR.
            </p>

            {/* Description */}
            <p className="text-base text-gray-600 mb-10 leading-relaxed">
              Lumora HRM is an all-in-one, cloud-ready Human Resource Management solution modernizing HR
              operations for Large Enterprises, SMEs, and Public Sector organizations with automation,
              compliance, and workforce intelligence.
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-4 mb-10">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-200 shadow-sm"
                >
                  <item.icon className="w-5 h-5 text-[#625aeb]" />
                  <span className="text-sm font-medium text-gray-700">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="group px-8 py-4 bg-gradient-to-r from-[#625aeb] to-[#8b7ff4] text-white rounded-xl font-medium shadow-lg shadow-[#625aeb]/30 hover:shadow-xl hover:shadow-[#625aeb]/40 transition-all duration-300 flex items-center justify-center gap-2">
                Start Your Digital HR Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="px-8 py-4 bg-white text-gray-700 rounded-xl font-medium border-2 border-gray-200 hover:border-[#625aeb] hover:text-[#625aeb] transition-all duration-300 flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                Watch Demo
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content – AI Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            className="relative"
          >
            <div className="relative">
              <div className="relative bg-gradient-to-br from-white/80 to-purple-50/50 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-2xl shadow-[#625aeb]/10">
                <img
                  src="https://services.hashxinnovations.com/logo/HASHXAIGRIL.png"
                  alt="Lumora HRM AI Representative"
                  className="w-full h-auto relative z-10"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
