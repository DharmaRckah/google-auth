const Navbar = () => {
    const handleLogin = () => {
      window.open(`${import.meta.env.VITE_BACKEND_URL}/auth/google`, "_self");
    };
  
    const handleLogout = () => {
      window.open(`${import.meta.env.VITE_BACKEND_URL}/auth/logout`, "_self");
    };
  
    return (
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-blue-600">MERN OAuth</h1>
  
          <div className="space-x-4">
            <button
              onClick={handleLogin}
              className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition-all"
            >
              Login with Google
            </button>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600 transition-all"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  