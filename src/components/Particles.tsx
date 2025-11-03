import React, { useEffect, useRef } from 'react'

const Particles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
    }> = []

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createParticle = () => {
      // Canvas boyutu yerine window boyutunu kullan - daha güvenilir
      const width = canvas.width || window.innerWidth
      const height = canvas.height || window.innerHeight
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.1
      }
    }

    // Önce canvas boyutunu ayarla
    resizeCanvas()

    // Sonra partikülleri oluştur - canvas boyutu kesinlikle ayarlanmış olacak
    for (let i = 0; i < 50; i++) {
      particles.push(createParticle())
    }

    const getColorBase = () => {
      const isDark = document.documentElement.classList.contains('dark')
      // Dark mode: light particles; Light mode: dark particles
      return isDark ? 255 : 0
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const base = getColorBase()

      particles.forEach((particle, index) => {
        particle.x += particle.vx
        particle.y += particle.vy

        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${base}, ${base}, ${base}, ${particle.opacity})`
        ctx.fill()

        // Draw connections
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - otherParticle.x
            const dy = particle.y - otherParticle.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < 100) {
              ctx.beginPath()
              ctx.moveTo(particle.x, particle.y)
              ctx.lineTo(otherParticle.x, otherParticle.y)
              ctx.strokeStyle = `rgba(${base}, ${base}, ${base}, ${0.1 * (1 - distance / 100)})`
              ctx.lineWidth = 0.5
              ctx.stroke()
            }
          }
        })
      })

      animationId = requestAnimationFrame(animate)
    }

    // Canvas zaten resizeCanvas() ile ayarlandı
    animate()

    // Resize event'inde partikülleri yeniden dağıt
    const handleResize = () => {
      resizeCanvas()
      // Partikülleri yeni canvas boyutuna göre yeniden dağıt
      particles.forEach(particle => {
        particle.x = Math.random() * canvas.width
        particle.y = Math.random() * canvas.height
      })
    }

    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  )
}

export default Particles
