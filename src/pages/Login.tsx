import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingBag, User, Lock, ArrowRight } from 'lucide-react';
import toast from 'react-hot-toast';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import LoadingTransition from '../components/LoadingTransition';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showTransition, setShowTransition] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) throw new Error('Invalid credentials');

      const data = await response.json();
      localStorage.setItem('token', data.token);
      toast.success('Welcome back!');
      setShowTransition(true);
      
      // Wait for 2 seconds before navigating
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      toast.error('Login failed. Please check your credentials.');
      setIsLoading(false);
    }
  };

  return (
    <>
      {showTransition && <LoadingTransition onComplete={() => {}} />}
      <div className={showTransition ? 'hidden' : 'min-h-screen flex flex-col md:flex-row'}>
        {/* Image Section - Top on mobile, Left on desktop */}
        <div className="order-1 md:order-none w-full md:w-1/2 relative h-[35vh] md:min-h-screen overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/10 z-10" />
          <img
            src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Fashion shopping"
            className="w-full h-full object-cover object-center scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="text-center text-white p-4 md:p-8 bg-black/30 rounded-xl backdrop-blur-sm max-w-xs md:max-w-none">
              <div className="bg-white/10 p-3 rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mx-auto mb-3 md:mb-4">
                <ShoppingBag className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
              <h1 className="text-2xl md:text-4xl font-bold mb-1 md:mb-4">Welcome to FakeStore</h1>
              <p className="text-sm md:text-lg opacity-90">Your one-stop shop for fashion and lifestyle</p>
            </div>
          </div>
        </div>

        {/* Form Section - Bottom on mobile, Right on desktop */}
        <div className="order-2 md:order-none w-full md:w-1/2 flex items-center justify-center p-6 md:p-8 bg-white">
          <Card className="w-full max-w-md border-none shadow-none md:border md:shadow-sm">
            <CardHeader className="space-y-2 text-center">
              <CardTitle className="text-2xl font-bold">Sign in to your account</CardTitle>
              <CardDescription>
                Enter your credentials to access your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                    <input
                      id="username"
                      name="username"
                      type="text"
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <Button
                  type="submit"
                  className="w-full py-6"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent" />
                  ) : (
                    <>
                      Sign in
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
              <div className="mt-6 text-center text-sm text-gray-500">
                <p>Test Credentials:</p>
                <p className="font-mono mt-1">Username: johnd</p>
                <p className="font-mono">Password: m38rmF$</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Login;