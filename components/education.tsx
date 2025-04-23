"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, GraduationCap, Award, BookOpen } from "lucide-react"

export default function Education() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const slideIn = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  }

  const education = [
    {
      id: 1,
      institution: "Medaille University",
      degree: "Master of Science in Computer Science",
      period: "Sep 2013 - May 2016",
      location: "Buffalo, NY ",
      description:
        "Specialized in Artificial Intelligence and Machine Learning with a focus on neural network architectures and distributed systems. Graduated with honors and completed a thesis on optimizing deep learning models for resource-constrained environments.",
      achievements: [
        "Graduated with a 3.92 GPA",
        "Published 2 research papers in top-tier conferences",
        "Teaching Assistant for Advanced Algorithms course",
        "Recipient of the Outstanding Graduate Student Award",
      ],
      courses: [
        "Advanced Machine Learning",
        "Distributed Systems",
        "Computer Vision",
        "Natural Language Processing",
        "High Performance Computing",
      ],
      icon: <GraduationCap className="h-4 w-4 text-primary" />,
    },
    {
      id: 2,
      institution: "Alliance University",
      degree: "",
      period: "Sep 2011 - May 2013",
      location: "Jacksonville, IL",
      description:
        "Completed a comprehensive computer science curriculum with a minor in Mathematics. Participated in multiple hackathons and coding competitions, consistently placing in the top percentiles.",
      achievements: [
        "Dean's List for all semesters",
        "Led the university's competitive programming team",
        "Completed senior project on real-time data processing systems",
        "Internship at Google during junior year",
      ],
      courses: [
        "Data Structures and Algorithms",
        "Operating Systems",
        "Database Management Systems",
        "Computer Networks",
        "Software Engineering",
      ],
      icon: <BookOpen className="h-4 w-4 text-primary" />,
    }
  ]

  return (
    <section id="education" className="py-20">
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
            Education
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="relative md:ml-12">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-4 top-0 h-full w-0.5 bg-primary/60 rounded-full z-0"></div>

          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeIn}
              className="mb-12 last:mb-0 relative"
            >
              {/* Timeline badge */}
              <div className="absolute left-0 md:left-4 -translate-x-1/2 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center z-10">
                {edu.icon}
              </div>

              {/* Content */}
              <Card className="ml-4 md:ml-20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{edu.period}</span>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{edu.location}</span>
                  </div>

                  <div className="flex flex-col">
                    <h3 className="text-xl font-bold">{edu.degree}</h3>
                    <h4 className="text-lg font-semibold text-primary mb-4">{edu.institution}</h4>
                  </div>

                  <p className="text-muted-foreground mb-4">{edu.description}</p>

                  {/* <div className="space-y-3">
                    <h5 className="font-semibold">Achievements & Activities:</h5>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: i * 0.1 + 0.2 }}
                          variants={slideIn}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <span className="text-primary font-bold mt-1">•</span>
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div> */}

                  <div className="mt-4">
                    {/* <h5 className="font-semibold mb-2">Key Courses:</h5> */}
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, i) => (
                        <Badge key={i} variant="secondary">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
