import renderer from "react-test-renderer";
import { Gamepad } from "./Gamepad";

describe("Test the Gamepad component", () => {
  test("The Gamepad renders correctly", () => {
    const gamepadSnap = renderer.create(<Gamepad />).toJSON();
    expect(gamepadSnap).toMatchSnapshot();
  });
});
