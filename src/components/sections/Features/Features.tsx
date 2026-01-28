"use client";

import { motion } from "framer-motion";
import { Globe, Monitor, Smartphone, BookOpen, CreditCard, BarChart3, Bell, Calendar, FileText } from "lucide-react";
import SmoothScroll from "@/components/ui/SmoothScroll";

const Features = () => {
  const featureSections = [
    {
      title: "Website",
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
      features: [
        { icon: Globe, text: "Responsive design (Mobile/Tablet/Desktop)" },
        { icon: FileText, text: "About School, Vision & Mission pages" },
        { icon: BookOpen, text: "Courses/Classes information" },
        { icon: Calendar, text: "Photo & Video Gallery" },
        { icon: Bell, text: "News, Events & Announcements" },
        { icon: FileText, text: "Online Admission Enquiry Form" },
      ],
    },
    {
      title: "Admin Panel",
      icon: Monitor,
      color: "from-cyan-500 to-teal-500",
      features: [
        { icon: BookOpen, text: "Student Management (Admission to Alumni)" },
        { icon: Monitor, text: "Teacher & Staff Management" },
        { icon: Calendar, text: "Attendance Management" },
        { icon: CreditCard, text: "Fee Management & Payment Tracking" },
        { icon: BarChart3, text: "Exam & Result Management" },
        { icon: Bell, text: "Notice & Announcement System" },
      ],
    },
    {
      title: "Mobile App",
      icon: Smartphone,
      color: "from-teal-500 to-green-500",
      features: [
        { icon: BookOpen, text: "Student Attendance & Results" },
        { icon: CreditCard, text: "Fee Status & Payment History" },
        { icon: Bell, text: "School Notices & Circulars" },
        { icon: Monitor, text: "Teacher: Mark Attendance & Upload Marks" },
        { icon: FileText, text: "Direct Parent-Teacher Communication" },
        { icon: BarChart3, text: "Real-time Notifications" },
      ],
    },
  ];

  return (
    <section id="features" className="relative py-24 overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <SmoothScroll animation="fadeUp">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-linear-to-r from-blue-600 to-cyan-600 text-white text-xs font-medium rounded-full shadow-lg inline-flex items-center gap-2">
                🌟 Platform Features
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Complete{" "}
              <span className="gradient-text relative inline-block">
                Ecosystem
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-primary rounded-full" />
              </span>
            </h2>

            <p className="text-gray-600 text-normal leading-relaxed">Everything your school needs in one integrated platform — website, admin panel, and mobile apps.</p>
          </div>
        </SmoothScroll>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {featureSections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="group relative bg-white rounded-3xl border-2 border-gray-100 p-8 hover:border-blue-200 hover:shadow-2xl transition-all duration-300"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${section.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity`} />

                {/* Icon */}
                <div className="relative z-10 mb-6">
                  <div
                    className={`inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br ${section.color} items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="relative z-10 text-2xl font-bold text-gray-900 mb-6">{section.title}</h3>

                {/* Features List */}
                <ul className="relative z-10 space-y-4">
                  {section.features.map((feature, idx) => {
                    const FeatureIcon = feature.icon;
                    return (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                          <FeatureIcon className="w-3 h-3 text-green-600" />
                        </div>
                        <span className="text-gray-600 text-sm leading-relaxed">{feature.text}</span>
                      </li>
                    );
                  })}
                </ul>

                {/* Decorative corner */}
                <div className="absolute bottom-6 right-6 flex gap-1">
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${section.color} opacity-50`} />
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${section.color} opacity-30`} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
