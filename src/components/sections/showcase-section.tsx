import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const showcaseImages = [
  "https://cdn.poehali.dev/projects/3270de15-aa3c-4cf9-9199-108610462a6b/files/d039d3ec-a352-44c2-bf07-bd0687b3cc00.jpg",
  "https://cdn.poehali.dev/projects/3270de15-aa3c-4cf9-9199-108610462a6b/files/01b13a85-4d05-462f-91db-1655a7f4310a.jpg",
  "https://cdn.poehali.dev/projects/3270de15-aa3c-4cf9-9199-108610462a6b/files/8742a1f3-317d-48c0-86fe-58c4b11fc581.jpg",
  "https://cdn.poehali.dev/projects/3270de15-aa3c-4cf9-9199-108610462a6b/files/a8bc87f9-d65f-4998-9216-cc5a8ea7affa.jpg",
  "https://cdn.poehali.dev/projects/3270de15-aa3c-4cf9-9199-108610462a6b/files/826345c9-fdfb-4764-a985-db2ac5f3b588.jpg",
  "https://cdn.poehali.dev/projects/3270de15-aa3c-4cf9-9199-108610462a6b/files/c5ee8c83-cec0-4179-a164-6cf3b8f831b6.jpg",
  "https://cdn.poehali.dev/projects/3270de15-aa3c-4cf9-9199-108610462a6b/files/3392db4b-2a0f-4aac-b4ad-65597919e796.jpg",
  "https://cdn.poehali.dev/projects/3270de15-aa3c-4cf9-9199-108610462a6b/files/5eefa89e-3f93-4218-bbde-3198406a4d59.jpg",
  "https://cdn.poehali.dev/projects/3270de15-aa3c-4cf9-9199-108610462a6b/files/35c00e50-fdde-48ce-bf50-d1505f8f805c.jpg",
]

export function ShowcaseSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [150, -150])
  const y3 = useTransform(scrollYProgress, [0, 1], [80, -80])

  const yValues = [y1, y2, y3, y1, y2, y3, y1, y2, y3]

  return (
    <section ref={containerRef} className="bg-background px-6 py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Галерея
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {showcaseImages.map((src, i) => (
            <motion.div
              key={i}
              className="relative aspect-square rounded-xl overflow-hidden group"
              style={{ y: yValues[i] }}
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              whileInView={{ clipPath: "inset(0 0 0 0)" }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              data-clickable
            >
              <motion.img
                src={src}
                alt={`Изображение ${i + 1}`}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}