import React from "react";
import scholars from "../assets/fotor_2023-5-16_10_18_40.png";

const Resources = () => {
  return (
    <div className="resources">
      <img className="center-text scholars" src={scholars} width="60%" height="140px" alt="n/a"/>
      <div className="resource-section">
      <section className="sidebar">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOLf5vKJpaJPP2AW_BVIDYwEZovw-0YAmOYA&usqp=CAU" className="resource-img" alt="n/a"/>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOLf5vKJpaJPP2AW_BVIDYwEZovw-0YAmOYA&usqp=CAU" className="resource-img" alt="n/a"/>
      </section>
      <section className="center-text">
        {/* <h2 style={{ textDecoration: "underline" }}>Grants / Scholarships</h2> */}
        {/* <img src={scholars} width="8000px" height="100px" /> */}
        {/* <br /> */}
        <br />
        <div className="scholarships">
        <ul>
          <li>
            <a href="https://uncf.org/scholarships">
              United Negro College Fund (UNCF)
            </a>
          </li>
          <li>
            <a href="https://jackierobinson.org/scholarship/">
              Jackie Robinson Foundation (JFR)
            </a>
          </li>
          <li>
            <a href="http://www.tmcf.org/students-alumni/scholarships/">
              Thurgood Marshall College Fund (TMCF)
            </a>
          </li>
          <li>
            <a href="https://ronbrown.org/apply/ron-brown-scholarship/">
              Ron Brown Scholarship
            </a>
          </li>
          <li>
            <a href="https://www.blmsquaredscholarship.org/applicants">
              Black Lives Matter Squared Scholarship Foundation (BLM²)
            </a>
          </li>
          <li>
            <a href="https://www.ametsoc.org/index.cfm/ams/information-for/students/ams-scholarships-and-fellowships/ams-scholarship-for-underserved-communities-formerly-minority-scholarship/">
              AMS Scholarship for Underserved Communities
            </a>
          </li>
          <li>
            <a href="https://nanbpwc.org/wp-content/uploads/2023/01/2023%20Malveaux%20Scholarship%20App.pdf">
              Dr. Julianne Malveaux Scholarship
            </a>
          </li>
          <li>
            <a href="https://www.pearlmillingcompany.com/pearlpledge/applynow">
              P.E.A.R.L. Pledge
            </a>
          </li>
          <li>
            <a href="https://lpwhitehead.org/grants-program/">
              Lettie Pate Whitehead Foundation
            </a>
          </li>
          <li>
            <a href="https://financialservices.howard.edu/resources/hu-need-based-grant-needy">
              Howard University Need Bases Grant
            </a>
          </li>
          <li>
            <a href="https://www.bcala.org/2022-2023-e-j-josey-scholarship?gad=1&gclid=CjwKCAjwjYKjBhB5EiwAiFdSfnHOihJRm8UozJNQeRW7tXZO2dgdX1IsWqtQGAiz5bIrK9bOgwH6NhoC2DEQAvD_BwE">
              Black Caucus of the American Library Association
            </a>
          </li>
          {/* <li></li>
          <li></li> */}
          </ul>
          </div>
      </section>
      <section className="sidebar">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOLf5vKJpaJPP2AW_BVIDYwEZovw-0YAmOYA&usqp=CAU" className="resource-img" alt="n/a"/>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOLf5vKJpaJPP2AW_BVIDYwEZovw-0YAmOYA&usqp=CAU" className="resource-img" alt="n/a"/>
        </section>
        </div>
    </div>
  );
};

export default Resources;
