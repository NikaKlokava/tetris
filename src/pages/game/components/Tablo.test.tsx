import renderer from "react-test-renderer";
import { Tablo } from "./Tablo";

describe("Test the Tablo component", () => {
  test("The Tablo renders correctly", () => {
    const tabloSnap = renderer
      .create(<Tablo rows={0} level={0} score={0} gameOver={false} />)
      .toJSON();
    expect(tabloSnap).toMatchSnapshot();
  });
});
