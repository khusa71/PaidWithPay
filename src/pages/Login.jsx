import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, Lock, Eye, EyeOff, ChevronRight, CheckCircle, 
  Smartphone, AlertCircle
} from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Card, CardContent } from '@/components/ui/card';

const PasswordStrengthIndicator = ({ password }) => {
    const getStrength = () => {
      let strength = 0;
      if (password.length >= 8) strength++;
      if (/[A-Z]/.test(password)) strength++;
      if (/[0-9]/.test(password)) strength++;
      if (/[^A-Za-z0-9]/.test(password)) strength++;
      return strength;
    };
  
    const strength = getStrength();
    const colors = ['bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-green-500'];
    const labels = ['Weak', 'Fair', 'Good', 'Strong'];
  
    return (
      <div className="space-y-2">
        <div className="flex space-x-2">
          {[0, 1, 2, 3].map((index) => (
            <motion.div
              key={index}
              className={`h-1 w-full rounded-full ${
                index < strength ? colors[strength - 1] : 'bg-gray-200'
              }`}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: index < strength ? 1 : 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            />
          ))}
        </div>
        {password && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`text-xs ${
              strength > 0 ? `text-${colors[strength - 1].replace('bg-', '')}` : 'text-gray-400'
            }`}
          >
            {password ? labels[strength - 1] : 'Enter password'}
          </motion.p>
        )}
      </div>
    );
  };
  

  const LoadingSpinner = () => (
    <motion.div
      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    />
  );
  

const SecurityFeature = ({ icon: Icon, text }) => (
  <div className="flex items-center space-x-3 text-gray-600">
    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
      <Icon className="w-4 h-4 text-blue-600" />
    </div>
    <span className="text-sm">{text}</span>
  </div>
);

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);

  // Handler functions remain the same
  const handleSubmit = async (e) => {
    // ... (Keep the same implementation)
  };

  const handleChange = (e) => {
    // ... (Keep the same implementation)
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col justify-center items-center p-6 sm:p-8">
      {/* Header Section */}
      <motion.div 
        className="w-full max-w-md mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center justify-center mb-6">
          <motion.div
            whileHover={{ rotate: 10 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="mr-3"
          >
            <Shield className="w-8 h-8 text-blue-600" />
          </motion.div>
          <span className="text-2xl font-bold text-gray-900">PaidWithPay</span>
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            {step === 1 && "Welcome back"}
            {step === 2 && "Enter your password"}
            {step === 3 && "Verify your identity"}
          </h1>
          <p className="text-gray-600">Securely access your escrow account</p>
        </div>
      </motion.div>

      {/* Main Card */}
      <motion.div 
        className="w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Card className="backdrop-blur-sm border-gray-100">
          <CardContent className="p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <AnimatePresence mode="wait">
                {error && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <Alert variant="destructive" className="flex items-center space-x-2 mb-6">
                      <AlertCircle className="w-4 h-4" />
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  </motion.div>
                )}

                {step === 1 && (
                  <motion.div
                    key="email-step"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-900" htmlFor="email">
                        Email address
                      </label>
                      <div className="relative">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors text-gray-900"
                          placeholder="name@company.com"
                        />
                        {formData.email && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="absolute right-4 top-1/2 -translate-y-1/2"
                          >
                            <CheckCircle className="w-5 h-5 text-green-500" />
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="password-step"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-900" htmlFor="password">
                        Password
                      </label>
                      <div className="relative">
                        <input
                          id="password"
                          name="password"
                          type={showPassword ? 'text' : 'password'}
                          required
                          value={formData.password}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors text-gray-900"
                          placeholder="Enter your password"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        >
                          {showPassword ? (
                            <EyeOff className="w-5 h-5" />
                          ) : (
                            <Eye className="w-5 h-5" />
                          )}
                        </button>
                      </div>
                      <PasswordStrengthIndicator password={formData.password} />
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="2fa-step"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-900" htmlFor="code">
                        Verification Code
                      </label>
                      <div className="grid grid-cols-6 gap-2">
                        {[1, 2, 3, 4, 5, 6].map((_, index) => (
                          <input
                            key={index}
                            type="text"
                            maxLength="1"
                            className="w-full h-12 text-center text-xl border rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                          />
                        ))}
                      </div>
                      <p className="text-sm text-gray-600 mt-2">
                        Enter the 6-digit code sent to your phone
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="space-y-4 pt-2">
                <motion.button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center space-x-2 disabled:opacity-70"
                  disabled={loading}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  {loading ? (
                    <LoadingSpinner />
                  ) : (
                    <>
                      <span>
                        {step === 1 && "Continue"}
                        {step === 2 && "Sign in"}
                        {step === 3 && "Verify"}
                      </span>
                      <ChevronRight className="w-4 h-4" />
                    </>
                  )}
                </motion.button>

                {step > 1 && (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="w-full text-gray-600 hover:text-gray-900 py-2"
                  >
                    Back
                  </button>
                )}
              </div>
            </form>

            <div className="mt-6 pt-6 border-t border-gray-100 text-center">
              <span className="text-gray-600">Don't have an account?</span>
              <button className="ml-2 text-blue-600 hover:text-blue-700 font-medium">
                Sign up
              </button>
            </div>
          </CardContent>
        </Card>

        {/* Security Features */}
        <div className="mt-8 space-y-4 px-4">
          <SecurityFeature 
            icon={Lock}
            text="Bank-grade encryption"
          />
          <SecurityFeature 
            icon={Shield}
            text="Secure escrow protection"
          />
          <SecurityFeature 
            icon={Smartphone}
            text="Two-factor authentication"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;