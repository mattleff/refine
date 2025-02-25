import React, { ReactNode } from "react";
import { Button } from "@mui/material";

import { Route, Routes } from "react-router-dom";

import { act, render, TestWrapper } from "@test";
import { Create } from "./";

const renderCreate = (create: ReactNode) => {
    return render(
        <Routes>
            <Route path="/:resource/:action" element={create} />
        </Routes>,
        {
            wrapper: TestWrapper({
                routerInitialEntries: ["/posts/create"],
            }),
        },
    );
};
describe("Create", () => {
    it("should render page successfuly", async () => {
        jest.useFakeTimers();

        const { container } = renderCreate(<Create />);

        await act(async () => {
            jest.advanceTimersToNextTimer(1);
        });

        expect(container).toBeTruthy();
    });

    it("should render default save button successfuly", async () => {
        jest.useFakeTimers();
        const { container, getByText } = renderCreate(<Create></Create>);

        await act(async () => {
            jest.advanceTimersToNextTimer(1);
        });

        expect(container.querySelector("button")).toBeTruthy();
        getByText("Save");
    });

    it("should render optional button with actionButtons prop", async () => {
        jest.useFakeTimers();

        const { container, getByText } = renderCreate(
            <Create actionButtons={<Button>Optional Button</Button>} />,
        );

        await act(async () => {
            jest.advanceTimersToNextTimer(1);
        });

        expect(container.querySelector("button")).toBeTruthy();
        getByText("Optional Button");
    });

    it("should render default title successfuly", async () => {
        jest.useFakeTimers();

        const { getByText } = renderCreate(<Create />);

        await act(async () => {
            jest.advanceTimersToNextTimer(1);
        });

        getByText("Create Post");
    });

    it("should render with label instead of resource name successfully", async () => {
        jest.useFakeTimers();

        const { getByText } = render(
            <Routes>
                <Route path="/:resource/:action" element={<Create />} />
            </Routes>,
            {
                wrapper: TestWrapper({
                    resources: [
                        {
                            name: "posts",
                            options: { route: "posts", label: "test label" },
                        },
                    ],
                    routerInitialEntries: ["/posts/create"],
                }),
            },
        );

        await act(async () => {
            jest.advanceTimersToNextTimer(1);
        });

        getByText("Create Test label");
    });

    it("should render optional title with title prop", async () => {
        jest.useFakeTimers();

        const { getByText } = renderCreate(
            <Create cardHeaderProps={{ title: "New Title" }} />,
        );

        await act(async () => {
            jest.advanceTimersToNextTimer(1);
        });

        getByText("New Title");
    });

    it("should render optional resource with resource prop", async () => {
        jest.useFakeTimers();

        const { getByText } = render(
            <Routes>
                <Route
                    path="/:resource"
                    element={<Create resource="posts" />}
                />
            </Routes>,
            {
                wrapper: TestWrapper({
                    routerInitialEntries: ["/custom"],
                }),
            },
        );

        await act(async () => {
            jest.advanceTimersToNextTimer(1);
        });

        getByText("Create Post");
    });

    it("should render tags", async () => {
        jest.useFakeTimers();

        const { getByText } = render(
            <Routes>
                <Route
                    path="/:resource/:action/:id"
                    element={<Create />}
                ></Route>
            </Routes>,
            {
                wrapper: TestWrapper({
                    routerInitialEntries: ["/posts/clone/1"],
                }),
            },
        );

        await act(async () => {
            jest.advanceTimersToNextTimer(1);
        });

        getByText("Create Post");
    });
    it("should render breadcrumb", async () => {
        jest.useFakeTimers();

        const { getAllByLabelText } = render(
            <Routes>
                <Route
                    path="/:resource/:action"
                    element={<Create resource="posts" />}
                />
            </Routes>,
            {
                wrapper: TestWrapper({
                    routerInitialEntries: ["/posts/create"],
                }),
            },
        );

        await act(async () => {
            jest.advanceTimersToNextTimer(1);
        });

        expect(getAllByLabelText("breadcrumb")).not.toBeNull();
    });
    it("should not render breadcrumb", async () => {
        jest.useFakeTimers();

        const { queryByLabelText } = render(
            <Routes>
                <Route
                    path="/:resource/:action"
                    element={<Create resource="posts" breadcrumb={null} />}
                />
            </Routes>,
            {
                wrapper: TestWrapper({
                    routerInitialEntries: ["/posts/create"],
                }),
            },
        );

        await act(async () => {
            jest.advanceTimersToNextTimer(1);
        });

        expect(queryByLabelText("breadcrumb")).not.toBeInTheDocument();
    });
});
