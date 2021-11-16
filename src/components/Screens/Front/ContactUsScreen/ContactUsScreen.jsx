import React, { Component } from "react";
import { connect } from "react-redux";
import LocationScreenSkeleton from "../../../Skeletons/LocationsScreenSkeleton";
import PropTypes from "prop-types";
import {
  fetchPageContent,
  saveContactMessage
} from "../../../../states/actions/contactUsScreenActions";
import * as helpers from "../../../../utils/Helpers";
import Text from "../../../Common/Text";
import { EMPTY } from "../../../../utils/Constants";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import SimpleReactValidator from "simple-react-validator";
import { ToastContainer } from "react-toastify";

class LocationsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        name: EMPTY,
        email: EMPTY,
        phone: EMPTY,
        msg: EMPTY
      }
    };
    this.validator = new SimpleReactValidator();
  }

  componentDidMount() {
    this.props.fetchPageContent();
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState(({ formData }) => ({
      formData: {
        ...formData,
        [name]: value
      }
    }));
  };

  handlePhoneInputChange = (value, country, event) => {
    this.setState(({ formData }) => ({
      formData: {
        ...formData,
        phone: value
      }
    }));
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    if (this.validator.allValid()) {
      this.props.saveContactMessage(this.state.formData);
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  };

  handleFormReset() {
    this.setState(({ formData }) => ({
      formData: {
        name: EMPTY,
        email: EMPTY,
        phone: EMPTY,
        msg: EMPTY
      }
    }));
  }

  render() {
    console.log(this.props);
    const { formData } = this.state;
    const { skeleton, processing, formSuccess } = this.props;
    const { page_title, meta_description, row } = this.props.content;

    if (!skeleton) {
      helpers.setPageTitle({ page_title, meta_description });
    }

    return skeleton ? (
      <main>
        <LocationScreenSkeleton />
      </main>
    ) : (
      <main className="common">
        <ToastContainer />
        <section
          id="sBanner"
          style={{
            backgroundImage:
              "url(" +
              require("../../../../assets/images/photo-1530685932526-48ec92998eaa.jpg")
                .default +
              ")"
          }}
        >
          <div className="contain">
            <div className="content">
              <h1>
                Contact <em>us</em>
              </h1>
            </div>
          </div>
        </section>
        {/* sBanner */}
        <section id="contact">
          <div className="contain">
            <div className="flexRow flex">
              <div className="col col1">
                <div className="content">
                  <Text parse={true} string={row.detail} />

                  <ul className="infoLst">
                    <li>
                      <img
                        src={
                          require("../../../../assets/images/phone.png").default
                        }
                      />
                      <a href="tel:+44293888221">+44293888221</a> /{" "}
                      <a href="tel:+6327882990">+6327882990</a>
                    </li>
                    <li>
                      <img
                        src={
                          require("../../../../assets/images/email.png").default
                        }
                      />
                      <a href="mailto:mail@crownvision.com">
                        mail@crownvision.com
                      </a>
                    </li>
                    <li>
                      <img
                        src={
                          require("../../../../assets/images/fax.png").default
                        }
                      />
                      <span>+7636467882</span>
                    </li>
                    <li>
                      <img
                        src={
                          require("../../../../assets/images/map.png").default
                        }
                      />
                      <span>201 Donna Street , west brookls United States</span>
                    </li>
                  </ul>
                  <div id="locationMap">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3380.46795716484!2d72.68540231452256!3d32.08363608118693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392177c8976de103%3A0xfd13b9e98e36a9fe!2sHero+Solutions!5e0!3m2!1sen!2s!4v1565165927597!5m2!1sen!2s"
                      width="100%"
                      height={280}
                      frameBorder={0}
                      style={{ border: 0 }}
                      allowFullScreen
                    />
                  </div>
                  <div className="flex">
                    <h5>Follow us</h5>
                    <ul className="social flex">
                      <li>
                        <a
                          href="?"
                          target="_blank"
                          style={{ display: "block" }}
                        >
                          <img
                            src={
                              require("../../../../assets/images/social-skype.svg")
                                .default
                            }
                            alt=""
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="?"
                          target="_blank"
                          style={{ display: "block" }}
                        >
                          <img
                            src={
                              require("../../../../assets/images/social-twitter.svg")
                                .default
                            }
                            alt=""
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="?"
                          target="_blank"
                          style={{ display: "block" }}
                        >
                          <img
                            src={
                              require("../../../../assets/images/social-whatsapp.svg")
                                .default
                            }
                            alt=""
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="?"
                          target="_blank"
                          style={{ display: "block" }}
                        >
                          <img
                            src={
                              require("../../../../assets/images/social-vimeo.svg")
                                .default
                            }
                            alt=""
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col col2">
                <form onSubmit={this.handleFormSubmit}>
                  <div className="head">
                    <h4>Send us a message</h4>
                  </div>
                  <div className="row formRow">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-xx-12 txtGrp">
                      <h6>Name</h6>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={this.handleInputChange}
                        className="txtBox"
                      />
                      {this.validator.message(
                        "name",
                        formData.name,
                        "required|min:2|max:20",
                        { className: "validation-error" }
                      )}
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-xx-12 txtGrp">
                      <h6>Email ID</h6>
                      <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={this.handleInputChange}
                        className="txtBox"
                      />
                      {this.validator.message(
                        "email",
                        formData.email,
                        "required|email",
                        { className: "validation-error" }
                      )}
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-xx-12 txtGrp">
                      <h6>Phone</h6>
                      <PhoneInput
                        name="phone"
                        country={"gb"}
                        value={formData.phone}
                        onChange={this.handlePhoneInputChange}
                      />
                      {this.validator.message(
                        "phone",
                        formData.phone,
                        "required",
                        { className: "validation-error" }
                      )}
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-xx-12 txtGrp">
                      <h6>Message</h6>
                      <textarea
                        name="msg"
                        value={formData.msg}
                        onChange={this.handleInputChange}
                        className="txtBox"
                      />
                      {this.validator.message(
                        "msg",
                        formData.msg,
                        "required|min:10|max:500",
                        { className: "validation-error" }
                      )}
                    </div>
                  </div>
                  <div className="bTn text-center">
                    <button
                      type="submit"
                      className="webBtn yellowBtn longBtn"
                      disabled={processing}
                    >
                      Send Message
                      <i className={`spinner ${!processing && "hidden"}`}></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* contact */}
      </main>
    );
  }
}

LocationsScreen.propTypes = {
  skeleton: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  processing: PropTypes.bool.isRequired,
  formSuccess: PropTypes.bool.isRequired,
  content: PropTypes.object.isRequired
};

const mapStateToProps = ({ contactUs }) => ({
  skeleton: contactUs.skeleton,
  error: contactUs.error,
  processing: contactUs.processing,
  formSuccess: contactUs.processing,
  content: contactUs.content
});

export default connect(mapStateToProps, {
  fetchPageContent,
  saveContactMessage
})(LocationsScreen);
