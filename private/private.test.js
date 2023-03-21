import { checkUserAccess } from "./private";

describe("checkUserAccess", () => {
  it("should return a function that returns true", () => {
    const userAccess = checkUserAccess("12345");
    expect(userAccess()).toBe(true);
  });
});
