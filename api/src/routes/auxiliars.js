const axios = require ("axios");
const { Country, Activity } = require ("../db")


const addCountriesDB = async () => {
  const { data } = await axios.get("https://restcountries.com/v3/all");

  let countries = data.map((country) => ({
    id: country.cca3,
    name: country.name.common,
    flag: country.flags[1],
    continent: country.region,
    capital: country.capital?.map((e) => e) || ["No tiene capital"],
    subregion: country.subregion,
    area: country.area,
    population: country.population,
  }));

  countries = Array.from(new Set(countries));//.sort();//array limpio usando set
  console.log(countries);
  const countriesDB = await Country.bulkCreate(countries);
  return countriesDB;
};


/* const getDbInfo = async () => {
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
}; */
// console.log(getAllCountrys(apiInfo))

module.exports = { addCountriesDB }