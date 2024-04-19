import React from "react";
import Layout from "../component/layout/Layout";
// import ShippedFrom from "./../component/shipping/ShippedFrom";
import Heros from "./Heros";
import InvoiceForm from "../component/InvoiceForm";
import InvoiceRefrence from "./Refrence/InvoiceRefrence";
import ONlineInvoice from "./ONlineInvoice";
import FreeInvoice from "./FreeInvoice";
import TypesInvoice from "./TypesInvoice";
import NonAccount from "./NonAccount";
import InvoiceNumber from "./InvoiceNumber";
import InvoiceElement from "./InvoiceElement";
import InvoiceFreelancer from "./InvoiceFreelancer";
import RefreshIn from "./RefreshIn";
import HomePage from "./HomePage";
import Footer from "./footer/Footer";

// import Formdata from "../component/Formdata";
// import InvoiceCTA from "./InvoiceCTA";
import CardPage from "./footer/CardPage";
import FeaturePage from "./footer/FeaturePage";
import ProfesionPage from "./footer/ProfesionPage";
import GeneraterPage from "./footer/GeneraterPage";
import BusinessPage from "./footer/BusinessPage";

function Main() {
  return (
    <main className="bg-slate-50">
      <Layout />
      <Heros />
      <InvoiceForm />
      <ProfesionPage />
      <CardPage />
      <FeaturePage />
      <GeneraterPage />
      <BusinessPage />
      <InvoiceRefrence />
      <FreeInvoice />
      <TypesInvoice />
      <InvoiceNumber />
      <InvoiceElement />
      <InvoiceFreelancer />
      <ONlineInvoice />
      <NonAccount />
      <RefreshIn />
      <HomePage />
      <Footer />
    </main>
  );
}

export default Main;
