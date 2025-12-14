import React from 'react';

const LoadingState = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white/20 backdrop-blur-md p-6 rounded-[20px] border border-white/30 shadow-2xl flex flex-col items-center">
        {/* Simple CSS Spinner */}
        <div className="w-10 h-10 border-4 border-white/30 border-t-blue-500 rounded-full animate-spin mb-3"></div>
        <p className="text-white font-bold tracking-wide">Processing...</p>
      </div>
    </div>
  );
};

export default LoadingState;
