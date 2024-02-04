import React from "react";
import Appbar from "../reusable/Appbar";

const AboutUs = () => {
  return (
    <div className="px-3 px-md-5 w-100 pb-5">
      <Appbar />
      <div className="ml-10  mt-md-3 px-md-4 mt-0">
        <h1 className="display-5  fw-bold">About Us</h1>
        <div className="">
          <div className="d-md-flex our-mission mt-5">
            <div className="  d-md-flex flex-column justify-content-center pe-md-5">
              <h2 className="display-6  fw-bold pb-2 mt-5 mt-md-0">
                Our Mission and Values
              </h2>
              <p className="fs-5 ">
                At ABC Software Solutions, our mission is to provide innovative
                software solutions that empower businesses to succeed in today's
                digital world. We are a team of experienced software developers,
                designers, and project managers who are passionate about
                technology and committed to delivering exceptional results.{" "}
                <br /> <br />
                Our values include a dedication to quality, integrity, and
                collaboration. We believe in taking a customer-centric approach
                to everything we do, working closely with our clients to
                understand their unique needs and delivering software solutions
                that exceed their expectations.
              </p>
            </div>
            <div className="">
              <img src="./imgs/our mission.jpg" alt="" className="img-fluid" />
            </div>
          </div>
          <div className="d-flex flex-md-row flex-column our-mission mt-5">
            <div className="order-md-1 order-2">
              <img src="./imgs/our team.jpg" alt="" className="img-fluid" />
            </div>
            <div className="order-md-2 order-1  d-md-flex flex-column justify-content-center ps-md-5">
              <h2 className="display-6  fw-bold pb-2 mt-5 mt-md-0">Our Team</h2>
              <p className="fs-5 ">
                Our team members are experts in their respective fields, with
                years of experience and a deep understanding of the latest
                technologies and trends. We have a diverse team that includes
                developers, designers, project managers, and quality assurance
                specialists, all working together to deliver outstanding
                software solutions. <br /> <br />
                At Blue Code Software Solutions, we believe that our team is our
                greatest asset. That's why we invest in our people, providing
                ongoing training and development opportunities to ensure that
                they have the skills and knowledge needed to deliver exceptional
                results for our clients.
              </p>
            </div>
          </div>
          <div className="d-md-flex our-mission mt-5">
            <div className="  d-md-flex flex-column justify-content-center pe-md-5">
              <h2 className="display-6  fw-bold pb-2 mt-5 mt-md-0">
                Our Achievements
              </h2>
              <p className="fs-5 ">
                Over the years, we have had the privilege of working with a wide
                range of clients across various industries. We take pride in our
                ability to deliver customized software solutions that address
                the specific needs of each client. Our commitment to quality and
                customer satisfaction has earned us a reputation as a trusted
                partner in the software development industry. <br /> <br />
                We are proud of our achievements and are dedicated to continuing
                to deliver innovative software solutions that help our clients
                succeed in today's fast-paced business environment.
              </p>
            </div>
            <div className="">
              <img src="./imgs/our mission.jpg" alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
