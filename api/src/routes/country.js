const { Router } = require("express");
const { Country } = require("../db");
const router = Router();
const { getAllCountrys } = require("./auxiliars");

router.get("/", async(req, res) => {
    try {
        const {name} = req.query;
        let totalCitys = await getAllCountrys();

        if (name) {
            let cityName = await totalCitys.filter( el => 
                el.name.toUpperCase().includes(name.toUpperCase()))
                cityName.length ?
                res.status(200).send(cityName) : 
                res.status(404).send(`error ${name}, invalido`)
        } else {
            res.status(200).json(totalCitys ? totalCitys : `Ningun ${name}, encontrado`)
        }
    } catch (error) {
        console.log(error)
    }
})

router.get("/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const totalCitys = await getAllCountrys()
        if(id) {
            let cityId = await totalCitys.filter ( el => el.id == id);
            cityId.length ? 
            res.status(200).json(cityId) :
            req.status(404).send(`error: ${id} invalido`)
        }
    } catch (error) {
        console.log(error)
        res.status(202).send(`error: ${id} invalido`)
    }
})

router.post("/", async (req, res) => {
    let {
        name,
        difficulty,
        time,
        season,
        country,
        createdInDataBase
    } = req.body
    try {
        let newActivity = await Country.create ({
            name,
            difficulty,
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