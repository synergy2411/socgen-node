// Bearer <token>

// express middleware
const ensureToken = (req, res, next) => {
    const bearerToken = req.headers["authorization"];
    if(bearerToken){
        const tokenArray = bearerToken.split(" ");
        req.token = tokenArray[1];
        next();
    }else{
        return res.send({err : "Token not found"})
    }
    
}

module.exports = ensureToken;