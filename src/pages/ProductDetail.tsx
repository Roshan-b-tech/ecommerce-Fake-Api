import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ShoppingCart, Star } from "lucide-react"
import { Button } from "../components/ui/button"
import { Product } from "../types"
import { useCart } from "../context/CartContext"
import toast from "react-hot-toast"

const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const { dispatch } = useCart()

  useEffect(() => {
    fetchProduct()
  }, [id])

  const fetchProduct = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`)
      const data = await response.json()
      setProduct(data)
    } catch (error) {
      console.error("Error fetching product:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleAddToCart = () => {
    if (product) {
      dispatch({ type: 'ADD_TO_CART', payload: product });
      toast.success('Added to cart!');
    }
  }

  if (loading) {
    return (
      <div className="flex h-[50vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    )
  }

  if (!product) {
    return (
      <div className="flex h-[50vh] flex-col items-center justify-center gap-4 text-center">
        <h3 className="text-lg font-semibold text-gray-900">Product not found</h3>
        <p className="text-sm text-gray-500">
          The product you're looking for doesn't exist or has been removed.
        </p>
      </div>
    )
  }

  return (
    <div className="container py-8">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-lg border bg-white p-8">
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-contain"
          />
        </div>
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
            <div className="mt-2 flex items-center gap-2">
              <div className="flex items-center">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="ml-1 text-sm font-medium text-gray-900">
                  {product.rating.rate}
                </span>
              </div>
              <span className="text-sm text-gray-500">
                ({product.rating.count} reviews)
              </span>
            </div>
          </div>
          <div>
            <span className="text-3xl font-bold text-primary">
              ${product.price.toFixed(2)}
            </span>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Description</h2>
            <p className="mt-2 text-gray-600">{product.description}</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Category</h2>
            <p className="mt-2 text-gray-600">
              {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
            </p>
          </div>
          <Button size="lg" onClick={handleAddToCart}>
            <ShoppingCart className="mr-2 h-5 w-5" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail