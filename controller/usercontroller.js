const datalist = require('../jsonData.json')



const getlist = async (req, res) => {
    try {
        // let marks = await datalist.map((val) => {
        //     return val.mark;
        // }).reduce((previousval, currentval) => {
        //     let total = previousval + currentval;
        //     return total
        // })
        let marks = await datalist.reduce((pre, curr) => {
            return pre + curr.mark
        }, 0)
        res.status(200).json({
            status: 200, message: "success", data: {
                totalMarks: marks
            }
        });
    }
    catch (err) {
        res.status(400).json({ status: 400, message: err.message || err });
    }
};

const getAvgGrade = async (req, res) => {
    try {
        let grades = await datalist.filter(function (val) {
            return val.mark < 35


        })
        res.status(200).json({ status: 200, message: "success", average: grades });
    } catch (err) {
        res.status(400).json({ status: 400, message: err.message || err });
    }
};
const getGoodGrade = async (req, res) => {
    try {
        let grades = await datalist.filter(function (val) {
            return val.mark >= 35 && val.mark <= 75;


        })
        res.status(200).json({ status: 200, message: "success", Good: grades });
    } catch (err) {
        res.status(400).json({ status: 400, message: err.message || err });
    }
};
const getExcGrade = async (req, res) => {
    try {
        let grades = await datalist.filter(function (val) {
            return val.mark > 75 && val.mark <= 100;


        })
        res.status(200).json({ status: 200, message: "success", Excellent: grades });
    } catch (err) {
        res.status(400).json({ status: 400, message: err.message || err });
    }
};

const getGrade = async (req, res) => {
    try {
        let avg = await datalist.filter(function (val) {
            return val.mark < 35

        })
        let good = await datalist.filter(function (val) {
            return val.mark >= 35 && val.mark <= 75;


        })
        let exc = await datalist.filter(function (val) {
            return val.mark > 75 && val.mark <= 100;


        })
        // let exc = await datalist.filter( (val) => {
        //  var avg= val.mark < 35  
        // var good =   val.mark >= 35 && val.mark <= 75
        // var excl = val.mark > 75 && val.mark <= 100


        // })
        // res.json(`${exc.avg} ${exc.good} ${exc}`)
        res.status(200).json({ status: 200, message: "success", data: { average: avg, goodDetails: good, Excellent: exc } });
    } catch (err) {
        res.status(400).json({ status: 400, message: err.message || err });
    }
};

const getbyquery = async (req, res) => {
    try {
        // let filtering = req.query.search
        // if (filtering) {

        //     let mydata = datalist.filter(({ first_name, last_name, email}) => email.includes(filtering) || last_name.includes(filtering) || first_name.includes(filtering) )

        //     res.status(200).json({ status: 200, message: "success", data: {
        //     userdetails:mydata
        // } });
        // }

        let find = req.query.search
        // const result = datalist.find({ $or: [{ first_name: find }, { email: find }] })
        const result = datalist.find(data => data.first_name === find || data.last_name === find || data.email === find)
        res.status(200).json({
            status: 200, message: "success", data: {
                userdetails: result
            }
        });
    } catch (err) {
        res.status(400).json({ status: 400, message: err.message || err });
    }
};



const getuser = async (req, res) => {
    try {
        let { search } = req.params

        const single = datalist.find((data) => data.id === Number(search))


        res.status(200).json({ status: 200, message: "success", data: single });

    } catch (error) {
        res.json({ error: error })
    }
}


const getFullName = async (req, res) => {
    try {
        let userdata = await datalist.map((val) => {
            // let obj = {
            // full_name: `${val.first_name} ${val.last_name}`,
            // mark: val.mark + 10

            // }
            return {
                fullName: val.first_name + " " + val.last_name,
                mark: val.mark + 10
            }


            // return obj;

        })

        res.status(200).json({ status: 200, message: "success", data: userdata });
    }
    catch (err) {
        res.status(400).json({ status: 400, message: err.message || err });
    }
};


module.exports = {
    getlist, getAvgGrade, getGoodGrade, getExcGrade, getFullName, getuser, getbyquery, getGrade
}