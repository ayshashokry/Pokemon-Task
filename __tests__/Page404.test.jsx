import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Page404 from "../src/containers/Page404/Page404";
describe("Page 404", () => {
  it("it should render correctly", () => {
    const element = render(<Page404 />);
    expect(element).toMatchSnapshot();
  });
});
