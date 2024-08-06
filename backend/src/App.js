import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import InvoiceForm from "./component/InvoiceForm";
import GetInvoiceDataById from "./GetInvoiceData/GetInvoiceForm";
import GetInvoiceFormData from "./component/AdminDashbord.js/GetInvoiceFormData";
import Register from "./register/Register";
import Login from "./register/Login";
import ForgetPassword from "./register/ForgetPassword";
import TestingData from "./component/shipping/TestingData";
import UpdateInvoiceData from "./GetInvoiceData/UpdateInvoiceData";
import TextEditor from "./component/TextEditor";
import ResetPassword from "./register/ResetPassword";
import GetInvoiceByUserId from "./GetInvoiceData/GetInvoiceByUserId";
import ProtectedRoute from "./component/layout/ProtectedRoute";
import About from "./component/About";
import Layout from "./component/layout/Layout";
import AuthCheckRoute from "./component/layout/AuthCheckRole";
import AdminDashboard from "./component/AdminDashbord.js/AdminDashboard";
import AllUser from "./component/AdminDashbord.js/AllUser";
import UserDashboard from "./GetInvoiceData/UserDashboard";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route element={<AuthCheckRoute />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>

        <Route path="/about" element={<About />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/password/reset/:token" element={<ResetPassword />} />
        <Route path="/test" element={<TestingData />} />
        <Route path="/text" element={<TextEditor />} />

        <Route
          path="/dashboard"
          element={<ProtectedRoute allowedRoles={["user"]} />}
        >
          <Route path="user" element={<UserDashboard />} />
          <Route path="user/invoice/:userId" element={<InvoiceForm />} />
          <Route
            path="user/getInvoiceByUserId/:userId"
            element={<GetInvoiceDataById />}
          />
          <Route
            path="user/invoiceByUserId/:userId"
            element={<GetInvoiceByUserId />}
          />
          <Route
            path="user/updateInvoiceByUserId/:userId"
            element={<UpdateInvoiceData />}
          />
        </Route>
        <Route
          path="/dashboard"
          element={<ProtectedRoute allowedRoles={["admin"]} />}
        >
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/getAllInvoice" element={<GetInvoiceFormData />} />
          <Route path="admin/user" element={<AllUser />} />
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
