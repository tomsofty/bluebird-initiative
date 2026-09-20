import { useCallback, useEffect, useState } from "react"
import { motion } from "framer-motion"
import useEmblaCarousel from "embla-carousel-react"
import Icon from "@/components/ui/icon"

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
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" })
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
  }, [emblaApi, onSelect])

  return (
    <section className="bg-background px-6 py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-8">
          <motion.p
            className="text-muted-foreground text-sm uppercase tracking-widest"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Галерея
          </motion.p>

          <div className="hidden md:flex gap-3">
            <button
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors disabled:opacity-30"
              aria-label="Предыдущее изображение"
              data-clickable
            >
              <Icon name="ArrowLeft" size={18} />
            </button>
            <button
              onClick={scrollNext}
              disabled={!canScrollNext}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors disabled:opacity-30"
              aria-label="Следующее изображение"
              data-clickable
            >
              <Icon name="ArrowRight" size={18} />
            </button>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6 md:gap-8">
            {showcaseImages.map((src, i) => (
              <div
                key={i}
                className="relative flex-[0_0_80%] sm:flex-[0_0_55%] md:flex-[0_0_31%] aspect-square rounded-xl overflow-hidden group"
                data-clickable
              >
                <img
                  src={src}
                  alt={`Изображение ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex md:hidden gap-3 mt-6 justify-center">
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center disabled:opacity-30"
            aria-label="Предыдущее изображение"
            data-clickable
          >
            <Icon name="ArrowLeft" size={18} />
          </button>
          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center disabled:opacity-30"
            aria-label="Следующее изображение"
            data-clickable
          >
            <Icon name="ArrowRight" size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}
