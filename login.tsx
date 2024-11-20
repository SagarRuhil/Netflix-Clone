import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg')" }}>
      <div className="bg-black bg-opacity-75 p-8 rounded-md w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-white">Sign In</h2>
        <form className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email or phone number"
              className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
              required
            />
          </div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 rounded-md font-semibold hover:bg-red-700 transition duration-300"
          >
            Sign In
          </button>
        </form>
        <div className="mt-4 text-gray-400 text-sm">
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <a href="#" className="hover:underline">
              Need help?
            </a>
          </div>
        </div>
        <div className="mt-6 text-gray-400">
          <p>
            New to Netflix?{" "}
            <a href="#" className="text-white hover:underline">
              Sign up now
            </a>
            .
          </p>
          <p className="mt-4 text-sm">
            This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Learn more
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}