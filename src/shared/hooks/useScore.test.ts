import { act, renderHook } from "@testing-library/react";
import { mockScore, mockScoreResults } from "../../mocks/mock_utils";
import { useScore } from "../hooks/useScore";

describe("Test the useScore hook", () => {
  test("The score should changes when you pass the data", () => {
    const { result } = renderHook(() => useScore(mockScore));

    expect(result.current.score).toEqual(mockScoreResults.score);
    expect(result.current.totalRows).toEqual(mockScoreResults.rows);
  });

  test("The function should update the score", () => {
    const { result } = renderHook(() => useScore(mockScore));

    act(() => {
      result.current.updateScore();
    });

    expect(result.current.score && result.current.totalRows).toEqual(
      mockScoreResults.default
    );
  });
});
