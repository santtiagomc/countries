const axios = require ("axios");
const { Country, Activity } = require ("../db")

const getCountriesInfo = async () => { 
  try{
  const apiUrl = await axios.get('https://restcountries.com/v3/all');
  const countryData = apiUrl.data.map(el => {
      return{
          id: el.cca3,
          name:el.name.common,
          flags:el.flags[1],
          continents: el.continents[0],
          capital: el.capital? el.capital[0]: "This Capital doesn't exist",
          subregion: el.subregion? el.subregion: "This Subregion doesn't exist" ,
          area: el.area,
          population: el.population
      }
  })
  const allcountries = await Country.findAll({
      include: Activity
  });
  if(!allcountries[0]){
  countryData.forEach(el => {
               Country.findOrCreate({
                   where: {
                            id: el.id,
                            name: el.name,
                            flags: el.flags,
                            continents: el.continents,
                            capital: el.capital,
                            subregion: el.subregion,
                            area: el.area,
                            population: el.population
                          }
                    })
          })
      }
      const allcount = await Country.findAll({
          include: Activity
      });
      return allcount
  }
  catch(error){
      console.log("GETAPIINFO", error)
  }
}
module.exports = { getCountriesInfo }