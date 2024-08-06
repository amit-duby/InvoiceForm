import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../Admin/auth";

const UserMenu = () => {
  const [auth] = useAuth();
  //   const navigate = useNavigate();

  //   // Redirect to login if not authenticated
  //   if (!auth.user) {
  //     navigate("/login");
  //     return null;
  //   }

  const userId = auth?.user?._id; // Adjust this according to your auth object structure
  console.log(userId, " user admin userId");
  return (
    <div>
      <div className="text-center dashboard-menu">
        <div className="list-group">
          <h4>Dashboard</h4>
          <NavLink
            to={`/dashboard/user/invoice/${userId}`}
            className="list-group-item list-group-item-action"
          >
            InvoiceForm
          </NavLink>
          <NavLink
            to={`/dashboard/user/getInvoiceByUserId/${userId}`}
            className="list-group-item list-group-item-action"
          >
            GetInvoiceDataById
          </NavLink>
          <NavLink
            to={`/dashboard/user/invoiceByUserId/${userId}`}
            className="list-group-item list-group-item-action"
          >
            GetAllInvoiceByUserId
          </NavLink>
          {/* <NavLink
            to={`/dashboard/user/updateInvoiceByUserId/${userId}`}
            className="list-group-item list-group-item-action"
          >
            UpdateInvoiceData
          </NavLink> */}
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
