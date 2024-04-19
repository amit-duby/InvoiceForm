import React, { useState } from "react";
import { CgAddR } from "react-icons/cg";
import { TbNotes, TbCloudUpload, TbWritingSign } from "react-icons/tb";
import { IoMdAttach, IoMdAdd } from "react-icons/io";
import { PiSignatureThin } from "react-icons/pi";
import { MdPhone } from "react-icons/md";
import { BiUpArrowAlt } from "react-icons/bi";
// import axios from "axios";

function AddMoreFields() {
  const [term, setTerm] = useState(false);
  const [items, setItems] = useState(false);
  const [groups, setGroups] = useState(false);
  const [nots, setNotes] = useState(false);
  const [addfiles, setAddFiles] = useState(false);
  const [addiInfo, setAddiInfo] = useState(false);
  const [addMoreFields, setAddMoreFields] = useState(false);
  const [addContct, setAddContct] = useState(false);
  const [addSign, setSign] = useState(false);
  const [sigLabel, setSigLabel] = useState(false);
  const handleTerms = () => {
    setTerm(true);
  };
  const handleItems = () => {
    setItems(true);
  };
  const handleGroup = () => {
    setGroups(true);
  };
  const handleNotes = () => {
    setNotes(true);
  };
  const handleAddFiles = () => {
    setAddFiles(true);
  };
  const handleAdditionalInfo = () => {
    setAddiInfo(true);
  };
  const handleAddMoreFields = () => {
    setAddMoreFields(true);
  };
  const handleAddContact = () => {
    setAddContct(true);
  };
  const handleAddSign = () => {
    setSign(true);
  };
  const handleSigLabel = () => {
    setSigLabel(true);
  };

  // here add data >>>>>>>>>>>>>>>
  const [terms, setTerms] = useState("");
  const [group, setGroup] = useState("");
  const [note, setNote] = useState("");
  const [attach, setAttach] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactValue, setContactValue] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [signa, setSigna] = useState("");
  // handle
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const formData = {
  //       terms: terms,
  //       group: group,
  //       note: note,
  //       contactInfo: contactInfo,
  //       contactName: contactName,
  //       contactValue: contactValue,
  //       name: name,
  //       email: email,
  //       phone: phone,
  //       photo: image,
  //       label: signa,
  //       // attach: attach,
  //     };
  //     const config = {
  //       headers: {
  //         "Content-type": "multipart/form-data",
  //       },
  //     };
  //     const result = await axios.post(
  //       "/api/v1/gs/createdetails",
  //       formData,
  //       config
  //     );
  //     console.log(result);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <div>
      <div className="flex gap-4 mt-10 ml-3 ">
        {!term && (
          <div>
            <div
              className="bg-violet-50 "
              style={{
                width: "15em",
                height: "3em",
                border: "2px dotted rgb(147, 147, 147)",
                borderRadius: "7px",
              }}
            >
              <button type="button" onClick={handleTerms}>
                <p className="flex  p-2">
                  <p>
                    <CgAddR
                      style={{
                        width: "2em",
                        height: "20px",
                        marginTop: "2px",
                        color: "indigo",
                      }}
                    />
                  </p>
                  Add Terms & Conditions
                </p>
              </button>
            </div>
          </div>
        )}
        {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<second>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
        {!nots && (
          <div>
            <div
              className="bg-violet-50 "
              style={{
                width: "10em",
                height: "3em",
                border: "2px dotted rgb(147, 147, 147)",
                borderRadius: "7px",
              }}
            >
              <button type="button" onClick={handleNotes}>
                <p className="flex ml-3 p-2">
                  <p>
                    <TbNotes
                      style={{
                        width: "2em",
                        height: "20px",
                        marginTop: "2px",
                        color: "indigo",
                      }}
                    />
                  </p>
                  Add Notes
                </p>
              </button>
            </div>
          </div>
        )}
        {/* <<<<<<<<<<<<<<<<<<<<<< third div>>>>>>>>>>>>>>>>>>>>>>> */}
        {!addfiles && (
          <div>
            <div
              className="bg-violet-50 "
              style={{
                width: "12em",
                height: "3em",
                border: "2px dotted rgb(147, 147, 147)",
                borderRadius: "7px",
              }}
            >
              <button type="button" onClick={handleAddFiles}>
                <p className="flex ml-2 p-2">
                  <p>
                    <IoMdAttach
                      style={{
                        width: "2em",
                        height: "20px",
                        marginTop: "2px",
                        color: "indigo",
                      }}
                    />
                  </p>
                  Add Attachments
                </p>
              </button>
            </div>
          </div>
        )}
        {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<foor div>>>>>>>>>>>>>>>>>>>>> */}
        {!addSign && (
          <div style={{ marginLeft: "7em" }}>
            <div
              className="bg-violet-50 "
              style={{
                width: "12em",
                height: "3em",
                border: "2px dotted rgb(147, 147, 147)",
                borderRadius: "7px",
              }}
            >
              <button type="button" onClick={handleAddSign}>
                <p className="flex ml-2 p-2">
                  <p>
                    <PiSignatureThin
                      style={{
                        width: "2em",
                        height: "20px",
                        marginTop: "2px",
                        color: "indigo",
                      }}
                    />
                  </p>
                  Add Signature
                </p>
              </button>
            </div>
          </div>
        )}
        {addSign && (
          <div
            className=" bg-slate-50 mt-4 ml-2"
            style={{ width: "20em", height: "25em" }}
          >
            <div className="ml-5 mt-3">
              <p>Signature</p>
            </div>
            <div
              className=" mt-3 ml-7"
              style={{
                width: "15em",
                height: "10em",
                border: "2px dotted rgb(184, 179, 179)",
                borderRadius: "5px",
                backgroundColor: "white",
              }}
            >
              <label htmlFor="image" className="mt-5 ml-2 flex cursor-pointer">
                <span style={{ marginTop: "-1em" }}>
                  <TbCloudUpload
                    style={{
                      width: "3em",
                      height: "4em",
                      marginLeft: "3em",
                      color: "blue",
                    }}
                  />
                </span>
                <input
                  type="file"
                  name="image"
                  value={image}
                  onChange={(e) => setImage(e.target.files[0])}
                  id="image"
                  // accept="image/*"
                  hidden
                />{" "}
                upload
              </label>
            </div>
            <div className="flex mt-3 ml-4">
              <p>
                <BiUpArrowAlt
                  style={{ width: "2em", height: "25px", color: "blue" }}
                />
              </p>
              Upload Signature
            </div>
            {/* <<<<<<<<<<<<<<<<<<<<<use signature pad >>>>>>>>>>>>>>>> */}
            <div className="flex mt-3 ml-5">
              <p>
                <TbWritingSign
                  style={{ width: "2em", height: "25px", color: "blue" }}
                />
              </p>
              Use Signature Pad
            </div>
            {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<signature label>>>>>>>>>>>>>>>>>>>> */}
            {!sigLabel && (
              <div style={{ marginLeft: "1em", marginTop: "2em" }}>
                <div
                  className=""
                  style={{
                    width: "17em",
                    height: "3em",
                    border: "1px solid rgb(147, 147, 147)",
                    borderRadius: "4px",
                  }}
                >
                  <button type="button" onClick={handleSigLabel}>
                    <p className="flex ml-2 p-2">
                      <p>
                        <CgAddR
                          style={{
                            width: "2em",
                            height: "20px",
                            marginTop: "2px",
                            color: "indigo",
                          }}
                        />
                      </p>
                      Add Signature label
                    </p>
                  </button>
                </div>
              </div>
            )}

            {/* <<<<<<<<<<<<<<<<<<<<< edn add signature label>>>>>>>>>>>>>>>>>> */}
            {sigLabel && (
              <div className="mb-3 mt-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label ml-5"
                >
                  Add Signature Label
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={signa}
                  onChange={(e) => setSigna(e.target.value)}
                  style={{ width: "17em", marginLeft: "1em" }}
                  id="exampleFormControlInput1"
                  defaultValue={"Authorised Signatory"}
                />
              </div>
            )}
          </div>
        )}
      </div>
      {/* <<<<<<<<<<<<<<<<<<< extra button >>>>>>>>>>>>>>>>>>>>>>>>>> */}

      <div className="flex gap-4 mt-3 ml-2">
        {!addiInfo && (
          <div>
            <div
              className="bg-violet-50 "
              style={{
                width: "15em",
                height: "3em",
                border: "2px dotted rgb(147, 147, 147)",
                borderRadius: "7px",
              }}
            >
              <button type="button" onClick={handleAdditionalInfo}>
                <p className="flex ml-2 p-2">
                  <p>
                    <TbNotes
                      style={{
                        width: "2em",
                        height: "20px",
                        marginTop: "2px",
                        color: "indigo",
                      }}
                    />
                  </p>
                  Add Additional Info
                </p>
              </button>
            </div>
          </div>
        )}
        {/*<<<<<<<<<<<<<<<<<<<<<<<<<<< sencod button >>>>>>>>>>>>>>>>>>>>> */}
        {!addContct && (
          <div>
            <div
              className="bg-violet-50 "
              style={{
                width: "15em",
                height: "3em",
                border: "2px dotted rgb(147, 147, 147)",
                borderRadius: "7px",
              }}
            >
              <button type="button" onClick={handleAddContact}>
                <p className="flex ml-2 p-2">
                  <p>
                    <MdPhone
                      style={{
                        width: "2em",
                        height: "20px",
                        marginTop: "2px",
                        color: "indigo",
                      }}
                    />
                  </p>
                  Add Contact Details
                </p>
              </button>
            </div>
          </div>
        )}
      </div>
      {/*<<<<<<<<<<<<<<<<<<<add terms and conditions >>>>>>>>>>>>>>>>>> */}
      {term && (
        <div className="bg-slate-50 mt-4 ml-2 " style={{ height: "25em" }}>
          <input
            type="text"
            className="inpt "
            style={{ width: "11em", marginLeft: "2em", marginTop: "1em" }}
            defaultValue={"Terms and Conditions"}
          />
          <div>
            <input
              type="text"
              className="inptS "
              style={{ width: "55em", marginLeft: "2em", marginTop: "1em" }}
              defaultValue={
                "1. Please pay within 15 days from the date of invoice, overdue interest @ 14% will be charged on dela"
              }
            />
          </div>

          <div>
            <input
              type="text"
              className="inptS "
              style={{ width: "55em", marginLeft: "2em", marginTop: "1em" }}
              defaultValue={
                "2. Please quote invoice number when remitting funds."
              }
            />
          </div>
          {/* <<<<<<<<<<<add items >>>>>>>> */}
          {items && (
            <div>
              <input
                type="text"
                className="inptS "
                value={terms}
                onChange={(e) => setTerms(e.target.value)}
                style={{ width: "55em", marginLeft: "2em", marginTop: "1em" }}
                placeholder="3. Add terms"
                // defaultValue={"3 ."}
              />
            </div>
          )}
          {/* <<<<<<<<<<<<<<<<<<<add button >>>>>>>>>>>>>> */}

          <div className="flex">
            {!items && (
              <div className="ml-2">
                <button type="button" onClick={handleItems}>
                  <p className="flex ml-2 p-2">
                    <p>
                      <CgAddR
                        style={{
                          width: "2em",
                          height: "20px",
                          marginTop: "2px",
                          color: "indigo",
                        }}
                      />
                    </p>
                    Add New Term
                  </p>
                </button>
              </div>
            )}
            {/* <<<<<<<<<<<<<< second button >>>>>>>>>>>>>>> */}
            {!groups && (
              <div className=" ml-2">
                <button type="button" onClick={handleGroup}>
                  <p className="flex ml-2 p-2">
                    <p>
                      <CgAddR
                        style={{
                          width: "2em",
                          height: "20px",
                          marginTop: "2px",
                          color: "indigo",
                        }}
                      />
                    </p>
                    Add New Group
                  </p>
                </button>
              </div>
            )}
          </div>

          {/* <<<<<<<<<< add group >>>>>>>>>>>>> */}
          {groups && (
            <div>
              <input
                type="text"
                className="inpt "
                style={{ width: "11em", marginLeft: "2em", marginTop: "1em" }}
                defaultValue={"Terms and Conditions"}
              />
              <div>
                <input
                  type="text"
                  className="inptS "
                  value={group}
                  onChange={(e) => setGroup(e.target.value)}
                  style={{ width: "55em", marginLeft: "2em", marginTop: "1em" }}
                  placeholder="3. Add terms"
                  // defaultValue={"3 ."}
                />
              </div>

              {/* <<<<<<<<<<<<<<<<<<<add button >>>>>>>>>>>>>> */}
              <div className="flex">
                <div className="ml-2">
                  <button type="button">
                    <p className="flex ml-2 p-2">
                      <p>
                        <CgAddR
                          style={{
                            width: "2em",
                            height: "20px",
                            marginTop: "2px",
                            color: "indigo",
                          }}
                        />
                      </p>
                      Add New Term
                    </p>
                  </button>
                </div>

                {/* <<<<<<<<<<<<<< second button >>>>>>>>>>>>>>> */}
                <div className=" ml-2">
                  <button type="button">
                    <p className="flex ml-2 p-2">
                      <p>
                        <CgAddR
                          style={{
                            width: "2em",
                            height: "20px",
                            marginTop: "2px",
                            color: "indigo",
                          }}
                        />
                      </p>
                      Add New Group
                    </p>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/*  <<<<<<<<<<<<<<<<< add notes fields >>>>>>>>>>>>>>>>> */}
      {nots && (
        <div
          className="bg-slate-50 mt-4 ml-2 "
          style={{ width: "35em", height: "20em" }}
        >
          <input
            type="text"
            className="inpt "
            style={{ width: "11em", marginLeft: "2em", marginTop: "1em" }}
            defaultValue={"Additional Notes"}
          />

          <div className="mb-3 ml-6" style={{ width: "30em" }}>
            <textarea
              className="form-control h-60 bg-slate-50"
              id="exampleFormControlTextarea1"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows={3}
              defaultValue={""}
            />
          </div>
        </div>
      )}
      {/* <<<<<<<<<<<<<<<<<<<< add attachments >>>>>>>>>>>>> */}
      {addfiles && (
        <div className="bg-slate-50 mt-4 ml-2 " style={{ height: "10em" }}>
          <input
            type="text"
            className="inpt "
            style={{ width: "5em", marginLeft: "2em", marginTop: "1em" }}
            defaultValue={"Attachments"}
          />
          <p style={{ marginTop: "-10px", marginLeft: "2em" }}>
            *Attachments won't appear as separate documents; instead, they'll be
            accessible as clickable links within the invoice
          </p>
          {/* <<<<<<<<<<<<<<<<<<<< add file >>>>>>>>>>> */}
          <div
            className="bg-slate-50 mt-3 ml-10"
            style={{
              width: "5em",
              height: "4em",
              border: "2px dotted rgb(184, 179, 179)",
              borderRadius: "5px",
            }}
          >
            <label htmlFor="image">
              <span>
                <IoMdAdd
                  style={{
                    width: "2em",
                    height: "3em",
                    marginLeft: "1em",
                  }}
                />
              </span>
              <input
                type="file"
                name="image"
                value={attach}
                onChange={(e) => setAttach(e.target.files[0])}
                id="image"
                accept="image/*"
                hidden
              />{" "}
            </label>
          </div>
        </div>
      )}
      {/* <<<<<<<<<<<<<<<<<<<<<<< add additional info >>>>>>>>>>>>>>>>>>>>>>>>>>> */}
      {addiInfo && (
        <div
          className=" bg-slate-50 mt-4 ml-2"
          style={{ width: "28em", height: "10em" }}
        >
          <div>
            <input
              type="text"
              placeholder="Field Name"
              className="inptS mt-3"
              value={contactInfo}
              onChange={(e) => setContactInfo(e.target.value)}
              style={{ marginLeft: "2em" }}
            />
            <input
              type="text"
              value={contactValue}
              onChange={(e) => setContactValue(e.target.value)}
              placeholder="Value"
              className="inptS"
            />
          </div>
          {/* <<<<<<<<<<<<<<<<<<<<<<<<second input >>>>>>>>>>>>>>>>> */}
          {addMoreFields && (
            <div>
              <input
                type="text"
                placeholder="Field Name"
                className="inptS mt-3"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ marginLeft: "2em" }}
              />
              <input
                type="text"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                placeholder="Value"
                className="inptS"
              />
            </div>
          )}
          {/* <<<<<<<<<<<<<<<<<<<<<<adddddddd button >>>>>>>>> */}
          {!addMoreFields && (
            <div>
              <div className=" ml-2">
                <button type="button" onClick={handleAddMoreFields}>
                  <p className="flex ml-2 p-2">
                    <p>
                      <CgAddR
                        style={{
                          width: "2em",
                          height: "20px",
                          marginTop: "2px",
                          color: "indigo",
                        }}
                      />
                    </p>
                    Add More Fields
                  </p>
                </button>
              </div>
            </div>
          )}
        </div>
      )}
      {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<Add Contact details >>>>>>>>>>>>>>>>>>>>>> */}
      {addContct && (
        <div className=" bg-slate-50 mt-4 ml-2" style={{ height: "8em" }}>
          <div>
            <p className="mt-10 ml-5">Your Contact Details</p>
          </div>
          <div className="flex ml-3 mt-4 gap-3">
            <input
              type="text"
              defaultValue={"For any enquiry ,reach out via"}
              className="inptS"
              style={{ width: "15em" }}
            />
            {/* <<<<<<<<<<<<<<<<<<<<<<<add email add >>>>>>>>>>>> */}
            <div className="">
              <input
                type="text"
                defaultValue={"email at"}
                style={{ width: "5em" }}
                className="inptS"
              />
              <input
                type="text"
                placeholder="Your email (optional)"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ width: "15em", marginLeft: "5px" }}
                className="inptS "
              />
            </div>
            <input
              type="text"
              defaultValue={"call on"}
              style={{ width: "5em" }}
              className="inptS"
            />
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              defaultValue={"+91"}
              className="inptS"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default AddMoreFields;
