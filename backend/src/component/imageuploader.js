import React, { useState } from "react";
import axios from "axios";
import { BsCamera } from "react-icons/bs";

function ImageUpload() {
  // const [profileImage, setProfileImage] = useState("");
  const [image, setImage] = useState("");
  const [invoiceNo, setInvoiceNo] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [values, setValues] = useState("");

  // const handleSubmit = async (e) => {
  //   // const file = e.target.files[0];
  //   // let formData = new FormData();
  //   // formData.append("image", file);
  //   // console.log([...formData]);
  //   try {
  //     // const response = await axios.post("/api/v1/imageupload", formData);
  //     // console.log(response.data);
  //   } catch (error) {
  //     console.log("Error:", error);
  //   }
  // };
  const addUser = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("invoiceNo", invoiceNo);
    formData.append("invoiceDate", invoiceDate);
    formData.append("dueDate", dueDate);
    formData.append("name", values);
    formData.append("photo", image);
    const config = {
      headers: {
        "Content-type": "multipart/form-data",
      },
    };
    const response = await axios.post("/api/v1/create", formData, config);
    console.log(response);
  };

  return (
    // <<<<<<<<<<<<<<<<<<<<<<<<< image tage>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    <div>
      <form>
        <div>
          <input
            type="text"
            value={invoiceNo}
            onChange={(e) => setInvoiceNo(e.target.value)}
            placeholder="name"
          />
          <input
            type="date"
            value={invoiceDate}
            onChange={(e) => setInvoiceDate(e.target.value)}
          />
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
          <input
            type="text"
            value={values}
            onChange={(e) => setValues(e.target.value)}
            placeholder="name"
          />
        </div>
        <div>
          <label htmlFor="image">
            <BsCamera style={{ width: "500%", cursor: "pointer" }} />
            <input
              type="file"
              name="image"
              id="image"
              // accept="image/*"
              // value={image}
              onChange={(e) => setImage(e.target.files[0])}
              hidden
              // onChange={handleSubmit}
            />
          </label>
        </div>
        <button type="button" onClick={addUser}>
          submit
        </button>
      </form>
    </div>
  );
}

// export default ImageUpload;

// import React, { useState } from "react";

// const ImageUpload = () => {
//   // Array containing all the states of India
//   const statesOfIndia = [
//     "Andhra Pradesh",
//     "Arunachal Pradesh",
//     "Assam",
//     "Bihar",
//     "Chhattisgarh",
//     "Goa",
//     "Gujarat",
//     "Haryana",
//     "Himachal Pradesh",
//     "Jharkhand",
//     "Karnataka",
//     "Kerala",
//     "Madhya Pradesh",
//     "Maharashtra",
//     "Manipur",
//     "Meghalaya",
//     "Mizoram",
//     "Nagaland",
//     "Odisha",
//     "Punjab",
//     "Rajasthan",
//     "Sikkim",
//     "Tamil Nadu",
//     "Telangana",
//     "Tripura",
//     "Uttar Pradesh",
//     "Uttarakhand",
//     "West Bengal",
//     "Andaman and Nicobar Islands",
//     "Chandigarh",
//     "Dadra and Nagar Haveli and Daman and Diu",
//     "Delhi",
//     "Lakshadweep",
//     "Puducherry",
//   ];

//   // State to hold the selected state
//   const [selectedState, setSelectedState] = useState("");

//   // Function to handle state selection
//   const handleStateChange = (e) => {
//     setSelectedState(e.target.value);
//   };

//   return (
//     <div>
//       <h2>All India State Dropdown</h2>
//       <select value={selectedState} onChange={handleStateChange}>
//         <option value="">Select a state</option>
//         {statesOfIndia.map((state, index) => (
//           <option key={index} value={state}>
//             {state}
//           </option>
//         ))}
//       </select>
//       {selectedState && <p>You selected: {selectedState}</p>}
//     </div>
//   );
// };

export default ImageUpload;
