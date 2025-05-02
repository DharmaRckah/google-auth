const Navbar = () => {
    const handleLogin = () => {
      window.open(`${import.meta.env.VITE_BACKEND_URL}/auth/google`, "_self");
    };
  
    const handleLogout = () => {
      window.open(`${import.meta.env.VITE_BACKEND_URL}/auth/logout`, "_self");
    };
  
    return (
      <nav className="p-4 bg-blue-600 text-white flex justify-between">
        <h1 className="text-xl font-bold">MERN OAuth</h1>
        <div className="space-x-4">
          <button onClick={handleLogin}>Login with Google</button>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  