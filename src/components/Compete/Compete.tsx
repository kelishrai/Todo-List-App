import "./Compete.modules.css";

import { FaPython } from "react-icons/fa";
import { TbSwitch } from "react-icons/tb";
import { FiHexagon } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

import ChallengeListTable from "../ChallengeListTable/ChallengeListTable";

const Compete = () => {
  return (
    <main className="compete">
      <div className="compete__main">
        <div className="compete__banner">
          <FaPython color="white" className="compete__banner__logo" />
          <p>Python Challenges</p>
          <button>
            <span>Change Language</span>
            <TbSwitch />
          </button>
        </div>
        <div className="start-challenge-section">
          <div>
            <p>Pick a random Python challenge</p>
            <p>Solve a problem from a list of 600+ unique problems.</p>
          </div>
          <button>
            <span>Start Challenge</span>
            <span>&gt;</span>
          </button>
        </div>
        <div className="challenge">
          <div className="challenge__filter">
            <div className="challenge__filter__button">
              <span>Difficulty: All</span>
              <IoIosArrowDown />
            </div>
            <div className="challenge__filter__button">
              <span>Status: All</span>
              <IoIosArrowDown />
            </div>
            <div className="challenge__filter__button">
              <span>Tags: All</span>
              <IoIosArrowDown />
            </div>
          </div>
          <ChallengeListTable/>
        </div>
      </div>
      <aside className="compete__aside">
        <div className="compete__aside__stats">
          <div className="compete__aside__stats__stat compete__aside__stats__stat--green">
            <FiHexagon className="compete__aside__stats_icon" />
            <div>
              <p>710</p>
              <p>Total XP gained</p>
            </div>
          </div>
          <div className="compete__aside__stats__stat compete__aside__stats__stat--pink">
            <FiHexagon className="compete__aside__stats_icon" />
            <div>
              <p>710</p>
              <p>Total XP gained</p>
            </div>
          </div>
        </div>
        <div className="compete-leaderboard"></div>
      </aside>
    </main>
  );
};

export default Compete;
