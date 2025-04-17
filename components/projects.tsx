"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ExternalLink, Github, ChevronDown } from "lucide-react"

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [expandedProject, setExpandedProject] = useState(null)

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const projects = [
    {
      id: 1,
      title: "Axos Banking System",
      shortDescription: "A fully digital bank offering fee-free accounts, high-yield savings, and 24/7 online access.",
      description:
        "A secure and scalable digital banking system offering seamless user experience, real-time transactions, and advanced account management.",
      image: "https://tvjrf8ogpgevtyum.public.blob.vercel-storage.com/New-account/bank-Kp57YQH6OjyDr2LrtM6BTlE0JSL1OI.png",
      tags: ["ASP.NET", "Angular", "PostgreSql", "AWS", "Docker"],
      features: [
        "All-digital banking",
        "No monthly fees or overdraft charges",
        "Competitive interest rates",
        "Strong security",
        "Mobile-first experience"
      ],
      demoLink: "https://www.axosbank.com/",
      githubLink: "#",
      fullDescription:
        "Axos Banking System is a cloud-based banking platform developed using ASP.NET and Angular. It offers core banking features like account creation, fund transfers, loan management, and transaction history. The backend is powered by PostgreSQL and hosted on AWS, with Docker used for containerization and CI/CD pipeline integration. The system includes secure user authentication, role-based access control, and encryption for data privacy. Users benefit from an intuitive mobile-friendly UI, real-time balance updates, and fee-free banking options. The platform also supports high-yield savings and budgeting tools. Designed for performance, reliability, and regulatory compliance in the fintech space."
    },
    {
      id: 2,
      title: "Ally Banking System",
      shortDescription: "A modern online bank offering high-interest savings, zero fees, and smart digital tools for personal finance.",
      description:
        "A reliable, cloud-based banking system designed for secure money management, real-time transactions, and user-centric financial tools.",
      image: "https://tvjrf8ogpgevtyum.public.blob.vercel-storage.com/New-account/bank2-LIT9Z5FAfXDxocOqjwjOuHNr4LjWus.png", 
      tags: ["ASP.NET", "Angular", "PostgreSql", "Azure", "Docker"],
      features: [
        "Zero monthly maintenance fees",
        "High-interest savings and CDs",
        "ATM fee reimbursement",
        "Smart budgeting tools",
        "24/7 digital access and support"
      ],
      demoLink: "https://www.ally.com/",
      githubLink: "#",
      fullDescription:
        "Ally Banking System is a digital-first platform designed to simplify personal finance through seamless online experiences. Built with ASP.NET and Angular, it offers account management, secure transfers, savings tools, and customer support features. Hosted on Microsoft Azure with PostgreSQL for data management, and containerized using Docker for portability. It supports intelligent budgeting features like spending buckets and provides real-time balance tracking. The system is optimized for mobile use and ensures data protection with multi-factor authentication and encryption. Users benefit from fee-free banking, competitive APYs, and broad ATM access. It's a scalable, secure, and customer-focused solution tailored for modern banking needs."
    },
    {
      id: 3,
      title: "Toggl Track Time Tracking System",
      shortDescription: "A time tracking tool for individuals and teams to boost productivity and manage billable hours.",
      description:
        "A cross-platform app offering simple time tracking, smart reports, and seamless team coordination.",
      image: "https://tvjrf8ogpgevtyum.public.blob.vercel-storage.com/New-account/SaaS%20platform-wvDM9XNKoDR0BYDnG9AbDOKwdtNTZR.png", 
      tags: ["React", "ASP.NET", "PostgreSQL", "Docker", "Azure"],
      features: [
        "One-click time tracking",
        "Offline tracking support",
        "Smart activity reports",
        "Tool integrations",
        "Multi-device access"
      ],
      demoLink: "#",
      githubLink: "#",
      fullDescription:
        "Toggl Track is a modern time tracking system built with React and ASP.NET, designed for professionals and remote teams. It offers one-click timers, offline tracking, and accurate activity reporting. The backend runs on PostgreSQL and is hosted on Azure with Docker for containerization. Users can track time across devices and sync data seamlessly. The platform supports integrations with productivity tools like Jira and Google Calendar. Its clean interface and multi-platform support help teams stay focused and efficient. Toggl Track simplifies time management while ensuring transparency and accountability."
    },
    {
      id: 4,
      title: "Crisp Live Chat System",
      shortDescription: "A multichannel messaging platform offering live chat, chatbots, and CRM integration for enhanced customer engagement.",
      description:
        "A real-time communication tool designed to unify customer support across various channels with automation and personalization features.",
      image: "https://tvjrf8ogpgevtyum.public.blob.vercel-storage.com/New-account/SaaS%20platform2-2rsXhDcfJGaGA7qWD0pls6npamuwfV.png", // replace with the correct image if needed
      tags: ["React", "ASP.NET", "PostgreSQL", "Docker", "Azure"],
      features: [
        "Live chat with shared inbox",
        "Multichannel messaging support",
        "Visual chatbot builder",
        "Automated messaging campaigns",
        "Integrated CRM capabilities"
      ],
      demoLink: "#",
      githubLink: "#",
      fullDescription:
        "Crisp Live Chat System is a customer messaging platform developed using React and ASP.NET, with PostgreSQL for data management. Hosted on Azure and containerized with Docker, it ensures scalability and reliability. The system offers real-time live chat with a shared inbox, supports multiple messaging channels including email and social media, and features a visual chatbot builder for automated interactions. Automated messaging campaigns and integrated CRM capabilities enhance customer engagement and support. Designed for businesses seeking to improve customer communication and support efficiency."
    },
    {
      id: 5,
      title: "Public Goods E-commerce Platform",
      shortDescription: "An eco-friendly marketplace offering essential goods through a clean and minimalist shopping experience.",
      description:
        "A direct-to-consumer store focused on sustainable products, simple design, and smart subscriptions.",
      image: "https://tvjrf8ogpgevtyum.public.blob.vercel-storage.com/New-account/ecommerce-dk1MuZznWSmh3EvmT7PJ4dxj0B8TXD.png", // replace if needed
      tags: ["React", "ASP.NET", "PostgreSQL", "Docker", "Azure"],
      features: [
        "Eco-friendly products",
        "Minimalist UI",
        "Membership pricing",
        "Auto-ship options",
        "Sustainable packaging"
      ],
      demoLink: "#",
      githubLink: "#",
      fullDescription:
        "Public Goods is a sustainable e-commerce platform built with React and ASP.NET, using PostgreSQL for secure data handling. Deployed on Azure and containerized with Docker, it supports scalability and performance. The platform focuses on clean design and offers a curated range of everyday essentials. Features include subscription-based auto-shipments, member-exclusive pricing, and environmentally conscious fulfillment. It's optimized for a smooth user experience and supports green commerce with every order."
    },
    {
      id: 6,
      title: "NeedyMeds Assistance Platform",
      shortDescription: "A nonprofit resource connecting individuals to programs that help reduce medication and healthcare costs.",
      description:
        "A centralized platform offering information on patient assistance programs, free clinics, and discount options for medical expenses.",
      image: "https://tvjrf8ogpgevtyum.public.blob.vercel-storage.com/New-account/healthcare1-XtLcjlHSebRgeOxlBIxBZc5BvoctHd.png", // replace with the correct image if needed
      tags: ["React", "ASP.NET", "PostgreSQL", "Docker", "Azure"],
      features: [
        "Patient assistance program listings",
        "Free/low-cost clinic directory",
        "Drug discount card access",
        "Disease-specific resources",
        "Educational materials and webinars"
      ],
      demoLink: "#",
      githubLink: "#",
      fullDescription:
        "NeedyMeds Assistance Platform is a nonprofit initiative developed with React and ASP.NET, utilizing PostgreSQL for data management. Hosted on Azure and containerized with Docker, it ensures scalability and reliability. The platform provides comprehensive information on programs that assist individuals in affording medications and healthcare services. Features include a searchable database of patient assistance programs, a directory of free and low-cost clinics, access to a drug discount card accepted at numerous pharmacies, and educational resources to empower users in managing their healthcare expenses."
    },
    {
      id: 7,
      title: "FreeClinics Assistance Platform",
      shortDescription: "A nonprofit network offering free basic medical, dental, and specialty care to uninsured and underserved individuals.",
      description:
        "A community-driven healthcare platform providing accessible services through volunteer efforts and local partnerships.",
      image: "https://tvjrf8ogpgevtyum.public.blob.vercel-storage.com/New-account/healthcare2-iZOBoOHGUiQRK8n7t2ebsIYl7Y2BZs.png", // replace with the correct image if needed
      tags: ["React", "ASP.NET", "PostgreSQL", "Docker", "Azure"],
      features: [
        "Free basic medical care",
        "Urgent dental services",
        "Specialty care coordination",
        "Insurance and Medicaid navigation",
        "Volunteer-powered operations"
      ],
      demoLink: "#",
      githubLink: "#",
      fullDescription:
        "FreeClinics Assistance Platform is a nonprofit initiative developed with React and ASP.NET, utilizing PostgreSQL for data management. Hosted on Azure and containerized with Docker, it ensures scalability and reliability. The platform offers free healthcare services, including basic medical care, urgent dental services, and specialty care coordination, to uninsured and underserved individuals. It also provides assistance with insurance and Medicaid navigation. The operations are powered by dedicated volunteers and supported through individual and corporate donations, emphasizing community involvement and support."
    },
    {
      id: 8,
      title: "Momondo Travel Search Platform",
      shortDescription: "A global travel metasearch engine for comparing flights, hotels, and car rentals across hundreds of sites.",
      description:
        "A free and independent platform offering transparent travel deal comparisons to inspire and assist travelers worldwide.",
      image: "https://tvjrf8ogpgevtyum.public.blob.vercel-storage.com/New-account/travel6-mG69nj9N934zSV0qpEbPWl0d6jDuW8.png", // replace with the correct image if needed
      tags: ["React", "ASP.NET", "PostgreSQL", "Docker", "Azure"],
      features: [
        "Flight, hotel, and car rental search",
        "Price comparison across multiple providers",
        "Flexible date search options",
        "Vacation package deals",
        "User-friendly interface"
      ],
      demoLink: "#",
      githubLink: "#",
      fullDescription:
        "Momondo is a travel fare aggregator and metasearch engine developed with React and ASP.NET, utilizing PostgreSQL for data management. Hosted on Azure and containerized with Docker, it ensures scalability and reliability. The platform allows users to compare prices for flights, hotels, and car rentals from various providers, offering flexible date searches and vacation package deals. Its user-friendly interface and comprehensive search capabilities make it a valuable tool for travelers seeking the best deals."
    },
    {
      id: 9,
      title: "BrainPOP Educational Platform",
      shortDescription: "An animated learning platform offering engaging K–8 content across core subjects through videos, quizzes, and games.",
      description:
        "A multimedia education system designed to make complex topics accessible and fun for students, teachers, and families.",
      image: "https://tvjrf8ogpgevtyum.public.blob.vercel-storage.com/New-account/education4-U5dV9MoHrNi4TPUtBAiq7sPEc9gBMy.png", // replace with the correct image if needed
      tags: ["React", "ASP.NET", "PostgreSQL", "Docker", "Azure"],
      features: [
        "Animated educational videos",
        "Interactive quizzes and games",
        "Curriculum-aligned content",
        "Multilingual support",
        "Teacher and parent resources"
      ],
      demoLink: "#",
      githubLink: "#",
      fullDescription:
        "BrainPOP is an award-winning educational platform developed with React and ASP.NET, utilizing PostgreSQL for data management. Hosted on Azure and containerized with Docker, it ensures scalability and reliability. The platform offers animated videos, interactive quizzes, and games across subjects like science, math, English, and social studies, designed to engage students from kindergarten through 8th grade. It supports multilingual content, including Spanish and French, and provides resources for teachers and parents to enhance the learning experience. BrainPOP is widely used in schools and by homeschoolers to supplement traditional education."
    },
  ]

  return (
    <section id="projects" className="py-20 bg-background/70 backdrop-blur-md">
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
            Portfolio
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeIn}
            >
              <Card
                className={`group h-full cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  expandedProject === project.id ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-background/20 p-6 flex flex-col justify-end">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground text-sm">{project.shortDescription}</p>
                    </div>
                  </div>

                  <AnimatePresence>
                    {expandedProject === project.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="p-6 border-t"
                      >
                        <div className="space-y-4">
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, i) => (
                              <Badge key={i} variant="secondary">
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <div className="space-y-2">
                            <h4 className="font-semibold">Key Features:</h4>
                            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                              {project.features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex gap-4 pt-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={(e) => {
                                e.stopPropagation()
                                window.open(project.githubLink, "_blank")
                              }}
                            >
                              <Github className="h-4 w-4 mr-2" />
                              Code
                            </Button>
                            <Button
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation()
                                window.open(project.demoLink, "_blank")
                              }}
                            >
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Demo
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={(e) => {
                                e.stopPropagation()
                                setSelectedProject(project)
                              }}
                            >
                              Learn More
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="p-4 text-center">
                    <ChevronDown
                      className={`w-6 h-6 mx-auto transition-transform duration-300 ${
                        expandedProject === project.id ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>{selectedProject.title}</DialogTitle>
              <DialogDescription>
                <div className="flex flex-wrap gap-2 mt-2 mb-4">
                  {selectedProject.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <img
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                className="w-full rounded-md object-cover aspect-video"
              />
              <p className="text-muted-foreground">{selectedProject.fullDescription}</p>
              <div className="space-y-4">
                <h4 className="font-semibold">Key Features:</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  {selectedProject.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-end gap-4 mt-4">
                <Button variant="outline" asChild>
                  <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </a>
                </Button>
                <Button asChild>
                  <a href={selectedProject.demoLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  )
}
