import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../Navbar";
function Layout({ children, title, description, keywords, author }) {
  return (
    <div className="div w-full">
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Navbar />
      <main> {children}</main>
    </div>
  );
}

export default Layout;
