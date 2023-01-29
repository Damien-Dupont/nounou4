/* eslint-disable array-callback-return */
const supertest = require("supertest");

const app = require("../src/app");
const { contractToCreate, contractKeys } = require("./testData");

describe("SILENCING CONSOLES", () => {
  let consoleSpy;

  beforeEach(() => {
    if (typeof consoleSpy === "function") {
      consoleSpy.mockRestore();
    }
  });

  it("should not output errors on console", () => {
    consoleSpy = jest.spyOn(console, "error").mockImplementation();
    expect(consoleSpy).not.toHaveBeenCalled();
  });

  it("should not output console warns", () => {
    consoleSpy = jest.spyOn(console, "warn").mockImplementation();
    expect(consoleSpy).not.toHaveBeenCalled();
  });

  it("should not output console logd", () => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation();
    expect(consoleSpy).not.toHaveBeenCalled();
  });
});

describe("CONTRACT ROUTES", () => {
  const persistantData = {};

  it("should create a contract", async () => {
    const res = await supertest(app)
      .post("/contract/add")
      .send(contractToCreate)
      .expect(201);

    contractKeys.map((prop) => {
      expect(res.body).toHaveProperty(prop);
    });

    persistantData.contract = res.body;
  });
});
