import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "../component/Navbar";

function GetInvoiceDataById() {
  const [invoiceData, setInvoiceData] = useState(null);
  const [gstInputSets, setGstInputSets] = useState([]);
  const [error, setError] = useState(null);
  const { userId } = useParams(); // Get the id from the URL
  const navigate = useNavigate();
  const fetchInvoiceData = async () => {
    try {
      const response = await axios.get(`https://invoiceform-2.onrender.com/api/v1/invoiceByuserId/${userId}`);
      if (response.data.data) {
        setInvoiceData(response.data.data);
      } else {
        navigate(`/dashboard/user/invoice/${userId}`);
      }

      const fetchedData = response.data.data.gstinputSets;

      if (fetchedData && fetchedData.length > 0) {
        // Parse the JSON string inside the array
        const parsedData = JSON.parse(fetchedData[0]);
        setGstInputSets(parsedData);
      } else {
        setGstInputSets([]);
      }
    } catch (error) {
      setError("Failed to fetch data");
      alert(error.response?.data?.message, "create Invoice");
      navigate(`/dashboard/user/invoice/${userId}`);
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchInvoiceData();
  }, [userId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!invoiceData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {/* <Navbar /> */}
      <h1 className="text-3xl ml-20">Invoice Details</h1>
      <div className="container ml-4">
        <Link
          to={`/dashboard/user/updateInvoiceByUserId/${userId}`}
          className="btn btn-primary ml-10"
        >
          Edit
        </Link>
        <Link
          to={`/dashboard/user/invoiceByUserId/${userId}`}
          className="btn btn-secondary ml-10"
        >
          View
        </Link>
        <table className="table table-striped">
          <tbody className="ml-40">
            <tr>
              <th>Invoice No</th>
              <td>{invoiceData.invoiceNo}</td>
            </tr>
            <tr>
              <th>Invoice Date</th>
              <td>{invoiceData.invoiceDate}</td>
            </tr>
            <tr>
              <th>Due Date</th>
              <td>{invoiceData.dueDate}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{invoiceData.email}</td>
            </tr>
            <tr>
              <th>Additional Email</th>
              <td>{invoiceData.email1}</td>
            </tr>
            <tr>
              <th>Bill to Business</th>
              <td>{invoiceData.Billtobusiness}</td>
            </tr>
            <tr>
              <th>Bill to BilltoCountry</th>
              <td>{invoiceData.Billtocountry}</td>
            </tr>
            <tr>
              <th>Bill to BillbyCountry</th>
              <td>{invoiceData.Billbycountry}</td>
            </tr>
            <tr>
              <th>Bill to Billbyregion</th>
              <td>{invoiceData.Billbyregion}</td>
            </tr>
            <tr>
              <th>Bill to Billtophone</th>
              <td>{invoiceData.Billtophone}</td>
            </tr>
            {/* <tr>
            <th>Bill to </th>
            <td>{invoiceData.trimmedDataURL}</td>
          </tr> */}
            <tr>
              <th>Bill by Business</th>
              <td>{invoiceData.Billbybusiness}</td>
            </tr>
            <tr>
              <th>Bill to GST</th>
              <td>{invoiceData.Billtogst}</td>
            </tr>
            <tr>
              <th>Bill by GST</th>
              <td>{invoiceData.Billbygst}</td>
            </tr>
            <tr>
              <th>Bill to Postal</th>
              <td>{invoiceData.Billtopostal}</td>
            </tr>
            <tr>
              <th>Bill by Postal</th>
              <td>{invoiceData.Billbypostal}</td>
            </tr>
            <tr>
              <th>Bill to City</th>
              <td>{invoiceData.Billtocity}</td>
            </tr>
            <tr>
              <th>Bill by City</th>
              <td>{invoiceData.Billbycity}</td>
            </tr>
            <tr>
              <th>Bill to PAN</th>
              <td>{invoiceData.Billtopan}</td>
            </tr>
            <tr>
              <th>Bill by PAN</th>
              <td>{invoiceData.Billbypan}</td>
            </tr>
            <tr>
              <th>Bill to Address</th>
              <td>{invoiceData.Billtoaddress}</td>
            </tr>
            <tr>
              <th>Bill by Address</th>
              <td>{invoiceData.Billbyaddress}</td>
            </tr>
            <tr>
              <th>Shipped to Address</th>
              <td>{invoiceData.Shippedtoaddress}</td>
            </tr>
            <tr>
              <th>Shipped by Address</th>
              <td>{invoiceData.Shippedbyaddress}</td>
            </tr>
            <tr>
              <th>Shipped to Business</th>
              <td>{invoiceData.Shippedtobusiness}</td>
            </tr>
            <tr>
              <th>Shipped by Business</th>
              <td>{invoiceData.Shippedbybusiness}</td>
            </tr>
            <tr>
              <th>Shipped to City</th>
              <td>{invoiceData.Shippedtocity}</td>
            </tr>
            <tr>
              <th>Shipped by City</th>
              <td>{invoiceData.Shippedbycity}</td>
            </tr>
            <tr>
              <th>Shipped to Postal</th>
              <td>{invoiceData.Shippedtopostal}</td>
            </tr>
            <tr>
              <th>Shipped by Postal</th>
              <td>{invoiceData.Shippedbypostal}</td>
            </tr>
            <tr>
              <th>Shipped to State</th>
              <td>{invoiceData.Shippedtostate}</td>
            </tr>
            <tr>
              <th>Shipped by State</th>
              <td>{invoiceData.Shippedbystate}</td>
            </tr>
            <tr>
              <th>Distance</th>
              <td>{invoiceData.distance}</td>
            </tr>
            <tr>
              <th>Mode of Transport</th>
              <td>{invoiceData.modeTrasport}</td>
            </tr>
            <tr>
              <th>Vehicle Type</th>
              <td>{invoiceData.vehicleType}</td>
            </tr>
            <tr>
              <th>Vehicle Number</th>
              <td>{invoiceData.vehicleNumber}</td>
            </tr>
            <tr>
              <th>Supply Type</th>
              <td>{invoiceData.supplyType}</td>
            </tr>
            <tr>
              <th>Challan Number</th>
              <td>{invoiceData.challanNumber}</td>
            </tr>
            <tr>
              <th>Challan Date</th>
              <td>{invoiceData.challanDate}</td>
            </tr>
            <tr>
              <th>Transport Type</th>
              <td>{invoiceData.transportType}</td>
            </tr>
            <tr>
              <th>Image</th>
              <td>
                <div>
                  <img
                    className="w-20 h-10 mt-"
                    // style={{ marginLeft: "10em" }}
                    src={invoiceData.image?.url}
                    alt="Invoice"
                  />
                </div>
              </td>
            </tr>
            <tr>
              <th>Signature</th>
              <td>
                <div>
                  <img
                    className="w-20 h-10 mt-"
                    // style={{ marginLeft: "10em" }}
                    src={invoiceData.signatureData}
                    alt="Invoice"
                  />
                </div>
              </td>
            </tr>
            <tr>
              <th>Transport Type</th>
              <td>{invoiceData.transportType}</td>
            </tr>
            {/* Add other fields as needed */}
          </tbody>
        </table>
        <div>
          <table className="flex">
            <thead>
              <tr>
                {/* <th>Name</th>
              <th>HSB</th>
              <th>GST</th>
              <th>Quantity</th>
              <th>Rate</th>
              <th>Amount</th> */}
                <th>Total</th>
              </tr>
            </thead>
            <tbody className="ml-80">
              {gstInputSets.map((item, index) => (
                <tr key={index}>
                  {/* <td>{item.name}</td>
                <td>{item.hsb}</td>
                <td>{item.gst}</td>
                <td>{item.quantity}</td>
                <td>{item.rate}</td>
                <td>{item.amount}</td> */}
                  <td>
                    `{item.currency}
                    {item.total}`
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default GetInvoiceDataById;
