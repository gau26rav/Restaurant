/**
 * Created by Vikash1.Kumar on 24-06-2017.
 */
const express =require("express");
const app =express();
const router =require("./routes.js");

var PORT =process.env.PORT || 3000;
/**
 *
 * @param req
 * @param res
 * @param next
 * @desc To allow the Cross origin it should be set to particular URL later on
 */
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    next();
}
app.use(allowCrossDomain);

router(app);

app.listen(PORT, function () {
  console.log("Express application is listening on", PORT);
});