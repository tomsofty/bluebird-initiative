import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import Icon from "@/components/ui/icon"

const portfolioItems = [
  {
    src: "https://cdn.poehali.dev/projects/3270de15-aa3c-4cf9-9199-108610462a6b/files/a8bc87f9-d65f-4998-9216-cc5a8ea7affa.jpg",
    title: "Проект 1",
  },
  {
    src: "https://cdn.poehali.dev/projects/3270de15-aa3c-4cf9-9199-108610462a6b/files/826345c9-fdfb-4764-a985-db2ac5f3b588.jpg",
    title: "Проект 2",
  },
  {
    src: "https://cdn.poehali.dev/projects/3270de15-aa3c-4cf9-9199-108610462a6b/files/d039d3ec-a352-44c2-bf07-bd0687b3cc00.jpg",
    title: "Проект 3",
  },
  {
    src: "https://cdn.poehali.dev/projects/3270de15-aa3c-4cf9-9199-108610462a6b/files/01b13a85-4d05-462f-91db-1655a7f4310a.jpg",
    title: "Проект 4",
  },
  {
    src: "https://cdn.poehali.dev/projects/3270de15-aa3c-4cf9-9199-108610462a6b/files/c5ee8c83-cec0-4179-a164-6cf3b8f831b6.jpg",
    title: "Проект 5",
  },
  {
    src: "https://cdn.poehali.dev/projects/3270de15-aa3c-4cf9-9199-108610462a6b/files/3392db4b-2a0f-4aac-b4ad-65597919e796.jpg",
    title: "Проект 6",
  },
]

export default function Portfolio() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-background px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <motion.button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          data-clickable
        >
          <Icon name="ArrowLeft" size={18} />
          Назад
        </motion.button>

        <motion.h1
          className="text-5xl md:text-7xl font-serif text-foreground mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Портфолио
        </motion.h1>

        <motion.p
          className="text-muted-foreground text-lg mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Избранные работы
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, i) => (
            <motion.div
              key={i}
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.08 }}
              whileHover={{ scale: 1.02 }}
              data-clickable
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-end p-5">
                <span className="text-white font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  {item.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
