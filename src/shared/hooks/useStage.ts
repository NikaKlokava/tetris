import { useEffect, useState } from "react";
import { createGameField } from "../utils/utils";
import { isEqual } from "lodash";

export const useStage = ({ figure }: { figure: FigureType }) => {
  const [stage, setStage] = useState<FieldData>(createGameField());

  useEffect(() => {
    const updateFieldData = (prevStage: FieldData) => {
      const newStage = prevStage.map((row) =>
        row.map((elem, i) => (isEqual(elem[1], "empty") ? [0, "empty"] : elem))
      );

      figure.shape.forEach((row, y) => {
        row.forEach((elem, x) => {
          if (!isEqual(elem, 0)) {
            newStage[y + figure.position.y][x + figure.position.x] = [
              elem,
              `${figure.collided ? "occupied" : "empty"}`,
            ];
          }
        });
      });

      return newStage;
    };

    setStage((prev) => updateFieldData(prev));
  }, [figure]);

  return { stage, setStage };
};
