import React, { Component } from "react";

export default class RegisterScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main className="common logon">
        <section id="register">
          <div className="contain">
            <div className="logBlk">
              <form action="dashboard.php" method="post">
                <h3>Register</h3>
                <p>Work Better, Live Better.</p>
                <div className="txtGrp">
                  <label htmlFor>First Name</label>
                  <input type="text" name id className="txtBox" />
                </div>
                <div className="txtGrp">
                  <label htmlFor>Last Name</label>
                  <input type="text" name id className="txtBox" />
                </div>
                <div className="txtGrp">
                  <label htmlFor>Email Address</label>
                  <input type="text" name id className="txtBox" />
                </div>
                <div className="txtGrp pasDv">
                  <label htmlFor>Password</label>
                  <input type="password" name id className="txtBox" />
                  <i className="icon-eye" id="eye" />
                </div>
                <div className="txtGrp flex">
                  <div className="lblBtn">
                    <input type="checkbox" name id="confirm" />
                    <label htmlFor="confirm">
                      By signing up, I agree to Crown
                      <a href="terms-and-conditions.php">
                        Terms &amp; Conditions
                      </a>
                      and
                      <a href="privacy-policy.php">Privacy Policy.</a>
                    </label>
                  </div>
                </div>
                <div className="bTn text-center">
                  <button type="submit" className="webBtn yellowBtn longBtn">
                    Register
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
        {/* register */}
      </main>
    );
  }
}
