import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.scss';
import '../styles/s.css';

function Slider() {
  return (
    <section className="slider_section">
      <div id="customCarousel1" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">

          {[1, 2, 3].map((_, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <div className="container">
                <div className="row">
                  <div className="col-md-7 col-lg-6">
                    <div className="detail-box">
                      <h1>Fast Food Restaurant</h1>
                      <p>
                        Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde...
                      </p>
                      <div className="btn-box">
                        <Link to="/" className="btn1">
                          Order Now
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* You could add a right-side column here if your template has one */}
                </div>
              </div>
            </div>
          ))}

        </div>
        <div className="container">
          <ol className="carousel-indicators">
            <li data-target="#customCarousel1" data-slide-to="0" className="active"></li>
            <li data-target="#customCarousel1" data-slide-to="1"></li>
            <li data-target="#customCarousel1" data-slide-to="2"></li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Slider;
