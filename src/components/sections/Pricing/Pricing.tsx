"use client";

import { motion } from "framer-motion";
import { Check, Globe, Monitor, Smartphone, Server, HeadphonesIcon, Shield } from "lucide-react";
import SmoothScroll from "@/components/ui/SmoothScroll";

const Pricing = () => {
  const developmentCosts = [
    { icon: Globe, item: "School Website", cost: "₹25,000", color: "text-blue-600" },
    { icon: Monitor, item: "Admin Panel", cost: "₹45,000", color: "text-cyan-600" },
    { icon: Smartphone, item: "Android Mobile App", cost: "₹40,000", color: "text-teal-600" },
    { icon: Server, item: "Setup & Deployment", cost: "₹10,000", color: "text-green-600" },
  ];

  const maintenanceFeatures = [
    { icon: Server, text: "Server & Hosting Support" },
    { icon: Shield, text: "Security Updates & Bug Fixes" },
    { icon: HeadphonesIcon, text: "Dedicated Technical Support" },
    { icon: Monitor, text: "System Monitoring & Backups" },
    { icon: Check, text: "Minor Enhancements" },
  ];

  return (
    <section id="pricing" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-white" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <SmoothScroll animation="fadeUp">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-gradient-primary text-white text-xs font-semibold rounded-full shadow-lg">💰 Transparent Pricing</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Investment{" "}
              <span className="gradient-text relative inline-block">
                Plans
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-primary rounded-full" />
              </span>
            </h2>

            <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed">
              Clear, honest pricing with no hidden costs. One-time development plus optional annual maintenance.
            </p>
          </div>
        </SmoothScroll>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* One-Time Development Cost */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-white rounded-3xl border-2 border-blue-200 p-8 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            {/* Gradient overlay */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              {/* Header */}
              <div className="mb-8">
                <div className="inline-flex px-4 py-2 bg-gradient-primary text-white text-xs font-semibold rounded-full mb-4">One-Time Investment</div>
                <h3 className="text-4xl font-bold text-gray-900 mb-2">₹1,20,000</h3>
                <p className="text-gray-600">Complete Development & Deployment</p>
              </div>

              {/* Items */}
              <div className="space-y-4 mb-8">
                {developmentCosts.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                          <Icon className={`w-5 h-5 ${item.color}`} />
                        </div>
                        <span className="font-medium text-gray-900">{item.item}</span>
                      </div>
                      <span className="text-lg font-bold text-gray-900">{item.cost}</span>
                    </div>
                  );
                })}
              </div>

              {/* Note */}
              <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold text-blue-600">Note:</span> Cost can be adjusted based on final requirements and customizations.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Annual Maintenance */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 text-white overflow-hidden"
          >
            {/* Decorative circles */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />

            <div className="relative z-10">
              {/* Header */}
              <div className="mb-8">
                <div className="inline-flex px-4 py-2 bg-white/20 text-white text-xs font-semibold rounded-full mb-4 backdrop-blur-sm">Annual Maintenance</div>
                <h3 className="text-4xl font-bold mb-2">₹18,000 - ₹25,000</h3>
                <p className="text-blue-100">Per Year (AMC)</p>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {maintenanceFeatures.map((feature, idx) => {
                  const Icon = feature.icon;
                  return (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mt-0.5">
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-blue-50">{feature.text}</span>
                    </div>
                  );
                })}
              </div>

              {/* CTA */}
              <button
                onClick={() => {
                  const contact = document.getElementById("contact");
                  contact?.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full px-8 py-4 bg-white text-blue-600 rounded-full text-lg font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105"
              >
                Get Started Today
              </button>
            </div>
          </motion.div>
        </div>

        {/* Timeline Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full border-2 border-gray-200 shadow-sm">
            <span className="text-2xl">⏱️</span>
            <span className="text-gray-700">
              <span className="font-semibold">Estimated Timeline:</span> 8–10 Weeks from start to deployment
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
