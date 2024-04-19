import React from "react";

const InvoiceNumber = () => {
  return (
    <div className="ml-28 mt-10">
      <div className="sc-dLxkki hHUQuc">
        <div className="sc-dHIava dVRgYn">
          <h2 className="mt-2 text-3xl">
            Free invoice generator to create sequential invoice number
          </h2>
          <div className="mt-2" style={{ fontWeight: "300" }}>
            <h3 id="whatisaninvoicenumber" className="mt-2 text-2xl">
              What is an invoice number?
            </h3>
            <p className="mt-2">
              <strong>
                An invoice number is a unique identifier assigned to each
                invoice that a business issues to its clients. It plays a
                crucial role in organizing and tracking invoices.
              </strong>{" "}
            </p>
            <p className="mt-2">
              The invoice number should be sequentially followed, and it's
              recommended to use a combination of letters and numbers for
              creating unique invoice numbers.{" "}
            </p>
            <p className="mt-2">
              Using an invoice generator, you can easily customize the invoice
              number format as per your business requirements.{" "}
            </p>
            <p className="mt-2">
              For instance, you can use INV001 or INV/001 as your first invoice
              number and then follow the same pattern for subsequent invoices.
              This helps to avoid any confusion and makes it easier for both
              parties to reference the invoice.
            </p>
            <h3 id="howtoassigninvoicenumber" className="mt-2 text-2xl">
              How to assign invoice number?
            </h3>
            <p className="mt-2">
              There are numerous methods to add the invoice number. Of which the
              best methods are as followers.
            </p>
            <ul>
              <li className="mt-2">
                <p>Sequential Method</p>
                <p className="mt-2">
                  This is the most common and easy method to assign the invoice
                  number and is also used by most businesses. Here your invoice
                  number is in increasing order and starts from 1.
                </p>
                <p className="mt-2">
                  For example: Invoice No 001, Invoice No 002, Invoice No 003
                  and so on or 2021/INV/001, 2021/INV/002, 2021/INV/003, and so
                  on.{" "}
                </p>
              </li>
              <li className="mt-2">
                <p>Date Wise Method</p>
                <p className="mt-2">
                  Here, you use the date and unique number as the invoice
                  number. For example: If you are issuing the invoice on April
                  23, 2021, then you can have invoice number 2021-04-23-001.
                  Here it becomes easy to track the invoice, date-wise.
                </p>
              </li>
              <li className="mt-2 ">
                <p>Project Id Method</p>
                <p className="mt-2">
                  Many businesses work on different projects or gigs at the same
                  time. Here you can assign the project number as the invoice
                  number. For example, if you have completed project number 185,
                  then you can assign invoice number 185. If you are undertaking
                  a big project and have multiple sub-projects in it, then you
                  can assign invoice numbers 185-001 and so on.
                </p>
              </li>
              <li className="mt-2 ">
                <p>Client Id Method</p>
                <p className="mt-2">
                  This is one of the rare methods, as very rare businesses
                  assign client IDs to their clients. Suppose you have
                  undertaken the project of a client whose client id is 387,
                  then you can issue the invoice with invoice number 387-001.
                </p>
              </li>
            </ul>
            <h3
              id="usefreeinvoicegeneratorfreelytomakesequentialinvoicenumber"
              className="mt-2 text-3xl"
            >
              Use free invoice generator freely to make sequential invoice
              number
            </h3>
            <p className="mt-2">
              You can use Refrens free invoice generator, to{" "}
              <strong>create invoices online</strong> instantly. As you assign
              the first invoice number the system will automatically take the
              next invoice number in increasing order. You can use all the above
              methods to assign the invoice number and can track, organize and
              send the invoice to the client.
            </p>
          </div>
          <div
            className="focus:outline-none text-white  p-3
           bg-red-600 hover:bg-rose-500 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5  mt-5 dark:bg-red-600 dark:hover:bg-red-700
           dark:focus:ring-red-900 flex items-center"
            style={{ width: "19em", marginLeft: "40em" }}
          >
            <a type="button" href="/" className="sc-jTzLTM bSNXLK">
              <span className="sc-gZMcBi cBKiWn">Create Invoice Online</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceNumber;
