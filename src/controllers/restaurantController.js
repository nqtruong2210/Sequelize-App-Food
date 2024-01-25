import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";

const connecting = initModels(sequelize);

const getListLikeBasedOnResID = async (request, response) => {
  try {
    const { res_id } = request.params;
    const data = await connecting.like_res.findAll({
      include: ["res", "user"],
      where: { res_id },
    });
    response.status(200).send(data);
  } catch (error) {
    response.status(500).send(`Internal Server Error: ${error.message}`);
  }
};

const getListRateBasedOnResID = async (request, response) => {
  const { res_id } = request.params;
  try {
    const data = await connecting.rate_res.findAll({
      include: ["res", "user"],
      where: { res_id },
    });
    response.status(200).send(data);
  } catch (error) {
    response.status(500).send(`Internal Server Error: ${error.message}`);
  }
};

export { getListLikeBasedOnResID, getListRateBasedOnResID };
