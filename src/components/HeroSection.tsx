import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "./ui/button"

const fashionModels = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
    title: "Summer Collection",
    subtitle: "Discover the latest trends",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Elegant Style",
    subtitle: "Express your unique fashion",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Fashion Forward",
    subtitle: "Stay ahead of the curve",
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % fashionModels.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % fashionModels.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + fashionModels.length) % fashionModels.length)
  }

  return (
    <div className="relative h-[80vh] w-full overflow-hidden">
      {fashionModels.map((model, index) => (
        <div
          key={model.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative h-full w-full">
            <img
              src={model.image}
              alt={model.title}
              className="h-full w-full object-cover object-center"
              style={{ objectPosition: "50% 30%" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
              <h2 className="text-5xl font-bold md:text-6xl lg:text-7xl">
                {model.title}
              </h2>
              <p className="mt-6 text-xl md:text-2xl">{model.subtitle}</p>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute inset-x-0 bottom-8 flex justify-center gap-4">
        <Button
          variant="outline"
          size="icon"
          className="h-12 w-12 rounded-full bg-white/80 text-gray-900 backdrop-blur-sm hover:bg-white"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-8 w-8" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="h-12 w-12 rounded-full bg-white/80 text-gray-900 backdrop-blur-sm hover:bg-white"
          onClick={nextSlide}
        >
          <ChevronRight className="h-8 w-8" />
        </Button>
      </div>
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-3">
        {fashionModels.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  )
} 