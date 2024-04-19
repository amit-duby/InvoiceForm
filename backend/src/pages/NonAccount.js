import React from "react";

const NonAccount = () => {
  return (
    <div className="ml-28 mt-10">
      <h2 className="mt-2 text-3xl"> Invoice generator for non-accountants</h2>
      <div className="mt-3" style={{ fontWeight: "300" }}>
        <p className="mt-2">
          Refrens Invoice generator is specially developed for non-accountants
          so that it becomes easy and simple for non-accountants to create
          invoices instantly without having to follow too many steps.{" "}
        </p>
        <p className="mt-3">
          <strong>Simple User Interface</strong> - Refrens online invoice
          generator is designed to be easy to use and user-friendly, with
          intuitive interfaces and clear instructions. This makes it simple for
          non-accountants to create and send invoices without prior accounting
          experience or training.
        </p>
        <p className="mt-2">
          <strong>Templates and Customization Options</strong> - Refrens invoice
          generator offers templates and customization options that allow users
          to personalize their invoices to match their brand and preferences.
          This makes it easy for non-accountants to create professional-looking
          invoices that meet their needs.
        </p>
        <p className="mt-2">
          <strong>Automated Processes</strong> - Online invoice generators
          automate many of the time-consuming and manual processes associated
          with traditional invoicing, such as recurring invoices, email
          scheduling, payment reminders, one-click conversion from invoice to
          another document like debit notes or credit notes without creating
          them from scratch. Moreover, there is no need to add the client
          details every time when creating the invoice, the system stores the
          details of your client and you can use it anytime when creating the
          invoice. When using Refrens invoice maker, you can effortlessly manage
          all the invoices in one place and create in-depth reports based on the
          invoice and the payment you received from the client.
        </p>
        <p className="">
          Additionally, it helps to generate IRN invoices and e-invoices so it
          becomes easy for you to file taxes. Also helps you generate journal
          entries, vouchers, balance sheets and many more. This makes it easy
          for non-accountants to manage their invoicing process without prior
          experience or training.
        </p>
        <p className="mt-3">
          <strong>Mobile Accessibility</strong> - Refrens invoice generator is
          accessible from any device be it a laptop, desktop, mobile or tablet,
          all you need is an internet connection, making it easy for
          non-accountants to create and send invoices from anywhere and anytime.
        </p>
        <p className="mt-3">
          <strong>Customer Support</strong> - Refens invoice maker offers
          customer support, either through live chat, email, or phone. This
          makes it easy for non-accountants to get help when they need it,
          reducing the frustration and confusion often associated with
          traditional invoicing methods.
        </p>
      </div>
      <div
        className="focus:outline-none text-white  p-3
           bg-red-600 hover:bg-rose-500 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5  mt-5 dark:bg-red-600 dark:hover:bg-red-700
           dark:focus:ring-red-900 flex items-center"
        style={{ width: "19em", marginLeft: "40em" }}
      >
        <a type="button" href="/" className="sc-jTzLTM bSNXLK">
          <span className="sc-gZMcBi cBKiWn">Generate Free Invoice</span>
        </a>
      </div>
    </div>
  );
};

export default NonAccount;
