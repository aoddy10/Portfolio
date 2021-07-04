import React, { useState, useEffect } from "react";
import "./Content.scss";
import { useStateValue } from "../utils/StateProvider";

function Content() {
  const [{ content }, dispatch] = useStateValue();
  const [profileSection, setprofileSection] = useState(content[0]);
  const [experienceSection, setExperienceSection] = useState(content[1]);
  const [educationSection, setEducationSection] = useState(content[2]);
  const [referrenceSection, setReferrenceSection] = useState(content[3]);
  console.log(experienceSection);

  return (
    <div className="Content">
      {/* Profile detail */}
      {profileSection ? (
        <div className="Section Section__Profile flex-column">
          <div className="Headline flex-column">
            <div className="FirstName">{profileSection.detail.firstName}</div>
            <div className="LastName">{profileSection.detail.lastName}</div>
            <div className="Position">{profileSection.detail.position}</div>
          </div>

          <div className="Contact">
            <div className="List flex-row">
              <img src="" alt="" />
              <div>{profileSection.detail.address}</div>
            </div>
            <div className="flex-row">
              <div className="List flex-row">
                <img src="" alt="" />
                <div>{profileSection.detail.phone}</div>
              </div>
              <div className="List flex-row">
                <img src="" alt="" />
                <div>{profileSection.detail.email}</div>
              </div>
            </div>
            <div className="List flex-row">
              <img src="" alt="" />
              <div>{profileSection.detail.linkedIn}</div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      {/* Experience Detail */}
      {experienceSection ? (
        <div className="Section Section__Experience flex-column">
          <div className="Header flex-row">
            <img src="" alt="" />
            <div>{experienceSection.section}</div>
          </div>
          {experienceSection.detail.map((item, index) => {
            return (
              <div
                key={index}
                className="List flex-row justify-content-between"
              >
                <div className="LeftSide flex-column">
                  <div className="Title">{item.position}</div>
                  <div className="Content">{item.workingPeriod}</div>
                </div>
                <div className="RightSide flex-column">
                  <div className="Title">{item.company}</div>
                  <div className="Content">{item.shortDesc}</div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        ""
      )}

      {/* Education Detail */}
      <div className="Section"></div>

      {/* Reference Detail */}
      <div className="Section"></div>
    </div>
  );
}

export default Content;
