const expect = require("expect");

const { generateMessage } = require("../utils/message");

describe("generateMessage", () => {
  it("should generate the correct message object", () => {
    const from = "isaac";
    const text = "hi";
    const message = generateMessage(from, text);
    expect(message).toMatchObject({
      from,
      text
    });
    expect(typeof message.createdAt).toBe("number");
  });
});
