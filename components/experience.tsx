"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Building, ExternalLink, Briefcase } from "lucide-react"

export default function Experience() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const slideIn = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  }

  const experiences = [
    {
        id: 1,
        company: "SKsoft",
        position: "Senior Software Engineer",
        period: "Jul 2021 – Present",
        location: "Houston, TX",
        description:
          "Spearheading full-stack development for a secure digital banking platform serving over 5 million users. Worked across backend services and modern frontend interfaces to deliver reliable and compliant financial tools.",
        achievements: [
          "Built a responsive dashboard in React for real-time transaction monitoring",
          "Developed a fraud detection engine using .NET 6 and Kafka, reducing incidents by 60%",
          "Integrated role-based access control (RBAC) with encrypted logs for compliance",
          "Optimized backend services and frontend components to improve app speed by 45%",
        ],
        technologies: ["C#", ".NET 6", "React", "TypeScript", "Kafka", "Redis", "SQL Server", "Docker", "Kubernetes"],
        website: "https://sksoft.com/",
    },
    {
        id: 2,
        company: "Medtronic",
        position: "Full Stack Engineer",
        period: "May 2019 – Jun 2021",
        location: "Fridley, MN",
        description:
          "Contributed to the design and development of a full-featured healthcare platform supporting patient management, scheduling, and secure messaging. Handled both frontend and backend tasks, ensuring scalability and HIPAA-compliant architecture.",
        achievements: [
          "Developed modular frontend components in Angular to streamline clinical workflows",
          "Built secure REST APIs using ASP.NET Core for patient records and appointment systems",
          "Integrated EHR and telehealth services, reducing overhead by 60%",
          "Improved backend performance and database query speed by implementing indexing and async operations",
        ],
        technologies: ["ASP.NET Core", "Angular", "SQL Server", "Entity Framework", "Docker", "Azure", "Jest"],
        website: "https://www.medtronic.com/",
    },
    {
        id: 3,
        company: "B2B SaaS Platform",
        position: "Square",
        period: "2017 – 2019",
        location: "Remote",
        description: "Contributed to the design and development of a scalable B2B SaaS platform, focusing on high performance, flexibility, and seamless integration with enterprise systems.",
        achievements: [
            "Developed and optimized frontend components using React for a smooth user experience",
            "Built secure, scalable backend APIs with Node.js and GraphQL for efficient data fetching",
            "Implemented caching with Redis and optimized PostgreSQL queries, improving system performance by 40%",
            "Deployed platform on AWS with Docker and Kubernetes, ensuring high availability and scalability",
            "Streamlined CI/CD pipelines with Jenkins, improving deployment times by 30%",
            "Developed and maintained unit and integration tests using Jest, ensuring robust, bug-free releases",
            "Collaborated closely with cross-functional teams in an Agile environment to meet project deadlines"
        ],
        technologies: ["React", ".NET", "TypeScript", "GraphQL", "AWS", "Docker", "Kubernetes", "PostgreSQL", "Redis", "Jest"],
        website: "https://squareup.com/"
    },
    {
        id: 4,
        company: "FinTech Solutions",
        position: ".NET Developer",
        period: "Jan 2020 – Dec 2022",
        location: "Remote",
        description: "Contributed to the development of a fintech platform, focusing on secure financial transactions, user authentication, and data processing. Worked on both backend and frontend components to ensure high performance, scalability, and compliance with industry standards.",
        achievements: [
          "Developed secure and scalable REST APIs using ASP.NET Core for financial transactions and user management",
          "Optimized payment processing systems, reducing transaction time by 25%",
          "Implemented role-based access control (RBAC) and two-factor authentication (2FA) for enhanced security",
          "Built real-time notifications for transaction updates using SignalR, improving user engagement",
          "Improved backend performance by refactoring code and utilizing asynchronous operations for data processing",
          "Designed and maintained a PostgreSQL database for financial data, ensuring high availability and consistency",
          "Worked with cross-functional teams in Agile sprints to deliver features on time while adhering to security and compliance standards"
        ],
        technologies: ["ASP.NET Core", "SignalR", "PostgreSQL", "Docker", "Azure", "Jest", "C#"],
        website: "https://www.lendingclub.com/"
      }
  ]

  return (
    <section id="experience" className="py-20 bg-background/70 backdrop-blur-md">
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
            Career
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="relative  md:ml-12">
          {/* Timeline line - make it go behind the badges */}
          <div className="absolute left-0 md:left-4 top-0 h-full w-0.5 bg-primary/60 rounded-full z-0"></div>
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeIn}
              className="mb-12 last:mb-0 relative"
            >
              {/* Timeline badge - centered on the timeline */}
              <div className="absolute left-0 md:left-4 top-0 -translate-x-1/2 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center z-10">
                <Briefcase className="h-4 w-4 text-primary" />
              </div>

              {/* Content */}
              <Card className="ml-4 md:ml-20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <Building className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{exp.location}</span>
                  </div>

                  <div className="flex flex-col">
                    <h3 className="text-xl font-bold">{exp.position}</h3>
                    <div className="flex items-center gap-2 mb-4">
                      <h4 className="text-lg font-semibold text-primary">{exp.company}</h4>
                      <a
                        href={exp.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">{exp.description}</p>

                  <div className="space-y-3">
                    <h5 className="font-semibold">Key Achievements:</h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
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
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
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
