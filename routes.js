const { Router } = require("express");
const router = Router();

const username = 'developer21'
const userPass = '123456'
const userId = 'userId123userId'

router.post(
    "/data",
    async (req, res) => {

        try {
            const { id } = req.body

            if (userId !== id) {
                return res.status(200).json({
                    user: {}
                });
            }

            res.json({ user: { id: userId, username } });
        } catch (e) {
            res.status(500).json({ message: "Something wend wrong!" });
        }
    }
);

router.post(
    "/login-user",
    async (req, res) => {

        try {
            const { name, password } = req.body

            if (username !== name) {
                return res.status(400).json({
                    error: 'Такого пользователя не существует'
                });
            }

            if (password !== userPass) {
                return res.status(400).json({
                    error: 'Неправильный пароль'
                });
            }

            res.json({ user: { id: userId, username } });
        } catch (e) {
            res.status(500).json({ message: "Something wend wrong!" });
        }
    }
);

module.exports = router;