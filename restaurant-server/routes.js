/**
 * Created by Vikash1.Kumar on 24-06-2017.
 */
function route (app) {
    app.get("/tableStatus", function (req, res) {
        var response = [
            {
                tableNo :1,
                booked :false,
                noOfSheets : 8
            },
            {
                tableNo :2,
                booked :false,
                noOfSheets : 6
            },
            {
                tableNo :3,
                booked : true,
                noOfSheets : 4
            },
            {
                tableNo :4,
                booked :false,
                noOfSheets : 2
            },
            {
                tableNo :5,
                booked :false,
                noOfSheets : 8
            },
            {
                tableNo :6,
                booked : true,
                noOfSheets : 6
            },
            {
                tableNo :7,
                booked :false,
                noOfSheets : 4
            },
            {
                tableNo :8,
                booked : true,
                noOfSheets : 2
            } ,
            {
                tableNo :9,
                booked :false,
                noOfSheets : 8
            },
            {
                tableNo :10,
                booked :false,
                noOfSheets : 6
            },
            {
                tableNo :11,
                booked :false,
                noOfSheets : 4
            },
            {
                tableNo :12,
                booked :false,
                noOfSheets : 2
            }
        ];

        res.json(response);
    });
}

module.exports = route;