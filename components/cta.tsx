"use client"

import { motion } from "framer-motion"
import { ArrowRight, Bell } from "lucide-react"

export function CTA() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-[2.5rem] p-12 md:p-16 overflow-hidden shadow-2xl">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/3 rounded-full blur-3xl" />

          <div className="relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance text-white">
              Start Learning Today
            </h2>
            <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto text-balance leading-relaxed">
              Join the community and level up your systems design skills with expert insights from a solutions architect
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group rounded-2xl px-8 py-6 text-lg font-semibold bg-white text-black transition-all duration-300 hover:bg-white/90 hover:shadow-lg hover:shadow-white/30"
              >
                <span className="flex items-center gap-2">
                  Get Started
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-2xl px-8 py-6 text-lg font-semibold backdrop-blur-xl bg-white/10 border border-white/20 text-white transition-all duration-300 hover:bg-white/20"
              >
                <span className="flex items-center gap-2">
                  <Bell className="w-5 h-5" />
                  Subscribe for Updates
                </span>
              </motion.button>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-sm text-white/40 mb-4">Topics covered</p>
              <div className="flex flex-wrap justify-center gap-8 opacity-50">
                {["Microservices", "Cloud Architecture", "Data Systems", "Scalability"].map((topic, index) => (
                  <div
                    key={index}
                    className="text-lg font-semibold text-white transition-all duration-300 hover:opacity-100 hover:scale-110"
                  >
                    {topic}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
