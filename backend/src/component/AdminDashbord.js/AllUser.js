import axios from "axios";
import { useEffect, useState } from "react";
import AdminMenu from "../layout/AdminMenu";

const AllUser = () => {
  const [users, setUsers] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  const handleAllUser = async () => {
    try {
      const response = await axios.get(`/api/v1/finduser`);
      console.log(response.data, "user result");
      // Ensure we're setting an array to the users state
      setUsers(Array.isArray(response.data.data) ? response.data.data : []);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching user data:", error);
      setError("Failed to fetch user data");
      setLoading(false);
    }
  };

  useEffect(() => {
    handleAllUser();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading state
  }

  if (error) {
    return <div>{error}</div>; // Show error message
  }

  return (
    <div className="container-fluid m-3 p-3">
      <div className="row">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">CreatedTime</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map((user) => (
                  <tr key={user?._id}>
                    <td>{user?.name}</td>
                    <td>{user?.email}</td>
                    <td>{user?.phone}</td>
                    <td>{new Date(user?.createdAt).toLocaleString()}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4">No users found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUser;
