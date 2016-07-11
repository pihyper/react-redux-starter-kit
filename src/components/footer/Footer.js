import React from 'react';

import './footer.css';

const Footer = () => (
    <footer className="footer">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 padding_top padding_bottom text-center"><a href="#"><img src="assets/images/anandam-buildings-logo.png" alt="logo" width={100} /></a>
                    <div className="text_block">
                    </div>
                    <div className="text_block margin_top">
                        <div className="footer_block"><i className="icon icon-Phone margin_left_custom_1" />Anandam Lodge</div>
                        <div className="footer_block"><i className="icon icon-Flag margin_left_custom_1" />NH 47. Opp. Collecter Office, Nagercoil, TamilNadu. </div>
                        <div className="footer_block"><i className="icon icon-Keyboard margin_left_custom_1" /> Email: contact@anandambuilding.in</div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 copyright_content vcenter">
                    <div className="col-md-4">
                        <div className="copyright small_screen_text_center">
                            <p>COPYRIGHT © 2016 ALL RIGHTS RESERVED ANANDAM BUILDINGS</p>
                        </div>
                    </div>
                    <div className="col-md-4 award">
                        &nbsp;
                    </div>
                    <div className="col-md-4 text-right small_screen_text_center">
                        <div className="widget_footer_menu"><a href="#">ABOUT</a><a href="#">ROOMS</a><a href="#">CONTACT</a></div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
