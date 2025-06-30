import React from "react";
import "./styles/landing.css";
function Footer() {
  return (
    <footer style={{backgroundColor:"#fbfbfb"}} className="border-top">
    <div className="container-fluid w-75   mt-5 px-5 pb-3 ">
      <div className="row">
        <div className="col">
          <img
            src="media/images/logo.svg"
            alt="logo"
            style={{ width: "60%" }}
          />
          <p className="text-muted mt-3">© 2010 - 2025, Zerodha Broking Ltd.</p>
          <p className="text-muted">All rights reserved.</p>
          <span className="mx-2">
            <i className="fa-brands fa-x-twitter"></i>
          </span>
          <span className="mx-2">
            <i className="fa-brands fa-facebook-f"></i>
          </span>

          <span className="mx-2">
            <i className="fa-brands fa-instagram"></i>
          </span>
          <span className="mx-2">
            <i className="fa-brands fa-linkedin-in"></i>
          </span>
          <hr style={{ borderTop: "2px solid #d3d3d3" }} />
          <i className="fa-brands fa-youtube mx-2"></i>
          <i className="fa-brands fa-whatsapp mx-2"></i>
          <i className="fa-brands fa-telegram mx-2"></i>
        </div>

        <div className="col">
          <h4 className="mb-4 fs-5">Account</h4>

          <p className="text-muted">Open demat account</p>
          <p className="text-muted">Minor demat account</p>
          <p className="text-muted">NRI demat account</p>
          <p className="text-muted">Commodity</p>
          <p className="text-muted">Dematerialisation</p>
          <p className="text-muted">Fund transfer</p>
          <p className="text-muted">MTF</p>
          <p className="text-muted">Referral program</p>
        </div>
        <div className="col">
          <h4 className="mb-4 fs-5">Support</h4>
          <p className="text-muted">Contact us</p>
          <p className="text-muted">Support portal</p>
          <p className="text-muted">How to file a complaint?</p>
          <p className="text-muted">Status of your complaints</p>
          <p className="text-muted">Bulletin</p>
          <p className="text-muted">Circular</p>
          <p className="text-muted">Z-Connect blog</p>
          <p className="text-muted">Downloads</p>
        </div>

        <div className="col">
          <h4 className="mb-4 fs-5">About</h4>
          <p className="text-muted">Philosophy</p>
          <p className="text-muted">Press & media</p>
          <p className="text-muted">Careers</p>
          <p className="text-muted">Status of your complaints</p>
          <p className="text-muted">Zerodha Cares (CSR)</p>
          <p className="text-muted">Zerodha.tech</p>
          <p className="text-muted">Open source</p>
        </div>
        <div className="col">
          <h4 className="mb-4 fs-5">Upcoming IPOs</h4>
          <p className="text-muted">Brokerage charges</p>
          <p className="text-muted">Market holidays</p>
          <p className="text-muted">Economic calendar</p>
          <p className="text-muted">Calculators</p>
          <p className="text-muted">Markets</p>
          <p className="text-muted">Sectors</p>
        </div>
      </div>
      <div className="row mt-3">
        <p className="para text-muted">
          Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
          no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
          Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading
          through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI
          Registration no.: INZ000038238 Registered Address: Zerodha Broking
          Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public
          School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For
          any complaints pertaining to securities broking please write to
          <a  className="text-decoration-none" href="#"> complaints@zerodha.com</a>, for DP related to <a  className="text-decoration-none" href="#">dp@zerodha.com</a>. Please
          ensure you carefully read the Risk Disclosure Document as prescribed
          by SEBI | ICF
        </p>
        <p className="para text-muted">
          Procedure to file a complaint on <a  className="text-decoration-none" href="#">SEBI SCORES</a>: Register on SCORES
          portal. Mandatory details for filing complaints on SCORES: Name, PAN,
          Address, Mobile Number, E-mail ID. Benefits: Effective Communication,
          Speedy redressal of the grievances
        </p>
        <p className="para text-muted">
         <a  className="text-decoration-none" href="#"> Smart Online Dispute Resolution</a> | <a  className="text-decoration-none" href="#">Grievances Redressal Mechanism</a>
        </p>
        <p className="para text-muted">
          Investments in securities market are subject to market risks; read all
          the related documents carefully before investing.
        </p>
        <p className="para text-muted">
          Attention investors: 1) Stock brokers can accept securities as margins
          from clients only by way of pledge in the depository system w.e.f
          September 01, 2020. 2) Update your e-mail and phone number with your
          stock broker / depository participant and receive OTP directly from
          depository on your e-mail and/or mobile number to create pledge. 3)
          Check your securities / MF / bonds in the consolidated account
          statement issued by NSDL/CDSL every month.
        </p>
        <p className="para text-muted">
          "Prevent unauthorised transactions in your account. Update your mobile
          numbers/email IDs with your stock brokers. Receive information of your
          transactions directly from Exchange on your mobile/email at the end of
          the day. Issued in the interest of investors. KYC is one time exercise
          while dealing in securities markets - once KYC is done through a SEBI
          registered intermediary (broker, DP, Mutual Fund etc.), you need not
          undergo the same process again when you approach another
          intermediary." Dear Investor, if you are subscribing to an IPO, there
          is no need to issue a cheque. Please write the Bank account number and
          sign the IPO application form to authorize your bank to make payment
          in case of allotment. In case of non allotment the funds will remain
          in your bank account. As a business we don't give stock tips, and have
          not authorized anyone to trade on behalf of others. If you find anyone
          claiming to be part of Zerodha and offering such services, please
          <a className="text-decoration-none" href="#"> create a ticket here</a>.
        </p>
      </div>
      <div className="row text-center">
       <div className="col">
       <span className="mx-3 text-muted">NSE</span>
        <span className="mx-3 text-muted">BSE</span>
        <span className="mx-3 text-muted">Terms & conditions </span>
        <span className="mx-3 text-muted">Policies & procedures </span>
        <span className="mx-3 text-muted">Privacy policy </span>
        <span className="mx-3 text-muted">Disclosure </span>
        <span className="mx-3 text-muted">For investor's attention</span>
        <span className="mx-3 text-muted">Investor charter</span>
       </div>
        
      </div>
    </div>
    </footer>
  );
}

export default Footer;
