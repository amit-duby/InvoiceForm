import React from "react";

const InvoiceRefrence = () => {
  return (
    <div
      className=" bg-slate-100 text-center justify-center"
      style={{ height: "50vh" }}
    >
      <h2 className=" ml-20 mt-5 text-3xl ">Free Softwares from Refrens</h2>
      <div className="mt-5 gap-2 flex " style={{ marginLeft: "25em" }}>
        <div
          style={{
            width: "12vw",
            height: "5vh",
            border: "1px solid black",
            borderRadius: "10em",
            backgroundColor: "white",
            // marginLeft: "20em",
            padding: "3px",
          }}
        >
          <a
            title="Accounting Software"
            data-ga-on="click"
            data-ga-event-category="ProfessionTemplates"
            data-ga-event-action="/en-in/free-accounting-software"
            data-ga-event-label="Accounting Software"
            href="/free-accounting-software"
          >
            <span
              style={{ cursor: "pointer", padding: "5px" }}
              className="sc-kgoBCf glzdyl"
            >
              Accounting Software
            </span>
          </a>
        </div>
        <div
          style={{
            width: "20vw",
            height: "5vh",
            border: "1px solid black",
            borderRadius: "10em",
            backgroundColor: "white",
            // marginLeft: "20em",
            padding: "3px",
          }}
        >
          <a
            title="Accounting Software for Small Business"
            data-ga-on="click"
            data-ga-event-category="ProfessionTemplates"
            data-ga-event-action="/en-in/accounting-software-for-small-business"
            data-ga-event-label="Accounting Software for Small Business"
            href="/accounting-software-for-small-business"
            className="sc-bsBFbB XOveD"
          >
            <span style={{ cursor: "pointer" }} className="sc-kgoBCf glzdyl">
              Accounting Software for Small Business
            </span>
          </a>
        </div>

        <div
          style={{
            width: "18vw",
            height: "5vh",
            border: "1px solid black",
            borderRadius: "10em",
            backgroundColor: "white",
            // marginLeft: "20em",
            padding: "3px",
          }}
        >
          <a
            title="Accounting Software for Startups"
            data-ga-on="click"
            data-ga-event-category="ProfessionTemplates"
            data-ga-event-action="/en-in/accounting-software-for-startups"
            data-ga-event-label="Accounting Software for Startups"
            href="/accounting-software-for-startups"
            className="sc-bsBFbB XOveD"
          >
            <span style={{ cursor: "pointer" }} className="sc-kgoBCf glzdyl">
              Accounting Software for Startups
            </span>
          </a>
        </div>
      </div>
      <div className="flex mt-2 gap-2" style={{ marginLeft: "33em" }}>
        <div
          style={{
            width: "10vw",
            height: "5vh",
            border: "1px solid black",
            borderRadius: "10em",
            backgroundColor: "white",
            // marginLeft: "20em",
            padding: "3px",
          }}
        >
          <a
            title="Sales CRM Software"
            data-ga-on="click"
            data-ga-event-category="ProfessionTemplates"
            data-ga-event-action="/en-in/rf-sales-crm"
            data-ga-event-label="Sales CRM Software"
            href="/rf-sales-crm"
            className="sc-bsBFbB XOveD"
          >
            <span style={{ cursor: "pointer" }} className="sc-kgoBCf glzdyl">
              Sales CRM Software
            </span>
          </a>
        </div>
        <div
          style={{
            width: "12vw",
            height: "5vh",
            border: "1px solid black",
            borderRadius: "10em",
            backgroundColor: "white",
            // marginLeft: "20em",
            padding: "3px",
          }}
        >
          <a
            title="Lead to Quote Software"
            data-ga-on="click"
            data-ga-event-category="ProfessionTemplates"
            data-ga-event-action="/en-in/rf-quote-software-with-lead-management-system"
            data-ga-event-label="Lead to Quote Software"
            href="/rf-quote-software-with-lead-management-system"
            className="sc-bsBFbB XOveD"
          >
            <span style={{ cursor: "pointer" }} className="sc-kgoBCf glzdyl">
              Lead to Quote Software
            </span>
          </a>
        </div>
        <div
          style={{
            width: "10vw",
            height: "5vh",
            border: "1px solid black",
            borderRadius: "10em",
            backgroundColor: "white",

            padding: "3px",
          }}
        >
          <a
            title="Utility Bill Generator"
            data-ga-on="click"
            data-ga-event-category="ProfessionTemplates"
            data-ga-event-action="/en-in/utility-bill-generator"
            data-ga-event-label="Utility Bill Generator"
            href="/utility-bill-generator"
            className="sc-bsBFbB XOveD"
          >
            <span style={{ cursor: "pointer" }} className="sc-kgoBCf glzdyl">
              Utility Bill Generator
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default InvoiceRefrence;
