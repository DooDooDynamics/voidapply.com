import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route, useSearchParams } from "react-router-dom";

function TestComponent() {
  const [searchParams] = useSearchParams();
  return (
    <div>
      <span data-testid="skin">{searchParams.get("skin") ?? "none"}</span>
      <span data-testid="rejection">{searchParams.get("rejection") ?? "none"}</span>
    </div>
  );
}

describe("Route params", () => {
  it("reads skin and rejection mode from URL query params", () => {
    render(
      <MemoryRouter initialEntries={["/job/test?skin=worknight&rejection=dev-null"]}>
        <Routes>
          <Route path="/job/:jobId" element={<TestComponent />} />
        </Routes>
      </MemoryRouter>,
    );

    expect(screen.getByTestId("skin").textContent).toBe("worknight");
    expect(screen.getByTestId("rejection").textContent).toBe("dev-null");
  });

  it("handles missing query params gracefully", () => {
    render(
      <MemoryRouter initialEntries={["/job/test"]}>
        <Routes>
          <Route path="/job/:jobId" element={<TestComponent />} />
        </Routes>
      </MemoryRouter>,
    );

    expect(screen.getByTestId("skin").textContent).toBe("none");
    expect(screen.getByTestId("rejection").textContent).toBe("none");
  });
});
