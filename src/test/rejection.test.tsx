import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import type { RejectionModeProps } from "@/types";
import { JobRepository, CompanyRepository } from "@/repositories";

import Speedrun from "@/components/rejections/Speedrun";

describe("Rejection mode rendering", () => {
  it("Speedrun renders and shows REJECTED stamp", async () => {
    const job = JobRepository.getById("google-senior-frontend")!;
    const company = CompanyRepository.getById("google")!;
    const props: RejectionModeProps = { job, company, onComplete: () => {} };

    const { findByText } = render(<Speedrun {...props} />);

    const stamp = await findByText("REJECTED");
    expect(stamp).toBeTruthy();
  });
});
