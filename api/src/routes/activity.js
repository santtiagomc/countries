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


 let postActivity = async (name, difficulty, duration, season, country) => {
    try{    
        let countriesFind = await Country.findAll({where: {name: country}});
        if(!countriesFind.length) return "no country";
        let newAct = await Activity.create({ name, difficulty, duration, season });
        return await newAct.addCountry(countriesFind);
    }catch(e){
        console.log(e)
    }
    }
    

 router.post("/",async (req,res,next)=>{
    let { name, difficulty, duration, season, country} = req.body;
        if(!name || !difficulty || !duration || !season || !country){
            res.status(500).send("data missing");
        }
        try{
            let act = await postActivity(name, difficulty, duration, season, country);
            res.status(200).json(act)
        }catch(e){  
            next(e)
        }
    })

router.delete('/:id', async (req, res) => {
    try {
        let {id} = req.params;
        res.json(await Activity.destroy({
            where: {id}
        })
        );
    }catch (error){
        res.send("borrado fallido")
    }
})

module.exports = router;