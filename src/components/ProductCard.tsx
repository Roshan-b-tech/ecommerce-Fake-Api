import { ShoppingCart, Star } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card"
import { Product } from "../types"

interface ProductCardProps {
  product: Product
  onAddToCart: (product: Product) => void
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <Card className="group overflow-hidden">
      <Link to={`/product/${product.id}`}>
        <CardHeader className="p-0">
          <div className="relative aspect-square overflow-hidden">
            <img
              src={product.image}
              alt={product.title}
              className="h-full w-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/5 opacity-0 transition-opacity group-hover:opacity-100" />
          </div>
        </CardHeader>
      </Link>
      <CardContent className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="line-clamp-2 text-lg font-semibold text-gray-900">
            {product.title}
          </h3>
        </Link>
        <div className="mt-2 flex items-center space-x-1">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm text-gray-600">
            {product.rating.rate} ({product.rating.count})
          </span>
        </div>
        <p className="mt-2 text-2xl font-bold text-primary">
          ${product.price.toFixed(2)}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          className="w-full"
          onClick={() => onAddToCart(product)}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
} 