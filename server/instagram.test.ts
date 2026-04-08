import { describe, it, expect } from "vitest";

describe("Instagram API endpoint", () => {
  it("should return posts from the server endpoint", async () => {
    const response = await fetch("http://localhost:3000/api/trpc/instagram.getPosts");
    expect(response.ok).toBe(true);

    const json = await response.json();
    // tRPC wraps the response in result.data.json
    const result = json?.result?.data?.json;

    expect(result).toBeDefined();
    expect(result.success).toBe(true);
    expect(Array.isArray(result.posts)).toBe(true);
    expect(result.posts.length).toBeGreaterThan(0);

    // Validate post structure
    const firstPost = result.posts[0];
    expect(firstPost).toHaveProperty("id");
    expect(firstPost).toHaveProperty("media_type");
    expect(firstPost).toHaveProperty("permalink");
  });
});
