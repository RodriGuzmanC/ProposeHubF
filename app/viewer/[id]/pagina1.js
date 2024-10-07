import React from "react";


const ProposalCoverPage = ({data}) => {
  return (
    <div className="proposal-container">
      {/* Company Name and Logo */}
      <header className="header-section">
        <div className="company-logo">[Company Logo]</div>
        <div className="company-name">COMPANY NAME</div>
      </header>

      {/* Title and Subtitle */}
      <div className="title-section">
        <h1 className="main-title">{data.presentacion.titulo}</h1>
        <p className="subtitle">
          Constellations represent an animal, a person, or an object.
        </p>
      </div>

      {/* Decorative Elements */}
      <div className="decorative-elements">
        <div className="abstract-shape blue"></div>
        <div className="abstract-shape pink"></div>
        <div className="abstract-shape orange"></div>
        <div className="abstract-shape black"></div>
      </div>

      {/* Presented Information */}
      <footer className="footer-section">
        <div className="presented-to">
          <p>Presented to</p>
          <p className="name">[Client Name]</p>
        </div>
        <div className="presented-by">
          <p>Presented by</p>
          <p className="name">[Your Name]</p>
        </div>
      </footer>
    </div>
  );
};

export default ProposalCoverPage;
