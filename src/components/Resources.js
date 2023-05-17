import React from "react";
import scholars from "../assets/fotor_2023-5-16_23_32_11.png";

const Resources = () => {
  return (
    <div className="resources">
      <img className="center-text scholars" src={scholars} width="60%" height="140px" alt="n/a"/>
      <div className="resource-section">
      <section className="sidebar">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOLf5vKJpaJPP2AW_BVIDYwEZovw-0YAmOYA&usqp=CAU" className="resource-img" alt="n/a"/>
        <img src="data:image/jpeg;base64,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" className="resource-img" alt="n/a"/>
      </section>
      <section className="center-text">
        {/* <h2 style={{ textDecoration: "underline" }}>Grants / Scholarships</h2> */}
        {/* <img src={scholars} width="8000px" height="100px" /> */}
        {/* <br /> */}
        <br />
        <div className="scholarships">
        <ul>
          <li>
            <a href="https://uncf.org/scholarships" target="*">
              United Negro College Fund (UNCF)
            </a>
          </li>
          <li>
            <a href="https://jackierobinson.org/scholarship/" target="*">
              Jackie Robinson Foundation (JFR)
            </a>
          </li>
          <li>
            <a href="http://www.tmcf.org/students-alumni/scholarships/" target="*">
              Thurgood Marshall College Fund (TMCF)
            </a>
          </li>
          <li>
            <a href="https://ronbrown.org/apply/ron-brown-scholarship/" target="*">
              Ron Brown Scholarship
            </a>
          </li>
          <li>
            <a href="https://www.blmsquaredscholarship.org/applicants" target="*">
              Black Lives Matter Squared Scholarship Foundation (BLM²)
            </a>
          </li>
          <li>
            <a href="https://www.ametsoc.org/index.cfm/ams/information-for/students/ams-scholarships-and-fellowships/ams-scholarship-for-underserved-communities-formerly-minority-scholarship/" target="*">
              AMS Scholarship for Underserved Communities
            </a>
          </li>
          <li>
            <a href="https://nanbpwc.org/wp-content/uploads/2023/01/2023%20Malveaux%20Scholarship%20App.pdf" target="*">
              Dr. Julianne Malveaux Scholarship
            </a>
          </li>
          <li>
            <a href="https://www.pearlmillingcompany.com/pearlpledge/applynow" target="*">
              P.E.A.R.L. Pledge
            </a>
          </li>
          <li>
            <a href="https://lpwhitehead.org/grants-program/" target="*">
              Lettie Pate Whitehead Foundation
            </a>
          </li>
          <li>
            <a href="https://financialservices.howard.edu/resources/hu-need-based-grant-needy" target="*">
              Howard University Need Bases Grant
            </a>
          </li>
          <li>
            <a href="https://www.bcala.org/2022-2023-e-j-josey-scholarship?gad=1&gclid=CjwKCAjwjYKjBhB5EiwAiFdSfnHOihJRm8UozJNQeRW7tXZO2dgdX1IsWqtQGAiz5bIrK9bOgwH6NhoC2DEQAvD_BwE" target="*">
              Black Caucus of the American Library Association
            </a>
          </li>
          {/* <li></li>
          <li></li> */}
          </ul>
          </div>
      </section>
      <section className="sidebar">
      <img src="data:image/png;base64,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" className="resource-img" alt="n/a"/>
        <img src="https://blackamericaweb.com/wp-content/uploads/sites/10/2017/04/uncf-logo-540x400.jpg?quality=80&strip=all&w=540&crop=0,0,100,400px" className="resource-img" alt="uncf"/>
        </section>
        </div>
    </div>
  );
};

export default Resources;
