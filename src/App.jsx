import React from "react";
import Sidebar from "./components/Sidebar";
import Markets from "./components/Markets";

function App() {
  return (
    <div className="flex bg-gray-100 h-screen">
      <div className="w-64 bg-white shadow-md fixed h-full">
        <Sidebar />
      </div>
      <div className="flex-1 ml-64 p-6 overflow-auto">
        <Markets />
      </div>
    </div>
  );
}

export default App;
