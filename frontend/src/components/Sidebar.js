import React, { useState } from "react";
import "./Sidebar.scss";
import profileImage from "../images/Anirut.jpg";
import { useStateValue } from "../utils/StateProvider";

function Sidebar() {
  const [{ sidebar }, dispatch] = useStateValue();
  const [profileSection, setProfileSection] = useState(sidebar[0]);
  const [softwareSkillSection, setSoftwareSkillSection] = useState(sidebar[1]);
  const [languageSection, setLanguageSection] = useState(sidebar[2]);
  const [interestSection, setInterestSection] = useState(sidebar[3]);

  return (
    <div className="Sidebar flex-column">
      <img className="ProfileImage" src={profileImage} alt="" />

      {/* profile */}
      {profileSection ? (
        <div className="Section flex-column">
          <div className="Title">{profileSection.title}</div>
          <div className="Content">{profileSection.content}</div>
        </div>
      ) : (
        ""
      )}

      {/* sofeware skills */}
      {softwareSkillSection ? (
        <div className="Section flex-column">
          <div className="Title">{softwareSkillSection.title}</div>
          {softwareSkillSection.content.map((item, index) => {
            return (
              <div
                key={index}
                className="List flex-row justify-content-between"
              >
                <div className="List__title">{item.skillgroup}</div>
                <div className="List__detail">{item.skill}</div>
              </div>
            );
          })}
        </div>
      ) : (
        ""
      )}

      {/* Language */}
      {languageSection ? (
        <div className="Section flex-column">
          <div className="Title">{languageSection.title}</div>
          {languageSection.content.map((item, index) => {
            return (
              <div key={index} className="List">
                <div className="List__title">{item}</div>
              </div>
            );
          })}
        </div>
      ) : (
        ""
      )}

      {/* Interesting */}
      {interestSection ? (
        <div className="Section flex-column">
          <div className="Title">{interestSection.title}</div>
          <div className="flex-row justify-content-around">
            {interestSection.content.map((item, index) => {
              return (
                <div key={index} className="List flex-column align-item-center">
                  <img src={"../images/" + item.pic} alt="" />
                  <div className="">{item.name}</div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Sidebar;
