import React, { Component } from "react";
import { connect } from "react-redux";
import { register } from "../../../states/actions/authActions";
import SimpleReactValidator from "simple-react-validator";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AUTH_MESSAGES, OFFLINE_ERROR } from "../../../utils/Messages";
import { TOAST_SETTINGS } from "../../../utils/SiteSettings";

class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    let empty = "";
    this.state = {
      formData: {
        firstName: empty,
        lastName: empty,
        email: empty,
        password: empty,
        cpassword: empty,
        confirm: empty,
      },
    };
    this.validator = new SimpleReactValidator();
  }

  componentDidMount = () => {
    // EXAMPLE TEST
    toast.success(AUTH_MESSAGES.REGISER_SUCCESS, TOAST_SETTINGS);
    toast.error(AUTH_MESSAGES.REGISER_FAILED, TOAST_SETTINGS);
  };

  handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    this.setState(({ formData }) => ({
      formData: {
        ...formData,
        [name]: type == "checkbox" ? checked : value,
      },
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.formData);
    if (this.validator.allValid()) {
      this.props.register(this.state.formData);
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  };

  render() {
    const { formData } = this.state;
    const { error, processing, offline } = this.props;
    {
      error && toast.error(AUTH_MESSAGES.REGISER_FAILED, TOAST_SETTINGS);
    }

    {
      offline && toast.error(OFFLINE_ERROR, TOAST_SETTINGS);
    }
    return (
      <main className="common logon">
        <ToastContainer />
        <section id="register">
          <div className="contain">
            <div className="logBlk">
              <form onSubmit={this.handleSubmit}>
                <h3>Register</h3>
                <p>Work Better, Live Better.</p>
                <div className="txtGrp">
                  <label htmlFor="">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    className="txtBox"
                    onChange={this.handleChange}
                    value={formData.firstName}
                  />
                  {this.validator.message(
                    "firstName",
                    formData.firstName,
                    "required|alpha|min:2|max:20",
                    { className: "validation-error" }
                  )}
                </div>
                <div className="txtGrp">
                  <label htmlFor="">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    className="txtBox"
                    onChange={this.handleChange}
                    value={formData.lastName}
                  />
                  {this.validator.message(
                    "lastName",
                    formData.lastName,
                    "required|alpha|min:2|max:20",
                    { className: "validation-error" }
                  )}
                </div>
                <div className="txtGrp">
                  <label htmlFor="">Email Address</label>
                  <input
                    type="text"
                    name="email"
                    className="txtBox"
                    onChange={this.handleChange}
                    value={formData.email}
                  />
                  {this.validator.message(
                    "email",
                    formData.email,
                    "required|email",
                    { className: "validation-error" }
                  )}
                </div>
                <div className="txtGrp pasDv">
                  <label htmlFor="">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="txtBox"
                    onChange={this.handleChange}
                    value={formData.password}
                  />
                  <i className="icon-eye" id="eye" />
                  {this.validator.message(
                    "password",
                    formData.password,
                    "required|min:8|max:50",
                    { className: "validation-error" }
                  )}
                </div>
                <div className="txtGrp pasDv">
                  <label htmlFor="">Confirm Password</label>
                  <input
                    type="password"
                    name="cpassword"
                    className="txtBox"
                    onChange={this.handleChange}
                    value={formData.cpassword}
                  />
                  <i className="icon-eye" id="eye" />
                  {this.validator.message(
                    "cpassword",
                    formData.cpassword,
                    `required|in:${formData.password}`,
                    {
                      className: "validation-error",
                      messages: {
                        in: "Confirm password sould be same as password.",
                      },
                    }
                  )}
                </div>
                <div className="txtGrp flex">
                  <div className="lblBtn">
                    <input
                      type="checkbox"
                      name="confirm"
                      id="confirm"
                      onChange={this.handleChange}
                      value={formData.confirm}
                    />
                    <label htmlFor="confirm">
                      By signing up, I agree to Crown
                      <a>Terms &amp; Conditions </a> and <a>Privacy Policy.</a>
                    </label>
                  </div>
                  {this.validator.message(
                    "confirm",
                    formData.confirm,
                    "required",
                    { className: "validation-error" }
                  )}
                </div>
                <div className="bTn text-center">
                  <button
                    type="submit"
                    className="webBtn yellowBtn longBtn"
                    disabled={processing}
                  >
                    Register
                    <i className={`spinner ${!processing && "hidden"}`}></i>
                  </button>
                </div>
              </form>
              <div className="haveAccount text-center">
                <span>Already have an account?</span>
                <a href="login.php">Login</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  error: state.auth.error,
  processing: state.auth.processing,
  offline: state.auth.offline,
});

export default connect(mapStateToProps, { register })(RegisterScreen);
