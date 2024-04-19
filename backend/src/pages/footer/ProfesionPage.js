import React from "react";

const ProfesionPage = () => {
  return (
    <div className=" mt-5">
      <div className="sc-dHIava sc-bstyWg nAAge">
        <h2 className="text-3xl text-center">Profession-Wise Invoice Maker</h2>
        <div className="mt-5 ">
          <div className="flex ml-80">
            <a
              title="Freelancer Invoice"
              data-ga-on="click"
              data-ga-event-category="ProfessionTemplates"
              data-ga-event-action="/en/freelance-invoice-templates"
              data-ga-event-label="Freelancer Invoice"
              href="/en/freelance-invoice-templates"
              className=" bg-slate-50 w-40 h-8 "
              style={{ border: "1px solid black", borderRadius: "20px" }}
            >
              <span style={{ cursor: "pointer" }} className="ml-2 p-2">
                Freelancer Invoice
              </span>
            </a>
            <a
              title="Photography Invoice"
              data-ga-on="click"
              data-ga-event-category="ProfessionTemplates"
              data-ga-event-action="/en/photography-invoice-templates"
              data-ga-event-label="Photography Invoice"
              href="/en/photography-invoice-templates"
              className=" bg-slate-50 w-40 h-8 "
              style={{ border: "1px solid black", borderRadius: "20px" }}
            >
              <span style={{ cursor: "pointer" }} className="p-1">
                Photography Invoice
              </span>
            </a>
            <a
              title="Consulting Invoice"
              data-ga-on="click"
              data-ga-event-category="ProfessionTemplates"
              data-ga-event-action="/en/consulting-invoice-templates"
              data-ga-event-label="Consulting Invoice"
              href="/en/consulting-invoice-templates"
              className=" bg-slate-50 w-40 h-8 "
              style={{ border: "1px solid black", borderRadius: "20px" }}
            >
              <span style={{ cursor: "pointer" }} className="p-2 ml-1">
                Consulting Invoice
              </span>
            </a>
            <a
              title="Graphic Design Invoice"
              data-ga-on="click"
              data-ga-event-category="ProfessionTemplates"
              data-ga-event-action="/en/graphic-design-invoice-templates"
              data-ga-event-label="Graphic Design Invoice"
              href="/en/graphic-design-invoice-templates"
              className=" bg-slate-50 w-48 h-8 "
              style={{ border: "1px solid black", borderRadius: "20px" }}
            >
              <span style={{ cursor: "pointer" }} className="ml-2 p-1">
                Graphic Design Invoice
              </span>
            </a>
            <a
              title="GST Invoice"
              data-ga-on="click"
              data-ga-event-category="ProfessionTemplates"
              data-ga-event-action="/en-in/online-gst-invoice-maker"
              data-ga-event-label="GST Invoice"
              href="/online-gst-invoice-maker"
              className=" bg-slate-50 w-40 h-8 "
              style={{ border: "1px solid black", borderRadius: "20px" }}
            >
              <span style={{ cursor: "pointer" }} className="ml-3 p-3">
                GST Invoice
              </span>
            </a>
          </div>
          <div className="flex  mt-2 gap-2" style={{ marginLeft: "29em" }}>
            <a
              title="Proforma Invoice"
              data-ga-on="click"
              data-ga-event-category="ProfessionTemplates"
              data-ga-event-action="/en-in/proforma-invoice-templates"
              data-ga-event-label="Proforma Invoice"
              href="/proforma-invoice-templates"
              className=" bg-slate-50 w-40 h-8 "
              style={{ border: "1px solid black", borderRadius: "20px" }}
            >
              <span style={{ cursor: "pointer" }} className="ml-2 p-2">
                Proforma Invoice
              </span>
            </a>
            <a
              title="Quotation & Estimate"
              data-ga-on="click"
              data-ga-event-category="ProfessionTemplates"
              data-ga-event-action="/en-in/free-quotation-templates"
              data-ga-event-label="Quotation & Estimate"
              href="/free-quotation-templates"
              className=" bg-slate-50 w-44 h-8 "
              style={{ border: "1px solid black", borderRadius: "20px" }}
            >
              <span style={{ cursor: "pointer" }} className="p-2">
                Quotation &amp; Estimate
              </span>
            </a>
            <a
              title="Commercial Invoice Templates"
              data-ga-on="click"
              data-ga-event-category="ProfessionTemplates"
              data-ga-event-action="/en/commercial-invoice-templates"
              data-ga-event-label="Commercial Invoice Templates"
              href="/en/commercial-invoice-templates"
              className=" bg-slate-50 w-49 h-8 "
              style={{ border: "1px solid black", borderRadius: "20px" }}
            >
              <span style={{ cursor: "pointer" }} className="sc-kgoBCf glzdyl">
                Commercial Invoice Templates
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfesionPage;
