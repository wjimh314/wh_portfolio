import React from "react";
import {
//   FacebookShareButton,
//   FacebookIcon,
//   TwitterShareButton,
//   TwitterIcon,
//   RedditShareButton,
//   RedditIcon,
  LinkedinShareButton,
  LinkedinIcon
} from "react-share";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>Philadelphia,PA</p>
            </div>
            <div className="d-flex">
              <a href="tel:555-555-555">484-832-9469</a>
            </div>
            <div className="d-flex">
              <p>wjimh314@gmail.com</p>
            </div>
            <div className="d-flex">
              <p>github: github.com/wjimh314</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <a className="footer-nav">Home</a>
                <br />
                <a className="footer-nav">About me</a>
                <br />
                <a className="footer-nav">Services</a>
              </div>
              <div className="col">
                <a className="footer-nav">Experience</a>
                <br />
                <a className="footer-nav">Portfolio</a>
                <br />
                <a href="mailto:wjimh314@gmail.com" className="footer-nav">Contact</a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
             
             
              <LinkedinShareButton
                url={"https://www.linkedin.com/in/william-hart-62a120241"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <LinkedinIcon className="mx-3" size={36} />
              </LinkedinShareButton>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;