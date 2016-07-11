import React, { Component } from 'react';

export default class Home extends Component {
  render() {

    const style = {'background-image': 'url(assets/images/home-banner-1.jpg)'},
        sliderStyle1 = {'backgroundImage': ' url(assets/images/home3.jpg)'},
        sliderStyle2 = {'backgroundImage': 'url(assets/images/home1.jpg)'}
    return (
        <div>
          <div className="head_panel">
            <div className="slider_wrapper">
              <div id="head_panel_slider" className="owl-carousel">
                <div className="stretchy-wrapper ratio_slider">
                  <div style={sliderStyle2} aria-hidden="true" className="item dark_section">
                    <div className="container">
                      <div className="caption caption_elegant text-center">
                        <div className="inner animated fadeIn">
                          <div className="t3 uppercase yellow">NAGERCOIL</div>
                          <div className="t1 yellow">THE PERFECT LOCATION</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="stretchy-wrapper ratio_slider">
                  <div style={sliderStyle1} aria-hidden="true" className="item dark_section">
                    <div className="container">
                      <div className="caption caption_elegant text-center">
                        <div className="inner animated fadeIn">
                          <div className="t3 uppercase yellow"> UNMATCHED</div>
                          <div className="t1 yellow">LODGING EXPERIENCE</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="main">
            <div className="container">
              <section className="no_padding dark_section booking-form">
                <div className="row">
                  <div className="col-md-10 col-md-offset-1">
                    <form className="booking_form">
                      <div className="col-md-10 col-md-offset-1 text-center">
                        <div className="col-md-6 small_screen_margin_top">
                          <div className="form-group">
                            <label>Check in date</label><i className="arrow-down"></i>
                            <input type="text" placeholder="Arrival date" id="date_check_in"/>
                          </div>
                        </div>
                        <div className="col-md-6 small_screen_margin_top">
                          <div className="form-group">
                            <label>Check out date</label><i className="arrow-down"></i>
                            <input type="text" placeholder="Departure date" id="date_check_out"/>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12 small_screen_margin_top text-center">
                        <button type="submit">BOOK YOUR STAY</button>
                      </div>
                    </form>
                  </div>
                </div>
              </section>
            </div>
            <section className="light_section">
              <div className="container">
                <div className="col-md-12 text-center">
                  <div className="section_header overlay"><span>WELCOME</span>
                    <h1>ANANDAM BUILDINGS</h1>
                    <p>PERFECT CHOICE FOR LODGING AND CEREMONIES</p><img
                        src="assets/images/decoration-1.png" alt="Image"/>
                  </div>
                </div>
                <div className="col-md-10 col-md-offset-1 text-center margin_bottom">
                  <div className="text_block">
                    <h3>PROVIDING QUALITY SERVICES SINCE 2002.</h3>
                    <p>Anandam Buildings have been in service for over one decade in hospitality sector. We provide Single / Double / Deluxe Rooms on Daily / Monthly basis at economical tariff with good service for a wide range of clients.
                      We have no hidden costs. Feel at home when you stay with us. We are open 24/7.</p>

                  </div>
                </div>
                <div className="col-md-4 negative_margin_bottom small_screen_margin_top">
                  <div className="entry"><a href="index-gym.html"><img src="assets/images/room3.jpg"
                                                                       alt="Image"/>
                    <div className="entry_icon"><img src="assets/images/anandam-buildings-logo.png" alt="Image"/></div>
                    <div className="entry_title">
                      <h2>ROOMS</h2>
                    </div>
                    <div className="entry_paragraph">
                      <p>
                        We have single/double bathroom-attached rooms with AC/Non-AC selections.
                      </p>
                    </div>
                  </a></div>
                </div>

                <div className="col-md-4 negative_margin_bottom small_screen_margin_top">
                  <div className="entry"><a href="index-restaurant.html"><img
                      src="assets/images/auditorium.jpg" alt="Image"/>
                    <div className="entry_icon"><img src="assets/images/anandam-buildings-logo.png" alt="Image"/></div>
                    <div className="entry_title">
                      <h2>AUDITORIUM</h2>
                    </div>
                    <div className="entry_paragraph">
                      <p>
                        We have a state-of-the-art auditorium for those special events and ceremonies.
                      </p>
                    </div>
                  </a></div>
                </div>


                <div className="col-md-4 negative_margin_bottom small_screen_margin_top">
                  <div className="entry"><a href="index-spa.html"><img src="assets/images/conference-hall.jpg"
                                                                       alt="Image"/>
                    <div className="entry_icon"><img src="assets/images/anandam-buildings-logo.png" alt="Image"/></div>
                    <div className="entry_title">
                      <h2>CONFERENCE HALL</h2>
                    </div>
                    <div className="entry_paragraph">
                      <p>
                        Anandam Building houses a conference-cum-meeting hall, that can accomodate upto 80 people
                      </p>
                    </div>
                  </a></div>
                </div>
              </div>
            </section>

          </div>

        </div>
    )
  }
}
