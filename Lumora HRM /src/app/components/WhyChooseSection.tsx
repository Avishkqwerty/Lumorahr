import { motion } from 'motion/react';
import { CheckCircle2, Globe2, Layers, Smartphone, FileCheck, Shield } from 'lucide-react';

export function WhyChooseSection() {
  const reasons = [
    {
      icon: Globe2,
      title: 'Designed for Sri Lanka & Regional Markets',
      description: 'Built with local compliance requirements and business practices in mind',
    },
    {
      icon: Layers,
      title: 'Flexible for Enterprise, SME & Public Sector',
      description: 'Scalable architecture that adapts to any organization size',
    },
    {
      icon: Smartphone,
      title: 'Modern Employee-First UI',
      description: 'Intuitive interface designed for excellent user experience',
    },
    {
      icon: FileCheck,
      title: 'Policy-Aligned Workflows',
      description: 'Customizable workflows that match your organizational policies',
    },
    {
      icon: Shield,
      title: 'Secure and Scalable Platform',
      description: 'Enterprise-grade security with unlimited growth potential',
    },
    {
      icon: CheckCircle2,
      title: 'Comprehensive HR Coverage',
      description: 'All-in-one solution eliminating the need for multiple systems',
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              {/* Decorative Background */}
              <div className="absolute -top-10 -left-10 w-72 h-72 bg-gradient-to-br from-[#625aeb]/10 to-purple-200/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-gradient-to-br from-purple-200/20 to-[#625aeb]/10 rounded-full blur-3xl" />

              {/* Image Container */}
              <div className="relative bg-gradient-to-br from-white to-purple-50/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 shadow-2xl">
                <img
                  src="https://services.hashxinnovations.com/logo/HASHXAIGRIL%20(2).png"
                  alt="Why Choose Lumora HRM"
                  className="w-full h-auto"
                />

                {/* Floating Badge */}
                <motion.div
                  animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-6 -right-6 bg-gradient-to-r from-[#625aeb] to-purple-500 text-white rounded-2xl p-4 shadow-2xl"
                >
                  <div className="text-center">
                    <div className="text-3xl font-bold">500+</div>
                    <div className="text-sm">Organizations</div>
                  </div>
                </motion.div>

                {/* Floating Satisfaction Card */}
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-xl border border-gray-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Satisfaction</div>
                      <div className="text-lg font-bold text-gray-900">98%</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#625aeb]/10 rounded-full mb-6">
              <span className="text-sm font-medium text-[#625aeb]">
                Why Lumora HRM
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-[#625aeb] bg-clip-text text-transparent">
                Why Organizations Choose Lumora HRM
              </span>
            </h2>

            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Lumora HRM stands out as the preferred HR management solution for forward-thinking
              organizations across diverse industries and geographies.
            </p>

            {/* Reasons */}
            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200 hover:border-[#625aeb]/30 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#625aeb] to-purple-500 flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                    <reason.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-[#625aeb] transition-colors">
                      {reason.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Info Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 bg-gradient-to-r from-[#625aeb]/10 to-purple-100/50 rounded-xl p-6 border border-[#625aeb]/20"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Future-Ready Platform
              </h3>
              <p className="text-gray-600 leading-relaxed">
                With continuous updates and feature enhancements, Lumora HRM evolves with your
                organization's needs, ensuring you always have access to the latest HR technology.
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
