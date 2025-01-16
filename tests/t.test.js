const { getStoreList } = require("../controllers/store.controller")
const query = require("../db/connection")
const queryList = require("../db/queries")

jest.mock("../db/connection")

describe('getStore List Controller', () => { 

    let req,res ;

    beforeEach(()=>{
        req = {}
        res = {
            status : jest.fn().mockReturnThis(),
            send:jest.fn()
        }
    })

    it("should return strore list on success",async()=>{
        const mockedData = ""
        query.mockResolvedValue(mockedData)

        await getStoreList(req,res);

         expect(query).toHaveBeenCalledWith(queryList.GET_STORE_LIST_QUERY)
         expect(res.status).toHaveBeenCalledWith(200)
         expect(res.send).toHaveBeenCalledWith(mockedData.rows)
    })

    it("should handle errors", async () => {
        const mockError =""
        query.mockRejectedValue(mockError);
    
        await getStoreList(req, res);
    
        expect(query).toHaveBeenCalledWith(queryList.GET_STORE_LIST_QUERY);
        expect(res.send).toHaveBeenCalledWith({
          msg: "Error happend while retriveing stores",
          error: mockError,
        });
      });
 })