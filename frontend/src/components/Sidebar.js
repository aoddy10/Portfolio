import React from "react";
import "./Sidebar.scss";
import ProfileImage from "../images/ProfileImage.jpg";
import { ProgressBar } from "react-bootstrap";

function Sidebar() {
  return (
    <div className="Sidebar bg-secondary text-white">
      {/* Profile Image */}
      <img className="Sidebar__ProfileImage" src={ProfileImage} alt="Profile" />

      {/* Profile content */}
      <div className="Sidebar__Section p-4">
        <div className="Sidebar__SectionTitle d-flex">
          <h3 className="pr-4">PROFILE</h3>
          <h3>...............</h3>
        </div>
        <div className="Sidebar__SectionContent mt-3">
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a
            tincidunt diam. Ut maximus fermentum sem, at pharetra mi iaculis
            iaculis. Praesent viverra sit amet turpis sed finibus. Sed eleifend
            eros eget porttitor blandit.
          </span>
        </div>
      </div>

      {/* Developer skill */}
      <div className="Sidebar__Section p-4">
        <div className="Sidebar__SectionTitle d-flex">
          <h3 className="pr-4">DEVELOPER SKILLS</h3>
          <h3>...............</h3>
        </div>
        <div className="Sidebar__SectionContent mt-3">
          <div className="mb-2">
            <div>HTML</div>
            <div>
              <ProgressBar now={90}></ProgressBar>
            </div>
          </div>
          <div className="mb-2">
            <div>React</div>
            <div>
              <ProgressBar now={80}></ProgressBar>
            </div>
          </div>
          <div className="mb-2">
            <div>Angular</div>
            <div>
              <ProgressBar now={70}></ProgressBar>
            </div>
          </div>
          <div className="mb-2">
            <div>Python</div>
            <div>
              <ProgressBar now={60}></ProgressBar>
            </div>
          </div>
        </div>
      </div>

      {/* Language skill */}
      <div className="Sidebar__Section p-4">
        <div className="Sidebar__SectionTitle d-flex">
          <h3 className="pr-4">LANGUAGE SKILLS</h3>
          <h3>...............</h3>
        </div>
        <div className="Sidebar__SectionContent mt-3">
          <div className="mb-2">
            <div>Thai</div>
            <div>
              <ProgressBar now={90}></ProgressBar>
            </div>
          </div>
          <div className="mb-2">
            <div>English</div>
            <div>
              <ProgressBar now={70}></ProgressBar>
            </div>
          </div>
        </div>
      </div>

      {/* Best award */}
      <div className="Sidebar__Section p-4">
        <div className="Sidebar__SectionTitle d-flex">
          <h3 className="pr-4">BEST AWARDS</h3>
          <h3>...............</h3>
        </div>
        <div className="Sidebar__SectionContent mt-3">
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a
            tincidunt diam. Ut maximus fermentum sem, at pharetra mi iaculis
            iaculis. Praesent viverra sit amet turpis sed finibus. Sed eleifend
            eros eget porttitor blandit.
          </span>
        </div>
      </div>

      {/* Interests */}
      <div className="Sidebar__Section p-4">
        <div className="Sidebar__SectionTitle d-flex">
          <h3 className="pr-4">INTERESTS</h3>
          <h3>...............</h3>
        </div>
        <div className="Sidebar__SectionContent mt-3 d-flex justify-content-between">
          <div className="Sidebar__Interest d-flex flex-column justify-content-center align-content-center">
            <img src="" alt="Travel" />
            <span>TRAVEL</span>
          </div>

          <div className="Sidebar__Interest d-flex flex-column justify-content-center align-content-center">
            <img src="" alt="Game" />
            <span>GAME</span>
          </div>

          <div className="Sidebar__Interest d-flex flex-column justify-content-center align-content-center">
            <img src="" alt="Football" />
            <span>FOOTBALL</span>
          </div>

          <div className="Sidebar__Interest d-flex flex-column justify-content-center align-content-center">
            <img src="" alt="Crypto" />
            <span>CRYPTO</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
