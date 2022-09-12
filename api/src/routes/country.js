const { Router } = require("express");
const { Country, Activity } = require("../db");
const { getAllCountrys } = require("./auxiliars");

const router = Router();

router.get("/", async (req, res) => {
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
            res.status(200).send(totalCitys ? totalCitys : `Ningun ${name}, encontrado`)
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

router.get ("/all", async (req, res) => {
    try {
        let countries = await Country.findAll  ({
            include: {model: Activity},
        });
        return res.json (countries);
    } catch (error) {
        res.status(505).send(error);
    }
})



module.exports = router;