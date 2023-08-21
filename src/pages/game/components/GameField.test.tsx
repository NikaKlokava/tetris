import renderer from "react-test-renderer";
import { mockEmptyStage } from "../../../mocks/mock_utils";
import { GameField } from "./GameField";

describe("Test the GameField component", () => {
  test("The GameField renders correctly", () => {
    const gameFieldSnap = renderer
      .create(<GameField stage={mockEmptyStage} />)
      .toJSON();
    expect(gameFieldSnap).toMatchSnapshot();
  });
});
