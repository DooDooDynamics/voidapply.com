import { describe, it, expect } from "vitest";
import { JobRepository, CompanyRepository } from "@/repositories";

describe("JobRepository", () => {
  it("getById returns the correct job", () => {
    const job = JobRepository.getById("google-senior-frontend");
    expect(job).toBeDefined();
    expect(job!.title).toBe("Senior Frontend Engineer");
    expect(job!.companyId).toBe("google");
  });

  it("getById returns undefined for non-existent job", () => {
    expect(JobRepository.getById("non-existent")).toBeUndefined();
  });

  it("getByCompany filters correctly", () => {
    const googleJobs = JobRepository.getByCompany("google");
    expect(googleJobs.length).toBeGreaterThan(0);
    expect(googleJobs.every((j) => j.companyId === "google")).toBe(true);

    const amazonJobs = JobRepository.getByCompany("amazon");
    expect(amazonJobs.length).toBeGreaterThan(0);
    expect(amazonJobs.every((j) => j.companyId === "amazon")).toBe(true);
  });
});

describe("CompanyRepository", () => {
  it("getById returns the correct company", () => {
    const company = CompanyRepository.getById("google");
    expect(company).toBeDefined();
    expect(company!.name).toBe("Google");
  });

  it("getAll returns all companies", () => {
    const companies = CompanyRepository.getAll();
    expect(companies.length).toBe(2);
  });
});
