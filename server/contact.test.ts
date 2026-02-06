import { describe, expect, it, beforeEach } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

function createTestContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: () => {},
    } as TrpcContext["res"],
  };
}

describe("contact.submit", () => {
  it("should validate required fields", async () => {
    const ctx = createTestContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.contact.submit({
        name: "",
        email: "invalid",
        message: "short",
      })
    ).rejects.toThrow();
  });

  it("should accept valid contact submission", async () => {
    const ctx = createTestContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.contact.submit({
      name: "Test User",
      email: "test@example.com",
      phone: "+502 1234-5678",
      serviceType: "riego",
      message: "Este es un mensaje de prueba con suficiente longitud",
    });

    expect(result).toEqual({ success: true });
  });

  it("should accept submission without optional fields", async () => {
    const ctx = createTestContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.contact.submit({
      name: "Test User",
      email: "test@example.com",
      message: "Este es un mensaje de prueba con suficiente longitud",
    });

    expect(result).toEqual({ success: true });
  });
});
