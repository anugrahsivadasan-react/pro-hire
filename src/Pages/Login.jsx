// json-server --watch db.json --port 3000


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import adminimg from '../assets/slams.png';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    const dummyUser = [
      { email: 'super@example.com', password: '12345', role: 'superadmin' },
      { email: 'sub@example.com', password: '12345', role: 'subadmin' },
    ];

    const foundUser = dummyUser.find(
      (u) => u.email === email && u.password === password
    );

    if (foundUser) {
      if (remember) {
        localStorage.setItem('user', JSON.stringify(foundUser));
      }
      navigate(foundUser.role === 'superadmin' ? '/super-admin' : '/sub-admin');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-r from-pink-500 to-pink-400 rounded-full translate-x-1/3 translate-y-1/3 opacity-50"></div>
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-r from-green-500 to-emerald-400  -translate-x-1/2 -translate-y-1/2 opacity-50 rotate-45"></div>
      <div className="absolute bottom-0 left-0 w-[900px] h-[600px] bg-gradient-to-r from-purple-500 to-indigo-500  translate-x-1/3 translate-y-1/3 opacity-50 rotate-45"></div>

      <div className="bg-white/20 backdrop-blur-lg shadow-lg rounded-2xl flex overflow-hidden w-[1200px] h-[800px] z-10 border border-white/30">
        {/* Left Side Illustration */}
        <div className="w-1/2 bg-gray-50/20 flex items-center justify-center p-8 relative">
          <img
            src={adminimg}
            alt="Illustration"
            className="w-[600px]  relative z-10"
          />
        </div>

        {/* Right Side Form */}
        <div className="w-1/2 p-10 flex flex-col justify-center">
          <h2 className="flex justify-center text-5xl font-bold mb-6 text-pink-400">Welcome</h2>

          {error && (
            <p className="text-red-500 text-sm mb-3">{error}</p>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            {/* Email Input */}
            <div className="relative">
              <MdEmail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-900 text-xl" />
              <input
                type="text"
                placeholder="Username or Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellowBrand outline-none bg-white/60 backdrop-blur-sm"
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <RiLockPasswordLine className="absolute left-3 top-[20px] transform -translate-y-1/2 text-gray-900 text-xl" />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-10 py-2 border rounded-lg focus:ring-2 focus:ring-yellowBrand outline-none bg-white/60 backdrop-blur-sm"
              />
              <div
                className="absolute right-3 top-[20px] transform -translate-y-1/2 cursor-pointer text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>

              <div className="text-right mt-1">
                <a href="#" className="text-sm text-gray-500 hover:text-gray-800">
                  Forgot password?
                </a>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between">
              <label className="flex items-center text-gray-600">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="mr-2"
                />
                Remember Me
              </label>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full bg-pink-400 text-white py-2 rounded-lg hover:bg-pink-500 transition"
            >
              Sign In
            </button>

            {/* Google Login */}
            <button
              type="button"
              className="w-full border flex items-center justify-center gap-2 py-2 rounded-lg hover:bg-gray-50 transition bg-white/60 backdrop-blur-sm"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-5 h-5"
              />
              Login with Google
            </button>

            {/* Sign Up Link */}
            <p className="text-sm text-gray-500 text-center">
              Don’t have an account?{' '}
              <a href="#" className="text-pink-400 hover:underline">
                Sign Up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;