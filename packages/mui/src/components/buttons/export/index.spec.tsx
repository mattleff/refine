import React from "react";

import { screen, render } from "@test";
import { ExportButton } from "./index";

describe("<ExportButton/>", () => {
    it("should render", async () => {
        const { findByText } = render(<ExportButton />);

        findByText("Export");
    });

    it("should render text by children", async () => {
        const { container, getByText } = render(
            <ExportButton>refine</ExportButton>,
        );

        expect(container).toBeTruthy();

        getByText("refine");
    });

    it("should render without text show only icon", async () => {
        const { container, queryByText } = render(<ExportButton hideText />);

        expect(container).toBeTruthy();

        expect(queryByText("Export")).not.toBeInTheDocument();
    });

    it("should have text 'Export'", async () => {
        window.open = jest.fn();

        render(<ExportButton data-testid="btn" />);

        screen.getByText("Export");
    });
});
