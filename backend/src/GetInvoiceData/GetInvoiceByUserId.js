import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "../component/Navbar";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

function GetInvoiceByUserId() {
  const [invoices, setInvoices] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { userId } = useParams();

  const fetchInvoices = async () => {
    try {
      const response = await axios.get(`https://invoiceform-2.onrender.com/api/v1/invoiceByuser/${userId}`);
      console.log(response, "getinvoice data");
      if (response?.data?.data) {
        setInvoices(response.data.data);
      }
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred");

      console.error("Error fetching data:", error);
    }
  };

  const deleteInvoice = async (id) => {
    confirmAlert({
      title: "Confirm to delete",
      message: "Are you sure you want to delete this item?",
      buttons: [
        {
          label: "Yes",
          onClick: async () => {
            try {
              await axios.delete(`https://invoiceform-2.onrender.com/api/v1/deleteInvoiceByUserId/${userId}`);
              setInvoices((prevInvoices) =>
                prevInvoices.filter((invoice) => invoice.userId !== userId)
              );
              alert("Invoice data successfully deleted from your database");
            } catch (error) {
              console.error("Error deleting data:", error);
              alert("Failed to delete invoice data");
            }
          },
        },
        {
          label: "No",
          onClick: () => {
            console.log("Delete action cancelled");
          },
        },
      ],
    });
  };

  useEffect(() => {
    fetchInvoices();
  }, [userId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      {/* <Navbar /> */}

      <div className="container mt-20">
        <h1>Invoice List</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Invoice No</th>
              <th>Invoice Date</th>
              <th>Bill By Business</th>
              <th>Bill To Business</th>
              <th>Shipped To Business</th>
              <th>Shipped By Business</th>
              <th>Image</th>
              <th>Document</th>
              <th>Signature</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice) => (
              <tr key={invoice._id}>
                <td>{invoice.invoiceNo}</td>
                <td>{invoice.invoiceDate}</td>
                <td>{invoice.Billbybusiness}</td>
                <td>{invoice.Billtobusiness}</td>
                <td>{invoice.Shippedtobusiness}</td>
                <td>{invoice.Shippedbybusiness}</td>
                <td>
                  {invoice.image && invoice.image.url && (
                    <img
                      className="w-28 h-10 mt-"
                      src={invoice.image.url}
                      alt="Invoice"
                    />
                  )}
                </td>
                <td>
                  {invoice.document && invoice.document.url && (
                    <img
                      className="w-28 h-10 mt-"
                      src={invoice.document.url}
                      alt="Invoice"
                    />
                  )}
                </td>
                <td>
                  {invoice.signatureData ? (
                    <div style={{ border: "1px solid #ccc", padding: "10px" }}>
                      <img
                        src={invoice.signatureData}
                        alt="Signature"
                        className="w-28 h-10 mt-"
                      />
                    </div>
                  ) : (
                    <td>No signatures found.</td>
                  )}
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteInvoice(invoice.userId)}
                  >
                    Delete
                  </button>
                  {/* <Link
                    to={`/updateInvoiceByUserId/${invoice.userId}`}
                    className="btn btn-primary"
                  >
                    Edit
                  </Link> */}
                  {/* <Link
                    to={`/getInvoiceByUserId/${invoice.userId}`}
                    className="btn btn-secondary"
                  >
                    View
                  </Link> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default GetInvoiceByUserId;
