import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../Admin/auth";
function Navbar() {
  const [auth, setAuth] = useAuth();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
  };
  return (
    <>
      <header
        className="bg-violet-700 fixed top-0 right-0 w-full left-0 h-14 
     flex items-center py-4 px-20 text-slate-50"
      >
        {/* <<<<<<<<<<<<<<<<<<<<< helfldlld1>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
        <p className="ml-10 p-5 font-bold text-2xl md:text-4xl">
          <Link to="https://www.refrens.com/">
            <div className="sc-dHmInP ZAOiS">
              <a
                href="https://www.refrens.com/"
                title="Refrens"
                aria-label="Refrens"
                className="sc-iIHSe kZcJjH"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={140}
                  height={35}
                  color=""
                  viewBox="0 0 79.118 20.319"
                >
                  <g id="refrens_white" transform="translate(0 0.004)">
                    <g id="Group_1419" data-name="Group 1419">
                      <path
                        id="Path_423"
                        data-name="Path 423"
                        d="M154.313,227.844l.52-.458-3.728-4.537v7.769Zm1.622,3.561-8.382,7.247v-20.3l3.982,4.553-.43-.059,3.728,4.537.344-.314,10.143,11.6-1.544-1.2-7.84-6.07Zm3.373-3.037,5.031,8.622.98,1.681-10.143-11.6.428-.391,2.3-2.068c.409-.373.069-.839-.393-.877l-5.973-.828-3.982-4.553,16.728,2.317c1.206.1,2.094,1.319,1.026,2.292Z"
                        transform="translate(-147.553 -218.356)"
                        fill="currentColor"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_426"
                        data-name="Path 426"
                        d="M205.162,230.794h2.383a14.236,14.236,0,0,1,2.7.166,3.011,3.011,0,0,1,2.4,3.05,3.227,3.227,0,0,1-.46,1.733,2.859,2.859,0,0,1-1.313,1.132,5.963,5.963,0,0,1-2.358.39l4.3,5.629h-1.466l-4.3-5.629h-.687v5.629h-1.2v-12.1Zm1.2,1.18v4.112l2.061.017a5.048,5.048,0,0,0,1.773-.23,1.869,1.869,0,0,0,.9-.736,2.074,2.074,0,0,0,.321-1.132,1.969,1.969,0,0,0-.327-1.106,1.816,1.816,0,0,0-.856-.711,5.131,5.131,0,0,0-1.759-.213Zm16.1,7.953.959.511a5.294,5.294,0,0,1-1.092,1.5,4.37,4.37,0,0,1-1.391.871,4.835,4.835,0,0,1-1.751.3,4.213,4.213,0,0,1-3.388-1.432,4.853,4.853,0,0,1-1.222-3.236,4.8,4.8,0,0,1,1.036-3.027,4.217,4.217,0,0,1,3.511-1.691,4.357,4.357,0,0,1,3.618,1.733,4.862,4.862,0,0,1,.978,3.053h-7.979a3.641,3.641,0,0,0,.986,2.545,3.142,3.142,0,0,0,2.358.994,3.79,3.79,0,0,0,1.319-.236,3.447,3.447,0,0,0,1.089-.626,5.275,5.275,0,0,0,.969-1.261Zm.011-2.41a3.837,3.837,0,0,0-.665-1.471,3.176,3.176,0,0,0-1.158-.888,3.525,3.525,0,0,0-1.51-.337,3.237,3.237,0,0,0-2.247.845,3.834,3.834,0,0,0-1.039,1.851Zm7-7.016v1.121a2.783,2.783,0,0,0-1.078-.272,1.053,1.053,0,0,0-.557.135.586.586,0,0,0-.277.312,4.287,4.287,0,0,0-.058.941v1.207h1.853v.994H227.49l-.005,7.954h-1.131v-7.954H225.19v-.994h1.164v-1.393a3.812,3.812,0,0,1,.175-1.37,1.4,1.4,0,0,1,.6-.66,1.939,1.939,0,0,1,1.011-.25,4.745,4.745,0,0,1,1.327.23Zm1.13,3.443h1.164v1.309a4.034,4.034,0,0,1,1.1-1.151,2.181,2.181,0,0,1,1.2-.376,2.06,2.06,0,0,1,1.009.3l-.593.966a1.572,1.572,0,0,0-.6-.157,1.635,1.635,0,0,0-1.1.472,3.015,3.015,0,0,0-.806,1.469,14.2,14.2,0,0,0-.211,3.089v3.025H230.6v-8.948Zm12.886,5.982.959.511a5.294,5.294,0,0,1-1.092,1.505,4.37,4.37,0,0,1-1.391.871,4.834,4.834,0,0,1-1.751.3,4.212,4.212,0,0,1-3.388-1.432,4.853,4.853,0,0,1-1.222-3.236,4.8,4.8,0,0,1,1.036-3.027,4.217,4.217,0,0,1,3.51-1.691,4.358,4.358,0,0,1,3.618,1.733,4.862,4.862,0,0,1,.978,3.053h-7.979a3.641,3.641,0,0,0,.986,2.545,3.142,3.142,0,0,0,2.358.994,3.788,3.788,0,0,0,1.319-.236,3.448,3.448,0,0,0,1.089-.626,5.271,5.271,0,0,0,.969-1.261Zm.012-2.41a3.838,3.838,0,0,0-.665-1.471,3.174,3.174,0,0,0-1.158-.888,3.525,3.525,0,0,0-1.51-.337,3.237,3.237,0,0,0-2.247.845,3.834,3.834,0,0,0-1.039,1.851Zm3.338-3.572h1.13v1.6a4.763,4.763,0,0,1,1.513-1.37,3.726,3.726,0,0,1,1.806-.452,3.115,3.115,0,0,1,1.762.508,3.029,3.029,0,0,1,1.136,1.373,7.3,7.3,0,0,1,.366,2.685v4.6h-1.13v-4.263a10.431,10.431,0,0,0-.13-2.062,2.325,2.325,0,0,0-.768-1.334,2.278,2.278,0,0,0-1.463-.447,2.783,2.783,0,0,0-1.85.691,3.207,3.207,0,0,0-1.078,1.707,12,12,0,0,0-.163,2.429v3.277h-1.13v-8.948Zm14.593.972-.731.764a2.617,2.617,0,0,0-1.782-.893,1.337,1.337,0,0,0-.947.371,1.146,1.146,0,0,0-.4.862,1.286,1.286,0,0,0,.324.829,4.564,4.564,0,0,0,1.366.946,5.114,5.114,0,0,1,1.721,1.28,2.365,2.365,0,0,1,.446,1.4,2.54,2.54,0,0,1-.765,1.867,2.6,2.6,0,0,1-1.912.764,3.311,3.311,0,0,1-1.46-.337,3.174,3.174,0,0,1-1.15-.929l.715-.823a2.474,2.474,0,0,0,1.848.994,1.66,1.66,0,0,0,1.163-.444,1.378,1.378,0,0,0,.48-1.042,1.355,1.355,0,0,0-.316-.879,5.107,5.107,0,0,0-1.433-.952,4.564,4.564,0,0,1-1.626-1.23,2.322,2.322,0,0,1-.432-1.384,2.27,2.27,0,0,1,.687-1.688,2.4,2.4,0,0,1,1.74-.671,3.606,3.606,0,0,1,2.453,1.2Z"
                        transform="translate(-182.314 -225.481)"
                        fill="currentColor"
                        fillRule="evenodd"
                      />
                    </g>
                  </g>
                </svg>
              </a>
            </div>
          </Link>
        </p>
        {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< here hekd>>>>>>>>>>>>>>>>>>>>>>>> */}
        <nav className="ms-auto px-5 flex item-center">
          {/* <p style={{ margin: "15px" }}>IN India</p> */}

          <div className="dropdown">
            <button
              className="text-slate-50 dropdown-toggle mt-3"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              IN India
            </button>
            <ul className="dropdown-menu w-70">
              <div className="flex">
                <li>
                  <Link
                    title="Global"
                    to="button"
                    href="https://www.refrens.com/en/free-online-invoice-generator"
                    className="dropdown-item"
                  >
                    <div className="sc-drMfKT cmVLHf">🌐 Global</div>
                  </Link>
                </li>
                <li>
                  <Link
                    title="Hong Kong"
                    type="button"
                    to="https://www.refrens.com/en-hk/free-online-invoice-generator"
                    className="dropdown-item ml-7"
                  >
                    <div className="">🇭🇰 Hong Kong</div>
                  </Link>
                </li>
              </div>
              <div className="flex">
                <li>
                  <Link
                    title="Bahrain"
                    type="button"
                    to="https://www.refrens.com/en-bh/free-online-invoice-generator"
                    className="dropdown-item"
                  >
                    <div className="sc-drMfKT cmVLHf">🇧🇭 Bahrain</div>
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    title="Vietnam"
                    type="button"
                    to="https://www.refrens.com/en-vn/free-online-invoice-generator"
                    className="dropdown-item ml-7"
                  >
                    <div className="sc-drMfKT cmVLHf">🇻🇳 Vietnam</div>
                  </Link>
                </li>
              </div>
              <div className="flex">
                <li>
                  <Link
                    title="Kuwait"
                    type="button"
                    to="https://www.refrens.com/en-kw/free-online-invoice-generator"
                    className="dropdown-item"
                  >
                    <div className="sc-drMfKT cmVLHf">🇰🇼 Kuwait</div>
                  </Link>
                </li>
                <li>
                  <Link
                    title="Oman"
                    type="button"
                    to="https://www.refrens.com/en-om/free-online-invoice-generator"
                    className="dropdown-item ml-8"
                  >
                    <div className="sc-drMfKT cmVLHf">🇴🇲 Oman</div>
                  </Link>
                </li>
              </div>
              <div className="flex">
                <li>
                  <Link
                    title="Qatar"
                    type="button"
                    to="https://www.refrens.com/en-qa/free-online-invoice-generator"
                    className="dropdown-item"
                  >
                    <div className="sc-drMfKT cmVLHf">🇶🇦 Qatar</div>
                  </Link>
                </li>
                <li>
                  <Link
                    title="Pakistan"
                    type="button"
                    to="https://www.refrens.com/en-pk/free-online-invoice-generator"
                    className="dropdown-item ml-10"
                  >
                    <div className="">🇵🇰 Pakistan</div>
                  </Link>
                </li>
              </div>
              <div className="flex">
                <li>
                  <Link
                    title="Philippines"
                    type="button"
                    to="https://www.refrens.com/en-ph/free-online-invoice-generator"
                    className="dropdown-item"
                  >
                    <div className="sc-drMfKT cmVLHf">🇵🇭 Philippines</div>
                  </Link>
                </li>
                <li>
                  <Link
                    title="Saudi Arabia"
                    type="button"
                    to="https://www.refrens.com/en-sa/free-online-invoice-generator"
                    className="dropdown-item "
                  >
                    <div className="sc-drMfKT cmVLHf">🇸🇦 Saudi Arabia</div>
                  </Link>
                </li>
              </div>
              <div className="flex">
                <li>
                  <Link
                    title="Singapore"
                    type="button"
                    to="https://www.refrens.com/en-sg/free-online-invoice-generator"
                    className="dropdown-item "
                  >
                    <div className="sc-drMfKT cmVLHf">🇸🇬 Singapore</div>
                  </Link>
                </li>
                <li>
                  <Link
                    title="Zimbabwe"
                    type="button"
                    to="https://www.refrens.com/en-zw/free-online-invoice-generator"
                    className="dropdown-item ml-2"
                  >
                    <div className="sc-drMfKT cmVLHf">🇿🇼 Zimbabwe</div>
                  </Link>
                </li>
              </div>
              <div className="flex">
                <li>
                  <Link
                    title="Bangladesh"
                    type="button"
                    to="https://www.refrens.com/en-bd/free-online-invoice-generator"
                    className="dropdown-item "
                  >
                    <div className="sc-drMfKT cmVLHf">🇧🇩 Bangladesh</div>
                  </Link>
                </li>
                <li>
                  <Link
                    title="Nigeria"
                    type="button"
                    to="https://www.refrens.com/en-ng/free-online-invoice-generator"
                    className="dropdown-item "
                  >
                    <div className="sc-drMfKT cmVLHf">🇳🇬 Nigeria</div>
                  </Link>
                </li>
              </div>
              <div className="flex">
                <li>
                  <Link
                    title="South Africa"
                    type="button"
                    to="https://www.refrens.com/en-za/free-online-invoice-generator"
                    className="dropdown-item "
                  >
                    <div className="sc-drMfKT cmVLHf">🇿🇦 South Africa</div>
                  </Link>
                </li>
                <li>
                  <Link
                    title="India"
                    type="button"
                    to="https://www.refrens.com/free-online-invoice-generator"
                    className="dropdown-item "
                  >
                    <div className="sc-drMfKT cmVLHf">🇮🇳 India</div>
                  </Link>
                </li>
              </div>
              <div className="flex">
                <li>
                  <Link
                    title="USA"
                    type="button"
                    to="https://www.refrens.com/en-us/free-online-invoice-generator"
                    className="dropdown-item "
                  >
                    <div className="sc-drMfKT cmVLHf">🇺🇸 USA</div>
                  </Link>
                </li>
                <li>
                  <Link
                    title="Canada"
                    type="button"
                    to="https://www.refrens.com/en-ca/free-online-invoice-generator"
                    className="dropdown-item ml-14"
                  >
                    <div className="sc-drMfKT cmVLHf">🇨🇦 Canada</div>
                  </Link>
                </li>
              </div>
              <div className="flex">
                <li>
                  <Link
                    title="United Kingdom"
                    type="button"
                    hto="https://www.refrens.com/en-gb/free-online-invoice-generator"
                    className="dropdown-item "
                  >
                    <div className="sc-drMfKT cmVLHf">🇬🇧 United Kingdom</div>
                  </Link>
                </li>
                <li>
                  <Link
                    title="UAE"
                    type="button"
                    to="https://www.refrens.com/en-ae/free-online-invoice-generator"
                    className="dropdown-item "
                  >
                    <div className="sc-drMfKT cmVLHf">🇦🇪 UAE</div>
                  </Link>
                </li>
              </div>
            </ul>
          </div>

          {/* <<<<<<<<<<<free tool>>>>>>>>>>>>> */}
          <div className="dropdown">
            <button
              className=" text-slate-50 dropdown-toggle mt-3"
              type="button"
              data-bs-toggle="dropdown"
              style={{ margin: "15px" }}
              aria-expanded="false"
            >
              Free Tool
            </button>
            <ul className="dropdown-menu ">
              <li style={{ fontWeight: "200", marginLeft: "1em" }}>
                Solutions
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="https://www.refrens.com/free-online-invoicing-software"
                >
                  Invoice Software
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="https://www.refrens.com/gst-billing-software"
                >
                  GST Billing Software
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="https://www.refrens.com/free-accounting-software"
                >
                  Accounting Software
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="https://www.refrens.com/e-invoicing-software"
                >
                  e-Invoicing Software
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="https://www.refrens.com/free-quotation-software"
                >
                  Quotation Software
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="https://www.refrens.com/api"
                >
                  Invoicing API
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="https://www.refrens.com/rf-sales-crm"
                >
                  Sales CRM
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="https://www.refrens.com/rf-indiamart-crm-integration"
                >
                  Indiamart CRM Integration
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="#"></Link>
              </li>
              <li style={{ fontWeight: "200", marginLeft: "2em" }}>
                Free Tools
              </li>
              <li>
                <Link className="dropdown-item" to="/">
                  Invoice Generator
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="#">
                  GST Invoice Maker
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="#">
                  Quotation Generator
                </Link>
              </li>
            </ul>
          </div>

          <Link
            to="https://www.refrens.com/refrens-premium"
            style={{ margin: "15px" }}
          >
            Pricing
          </Link>
        </nav>
        {!auth?.user ? (
          <div className="flex item-center mr-15 gap-5 ">
            {/* <Link to="/login" className="mt-2">
          Login
        </Link> */}
            <p className="mt-2">
              {" "}
              <Link to="/login">Login</Link>
            </p>

            <Link
              to="/register"
              className="focus:outline-none text-white bg-rose-600
           hover:bg-rose-500 focus:ring-4 focus:ring-red-300 font-medium rounded-lg 
           text-sm p-2 px-4 py-2.5 me-2 mb-1 dark:bg-red-600 dark:hover:bg-red-700
            dark:focus:ring-red-900"
            >
              register
            </Link>
          </div>
        ) : (
          <button type="button" className="" onClick={handleLogout}>
            logout
          </button>
        )}
      </header>
    </>
  );
}

export default Navbar;
