const query = require("../db/connection");
const queryList = require("../db/queries");
const Logger = require("../services/logger.service");


const logger = new Logger("store.controller")
const getStoreList = async (req, res) => {
  try {
    const values = await query(queryList.GET_STORE_LIST_QUERY); // here will return full expalintaion of query and data to get data u need use 'rows' after promise resolved
    logger.info("retun all sotres",values.rows)
    return res.status(200).send(values.rows);
  } catch (error) {
    res.send({ msg: "Error happend while retriveing stores", error });
  }
};

const getSingleStore = async (req, res) => {
  const store_id = req.params.id;
  try {
    const data = await query(queryList.GET_SIGNLE_STORE, [store_id]);
    if(!data.rows[0]) return res.send({msg:"store not found"})
    return res.status(200).send({ ...data.rows[0] });
  } catch (error) {
    res.status(500).send({ msg: "erro happedn while creating store", error });
  }
};
const createStore = async (req, res) => {
  const { store_name, store_address, store_code, createdBy } = req.body;
  if (!store_address || !store_code || !store_name || !createdBy) {
    return res.status(403).send({ msg: "validation error" });
  }
  try {
    await query(queryList.CREATE_STORE_QUERY, [
      store_name,
      store_address,
      store_code,
      createdBy,
    ]);
    res.status(200).send({ msg: "Store Created Successfully" });
  } catch (error) {
    res.status(500).send({ msg: "erro happedn while creating store", error });
  }
};

const updateStore = async (req, res) => {
  const store_id = req.params.id;
  // get current data
  query(queryList.GET_SIGNLE_STORE, [store_id]).then(async (curData) => {
    const data = {
      store_name: req.body.store_name || curData.rows[0].store_name,
      store_address: req.body.store_address || curData.rows[0].store_address,
      store_code: req.body.store_code || curData.rows[0].store_code,
      createdBy: req.body.createdBy || curData.rows[0].created_by,
    };

    // update only data that user want

    try {
      await query(queryList.UPDATE_STORE_QUERY, [
        data.store_name,
        data.store_address,
        data.store_code,
        data.createdBy,
        store_id,
      ]);
      res.status(200).send({ msg: "Store Updated Successfully Successfully" });
    } catch (error) {
      res.status(500).send({ msg: "erro happedn while updating store", error });
    }
  });
};

const deleteStore = async (req, res) => {
  const store_id = req.params.id;
  try {
    await query(queryList.DELETE_STORE_QUERY, [store_id]);
    res.status(200).send({ msg: "Store deleted Successfully" });
  } catch (error) {
    res.status(500).send({ msg: "erro happend while deleteing store", error });
  }
};
module.exports = {
  getStoreList,
  createStore,
  updateStore,
  deleteStore,
  getSingleStore,
};
