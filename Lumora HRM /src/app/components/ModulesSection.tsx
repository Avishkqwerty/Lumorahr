import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Users,
  Calendar,
  DollarSign,
  Briefcase,
  UserPlus,
  TrendingUp,
  GraduationCap,
  UserCircle,
  FileText,
  BarChart3,
  Video,
  Database,
} from 'lucide-react';
import { ModuleModal } from '@/app/components/ModuleModal';

export function ModulesSection() {
  const [selectedModule, setSelectedModule] = useState(null);

  const modules = [
    {
      icon: Users,
      title: 'Employee Management & HR Administration',
      shortDesc: 'Centralized employee data and organizational structure management.',
      overview: 'Manage your entire workforce with a comprehensive system that handles employee records, organizational hierarchies, and HR administration from a single platform.',
      capabilities: [
        {
          name: 'Employee Database Management',
          description: 'Maintain comprehensive employee profiles with personal, professional, and emergency contact information.',
        },
        {
          name: 'Organization Structure',
          description: 'Build and visualize hierarchical structures with departments, divisions, and reporting relationships.',
        },
        {
          name: 'Role & Position Management',
          description: 'Define job roles, positions, and responsibilities with detailed job descriptions.',
        },
        {
          name: 'Employee Lifecycle Tracking',
          description: 'Track the complete employee journey from hire to retirement with automated workflows.',
        },
      ],
      benefits: [
        'Single source of truth for employee data',
        'Improved organizational visibility',
        'Reduced administrative overhead',
        'Enhanced data accuracy and compliance',
      ],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Calendar,
      title: 'Attendance, Leave & Holiday Management',
      shortDesc: 'Automated time tracking and leave management system.',
      overview: 'Streamline attendance tracking, leave requests, and holiday management with intelligent automation and real-time visibility into workforce availability.',
      capabilities: [
        {
          name: 'Biometric Integration',
          description: 'Connect with biometric devices for accurate time and attendance tracking.',
        },
        {
          name: 'Leave Request Workflow',
          description: 'Enable employees to request leaves with automated approval workflows and balance tracking.',
        },
        {
          name: 'Holiday Calendar Management',
          description: 'Configure public holidays, company events, and location-specific calendars.',
        },
        {
          name: 'Shift Management',
          description: 'Manage multiple shifts, rotations, and flexible working arrangements.',
        },
      ],
      benefits: [
        'Elimination of manual attendance tracking',
        'Real-time leave balance visibility',
        'Reduced time theft and buddy punching',
        'Better workforce planning',
      ],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: DollarSign,
      title: 'Payroll & Payslip Management',
      shortDesc: 'Comprehensive payroll processing with compliance.',
      overview: 'Automate payroll calculations, statutory deductions, and payslip generation while ensuring compliance with local tax regulations and labor laws.',
      capabilities: [
        {
          name: 'Automated Payroll Processing',
          description: 'Calculate salaries, allowances, deductions, and taxes with configurable pay structures.',
        },
        {
          name: 'Statutory Compliance',
          description: 'Automatic calculation of EPF, ETF, and other statutory contributions.',
        },
        {
          name: 'Digital Payslip Distribution',
          description: 'Generate and distribute secure payslips through employee self-service portal.',
        },
        {
          name: 'Bank Integration',
          description: 'Direct salary transfers to employee bank accounts with bulk payment files.',
        },
      ],
      benefits: [
        'Accurate and timely payroll processing',
        'Full statutory compliance',
        'Reduced payroll errors',
        'Enhanced employee satisfaction',
      ],
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      icon: Briefcase,
      title: 'Recruitment & Applicant Tracking System (ATS)',
      shortDesc: 'Streamline hiring from job posting to onboarding.',
      overview: 'Automate and streamline the recruitment lifecycle from vacancy creation to onboarding, ensuring faster hiring, consistent evaluation, and improved recruitment visibility.',
      capabilities: [
        {
          name: 'Job Vacancy Creation & Management',
          description: 'Create and publish job openings with approvals and department workflows.',
        },
        {
          name: 'Candidate Application Tracking',
          description: 'Track candidates across recruitment stages with evaluation notes and communication history.',
        },
        {
          name: 'Multi-Stage Recruitment Workflow',
          description: 'Configure customizable stages including screening, interviews, approvals, and selection.',
        },
        {
          name: 'Centralized Candidate Database',
          description: 'Maintain searchable candidate profiles for future recruitment needs.',
        },
        {
          name: 'Candidate to Employee Conversion',
          description: 'Convert selected candidates into employees with onboarding and access provisioning workflows.',
        },
      ],
      benefits: [
        'Reduced hiring time',
        'Better recruitment visibility',
        'Improved hiring quality',
        'Reduced HR workload',
      ],
      gradient: 'from-[#625aeb] to-purple-500',
    },
    {
      icon: UserPlus,
      title: 'Employee Onboarding & Offboarding',
      shortDesc: 'Structured employee lifecycle transitions.',
      overview: 'Create seamless onboarding and offboarding experiences with automated workflows, document management, and compliance checklists.',
      capabilities: [
        {
          name: 'Digital Onboarding Workflows',
          description: 'Guide new hires through orientation with automated task assignments and checklists.',
        },
        {
          name: 'Document Collection',
          description: 'Collect and verify employee documents digitally with e-signature support.',
        },
        {
          name: 'Asset Provisioning',
          description: 'Track assignment of laptops, access cards, and other company assets.',
        },
        {
          name: 'Exit Management',
          description: 'Manage resignations, clearances, and asset returns with structured workflows.',
        },
      ],
      benefits: [
        'Enhanced new hire experience',
        'Faster time to productivity',
        'Proper knowledge transfer',
        'Risk mitigation during exits',
      ],
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: TrendingUp,
      title: 'Performance Management',
      shortDesc: 'Goal setting, appraisals, and performance tracking.',
      overview: 'Drive employee performance with goal setting, continuous feedback, 360-degree reviews, and data-driven performance evaluations.',
      capabilities: [
        {
          name: 'Goal & KPI Management',
          description: 'Set individual and team goals aligned with organizational objectives.',
        },
        {
          name: 'Continuous Feedback',
          description: 'Enable real-time feedback between managers and employees.',
        },
        {
          name: '360-Degree Reviews',
          description: 'Collect feedback from peers, subordinates, and managers for comprehensive evaluations.',
        },
        {
          name: 'Performance Reports',
          description: 'Generate performance analytics and identify top performers.',
        },
      ],
      benefits: [
        'Aligned employee objectives',
        'Data-driven performance decisions',
        'Improved employee engagement',
        'Identification of training needs',
      ],
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      icon: GraduationCap,
      title: 'Training & Learning Management',
      shortDesc: 'Employee development and skills enhancement.',
      overview: 'Manage training programs, certifications, and employee development plans with integrated learning management capabilities.',
      capabilities: [
        {
          name: 'Training Program Management',
          description: 'Create and schedule internal and external training programs.',
        },
        {
          name: 'Skills Matrix',
          description: 'Track employee skills, certifications, and competency levels.',
        },
        {
          name: 'Learning Paths',
          description: 'Define career development paths with required training milestones.',
        },
        {
          name: 'Training Effectiveness',
          description: 'Measure training ROI with assessments and feedback.',
        },
      ],
      benefits: [
        'Enhanced employee capabilities',
        'Better succession planning',
        'Reduced skill gaps',
        'Improved employee retention',
      ],
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      icon: UserCircle,
      title: 'Employee Self-Service Portal',
      shortDesc: 'Empower employees with self-service access.',
      overview: 'Provide employees with secure access to their personal information, leave balances, payslips, and HR services through an intuitive portal.',
      capabilities: [
        {
          name: 'Personal Information Management',
          description: 'Allow employees to view and update personal details with approval workflows.',
        },
        {
          name: 'Leave Application',
          description: 'Submit leave requests and view leave history and balances.',
        },
        {
          name: 'Payslip Access',
          description: 'Download payslips and view salary history securely.',
        },
        {
          name: 'Service Requests',
          description: 'Submit HR service requests for certificates, reimbursements, and queries.',
        },
      ],
      benefits: [
        'Reduced HR administrative work',
        'Improved employee satisfaction',
        '24/7 access to HR services',
        'Better data accuracy',
      ],
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      icon: FileText,
      title: 'Document, Asset & Contract Management',
      shortDesc: 'Centralized management of HR documents and assets.',
      overview: 'Maintain secure document repositories, track company assets, and manage employment contracts with version control and audit trails.',
      capabilities: [
        {
          name: 'Document Repository',
          description: 'Store and organize employee documents with role-based access control.',
        },
        {
          name: 'Asset Tracking',
          description: 'Track company assets assigned to employees with maintenance schedules.',
        },
        {
          name: 'Contract Management',
          description: 'Manage employment contracts with renewal alerts and e-signature support.',
        },
        {
          name: 'Version Control',
          description: 'Maintain document versions with change history and audit logs.',
        },
      ],
      benefits: [
        'Paperless HR operations',
        'Better asset utilization',
        'Contract compliance',
        'Easy document retrieval',
      ],
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      icon: BarChart3,
      title: 'Compliance & Workforce Analytics',
      shortDesc: 'Data-driven insights and regulatory compliance.',
      overview: 'Leverage powerful analytics and reporting tools to gain workforce insights while ensuring compliance with labor laws and regulations.',
      capabilities: [
        {
          name: 'Regulatory Compliance',
          description: 'Built-in compliance with labor laws, data protection, and industry regulations.',
        },
        {
          name: 'HR Analytics Dashboard',
          description: 'Real-time dashboards for headcount, turnover, attendance, and performance metrics.',
        },
        {
          name: 'Custom Reports',
          description: 'Create custom reports with drag-and-drop report builder.',
        },
        {
          name: 'Audit Trails',
          description: 'Comprehensive audit logs for all system activities and data changes.',
        },
      ],
      benefits: [
        'Informed decision making',
        'Proactive compliance management',
        'Risk mitigation',
        'Strategic workforce planning',
      ],
      gradient: 'from-violet-500 to-purple-500',
    },
    {
      icon: Video,
      title: 'Meetings & Internal HR Management',
      shortDesc: 'Collaboration and internal HR processes.',
      overview: 'Facilitate internal meetings, team collaboration, and HR administrative tasks with integrated scheduling and communication tools.',
      capabilities: [
        {
          name: 'Meeting Scheduling',
          description: 'Schedule and manage HR meetings with calendar integration.',
        },
        {
          name: 'Agenda & Minutes',
          description: 'Create meeting agendas and capture minutes with action item tracking.',
        },
        {
          name: 'Internal Announcements',
          description: 'Broadcast company announcements and policy updates.',
        },
        {
          name: 'HR Task Management',
          description: 'Track HR team tasks and workflows with priority management.',
        },
      ],
      benefits: [
        'Better HR team coordination',
        'Improved internal communication',
        'Structured meeting management',
        'Transparent decision tracking',
      ],
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Database,
      title: 'Media Library & Cloud Storage',
      shortDesc: 'Secure cloud storage for HR media and files.',
      overview: 'Store and manage HR-related media files, photos, videos, and documents in a secure cloud environment with easy access and sharing.',
      capabilities: [
        {
          name: 'Cloud File Storage',
          description: 'Upload and organize files in folders with unlimited storage capacity.',
        },
        {
          name: 'Media Management',
          description: 'Store employee photos, training videos, and company events media.',
        },
        {
          name: 'Secure Sharing',
          description: 'Share files securely with role-based permissions and expiry links.',
        },
        {
          name: 'Version History',
          description: 'Track file versions and restore previous versions when needed.',
        },
      ],
      benefits: [
        'Centralized media repository',
        'Secure cloud access',
        'Easy collaboration',
        'Automated backups',
      ],
      gradient: 'from-slate-500 to-gray-600',
    },
  ];

  return (
    <>
      <section id="modules" className="py-20 lg:py-32 bg-slate-50">
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
              <span className="text-sm font-medium text-[#625aeb]">Complete HR Solution</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-[#625aeb] bg-clip-text text-transparent">
                Powerful Modules for Complete HR Management
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive suite of integrated HR modules designed to streamline every aspect of your HR operations
            </p>
          </motion.div>

          {/* Module Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onClick={() => setSelectedModule(module)}
                className="group relative bg-white rounded-xl p-6 border border-gray-200 hover:border-[#625aeb]/30 hover:shadow-xl hover:shadow-[#625aeb]/10 transition-all duration-300 cursor-pointer"
              >
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#625aeb]/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${module.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <module.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#625aeb] transition-colors">
                    {module.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{module.shortDesc}</p>
                  <div className="mt-4 text-[#625aeb] text-sm font-medium group-hover:underline">
                    Learn more →
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Module Modal */}
      <AnimatePresence>
        {selectedModule && (
          <ModuleModal module={selectedModule} onClose={() => setSelectedModule(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
