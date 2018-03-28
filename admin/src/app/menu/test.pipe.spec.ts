import { TestPipe } from "./test.pipe";

describe("TestPipe", () => {
  let pipe = new TestPipe();

  it("transforms 2 to 1024", () => {
    expect(pipe.transform(2, "10")).toBe(1024);
  });

});
