const GetStartBtn = () => {
  return (
    <div className="flex items-center gap-4">
      <button className="text-gray-700 font-medium hover:text-pink-600 transition-colors">
        Sign In
      </button>

      <button className="bg-[#e0227f] hover:bg-[#c8196e] text-white px-6 py-2 rounded-full font-medium transition-colors">
        Sign Up
      </button>
    </div>
  );
};

export default GetStartBtn;
