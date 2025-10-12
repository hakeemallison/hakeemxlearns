"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Mail } from "lucide-react"

export function CTA() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="relative backdrop-blur-xl bg-gradient-to-br from-card to-secondary border border-border rounded-[2.5rem] p-12 md:p-16 overflow-hidden shadow-2xl">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/3 rounded-full blur-3xl" />

          <div className="relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-balance leading-relaxed">
              Join thousands of innovators building the future with our platform
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="group rounded-2xl px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/30"
              >
                <span className="flex items-center gap-2">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="rounded-2xl px-8 py-6 text-lg font-semibold backdrop-blur-sm bg-background/50 border-border transition-all duration-300 hover:bg-background hover:scale-105 hover:border-white/30"
              >
                <span className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Contact Sales
                </span>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 pt-8 border-t border-border/50">
              <p className="text-sm text-muted-foreground mb-4">Trusted by industry leaders</p>
              <div className="flex flex-wrap justify-center gap-8 opacity-50">
                {["Company A", "Company B", "Company C", "Company D"].map((company, index) => (
                  <div
                    key={index}
                    className="text-lg font-semibold transition-all duration-300 hover:opacity-100 hover:scale-110"
                  >
                    {company}
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
