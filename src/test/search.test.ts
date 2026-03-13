import { describe, it, expect } from "vitest";
import { JobRepository } from "@/repositories";

describe("Search", () => {
  it("returns results for a matching query", () => {
    const results = JobRepository.search("frontend");
    expect(results.length).toBeGreaterThan(0);
    expect(results.some((j) => j.title.toLowerCase().includes("frontend"))).toBe(true);
  });

  it("returns results for company name queries", () => {
    const results = JobRepository.search("google");
    expect(results.length).toBeGreaterThan(0);
    expect(results.every((j) => j.companyId === "google")).toBe(true);
  });

  it("returns all jobs for an empty query", () => {
    const all = JobRepository.getAll();
    const results = JobRepository.search("");
    expect(results.length).toBe(all.length);
  });

  it("returns empty array for nonsense query", () => {
    const results = JobRepository.search("xyzzy123nonsense");
    expect(results.length).toBe(0);
  });
});
