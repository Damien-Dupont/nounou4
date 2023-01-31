/* eslint-disable array-callback-return */
const supertest = require("supertest");

const app = require("../src/app");
const { kidToCreate, kidKeys } = require("./testData");

// jest.useFakeTimers();

// describe("SILENCING CONSOLES", () => {
//   let consoleSpy;

//   beforeEach(() => {
//     if (typeof consoleSpy === "function") {
//       consoleSpy.mockRestore();
//     }
//   });

//   it("should not output errors on console", () => {
//     consoleSpy = jest.spyOn(console, "error").mockImplementation();
//     expect(consoleSpy).not.toHaveBeenCalled();
//   });

//   it("should not output console warns", () => {
//     consoleSpy = jest.spyOn(console, "warn").mockImplementation();
//     expect(consoleSpy).not.toHaveBeenCalled();
//   });

//   it("should not output console logs", () => {
//     consoleSpy = jest.spyOn(console, "log").mockImplementation();
//     expect(consoleSpy).not.toHaveBeenCalled();
//   });
// });

describe("KID ROUTES", () => {
  const persistantData = {};

  it("should create a new kid (ADD)", async () => {
    const res = await supertest(app)
      .post("/kid/add")
      .send(kidToCreate)
      .expect(201)
      .expect("Content-Type", /json/);

    kidKeys.map((prop) => {
      expect(res.body).toHaveProperty(prop);
    });

    persistantData.kid = res.body;
  });

  it("should get the kid with previously created id (GET-ONE)", async () => {
    const res = await supertest(app)
      .get(`/kid/${persistantData.kid.id}`)
      .expect(200)
      .expect("Content-Type", /json/);

    kidKeys.map((prop) => {
      expect(res.body).toHaveProperty(prop);
    });
  });

  it("should get the kids from parent 1 (BrowseByParent)", async () => {
    const res = await supertest(app)
      .get("/kid/parent/1")
      .expect(200)
      .expect("Content-Type", /json/);

    expect(Array.isArray(res.body)).toBe(true);

    res.body.forEach((kid) => {
      expect(kid).toHaveProperty("parent", 1);
      kidKeys.map((prop) => {
        expect(kid).toHaveProperty(prop);
      });
    });
  });

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

  it("should delete previously created kid (DELETE)", async () => {
    await supertest(app).delete(`/kid/${persistantData.kid.id}`).expect(204);
  });
});
