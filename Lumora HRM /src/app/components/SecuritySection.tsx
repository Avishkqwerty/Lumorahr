import { motion } from 'motion/react';
import { Shield, Lock, Cloud, Server, Database, RefreshCw } from 'lucide-react';

export function SecuritySection() {
  const securityFeatures = [
    {
      icon: Shield,
      title: 'Role-Based Access Control',
      description: 'Granular permission management ensuring users only access data they need.',
    },
    {
      icon: Lock,
      title: 'Enterprise-Grade Encryption',
      description: 'Data encrypted at rest and in transit using industry-standard protocols.',
    },
    {
      icon: Cloud,
      title: 'Cloud & On-Premise Deployment',
      description: 'Flexible deployment options to match your infrastructure requirements.',
    },
    {
      icon: Server,
      title: 'Scalable Architecture',
      description: 'Built to scale from hundreds to thousands of employees effortlessly.',
    },
    {
      icon: Database,
      title: 'Data Sovereignty',
      description: 'Full control over data location and compliance with regional regulations.',
    },
    {
      icon: RefreshCw,
      title: 'Automated Backups',
      description: 'Regular automated backups with disaster recovery capabilities.',
    },
  ];

  return (
    <section
      id="security"
      className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-[#625aeb]/90 to-slate-900 text-white relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <span className="text-sm font-medium">Security & Deployment</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Enterprise-Grade Security & Flexible Deployment
            </h2>

            <p className="text-lg text-white/80 mb-10 leading-relaxed">
              Your data security is our top priority. Lumora HRM is built with enterprise-grade
              security features and offers flexible deployment options to meet your organization's
              specific requirements.
            </p>

            {/* Security Features */}
            <div className="grid sm:grid-cols-2 gap-6">
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-white/70 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Compliance Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20"
            >
              <h3 className="text-xl font-bold mb-3">Compliance Ready</h3>
              <p className="text-white/80 leading-relaxed">
                Lumora HRM is designed to comply with GDPR, local labor laws, and industry-specific
                regulations, ensuring your organization stays compliant at all times.
              </p>
            </motion.div>
          </motion.div>

          {/* Right - AI Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl blur-2xl" />

              {/* Image Container */}
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <img
                  src="https://services.hashxinnovations.com/logo/HASHXAIGRIL%20(1).png"
                  alt="Lumora HRM Security AI"
                  className="w-full h-auto"
                />
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                    <Shield className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Security Level</div>
                    <div className="text-xl font-bold text-gray-900">Enterprise</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
