import { motion } from 'motion/react';
import { Building2, Users, Landmark, ArrowRight } from 'lucide-react';

export function IndustrySection() {
  const industries = [
    {
      icon: Building2,
      title: 'Large Enterprises',
      description: 'Comprehensive HR management for complex organizational structures with multi-level hierarchy support.',
      benefits: [
        'Advanced workforce analytics and reporting',
        'Multi-department approval workflows',
        'Scalable architecture for thousands of employees',
        'Integration with existing enterprise systems',
      ],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Users,
      title: 'Small & Medium Enterprises',
      description: 'Agile HR solutions designed for growing businesses with flexible deployment options.',
      benefits: [
        'Quick setup and onboarding',
        'Cost-effective modular pricing',
        'Essential HR automation tools',
        'Cloud-based accessibility',
      ],
      gradient: 'from-[#625aeb] to-purple-500',
    },
    {
      icon: Landmark,
      title: 'Public Sector & Government',
      description: 'Compliant HR management for government institutions with enhanced security and audit trails.',
      benefits: [
        'Full regulatory compliance framework',
        'On-premise deployment options',
        'Advanced security and data protection',
        'Transparent audit and reporting',
      ],
      gradient: 'from-emerald-500 to-teal-500',
    },
  ];

  return (
    <section id="industries" className="py-20 lg:py-32 bg-gradient-to-b from-white to-slate-50">
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
            <span className="text-sm font-medium text-[#625aeb]">Industries We Serve</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-[#625aeb] bg-clip-text text-transparent">
              Tailored Solutions for Every Sector
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Whether you're an enterprise, SME, or public sector organization, Lumora HRM adapts to your unique requirements
          </p>
        </motion.div>

        {/* Industry Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#625aeb]/30 hover:shadow-2xl hover:shadow-[#625aeb]/10 transition-all duration-300"
            >
              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#625aeb]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${industry.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                  <industry.icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{industry.title}</h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">{industry.description}</p>

                {/* Benefits */}
                <ul className="space-y-3 mb-6">
                  {industry.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <ArrowRight className="w-4 h-4 text-[#625aeb] mt-0.5 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <button className="text-[#625aeb] font-medium text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
