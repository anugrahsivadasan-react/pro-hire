// json-server --watch db.json --port 3000


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import adminimg from '../assets/slams.png';
// import login from '../assets/loginbg.png';
import bgImage from '../assets/loginbg.jpg';

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
      { email: 'super@example.com', password: '12345', role: 'Ziya' },
      { email: 'sub@example.com', password: '12345', role: 'Ziyaaaa' },
    ];

    const foundUser = dummyUser.find(
      (u) => u.email === email && u.password === password
    );

    if (foundUser) {
      if (remember) {
        localStorage.setItem('user', JSON.stringify(foundUser));
      }
      navigate(foundUser.role === 'Ziya' ? '/dashboard' : '/sub-admin');
    } else {
      setError('Invalid username or password'); 
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden
    "
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',}}>
        

      

      <div className="bg-white/20 backdrop-blur-lg shadow-lg rounded-2xl flex overflow-hidden w-[1200px] h-[700px] z-10 border border-white/80">
       {/* Left Side Illustration */}
<div className="w-1/2 bg-gray-50/30 flex flex-col items-center justify-center ">
  <img
    src={adminimg}
    alt="Illustration"
    className="w-[600px] "
  />
  <p className="text-[20px] text-gray-900  text-center ">
    Empowering Employee Journeys with Precision
  </p>
</div>

        {/* Right Side Form */}
        <div className="w-1/2 p-10 flex flex-col justify-center">
          <h2 className="flex justify-center text-5xl font-bold mb-6 text-[#107594]">Welcome</h2>

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
            <div className='space-y-4 pt-5'>
            <button
              type="submit"
              className="w-full bg-[#107594] text-white py-2 rounded-lg hover:bg-[#0f9ac4] transition"
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
            </div>

            {/* Sign Up Link */}
            <p className="text-sm text-gray-500 text-center">
              Don’t have an account?{' '}
              <a href="#" className="text-[] hover:underline">
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