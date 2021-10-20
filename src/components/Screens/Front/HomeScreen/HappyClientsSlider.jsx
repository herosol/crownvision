import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
export class HappyClientsSlider extends Component {
  render() {
    return (
      <div>
        <div class="container-fluid">
          <OwlCarousel
            dots={true}
            nav={true}
            loop={true}
            items={3}
            center={true}
            className="owl-theme owl-carousel owl-loaded owl-drag"
            margin={20}
            smartSpeed={1000}
            autoplayTimeout={8000}
            autoplayHoverPause={true}
            navText={[
              '<i class="fi-chevron-left"></i>',
              '<i class="fi-chevron-right"></i>',
            ]}
            responsive={{
              0: {
                items: 1,
              },
              768: {
                items: 2,
              },
              991: {
                items: 2,
              },
              1200: {
                items: 2,
              },
            }}
          >
            <div className="owl-stage-outer">
              <div
                className="owl-stage"
                style={{
                  transition: "all 0s ease 0s",
                  width: "5670px",
                  transform: "translate3d(-1215px, 0px, 0px)",
                }}
              >
                <div
                  className="owl-item cloned"
                  style={{ width: "790px", marginRight: "20px" }}
                >
                  <div className="inner">
                    <div className="icoBlk">
                      <div className="ico">
                        <img
                          src={
                            require("../../../../assets/images/users/2.jpg")
                              .default
                          }
                          alt=""
                        />
                      </div>
                      <div className="txt">
                        <h4>Reggie Loyd</h4>
                        <span>
                          Owner of <em>Dunken Donuts</em>
                        </span>
                      </div>
                      <div className="rating" />
                    </div>
                    <div className="content">
                      <p>
                        We having been using a great new form of advertising
                        called crownvisionmedia and wanted to let you all know
                        how happy we have been with their Company.
                      </p>
                      <p>
                        Got to meet the boys through a client of ours that told
                        us about their new advertising idea of displaying our
                        business on the trucks exclusivity in our area which is
                        completely tracked. Give the boys a call and have a chat
                        about your advertising needs you definitely won't regret
                        it.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "790px", marginRight: "20px" }}
                >
                  <div className="inner">
                    <div className="icoBlk">
                      <div className="ico">
                        <img
                          src={
                            require("../../../../assets/images/users/3.jpg")
                              .default
                          }
                          alt=""
                        />
                      </div>
                      <div className="txt">
                        <h4>Monica Motal</h4>
                        <span>
                          Owner of <em>Dunken Donuts</em>
                        </span>
                      </div>
                      <div className="rating" />
                    </div>
                    <div className="content">
                      <p>
                        We having been using a great new form of advertising
                        called crownvisionmedia and wanted to let you all know
                        how happy we have been with their Company.
                      </p>
                      <p>
                        Got to meet the boys through a client of ours that told
                        us about their new advertising idea of displaying our
                        business on the trucks exclusivity in our area which is
                        completely tracked. Give the boys a call and have a chat
                        about your advertising needs you definitely won't regret
                        it.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item active center"
                  style={{ width: "790px", marginRight: "20px" }}
                >
                  <div className="inner">
                    <div className="icoBlk">
                      <div className="ico">
                        <img
                          src={
                            require("../../../../assets/images/users/1.jpg")
                              .default
                          }
                          alt=""
                        />
                      </div>
                      <div className="txt">
                        <h4>Jennifer Kem</h4>
                        <span>
                          Owner of <em>Dunken Donuts</em>
                        </span>
                      </div>
                      <div className="rating" />
                    </div>
                    <div className="content">
                      <p>
                        We having been using a great new form of advertising
                        called crownvisionmedia and wanted to let you all know
                        how happy we have been with their Company.
                      </p>
                      <p>
                        Got to meet the boys through a client of ours that told
                        us about their new advertising idea of displaying our
                        business on the trucks exclusivity in our area which is
                        completely tracked. Give the boys a call and have a chat
                        about your advertising needs you definitely won't regret
                        it.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item active"
                  style={{ width: "790px", marginRight: "20px" }}
                >
                  <div className="inner">
                    <div className="icoBlk">
                      <div className="ico">
                        <img
                          src={
                            require("../../../../assets/images/users/2.jpg")
                              .default
                          }
                          alt=""
                        />
                      </div>
                      <div className="txt">
                        <h4>Reggie Loyd</h4>
                        <span>
                          Owner of <em>Dunken Donuts</em>
                        </span>
                      </div>
                      <div className="rating" />
                    </div>
                    <div className="content">
                      <p>
                        We having been using a great new form of advertising
                        called crownvisionmedia and wanted to let you all know
                        how happy we have been with their Company.
                      </p>
                      <p>
                        Got to meet the boys through a client of ours that told
                        us about their new advertising idea of displaying our
                        business on the trucks exclusivity in our area which is
                        completely tracked. Give the boys a call and have a chat
                        about your advertising needs you definitely won't regret
                        it.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item"
                  style={{ width: "790px", marginRight: "20px" }}
                >
                  <div className="inner">
                    <div className="icoBlk">
                      <div className="ico">
                        <img
                          src={
                            require("../../../../assets/images/users/3.jpg")
                              .default
                          }
                          alt=""
                        />
                      </div>
                      <div className="txt">
                        <h4>Monica Motal</h4>
                        <span>
                          Owner of <em>Dunken Donuts</em>
                        </span>
                      </div>
                      <div className="rating" />
                    </div>
                    <div className="content">
                      <p>
                        We having been using a great new form of advertising
                        called crownvisionmedia and wanted to let you all know
                        how happy we have been with their Company.
                      </p>
                      <p>
                        Got to meet the boys through a client of ours that told
                        us about their new advertising idea of displaying our
                        business on the trucks exclusivity in our area which is
                        completely tracked. Give the boys a call and have a chat
                        about your advertising needs you definitely won't regret
                        it.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "790px", marginRight: "20px" }}
                >
                  <div className="inner">
                    <div className="icoBlk">
                      <div className="ico">
                        <img
                          src={
                            require("../../../../assets/images/users/1.jpg")
                              .default
                          }
                          alt=""
                        />
                      </div>
                      <div className="txt">
                        <h4>Jennifer Kem</h4>
                        <span>
                          Owner of <em>Dunken Donuts</em>
                        </span>
                      </div>
                      <div className="rating" />
                    </div>
                    <div className="content">
                      <p>
                        We having been using a great new form of advertising
                        called crownvisionmedia and wanted to let you all know
                        how happy we have been with their Company.
                      </p>
                      <p>
                        Got to meet the boys through a client of ours that told
                        us about their new advertising idea of displaying our
                        business on the trucks exclusivity in our area which is
                        completely tracked. Give the boys a call and have a chat
                        about your advertising needs you definitely won't regret
                        it.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="owl-item cloned"
                  style={{ width: "790px", marginRight: "20px" }}
                >
                  <div className="inner">
                    <div className="icoBlk">
                      <div className="ico">
                        <img
                          src={
                            require("../../../../assets/images/users/2.jpg")
                              .default
                          }
                          alt=""
                        />
                      </div>
                      <div className="txt">
                        <h4>Reggie Loyd</h4>
                        <span>
                          Owner of <em>Dunken Donuts</em>
                        </span>
                      </div>
                      <div className="rating" />
                    </div>
                    <div className="content">
                      <p>
                        We having been using a great new form of advertising
                        called crownvisionmedia and wanted to let you all know
                        how happy we have been with their Company.
                      </p>
                      <p>
                        Got to meet the boys through a client of ours that told
                        us about their new advertising idea of displaying our
                        business on the trucks exclusivity in our area which is
                        completely tracked. Give the boys a call and have a chat
                        about your advertising needs you definitely won't regret
                        it.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-nav">
              <button type="button" role="presentation" className="owl-prev">
                <i className="fi-chevron-left" />
              </button>
              <button type="button" role="presentation" className="owl-next">
                <i className="fi-chevron-right" />
              </button>
            </div>
            <div className="owl-dots disabled" />
          </OwlCarousel>
        </div>
      </div>
    );
  }
}
export default HappyClientsSlider;
