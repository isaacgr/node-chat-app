const expect = require("expect");

const {
  generateMessage,
  generateLocationMessage
} = require("../utils/message");

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

describe("generateLocationMessage", () => {
  it("should generate the correct location object", () => {
    const from = "isaac";
    const lat = 1;
    const long = 1;
    const message = generateLocationMessage(from, lat, long);
    expect(message).toMatchObject({
      from,
      url: `https://www.google.com/maps?q=${lat},${long}`
    });
    expect(typeof message.createdAt).toBe("number");
  });
});
