export const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <div className="text-center">
        {/* Simple Logo */}
        <div className="w-12 h-12 mx-auto mb-6 relative">
          <div className="w-full h-full bg-emerald-600 rounded-full flex items-center justify-center">
            <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>

        {/* Brand Name */}
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          DreamAdventures
        </h2>
        
        {/* Simple message */}
        <p className="text-gray-600 text-sm">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;