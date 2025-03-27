import { useEffect, useState } from "react";

import "./ChallengeListTable.module.css";

interface ChallengeListTableRowProps {
  title: string;
  difficulty: number;
}

const ChallengeListTableRow = ({
  title,
  difficulty,
}: ChallengeListTableRowProps) => {
  const showDifficulty = () => {
    switch (difficulty) {
      case 1:
        return "Easy";
      case 2:
        return "Medium";
      case 3:
        return "Hard";
      case 4:
        return "Expert";
      default:
        return "Very Easy";
    }
  };
  const showXP = () => {
    switch (difficulty) {
      case 1:
        return 30;
      case 2:
        return 50;
      case 3:
        return 60;
      case 4:
        return 70;
      default:
        return 10;
    }
  };
  let difficultyColor = "";
  const getColor = () => {
    switch (difficulty) {
      case 1:
        difficultyColor = "#04c1ab";
        break;
      case 2:
        difficultyColor = "#f8a737";
        break;
      case 3:
        difficultyColor = "#e34c4c";
        break;
      case 4:
        difficultyColor = "#9327fe";
        break;
      default:
        difficultyColor = "#00a3ff";
    }
  };
  getColor();
  const styles = {
    borderColor: difficultyColor,
    color: difficultyColor,
  };
  return (
    <tr className="challenge-list-table__row challenge-list-table__row--data">
      <th className="challenge-list-table__first-column">{title}</th>
      <th className="challenge-list-table__second-column">
        <div className="challenge-difficulty" style={styles}>
          {showDifficulty()}
        </div>
      </th>
      <th className="challenge-list-table__third-column">{showXP()} XP</th>
    </tr>
  );
};

const ChallengeListTable = () => {
  const [challengeList, setChallengeList] = useState([]);

  useEffect(() => {
    const fetchChallengeList = async () => {
      const response = await fetch(
        "https://api.community-challenges.programiz.pro/v1/preview/challenges/list?lang=python"
      );

      if (!response.ok) throw new Error("Error fetching data");
      const data = await response.json();
      setChallengeList(data.data);
    };

    fetchChallengeList();
  }, []);

  const mapChallengeListTable = () => {
    return challengeList.map((challenge) => (
      <ChallengeListTableRow
        key={challenge.id}
        title={challenge.title}
        difficulty={challenge.difficulty}
      />
    ));
  };

  return (
    <table className="challenge-list-table">
      <thead>
        <tr className="challenge-list-table__row challenge-list-table__row--header">
          <th className="challenge-list-table__first-column">Title</th>
          <th className="challenge-list-table__second-column">Difficulty</th>
          <th className="challenge-list-table__third-column">Challenge XP</th>
        </tr>
      </thead>
      <tbody>{mapChallengeListTable()}</tbody>
    </table>
  );
};

export default ChallengeListTable;
