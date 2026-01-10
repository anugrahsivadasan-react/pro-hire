import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#ADD2DB] via-white to-[#6FAEC0] text-gray-900 font-sans relative">
      
     

      {/* Welcome Section */}
      <section className="flex flex-col items-start justify-center px-6 md:px-20 py-20 space-y-6 min-h-[80vh]">
        <h2 className="text-4xl md:text-6xl font-black leading-tight text-gray-900 drop-shadow-sm">
          Welcome to <br /> Pro-Hire  <span className="text-[#71AEC1]">{user?.name || 'Ziya Academy'}</span>!
        </h2>
        <p className="text-xl md:text-2xl text-gray-700 font-medium">
          Glad to have you as our employee!!!
        </p>
        <button
          onClick={() => navigate('/home')}
          className="bg-[#7EB7C8] hover:bg-[#71AEC1] text-white px-6 md:px-8 py-3 md:py-4 rounded-xl text-base md:text-lg font-semibold shadow-md transition-all duration-300"
        >
          Generate letters
        </button>
      </section>

      {/* User Info */}
      {user && (
        <div className="absolute bottom-6 left-6 flex items-center space-x-4 bg-white/80 px-4 py-3 rounded-xl shadow-lg border border-violet-200">
          <img
            src={`https://ui-avatars.com/api/?name=${user.name}&background=8b5cf6&color=fff&size=64`}
            alt="User Avatar"
            className="w-12 h-12 rounded-full shadow-sm ring-2 ring-violet-400"
          />
          <div className="text-sm">
            <p className="font-bold text-gray-900">{user.name}</p>
            <p className="text-violet-600 font-medium">Employee</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;