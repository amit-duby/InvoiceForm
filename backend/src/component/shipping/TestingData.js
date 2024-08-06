import React, { useRef, useState, useEffect } from "react";
import SignatureCanvas from "react-signature-canvas";
import axios from "axios";
import { useParams } from "react-router-dom";
// import { CgAddR } from "react-icons/cg";

const TestingData = () => {
  const sigCanvas = useRef({});
  const [signature, setSignature] = useState("");
  const [sigPreview, setSigPreview] = useState(null);

  const clear = () => {
    sigCanvas.current.clear();
    setSignature(null);
    setSigPreview(null);
  };

  const upload = () => {
    const signature = sigCanvas.current
      .getTrimmedCanvas()
      .toDataURL("image/png");

    setSigPreview(signature);
    setSignature(signature);
  };

  const saveSignature = () => {
    axios
      .post("/api/v1/create", { signature })
      .then((response) => {
        console.log("Signature saved:", response.data);
      })
      .catch((error) => {
        console.error("Error saving signature:", error);
      });
  };

  useEffect(() => {
    // Fetch the existing signature from the backend
    axios
      .get("/api/v1/find")
      .then((response) => {
        const signatureData = response?.data?.data?.data;
        setSignature(signatureData);
        setSigPreview(signatureData);
      })
      .catch((error) => {
        console.error("Error fetching signature:", error);
      });
  }, []);

  return (
    <div>
      {sigPreview ? (
        <div>
          <img
            src={sigPreview}
            style={{
              backgroundColor: "black",
              width: 250,
              height: 130,
              marginLeft: "2em",
            }}
            alt="Signature Preview"
          />
          <p className="cursor-pointer ml-80" onClick={clear}>
            &times;
          </p>
        </div>
      ) : (
        <SignatureCanvas
          ref={sigCanvas}
          canvasProps={{
            width: 250,
            height: 130,
            className: "sigCanvas",
            style: { backgroundColor: "black", marginLeft: "2em" },
          }}
          penColor="white"
        />
      )}
      {!sigPreview && <button onClick={upload}>Upload</button>}
      {signature && <button onClick={saveSignature}>Save</button>}
    </div>
  );
};

export default TestingData;
