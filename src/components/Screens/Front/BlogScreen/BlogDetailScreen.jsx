import React, { Component } from "react";
import LocationScreenSkeleton from "../../../Skeletons/LocationsScreenSkeleton";

export default class BlogDetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);
  }

  render() {
    return this.state.loading === false ? (
      <main className="common" blog>
        <section
          id="sBanner"
          style={{
            backgroundImage:
              "url(" +
              require("../../../../assets/images/photo-1530685932526-48ec92998eaa.jpg")
                .default +
              ")",
          }}
        >
          <div className="contain">
            <div className="content">
              <h1>
                Blog <em>Detail</em>
              </h1>
            </div>
          </div>
        </section>
        {/* sBanner */}
        <section id="blog">
          <div className="contain">
            <div className="flexRow flex">
              <div className="col col1">
                <div className="newsBlk mainBlk">
                  <div className="image">
                    <img
                      src={
                        require("../../../../assets/images/blog/1.png").default
                      }
                    />
                  </div>
                  <div className="txt">
                    <small className="date">September 18, 2018</small>
                    <h3>
                      The best newsletter templates and resources for download
                      right now
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ipsa at aliquid explicabo maxime voluptas rem libero
                      facere qui enim harum facilis totam, eos amet adipisci
                      reiciendis accusamus! Provident, adipisci autem.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quas est a, quam totam quisquam deleniti vero sunt
                      accusamus, facere deserunt, voluptatibus quibusdam
                      possimus commodi? Esse rerum rem cumque ad a?
                    </p>
                    <h6>
                      Voluptas eligendi voluptatem magni, exercitationem rerum
                      eum, nostrum nihil consectetur numquam quae neque
                      quibusdam facere quasi maxime est ut nulla consequatur
                      officiis?
                    </h6>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quas, voluptas sed quos molestiae aliquam optio natus
                      odio! A, cum enim corrupti neque reprehenderit, placeat,
                      perspiciatis facere consequuntur incidunt tempora eos.
                    </p>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Pariatur, expedita earum asperiores sed praesentium fugit
                      modi beatae omnis in, reprehenderit, ea harum possimus!
                      Debitis, neque. Veniam cupiditate nisi vero ad.
                    </p>
                    <h5>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Praesentium, iste vero sed harum maiores corrupti omnis!
                      Quis magnam aliquid quo, nam sequi at laboriosam!
                      Provident sequi excepturi omnis molestiae sint?
                    </h5>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Pariatur, expedita earum asperiores sed praesentium fugit
                      modi beatae omnis in, reprehenderit, ea harum possimus!
                      Debitis, neque. Veniam cupiditate nisi vero ad.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* blog */}
      </main>
    ) : (
      <main common locations>
        <LocationScreenSkeleton />
      </main>
    );
  }
}
