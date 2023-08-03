import { useCallback, useEffect, useState } from "react";
import { linePoints } from "../utils/utils";

type Props = {
  completedRow: number;
  level: number;
};

export const useScore = ({ completedRow, level }: Props) => {
  const [score, setScore] = useState(0);
  const [totalRows, setTotalRows] = useState(0);

  const calculateScore = useCallback(() => {
    if (completedRow > 0) {
      setScore((prev) => prev + linePoints[completedRow - 1] * (level + 1));
      setTotalRows((prev) => prev + completedRow);
    }
  }, [completedRow, level]);

  useEffect(() => {
    calculateScore();
  }, [calculateScore]);

  const updateScore = () => {
    setScore(0);
    setTotalRows(0);
  };

  return { score, totalRows, updateScore };
};
