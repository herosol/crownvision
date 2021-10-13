import React, { Component } from "react";
import HeaderLogo from "../Common/HeaderLogo";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="contain">
          <div className="flexRow flex">
            <div className="col col1">
              <HeaderLogo type="footer" />
              <p>
                Nostrum, incidunt vitae consectetur distinctio quisquam sequi
                asperiores. Ipsa perspiciatis quo magni sunt sint quod, rerum
                voluptate reiciendis quidem nesciunt itaque inventore.
              </p>
            </div>
            <div className="col col2">
              <h6>Our Services</h6>
              <ul className="lst">
                <li>
                  <a href="privacy-policy.php">Privacy Policy</a>
                </li>
                <li>
                  <a href="terms-and-conditions.php">Terms &amp; Conditions</a>
                </li>
                <li>
                  <a href="partner.php">Partner with us</a>
                </li>
                <li>
                  <a href="faq.php">FAQ's</a>
                </li>
                <li>
                  <a href="aml-policy.php">AML Policy</a>
                </li>
              </ul>
            </div>
            <div className="col col3">
              <h6>Quick Links</h6>
              <ul className="lst">
                <li>
                  <a href="index.php">Home</a>
                </li>
                <li>
                  <a href="about.php">About us</a>
                </li>
                <li>
                  <a href="anti-spam-policy.php">Anti Spam Policy</a>
                </li>
                <li>
                  <a href="collaborator.php">Our Collaborator</a>
                </li>
                <li>
                  <a href="experience.php">Experience</a>
                </li>
                <li>
                  <a href="contact.php">Contact us</a>
                </li>
              </ul>
            </div>
            <div className="col col4">
              <h6>Get in Search</h6>
              <ul className="lst infoLst">
                <li>
                  <span>
                    201 Donna Street, <br />
                    west brooks United States
                  </span>
                </li>
                <li />
                <li>
                  Email:{" "}
                  <a href="mailto:mail@crownvision.com">mail@crownvision.com</a>
                </li>
                <li>
                  Phone: <a href="tel:+44293888221">+44293888221</a> /{" "}
                  <a href="tel:+6327882990">+6327882990</a>
                </li>
              </ul>
              <ul className="social flex">
                <li>
                  <a href="?" target="_blank" style={{ display: "block" }}>
                    <img
                      src={
                        require("../../assets/images/social-skype.svg").default
                      }
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a href="?" target="_blank" style={{ display: "block" }}>
                    <img
                      src={
                        require("../../assets/images/social-twitter.svg")
                          .default
                      }
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a href="?" target="_blank" style={{ display: "block" }}>
                    <img
                      src={
                        require("../../assets/images/social-whatsapp.svg")
                          .default
                      }
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a href="?" target="_blank" style={{ display: "block" }}>
                    <img
                      src={
                        require("../../assets/images/social-vimeo.svg").default
                      }
                      alt=""
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright relative">
          <div className="contain">
            <div className="inner">
              <p>
                © 2021 <a href="index.php">crownvisionmedia.com</a>
              </p>
              <ul className="smLst flex">
                <li>
                  <a href="faq.php">FAQ's</a>
                </li>
                <li>
                  <a href="leaders-arena.php">Leaders Arena</a>
                </li>
                <li>
                  <a href="deposit.php">Deposit</a>
                </li>
                <li>
                  <a href="download-brochure.php">Download Brochure</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
