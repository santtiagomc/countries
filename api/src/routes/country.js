const { Router } = require("express");
const { Country, Activity } = require("../db");
const { Op } = require("sequelize");


const router = Router();

router.get('/', async (req, res) => {
    const allCountries = await Country.findAll({ include: Activity })
  
    if (req.query.name) {
      let { name } = req.query
      //name = name[0].toUpperCase() + name.slice(1).toLowerCase()
  
      const found = await Country.findAll({
        where: { name: { [Op.iLike]: `%${name}%` } },
      })
   
      return res.json(found)
    }
  
    res.json(allCountries)
  })
  
  router.get('/:id', async (req, res) => {
    const countryById = await Country.findByPk(req.params.id.toUpperCase(), {
      include: Activity,
    })
    if (!countryById) {
      return res.status(404).send('Error: country not found')
    }
    console.log(countryById)
    return res.json(countryById)
  })




/* router.get("/", async (req, res) => {
    try {
        const allCountries = await Country.findAll({ include: Activity })

        const {name} = req.query;
        let totalCitys = await addCountriesDB();

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
        const totalCitys = await addCountriesDB()
        if(id) {
            let cityId = await totalCitys.filter ( el => el.id.toLowerCase() == id.toLowerCase());
            cityId.length ? 
            res.status(200).json(cityId) :
            req.status(404).send(`error: ${id} invalido`)
        }
    } catch (error) {
        console.log(error)
        res.status(202).send("error: id invalido")
    }
}) */






module.exports = router;