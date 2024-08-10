import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// import { useAuth } from "../Admin/auth";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import AdminMenu from "../layout/AdminMenu";
const LIMIT = 4;

const totalPagesCalculator = (total, limit) => {
  const pages = [];
  // console.log(pages);
  for (let x = 1; x <= parseInt(total) / limit; x++) {
    pages.push(x);
  }
  return pages;
};

const GetInvoiceFormData = () => {
  const [invoices, setInvoices] = useState([]);

  const [activePage, setActivePage] = useState(1);
  const [total, setTotal] = useState(0);
  const [order, setOrder] = useState("desc");
  const [error, setError] = useState(null);

  const fetchInvoices = async () => {
    try {
      const response = await axios.get("/api/v1/find", {
        params: { page: activePage, size: LIMIT, order },
      });
      console.log(response, "getinvoice data");
      setInvoices(response?.data?.data);
      setTotal(response?.data?.total);

      // console.log(total);
    } catch (error) {
      setError(error.response.data.message);
      console.error("Error fetching data:", error);
    }
  };

  const deleteInvoice = (id) => {
    confirmAlert({
      title: "Confirm to delete",
      message: "Are you sure you want to delete this item?",
      buttons: [
        {
          label: "Yes",
          onClick: async () => {
            // Proceed with the delete action
            try {
              await axios.delete(`/api/v1/delete/${id}`);
              setInvoices((prevInvoices) =>
                prevInvoices.filter((invoice) => invoice._id !== id)
              );

              // alert("Invoice data successfully deleted from your database");
            } catch (error) {
              console.error("Error deleting data:", error);
              alert("Failed to delete invoice data");
            }
          },
        },
        {
          label: "No",
          onClick: () => {
            // User cancelled the action
            console.log("Delete action cancelled");
          },
        },
      ],
    });
  };

  useEffect(() => {
    fetchInvoices();
  }, [activePage, order]);
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div className="container ">
              {/* <pre>{JSON.stringify(auth, null, 4)}</pre> */}

              <div>
                <label>
                  Order:
                  <select
                    value={order}
                    onChange={(e) => setOrder(e.target.value)}
                  >
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                  </select>
                </label>
              </div>
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
                    {/* <th>Actions</th> */}
                  </tr>
                </thead>
                <tbody>
                  {invoices?.map((invoice) => (
                    <tr key={invoice?._id}>
                      <td>{invoice?.invoiceNo}</td>
                      <td>{invoice?.invoiceDate}</td>
                      <td>{invoice?.Billbybusiness}</td>
                      <td>{invoice?.Billtobusiness}</td>
                      <td>{invoice?.Shippedtobusiness}</td>
                      <td>{invoice?.Shippedbybusiness}</td>
                      <td>
                        {" "}
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
                        <div>
                          {invoice.length === 0 ? (
                            <td>No signatures found.</td>
                          ) : (
                            <td>
                              {invoice.signatureData && (
                                <td
                                  style={{
                                    border: "1px solid #ccc",
                                    padding: "10px",
                                  }}
                                >
                                  <img
                                    src={invoice.signatureData}
                                    alt="Signature"
                                    className="w-28 h-10 mt-"
                                  />
                                </td>
                              )}
                            </td>
                          )}
                        </div>
                      </td>
                      {/* <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteInvoice(invoice._id)}
                  >
                    Delete
                  </button>
                  <Link
                    to={`/invoice-detail/${invoice._id}`}
                    className="btn btn-primary"
                  >
                    Edit
                  </Link>
                  <Link
                    to={`/getInvoice/${invoice._id}`}
                    className="btn btn-secondary"
                  >
                    View
                  </Link>
                </td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  {activePage !== 1 && (
                    <li
                      className="page-item"
                      onClick={() => setActivePage(activePage - 1)}
                    >
                      <Link className="page-link" to="#">
                        Previous
                      </Link>
                    </li>
                  )}
                  {totalPagesCalculator(total, LIMIT).map((pageNo) => (
                    <li
                      className={`page-item ${
                        pageNo === activePage ? `active` : ``
                      }`}
                      key={pageNo}
                      onClick={() => setActivePage(pageNo)}
                    >
                      <Link className="page-link" to="#">
                        {pageNo}
                      </Link>
                    </li>
                  ))}
                  {activePage !== parseInt(total / LIMIT) && (
                    <li
                      className="page-item"
                      onClick={() => setActivePage(activePage + 1)}
                    >
                      <Link className="page-link" to="#">
                        Next
                      </Link>
                    </li>
                  )}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetInvoiceFormData;
