//get all dashboard count to show on dashboard page

const getDashboardCount = async (req, res) => {
    try {

        res.status(200).json({
            message: "get dashboard data successful",
        })

    } catch (error) {
        console.log(error)
    }
}


module.exports = { getDashboardCount }
