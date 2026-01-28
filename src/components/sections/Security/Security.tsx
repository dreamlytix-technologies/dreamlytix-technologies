"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Database, Cloud, Zap, RefreshCw } from "lucide-react";
import SmoothScroll from "@/components/ui/SmoothScroll";

const Security = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: "Secure Login System",
      description: "Role-based access control with encrypted authentication for admins, teachers, staff, and parents.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Lock,
      title: "Encrypted Data Storage",
      description: "All sensitive student and school data protected with industry-standard encryption protocols.",
      color: "from-cyan-500 to-teal-500",
    },
    {
      icon: Database,
      title: "Regular Backups",
      description: "Automated daily backups ensure your data is always safe and recoverable.",
      color: "from-teal-500 to-green-500",
    },
    {
      icon: Cloud,
      title: "Cloud-Based Hosting",
      description: "Reliable cloud infrastructure with 99.9% uptime guarantee and global accessibility.",
      color: "from-green-500 to-blue-500",
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Optimized code and CDN delivery for lightning-fast load times across all devices.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: RefreshCw,
      title: "Scalable Architecture",
      description: "Built to grow with your school — from 100 to 10,000+ students without performance loss.",
      color: "from-cyan-500 to-teal-500",
    },
  ];

  return (
    <section id="security" className="relative py-16 overflow-hidden bg-gray-900 text-white">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.15) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <SmoothScroll animation="fadeUp">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-gradient-primary text-white text-xs font-semibold rounded-full shadow-lg">🔒 Security & Technology</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Reliable &{" "}
              <span className="gradient-text relative inline-block">
                Secure
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-primary rounded-full" />
              </span>
            </h2>

            <p className="text-gray-300 text-normal leading-relaxed">Enterprise-grade security and infrastructure to keep your school data safe and accessible 24/7.</p>
          </div>
        </SmoothScroll>

        {/* Security Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:bg-white/10 hover:border-blue-400/30 transition-all duration-300"
              >
                {/* Gradient glow on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`} />

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`inline-flex w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <Shield className="w-8 h-8 text-green-400" />
            <div className="text-left">
              <div className="text-sm text-gray-400">Trusted Security</div>
              <div className="text-lg font-bold text-white">99.9% Uptime Guarantee</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Security;
