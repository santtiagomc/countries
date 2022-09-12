const axios = require ("axios");
const { Country, Activity } = require ("../db")


const getApiInfo = async () => {
    const apiUrl = await axios('https://restcountries.com/v3/all')
    const apiInfo = await apiUrl.data.map(el => {
        return {
            id: el.cca3,
            name: el.name.common,
            flags: el.flags[1],
            continents: el.continents[0],
            capital: el.capital ? el.capital[0] : 'Capital undefined',
            subregion: el.subregion ? el.subregion : 'Subregion undefined',
            area: el.area,
            population: el.population
        }
    })
    return apiInfo;
}


const getDbInfo = async () => {
  return await Country.findAll({
    include: {
      model: Activity,
      attibutes: ['name'],
      through: {
        attibutes: []
      }
    }
  });
};

const getAllCountrys = async () => {
    const apiInfo = await getApiInfo();
    const dbInfo = await getDbInfo();
    const infoTotal = apiInfo.concat(dbInfo);
    return infoTotal
};
// console.log(getAllCountrys(apiInfo))

module.exports = { getAllCountrys }