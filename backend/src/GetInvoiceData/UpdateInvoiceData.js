import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { CgAddR } from "react-icons/cg";
import { PiImageSquareThin, PiSignatureThin } from "react-icons/pi";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import SignatureCanvas from "react-signature-canvas";
import "react-phone-number-input/style.css";
import Select from "react-select";
import EditableText from "../component/EditableText";
import JoditEditor from "jodit-react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import "./update.css";
import { AiFillIeCircle, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import { HiOutlineDuplicate } from "react-icons/hi";
import { TbCloudUpload, TbNotes, TbWritingSign } from "react-icons/tb";
import { MdPhone } from "react-icons/md";
import { BiUpArrowAlt } from "react-icons/bi";
import { IoMdAdd, IoMdAttach } from "react-icons/io";
import "../style/invoice.css";

const UpdateInvoiceData = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [invoiceNo, setInvoiceNo] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [Billbybusiness, setBillByBusiness] = useState("");
  const [Billtobusiness, setBillToBusiness] = useState("");
  const [Billbyaddress, setBillByAddress] = useState("");
  const [Billtoaddress, setBillToAddress] = useState("");
  const [Billbycity, setBillByCity] = useState("");
  const [Billtocity, setBillToCity] = useState("");
  const [Billbygst, setBillByGst] = useState("");
  const [Billtogst, setBillToGst] = useState("");
  const [Billbypan, setBillByPan] = useState("");
  const [Billtopan, setBillToPan] = useState("");
  const [Billbypostal, setBillByPostal] = useState("");
  const [Billtopostal, setBillToPostal] = useState("");
  const [email, setEmail] = useState("");
  const [email1, setEmail1] = useState("");
  const [addemail, setAddEmail] = useState("");
  const [Shippedbybusiness, setShippedByBusiness] = useState("");
  const [Shippedtobusiness, setShippedToBusiness] = useState("");
  const [Shippedbyaddress, setShippedByAddress] = useState("");
  const [Shippedtoaddress, setShippedToAddress] = useState("");
  const [Shippedbycity, setShippedByCity] = useState("");
  const [Shippedtocity, setShippedToCity] = useState("");
  const [signatuelable, setSignatuelable] = useState("");
  const [Shippedtogst, setShippedToGst] = useState("");
  const [Shippedbystate, setShippedByState] = useState("");
  const [Shippedtostate, setShippedToState] = useState("");
  const [Shippedbypostal, setShippedByPostal] = useState("");
  const [Shippedtopostal, setShippedToPostal] = useState("");
  const [description, setDescription] = useState("");
  const [addphone, setAddphone] = useState("");
  const [addterm, setAddTerm] = useState("");
  const [content, setContent] = useState("");
  const editor = useRef(null);
  const config = {
    readonly: false, // all options from https://xdsoft.net/jodit/doc/
    height: 250,
  };
  const [Shippedtocheckbox, setShippedtocheckbox] = useState(false);
  const [Shippedtocheckbox1, setShippedtocheckbox1] = useState(false);
  const [Shippedbycheckbox, setShippedbycheckbox] = useState(false);
  const handleShippedtocheckbox1 = (e) => {
    setShippedtocheckbox1(e.target.checked);
  };
  const handleShippedtocheckbox = (e) => {
    setShippedtocheckbox(e.target.checked);
  };
  const handleShippedbycheckbox = (e) => {
    setShippedbycheckbox(e.target.checked);
  };
  const [textValue, setTextValue] = useState("");
  const [numberValue, setNumberValue] = useState("");
  const [slects, setSelects] = useState("");
  const [submitValue, setSubmitValue] = useState(false);
  const [cltextValue, setClTextValue] = useState("");
  const [clnumberValue, setClNumberValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [submittedNumber, setSubmittedNumber] = useState(false);
  const [Billbycountry, setBillByCountry] = useState("");
  const [Billbyregion, setBillByRegion] = useState("");
  const [Billtocountry, setBillToCountry] = useState("");
  const [Billtoregion, setBillToRegion] = useState("");
  const [Shippedbycountry, setShippedbyCountry] = useState("");
  const [Shippedtocountry, setShippedToCountry] = useState("");
  const [distance, setDistance] = useState("");
  const [modeTrasport, setModeTrasport] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [supplyType, setSupplyType] = useState("");
  const [challanNumber, setChallanNumber] = useState("");
  const [challanDate, setChallanDate] = useState("");
  const [transportType, setTransPortType] = useState("");

  // const [signaturelabel,setSigLabel]=useState("");
  const [Billbyphone, setBillByPhone] = useState("");
  const [Billtophone, setBillToPhone] = useState("");
  const [isEmail, setIsEmail] = useState(true);
  const [isPhone, setIsPhone] = useState(true);
  const [isGst, setIsGst] = useState(true);
  const [isPan, setIsPan] = useState(true);
  // <<<<<<<<<<<<<<<<<<client fields >>>>>>>>>>>>>>>>>>>>>>>>>
  const [cliEmail, setCliEmail] = useState(true);
  const [cliPhone, setCliPhone] = useState(true);
  const [cliGst, setCliGst] = useState(true);
  const [cliPan, setCliPan] = useState(true);
  const [input, setInput] = useState(false);
  const [isTransport, setIsTransport] = useState(true);
  const [doc, setDoc] = useState(true);
  const [challan, setChallan] = useState(true);
  const [Vtype, setVType] = useState(true);
  const [Vnumber, setVnumber] = useState(true);
  const [tType, setTType] = useState(true);
  const [subType, setSubType] = useState(true);
  const [term, setTerm] = useState(true);

  const [nots, setNotes] = useState(true);
  const [addfiles, setAddFiles] = useState(true);
  const [addiInfo, setAddiInfo] = useState(true);
  // const [addMoreFields, setAddMoreFields] = useState(false);
  const [addContct, setAddContct] = useState(true);
  const [addSign, setSign] = useState(true);
  const [sigLabel, setSigLabel] = useState(true);
  const [pad, setPad] = useState(false);
  const [itemInput, setItemInput] = useState(true);
  const [itemInputs, setItemInputs] = useState(true);
  const [selectGst, setSelectGst] = useState("NONE");
  const [showGstFields, setShowGstFields] = useState(false);
  const [none, setNone] = useState(true);
  const [igstChecked, setIgstChecked] = useState(false);
  const [cgstSgstChecked, setCgstSgstChecked] = useState(false);
  const [inputValues, setInputValues] = useState({
    igst: "",
    Sgst: "",
    taxType: "",
  });

  const handleTaxTypeChange = (e) => {
    const value = e.target.value;
    setSelectGst(value);
    if (value === "GST") {
      setShowGstFields(true);
    } else {
      setShowGstFields(false);
      setIgstChecked(false);
      setCgstSgstChecked(false);
    }
    setNone(value === "NONE");
    setInputValues({ ...inputValues, taxType: value });
  };

  const handleIgstChange = (e) => {
    setIgstChecked(e.target.checked);
    setInputValues({ ...inputValues, igst: e.target.checked ? "IGST" : "" });
  };

  const handleCgstSgstChange = (e) => {
    setCgstSgstChecked(e.target.checked);
    setInputValues({
      ...inputValues,
      Sgst: e.target.checked ? " SGST" : "",
    });
  };

  const handleGSTValueChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };
  const [modal1, setModal1] = useState({
    itemName: "Items",
    hsn: "HSN/SAC",
    gst: "GST",
    quantity: "Quantity",
    rate: "Rate",
    amount: "Amount",
    cgst: "CGST",
    sgst: "SGST",
    total: "Total",
  });
  const [tableHeaders, setTableHeaders] = useState([
    "Items",
    "HSN/SAC",
    "GST",
    "Quantity",
    "Rate",
    "Amount",
    "CGST",
    "SGST",
    "Total",
  ]);
  const handleSave = () => {
    // setSavedValues((prevValues) => [...prevValues, modal1]);
    setTableHeaders([
      modal1.itemName,
      modal1.hsn,
      modal1.gst,
      modal1.quantity,
      modal1.rate,
      modal1.amount,
      modal1.cgst,
      modal1.sgst,
      modal1.total,
    ]);
  };
  const handleModal1Change = (e) => {
    const { name, value } = e.target;
    setModal1({ ...modal1, [name]: value });
  };

  const [viewsFields, setViewsFields] = useState(false);
  const [uploadFields, setUploadFields] = useState(false);

  const handleClick = () => {
    setViewsFields(true);
  };
  const submitFields = () => {
    setUploadFields(true);
  };

  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<end valid>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const [currencyOptions] = useState([
    { value: "$", label: "USD - US Dollar" },
    { value: "€", label: "EUR - Euro" },
    { value: "GBP", label: "GBP - British Pound" },
    { value: "Lek", label: "ALL - Albanian lek" },
    { value: "¥", label: "JPY - Japanese Yen" },
    { value: "₹", label: "INR - Indian Rupee" },
    { value: "Rp", label: "IDR - Indonesian Rupiah" },
    { value: "VND", label: "VND - Vietnamese Dong" },
    { value: "៛", label: "KHR - Cambodian riel" },
    { value: "AED", label: "AED - United Arab" },
    { value: "₪", label: "ILS - Israeli Shekel" },
    { value: "CNY", label: "CNY - Chinese Yuan" },
    { value: "RUB", label: "RUB - Russian ruble" },
    { value: "CAD", label: "CAD - Canadian dollar" },
    { value: "$", label: "AUD - Australian dollar" },
    { value: "R", label: "ZAR - South rand" },
    { value: "R$", label: "BRL - Brazilian real" },

    { value: "$", label: "MXN - Mexican peso" },

    { value: "KRW", label: "KRW - Korean won" },
    { value: "TRY", label: "TRY - Turkish lira" },
  ]);
  const [inputSets1, setInputSets1] = useState([]);

  const handleAddClick = () => {
    setInputSets1([...inputSets1, { firstName: "", value: "" }]);
  };

  const handleRemoveClick = (index) => {
    const values = [...inputSets1];
    values.splice(index, 1);
    setInputSets1(values);
  };

  const handleChangeClick = (index, field, event) => {
    const values = [...inputSets1];
    values[index][field] = event.target.value;
    setInputSets1(values);
  };
  const [items, setItems] = useState([]);
  const [groups, setGroups] = useState([]);
  const handleAddGroupsClick = () => {
    setGroups([...groups, { id: Date.now() }]);
  };

  const handleAddGroupsRemoveClick = (id) => {
    setGroups(groups.filter((inputSet) => inputSet.id !== id));
  };

  const handleAddItemsClick = () => {
    setItems([...items, { id: Date.now() }]);
  };

  const handleAddItemsRemoveClick = (id) => {
    setItems(items.filter((inputSet) => inputSet.id !== id));
  };
  const [addinputSets, setAddInputSets] = useState([]);
  const handleAddInfoClick = () => {
    setAddInputSets([...addinputSets, { id: Date.now(), name: "", value: "" }]);
  };
  const handleChangeInfoClick = (id, event) => {
    const { name, value } = event.target;
    setAddInputSets(
      addinputSets.map((inputSet) =>
        inputSet.id === id ? { ...inputSet, [name]: value } : inputSet
      )
    );
  };

  const handleAddInfoRemoveClick = (id) => {
    setAddInputSets(addinputSets.filter((inputSet) => inputSet.id !== id));
  };
  const [gstinputSets, setGSTInputSets] = useState([]);

  const handleAddGSTInfoClick = () => {
    setGSTInputSets([
      ...gstinputSets,
      {
        id: Date.now(),
        currency: "₹",
        gst: "",
        name: "",
        rate: "",
        amount: "",
        quantity: "",
        hsb: "",
        cgst: "1.20",
        sgst: "0.12",
        total: "",
      },
    ]);
  };

  const handleInputChange = (id, event) => {
    const { name, value } = event.target;
    setGSTInputSets((prevInputSets) =>
      prevInputSets.map((inputSet) => {
        if (inputSet.id === id) {
          const newInputSet = { ...inputSet, [name]: value };

          const gst = parseFloat(newInputSet.gst) || 0;
          const rate = parseFloat(newInputSet.rate) || 0;
          const quantity = parseFloat(newInputSet.quantity) || 0;

          const amount = quantity * rate;
          const total = amount + (amount * gst) / 100;

          return {
            ...newInputSet,
            amount: amount.toFixed(2),
            total: total.toFixed(2),
          };
        }
        return inputSet;
      })
    );
  };

  const handleAddGSTInfoRemoveClick = (id) => {
    setGSTInputSets((prevInputSets) =>
      prevInputSets.filter((inputSet) => inputSet.id !== id)
    );
  };

  const handleCurrencyChange = (selectedOption) => {
    const newCurrency = selectedOption.value;
    setGSTInputSets((prevInputSets) =>
      prevInputSets.map((inputSet) => {
        const rate = parseFloat(inputSet.rate) || 0;
        const gst = parseFloat(inputSet.gst) || 0;
        const quantity = parseFloat(inputSet.quantity) || 0;
        const amount = rate * quantity;
        const total = amount + (amount * gst) / 100;
        return {
          ...inputSet,
          currency: newCurrency,
          amount: amount.toFixed(2),
          total: total.toFixed(2),
        };
      })
    );
  };
  // const totalAmount = gstinputSets.reduce((acc, curr) => acc + parseFloat(curr.amount || 0), 0).toFixed(2);
  const totalSum = gstinputSets
    .reduce((acc, curr) => acc + parseFloat(curr.total || 0), 0)
    .toFixed(2);

  // Assuming all currency symbols are the same for simplicity
  const currency = gstinputSets.length > 0 ? gstinputSets[0].currency : "₹";

  // due date
  const handleRemoveClicks = () => {
    setDue(due.remove);
  };
  const [due, setDue] = useState(true);
  const handleDuedate = () => {
    setDue(false);
  };

  const handleRemoveAddFile = () => {
    setAddFiles(addfiles.remove);
  };
  const handleSigLabelRemove = () => {
    setSigLabel(sigLabel.remove);
  };
  const handleRemoveContact = () => {
    setAddContct(addContct.remove);
  };
  const handleRemoveAddInfo = () => {
    setAddiInfo(addiInfo.remove);
  };
  const handleRemoveNotes = () => {
    setNotes(nots.remove);
  };
  const handleRemoveItemInput = () => {
    setItemInput(false);
  };
  const handleRemoveItemInputs = () => {
    setItemInputs(false);
  };

  const handleRemoveTerms = () => {
    setTerm(term.remove);
  };
  const handlePadClickes = () => {
    setPad(true);
  };

  const handleTerms = () => {
    setTerm(false);
  };

  const handleNotes = () => {
    setNotes(false);
  };
  const handleAddFiles = () => {
    setAddFiles(false);
  };
  const handleAdditionalInfo = () => {
    setAddiInfo(false);
  };

  const handleAddContact = () => {
    setAddContct(false);
  };
  const handleAddSign = () => {
    setSign(false);
  };
  const handleSigLabel = () => {
    setSigLabel(false);
  };

  const handleRemoveSign = () => {
    setSign(addSign.remove);
  };
  const handlePhoneChange = (value) => {
    setBillToPhone(value);
  };
  const selectCountry = (val) => {
    setBillByCountry(val);
    // Optionally reset region when country changes
    setBillByRegion("");
  };

  const selectClientCountry = (val) => {
    setBillToCountry(val);
    // Optionally reset region when country changes
    setBillToRegion("");
  };
  const selectRegion = (val) => {
    setBillByRegion(val);
  };
  const selectClientRegion = (val) => {
    setBillToRegion(val);
  };
  const selectShippedCountry = (val) => {
    setShippedbyCountry(val);
  };

  const selectShippedToCountry = (val) => {
    setShippedToCountry(val);
    //
  };
  const sigCanvas = useRef();
  const [signatureImage, setSignatureImage] = useState(null);

  const clear = () => {
    sigCanvas.current.clear();
    setSignatureImage(null);
  };

  const upload = () => {
    if (sigCanvas.current.isEmpty()) {
      alert("Please provide a signature before uploading.");
      return;
    }
    const signatureData = sigCanvas.current.toDataURL();
    setSignatureImage(signatureData);
  };

  const [document, setDocument] = useState("");
  const [preview2, setPreview2] = useState(null);
  const handleDocumentUpload = (event) => {
    const file = event.target.files[0];
    setDocument(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview2(reader.result);
    };
    reader.readAsDataURL(file);
  };
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState(null);
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImage(file);

    // Create a preview of the uploaded image
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmits = (e) => {
    e.preventDefault();
    setSubmittedNumber(clnumberValue);
    // Reset form fields if needed
    setClTextValue("");
    setClNumberValue("");
    setSelectValue("");
  };
  const handleRemoveBillClick = () => {
    setSubmitValue(submitValue.remove);
  };
  const handleRemoveBillClicks = () => {
    setSubmittedNumber(submittedNumber.remove);
  };
  const handleTType = () => {
    setTType(true);
  };
  const handleSubType = () => {
    setSubType(true);
  };
  const handleVNumber = () => {
    setVnumber(true);
  };
  const handleVtype = () => {
    setVType(true);
  };
  const handleChallan = () => {
    setChallan(true);
  };
  const handleDoc = () => {
    setDoc(true);
  };
  const handleTransport = () => {
    setIsTransport(true);
  };
  const handlemodelClick = () => {
    setInput(true);
  };
  const handleRemoveModel = () => {
    setInput(input.remove);
  };
  const handleClIEmail = () => {
    setCliEmail(false);
  };

  const handleCLIPhone = () => {
    setCliPhone(false);
  };

  const handleCLIGst = () => {
    setCliGst(false);
  };

  const handleCLIPan = () => {
    setCliPan(false);
  };

  const handleIsEmail = () => {
    setIsEmail(false);
  };

  const handleIsPhone = () => {
    setIsPhone(false);
  };

  const handleIsGst = () => {
    setIsGst(false);
  };

  const handleisPan = () => {
    setIsPan(false);
  };
  const handleSubmitValue = (e) => {
    e.preventDefault();
    setSubmitValue(numberValue);
    setTextValue("");
    setSelects("");
    setNumberValue("");
  };
  const [inputSets2, setInputSets2] = useState([]);

  const handleAddShiptoClick = () => {
    setInputSets2([...inputSets2, { id: Date.now(), name: "", value: "" }]);
  };

  const handleRemoveShiptoClick = (id) => {
    setInputSets2(inputSets2.filter((inputSet) => inputSet.id !== id));
  };

  const handleChangeShiptoClick = (id, event) => {
    const { name, value } = event.target;
    setInputSets2(
      inputSets2?.map((inputSet) =>
        inputSet.id === id ? { ...inputSet, [name]: value } : inputSet
      )
    );
  };
  const [inputSets3, setInputSets3] = useState([]);

  const handleAddShipbyClick = () => {
    setInputSets3([...inputSets3, { id: Date.now(), name: "", value: "" }]);
  };

  const handleRemoveShipbyClick = (id) => {
    setInputSets3(inputSets3.filter((inputSet) => inputSet.id !== id));
  };

  const handleChangeShipbyClick = (id, event) => {
    const { name, value } = event.target;
    setInputSets3(
      inputSets3.map((inputSet) =>
        inputSet.id === id ? { ...inputSet, [name]: value } : inputSet
      )
    );
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.value);
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    const handleFetchInvoice = async () => {
      if (!userId) return;

      try {
        console.log(userId);
        const response = await axios.get(`https://invoiceform-2.onrender.com/api/v1/invoiceByuserId/${userId}`);
        console.log(response, "all InvoiceByUserId");

        const { data } = response.data;

        if (!data) {
          console.warn("No data received from API");
          return;
        }
        const formatDate = (dateString) => {
          if (!dateString) return "";
          const date = new Date(dateString);
          return date.toISOString().split("T")[0]; // Returns YYYY-MM-DD format
        };

        setInvoiceDate(formatDate(data.invoiceDate));
        setDueDate(formatDate(data.dueDate));
        // Set all state variables
        setInvoiceNo(data.invoiceNo);

        setPreview(data.image?.url);
        setBillByBusiness(data.Billbybusiness);
        setBillToBusiness(data.Billtobusiness);
        setBillByAddress(data.Billbyaddress);
        setBillToAddress(data.Billtoaddress);
        setBillByCity(data.Billbycity);
        setBillToCity(data.Billtocity);
        setBillByCountry(data.Billbycountry);
        setBillToCountry(data.Billtocountry);
        setBillByGst(data.Billbygst);
        setBillToGst(data.Billtogst);
        setBillByPhone(data.Billbyphone || "");
        setBillToPhone(data.Billtophone || "");
        setBillByPan(data.Billbypan);
        setBillToPan(data.Billtopan);
        setBillByPostal(data.Billbypostal);
        setBillToPostal(data.Billtopostal);
        setBillByRegion(data.Billbyregion);
        setBillToRegion(data.Billtoregion);
        setShippedByBusiness(data.Shippedbybusiness);
        setShippedToBusiness(data.Shippedtobusiness);
        setShippedByAddress(data.Shippedbyaddress);
        setShippedToAddress(data.Shippedtoaddress);
        setShippedByCity(data.Shippedbycity);
        setShippedToCity(data.Shippedtocity);
        setShippedbyCountry(data.Shippedbycountry);
        setShippedToCountry(data.Shippedtocountry);
        setShippedByState(data.Shippedbystate);
        setShippedToState(data.Shippedtostate);
        setShippedByPostal(data.Shippedbypostal);
        setShippedToPostal(data.Shippedtopostal);
        setEmail(data.email);
        setEmail1(data.email1);
        setAddEmail(data.addemail);
        setContent(data.content || "");
        setAddphone(data.addphone || "");
        setPreview2(data.document?.url);
        setIsChecked(data.addShippingDetails);
        setAddTerm(data.addterm);
        setDescription(data.description);
        setDistance(data.distance);
        setChallanDate(formatDate(data.challanDate));
        setChallanNumber(data.challanNumber);
        setModeTrasport(data.modeTrasport);
        setSupplyType(data.supplyType);
        setTransPortType(data.transportType);
        setVehicleNumber(data.vehicleNumber);
        setVehicleType(data.vehicleType);
        setShippedbycheckbox(data.Shippedbycheckbox);
        setShippedtocheckbox(data.Shippedtocheckbox);
        setShippedtocheckbox1(data.Shippedtocheckbox1);
        setSignatuelable(data.signatuelable);
        setSignatureImage(data.signatureData);

        // Parse and set JSON data
        const parseJsonData = (jsonString) => {
          try {
            return JSON.parse(jsonString[0]);
          } catch (error) {
            console.error("Error parsing JSON data:", error);
            return [];
          }
        };

        setInputSets2(parseJsonData(data.inputSets2));
        setInputSets1(parseJsonData(data.inputSets1));
        setInputSets3(parseJsonData(data.inputSets3));
        setGSTInputSets(parseJsonData(data.gstinputSets));
        setAddInputSets(parseJsonData(data.addinputSets));
      } catch (error) {
        console.error("Error fetching invoice data:", error);
      }
    };

    handleFetchInvoice();
  }, [userId]);

  // fddgf<///////////////////////////////////////////////>>>>>>>>>>>>>>>>>>>
  const handleUpdateInvoice = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    try {
      // const signatureImage = sigCanvas.current.toDataURL();
      // Append other form fields
      const fields = {
        invoiceNo,
        invoiceDate,
        dueDate,

        Billbybusiness,
        Billtobusiness,
        Billbyaddress,
        Billtoaddress,
        Billbycity,
        Billtocity,
        Billbycountry,
        Billtocountry,
        Billbygst,
        Billtogst,
        Billbyphone,
        Billtophone,
        Billbypan,
        Billtopan,
        Billbypostal,
        Billtopostal,
        Billbyregion,
        Billtoregion,
        Shippedbybusiness,
        Shippedtobusiness,
        Shippedbystate,
        Shippedtostate,
        Shippedbyaddress,
        Shippedtoaddress,
        Shippedbycountry,
        Shippedtocountry,
        Shippedbypostal,
        Shippedtopostal,
        signatuelable,
        description,
        email,
        email1,
        addemail,
        distance,
        content,
        addphone,
        addterm,
        challanDate,
        challanNumber,
        modeTrasport,
        transportType,
        vehicleNumber,
        vehicleType,
        supplyType,
        photo: image,
        document: document,
      };

      Object.keys(fields).forEach((key) => {
        if (fields[key]) formData.append(key, fields[key]);
      });

      // Handle complex data structures with mapping
      const complexFields = {
        inputSets1: inputSets1.map((field) => ({
          firstName: field.firstName,
          value: field.value,
        })),
        inputSets2: inputSets2.map((field) => ({
          name: field.name,
          value: field.value,
        })),
        inputSets3: inputSets3.map((field) => ({
          name: field.name,
          value: field.value,
        })),
        addinputSets: addinputSets.map((field) => ({
          name: field.name,
          value: field.value,
        })),
        gstinputSets: gstinputSets.map((field) => ({
          name: field.name,
          hsb: field.hsb,
          gst: field.gst,
          quantity: field.quantity,
          rate: field.rate,
          cgst: field.cgst,
          sgst: field.sgst,
          currency: field.currency,
          amount: field.amount,
          total: field.total,
        })),
      };
      formData.append("addShippingDetails", isChecked);
      formData.append("Shippedbycheckbox", Shippedbycheckbox);
      formData.append("Shippedtocheckbox", Shippedtocheckbox);
      // formData.append("saveToClientDetails", Shippedtocheckbox1);
      formData.append("signatureData", signatureImage);
      Object.keys(complexFields).forEach((key) => {
        if (complexFields[key] && complexFields[key].length > 0) {
          formData.append(key, JSON.stringify(complexFields[key]));
        }
      });

      // Ensure image and document are appended as files if they exist

      // formData.append("photo", image);

      // formData.append("document", document);

      const response = await axios.put(
        `https://invoiceform-2.onrender.com/api/v1/updateByUserId/${userId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response, "invoice updated");
      alert("Invoice data updated successfully!");

      // setImage({ url: response.data.image.url });
      // setDocument({ url: response.data.document.url });

      // setImage({url})

      navigate(`/dashboard/user/getInvoiceByUserId/${userId}`);
    } catch (error) {
      console.log(error, "updated message");
      alert("Error uploading invoice data. Please try again later.");
    }
  };

  return (
    <>
      {/* <Navigate /> */}
      <div className="kjnpBp gAqflM dLJlQK dyGQst">
        <div className="css-1jx43s9 formd">
          <form className="">
            <div className=" css-7hx0rn css-s4a3kf ">
              <span name="invoiceTitle" className="sc-EHOje kdljob">
                Invoice
              </span>
            </div>

            <div className="bOoGEV">
              <div className="lkWYBX">
                <div className="css-dqaqgw">
                  <div className="css-lkfkdq">
                    <input
                      type="text"
                      placeholder="Invoice No"
                      defaultValue="Invoice No"
                      className="inpt"
                    />
                    <input
                      type="text"
                      placeholder="Invoice No"
                      className="inpt"
                      style={{ width: "8em" }}
                      name="invoiceNo"
                      value={invoiceNo}
                      onChange={(e) => setInvoiceNo(e.target.value)}
                    />
                  </div>
                  <div className="css-offwra hmbmoI react-datepicker-wrapper">
                    <div className="react-datepicker__input-container css-lkfkdq">
                      <input
                        type="text"
                        defaultValue="Invoice Date"
                        className="inpt "
                      />
                      <input
                        type="date"
                        placeholder="Enter date"
                        className="inptS"
                        name="invoiceDate"
                        value={invoiceDate}
                        onChange={(e) => setInvoiceDate(e.target.value)}
                      />
                    </div>
                  </div>
                  {due && (
                    <div className="css-offwra cfOcjU">
                      <input
                        type="text"
                        defaultValue="Due Date"
                        className="inpt"
                      />
                      <input
                        type="date"
                        name="dueDate"
                        className="inptS"
                        // style={{ maxWidth: "30em" }}
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                      />
                      <p className="ml-20" onClick={() => handleRemoveClicks()}>
                        &times;
                      </p>
                    </div>
                  )}
                  {!due && (
                    <div
                      className="flex items-center mt-3 lg:mt-0 cursor-pointer"
                      onClick={handleDuedate}
                    >
                      <p>
                        <CgAddR className="w-5 h-5" />
                      </p>{" "}
                      Add Valid Till Date
                    </div>
                  )}
                  {/* className="lg:flex lg:gap-30 mt-3 lg:mt-0 lg:gap-28" */}
                  <>
                    <div className="lg:gap-30 mt-3 lg:mt-0 lg:gap-28">
                      {inputSets1.length === 0 && (
                        <div
                          className="flex items-center mt-3 lg:mt-0 mr-20 cursor-pointer"
                          onClick={handleAddClick}
                        >
                          <p>
                            <CgAddR className="w-5 h-5" />
                          </p>
                          Add More Fields
                        </div>
                      )}
                      {inputSets1.map((inputSet, index) => (
                        <div key={index}>
                          <div className="flex">
                            <div className="mr-10">
                              <input
                                type="text"
                                placeholder="Field Name"
                                name="firstName"
                                value={inputSet.firstName}
                                onChange={(e) =>
                                  handleChangeClick(index, "firstName", e)
                                }
                              />
                              <input
                                className="mt-2"
                                type="text"
                                placeholder="Value"
                                name="value"
                                value={inputSet.value}
                                onChange={(e) =>
                                  handleChangeClick(index, "value", e)
                                }
                              />
                            </div>
                            <button
                              className="remove-btn"
                              onClick={() => handleRemoveClick(index)}
                            >
                              &times;
                            </button>
                          </div>
                          {index === inputSets1.length - 1 && (
                            <div
                              className="flex items-center mt-3 lg:mt-0 mr-20 cursor-pointer"
                              onClick={handleAddClick}
                            >
                              <p>
                                <CgAddR className="w-5 h-5" />
                              </p>
                              Add More Fields
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </>
                </div>
              </div>
              <div className="max-w-md mx-auto">
                <div className="mb-4">
                  <label
                    htmlFor="image"
                    className="bg-slate-50 flex items-center justify-center p-4 rounded-lg cursor-pointer hover:bg-slate-100 transition-colors"
                  >
                    <PiImageSquareThin className="w-8 h-8 mr-2" />
                    <span>Add Business Logo</span>
                    <input
                      type="file"
                      name="image"
                      id="image"
                      accept="image/*"
                      onChange={handleImageUpload}
                      hidden
                      required
                    />
                  </label>
                </div>
                {preview && (
                  <div className="mt-3">
                    <img
                      src={preview}
                      alt="Preview"
                      className="w-full h-auto max-h-40 object-contain rounded-lg"
                    />
                  </div>
                )}
              </div>
            </div>
          </form>
          <div className="container mx-auto px-4">
            <div className="lg:flex lg:justify-center lg:space-x-4">
              <div className="lg:w-1/2 bg-slate-100 mt-2 p-4 rounded-lg mb-4 lg:mb-0">
                <form className="">
                  <div className=" flex gap-2 mt-2">
                    <EditableText initialText="Billed By" />
                    <p className=""> (your Detail)</p>
                  </div>

                  <CountryDropdown
                    value={Billbycountry}
                    className=" inptS "
                    style={{
                      width: "90%",
                    }}
                    onChange={(val) => selectCountry(val)}
                  />

                  {/* <div> */}
                  <input
                    type="text"
                    className=" inptS "
                    name="Billbybusiness"
                    value={Billbybusiness}
                    onChange={(e) => setBillByBusiness(e.target.value)}
                    placeholder="Your Business/Freelancer Nan"
                    style={{
                      width: "90%",
                      marginLeft: "1em",
                      marginTop: "22px",
                    }}
                  />

                  <div style={{ display: "flex" }}>
                    {isEmail && (
                      <input
                        type="text"
                        className=" inptS"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        // defaultValue="email@example.com"
                        placeholder="Your email(optional)"
                        style={{
                          maxWidth: "18em",
                          width: "100%",
                          marginLeft: "1em",
                          marginTop: "20px",
                        }}
                      />
                    )}
                    <div>
                      {isPhone && (
                        <PhoneInput
                          // country={"us"}

                          value={Billbyphone}
                          onChange={(Billbyphone) =>
                            setBillByPhone(Billbyphone)
                          }
                          placeholder="Enter phone number"
                          style={{
                            width: "100%",
                            maxWidth: "10em",
                            marginLeft: "1em",
                            marginTop: "20px",
                          }}
                          defaultCountry="US"
                          international
                          countryCallingCodeEditable={false}
                        />
                      )}
                    </div>
                  </div>

                  <div style={{ display: "flex" }}>
                    {isGst && (
                      <input
                        type="text"
                        className=" inptS"
                        name="Billbygst"
                        value={Billbygst}
                        onChange={(e) => setBillByGst(e.target.value)}
                        placeholder="Your GSTIN(optional)"
                        style={{
                          width: "60%",
                          marginLeft: "1em",
                          marginTop: "20px",
                        }}
                      />
                    )}
                    <div>
                      {isPan && (
                        <input
                          type="text"
                          name="Billbypan"
                          value={Billbypan}
                          onChange={(e) => setBillByPan(e.target.value)}
                          placeholder="Your PAN (optional)"
                          className="inptS"
                          style={{
                            width: "90%",
                            marginTop: "20px",
                            marginRight: "50px",
                          }}
                        />
                      )}
                    </div>
                  </div>

                  <input
                    type="text"
                    className=" inptS"
                    name="Billbyaddress"
                    value={Billbyaddress}
                    onChange={(e) => setBillByAddress(e.target.value)}
                    placeholder="Address(optional)"
                    style={{
                      width: "90%",
                      marginTop: "20px",
                      marginLeft: "1em",
                    }}
                  />
                  <div style={{ display: "flex" }}>
                    <input
                      type="text"
                      className=" inptS"
                      name="Billbycity"
                      value={Billbycity}
                      onChange={(e) => setBillByCity(e.target.value)}
                      placeholder="City(optional)"
                      style={{
                        width: "60%",
                        marginLeft: "1em",
                        marginTop: "20px",
                      }}
                    />
                    <div>
                      <input
                        type="text"
                        name="Billbypostal"
                        value={Billbypostal}
                        onChange={(e) => setBillByPostal(e.target.value)}
                        placeholder="Postal Code/Zip"
                        className="inptS"
                        style={{
                          width: "90%",
                          marginTop: "20px",
                          marginRight: "50px",
                        }}
                      />
                    </div>
                  </div>
                  <RegionDropdown
                    country={Billbycountry}
                    className="inptS"
                    style={{
                      width: "90%",
                    }}
                    value={Billbyregion}
                    onChange={(val) => selectRegion(val)}
                  />
                  {/* </> */}

                  <div style={{ display: "flex  ", cursor: "pointer" }}>
                    {!isEmail && (
                      <div
                        onClick={handleIsEmail}
                        style={{ display: "flex  ", marginTop: "1em" }}
                      >
                        <p style={{ marginLeft: "1em" }}>
                          <AiOutlineMail
                            style={{ margin: "10px", color: "indigo" }}
                          />
                        </p>
                        Add Email
                      </div>
                    )}

                    {!isPhone && (
                      <div
                        onClick={handleIsPhone}
                        style={{ display: "flex  ", marginTop: "1em" }}
                      >
                        <p style={{ marginLeft: "10px" }}>
                          <AiOutlinePhone
                            style={{ margin: "10px", color: "indigo" }}
                          />
                        </p>{" "}
                        Add Phone Number
                      </div>
                    )}
                  </div>

                  <div style={{ display: "flex", cursor: "pointer" }}>
                    {!isGst && (
                      <div
                        onClick={handleIsGst}
                        style={{ display: "flex", marginTop: "1em" }}
                      >
                        <p style={{ marginLeft: "1em" }}>
                          <CgAddR style={{ margin: "10px", color: "indigo" }} />
                        </p>
                        Add GST
                      </div>
                    )}
                    {!isPan && (
                      <div
                        onClick={handleisPan}
                        style={{ display: "flex", marginTop: "1em" }}
                      >
                        <p style={{ marginLeft: "1em" }}>
                          <CgAddR style={{ margin: "10px", color: "indigo" }} />
                        </p>
                        Add PAN
                      </div>
                    )}
                  </div>

                  <div>
                    {submitValue && (
                      <>
                        <div className="flex mr-5">
                          <EditableText initialText={submitValue} />
                          <input
                            type="text"
                            class="form-control w-50 mt-5 mr-2"
                            placeholder="value"
                          />

                          <button
                            className="remove-btn ml-9"
                            onClick={() => handleRemoveBillClick()}
                          >
                            &times;
                          </button>
                        </div>
                      </>
                    )}
                    <button
                      type="button"
                      className="btn btn-primary "
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Add Custom Fields
                    </button>

                    <div
                      className="modal fade"
                      id="exampleModal"
                      tabindex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog " style={{ width: "500em" }}>
                        <div className="modal-content">
                          <div className="modal-header">
                            <h1
                              className="modal-title fs-5"
                              id="exampleModalLabel"
                            >
                              Add Custom Field
                            </h1>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="modal-body">
                            <p
                              className="text-left
                        "
                            >
                              Field name
                            </p>
                            <p className="text-2x5 font-thin">
                              Tha name of tha field that will only be used and
                              shown internally
                            </p>
                            <div class="mt-2">
                              <input
                                type="text"
                                value={textValue}
                                onChange={(e) => setTextValue(e.target.value)}
                                className="form-control"
                              />
                            </div>
                            <div className="mt-3">
                              <p className="text-left">Field Type</p>
                              <>
                                <select
                                  className="form-select form-select-sm mt-2"
                                  aria-label="Small select example"
                                  value={slects}
                                  onChange={(e) => setSelects(e.target.value)}
                                >
                                  <option selected>Single Line Text</option>
                                  <option value={1}>Multi Line Text</option>
                                  <option value={2}>Number</option>
                                  <option value={3}>Date</option>
                                  <option value={4}>Currency</option>
                                  <option value={5}>Single-select:Radio</option>
                                  <option value={6}>
                                    Multi-select:Checkboxes
                                  </option>
                                  <option value={7}>
                                    Single Select Dropdown
                                  </option>
                                  <option value={8}>
                                    Multi Select Dropdown
                                  </option>
                                  <option value={9}>Boolean</option>
                                  <option value={10}>Email</option>
                                  <option value={11}>Phone</option>
                                  <option value={12}>URL</option>
                                </select>
                              </>
                            </div>
                            <div className="mt-3">
                              <p className="text-left">Label</p>
                              <input
                                type="text"
                                value={numberValue}
                                onChange={(e) => setNumberValue(e.target.value)}
                                class="form-control mt-2"
                              />
                            </div>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-primary"
                              onClick={handleSubmitValue}
                            >
                              Save changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <>
                <div className="lg:w-1/2 bg-slate-100 p-4 rounded-lg">
                  <form className="">
                    <div className=" flex  mt-2 gap-2">
                      <EditableText initialText="Billed To" />
                      <p className=""> (Client Details)</p>
                    </div>
                    <CountryDropdown
                      value={Billtocountry}
                      className=" inptS "
                      style={{ width: "90%" }}
                      onChange={(val) => selectClientCountry(val)}
                    />
                    <div className="inpcont">
                      <input
                        type="text"
                        className=" inptS "
                        name="Billtobusiness"
                        value={Billtobusiness}
                        onChange={(e) => setBillToBusiness(e.target.value)}
                        placeholder="Client's business name(Required)"
                        required
                        style={{
                          width: "90%",
                          marginLeft: "1em",

                          marginTop: "6px",
                        }}
                      />

                      <div style={{ display: "flex" }}>
                        {cliEmail && (
                          <input
                            type="text"
                            className=" inptS"
                            name="email1"
                            value={email1}
                            onChange={(e) => setEmail1(e.target.value)}
                            placeholder="Client email (optional)"
                            style={{
                              maxWidth: "16em",
                              width: "100%",
                              marginTop: "20px",
                              marginLeft: "10px",
                            }}
                          />
                        )}
                        <div>
                          {cliPhone && (
                            <PhoneInput
                              className="inptS"
                              style={{
                                maxWidth: "11em",
                                width: "100%",
                                marginLeft: "1em",
                                marginTop: "20px",
                              }}
                              value={Billtophone}
                              onChange={handlePhoneChange}
                              defaultCountry="US"
                              international
                              countryCallingCodeEditable={false}
                            />
                          )}
                        </div>
                      </div>

                      <div style={{ display: "flex" }}>
                        {cliGst && (
                          <input
                            type="text"
                            className=" inptS"
                            name="Billtogst"
                            value={Billtogst}
                            onChange={(e) => setBillToGst(e.target.value)}
                            placeholder="Client's GSTIN (optional)"
                            style={{
                              width: "50%",
                              marginTop: "20px",
                              marginLeft: "10px",
                            }}
                          />
                        )}
                        <div>
                          {cliPan && (
                            <input
                              type="text"
                              name="Billtopan"
                              value={Billtopan}
                              onChange={(e) => setBillToPan(e.target.value)}
                              placeholder="Client's PAN (optional)"
                              className="inptS"
                              style={{
                                width: "85%",
                                marginTop: "20px",
                              }}
                            />
                          )}
                        </div>
                      </div>

                      <input
                        type="text"
                        className=" inptS"
                        name="Billtoaddress"
                        value={Billtoaddress}
                        onChange={(e) => setBillToAddress(e.target.value)}
                        placeholder="Address(optional)"
                        style={{
                          width: "90%",
                          marginLeft: "1em",
                          marginTop: "10px",
                        }}
                      />
                      <div style={{ display: "flex" }}>
                        <input
                          type="text"
                          className=" inptS"
                          name="Billtocity"
                          value={Billtocity}
                          onChange={(e) => setBillToCity(e.target.value)}
                          placeholder="City(optional)"
                          style={{
                            width: "50%",
                            marginTop: "20px",
                            marginLeft: "10px",
                          }}
                        />
                        <div>
                          <input
                            type="text"
                            name="Billtopostal"
                            value={Billtopostal}
                            onChange={(e) => setBillToPostal(e.target.value)}
                            placeholder="Postal Code/Zip"
                            className="inptS"
                            style={{
                              width: "85%",
                              marginTop: "20px",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <RegionDropdown
                      country={Billtocountry}
                      className="inptS mt-3"
                      style={{
                        width: "90%",
                      }}
                      value={Billtoregion}
                      onChange={(val) => selectClientRegion(val)}
                    />

                    <div style={{ display: "flex  ", cursor: "pointer" }}>
                      {!cliEmail && (
                        <div
                          style={{ display: "flex  ", marginTop: "1em" }}
                          onClick={handleClIEmail}
                        >
                          <p style={{ marginLeft: "1em" }}>
                            <AiOutlineMail
                              style={{ margin: "10px", color: "indigo" }}
                            />
                          </p>
                          Add Email
                        </div>
                      )}
                      {!cliPhone && (
                        <div
                          style={{ display: "flex  ", marginTop: "1em" }}
                          onClick={handleCLIPhone}
                        >
                          <p style={{ marginLeft: "10px" }}>
                            <AiOutlinePhone
                              style={{ margin: "10px", color: "indigo" }}
                            />
                          </p>{" "}
                          Add Phone Number
                        </div>
                      )}
                    </div>
                    <div style={{ display: "flex", cursor: "pointer" }}>
                      {!cliGst && (
                        <div
                          style={{ display: "flex  ", marginTop: "1em" }}
                          onClick={handleCLIGst}
                        >
                          <p style={{ marginLeft: "1em" }}>
                            <CgAddR
                              style={{ margin: "10px", color: "indigo" }}
                            />
                          </p>
                          Add GST
                        </div>
                      )}
                      {!cliPan && (
                        <div
                          style={{ display: "flex  ", marginTop: "1em" }}
                          onClick={handleCLIPan}
                        >
                          <p style={{ marginLeft: "1em" }}>
                            <CgAddR
                              style={{ margin: "10px", color: "indigo" }}
                            />
                          </p>
                          Add PAN
                        </div>
                      )}
                    </div>
                    <div>
                      {submittedNumber && (
                        <>
                          <div className="flex  ">
                            <EditableText initialText={submittedNumber} />
                            <input
                              type="text"
                              class="form-control w-50 mt-5 mr-2"
                              placeholder="value"
                            />

                            <button
                              className="remove-btn ml-9"
                              onClick={() => handleRemoveBillClicks()}
                            >
                              &times;
                            </button>
                          </div>
                        </>
                      )}
                      {!input && (
                        <button
                          type="button"
                          onClick={handlemodelClick}
                          className="btn btn-primary mt-3"
                        >
                          Add Custom Fields
                        </button>
                      )}
                      {input && (
                        <div className="max-w-md mx-auto mt-0 p-6 bg-white rounded-lg shadow-lg">
                          <form>
                            <div className="mb-4">
                              <label className="block text-gray-700 mb-2">
                                Text Input
                              </label>
                              <input
                                type="text"
                                value={cltextValue}
                                onChange={(e) => setClTextValue(e.target.value)}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                                placeholder="Enter text"
                              />
                            </div>
                            <div className="mb-4">
                              <label className="block text-gray-700 mb-2">
                                Number Input
                              </label>
                              <input
                                type="text"
                                value={clnumberValue}
                                onChange={(e) =>
                                  setClNumberValue(e.target.value)
                                }
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                                placeholder="Enter number"
                              />
                            </div>
                            <div className="mb-4">
                              <label className="block text-gray-700 mb-2">
                                Select Option
                              </label>
                              <select
                                value={selectValue}
                                onChange={(e) => setSelectValue(e.target.value)}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                              >
                                <option selected>Single Line Text</option>
                                <option value={1}>Multi Line Text</option>
                                <option value={2}>Number</option>
                                <option value={3}>Date</option>
                                <option value={4}>Currency</option>
                                <option value={5}>Single-select:Radio</option>
                                <option value={6}>
                                  Multi-select:Checkboxes
                                </option>
                                <option value={7}>
                                  Single Select Dropdown
                                </option>
                                <option value={8}>Multi Select Dropdown</option>
                                <option value={9}>Boolean</option>
                                <option value={10}>Email</option>
                                <option value={11}>Phone</option>
                                <option value={12}>URL</option>
                              </select>
                            </div>
                            <div>
                              <button
                                type="submit"
                                onClick={handleSubmits}
                                className="w-full px-4 py-2 font-bold text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                              >
                                Save
                              </button>
                            </div>
                            <div>
                              <button
                                type="button"
                                className="btn btn-danger"
                                onClick={handleRemoveModel}
                              >
                                close
                              </button>
                            </div>
                          </form>
                        </div>
                      )}
                    </div>
                  </form>
                </div>
              </>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-start m-4">
            <label className="sm:mr-80 mb-4 sm:mb-0">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              Add Shipping Details
            </label>
          </div>
          {isChecked && (
            <div className="">
              <div className="row ship">
                <div
                  className="col-sm-5   shipping bg-slate-100"
                  style={{ maxHeight: "90em" }}
                >
                  <div className="mt-3 heading">
                    <EditableText initialText="Shipped Form" />
                  </div>
                  <form className=" p-3">
                    <label className="lg:mr-28">
                      <input
                        type="checkbox"
                        name="Shippedbycheckbox"
                        checked={Shippedbycheckbox}
                        onChange={handleShippedbycheckbox}
                      />
                      Same as your business address
                    </label>

                    <div className="inpcont">
                      <input
                        type="text"
                        className="inptS w-full"
                        name="Shippedbybusiness"
                        value={Shippedbybusiness}
                        onChange={(e) => setShippedByBusiness(e.target.value)}
                        placeholder="Business/Freelancer Name"
                        style={{
                          width: "100%",
                          maxWidth: "20em",
                          marginRight: "100px",
                          marginTop: "10px",
                        }}
                      />
                      <CountryDropdown
                        className="inptS w-full"
                        style={{
                          width: "100%",
                          maxWidth: "20em",
                          marginRight: "100px",
                          marginTop: "10px",
                        }}
                        name="shippedbycountry"
                        value={Shippedbycountry}
                        onChange={(val) => selectShippedCountry(val)}
                      />
                      <div>
                        <input
                          type="text"
                          className="inptS w-full md:w-auto"
                          name="Shippedbyaddress"
                          value={Shippedbyaddress}
                          onChange={(e) => setShippedByAddress(e.target.value)}
                          placeholder="Address(optional)"
                          style={{
                            width: "100%",
                            maxWidth: "20em",
                            marginRight: "100px",
                            marginTop: "10px",
                          }}
                        />
                      </div>

                      <div className="flex  md:flex-nowrap">
                        <input
                          type="text"
                          className="inptS w-full md:w-auto"
                          name="Shippedbycity"
                          value={Shippedbycity}
                          onChange={(e) => setShippedByCity(e.target.value)}
                          placeholder="City(optional)"
                          style={{
                            // width: "100%",
                            // maxWidth: "20em",
                            marginTop: "10px",
                          }}
                        />
                        <div>
                          <input
                            type="text"
                            name="Shippedbypostal"
                            value={Shippedbypostal}
                            onChange={(e) => setShippedByPostal(e.target.value)}
                            placeholder="Postal Code/Zip"
                            className="inptS "
                            style={{
                              // width: "100%",
                              // maxWidth: "30em",
                              marginRight: "50px",
                              marginTop: "10px",
                            }}
                          />
                        </div>
                      </div>
                      <div>
                        <input
                          type="text"
                          name="Shippedbystate"
                          value={Shippedbystate}
                          onChange={(e) => setShippedByState(e.target.value)}
                          className="inptS w-full md:w-auto"
                          placeholder="State(optional)"
                          style={{
                            width: "100%",
                            maxWidth: "20em",
                            marginRight: "100px",
                            marginTop: "10px",
                          }}
                        />
                      </div>
                      <div className=" lg:gap-30 mt-3 lg:mt-0 lg:gap-28">
                        {inputSets2?.length === 0 && (
                          // <button onClick={handleAddClick}>Add More Fields</button>
                          <div
                            className="flex items-center mt-3 lg:mt-0 mr-20 cursor-pointer"
                            onClick={handleAddShiptoClick}
                          >
                            <p>
                              <CgAddR className="w-5 h-5" />
                            </p>{" "}
                            Add More Fields
                          </div>
                        )}
                        {inputSets2?.map((inputSet, index) => (
                          <div key={inputSet.id}>
                            <div className="flex">
                              <input
                                type="text"
                                className="inptS"
                                placeholder="Field Name"
                                name="name"
                                value={inputSet.name}
                                onChange={(e) =>
                                  handleChangeShiptoClick(inputSet.id, e)
                                }
                              />
                              <input
                                type="text"
                                className="inptS"
                                placeholder="Value"
                                name="value"
                                value={inputSet.value}
                                onChange={(e) =>
                                  handleChangeShiptoClick(inputSet.id, e)
                                }
                              />
                              <button
                                className="remove-btn"
                                onClick={() =>
                                  handleRemoveShiptoClick(inputSet.id)
                                }
                              >
                                &times;
                              </button>
                            </div>
                            {index === inputSets2?.length - 1 && (
                              <div
                                className="flex items-center mt-3 lg:mt-0 mr-20 cursor-pointer"
                                onClick={handleAddShiptoClick}
                              >
                                <p>
                                  <CgAddR className="w-5 h-5" />
                                </p>{" "}
                                Add More Fields
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </form>
                </div>
                <div
                  className="col-md-5 shipping bg-slate-100"
                  style={{ maxHeight: "90em" }}
                >
                  <div className="mt-2 heading">
                    <EditableText initialText="Shipped To" />
                  </div>

                  {/* <<<<<< drop down >>>>>>>>>>>>>>>>>>>>>>>> */}

                  <div>
                    <button
                      type="button"
                      className="dropdown-item"
                      style={{
                        background: "indigo",
                        color: "wheat",
                        width: "90%",
                        marginLeft: "25px",
                        marginTop: "2em",
                        textAlign: "center",
                      }}
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                    >
                      Add New Shipping Detail
                    </button>

                    <div
                      className="modal fade"
                      id="staticBackdrop"
                      data-bs-backdrop="static"
                      data-bs-keyboard="false"
                      tabindex="-1"
                      aria-labelledby="staticBackdropLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h1
                              className="modal-title fs-5"
                              id="staticBackdropLabel"
                            >
                              Shippting To
                            </h1>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="modal-body">
                            <>
                              <div className="mb-3">
                                <label
                                  htmlFor="formGroupExampleInput"
                                  className="form-label"
                                  style={{ marginRight: "30em" }}
                                >
                                  Name*
                                </label>
                                <input
                                  type="text"
                                  name="Shippedtobusiness"
                                  value={Shippedtobusiness}
                                  onChange={(e) =>
                                    setShippedToBusiness(e.target.value)
                                  }
                                  className="form-control"
                                  id="formGroupExampleInput"
                                  placeholder="Name"
                                />
                              </div>
                              <div>
                                <label style={{ marginRight: "20em" }}>
                                  Select Country*
                                </label>
                                <CountryDropdown
                                  value={Shippedtocountry}
                                  className=" inptS "
                                  style={{
                                    width: "95%",
                                    marginRight: "100px",
                                    marginTop: "10px",
                                  }}
                                  onChange={(val) =>
                                    selectShippedToCountry(val)
                                  }
                                />
                              </div>
                              <div>
                                <div className="mb-3">
                                  <label
                                    htmlFor="formGroupExampleInput"
                                    className="form-label"
                                    style={{ marginRight: "30em" }}
                                  >
                                    State*
                                  </label>
                                  <input
                                    type="text"
                                    name="Shippedtostate"
                                    value={Shippedtostate}
                                    onChange={(e) =>
                                      setShippedToState(e.target.value)
                                    }
                                    className="form-control"
                                    id="formGroupExampleInput"
                                    placeholder="State"
                                  />
                                </div>
                              </div>
                              <div>
                                <div className="mb-3">
                                  <label
                                    htmlFor="formGroupExampleInput"
                                    className="form-label"
                                    style={{ marginRight: "30em" }}
                                  >
                                    City
                                  </label>
                                  <input
                                    type="text"
                                    name="Shippedtocity"
                                    value={Shippedtocity}
                                    onChange={(e) =>
                                      setShippedToCity(e.target.value)
                                    }
                                    className="form-control"
                                    id="formGroupExampleInput"
                                    placeholder="City"
                                  />
                                </div>
                              </div>
                              <div>
                                <div className="mb-3">
                                  <label
                                    htmlFor="formGroupExampleInput"
                                    className="form-label"
                                    style={{ marginRight: "20em" }}
                                  >
                                    Street Address*
                                  </label>
                                  <input
                                    type="text"
                                    name="Shippedbyaddress"
                                    value={Shippedtoaddress}
                                    onChange={(e) =>
                                      setShippedToAddress(e.target.value)
                                    }
                                    className="form-control"
                                    id="formGroupExampleInput"
                                    placeholder="Street Address"
                                  />
                                </div>
                              </div>
                              <div className="modal-body">
                                <div className="mb-3">
                                  <label
                                    htmlFor="formGroupExampleInput"
                                    className="form-label"
                                    style={{ marginRight: "17em" }}
                                  >
                                    Postat Code/Zip Code
                                  </label>
                                  <input
                                    type="text"
                                    name="Shippedtopostal"
                                    value={Shippedtopostal}
                                    className="form-control"
                                    id="formGroupExampleInput"
                                    placeholder="Postal Code/Zip Code"
                                  />
                                </div>
                              </div>
                              <div className="modal-body">
                                <div className="mb-">
                                  <label
                                    htmlFor="formGroupExampleInput"
                                    className="form-label"
                                    style={{ marginRight: "20em" }}
                                  >
                                    Business GSTIN
                                  </label>
                                  <input
                                    type="text"
                                    name="Shippedtogst"
                                    value={Shippedtogst}
                                    onChange={(e) =>
                                      setShippedToGst(e.target.value)
                                    }
                                    className="form-control"
                                    id="formGroupExampleInput"
                                    placeholder="Business GSTIN (Optional)"
                                  />
                                </div>
                              </div>

                              <div className="flex  mt-2 ">
                                <p className="">
                                  <CgAddR
                                    color="#c084fc"
                                    style={{
                                      marginRight: "4px",
                                      width: "20px",
                                      height: "20px",
                                    }}
                                  />
                                </p>
                                Add More Fields
                              </div>
                            </>
                          </div>

                          <div className="modal-footer">
                            <button
                              type="button"
                              className="indigo"
                              style={{
                                width: "100%",
                                height: "20%",
                                background: "indigo",
                                color: "wheat",
                              }}
                            >
                              Add Shipping Detail
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <form className="p-3 px-3 py-3   ">
                    <div className="lg:mr-40">
                      <label>
                        <input
                          type="checkbox"
                          name="Shippedtocheckbox"
                          checked={Shippedtocheckbox}
                          onChange={handleShippedtocheckbox}
                        />
                        Same as client's address
                      </label>
                    </div>
                    <div className="inpcont">
                      <input
                        type="text"
                        className=" inptS "
                        name="Shippedtobusiness"
                        value={Shippedtobusiness}
                        onChange={(e) => setShippedToBusiness(e.target.value)}
                        placeholder="Client's business name"
                        style={{
                          width: "95%",
                          marginRight: "100px",
                          marginTop: "6px",
                        }}
                      />
                      <CountryDropdown
                        className="inptS w-full"
                        style={{
                          width: "100%",
                          maxWidth: "20em",
                          marginRight: "100px",
                          marginTop: "10px",
                        }}
                        name="shippedtocountry"
                        value={Shippedtocountry}
                        onChange={(val) => selectShippedToCountry(val)}
                      />
                      <div>
                        <input
                          type="text"
                          className=" inptS "
                          name="Shippedtoaddress"
                          value={Shippedtoaddress}
                          onChange={(e) => setShippedToAddress(e.target.value)}
                          placeholder="Address(optional)"
                          style={{
                            width: "95%",
                            marginRight: "100px",
                            marginTop: "10px",
                          }}
                        />
                      </div>

                      <div style={{ display: "flex" }}>
                        <input
                          type="text"
                          name="Shippedtocity"
                          value={Shippedtocity}
                          onChange={(e) => setShippedToCity(e.target.value)}
                          className=" inptS"
                          // defaultValue="email@example.com"

                          placeholder="City(optional)"
                          style={{
                            width: "70%",
                            // marginRight: "100px",
                          }}
                        />
                        <div>
                          <input
                            type="text"
                            name="Shippedtopostal"
                            value={Shippedtopostal}
                            onChange={(e) => setShippedToPostal(e.target.value)}
                            placeholder="Postal Code/Zip"
                            className="inptS"
                            style={{
                              width: "90%",
                              marginRight: "50px",
                            }}
                          />
                        </div>
                      </div>
                      <div>
                        <input
                          type="text"
                          className=" inptS "
                          name="Shippedtostate"
                          value={Shippedtostate}
                          onChange={(e) => setShippedToState(e.target.value)}
                          // defaultValue="email@example.com"

                          placeholder="State(optional)"
                          style={{
                            width: "95%",
                            marginRight: "100px",
                            marginTop: "10px",
                          }}
                        />
                      </div>
                      <div className=" lg:mr-40">
                        <label className="md:mr-20">
                          <input
                            type="checkbox"
                            name="Shippedtocheckbox1"
                            checked={Shippedtocheckbox1}
                            onChange={handleShippedtocheckbox1}
                          />
                          Save to Client Details
                        </label>
                      </div>
                      <div>
                        {inputSets3?.length === 0 && (
                          <div
                            className="flex items-center mt-3 lg:mt-0 mr-20 cursor-pointer"
                            onClick={handleAddShipbyClick}
                          >
                            <p>
                              <CgAddR className="w-5 h-5" />
                            </p>{" "}
                            Add More Fields
                          </div>
                        )}
                        {inputSets3?.map((inputSet, index) => (
                          <div key={inputSet.id}>
                            <div className="flex">
                              <input
                                type="text"
                                className="inptS"
                                placeholder="Field Name"
                                name="name"
                                value={inputSet.name}
                                onChange={(e) =>
                                  handleChangeShipbyClick(inputSet.id, e)
                                }
                              />
                              <input
                                type="text"
                                className="inptS"
                                placeholder="Value"
                                name="value"
                                value={inputSet.value}
                                onChange={(e) =>
                                  handleChangeShipbyClick(inputSet.id, e)
                                }
                              />
                              <button
                                className="remove-btn"
                                onClick={() =>
                                  handleRemoveShipbyClick(inputSet.id)
                                }
                              >
                                &times;
                              </button>
                            </div>
                            {index === inputSets3?.length - 1 && (
                              <div
                                className="flex items-center mt-3 lg:mt-0 mr-20 cursor-pointer"
                                onClick={handleAddShipbyClick}
                              >
                                <p>
                                  <CgAddR className="w-5 h-5" />
                                </p>{" "}
                                Add More Fields
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div
                className="bg-slate-100  lg:ml-16 sm:ml-5 "
                style={{
                  width: "100%",
                  maxWidth: "58em",
                  height: "100%",
                  maxHeight: "90em",
                }}
              >
                <div className="row">
                  <div
                    className="col-md-6 lg:ml-10 sm:ml-10  "
                    // style={{ width: "100%", maxWidth: "40em" }}
                  >
                    <from className="p-2 ">
                      <div className="mt-2 ml-2 transportheading">
                        <EditableText initialText="Transport Details" />
                      </div>
                      <>
                        <div className="mr-60">
                          <p className="mt-3">Transporter Details</p>
                          <p
                            style={{
                              color: "indigo",
                              textAlign: "center",

                              // marginTop: "2em",
                            }}
                          >
                            + Select Transporter
                          </p>
                        </div>
                        <>
                          <div className="mb-3">
                            <label
                              htmlFor="formGroupExampleInput"
                              className="form-label"
                              style={{ marginTop: "10px", marginRight: "17em" }}
                            >
                              Distance (in km)
                            </label>
                            <input
                              type="text"
                              name="distance"
                              value={distance}
                              onChange={(e) => setDistance(e.target.value)}
                              className="form-control  "
                              style={{
                                width: "100%",
                                maxWidth: "90vw",
                                marginRight: "100px",
                                marginTop: "5px",
                                // marginRight: "4px",
                              }}
                              id="formGroupExampleInput"
                            />
                          </div>
                        </>
                      </>

                      <div className="flex">
                        <NavLink
                          to="https://ewaybillgst.gov.in/Others/P2PDistance.aspx"
                          style={{
                            color: "indigo",
                            textAlign: "center",
                            textDecoration: "none",
                          }}
                        >
                          {" "}
                          Calculate distance here
                        </NavLink>
                        <AiFillIeCircle
                          width={"5em"}
                          style={{ marginTop: "5px", marginLeft: "3px" }}
                        />
                      </div>
                      <div>
                        {!isTransport && (
                          <div
                            className="flex mt-2 cursor-pointer"
                            onClick={handleTransport}
                          >
                            <p className="mr-5">
                              <CgAddR
                                color={"indigo"}
                                style={{
                                  width: "1em",
                                  height: "25px",
                                  // marginLeft: "2px",
                                }}
                              />
                            </p>
                            Add Mode of Transport
                          </div>
                        )}
                        {isTransport && (
                          <div>
                            <label className="flex mt-2">
                              Mode of Transport
                            </label>
                            <select
                              className="form-select form-select-lg mb-3 mt-2 "
                              aria-label="Large select example"
                              name="modeTrasport"
                              value={modeTrasport}
                              onChange={(e) => setModeTrasport(e.target.value)}
                              style={{ width: "100%", maxWidth: "45em" }}
                            >
                              <option value="">Select....</option>
                              <option value="air">Air</option>
                              <option value="sea">Sea</option>
                              <option value="road">Road</option>
                              <option value="rail">Rail</option>
                            </select>
                          </div>
                        )}
                      </div>

                      <div className="lg:flex" style={{ marginTop: "15px" }}>
                        {!doc && (
                          <div
                            className="flex mt-2  cursor-pointer"
                            onClick={handleDoc}
                          >
                            <p className="mr-">
                              <CgAddR
                                color={"indigo"}
                                style={{
                                  width: "1em",
                                  height: "25px",
                                  // marginLeft: "2px",
                                }}
                              />
                            </p>
                            Add Transport Doc No.
                          </div>
                        )}
                        {!challan && (
                          <div
                            className="flex mt-2 ml-2 cursor-pointer"
                            onClick={handleChallan}
                          >
                            <p className="lg:ml-20">
                              <CgAddR
                                color={"indigo"}
                                style={{
                                  width: "1em",
                                  height: "25px",
                                  // marginLeft: "5em",
                                }}
                              />
                            </p>
                            Add Transport Doc Date
                          </div>
                        )}
                      </div>
                      <div className="lg:flex">
                        {doc && (
                          <div className="mb-3">
                            <div className="mt-2 ml-2 transportheading">
                              <EditableText initialText="Challan Number" />
                            </div>
                            <input
                              type="text"
                              name="challanNumber"
                              value={challanNumber}
                              onChange={(e) => setChallanNumber(e.target.value)}
                              className="form-control mt-2 lg:w-80"
                              style={{
                                marginLeft: "2px",
                              }}
                              id="formGroupExampleInput"
                              placeholder="Transport Doc Number(optional)"
                            />
                          </div>
                        )}

                        {challan && (
                          <div className="mb-3 lg:w-80">
                            <div
                              className="mt-2 lg:ml-20 transportheading"
                              // style={{ width: "100%", maxWidth: "7em" }}
                            >
                              <EditableText initialText="Challan Date" />
                            </div>
                            <input
                              type="Date"
                              name="challanDate"
                              value={challanDate}
                              onChange={(e) => setChallanDate(e.target.value)}
                              className="form-control mt-2 lg:w-80 lg:ml-20"
                              id="formGroupExampleInput"

                              // hidden
                            />
                          </div>
                        )}
                      </div>

                      <div className="lg:flex" style={{ margin: "3px" }}>
                        {!Vtype && (
                          <div
                            className="flex mt-2  cursor-pointer"
                            onClick={handleVtype}
                          >
                            <p className="mr-2">
                              <CgAddR
                                color={"indigo"}
                                style={{
                                  width: "1em",
                                  height: "25px",
                                  // marginLeft: "2px",
                                }}
                              />
                            </p>
                            Vehicle Type
                          </div>
                        )}
                        {!Vnumber && (
                          <div
                            className="flex mt-2 lg:ml-36 cursor-pointer"
                            onClick={handleVNumber}
                          >
                            <p className="ml-2">
                              <CgAddR
                                color={"indigo"}
                                style={{
                                  width: "1em",
                                  height: "25px",
                                  // marginLeft: "2px",
                                }}
                              />
                            </p>
                            Vehicle Number
                          </div>
                        )}
                      </div>
                      <div className="lg:flex">
                        {Vtype && (
                          <div className="">
                            <p className="lg:mr-4">Vehicle Type</p>
                            <select
                              className="form-select lg:w-80 "
                              name="vehicleType"
                              value={vehicleType}
                              onChange={(e) => setVehicleType(e.target.value)}
                              style={{
                                marginTop: "9px",
                              }}
                            >
                              <option>Selected...</option>
                              <option value="Road">Regural</option>
                              <option value="Rail">Over Dimensional c..</option>
                            </select>
                          </div>
                        )}
                        <>
                          {Vnumber && (
                            <div className="">
                              <label
                                htmlFor="formGroupExampleInput"
                                className="form-label lg:mr-2 "
                              >
                                Vehicle Number
                              </label>
                              <input
                                type="Text"
                                name="vehicleNumber"
                                value={vehicleNumber}
                                onChange={(e) =>
                                  setVehicleNumber(e.target.value)
                                }
                                className="form-control lg:w-80 lg:ml-20"
                                id="formGroupExampleInput"
                                placeholder="Vehicle Number (optional)"
                              />
                            </div>
                          )}
                        </>
                      </div>

                      <div className="lg:flex" style={{ marginTop: "15px" }}>
                        {!tType && (
                          <div
                            className="flex mt-2  cursor-pointer"
                            onClick={handleTType}
                          >
                            <p className="mr-2">
                              <CgAddR
                                color={"indigo"}
                                style={{
                                  width: "1em",
                                  height: "25px",
                                  // marginLeft: "2px",
                                }}
                              />
                            </p>
                            Add Transaction Type
                          </div>
                        )}
                        {!subType && (
                          <div
                            className="flex mt-2 lg:ml-20 cursor-pointer"
                            onClick={handleSubType}
                          >
                            <p style={{ marginRight: "10px" }}>
                              <CgAddR
                                color={"indigo"}
                                style={{
                                  width: "1em",
                                  height: "25px",
                                  // marginLeft: "2px",
                                }}
                              />
                            </p>
                            Sub Supply Type
                          </div>
                        )}
                      </div>
                      <div className="lg:flex" style={{ marginTop: "15px" }}>
                        {tType && (
                          <div className=" ">
                            <p className="lg:mr-28 ">Transaction Type</p>
                            <select
                              className="form-select lg:w-64 sm:w-32 lg:mt-2"
                              name="transportType"
                              value={transportType}
                              onChange={(e) => setTransPortType(e.target.value)}
                            >
                              <option>Selected...</option>
                              <option value="Regural">Regural</option>
                              <option value="bill to-ship to">
                                Bill To-Ship To
                              </option>
                              <option value="Bill from dispach">
                                Bill From - Dishpach
                              </option>
                              <option value="Combination Of Both">
                                Combination Of Both{" "}
                              </option>
                            </select>
                          </div>
                        )}

                        {subType && (
                          <div className="lg:ml-40">
                            <p className="lg:mr-28 md:mr-10">Sub Supply Type</p>
                            <select
                              className="form-select lg:w-64 md:w-20 lg:mt-2"
                              name="supplyType"
                              value={supplyType}
                              onChange={(e) => setSupplyType(e.target.value)}
                            >
                              <option>Selected...</option>
                              <option value="supply">Supply</option>
                              <option value="Import">Import</option>
                              <option value="Export">Export</option>
                              <option value="Job Work">Job Work</option>
                              <option value="From On Use">From On Use</option>
                              <option value="Sales">Sales Returns</option>
                              <option value="Other">Other</option>
                              <option value="Line Sales">Line Sales</option>
                            </select>
                          </div>
                        )}
                      </div>
                    </from>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="text-center  ">
            <div className="row lg:mt-10 sm:mt-10 sm:ml-10">
              <div className="col-md-3">
                <div>
                  {/* Button trigger modal */}
                  <button
                    type="button"
                    className="btn"
                    style={{
                      boxSizing: "border-box",
                      width: "100%",
                      maxWidth: "200px",
                      background: "azure",
                    }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal1"
                  >
                    % {none ? "Add Tax" : `Configure ${selectGst}`}
                  </button>

                  {/* Modal 1 */}
                  <div
                    className="modal fade"
                    id="exampleModal1"
                    tabIndex={-1}
                    aria-labelledby="exampleModalLabel1"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1
                            className="modal-title fs-5"
                            id="exampleModalLabel1"
                          >
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
                            <select
                              className="form-select"
                              value={selectGst}
                              onChange={handleTaxTypeChange}
                            >
                              <option value="NONE">NONE</option>
                              {/* {show && ( */}
                              <option value="GST">GST(INDIA)</option>
                              <option value="VAT">VAT</option>
                              <option value="PPN">PPN</option>
                              <option value="SST">SST</option>
                            </select>
                          </div>

                          {/* <<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>> */}
                          {showGstFields && (
                            <>
                              <div style={{ display: "flex" }}>
                                <div className="col-md-5 mt-3">
                                  <p style={{ textAlign: "left" }}>GST Type</p>

                                  <div className="form-check mt-2">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="flexCheckDefault1"
                                      checked={igstChecked}
                                      onChange={handleIgstChange}
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexCheckDefault1"
                                      style={{ marginRight: "10em" }}
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
                                      id="flexCheckDefault2"
                                      checked={cgstSgstChecked}
                                      onChange={handleCgstSgstChange}
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="flexCheckDefault2"
                                      style={{ marginRight: "3em" }}
                                    >
                                      CGST & SGST
                                    </label>
                                  </div>
                                </div>
                              </div>

                              <div className=" ">
                                <hr />
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="flexCheckDefault3"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="flexCheckDefault3"
                                  >
                                    Is Reverse Charge Applicable?
                                  </label>
                                </div>
                              </div>
                            </>
                          )}
                        </div>

                        {/* )} */}
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn"
                            data-bs-dismiss="modal"
                            style={{ marginRight: "auto" }}
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
                {/* <p style={{ marginTop: "5px" }}>Currency</p> */}

                <div
                  className=" ml-20  "
                  style={{
                    width: "15em",
                    background: "azure",
                    // marginRight: "20em",
                  }}
                >
                  {/* <label className="">Currency:</label> */}
                  <Select
                    options={currencyOptions}
                    name="currency"
                    // style={{
                    //   width: "15em",
                    //   background: "azure",
                    //   // marginRight: "20em",
                    // }}
                    value={currencyOptions.find(
                      (option) => option.value === currency
                    )}
                    onChange={handleCurrencyChange}
                  />
                </div>
              </div>
              <div className="col-md-3  lg:ml-40 ">
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
                      Edit Columns/Formulas
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
                        <div
                          className="modal-content"
                          style={{ height: "65em", width: "46em" }}
                        >
                          <div className="modal-header">
                            <h1
                              className="modal-title fs-5"
                              id="staticBackdropLabel"
                            >
                              Customise Columns & Formulas
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
                            <div>
                              <p>
                                Create/edit columns, customize formulas, make
                                private columns (visible to you, but not to
                                clients), make hidden columns (hidden to both
                                you & your clients)
                              </p>
                            </div>
                            <div className="advance">
                              <h1 style={{ marginRight: "30em" }}>
                                Need Advance Formulas?
                              </h1>

                              <p className="mr-40">
                                Add custom calculations, formulae and custom
                                fields in your columns.
                              </p>
                              <div
                                className="inline-block bg-red-600 hover:bg-rose-500 text-white py-2 px-8 rounded-lg font-medium transition duration-300 ease-in-out mt-7 "
                                style={{ marginRight: "27em" }}
                              >
                                <button type="button">
                                  Talk to an expert now
                                </button>
                              </div>
                            </div>
                            <div
                              className=" flex items-center mt-3 lg:mt-0  cursor-pointer"
                              style={{ marginLeft: "30em" }}
                            >
                              <p>
                                <CgAddR className="w-5 h-5 mr-2" />
                              </p>{" "}
                              Add More Fields
                            </div>
                            <div className="flex gap-4 mt-6 ml-12">
                              <p>Column Name</p>
                              <p className="ml-40">Column Type</p>
                            </div>
                            <>
                              <div className="flex gap-4 ml-6 mt-2">
                                <input
                                  type="text"
                                  className="form-control w-64"
                                  name="itemName"
                                  value={modal1.itemName}
                                  onChange={handleModal1Change}
                                  defaultValue={"Item"}
                                />
                                <select
                                  className="form-select w-44 ml-9"
                                  disabled
                                  aria-label="Default select example"
                                >
                                  <option selected>Text</option>
                                </select>
                              </div>
                              {!none && (
                                <>
                                  {!igstChecked && (
                                    <div className="ml-6 mt-3">
                                      <input
                                        type="text"
                                        className="form-control w-64"
                                        name="taxType"
                                        value={inputValues.taxType}
                                        onChange={handleGSTValueChange}
                                      />
                                    </div>
                                  )}
                                  {igstChecked && (
                                    <>
                                      <div className="flex gap-4 ml-6 mt-3">
                                        <input
                                          type="text"
                                          className="form-control w-64"
                                          name="hsn"
                                          value={modal1.hsn}
                                          onChange={handleModal1Change}
                                          defaultValue={"HSN/SAC"}
                                        />
                                        <select
                                          className="form-select w-44 ml-9"
                                          aria-label="Default select example"
                                        >
                                          <option selected>NUMBER</option>
                                          <option value={1}>FORMULA</option>
                                        </select>
                                      </div>
                                      <div className="flex gap-4 ml-6 mt-3">
                                        <input
                                          type="text"
                                          className="form-control w-64"
                                          name="igst"
                                          value={inputValues.igst}
                                          onChange={handleGSTValueChange}
                                          defaultValue={"GST Rate"}
                                        />
                                        <select
                                          className="form-select w-44 ml-9"
                                          aria-label="Default select example"
                                        >
                                          <option selected>NUMBER</option>
                                          <option value={1}>FORMULA</option>
                                        </select>
                                      </div>
                                    </>
                                  )}
                                </>
                              )}
                              <div className="flex gap-4 ml-6 mt-3">
                                <input
                                  type="text"
                                  className="form-control w-64"
                                  defaultValue={"Quantity"}
                                  name="quantity"
                                  value={modal1.quantity}
                                  onChange={handleModal1Change}
                                />
                                <select
                                  className="form-select w-44 ml-9"
                                  aria-label="Default select example"
                                >
                                  <option selected>NUMBER</option>
                                  <option value={1}>FORMULA</option>
                                </select>
                              </div>
                              <div className="flex gap-4 ml-6 mt-3">
                                <input
                                  type="text"
                                  className="form-control w-64"
                                  defaultValue={"Rate"}
                                  name="rate"
                                  value={modal1.rate}
                                  onChange={handleModal1Change}
                                />
                                <select
                                  className="form-select w-44 ml-9"
                                  aria-label="Default select example"
                                >
                                  <option selected>CURRENCY</option>
                                  <option value={1}>FORMULA</option>
                                </select>
                              </div>
                              <div className="flex gap-4 ml-6 mt-3">
                                <input
                                  type="text"
                                  className="form-control w-64"
                                  defaultValue={"Amount"}
                                  name="amount"
                                  value={modal1.amount}
                                  onChange={handleModal1Change}
                                />
                                <p className="ml-3">(Quantity*Rate)</p>
                              </div>
                              {!none && (
                                <>
                                  {!cgstSgstChecked && (
                                    <div className="ml-6 mt-3">
                                      <input
                                        className="form-control w-64"
                                        type="text"
                                        name="taxType"
                                        value={inputValues.taxType}
                                        onChange={handleGSTValueChange}
                                      />
                                    </div>
                                  )}
                                  {cgstSgstChecked && (
                                    <>
                                      <div className="flex gap-4 ml-6 mt-3">
                                        <input
                                          type="text"
                                          className="form-control w-64"
                                          defaultValue={"CGST"}
                                          name="cgst"
                                          value={modal1.cgst}
                                          onChange={handleGSTValueChange}
                                        />
                                        <p>(Amount * (GST/2)/100)</p>
                                      </div>

                                      <div className="flex gap-4 ml-6 mt-3">
                                        <input
                                          type="text"
                                          className="form-control w-64"
                                          defaultValue={"SGST"}
                                          name="cgstSgst"
                                          value={inputValues.Sgst}
                                          onChange={handleGSTValueChange}
                                        />
                                        <p>(Amount * (GST/2)/100)</p>
                                      </div>
                                    </>
                                  )}
                                </>
                              )}
                              <div className="flex gap-4 ml-6 mt-3">
                                <input
                                  type="text"
                                  className="form-control w-64"
                                  defaultValue={"Total"}
                                  name="total"
                                  value={modal1.total}
                                  onChange={handleModal1Change}
                                />
                                <p>(Amount * Tax)</p>
                              </div>
                            </>

                            <div
                              className="flex flex-wrap lg:gap-2 sm:gap-2 sm:ml-5 ml-3 p-2 bg-violet-700 h-15 mt-8 text-center"
                              style={{ color: "white" }}
                            >
                              <p className="flex-1">{modal1.itemName}</p>
                              {!none && (
                                <>
                                  {!igstChecked && (
                                    <p className="flex-1">
                                      {inputValues.taxType}
                                    </p>
                                  )}
                                  {igstChecked && (
                                    <>
                                      <p className="flex-1">{modal1.hsn}</p>
                                      <p className="flex-1">
                                        {inputValues.igst}
                                      </p>
                                    </>
                                  )}
                                </>
                              )}
                              <p className="flex-1">{modal1.quantity}</p>
                              <p className="flex-1">{modal1.rate}</p>
                              <p className="flex-1">{modal1.amount}</p>
                              {!none && (
                                <>
                                  {!cgstSgstChecked && (
                                    <p className="flex-1">
                                      {inputValues.taxType}
                                    </p>
                                  )}
                                  {cgstSgstChecked && (
                                    <>
                                      <p className="flex-1">{modal1.cgst}</p>
                                      <p className="flex-1">
                                        {inputValues.Sgst}
                                      </p>
                                    </>
                                  )}
                                </>
                              )}

                              <p className="flex-1">{modal1.total}</p>
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
                            <button
                              type="button"
                              className="btn btn-primary"
                              onClick={handleSave}
                            >
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
              <div className="col-md-10 ">
                <div
                  className=" lg:flex flex-wrap gap-6 ml-3 p-2 bg-violet-700  h-15 lg:ml-20    mt-8 text-center "
                  style={{ color: "white", width: "100%" }}
                >
                  <p style={{ marginRight: "13em" }}>items</p>
                  <div className="lg:flex gap-9">
                    {!none && (
                      <>
                        {!igstChecked && (
                          <p className="flex-1">{inputValues.taxType}</p>
                        )}
                        {igstChecked && (
                          <>
                            <p className="flex">{modal1.hsn}</p>
                            <p className="flex">{inputValues.igst}</p>
                          </>
                        )}
                      </>
                    )}
                    <p className="flex">{modal1.quantity}</p>
                    <p className="flex">{modal1.rate}</p>
                    <p className="flex">{modal1.amount}</p>
                    {!none && (
                      <>
                        {!cgstSgstChecked && (
                          <p className="flex-1">{inputValues.taxType}</p>
                        )}
                        {cgstSgstChecked && (
                          <>
                            <p className="flex">{modal1.cgst}</p>
                            <p className="flex">{inputValues.Sgst}</p>
                          </>
                        )}
                      </>
                    )}

                    <p className="flex">{modal1.total}</p>
                  </div>
                </div>
              </div>

              <div className="col-md-12 mt-3 lg:mt-0">
                {gstinputSets.length === 0 && (
                  <div
                    className="flex items-center mt-3 lg:ml-96 lg:mt-0 cursor-pointer"
                    onClick={handleAddGSTInfoClick}
                  >
                    <CgAddR className="w-5 h-5 mr-2 " />
                    Add New Line
                  </div>
                )}

                {gstinputSets.map((inputSet, index) => (
                  <div key={inputSet.id} className="my-4">
                    <div className="flex lg:mb-0">
                      <input
                        className="inptS  "
                        style={{ Width: "80em", marginLeft: "5em" }}
                        type="text"
                        placeholder="Items"
                        name="name"
                        value={inputSet.name}
                        onChange={(e) => handleInputChange(inputSet.id, e)}
                      />
                      <div
                        className="lg:flex flex-wrap lg:gap-1 "
                        style={{ marginLeft: "7em" }}
                      >
                        {!none && (
                          <>
                            {!igstChecked && (
                              <input
                                className="inptS"
                                name="gst"
                                value={inputSet.gst}
                                onChange={(e) =>
                                  handleInputChange(inputSet.id, e)
                                }
                                style={{ maxWidth: "4em" }}
                                type="text"
                                placeholder="0"
                              />
                            )}
                            {igstChecked && (
                              <>
                                <input
                                  className="inptS "
                                  name="hsb"
                                  value={inputSet.hsb}
                                  onChange={(e) =>
                                    handleInputChange(inputSet.id, e)
                                  }
                                  style={{ maxWidth: "4em" }}
                                  type="text"
                                  placeholder="#"
                                />
                                <input
                                  className="inptS"
                                  name="gst"
                                  value={inputSet.gst}
                                  onChange={(e) =>
                                    handleInputChange(inputSet.id, e)
                                  }
                                  style={{ maxWidth: "4em" }}
                                  type="text"
                                  placeholder="0"
                                />
                              </>
                            )}
                          </>
                        )}
                        <input
                          className="inptS "
                          name="quantity"
                          value={inputSet.quantity}
                          onChange={(e) => handleInputChange(inputSet.id, e)}
                          style={{ maxWidth: "4em" }}
                          type="text"
                          placeholder="0"
                        />
                        <input
                          className="inptS "
                          name="rate"
                          value={inputSet.rate}
                          onChange={(e) => handleInputChange(inputSet.id, e)}
                          style={{ maxWidth: "4em" }}
                          type="text"
                          placeholder="0"
                        />
                        <input
                          className="inptS "
                          name="amount"
                          style={{ maxWidth: "4em" }}
                          value={`${inputSet.currency} ${inputSet.amount}`}
                          placeholder="0"
                          readOnly
                        />
                        {!none && (
                          <>
                            {!cgstSgstChecked && (
                              <input
                                className="inptS "
                                type="text"
                                name="cgst"
                                value={inputSet.cgst}
                                // defaultValue={"0.21"}
                                style={{ maxWidth: "4em" }}
                              />
                            )}
                            {cgstSgstChecked && (
                              <>
                                <input
                                  className="inptS "
                                  type="text"
                                  name="cgst"
                                  value={inputSet.cgst}
                                  // defaultValue={"1.02"}
                                  style={{ maxWidth: "4em" }}
                                />
                                <input
                                  className="inptS "
                                  type="text"
                                  name="sgst"
                                  value={inputSet.sgst}
                                  // defaultValue={"1.21"}
                                  style={{ maxWidth: "4em" }}
                                />
                              </>
                            )}
                          </>
                        )}
                        <input
                          className="inptS"
                          type="text"
                          name="total"
                          style={{ maxWidth: "5em" }}
                          value={`${inputSet.currency} ${inputSet.total}`}
                          readOnly
                        />
                        <button
                          className="remove-btn text-xl mb-2 lg:ml-3 lg:mb-0"
                          onClick={() =>
                            handleAddGSTInfoRemoveClick(inputSet.id)
                          }
                        >
                          &times;
                        </button>
                      </div>
                    </div>

                    <div
                      className="text-right mt-1"
                      style={{ marginRight: "10em" }}
                    >
                      <button type="button" onClick={handleAddGSTInfoClick}>
                        <p className="flex items-center">
                          <HiOutlineDuplicate
                            className="w-5 h-5 mr-2"
                            style={{ color: "indigo" }}
                          />
                          Duplicate
                        </p>
                      </button>
                    </div>

                    {index === gstinputSets.length - 1 && (
                      <div
                        className="flex items-center mt-3 lg:ml-96 lg:mt-0 cursor-pointer"
                        onClick={handleAddGSTInfoClick}
                      >
                        <CgAddR className="w-5 h-5 mr-2 " />
                        Add New Line
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex flex-col lg:flex-row justify-end  lg:items-center lg:gap-4 mt-3">
                <div className="">
                  <h1 className="mt-3 lg:mt-6 lg:ml-96">
                    Total
                    <input
                      className="inptS w-full lg:w-auto"
                      type="text"
                      name="total"
                      value={`${currency}  ${totalSum}`}
                      readOnly
                    />
                  </h1>
                  <div className="mt-10">
                    {!addSign && (
                      <div className=" lg:ml-96  text-left justify-left">
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
                        className=" bg-slate-50 mt-2  lg:ml-96"
                        style={{
                          width: "100%",
                          maxWidth: "20em",
                          height: "100%",
                          maxHeight: "40em",
                        }}
                      >
                        <div className="mr-60 mt-">
                          <p>Signature</p>
                        </div>
                        <p
                          className="cursor-pointer ml-60"
                          onClick={() => handleRemoveSign()}
                        >
                          &times;
                        </p>
                        {image && image.url ? (
                          <></>
                        ) : signatureImage ? (
                          <div style={{ marginTop: "20px" }}>
                            <img
                              src={signatureImage}
                              alt="Uploaded Signature"
                              style={{
                                maxWidth: "100%",
                                border: "1px solid #000",
                                backgroundColor: "#f0f0f0",
                              }}
                            />
                            <button onClick={clear}>Clear</button>
                          </div>
                        ) : (
                          <>
                            {" "}
                            <div
                              className=" mt- ml-7"
                              style={{
                                width: "15em",
                                height: "10em",
                                border: "2px dotted rgb(184, 179, 179)",
                                borderRadius: "5px",
                                backgroundColor: "white",
                              }}
                            >
                              <label
                                // htmlFor="image"
                                className="mt-5 ml-2 flex "
                              >
                                <span style={{ marginTop: "em" }}>
                                  <TbCloudUpload
                                    style={{
                                      width: "3em",
                                      height: "4em",
                                      marginLeft: "3em",
                                      color: "blue",
                                    }}
                                  />
                                </span>
                                upload
                              </label>
                            </div>
                            <div className="flex mt- ml-4">
                              <label className="flex">
                                <p>
                                  <BiUpArrowAlt
                                    style={{
                                      width: "2em",
                                      height: "25px",
                                      color: "blue",
                                    }}
                                  />
                                </p>
                                <input
                                  type="file"
                                  // name="image"
                                  // id="image"
                                  // accept="image/*"
                                  hidden
                                />{" "}
                                Upload Signature
                              </label>
                            </div>
                          </>
                        )}

                        {pad && (
                          <div style={{ maxWidth: "300px", margin: "0 auto" }}>
                            <SignatureCanvas
                              ref={sigCanvas}
                              canvasProps={{
                                width: 300,
                                height: 150,
                                className: "sigCanvas",
                                style: {
                                  border: "1px solid #000",
                                  backgroundColor: "#f0f0f0",
                                },
                              }}
                              backgroundColor="#f0f0f0"
                            />
                            <div style={{ marginTop: "10px" }}>
                              <button onClick={upload}>Upload</button>
                            </div>
                          </div>
                        )}

                        {!pad && (
                          <div
                            className="flex mt- ml-5"
                            onClick={handlePadClickes}
                          >
                            <p>
                              <TbWritingSign
                                style={{
                                  width: "2em",
                                  height: "25px",
                                  color: "blue",
                                }}
                              />
                            </p>
                            Use Signature Pad
                          </div>
                        )}
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
                                        // marginTop: "2px",
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
                          <div className="mb-3 mr-4">
                            <p
                              className="cursor-pointer ml-60"
                              onClick={() => handleSigLabelRemove()}
                            >
                              &times;
                            </p>
                            <label
                              htmlFor="exampleFormControlInput1"
                              className="form-label ml-5"
                            >
                              Add Signature Label
                            </label>

                            <input
                              type="text"
                              className="form-control"
                              name="signatuelable"
                              value={signatuelable}
                              onChange={(e) => setSignatuelable(e.target.value)}
                              style={{ width: "17em", marginLeft: "1em" }}
                              id="exampleFormControlInput1"
                              defaultValue={"Authorised Signatory"}
                            />
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <AddSomemorefield/> */}
          <div>
            <div className="lg:flex lg:gap-4 lg:mt-10  sm:mt-70 ml-3 ">
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
                      <p className="flex  p-2 ">
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
                <div className="">
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
              {/* {!addSign && (
                <div className="lg:ml-40">
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
                  className=" bg-slate-50 mt-2 lg:ml-50"
                  style={{
                    width: "100%",
                    maxWidth: "20em",
                    height: "100%",
                    maxHeight: "40em",
                  }}
                >
                  <div className="mr-60 mt-">
                    <p>Signature</p>
                  </div>
                  <p
                    className="cursor-pointer ml-60"
                    onClick={() => handleRemoveSign()}
                  >
                    &times;
                  </p>
                  {image && image.url ? (
                    <></>
                  ) : signatureImage ? (
                    <div style={{ marginTop: "20px" }}>
                      <img
                        src={signatureImage}
                        alt="Uploaded Signature"
                        style={{
                          maxWidth: "100%",
                          border: "1px solid #000",
                          backgroundColor: "#f0f0f0",
                        }}
                      />
                      <button onClick={clear}>Clear</button>
                    </div>
                  ) : (
                    <>
                      {" "}
                      <div
                        className=" mt- ml-7"
                        style={{
                          width: "15em",
                          height: "10em",
                          border: "2px dotted rgb(184, 179, 179)",
                          borderRadius: "5px",
                          backgroundColor: "white",
                        }}
                      >
                        <label
                          // htmlFor="image"
                          className="mt-5 ml-2 flex "
                        >
                          <span style={{ marginTop: "em" }}>
                            <TbCloudUpload
                              style={{
                                width: "3em",
                                height: "4em",
                                marginLeft: "3em",
                                color: "blue",
                              }}
                            />
                          </span>
                          upload
                        </label>
                      </div>
                      <div className="flex mt- ml-4">
                        <label className="flex">
                          <p>
                            <BiUpArrowAlt
                              style={{
                                width: "2em",
                                height: "25px",
                                color: "blue",
                              }}
                            />
                          </p>
                          <input
                            type="file"
                            // name="image"
                            // id="image"
                            // accept="image/*"
                            hidden
                          />{" "}
                          Upload Signature
                        </label>
                      </div>
                    </>
                  )}

                  {pad && (
                    <div style={{ maxWidth: "300px", margin: "0 auto" }}>
                      <SignatureCanvas
                        ref={sigCanvas}
                        canvasProps={{
                          width: 300,
                          height: 150,
                          className: "sigCanvas",
                          style: {
                            border: "1px solid #000",
                            backgroundColor: "#f0f0f0",
                          },
                        }}
                        backgroundColor="#f0f0f0"
                      />
                      <div style={{ marginTop: "10px" }}>
                        <button onClick={upload}>Upload</button>
                      </div>
                    </div>
                  )}

                  {!pad && (
                    <div className="flex mt- ml-5" onClick={handlePadClickes}>
                      <p>
                        <TbWritingSign
                          style={{
                            width: "2em",
                            height: "25px",
                            color: "blue",
                          }}
                        />
                      </p>
                      Use Signature Pad
                    </div>
                  )}
                  {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<signature label>>>>>>>>>>>>>>>>>>>> */}
              {/* {!sigLabel && (
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
                                  // marginTop: "2px",
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
              {/* {sigLabel && (
                    <div className="mb-3 mr-4">
                      <p
                        className="cursor-pointer ml-60"
                        onClick={() => handleSigLabelRemove()}
                      >
                        &times;
                      </p>
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label ml-5"
                      >
                        Add Signature Label
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        name="signatuelable"
                        value={signatuelable}
                        onChange={(e) => setSignatuelable(e.target.value)}
                        style={{ width: "17em", marginLeft: "1em" }}
                        id="exampleFormControlInput1"
                        defaultValue={"Authorised Signatory"}
                      />
                    </div>
                  )}
                </div>
              )}  */}
            </div>
            {/* <<<<<<<<<<<<<<<<<<< extra button >>>>>>>>>>>>>>>>>>>>>>>>>> */}

            <div className="lg:flex lg:gap-4 mt-3 ml-2 sm:mt-3">
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

            {term && (
              <div className="bg-slate-50 mt-4 ml-2 p-4">
                <p
                  className="cursor-pointer "
                  style={{ width: "40em" }}
                  onClick={() => handleRemoveTerms()}
                >
                  &times;
                </p>
                <div className="mt-1  heading" style={{ width: "10em" }}>
                  <EditableText initialText="Terms and Conditions" />
                </div>
                {itemInput && (
                  <div className="mt-2 flex">
                    <input
                      type="text"
                      className="inptS "
                      style={{
                        width: "100%",
                        marginRight: "5em",
                        maxWidth: "70em",
                        marginTop: "1em",
                      }}
                      defaultValue={
                        "1. Please pay within 15 days from the date of invoice, overdue interest @ 14% will be charged on dela"
                      }
                    />
                    <p
                      className="cursor-pointer "
                      style={{ marginRight: "5em" }}
                      onClick={() => handleRemoveItemInput()}
                    >
                      &times;
                    </p>
                  </div>
                )}
                {itemInputs && (
                  <div className="mt-2 flex">
                    <input
                      type="text"
                      className="inptS "
                      style={{
                        width: "100%",
                        maxWidth: "24em",

                        marginTop: "1em",
                      }}
                      defaultValue={
                        "2. Please quote invoice number when remitting funds."
                      }
                    />
                    <p
                      className="cursor-pointer "
                      // style={{ width: "120em" }}
                      onClick={() => handleRemoveItemInputs()}
                    >
                      &times;
                    </p>
                  </div>
                )}
                {/* <div className="flex "> */}
                <div className=" lg:gap-30 mt-3 lg:mt-0 lg:gap-28">
                  {items.length === 0 && (
                    // <button onClick={handleAddClick}>Add More Fields</button>

                    <div
                      className="flex items-center mt-3 lg:mt-0 mr-20 cursor-pointer"
                      onClick={handleAddItemsClick}
                    >
                      <p>
                        <CgAddR className="w-5 h-5" />
                      </p>{" "}
                      Add New Term
                    </div>
                  )}
                  {items.map((inputSet, index) => (
                    <div key={inputSet.id}>
                      <div className="lg:flex">
                        <input
                          type="text"
                          className="inptS "
                          name="addterm"
                          value={addterm}
                          onChange={(e) => setAddTerm(e.target.value)}
                          style={{
                            width: "100%",
                            maxWidth: "60em",
                            marginRight: "20em",
                            marginTop: "1em",
                          }}
                          placeholder="3. Add terms"
                          // defaultValue={"3 ."}
                        />

                        <button
                          className="remove-btn"
                          // style={{marginRight:"80em"}}
                          onClick={() => handleAddItemsRemoveClick(inputSet.id)}
                        >
                          &times;
                        </button>
                      </div>
                      {index === items.length - 1 && (
                        <div
                          className="flex items-center mt-3 lg:mt-0  cursor-pointer"
                          onClick={handleAddItemsClick}
                        >
                          <p>
                            <CgAddR className="w-5 h-5" />
                          </p>{" "}
                          Add New Term
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <>
                  <div className=" lg:gap-30 mt-3 mr-6 lg:mt-0 lg:gap-28">
                    {groups.length === 0 && (
                      // <button onClick={handleAddClick}>Add More Fields</button>

                      <div
                        className="flex items-center mt-3 lg:mt-0  cursor-pointer"
                        onClick={handleAddGroupsClick}
                      >
                        <p>
                          <CgAddR className="w-5 h-5" />
                        </p>{" "}
                        Add New Group
                      </div>
                    )}
                    {groups.map((inputSet, index) => (
                      <div key={inputSet.id}>
                        <div className="lg:flex">
                          <div>
                            <input
                              type="text"
                              className="inpt "
                              style={{
                                width: "100%",
                                maxWidth: "11em",
                                marginRight: "44em",
                                marginTop: "1em",
                              }}
                              defaultValue={"Terms and Conditions"}
                            />
                            <div>
                              <input
                                type="text"
                                className="inptS "
                                style={{
                                  width: "100%",
                                  maxWidth: "44em",
                                  marginRight: "40em",
                                  marginTop: "1em",
                                }}
                                placeholder="3. Add terms"
                                // defaultValue={"3 ."}
                              />
                            </div>
                          </div>
                          <button
                            className="remove-btn "
                            // style={{ width: "20em" }}
                            onClick={() =>
                              handleAddGroupsRemoveClick(inputSet.id)
                            }
                          >
                            &times;
                          </button>
                        </div>
                        {index === groups.length - 1 && (
                          <div className="flex">
                            <div
                              className="flex items-center mt-3 lg:mt-0  cursor-pointer"
                              onClick={handleAddGroupsClick}
                            >
                              <p>
                                <CgAddR className="w-5 h-5" />
                              </p>{" "}
                              Add New Term
                            </div>
                            <div
                              className="flex items-center mt-3 lg:mt-0 ml-6 cursor-pointer"
                              onClick={handleAddGroupsClick}
                            >
                              <p>
                                <CgAddR className="w-5 h-5" />
                              </p>{" "}
                              Add New Group
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </>
              </div>
            )}

            {/*  <<<<<<<<<<<<<<<<< add notes fields >>>>>>>>>>>>>>>>> */}
            {nots && (
              <div
                className="bg-slate-50 mt-4 ml-2 "
                style={{ maxWidth: "30em", height: "20em" }}
              >
                <div className="flex">
                  <div className="mt-1  heading" style={{ width: "8em" }}>
                    <EditableText initialText="Additional Notes" />
                  </div>
                  <p
                    className="cursor-pointer ml-60"
                    // style={{ width: "120em" }}
                    onClick={() => handleRemoveNotes()}
                  >
                    &times;
                  </p>
                </div>
                <div className="mt-3">
                  <JoditEditor
                    ref={editor}
                    value={content}
                    config={config}
                    tabIndex={1} // tabIndex of textarea
                    onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                    onChange={(newContent) => {}}
                  />
                </div>
              </div>
            )}
            {/* <<<<<<<<<<<<<<<<<<<< add attachments >>>>>>>>>>>>> */}
            {addfiles && (
              <div
                className="bg-slate-50 mt-4 ml-2 "
                style={{ height: "100%", maxheight: "20em" }}
              >
                <p
                  className="cursor-pointer ml-80"
                  // style={{ width: "120em" }}
                  onClick={() => handleRemoveAddFile()}
                >
                  &times;
                </p>
                <div className="  heading" style={{ width: "8em" }}>
                  <EditableText initialText="Attachment" />
                </div>
                <p style={{ marginTop: "10px", marginRight: "6em" }}>
                  *Attachments won't appear as separate documents; instead,
                  they'll be accessible as clickable links within the invoice
                </p>
                {/* <<<<<<<<<<<<<<<<<<<< add file >>>>>>>>>>> */}
                <div className="flex">
                  {preview2 && (
                    <div className="mt-2 mr-10">
                      <img
                        src={preview2}
                        // type="application/pdf"
                        className="mt-4 ml-20 w-40"
                        alt="document"
                      />
                    </div>
                  )}

                  <div
                    className="bg-slate-50 mt-5 ml-10"
                    style={{
                      width: "5em",
                      height: "4em",
                      border: "2px dotted rgb(184, 179, 179)",
                      borderRadius: "5px",
                    }}
                  >
                    <label>
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
                        name="document"
                        // accept=".pdf,.doc,.docx"
                        onChange={handleDocumentUpload}
                        hidden
                      />{" "}
                    </label>
                  </div>
                </div>
              </div>
            )}
            {/* <<<<<<<<<<<<<<<<<<<<<<< add additional info >>>>>>>>>>>>>>>>>>>>>>>>>>> */}
            {addiInfo && (
              <div className="bg-slate-100 ">
                <div>
                  {" "}
                  <button
                    className="remove-btn"
                    onClick={() => handleRemoveAddInfo()}
                  >
                    &times;
                  </button>
                </div>
                <div className=" lg:gap-30 mt-3 lg:mt-0 lg:gap-28">
                  {addinputSets.length === 0 && (
                    // <button onClick={handleAddClick}>Add More Fields</button>
                    <div
                      className="flex items-center mt-3 lg:mt-0 mr-20 cursor-pointer"
                      onClick={handleAddInfoClick}
                    >
                      <p>
                        <CgAddR className="w-5 h-5" />
                      </p>{" "}
                      Add More Fields
                    </div>
                  )}
                  {addinputSets.map((inputSet, index) => (
                    <div key={inputSet.id}>
                      <div className="lg:flex">
                        <div className="ml-20 flex">
                          <input
                            type="text"
                            className="inptS"
                            placeholder="Field Name"
                            name="name"
                            value={inputSet.name}
                            onChange={(e) =>
                              handleChangeInfoClick(inputSet.id, e)
                            }
                          />
                          <input
                            type="text"
                            className="inptS"
                            placeholder="Value"
                            name="value"
                            value={inputSet.value}
                            onChange={(e) =>
                              handleChangeInfoClick(inputSet.id, e)
                            }
                          />
                        </div>
                        <button
                          className="remove-btn lg:ml-10"
                          onClick={() => handleAddInfoRemoveClick(inputSet.id)}
                        >
                          &times;
                        </button>
                      </div>
                      {index === addinputSets.length - 1 && (
                        <div
                          className="flex items-center mt-3 lg:mt-0  cursor-pointer"
                          onClick={handleAddInfoClick}
                        >
                          <p>
                            <CgAddR className="w-5 h-5" />
                          </p>{" "}
                          Add More Fields
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<Add Contact details >>>>>>>>>>>>>>>>>>>>>> */}
            {addContct && (
              <div className="bg-slate-50 mt-4 ml-2 p-4">
                <button
                  className="remove-btn ml-80"
                  onClick={() => handleRemoveContact()}
                >
                  &times;
                </button>
                <div
                  className="mt-2 ml-2 transportheading"
                  style={{ width: "10em" }}
                >
                  <EditableText initialText="Your Contact Details" />
                </div>
                <div className="flex flex-wrap items-center ml-2 mt-2 gap-2">
                  <input
                    type="text"
                    defaultValue={"For any enquiry, reach out via"}
                    className="inptS"
                    style={{ width: "100%", maxWidth: "15em" }}
                  />
                  {/* Add email address */}
                  <div className="flex items-center">
                    <input
                      type="text"
                      defaultValue={"Email at"}
                      style={{ width: "5em" }}
                      className="inptS"
                    />
                    <input
                      type="text"
                      placeholder="Your email (optional)"
                      name="addemail"
                      value={addemail}
                      onChange={(e) => setAddEmail(e.target.value)}
                      style={{ width: "100%", maxWidth: "15em" }}
                      className="inptS"
                    />
                  </div>
                  <input
                    type="text"
                    defaultValue={"Call on"}
                    style={{ width: "5em" }}
                    className="inptS"
                  />
                  <div>
                    <PhoneInput
                      value={addphone}
                      onChange={(addphone) => setAddphone(addphone)}
                      defaultCountry="US"
                      international
                      countryCallingCodeEditable={false}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div
            className="inline-block bg-red-600 hover:bg-rose-500 text-white py-2 px-8 rounded-lg font-medium transition duration-300 ease-in-out mt-7 lg:ml-96 lg:mt-20 "
            // style={{ marginRight: "13em" }}
          >
            <button type="button" onClick={handleUpdateInvoice}>
              update Invoice
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateInvoiceData;
