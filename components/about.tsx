"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Lightbulb, Rocket } from "lucide-react"

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-20 bg-background/70 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            About Me
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Who I Am</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeIn}
          >
            <h3 className="text-2xl font-bold mb-4">A Passionate Developer</h3>
            <p className="text-muted-foreground mb-6">
            I live and breathe Angular and .NET – that perfect pairing that powers everything from life-saving healthcare portals to high-stakes trading platforms. There's an art to making these technologies sing together, whether it's tuning NgRx to mirror backend CQRS patterns or optimizing Angular's change detection to work seamlessly with .NET's gRPC streams. My secret? 
            </p>
            <p className="text-muted-foreground mb-6">
            Treating the frontend and backend as one cohesive system rather than separate pieces.
            React and Next.js come into play when they solve specific problems better – like when I dropped Next.js ISR into an Angular enterprise app to boost their marketing site's SEO without disrupting the core product. Or when React's flexibility delivered an internal tool in half the time Angular would've taken. But make no mistake: Angular's structured approach paired with .NET's robustness remains my go-to for mission-critical applications.
            </p>
            <p className="text-muted-foreground">
            What sets me apart is knowing exactly where each framework belongs. I've architected systems where Angular drives the main application with surgical precision, React handles dynamic dashboards with effortless state management, and Next.js delivers buttery-smooth static pages – all powered by the same lean .NET API layer. No trendy framework chasing, just the right tool for each job.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              variants={fadeIn}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Code className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Robust code architecture</h4>
                      <p className="text-muted-foreground">
                      Designs solid, scalable, and modular code structures that support long-term growth and easy maintenance.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              variants={fadeIn}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Lightbulb className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Critical thinker</h4>
                      <p className="text-muted-foreground">
                      Approaches problems logically and analytically, breaking them down to find the most effective and efficient solutions.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              variants={fadeIn}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Rocket className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Performance-oriented development</h4>
                      <p className="text-muted-foreground">
                      Prioritizes speed and optimization, ensuring applications run smoothly even under heavy load or complex use cases.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
