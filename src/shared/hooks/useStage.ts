import { useState } from "react";
import { createGameField } from "../utils/utils";

export const useStage = () => {
  const [stage, setStage] = useState<FieldData>(createGameField());

  return {stage, setStage};
};
