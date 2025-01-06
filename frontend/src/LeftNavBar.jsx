import React from "react";

function LeftNavBar() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gradient-to-b from-blue-500 to-indigo-700 text-white flex flex-col items-center py-10">
        {/* Logo */}
        <div className="text-3xl font-bold mb-8">French E-Learning</div>

        {/* Navigation Links */}
        <nav className="flex flex-col space-y-4 w-full text-center">
          <a
            href="#"
            className="py-2 px-4 rounded-md hover:bg-indigo-600 transition"
          >
            Home
          </a>
          <a
            href="#"
            className="py-2 px-4 rounded-md hover:bg-indigo-600 transition"
          >
            Lessons
          </a>
          <a
            href="#"
            className="py-2 px-4 rounded-md hover:bg-indigo-600 transition"
          >
            Quizzes
          </a>
          <a
            href="#"
            className="py-2 px-4 rounded-md hover:bg-indigo-600 transition"
          >
            Progress
          </a>
          <a
            href="#"
            className="py-2 px-4 rounded-md hover:bg-indigo-600 transition"
          >
            Settings
          </a>
        </nav>

        {/* Footer */}
        <div className="mt-auto text-sm opacity-75">© 2025 FrenchE</div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-10">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to French E-Learning</h1>
        <p className="mt-4 text-gray-600">
          Select a lesson from the left menu to get started!
        </p>
      </div>
    </div>
  );
}

export default LeftNavBar;
