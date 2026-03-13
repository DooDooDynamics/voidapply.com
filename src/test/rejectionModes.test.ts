import { describe, it, expect } from "vitest";
import { JobRepository } from "@/repositories";

describe("Rejection mode filtering", () => {
  it("all jobs support generic modes", () => {
    const jobs = JobRepository.getAll();
    for (const job of jobs) {
      const supported = JobRepository.getSupportedRejectionModes(job);
      expect(supported).toContain("dev-null");
      expect(supported).toContain("ghost");
      expect(supported).toContain("speedrun");
    }
  });

  it("jobs with fake-email content support fake-email mode", () => {
    const job = JobRepository.getById("google-senior-frontend")!;
    expect(job.rejectionContent["fake-email"]).toBeDefined();
    const supported = JobRepository.getSupportedRejectionModes(job);
    expect(supported).toContain("fake-email");
  });

  it("jobs with ats-score content support ats-score mode", () => {
    const job = JobRepository.getById("google-senior-frontend")!;
    expect(job.rejectionContent["ats-score"]).toBeDefined();
    const supported = JobRepository.getSupportedRejectionModes(job);
    expect(supported).toContain("ats-score");
  });

  it("jobs without personalized content don't support those modes", () => {
    const job = JobRepository.getById("google-product-manager")!;
    const supported = JobRepository.getSupportedRejectionModes(job);
    expect(supported).not.toContain("ats-score");
    expect(supported).not.toContain("interview-then-ghost");
  });
});
