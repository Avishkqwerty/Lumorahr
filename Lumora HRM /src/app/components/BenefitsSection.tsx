import { motion } from 'motion/react';
import { TrendingDown, TrendingUp, Shield, Users, BarChart3, Award } from 'lucide-react';

export function BenefitsSection() {
  const benefits = [
    {
      icon: TrendingDown,
      title: 'Reduced HR Operational Cost',
      metric: '60%',
      description: 'Automate repetitive tasks and reduce manual paperwork',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      icon: TrendingUp,
      title: 'Increased HR Efficiency',
      metric: '85%',
      description: 'Streamline processes and improve team productivity',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Shield,
      title: 'Improved Compliance',
      metric: '100%',
      description: 'Stay compliant with automated regulatory updates',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Users,
      title: 'Higher Employee Engagement',
      metric: '75%',
      description: 'Empower employees with self-service capabilities',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: BarChart3,
      title: 'Data-Driven Decisions',
      metric: '10x',
      description: 'Access real-time analytics and actionable insights',
      color: 'from-[#625aeb] to-purple-500',
    },
    {
      icon: Award,
      title: 'Better Talent Retention',
      metric: '45%',
      description: 'Improve employee experience and reduce turnover',
      color: 'from-yellow-500 to-orange-500',
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#625aeb]/10 rounded-full mb-6">
            <span className="text-sm font-medium text-[#625aeb]">Measurable Outcomes</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-[#625aeb] bg-clip-text text-transparent">
              Transform Your HR Performance
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Real results from organizations that have modernized their HR operations with Lumora HRM
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border border-gray-200 hover:border-[#625aeb]/30 hover:shadow-2xl hover:shadow-[#625aeb]/10 transition-all duration-300"
            >
              {/* Background Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#625aeb]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>

                {/* Metric */}
                <div className={`text-5xl font-bold mb-3 bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent`}>
                  {benefit.metric}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              {/* Decorative Element */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${benefit.color} opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity duration-300`} />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-[#625aeb]/10 to-purple-100/50 rounded-2xl p-10 border border-[#625aeb]/20">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Ready to See These Results in Your Organization?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join hundreds of organizations that have transformed their HR operations with Lumora HRM
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-[#625aeb] to-[#8b7ff4] text-white rounded-xl font-medium shadow-lg shadow-[#625aeb]/30 hover:shadow-xl hover:shadow-[#625aeb]/40 transition-all duration-300">
              Request a Personalized Demo
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
