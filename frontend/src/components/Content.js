import React, { useState, useEffect } from "react";
import "./Content.scss";
import { useStateValue } from "../utils/StateProvider";

function Content() {
  const [{ content }, dispatch] = useStateValue();
  const [profileSection, setprofileSection] = useState(content[0]);
  const [experienceSection, setExperienceSection] = useState(content[1]);
  const [educationSection, setEducationSection] = useState(content[2]);
  const [referrenceSection, setReferrenceSection] = useState(content[3]);

  return (
    <div className="Content">
      {/* Profile detail */}
      <div className="Section Section__Profile">
        <div className="Headline">
          <div></div>
        </div>
      </div>

      {/* Experience Detail */}
      <div className="Section"></div>

      {/* Education Detail */}
      <div className="Section"></div>

      {/* Reference Detail */}
      <div className="Section"></div>
    </div>
  );
}

export default Content;
