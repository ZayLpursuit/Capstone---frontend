import React from "react";
import scholars from "../assets/fotor_2023-5-16_23_32_11.png";

const Resources = () => {
  return (
    <div className="resources">
      <img
        className="center-text scholars"
        src={scholars}
        width="60%"
        height="140px"
        alt="n/a"
      />
      <div className="resource-section">
        <section className="sidebar">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOLf5vKJpaJPP2AW_BVIDYwEZovw-0YAmOYA&usqp=CAU"
            className="resource-img"
            alt="n/a"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOLf5vKJpaJPP2AW_BVIDYwEZovw-0YAmOYA&usqp=CAU"
            className="resource-img"
            alt="n/a"
          />
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
              <li>
                <a href="https://www.floridajobs.org/community-planning-and-development/Small-and-Minority-Business-Resources/Small-and-Minority-Business-Programs/black-business-loan-program">
                  Black Business Loan Program (BBLP)
                </a>
              </li>
              <li>
                <a href="https://www.nsbe.org/collegiate/education/scholarships">
                  National Society of Black Engineers Scholarships
                </a>
              </li>
              <li>
                <a href="https://naacp.org/find-resources/scholarships-awards-internships">
                  NAACP Scholarships
                </a>
              </li>
            </ul>
          </div>
      </section>
      <section className="sidebar">
      <img src="data:image/png;base64,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" className="resource-img" alt="n/a"/>
        <img src="https://blackamericaweb.com/wp-content/uploads/sites/10/2017/04/uncf-logo-540x400.jpg?quality=80&strip=all&w=540&crop=0,0,100,400px" className="resource-img" alt="uncf"/>
        </section>
        <section className="sidebar">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOLf5vKJpaJPP2AW_BVIDYwEZovw-0YAmOYA&usqp=CAU"
            className="resource-img"
            alt="n/a"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOLf5vKJpaJPP2AW_BVIDYwEZovw-0YAmOYA&usqp=CAU"
            className="resource-img"
            alt="n/a"
          />
        </section>
      </div>
    </div>
  );
};

export default Resources;
