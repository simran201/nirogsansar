import React from "react";

function Contact() {
  return (
    <>
      <div className="contact-area bg-overlay">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="contact-form-container ">
                <div className="contact-title">
                  <h1 className="contact-title mt-3">Request A Quote</h1>
                  <p className="contact-para">
                    We will be happy to answer your questions.
                  </p>
                </div>
                <div className="row d-flex">
                  <div className="col-md-6">
                  <form className="contact-form-input">
                      <input type="text" placeholder="First Name" />
                    </form>
                  </div>
                  <div className="col-md-6">
                  <form className="contact-form-input">
                      <input type="text" placeholder="Last Name" />
                    </form>
                  </div>{" "}
                  <div className="col-md-6">
                    <form className="contact-form-input">
                      <input type="email" placeholder="Email" />
                    </form>
                  </div>{" "}
                  <div className="col-md-6">
                    <div className="contact-form-input">
                      <input type="tel" placeholder="Phone" />
                    </div>
                  </div>
                  <div className="col-12">
                  <form className="contact-form-input ">
                      <textarea placeholder="Your Message " className="p-2" />
                    </form>
                  </div>
                  <div className="col-sm-6 align-self-center">
                    <div class="bottom-form style-checkbox">
                      <input type="checkbox" />
                      Also subscribe us
                    </div>
                  </div>
                  <div className="col-sm-6 text-sm-right">
                    <a className="btn btn-base" href="#">
                      Send Message
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 pt-20 align-self-end">
              <div class="mt-5 mt-lg-0">
                <ul class="right-list-wrap">
                  <li class="right-list-inner style-white style-check-box-grid-2">
                    <div class="media-contact  d-flex flex-start">
                      <div class="media-contact-left">
                        <img
                          src="contact1.png"
                          alt="img"
                        />
                      </div>
                      <div class="contact-media-body align-self-center">
                        <h5 className="contact-head">Our Address</h5>
                        <p className="contact-para">PSD Building, 2 AlBahr</p>
                        <p className="contact-para">St, Loskia sripur</p>
                      </div>
                    </div>
                  </li>
                  <li class="right-list-innerr style-white style-check-box-grid-2">
                    <div class="media-contact  d-flex ">
                      <div class="media-contact-left">
                        <img
                          src="17.png"
                          alt="img"
                        />
                      </div>
                      <div class="contact-media-body mb-20 align-self-center">
                        <h5 className="contact-head">Our Phone</h5>
                        <p className="contact-para">+0029129102320</p>
                        <p className="contact-para">+000 2324 39493</p>
                      </div>
                    </div>
                  </li>
                  <li class="right-list-inner style-white style-check-box-grid-2">
                    <div class="media-contact  d-flex ">
                      <div class="media-contact-left">
                        <img
                          src="/18.png"
                          alt="img"
                        />
                      </div>
                      <div class="contact-media-body mb-20 align-self-center">
                        <h5 className="contact-head">Our Email</h5>
                        <p className="contact-para">name@website.com</p>
                        <p className="contact-para">Info@orex.com</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
