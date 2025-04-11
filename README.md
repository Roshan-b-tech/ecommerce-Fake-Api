# FakeStore E-commerce Application

A modern, responsive e-commerce application built with React, TypeScript, and Tailwind CSS. This application demonstrates a fully-featured shopping experience with product browsing, cart management, and user authentication.

![FakeStore Screenshot](https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&h=400&q=80)

## Features

- 🔐 **User Authentication**

  - Secure login system using JWT tokens
  - Protected routes for authenticated users
  - Persistent sessions using localStorage

- 🛍️ **Product Management**

  - Browse products with dynamic filtering
  - Search functionality
  - Price range filtering
  - Category-based navigation
  - Sort by price and ratings

- 🛒 **Shopping Cart**

  - Add/remove items
  - Update quantities
  - Persistent cart state using Context API
  - Real-time total calculation
  - Checkout process with confirmation

- 💅 **Modern UI/UX**
  - Responsive design for all devices
  - Clean and intuitive interface
  - Loading states and error handling
  - Toast notifications for user feedback
  - Smooth transitions and animations

## Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Type System**: TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **State Management**: React Context API
- **Icons**: Lucide React
- **Notifications**: React Hot Toast
- **API**: FakeStore API

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

```
src/
├── components/        # Reusable UI components
├── context/          # React Context providers
├── pages/            # Route components
├── types/           # TypeScript type definitions
├── App.tsx          # Main application component
└── main.tsx         # Application entry point
```

## API Integration

This application uses the [FakeStore API](https://fakestoreapi.com/) for product data and authentication. Available endpoints:

- `/products` - Get all products
- `/products/categories` - Get product categories
- `/products/category/:categoryName` - Get products by category
- `/auth/login` - User authentication

## Features in Detail

### Authentication Flow

- Users can log in using username/password
- JWT tokens are stored in localStorage
- Protected routes redirect to login if not authenticated

#### Test Credentials

```
Username: johnd
Password: m38rmF$
```

### Product Browsing

- Grid layout with responsive design
- Product cards with image, title, price, and rating
- Quick view of product details
- Advanced filtering and sorting options

### Shopping Cart

- Real-time cart updates
- Quantity adjustment
- Total price calculation
- Checkout process with confirmation

### Responsive Design

- Mobile-first approach
- Breakpoints for various screen sizes
- Optimized images and layouts
- Touch-friendly interactions

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## License

MIT License - feel free to use this project for learning or commercial purposes.
