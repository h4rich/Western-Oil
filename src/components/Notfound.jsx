import React from "react";

export default function Notfound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-slate-800 to-black text-white px-4">
      <h1 className="text-6xl sm:text-8xl font-extrabold mb-4 tracking-wide">
        404
      </h1>
      <h2 className="text-3xl sm:text-5xl font-semibold mb-2">
        Page Not Found
      </h2>
      <p className="text-lg sm:text-xl text-gray-300 max-w-xl text-center mt-2">
       The resource requested could not be found on this server!
      </p>
     
    </div>
  );
}
