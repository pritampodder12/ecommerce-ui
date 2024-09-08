'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { EyeIcon, EyeOffIcon } from 'lucide-react'

export default function LoginPage() {
  const [isHovered, setIsHovered] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <motion.div
        className="relative w-full max-w-md"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <motion.div
          className="absolute inset-0 bg-white opacity-10 rounded-xl"
          initial={false}
          animate={{
            background: isHovered
              ? "linear-gradient(45deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%)"
              : "none",
            left: isHovered ? "150%" : "-50%",
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
          }}
        />
        <Card className="w-full bg-gray-800 text-white border-gray-700">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">Welcome Back</CardTitle>
            <CardDescription className="text-gray-400 text-center">Sign in to your account</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" className="bg-gray-700 border-gray-600 text-white placeholder-gray-400" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 pr-10"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOffIcon className="h-5 w-5 text-gray-400" />
                      ) : (
                        <EyeIcon className="h-5 w-5 text-gray-400" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Sign In</Button>
            <div className="text-sm text-gray-400 text-center">
              Don't have an account?{" "}
              <a href="#" className="text-blue-400 hover:underline">
                Sign up
              </a>
            </div>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  )
}