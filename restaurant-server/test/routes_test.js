/**
 * Created by Vikash1.Kumar on 26-06-2017.
 */
const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();
const server = require("../server.js");

chai.use(chaiHttp);

describe ("ÄPI test",function () {
    it("returns the table status", function (done) {
        chai.request(server).
            get("/tableStatus").
            end(function (err, res) {
                console.log(res,err);
            res.should.have.status(200);
            done();
        });
    });
});