import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../app/store";
import App from "../App";

describe("App component", () => {
  it("should renders correctly", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const text = screen.getByText(/RTK Query/i);
    expect(text).toBeInTheDocument();
  });

  it("should match snapshot", async () => {
    const { container } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
