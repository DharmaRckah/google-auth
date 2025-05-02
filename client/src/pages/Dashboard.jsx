import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/auth/user`, {
        withCredentials: true,
      })
      .then((res) => setUser(res.data))
      .catch((err) => console.error("User not logged in", err));
  }, []);

  if (!user) return <div className="p-6">Loading user data...</div>;

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-blue-600 text-white p-6">
        <h2 className="text-2xl font-bold mb-6">MERN Dashboard</h2>
        <ul>
          <li className="mb-4">
            <a href="/dashboard" className="text-lg hover:text-blue-200">Dashboard</a>
          </li>
          {/* Add more sidebar links as needed */}
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">User Profile</h1>

          {/* Profile Section */}
          <div className="flex items-center space-x-6">
          
            <img
              src={user?.photo}
              alt="User profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-blue-600"
            />
            <div>
              <p className="text-2xl font-semibold text-gray-800">{user.displayName}</p>
              <p className="text-sm text-gray-500">{user.email}</p>
              {user.location && (
                <p className="text-sm text-gray-600 mt-2">Location: {user.location}</p>
              )}
            </div>
          </div>

          {/* Additional User Info */}
          <div className="mt-8 space-y-6">
            {/* Bio Section */}
            <div>
              <p className="text-lg font-semibold text-gray-800">Bio</p>
              <p className="text-gray-600">{user.bio || "No bio available"}</p>
            </div>

            {/* Join Date */}
            <div>
              <p className="text-lg font-semibold text-gray-800">Joined</p>
              <p className="text-gray-600">{new Date(user.createdAt).toLocaleDateString()}</p>
            </div>

            {/* Update Profile button */}
            <div className="mt-4">
              <button
                className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition"
                onClick={() => alert("Feature not implemented yet")}
              >
                Update Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
