import React, { useState, useEffect } from "react";
import { CgAddR } from "react-icons/cg";
import { PiImageSquareThin } from "react-icons/pi";
import { HiOutlineDuplicate } from "react-icons/hi";
import { FaPlus } from "react-icons/fa";
function AddSomemorefield() {
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [rate, setRate] = useState("");
  const [amount, setAmount] = useState("");

  // <<<<<<<<<<<<<<<<<<<<<<<<<calculate a amount of items >>>>>>>>>>>>>>>>>>>>
  useEffect(() => {
    if (quantity && rate) {
      const calculatedAmount = parseFloat(quantity) * parseFloat(rate);
      setAmount(calculatedAmount.toFixed(1));
      // setAmount(calculatedAmount);
    }
  }, [quantity, rate]);

  const handleAmountChange = (e) => {
    const enteredAmount = e.target.value;
    setAmount(enteredAmount);

    // If the entered amount is valid and quantity is present, calculate rate
    if (enteredAmount && quantity) {
      const calculatedRate = (
        parseFloat(enteredAmount) / parseFloat(quantity)
      ).toFixed(1);
      setRate(calculatedRate);
    }
  };
  // <<<<<<<<<<<<<<<<<<<<<<here start united>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const CurrencyFormate = [
    "Namibia-Afrikaans(Afrikaans)",
    "South Africa-Afrikaans (Afrikaans)",
    "Ethiopia - Amharic (አማርኛ)",
    "United Arab Emirates - Arabic (اللغة العربية)",
    "Bahrain - Arabic (اللغة العربية)",
    "Djibouti - Arabic (اللغة العربية)",
    "Algeria - Arabic (اللغة العربية)",
    "Egypt - Arabic (اللغة العربية)",
    "Eritrea - Arabic (اللغة العربية)",
    "Israel - Arabic (اللغة العربية)",
    "Israel - Arabic (اللغة العربية)",
    "Iraq - Arabic (اللغة العربية)",
    "Jordan - Arabic (اللغة العربية)",
    "Comoros - Arabic (اللغة العربية)",
    "Kuwait - Arabic (اللغة العربية)",
    "Lebanon - Arabic (اللغة العربية)",
    "Libya - Arabic (اللغة العربية)",
    "Morocco - Arabic (اللغة العربية)",
    "Mauritania - Arabic (اللغة العربية)",
  ];
  const [selectedCountry, setSelectedCountry] = useState("");

  // Function to handle country selection
  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<herre some addition field valid>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const [showFields, setShowFields] = useState(false);
  const [viewsFields, setViewsFields] = useState(false);
  const [uploadFields, setUploadFields] = useState(false);
  const handleAddFieldsClick = () => {
    setShowFields(true);
  };
  const handleClick = () => {
    setViewsFields(true);
  };
  const submitFields = () => {
    setUploadFields(true);
  };
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<end valid>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  return (
    <div className=" text-center ">
      <div className="row mt-5">
        <div className="col-md-2">
          <div>
            {/* Button trigger modal */}
            <button
              type="button"
              className="btn"
              style={{
                boxSizing: "border-box",
                width: "80%",
                background: "azure",
              }}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              % Add GST
            </button>
            {/* Modal */}
            <div
              className="modal fade"
              id="exampleModal"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      Configure Tax
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">
                    <div>
                      <p style={{ textAlign: "left" }}>Select Tax Type</p>
                      <select className="form-select">
                        <option value="NoNE">NONE</option>
                        <option value="GST">GST(INDIA)</option>
                        <option value="VAT">VAT</option>
                        <option value="PPN">PPN</option>
                        <option value="SST">SST</option>
                        <option value="HST">HST</option>
                        <option value="TAX">TAX</option>
                      </select>
                    </div>

                    {/* <<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>> */}
                    <div style={{ display: "flex" }}>
                      <div className="col-md-5 mt-3">
                        <p style={{ textAlign: "left" }}>GST Type</p>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            // defaultValue
                            id="flexCheckDefault"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          >
                            IGST
                          </label>
                        </div>
                      </div>
                      <div className="col-md-5 m-5 p-2">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            // defaultValue
                            id="flexCheckDefault"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          >
                            CGST & SGST
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-3 flex">
                      {" "}
                      <p className="mt-2">
                        <CgAddR color={"indigo"} />
                      </p>
                      Add Cess
                    </div>
                    <div className=" ">
                      <hr></hr>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          // defaultValue
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          Is Reverse Charge Applicable?
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn "
                      data-bs-dismiss="modal"
                      style={{ marginRight: "20em" }}
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      className="btn"
                      style={{ background: "indigo", color: "white" }}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <<<<<<<<<<<<<<<<<<<<<<<< Second Start with colom >>>>>>>>>>>>>>>>>>>>>>>>>>> */}

        <div className="col-md-3 flex">
          <p style={{ marginTop: "5px" }}>Currency</p>
          <div className="">
            <select
              className="form-select"
              style={{
                width: "12em",
                marginLeft: "2em",
                backgroundColor: "azure",
                // marginBottom: "none",
              }}

              //   aria-label="Default select example"
            >
              <option>Indian Rupee(INR)</option>
              <option value="Angola(AOA,Kz)">Angola(AOA,Kz)</option>
              <option value="">Antarctica(AAD,$)</option>
              <option value="Ship">United Arab Emirates Dirh</option>
              <option value="air">Afghan Afghani(AFN,Af)</option>
              <option value="air">Albanian Lek(ALL,L)</option>
              <option value="air">Armenian Dram(AMD,AMD)</option>
              <option value="air">Sint Maarten(ANG,NAf)</option>
              <option value="air">Argentine Peso(ARS,AR$)</option>
              <option value="air">Australlan Dollar(AUD,A$)</option>
              <option value="air">Aruba(AWG,Afl)</option>
              <option value="air">Azerbaijani Manat(AZN,m...)</option>
              <option value="air">Bosnia-Herzegovina Conv...</option>
              <option value="air">Barbados(BBD,Bds$)</option>
              <option value="air">Bangladeshi Taka(BDT,Tk)</option>
              <option value="air">Bulgarian Lev(BGN,BGN)</option>
              <option value="air">Bahraini Dinar(BHD,BD)</option>
              <option value="air">Burundian Franc(BIF,FBu)</option>
              <option value="air">Bermuda Dollar(BMD,$)</option>
              <option value="air">Brunei Dollar(BND,B$)</option>
            </select>
          </div>
        </div>
        <div className="col-md-3 md:gap-2 ml-40 ">
          <div>
            <div>
              <button
                type="button"
                className="btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                style={{
                  width: "15em",
                  background: "azure",
                  // marginRight: "20em",
                }}
                // className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top"
              >
                123 Number/CurrencyFormat
              </button>

              {/* Modal */}
              <div
                className="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex={-1}
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content" style={{ height: "45em" }}>
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="staticBackdropLabel">
                        Number/Currency Format
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        // style={{ width: "20em" }}
                      />
                    </div>
                    <div className="modal-body">
                      <p style={{ fontFamily: "serif", marginBottom: "20px" }}>
                        Change between Roman and Arabic number systems.Million
                        vs .Lakhs
                      </p>
                      <div
                        className="col-2 bg-purple-50"
                        style={{
                          width: "29em",
                          height: "5em",
                          // background: "rgb(237, 237, 237)",
                          border: "1px solid purple",
                        }}
                      >
                        <div className="form-check">
                          <input
                            className="form-check-input "
                            style={{
                              marginTop: "25px",
                              padding: "10px",
                              //   margin: "5px",
                            }}
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault1"
                            style={{
                              fontFamily: "serif",
                              marginRight: "19em",
                              marginTop: "10px",
                              fontSize: "15px",
                            }}
                          >
                            India-English(Lakhs)
                            <p
                              style={{ fontSize: "20px", marginRight: "20px" }}
                            >
                              ₹1,23,45,679
                            </p>
                          </label>
                        </div>
                      </div>
                      {/* <<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>> */}
                      <div
                        className="col-2 bg-purple-50"
                        style={{
                          width: "29em",
                          height: "5em",
                          // background: "rgb(237, 237, 237)",
                          //   border: "1px solid purple",
                          marginTop: "10px",
                        }}
                      >
                        <div className="form-check">
                          <input
                            className="form-check-input "
                            style={{
                              marginTop: "25px",
                              padding: "10px",
                              //   backgroundColor: "indigo",
                            }}
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault1"
                            style={{
                              fontFamily: "serif",
                              marginRight: "16em",
                              marginTop: "10px",
                              fontSize: "15px",
                            }}
                          >
                            United States -English (Millions)
                            <p style={{ fontSize: "20px", marginRight: "4em" }}>
                              ₹12,345,679
                            </p>
                          </label>
                        </div>

                        {/* <<<<<<<<<<<<<<< selectors>>>>>>>>>>>>>>>>> */}
                        <div className="select">
                          <select
                            className=" inptS"
                            value={selectedCountry}
                            onChange={handleCountryChange}
                            style={{ width: "90%", margin: "20px" }}
                          >
                            <option value="">India</option>
                            {CurrencyFormate.map((country, index) => (
                              <option
                                style={{ margin: "5px" }}
                                key={index}
                                value={country}
                              >
                                {country}
                              </option>
                            ))}
                          </select>
                        </div>
                        {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<check box valuue in decimal>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
                        <div className="mt-6 ">
                          <p style={{ marginRight: "18em" }}>
                            Select Decimal Digits
                          </p>
                          <div className=" grid grid-cols-1 grid-cols-2 grid-cols-3 grid-cols-4">
                            <div
                              className="form-check bg-purple-100 w-23 h-12 mt-2"
                              style={{
                                border: "1px solid indigo",
                                borderRadius: "5px",
                              }}
                            >
                              <input
                                className="form-check-input "
                                style={{
                                  marginTop: "15px",
                                  padding: "10px",
                                  // marginLeft: "1px",

                                  //   backgroundColor: "indigo",
                                }}
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />

                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault1"
                                style={{
                                  // fontFamily: "serif",
                                  marginRight: "25px",
                                  marginTop: "15px",
                                  fontSize: "15px",
                                }}
                              >
                                Default
                              </label>
                            </div>
                            <div
                              className="form-check bg-purple-50 w-20 ml-4  h-12 mt-2"
                              style={{ borderRadius: "6px" }}
                            >
                              <input
                                className="form-check-input "
                                style={{
                                  marginTop: "15px",
                                  padding: "10px",
                                }}
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />

                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault1"
                                style={{
                                  // fontFamily: "serif",
                                  marginRight: "20px",
                                  marginTop: "15px",
                                  fontSize: "15px",
                                }}
                              >
                                99
                              </label>
                            </div>
                            <div
                              className="form-check bg-purple-50 w-20 ml-2  h-12 mt-2"
                              style={{ borderRadius: "6px" }}
                            >
                              <input
                                className="form-check-input "
                                style={{
                                  marginTop: "15px",
                                  padding: "10px",

                                  //   backgroundColor: "indigo",
                                }}
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />

                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault1"
                                style={{
                                  // fontFamily: "serif",
                                  // marginRight: "20em",
                                  marginTop: "15px",
                                  fontSize: "15px",
                                }}
                              >
                                99.0
                              </label>
                            </div>

                            <div
                              className="form-check bg-purple-50 w-20 ml-2  h-12 mt-2"
                              style={{ borderRadius: "6px" }}
                            >
                              <input
                                className="form-check-input "
                                style={{
                                  marginTop: "15px",
                                  padding: "10px",
                                  //   backgroundColor: "indigo",
                                }}
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />

                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault1"
                                style={{
                                  // fontFamily: "serif",
                                  // marginRight: "25em",
                                  marginTop: "15px",
                                  fontSize: "15px",
                                }}
                              >
                                99.00
                              </label>
                            </div>
                          </div>
                          {/* <<<<<<<<<<<<<<<<<<<<<<<<<second div>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
                          <div className="flex gap-6">
                            <div
                              className="form-check bg-purple-50 w-25 ml-2  h-12 mt-2"
                              style={{ borderRadius: "6px" }}
                            >
                              <input
                                className="form-check-input "
                                style={{
                                  marginTop: "15px",
                                  padding: "10px",
                                  //   backgroundColor: "indigo",
                                }}
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />

                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault1"
                                style={{
                                  marginTop: "15px",
                                  fontSize: "15px",
                                }}
                              >
                                99.000
                              </label>
                            </div>
                            <div
                              className="form-check bg-purple-50 w-25 ml-2  h-12 mt-2"
                              style={{ borderRadius: "6px" }}
                            >
                              <input
                                className="form-check-input "
                                style={{
                                  marginTop: "15px",
                                  padding: "10px",
                                  //   backgroundColor: "indigo",
                                }}
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />

                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault1"
                                style={{
                                  marginTop: "15px",
                                  fontSize: "15px",
                                }}
                              >
                                99.0000
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="mb-3 mt-5">
                          <label
                            htmlFor="exampleFormControlInput1"
                            className="form-label"
                            style={{ marginRight: "15em" }}
                          >
                            Add Custom Currency Symbol
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer mr-2">
                      <button
                        type="button"
                        className="btn btn-light mr-4 "
                        style={{
                          width: "7em",
                          border: "3px solid rgb(228, 228, 228)",
                        }}
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" className="btn btn-primary">
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-10 " style={{ width: "59em" }}>
          <div
            className="flex gap-28 ml-3 p-2 bg-violet-700  h-15  mt-8 text-center "
            style={{ color: "white" }}
          >
            <p style={{ marginRight: "13em" }}>items</p>
            <p>Quantity</p>
            <p>Rate</p>
            <p>Amount</p>
          </div>
          {/* <<<<<<<<<<<<<<<<<<<<subcolom in second field>>>>>>>>>>>>>>>>> */}
          {!showFields && (
            <div
              className="bg-violet-50 ml-3"
              style={{
                width: "57em",
                height: "3em",
                border: "1px dotted black",
              }}
            >
              <button type="button" onClick={handleAddFieldsClick}>
                <p className="flex mt-2 ">
                  <p>
                    <CgAddR
                      style={{
                        width: "2em",
                        height: "20px",
                        marginTop: "3px",
                        color: "indigo",
                      }}
                    />
                  </p>
                  Add New Line
                </p>
              </button>
            </div>
          )}

          {/* <<<<<<<<<<<<<<<<<<<<<<<<<subfield>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
          {showFields && (
            <div>
              <div>
                <input
                  className="inptS"
                  style={{ width: "22em" }}
                  type="text"
                  value={itemName}
                  onChange={(e) => setItemName(e.target.value)}
                  placeholder="items Name"
                />
                <input
                  className="inptS"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  type="text"
                  placeholder="1"
                />
                <input
                  className="inptS"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                  type="text"
                  placeholder="-1"
                />
                <input
                  className="inptS"
                  value={amount}
                  onChange={handleAmountChange}
                  type="text"
                  placeholder="1.00"
                />
              </div>

              {/*  */}
              {!viewsFields && (
                <div className="">
                  <button type="button" onClick={handleClick}>
                    <p className="flex mt-4" style={{ marginRight: "45em" }}>
                      <p>
                        <CgAddR
                          style={{
                            width: "2em",
                            height: "20px",
                            marginTop: "3px",
                            color: "indigo",
                          }}
                        />
                      </p>
                      Add Description
                    </p>
                  </button>
                </div>
              )}
              {/*<<<<<<<<<<<<<<<<<<<<<< add description >>>>>>>>>>>>>>>>>>>> */}
              {viewsFields && (
                <div className="mb-3 ">
                  <textarea
                    className="form-control "
                    id="exampleFormControlTextarea1"
                    rows={3}
                    style={{
                      width: "42em",
                      marginLeft: "2em",
                      height: "12em",
                      marginBottom: "3em",
                      marginTop: "1em",
                    }}
                    placeholder="Description"
                    defaultValue={""}
                  />
                </div>
              )}
              {/* >>>>>>>>>>>>>>>>>>>>second button<<<<<<<<<<<<<<<<<<<<<<< */}
              {!uploadFields && (
                <div style={{ marginTop: "-29px", marginRight: "18em" }}>
                  <button type="button" onClick={submitFields}>
                    <p className="flex ">
                      <p className="">
                        <PiImageSquareThin
                          style={{
                            width: "2em",
                            height: "25px",
                            marginTop: "px",
                            color: "indigo",
                          }}
                        />
                      </p>
                      Add Thumbnail
                    </p>
                  </button>
                </div>
              )}
              {/* <<<<<<<<<<<<<<<<<<<<<<<< Add Thumbline>>>>>>>>>>>>>>>>>>>>> */}
              {uploadFields && (
                <div>
                  <label
                    htmlFor="image"
                    className="bg-slate-50  imaag flex items-center gap-1"
                    style={{
                      width: "12em",
                      height: "2em",
                      marginTop: "1em",
                      marginLeft: "2em",
                    }}
                  >
                    <span>
                      <FaPlus
                        style={{
                          width: "1em",
                          height: "3em",
                          marginLeft: "1em",
                        }}
                      />
                    </span>
                    <input
                      type="file"
                      name="image"
                      id="image"
                      accept="image/*"
                      hidden
                    />{" "}
                    Upload Thumbnail
                  </label>
                </div>
              )}
              {/*<<<<<<<<<<<<<<<<<<<<<<<<<<< third <<<<<<<<<<<<<<<<<< */}
              <div style={{ marginTop: "-29px", marginLeft: "45em" }}>
                <button type="button">
                  <p className="flex ">
                    <p className="">
                      <HiOutlineDuplicate
                        style={{
                          width: "2em",
                          height: "25px",
                          marginTop: "px",
                          color: "indigo",
                        }}
                      />
                    </p>
                    Duplicate
                  </p>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AddSomemorefield;
