import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import Navbar from "./Navbar";

const LIMIT = 6;

const totalPagesCalculator = (total, limit) => {
  const pages = [];
  for (let x = 1; x <= Math.ceil(total / limit); x++) {
    pages.push(x);
  }
  return pages;
};

const TaxModal = () => {
  return (
    <table class=" bg-violet-700">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
    </table>
  );
};

// export default GetInvoiceFormData;

export default TaxModal;
