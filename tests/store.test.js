const query = require("../db/connection");
const queryList = require("../db/queries");
const { getStoreList } = require("../controllers/store.controller");

jest.mock("../db/connection"); // mock query to test its behavior without actually interact with database 

describe("getStoreList Controller", () => {
  let req, res;

  beforeEach(() => {
    req = {}; // empty because getStoreList has not any interaction with request object 
    res = {
      status: jest.fn().mockReturnThis(), // simultate res.status  mockReutrnThis() function allows chaining like res.status.send .. etc .
      send: jest.fn(), // simulate res.send 
    };
  });

  it("should return store list on success", async () => {
    const mockData = ""; // simulate returned data 
    query.mockResolvedValue(mockData); //  mock the query function to return mock data 

    await getStoreList(req, res); // call the function

    expect(query).toHaveBeenCalledWith(queryList.GET_STORE_LIST_QUERY); // check query sql 
    expect(res.status).toHaveBeenCalledWith(200); // check query response 
    expect(res.send).toHaveBeenCalledWith(mockData.rows); // check the correct data is send in the response 
  });

  it("should handle errors", async () => {
    const mockError = new Error("Database error");
    query.mockRejectedValue(mockError);

    await getStoreList(req, res);

    expect(query).toHaveBeenCalledWith(queryList.GET_STORE_LIST_QUERY);
    expect(res.send).toHaveBeenCalledWith({
      msg: "Error happend while retriveing stores",
      error: mockError,
    });
  });
});
