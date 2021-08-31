const express = require("express");
const router = express.Router();
const multer = require("multer")
const multerConfig = require ("../config/multer");

// Importando o controller
const usersControllers = require("../controllers/usersControllers");

// Obter todos os usuários
router.get("/", usersControllers.getAllUsers);

// Obter um usuário em específico
router.get("/:id", usersControllers.getUserById);

// Criar um usuário
router.post("/:id/posts", usersControllers.createUser);

// Atualizar as informações de um usuário
router.put("/:id", usersControllers.updateUser);
http://localhost:3000/users/

// Remover um usuário
router.delete("/:id", usersControllers.deleteUser);

router.post("/:id/posts", multer(multerConfig).single("image"), usersControllers.createPost);

module.exports = router;