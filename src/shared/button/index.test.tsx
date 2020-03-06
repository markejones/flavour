import * as React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Button } from "./index";

describe("<Button />", () => {
  test("should be enabled by default", () => {
    const { getByRole } = render(<Button onClick={() => null} />);
    expect(getByRole("button")).toBeEnabled();
  });
});
