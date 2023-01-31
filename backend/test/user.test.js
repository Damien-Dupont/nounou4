/* eslint-disable array-callback-return */
const supertest = require("supertest");

const app = require("../src/app");
const { userToCreate, userKeys } = require("./testData");

// jest.useFakeTimers();

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

  it("should not output console logs", () => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation();
    expect(consoleSpy).not.toHaveBeenCalled();
  });
});

describe("USER ROUTES", () => {
  const persistantData = {};

  it("should create a new user (ADD)", async () => {
    const res = await supertest(app)
      .post("/user/add")
      .send(userToCreate)
      .expect(201)
      .expect("Content-Type", /json/);

    userKeys.map((prop) => {
      expect(res.body).toHaveProperty(prop);
    });

    persistantData.user = res.body;
  });

  // it("should get the user with id 1 (GET-ONE)", async () => {
  //   const res = await supertest(app)
  //     .get("/user/1")
  //     .expect(200)
  //     .expect("Content-Type", /json/);

  //   userKeys.map((prop) => {
  //     expect(res.body).toHaveProperty(prop);
  //   });
  // });

  // it(`should update the previously created user (PUT)`, async () => {
  //   await supertest(app)
  //     .put(`/user/${persistantData.contract.id}`)
  //     .send({
  //       firstname: "Damien (updated)",
  //     })
  //     .expect(204);

  //   const res = await supertest(app).get(
  //     `/contract/${persistantData.contract.id}`
  //   );

  //   expect(res.body).toHaveProperty("caregiver", "Isabelle N.");
  // });
});
