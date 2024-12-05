import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    // <div class="container-fluid-footer pb-0 mb-0 justify-content-center text-light ">
    //   <footer>
    //     <div class="row my-5 justify-content-center py-5">
    //       <div class="col-11">
    //         <div class="row ">
    //           <div class="col-xl-8 col-md-4 col-sm-4 col-12 my-auto mx-auto a">
    //             <h3 class="text-muted mb-md-0 mb-5 bold-text">FOOD CORNER.</h3>
    //           </div>
    //           <div class="col-xl-2 col-md-4 col-sm-4 col-12">
    //             <h6 class="mb-3 mb-lg-4 bold-text ">
    //               <b>MENU</b>
    //             </h6>
    //             <ul class="list-unstyled">
    //               <li>Home</li>
    //               <li>About</li>
    //               <li>Blog</li>
    //             </ul>
    //           </div>
    //           <div class="col-xl-2 col-md-4 col-sm-4 col-12">
    //             <h6 class="mb-3 mb-lg-4 text-muted bold-text mt-sm-0 mt-5">
    //               <b>ADDRESS</b>
    //             </h6>
    //             <p class="mb-1">2152, Dibugalli, Near Chikhali Darawaja</p>
    //             <p>Bhalod, MH</p>
    //           </div>
    //         </div>
    //         <div class="row ">
    //           <div class="col-xl-8 col-md-4 col-sm-4 col-auto my-md-0 mt-5 order-sm-1 order-3 align-self-end">
    //             <p class="social text-muted mb-0 pb-0 bold-text">
    //               {" "}
    //               <span class="mx-2">
    //                 <i class="fa fa-facebook" aria-hidden="true"></i>
    //               </span>{" "}
    //               <span class="mx-2">
    //                 <i class="fa fa-linkedin-square" aria-hidden="true"></i>
    //               </span>{" "}
    //               <span class="mx-2">
    //                 <i class="fa fa-twitter" aria-hidden="true"></i>
    //               </span>{" "}
    //               <span class="mx-2">
    //                 <i class="fa fa-instagram" aria-hidden="true"></i>
    //               </span>{" "}
    //             </p>
    //             <small class="rights">
    //               <span>&#174;</span> Food Corner All Rights Reserved.
    //             </small>
    //           </div>
    //           <div class="col-xl-2 col-md-4 col-sm-4 col-auto order-1 align-self-end ">
    //             <h6 class="mt-55 mt-2 text-muted bold-text">
    //               <b>Lokesh Jawale</b>
    //             </h6>
    //             <small>
    //               {" "}
    //               <span>
    //                 <i class="fa fa-envelope" aria-hidden="true"></i>
    //               </span>{" "}
    //               lokeshjawale1996@gmail.com
    //             </small>
    //           </div>
    //           <div class="col-xl-2 col-md-4 col-sm-4 col-auto order-2 align-self-end mt-3 ">
    //             <h6 class="text-muted bold-text">
    //               <b>Mobile No</b>
    //             </h6>
    //             <small>
    //               <span>
    //                 <i class="fa fa-envelope" aria-hidden="true"></i>
    //               </span>{" "}
    //               9766603565/8999793609
    //             </small>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </footer>
    // </div>


    <>
      <footer className="page-footer font-small blue pt-4 footer-bg">

        <div className="container-fluid text-center text-md-left">

          <div className="row">

            <div className="col-md-6 mt-md-0 mt-3">

              <h5 className="text-uppercase">Food Corner</h5>
              <p>Order your food on the Go ! ! !</p>

            </div>


            <div className="col-md-3 mb-md-0 mb-3">

              <h5 className="text-uppercase">Links</h5>

              <ul className="list-unstyled">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
              </ul>

            </div>

            <div className="col-md-3 mb-md-0 mb-3">

              <h5 className="text-uppercase">Links</h5>

              <ul className="list-unstyled">
                <li>
                  <a href="/contact">Contact Us</a>
                </li>
                <li>
                  <a href="/signup">Sign up</a>
                </li>
              </ul>

            </div>

          </div>

        </div>

        <div className="footer-copyright text-center py-3">© 2023 Copyright:
          <a href="/about">Vinay</a>
        </div>

      </footer>
    </>
  );
}

export default Footer;