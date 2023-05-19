const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {

    try {
        const token = req.header("Authorization")?.replace("Bearer ", "");
        if (!token) {
            return res.status(401).json("Access denied");
        } else {
            const secret = "cat";
            const decoded = jwt.verify(token, secret);
            req.user = decoded
            next()
        }
    }
    catch (error) {
        res.status(400).json("Access denied");
    }
}