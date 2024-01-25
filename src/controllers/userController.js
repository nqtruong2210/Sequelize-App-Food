import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";

const connecting = initModels(sequelize);

// Lấy danh sách like_res theo restaurant và users
const getListLikeBasedOnUserID = async (request, response) => {
  try {
    const { user_id } = request.params;
    const data = await connecting.like_res.findAll({
      include: ["res", "user"],
      where: { user_id },
    });
    response.status(200).send(data);
  } catch (error) {
    response.status(500).send(`Internal Server Error: ${error.message}`);
  }
};

// Lấy danh sách rate_res theo restaurant và users
const getListRateBasedOnUserID = async (request, response) => {
  const { user_id } = request.params;
  try {
    const data = await connecting.rate_res.findAll({
      include: ["res", "user"],
      where: { user_id },
    });
    response.status(200).send(data);
  } catch (error) {
    response.status(500).send(`Internal Server Error: ${error.message}`);
  }
};

// Thêm like
const postLike = async (request, response) => {
  const { user_id, res_id } = request.body;
  try {
    const data = await connecting.like_res.create({ user_id, res_id });
    response.status(200).send(data);
  } catch (error) {
    response.status(500).send(`Internal Server Error: ${error.message}`);
  }
};

// Unlike
const deleteLike = async (request, response) => {
  const { user_id, res_id } = request.params;
  try {
    const data = await connecting.like_res.destroy({
      where: { user_id, res_id },
    });

    // Nếu có data bị xoá
    if (data > 0) {
      response.send("Unlike restaurant successful !!!");
    }
    // Nếu chưa có data bị xoá
    else {
      response.status(404).send("No matching like found for deletion.");
    }
  } catch (error) {
    response.status(500).send(`Internal Server Error: ${error.message}`);
  }
};

// Post Orders
const postOrder = async (request, response) => {
  const { user_id, food_id, amount, code, arr_sub_id } = request.body;
  try {
    const data = await connecting.orders.create({
      user_id,
      food_id,
      amount,
      code,
      arr_sub_id,
    });
    response.status(200).send(data);
  } catch (error) {
    response.status(500).send(`Internal Server Error: ${error.message}`);
  }
};

// Post Rate
const postRate = async (request, response) => {
  const { user_id, res_id, amount, date_res } = request.body;
  try {
    const data = await connecting.rate_res.create({
      user_id,
      res_id,
      amount,
      date_res,
    });
    response.status(200).send(data);
  } catch (error) {
    response.status(500).send(`Internal Server Error: ${error.message}`);
  }
};
export {
  getListLikeBasedOnUserID,
  getListRateBasedOnUserID,
  postLike,
  deleteLike,
  postOrder,
  postRate,
};
