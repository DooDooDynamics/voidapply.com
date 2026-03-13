import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { CompanyLogo } from "@/lib/logoGenerator";

describe("Logo generator", () => {
  it("produces deterministic output for the same company ID", () => {
    const { container: first } = render(<CompanyLogo companyId="google" />);
    const { container: second } = render(<CompanyLogo companyId="google" />);
    expect(first.innerHTML).toBe(second.innerHTML);
  });

  it("produces different output for different company IDs", () => {
    const { container: google } = render(<CompanyLogo companyId="google" />);
    const { container: amazon } = render(<CompanyLogo companyId="amazon" />);
    expect(google.innerHTML).not.toBe(amazon.innerHTML);
  });

  it("renders an SVG element", () => {
    const { container } = render(<CompanyLogo companyId="google" />);
    const svg = container.querySelector("svg");
    expect(svg).toBeTruthy();
  });
});
