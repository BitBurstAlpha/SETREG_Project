import React from "react";

export default function Sidebar() {
    return (
      <aside className="w-64 bg-white shadow-lg h-screen p-4">
        <h1 className="text-2xl font-bold text-green-600">SETReg</h1>
        <nav className="mt-6">
          <ul className="space-y-4">
            <li><a href="/home" className="text-gray-700 hover:text-green-600">Home</a></li>
            <li><a href="/projects" className="text-gray-700 hover:text-green-600">Projects</a></li>
            <li><a href="/profile" className="text-gray-700 hover:text-green-600">Profile</a></li>
          </ul>
        </nav>
        <button className="absolute bottom-6 left-4 bg-green-500 text-white py-2 px-6 rounded">
          Log Out
        </button>
      </aside>
    );
  }
  