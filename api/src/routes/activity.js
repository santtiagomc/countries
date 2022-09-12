const { Router } = require ("express");
const { Country, Activity } = require("../db")
const router = Router();


router.post("/country", async (req, res) => {
    let {
        name,
        difficulty,
        duration,
        season,
        country,
        createdInDataBase
    } = req.body
    try {
        let newActivity = await Activity.create ({
            name,
            difficulty,
            duration,
            time,
            season,
            createdInDataBase
        })
        let activityCountry = await Country.findAll( {
            where: {name: country}
        })

        newActivity.addCountry(activityCountry)
        res.send('Actividad creada con exito!')
    } catch (error) {
        res.status(500).send("error: post failed")
    }
})

module.exports = router;