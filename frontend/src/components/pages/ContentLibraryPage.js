// src/components/pages/ContentLibraryPage.js
import React from "react";
import { FaFilePdf, FaFilePowerpoint, FaFileAlt } from "react-icons/fa";
import "./ContentLibraryPage.css";

const contentItems = [
  {
    title: "Sales Brochure",
    type: "PDF",
    icon: <FaFilePdf size={40} color="#E74C3C" />,
    link: "/docs/sales-brochure.pdf",
  },
  {
    title: "Product Demo PPT",
    type: "PPT",
    icon: <FaFilePowerpoint size={40} color="#D35400" />,
    link: "/docs/product-demo.pptx",
  },
  {
    title: "Company Profile",
    type: "PDF",
    icon: <FaFilePdf size={40} color="#E74C3C" />,
    link: "/docs/company-profile.pdf",
  },
  {
    title: "Marketing Strategy",
    type: "DOC",
    icon: <FaFileAlt size={40} color="#2980B9" />,
    link: "/docs/marketing-strategy.docx",
  },
];

const ContentLibraryPage = () => {
  return (
    <div className="content-library-page">
      <h2>Content Library</h2>
      <div className="content-grid">
        {contentItems.map((item, index) => (
          <div className="content-card" key={index}>
            <div className="file-icon">{item.icon}</div>
            <h4>{item.title}</h4>
            <p>{item.type} File</p>
            <a href={item.link} download className="download-btn">
              Download
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentLibraryPage;
