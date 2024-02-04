import React from "react";
import Appbar from "../reusable/Appbar";

const Products = () => {
  return (
    <div className="px-3 px-md-5 w-100 pb-5">
      <Appbar />
      <div
        className="ml-10  mt-md-3 px-md-4 mt-0"
        style={{ color: "1px solid black" }}
      >
        <h1 className="display-5  fw-bold">Our Products</h1>

        <div className="row d-flex mt-5 justify-content-center">
          <div className="col-md-5 p-0 col-sm-6 text-center single-product">
            <div className="absolute d-flex flex-column justify-content-center align-items-center">
              <h3 className="text-white">Web Application</h3>
            </div>
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwYXBwbGljYXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <h3 className="product-heading">Web Application</h3>
          </div>
          <div className="col-md-5 col-sm-6 p-0 mx-md-4 text-center single-product mt-5 mt-md-0">
            <div className="absolute d-flex flex-column justify-content-center align-items-center">
              <h3 className="text-white">Mobile Application</h3>
            </div>
            <img
              src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW9iaWxlJTIwYXBwbGljYXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <h3 className="product-heading">Mobile Application</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
