import renderer from "react-test-renderer";
import { PauseModal } from "./PauseModal";

describe("Test the PauseModal component", () => {
  test("The PauseModal renders correctly", () => {
    const pauseModalSnap = renderer
      .create(
        <PauseModal
          onPlay={() => {
            console.log("resume game");
          }}
        />
      )
      .toJSON();
    expect(pauseModalSnap).toMatchSnapshot();
  });
});
