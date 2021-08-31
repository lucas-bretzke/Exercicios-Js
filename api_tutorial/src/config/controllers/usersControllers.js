const { User } = require("../../db/models");

async function getAllUsers(req, res, next) {
    try {
        const users = await User.findAll();

        res.json(users);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server error" });
    }
}

async function getUserById(req, res, next) {
    const userId = req.params.id;
    try {
        const user = await User.findOne({

            where: { id: userId }
        });

        if (!user) {
            res.status(404).json({ message: "User not found!" });
        }

        res.json(user);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server error" });
    }
}


async function createUser(req, res, next) {
    const { name, email, password } = req.body;

    // Verificando se o e-mail já está cadastrado no BD
    try {
        const [user, created] = await User.findOrCreate({
            where: { email },
            defaults: {
                name,
                password
            }
        });

        if (!created) {
            return res.status(409).json({ message: "User already exists" });
        }

        res.status(201).json(user);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server error" });
    }
}


async function updateUser(req, res, next) {
    const { name } = req.body;
    const userId = req.params.id;
    try {
        const user = await User.findOne({
            where
                : { id: userId }
        });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        user.name = name;
        await user.save();

        res.json(user);

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server error" });
    }
}

async function deleteUser(req, res, next) {
    // Obter o id dos parametros
    const userId = req.params.id;
    try {
        // Verificar se o usuario com aquele id existe
        const user = await User.findOne({
            where: { id: userId }
        });

        if (user < 0) {
            return res.status(404).json({ message: "User not found" });
        }

        // Remover o usuario do bd ()
        await user.destroy();

        res.status(204).end();

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server error" });
    }
}
async function createPost(req, res, next) {
    const userId = req.params.id;
    const { title, content } = req.body;
    try {

    } catch (errpr) {
        console.log(err);
        res.status(500).json({ message: "Server error" });
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};