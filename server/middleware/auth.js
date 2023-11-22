import jwt from "jsonwebtoken";


// verify token
// jwt.verify(token, secretOrPublicKey, [options, callback])
// secretOrPublicKey can be a string, buffer, or object
// next is a callback function to call next middleware
// if token is valid, req.user is assigned the decoded value of the jwt
export const verifyToken = async (req, res, next) => {
  try {

    let token = req.header("Authorization");

    if (!token) {
      return res.status(403).send("Access Denied");
    }

    if (token.startsWith("Bearer ")) {
      token = token.slice(7, token.length).trimLeft();
    }
    // to verify if the token is valid
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    // call the next middleware
    next();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
