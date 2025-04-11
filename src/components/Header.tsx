import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, LogOut, Home } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header = () => {
  const navigate = useNavigate();
  const { state } = useCart();
  const cartItemCount = state.items.reduce((acc, item) => acc + item.quantity, 0);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link 
            to="/" 
            className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            FakeStore
          </Link>
          <nav className="flex items-center space-x-6">
            <Link
              to="/"
              className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors px-3 py-2 rounded-lg hover:bg-gray-50"
            >
              <Home className="h-5 w-5" />
              <span className="hidden sm:inline">Home</span>
            </Link>
            <Link
              to="/cart"
              className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors px-3 py-2 rounded-lg hover:bg-gray-50 relative"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="hidden sm:inline">Cart</span>
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-medium rounded-full h-5 w-5 flex items-center justify-center animate-in fade-in zoom-in">
                  {cartItemCount}
                </span>
              )}
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors px-3 py-2 rounded-lg hover:bg-gray-50"
            >
              <LogOut className="h-5 w-5" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;