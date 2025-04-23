"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Star, StarHalf } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function Testimonials() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const testimonials = [
    {
      id: 1,
      name: "Liam D.",
      position: "Product Manager at Koonstel",
      content:
        "Omar was a key part of our platform rebuild. His frontend and backend skills helped us launch faster, with cleaner code and better performance. He communicated clearly and always delivered on time.",
      rating: 5,
      image: "https://tvjrf8ogpgevtyum.public.blob.vercel-storage.com/New-account/avatar-client/Askur-RyD2CiwaBCO79gzGqOOjMvyMV5geJn.jpeg",
    },
    {
      id: 2,
      name: "Claire T.",
      position: "Tech Lead at Scaleway",
      content:
        "We hired Omar for a full-stack SaaS project, and he went above and beyond. His work with ASP.NET and Angular improved our speed and stability. He also introduced smart DevOps practices that saved us time.",
      rating: 5,
      image: "https://tvjrf8ogpgevtyum.public.blob.vercel-storage.com/New-account/avatar-client/Khan-pIoSGNi6BZrND70MR7mqLov7f4BpnG.png",
    },
    {
      id: 3,
      name: "Marcus B.",
      position: "Founder at Envelop",
      content:
        "Omar handled the full development of our real-time app using React and WebSockets. The result was fast, stable, and user-friendly. He’s proactive, sharp, and easy to work with",
      rating: 4.5,
      image: "https://tvjrf8ogpgevtyum.public.blob.vercel-storage.com/New-account/avatar-client/photo_2023-09-21_19-33-04-Ftq4PolX2hCXxSsZJFIfjq5mTV3wbf.jpg",
    },
    {
      id: 4,
      name: "Martin R",
      position: "CTO at Matelab Srl",
      content:
        "Omar delivered a secure and scalable dashboard for us using NestJS and Docker. His attention to detail and efficient development style helped us meet a tight deadline with confidence.",
      rating: 5,
      image: "https://tvjrf8ogpgevtyum.public.blob.vercel-storage.com/New-account/avatar-client/photo_2025-04-16_19-29-09-EUE8khNqS6WlUe0XMoEY0S4zkZACBZ.jpg",
    },
  ]

  const renderStars = (rating) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="h-5 w-5 fill-primary text-primary" />)
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="h-5 w-5 fill-primary text-primary" />)
    }

    return <div className="flex">{stars}</div>
  }

  return (
    <section id="testimonials" className="py-20">
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
            Testimonials
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Satisfaction</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          variants={fadeIn}
        >
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 p-2">
                  <Card className="h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden">
                          <img
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground flex-grow mb-4">"{testimonial.content}"</p>
                      <div className="mt-auto">{renderStars(testimonial.rating)}</div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="relative static translate-y-0 mr-2" />
              <CarouselNext className="relative static translate-y-0" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  )
}
