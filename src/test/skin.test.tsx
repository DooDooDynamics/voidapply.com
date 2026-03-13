import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import type { AtsSkinProps } from "@/types";
import { JobRepository, CompanyRepository } from "@/repositories";

// Import directly (not lazy) for testing
import GreenHouseOfPain from "@/components/skins/GreenHouseOfPain";

describe("ATS Skin rendering", () => {
  it("GreenHouseOfPain renders without crashing with valid props", () => {
    const job = JobRepository.getById("google-senior-frontend")!;
    const company = CompanyRepository.getById("google")!;
    const props: AtsSkinProps = { job, company, onSubmit: () => {} };

    render(<GreenHouseOfPain {...props} />);

    expect(screen.getByText(/GreenHouse of Pain/)).toBeTruthy();
    expect(screen.getByText(/Submit Application/)).toBeTruthy();
  });
});
