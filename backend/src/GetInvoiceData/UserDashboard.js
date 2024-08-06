import React from "react";
import UserManu from "../component/layout/UserManu";
import { useAuth } from "../Admin/auth";

const UserDashboard = () => {
  const [auth] = useAuth();
  return (
    <div className="container-flui m-3 p-3 dashboard">
      <div className="row">
        <div className="col-md-3">
          <UserManu />
        </div>
        <div className="col-md-9">
          <div className="card w-75 p-3">
            <h3>{auth?.user?.name}</h3>
            <h3>{auth?.user?.email}</h3>
            <h3>{auth?.user?.address}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
