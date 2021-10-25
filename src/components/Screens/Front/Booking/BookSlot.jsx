import React, { Component } from "react";
import LocationScreenSkeleton from "../../../../skeletons/LocationsScreenSkeleton";
import Button from "../../../Common/Button";

export default class BookSlot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      formStep: 1,
      formData: {
        location: null,
        startDate: null,
        endDate: null,
        times: null,
      },
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState(({ loading }) => ({
        loading: false,
      }));
    }, 700);
  }

  handleSwitchTab = (actionType, index = null) => {
    this.setState(({ formStep }) => ({
      formStep:
        index !== null
          ? index
          : actionType == "next"
          ? formStep + 1
          : formStep - 1,
    }));
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState(({ formData }) => ({
      formData: {
        ...formData,
        [name]: value,
      },
    }));
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.formData);
    console.log(
      process.env.REACT_APP_API_URL + process.env.REACT_APP_REGISTER_URL
    );
  };

  render() {
    return this.state.loading === false ? (
      <main className="common strip" for_you>
        <section id="for_you">
          <div className="contain">
            <div className="blk">
              <div
                id="strip"
                style={{
                  backgroundImage:
                    "url(" +
                    require("../../../../assets/images/Rectangle-354.jpg")
                      .default +
                    ")",
                }}
              >
                <div className="txt">
                  <h2>Have a design ready?</h2>
                  <p>Then advertise to the world with 3 easy steps</p>
                </div>
                <div className="bTn">
                  <a
                    href="let-us-design-for-you-info.php"
                    className="webBtn simpleBtn"
                  >
                    Or Let Us design for you
                  </a>
                </div>
              </div>
              <div className="inside">
                <form onSubmit={this.handleFormSubmit} className="uiForm">
                  <ul className="nav nav-tabs relative">
                    <li
                      className={`${this.state.formStep == 1 ? "active" : ""}`}
                    >
                      <a
                        data-toggle="tab"
                        onClick={() => this.handleSwitchTab("next", 1)}
                      >
                        <span className="ico">
                          <img
                            src={
                              require("../../../../assets/images/ico-map.svg")
                                .default
                            }
                            alt=""
                          />
                        </span>
                        <strong>
                          Choose Location <small>Select City</small>
                        </strong>
                      </a>
                    </li>
                    <li
                      className={`${this.state.formStep == 2 ? "active" : ""}`}
                    >
                      <a
                        data-toggle="tab"
                        onClick={() => this.handleSwitchTab("next", 2)}
                      >
                        <span className="ico">
                          <img
                            src={
                              require("../../../../assets/images/ico-calendar.svg")
                                .default
                            }
                            alt=""
                          />
                        </span>
                        <strong>
                          Select date &amp; Time{" "}
                          <small>show in right time</small>
                        </strong>
                      </a>
                    </li>
                    <li
                      className={`${this.state.formStep == 3 ? "active" : ""}`}
                    >
                      <a
                        data-toggle="tab"
                        onClick={() => this.handleSwitchTab("next", 3)}
                      >
                        <span className="ico">
                          <img
                            src={
                              require("../../../../assets/images/icon-image.svg")
                                .default
                            }
                            alt=""
                          />
                        </span>
                        <strong>
                          Attach your design <small>Great design</small>
                        </strong>
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <div
                      id="selectCity"
                      className={`tab-pane fade ${
                        this.state.formStep == 1 ? "active in" : ""
                      }`}
                    >
                      <div className="step small">Step 1/3</div>
                      <h3>Where You Want To Advertise?</h3>
                      <p>Find the best place to show your vision</p>
                      <hr />
                      <label className="small dimSmall">Choose Location</label>
                      <div className="formRow row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 col-xx-6">
                          <div className="txtGrp dropDown selectCityDrop">
                            <a
                              href="javascript:void(0)"
                              className="txtBox customCity dropBtn"
                            ></a>
                            <ul className="dropCnt dropLst scrollbar">
                              <li>
                                <div className="cityIco">
                                  <img src="images/city1.svg" />
                                </div>
                                <div className="cityCntnt">
                                  <h4>Los Angeles</h4>
                                  <p>Average Price start’s from $490</p>
                                </div>
                              </li>
                              <li>
                                <div className="cityIco">
                                  <img src="images/city2.svg" />
                                </div>
                                <div className="cityCntnt">
                                  <h4>Kansas city</h4>
                                  <p>Average Price start’s from $490</p>
                                </div>
                              </li>
                              <li>
                                <div className="cityIco">
                                  <img src="images/city3.svg" />
                                </div>
                                <div className="cityCntnt">
                                  <h4>Atlanta</h4>
                                  <p>Average Price start’s from $490</p>
                                </div>
                              </li>
                              <li>
                                <div className="cityIco">
                                  <img src="images/city4.svg" />
                                </div>
                                <div className="cityCntnt">
                                  <h4>Coloumbus</h4>
                                  <p>Average Price start’s from $490</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 col-xx-6">
                          <div className="txtGrp">
                            <div id="map">
                              <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3380.46795716484!2d72.68540231452256!3d32.08363608118693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392177c8976de103%3A0xfd13b9e98e36a9fe!2sHero+Solutions!5e0!3m2!1sen!2s!4v1565165927597!5m2!1sen!2s"
                                width="100%"
                                height={280}
                                frameBorder={0}
                                style={{ border: 0 }}
                                allowFullScreen
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bTn formBtn text-right">
                        <Button
                          type="button"
                          variant="primary"
                          className="roundBtn"
                          onClick={() => this.handleSwitchTab("next")}
                          text="Next"
                        />
                      </div>
                    </div>
                    <div
                      id="selectDateTime"
                      className={`tab-pane fade ${
                        this.state.formStep == 2 ? "active in" : ""
                      }`}
                    >
                      <div className="step small">Step 2/3</div>
                      <h3>Select Date &amp; Time</h3>
                      <p>Let world see your ad in right time</p>
                      <hr />
                      <div className="formRow row">
                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 col-xx-6">
                          <div className="txtGrp oldLable">
                            <p>Start Date</p>
                            <div className="relative">
                              <div className="calendar-inputWrap">
                                <input
                                  type="text"
                                  name="startDate"
                                  className="txtBox date_picker calendar-input"
                                  onChange={this.handleInputChange}
                                />
                                <i className="calendar-icon" />
                              </div>
                              <i className="fa fa-calendar" />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 col-xx-6">
                          <div className="txtGrp oldLable">
                            <p>End Date</p>
                            <div className="relative">
                              <div className="calendar-inputWrap">
                                <input
                                  type="text"
                                  name="endDate"
                                  onChange={this.handleInputChange}
                                  className="txtBox date_picker calendar-input"
                                />
                                <i className="calendar-icon" />
                              </div>
                              <i className="fa fa-calendar" />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 col-xx-12">
                          <div className="txtGrp oldLable">
                            <p>Start &amp; End Time</p>
                            <div className="relative dropDown">
                              {/* <input type="text" name="" id="" class="txtBox time_picker"> */}
                              <a
                                href="javascript:void(0)"
                                className="txtBox dropBtn"
                              />
                              <i className="fa fa-clock-o" />
                              <div className="dropCnt dropLst scrollbar timePickerBox">
                                <h4>Suggested</h4>
                                <div className="flex">
                                  <div className="arrowIcon">
                                    <i className="fi-arrow-up" />
                                  </div>
                                  <div className="timeCntnt">
                                    <h3>Daily 6pm-9pm</h3>
                                    <p>
                                      Peek hours more visibility for your ad
                                    </p>
                                  </div>
                                </div>
                                <ul className="timeSugestions">
                                  <li>
                                    <span>
                                      <h4>Start time</h4>
                                    </span>
                                    <span>
                                      <h4>End time</h4>
                                    </span>
                                  </li>
                                  <li>
                                    <span>
                                      <h3>8:00am</h3>
                                    </span>
                                    <span>
                                      <h3>6:00pm</h3>
                                    </span>
                                  </li>
                                  <li>
                                    <span>
                                      <h3>9:00am</h3>
                                    </span>
                                    <span>
                                      <h3>7:00pm</h3>
                                    </span>
                                  </li>
                                  <li>
                                    <span>
                                      <h3>10:00am</h3>
                                    </span>
                                    <span>
                                      <h3>10:00pm</h3>
                                    </span>
                                  </li>
                                  <li>
                                    <span>
                                      <h3>11:00am</h3>
                                    </span>
                                    <span>
                                      <h3>11:00pm</h3>
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-xx-12">
                          <div className="miniHead">
                            <h6 className="small">Selected Date &amp; Time</h6>
                            <div className="toggleBlk">
                              <small className="semi">
                                Repeat time all days
                              </small>
                              <div className="switchBtn">
                                <input type="checkbox" name id />
                                <em />
                              </div>
                            </div>
                          </div>
                          <div className="tblBlk">
                            <table>
                              <tbody>
                                <tr>
                                  <td className="day semi">Mon, Jul 6</td>
                                  <td>
                                    <div className="timeBlk">
                                      <small>Start Time</small>
                                      <img src="images/icon-clock.svg" alt="" />
                                      <select name id>
                                        <option value="12am">12 am</option>
                                        <option value="12pm">12 pm</option>
                                      </select>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="timeBlk">
                                      <small>End Time</small>
                                      <img src="images/icon-clock.svg" alt="" />
                                      <select name id>
                                        <option value="12am">12 am</option>
                                        <option value="12pm">12 pm</option>
                                      </select>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="day semi">Mon, Jul 7</td>
                                  <td>
                                    <div className="timeBlk">
                                      <small>Start Time</small>
                                      <img src="images/icon-clock.svg" alt="" />
                                      <select name id>
                                        <option value="12am">12 am</option>
                                        <option value="12pm">12 pm</option>
                                      </select>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="timeBlk">
                                      <small>End Time</small>
                                      <img src="images/icon-clock.svg" alt="" />
                                      <select name id>
                                        <option value="12am">12 am</option>
                                        <option value="12pm">12 pm</option>
                                      </select>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="day semi">Mon, Jul 8</td>
                                  <td>
                                    <div className="timeBlk">
                                      <small>Start Time</small>
                                      <img src="images/icon-clock.svg" alt="" />
                                      <select name id>
                                        <option value="12am">12 am</option>
                                        <option value="12pm">12 pm</option>
                                      </select>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="timeBlk">
                                      <small>End Time</small>
                                      <img src="images/icon-clock.svg" alt="" />
                                      <select name id>
                                        <option value="12am">12 am</option>
                                        <option value="12pm">12 pm</option>
                                      </select>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="day semi">Mon, Jul 9</td>
                                  <td>
                                    <div className="timeBlk">
                                      <small>Start Time</small>
                                      <img src="images/icon-clock.svg" alt="" />
                                      <select name id>
                                        <option value="12am">12 am</option>
                                        <option value="12pm">12 pm</option>
                                      </select>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="timeBlk">
                                      <small>End Time</small>
                                      <img src="images/icon-clock.svg" alt="" />
                                      <select name id>
                                        <option value="12am">12 am</option>
                                        <option value="12pm">12 pm</option>
                                      </select>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="bTn formBtn text-right">
                        <Button
                          type="button"
                          variant="primary"
                          className="roundBtn"
                          onClick={() => this.handleSwitchTab("previous")}
                          text="Previous"
                        />
                        <Button
                          type="button"
                          variant="primary"
                          className="roundBtn"
                          onClick={() => this.handleSwitchTab("next")}
                          text="Next"
                        />
                      </div>
                    </div>
                    <div
                      id="Design-Reference"
                      className={`tab-pane fade ${
                        this.state.formStep == 3 ? "active in" : ""
                      }`}
                    >
                      <div className="step small">Step 3/3</div>
                      <h3>Attach Your Design</h3>
                      <p>
                        We support JPEG and PNG files. Make sure that your files
                        are no more than 10 MB.
                      </p>
                      <hr />
                      <div className="formRow row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-xx-12">
                          <div className="txtGrp oldLable">
                            <p>Attach design*</p>
                            <button
                              type="button"
                              className="txtBox uploadImg fileUpload"
                              data-upload="design"
                            >
                              <img
                                src={
                                  require("../../../../assets/images/big-file.svg")
                                    .default
                                }
                                alt=""
                              />
                              <p>
                                <span>Drag and drop files here</span>
                                <span className="color">Or Browse Files</span>
                              </p>
                              <p className="fileOption">
                                Your can attach 3 options
                              </p>
                            </button>
                            <input
                              type="file"
                              name
                              id
                              className="uploadFile"
                              data-upload="design"
                            />
                          </div>
                          <ul className="attachLst flex">
                            <li>
                              <span className="ico txtBox fi-plus" />
                            </li>
                            <li>
                              <span className="ico txtBox fi-plus" />
                            </li>
                            <li>
                              <span className="ico txtBox fi-plus" />
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="bTn formBtn text-right">
                        <Button
                          type="button"
                          variant="primary"
                          className="roundBtn"
                          onClick={() => this.handleSwitchTab("previous")}
                          text="Previous"
                        />
                        <Button
                          type="submit"
                          variant="primary"
                          className="roundBtn"
                          text="Book Slot"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* for_you */}
      </main>
    ) : (
      <main common locations>
        <LocationScreenSkeleton />
      </main>
    );
  }
}
