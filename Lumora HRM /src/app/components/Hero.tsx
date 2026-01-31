import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Shield, Zap } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#625aeb]/5 via-transparent to-[#8b84ff]/5"></div>
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#625aeb]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8b84ff]/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#625aeb]/10 border border-[#625aeb]/20 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-[#625aeb]" />
              <span className="text-sm text-[#625aeb]">Next-Generation HR Platform</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Lumora HRM
            </h1>
            
            <p className="text-xl lg:text-2xl text-[#625aeb] mb-6">
              A Smart, Secure & Scalable Human Resource Management Solution
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Lumora HRM is an all-in-one, cloud-ready Human Resource Management solution modernizing HR operations for Large Enterprises, SMEs, and Public Sector organizations with automation, compliance, and workforce intelligence.
            </p>

            <div className="flex items-center gap-6 mb-10">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-[#625aeb]/10 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-[#625aeb]" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Simplify</div>
                  <div className="font-semibold text-gray-900 dark:text-white">People Management</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-[#625aeb]/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-[#625aeb]" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Enable</div>
                  <div className="font-semibold text-gray-900 dark:text-white">Digital HR</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group px-8 py-4 bg-gradient-to-r from-[#625aeb] to-[#8b84ff] text-white rounded-xl hover:shadow-2xl hover:shadow-[#625aeb]/30 transition-all flex items-center justify-center gap-2">
                Start Your Digital HR Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-800 rounded-xl hover:border-[#625aeb] transition-all">
                Book a Demo
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 mt-10 pt-10 border-t border-gray-200 dark:border-gray-800">
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">500+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Organizations</div>
              </div>
              <div className="w-px h-10 bg-gray-200 dark:bg-gray-800"></div>
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">50K+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Active Users</div>
              </div>
              <div className="w-px h-10 bg-gray-200 dark:bg-gray-800"></div>
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">99.9%</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Uptime SLA</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-2xl overflow-hidden">
              {/* Dashboard Header */}
              <div className="bg-gradient-to-r from-[#625aeb] to-[#8b84ff] p-4">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                </div>
                <div className="text-white text-sm">Dashboard Overview</div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6 space-y-4">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/50 dark:to-blue-900/50 rounded-xl">
                    <div className="text-xs text-blue-600 dark:text-blue-400 mb-1">Total Employees</div>
                    <div className="text-2xl font-bold text-blue-900 dark:text-blue-100">1,247</div>
                    <div className="text-xs text-blue-600 dark:text-blue-400 mt-1">↑ 12% vs last month</div>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/50 dark:to-purple-900/50 rounded-xl">
                    <div className="text-xs text-purple-600 dark:text-purple-400 mb-1">Active Leave Requests</div>
                    <div className="text-2xl font-bold text-purple-900 dark:text-purple-100">34</div>
                    <div className="text-xs text-purple-600 dark:text-purple-400 mt-1">Pending approval</div>
                  </div>
                </div>

                {/* Activity List */}
                <div className="space-y-2">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <div className="flex-1">
                      <div className="text-xs text-gray-900 dark:text-white">New Employee Onboarded</div>
                      <div className="text-xs text-gray-500">2 hours ago</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <div className="flex-1">
                      <div className="text-xs text-gray-900 dark:text-white">Payroll Processed</div>
                      <div className="text-xs text-gray-500">5 hours ago</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                    <div className="flex-1">
                      <div className="text-xs text-gray-900 dark:text-white">Performance Review Completed</div>
                      <div className="text-xs text-gray-500">1 day ago</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-[#625aeb] to-[#8b84ff] rounded-2xl shadow-lg flex items-center justify-center"
            >
              <Sparkles className="w-10 h-10 text-white" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
