const { Router } = require ("express");
const { Country, Activity } = require("../db")

const router = Router();

router.get('/', async (req, res, next) => {
    try {
       let allActivities = await Activity.findAll({
          include: [{ model: Country}]
       })
       res.json(allActivities)
    } catch (error) {
       next(err)
    }
 
 });


router.post("/", async (req, res) => {
    let {
        name,
        difficulty,
        duration,
        season,
        countries
    } = req.body
    try {
        let newActivity = await Activity.create ({
            name,
            difficulty,
            duration,
            season
        })
        let activityCountry = await Country.findAll( {
            where: {name: countries}
        })

        newActivity.addCountry(activityCountry)
        res.status(200).send(`La actividad ${name} ha sido creada`)
    } catch (error) {
        res.status(500).send("error: post failed")
    }
})

module.exports = router;