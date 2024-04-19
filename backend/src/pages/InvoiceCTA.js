import React from "react";

function InvoiceCTA() {
  return (
    <div className="invoice-cta flex items-center justify-center">
      <div className="py-8 px-16">
        <div className="sc-gbOuXE gdHsPb css-4cffwv">
          <span
            role="button"
            tabIndex={0}
            aria-label="Pop"
            className="sc-hORach kuSOCR"
          >
            <button
              aria-label="Toggle Free Tools"
              className="sc-htoDjs jugxKz sc-dRFtgE PwzMQ"
              type="button"
            >
              <div className="sc-ejGVNB erBDKU">Free Tools</div>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 448 512"
                height={12}
                width={12}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" />
              </svg>
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default InvoiceCTA;
