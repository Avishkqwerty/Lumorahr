import { motion } from 'motion/react';
import { ArrowRight, Calendar, MessageSquare, Rocket } from 'lucide-react';

export function FinalCTA() {
  const ctaOptions = [
    {
      icon: Calendar,
      title: 'Book a Demo',
      description: 'See Lumora HRM in action with a personalized demo',
      buttonText: 'Schedule Demo',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: MessageSquare,
      title: 'Request a Consultation',
      description: 'Discuss your HR needs with our experts',
      buttonText: 'Get Consultation',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Rocket,
      title: 'Start Your Digital HR Journey',
      description: 'Transform your HR operations today',
      buttonText: 'Get Started',
      gradient: 'from-[#625aeb] to-purple-500',
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-[#625aeb] to-slate-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Get Started with Lumora HRM
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Join hundreds of organizations modernizing their HR operations. Choose the best way to begin your journey.
          </p>
        </motion.div>

        {/* CTA Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {ctaOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${option.gradient} flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                <option.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-3">{option.title}</h3>
              <p className="text-white/70 mb-6 leading-relaxed">{option.description}</p>

              {/* Button */}
              <button className={`w-full px-6 py-3 bg-gradient-to-r ${option.gradient} text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-3`}>
                {option.buttonText}
                <ArrowRight className="w-5 h-5" />
              </button>

              {/* Decorative Gradient */}
              <div className={`absolute -bottom-px left-0 right-0 h-1 bg-gradient-to-r ${option.gradient} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-center"
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Questions? We're Here to Help
            </h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Our team of HR technology experts is ready to answer your questions and help you 
              find the perfect solution for your organization.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <a href="mailto:info@lumorahrm.com" className="text-white/90 hover:text-white transition-colors flex items-center gap-2">
                <span className="text-sm font-medium">info@lumorahr.com</span>
              </a>
              <span className="text-white/40">|</span>
              <a href="tel:+94112345678" className="text-white/90 hover:text-white transition-colors flex items-center gap-2">
                <span className="text-sm font-medium">+94 777 99 2969</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
