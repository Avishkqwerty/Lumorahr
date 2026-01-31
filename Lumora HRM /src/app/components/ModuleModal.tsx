import { motion } from 'motion/react';
import { X, CheckCircle2 } from 'lucide-react';
import { useEffect } from 'react';

interface ModuleModalProps {
  module: {
    icon: any;
    title: string;
    overview: string;
    capabilities: Array<{
      name: string;
      description: string;
    }>;
    benefits: string[];
    gradient: string;
  };
  onClose: () => void;
}

export function ModuleModal({ module, onClose }: ModuleModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-gradient-to-r from-white to-slate-50 border-b border-gray-200 px-8 py-6">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-4">
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${module.gradient} flex items-center justify-center shadow-lg flex-shrink-0`}>
                <module.icon className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                  {module.title}
                </h2>
                <p className="text-gray-600">{module.overview}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="flex-shrink-0 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <X className="w-6 h-6 text-gray-500" />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-140px)] px-8 py-8">
          {/* Capabilities Section */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-gradient-to-b from-[#625aeb] to-purple-500 rounded-full" />
              Core Capabilities
            </h3>
            <div className="space-y-6">
              {module.capabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-6 border border-gray-200 hover:border-[#625aeb]/30 hover:shadow-md transition-all duration-300"
                >
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {capability.name}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {capability.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full" />
              Business Benefits
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {module.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                  className="flex items-start gap-3 bg-white rounded-lg p-4 border border-gray-200 hover:border-emerald-300 hover:shadow-md transition-all duration-300"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="mt-10 bg-gradient-to-br from-[#625aeb]/5 to-purple-100/30 rounded-xl p-8 border border-[#625aeb]/20"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Ready to Transform Your HR Operations?
            </h3>
            <p className="text-gray-600 mb-6">
              Discover how {module.title} can streamline your processes and enhance productivity.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-gradient-to-r from-[#625aeb] to-[#8b7ff4] text-white rounded-lg font-medium shadow-lg shadow-[#625aeb]/30 hover:shadow-xl hover:shadow-[#625aeb]/40 transition-all duration-300">
                Schedule a Demo
              </button>
              <button className="px-6 py-3 bg-white text-gray-700 rounded-lg font-medium border-2 border-gray-200 hover:border-[#625aeb] hover:text-[#625aeb] transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
