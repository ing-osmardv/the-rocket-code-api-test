const { createUserInputMapper } = require('../mappers/users.mappers');
const { createUserHelper } = require('../helpers/users.helpers');

const createUserController = async (req, res) => {
    const input = createUserInputMapper(req.body);
    const result = await createUserHelper(input);
    return res.status(200).send(result);
}

module.exports = {
    createUserController
}