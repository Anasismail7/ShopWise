import React from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ items, pageTitle }) => {
  return (
    <div className="breadcrumbs">
      {pageTitle && <h2>{pageTitle}</h2>}{" "}
      {/* Render h2 only if pageTitle is provided */}
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <Link className="breadcrumbs-items" to={item.path}>{item.label}</Link>
            {index < items.length && <span> &gt; </span>}
          </li>
        ))}
        <li className="page-title">{pageTitle}</li>
      </ul>
    </div>
  );
};

export default Breadcrumbs;
