"use client"

import { useEffect, useRef } from "react"

interface BlurBackgroundProps {
  className?: string
}

export default function BlurBackground({ className = "" }: BlurBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = window.innerWidth
    let height = window.innerHeight

    const resizeCanvas = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()

    // Create gradient blobs
    const blobs = Array.from({ length: 5 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 300 + 100,
      dx: (Math.random() - 0.5) * 0.7,
      dy: (Math.random() - 0.5) * 0.7,
      hue: Math.random() * 20 + 30, // Orange/amber hues (30-50)
      opacity: Math.random() * 0.3 + 0.1,
    }))

    const animate = () => {
      // Clear canvas with a very slight background color
      ctx.fillStyle = "rgba(0, 0, 0, 0.01)"
      ctx.fillRect(0, 0, width, height)

      // Draw and update blobs
      blobs.forEach((blob) => {
        // Move blob
        blob.x += blob.dx
        blob.y += blob.dy

        // Bounce off edges
        if (blob.x < -blob.radius || blob.x > width + blob.radius) blob.dx *= -1
        if (blob.y < -blob.radius || blob.y > height + blob.radius) blob.dy *= -1

        // Draw gradient blob
        const gradient = ctx.createRadialGradient(blob.x, blob.y, 0, blob.x, blob.y, blob.radius)

        gradient.addColorStop(0, `hsla(${blob.hue}, 100%, 70%, ${blob.opacity})`)
        gradient.addColorStop(1, `hsla(${blob.hue}, 100%, 70%, 0)`)

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <div className={`fixed inset-0 -z-10 overflow-hidden ${className}`}>
      <canvas ref={canvasRef} className="w-full h-full opacity-50" />
      <div className="absolute inset-0 backdrop-blur-[100px]" />
    </div>
  )
}
