/* eslint-disable array-callback-return */
const supertest = require("supertest");

const app = require("../src/app");
const { userContractToCreate, userContractKeys } = require("./testData");

// // jest.useFakeTimers();
// jest.setTimeout(10000);

describe("USER-CONTRACT ROUTES", () => {
  const persistantData = {};

  it("should create a user-contract (ADD)", async () => {
    const logSpy = jest.spyOn(global.console, "log");

    const res = await supertest(app)
      .post("/usercontract/add")
      .send(userContractToCreate)
      .expect(201)
      .expect("Content-Type", /json/);

    userContractKeys.map((prop) => {
      expect(res.body).toHaveProperty(prop);
    });
    logSpy.mockRestore();
    persistantData.userContract = res.body;
  });

  it("should get the contract with id 1 (GET-ONE)", async () => {
    const res = await supertest(app)
      .get("/usercontract/1")
      .expect(200)
      .expect("Content-Type", /json/);

    userContractKeys.map((prop) => {
      expect(res.body).toHaveProperty(prop);
    });
  });

  it("should get all the contracts from user 1 (GET-ALL from User)", async () => {
    const res = await supertest(app)
      .get("/usercontract/user")
      .expect(200)
      .expect("Content-Type", /json/);

    userContractKeys.map((prop) => {
      expect(res.body).toHaveProperty(prop);
    });
  });

  // it(`should update the previously created usercontract (PUT)`, async () => {
  //   await supertest(app)
  //     .put(`/usercontract/${persistantData.contract.id}`)
  //     .send({
  //       isMain: 0,
  //     })
  //     .expect(204);

  //   const res = await supertest(app).get(
  //     `/contract/${persistantData.contract.id}`
  //   );

  //   expect(res.body).toHaveProperty("isMain", 0);
  // });

  // it(`should add daysOff to the previously created contract (PUT)`, async () => {
  //   await supertest(app)
  //     .put(`/contract/${persistantData.contract.id}`)
  //     .send({
  //       daysOff: 2.5,
  //     })
  //     .expect(204);

  //   const res = await supertest(app).get(
  //     `/contract/${persistantData.contract.id}`
  //   );

  //   expect(res.body).toHaveProperty("daysOff", "2.5");
  // });

  // it("should delete previously created user-contract (DELETE)", async () => {
  //   await supertest(app)
  //     .delete(`/usercontract/${persistantData.userContract.id}`)
  //     .expect(204);
  // });
});
