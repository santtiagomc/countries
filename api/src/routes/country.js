const { Router } = require("express");
const { getCountriesInfo } = require('./auxiliars')


const router = Router();

router.get('/', async (req,res) => {
    try{
    const name = req.query.name
    const dbInfo = await getCountriesInfo();
    let infoRutaPrincipal = dbInfo.map(el => {
        return {
            id: el.id,
            name: el.name,
            flags: el.flags,
            continents: el.continents,
            population: el.population,
            activities: el.activities
        }
    })
    if(name){
        let countryName = await infoRutaPrincipal.filter(el => el.name.toLowerCase().includes(name.toLowerCase())) 
        countryName.length? 
        res.send(countryName):
        res.status(404).send("This Country doesn't exist")
    }else{
        res.status(202).json(infoRutaPrincipal ? infoRutaPrincipal : `No ${name}, encontrado`)
    }
}
catch(error){
    res.status(202).send("error: id invalido")
    console.log("COUNTRIES", error)
}
});

router.get("/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const totalCitys = await getCountriesInfo()
        if(id) {
            let cityId = await totalCitys.filter ( el => el.id.toLowerCase() == id.toLowerCase());
            cityId.length ? 
            res.status(200).json(cityId) :
            res.status(404).send(`error: ${id} invalido`)
        }
    } catch (error) {
        console.log(error)
        res.status(202).send("error: id invalido")
    }
})

module.exports = router;