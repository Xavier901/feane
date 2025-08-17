import { Link } from "react-router-dom";

function Footer() {
    return(
    
  <footer class="footer_section">
    <div class="container">
      <div class="row">
        <div class="col-md-4 footer-col">
          <div class="footer_contact">
            <h4>
              Contact Us
            </h4>
            <div class="contact_link_box">
              <Link to="">
                <i class="fa fa-map-marker" aria-hidden="true"></i>
                <span>
                  Location
                </span>
              </Link>
              <Link to="">
                <i class="fa fa-phone" aria-hidden="true"></i>
                <span>
                  Call +01 1234567890
                </span>
              </Link>
              <Link to="">
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <span>
                  demo@gmail.com
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div class="col-md-4 footer-col">
          <div class="footer_detail">
            <Link to="" class="footer-logo">
              Feane
            </Link>
            <p>
              Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with
            </p>
            <div class="footer_social">
              <Link to="">
                <i class="fa fa-facebook" aria-hidden="true"></i>
              </Link>
              <Link to="">
                <i class="fa fa-twitter" aria-hidden="true"></i>
              </Link>
              <Link to="">
                <i class="fa fa-linkedin" aria-hidden="true"></i>
              </Link>
              <Link to="">
                <i class="fa fa-instagram" aria-hidden="true"></i>
              </Link>
              <Link to="">
                <i class="fa fa-pinterest" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
        </div>
        <div class="col-md-4 footer-col">
          <h4>
            Opening Hours
          </h4>
          <p>
            Everyday
          </p>
          <p>
            10.00 Am -10.00 Pm
          </p>
        </div>
      </div>
      <div class="footer-info">
        <p>
          &copy; <span id="displayYear"></span> All Rights Reserved By
          <Link href="https://html.design/">Free Html Templates</Link><br></br>
          &copy; <span id="displayYear"></span> Distributed By
          <Link href="https://themewagon.com/" target="_blank">ThemeWagon</Link>
        </p>
    </div>
    </div>
  </footer>

    );
}
export default Footer;