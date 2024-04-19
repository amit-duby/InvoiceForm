import React from "react";

const InvoiceElement = () => {
  return (
    <div className="ml-28 mt-10">
      <div className="sc-dLxkki hHUQuc">
        <div className="sc-dHIava dVRgYn">
          <h2 className="mt-2 text-3xl">
            What are the essentials elements of an invoice?
          </h2>
          <div className="mt-2" style={{ fontWeight: "300" }}>
            <p>
              There are some elements that are extremely important when you
              create invoices online. One must add all these elements to the
              invoice. If any of these are missing, the chances of the invoice
              getting rejected will increase. So one should keep all these
              points when creating the invoice.
            </p>
            <ol>
              <li className="mt-2 text-2xl">
                <strong>Invoice Header</strong>
              </li>
            </ol>
            <p className="mt-2">
              Every invoice should have a header section. It should be short and
              simple. Our{" "}
              <a
                href="https://www.refrens.com/free-online-invoice-generator "
                title="Invoice Generator Software"
              >
                <strong>online invoice generator software</strong>
              </a>{" "}
              allows you to add the header. The invoice header should clearly
              convey the purpose of the invoice. In the invoice header, you can
              also add a company logo or personal logo.{" "}
            </p>
            <p className="mt-2">
              You should also add the invoice number. The invoice number should
              be unique for every invoice you create. Having a unique invoice
              number can help you to track the invoice easily. The invoice
              number can be formatted in various ways. For example, 00001, or if
              you want to add a datewise invoice number then you can add
              2020/INV/001. You can do both on our free invoice maker, the
              system will take the next unique invoice number automatically.{" "}
            </p>
            <p className="mt-2">
              After adding the invoice number, the next important element is the
              invoice date and due date. It helps the client to clear the
              confusion about when the invoice is received and the due date of
              the invoice payment.{" "}
            </p>
            <p className="mt-2">
              The next important element is the reference number, and it can be
              anything like a purchase order number or proforma invoice number,
              or quotation number via quotation maker. Having a reference number
              can easily know the details by referring to the previous
              documents.
            </p>
            <ol start={2}>
              <li className="mt-2 text-2xl">
                <strong>Company/Freelancer Name</strong>
              </li>
            </ol>
            <p className="mt-2">
              When <strong>creating an invoice</strong>, it is important to add
              a legal company or freelancer's name and all the details like
              address, phone number, and email address. It should be different
              from the client's information so that the client can differentiate
              the address between both parties.
            </p>
            <ol start={3}>
              <li className="mt-2 text-2xl">
                <strong>Name and Details of the Client</strong>
              </li>
            </ol>
            <p className="mt-2">
              Add the client/company name with address, phone number, email
              address. Using our invoice generator, once you add the client
              details, it gets auto-saved and can be reused when creating the
              next invoice for the same user, thus saving time by not adding the
              details again from the scratch.{" "}
            </p>
            <ol start={4}>
              <li className="mt-2 text-2xl">
                <strong>Shipping details</strong>
              </li>
            </ol>
            <p className="mt-2">
              If you supply physical products, then it is necessary to add
              shipping details to the invoice. Shipping details include the name
              of the person to be delivered, address, city, state, date of
              delivery, transport details.
            </p>
            <ol start={5}>
              <li className="mt-2 text-2xl">
                <strong>Products/Services Name &amp; Description</strong>
              </li>
            </ol>
            <p className="mt-2">
              You must add the product/service name and description on the line
              item. If you have multiple products or services then all the items
              should be added in different rows. You can also add the image of
              the product to the item description. Our online invoice generator
              allows you to add images to the item description so that your
              client can get a clear vision of the product they are going to
              purchase. Other than this information, quantity or hours worked,
              unit price or hourly rate should also be added.
            </p>
            <p className="mt-2">
              Our <strong>free invoice generator</strong> allows the user to add
              multiple columns to the line item. You can also customize the
              columns by changing the name or dragging them up or down as per
              the priority. Same as adding, you can also hide certain columns if
              you don’t want to show them to your client.
            </p>
            <ol start={6}>
              <li className="mt-2 text-2xl">
                <strong>Tax and Fees</strong>
              </li>
            </ol>
            <p className="mt-2">
              Add tax rate, and tax amount along with extra charges or fees you
              are willing to add such as packaging charges, freight charges. You
              can also allow discounts to the client.{" "}
            </p>
            <ol start={7}>
              <li className="mt-2">
                <strong>Terms &amp; Conditions</strong>
              </li>
            </ol>
            <p className="mt-2">
              This section of the invoice is the most overlooked part. You must
              add the terms and conditions of the company and products as well.
              You can also add the payment terms and preferred payment methods.
              Penalties or extra fees that will be added to the breaching of the
              agreement should also be included on the invoice.
            </p>
            <ol start={8}>
              <li className="mt-2">
                <strong>Invoice Footer</strong>
              </li>
            </ol>
            <p className="mt-2">
              The invoice footer includes an additional notes section, where you
              can add more information that you wish your client should know
              about it. It also includes the signature, where you can add a
              signature image or digital signature. At the bottom, you can add
              your email address and contact information.
            </p>
          </div>
          <div
            className="focus:outline-none text-white  p-3
           bg-red-600 hover:bg-rose-500 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5  mt-5 dark:bg-red-600 dark:hover:bg-red-700
           dark:focus:ring-red-900 flex items-center"
            style={{ width: "19em", marginLeft: "40em" }}
          >
            <a type="button" href="/" className="sc-jTzLTM bSNXLK">
              <span className="sc-gZMcBi cBKiWn">Generate Online Invoice</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceElement;
