import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/auth/user`, {
      withCredentials: true,
    })
    .then(res => setUser(res.data))
    .catch(err => console.error("User not logged in", err));
  }, []);

  if (!user) return <div className="p-6">Loading user data...</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <img src={user.photo} alt="User profile" className="rounded-full w-24 h-24" />
      <p className="mt-2">Name: {user.displayName}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default Dashboard;
