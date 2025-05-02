import { useUser } from "../context/userContext";

const Home = () => {
  const { user } = useUser();

  const handleLogin = () => {
    window.open(`${import.meta.env.VITE_BACKEND_URL}/auth/google`, "_self");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
      <div className="text-center bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-4xl font-extrabold text-blue-600 mb-6">
          Welcome to MERN OAuth
        </h1>
        <p className="text-xl text-gray-700 mb-8">Login with Google to continue</p>

        {user ? (
          <div>
            <p className="text-lg mb-4">Welcome back, {user.displayName}!</p>
            <p className="text-sm text-gray-600">You are logged in.</p>
          </div>
        ) : (
          <>
            <button
              onClick={handleLogin}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 w-full mb-4"
            >
              Login with Google
            </button>
            <p className="text-sm text-gray-500">
              Don't have an account?{" "}
              <a
                href={`${import.meta.env.VITE_BACKEND_URL}/auth/google`}
                className="text-blue-600 hover:text-blue-700"
              >
                Sign up with Google
              </a>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
