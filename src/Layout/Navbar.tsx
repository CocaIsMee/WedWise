import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Đảm bảo các nút trải đều */}
          <div className="flex justify-evenly items-center w-full">
            <Link to="/" className="flex-1 text-center text-black text-lg font-bold hover:text-yellow-300 transition duration-300">
              Home
            </Link>
            <Link to="/married" className="flex-1 text-center text-black text-lg font-bold hover:text-yellow-300 transition duration-300">
              Getting Married
            </Link>
            <Link to="/quizzes" className="flex-1 text-center text-black text-lg font-bold hover:text-yellow-300 transition duration-300">
              Quizzes
            </Link>
            <Link to="/counseling" className="flex-1 text-center text-black text-lg font-bold hover:text-yellow-300 transition duration-300">
              Counseling
            </Link>
            <Link to="/help" className="flex-1 text-center text-black text-lg font-bold hover:text-yellow-300 transition duration-300">
              Help
            </Link>
            <Link to="/find" className="flex-1 text-center text-black text-lg font-bold hover:text-yellow-300 transition duration-300">
              Find a Therapist
            </Link>
            <Link to="/profile" className="flex-1 text-center text-black text-lg font-bold hover:text-yellow-300 transition duration-300">
              Profile
            </Link>
            <Link to="/settings" className="flex-1 text-center text-black text-lg font-bold hover:text-yellow-300 transition duration-300">
              Settings
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
