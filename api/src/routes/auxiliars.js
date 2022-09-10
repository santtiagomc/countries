const axios = require ("axios");
const { Country, Activity } = require ("../db")


const getApiInfo = async () => {
    const apiUrl = await axios('https://restcountries.com/v3/all')
    const apiInfo = await apiUrl.data.map(el => {
        return {
            id: el.id,
            name: el.name,
            flag: el.flag,
            continent: el.continent,
            capital: el.capital,
            subregion: el.subregion,
            area: el.area,
            population: el.population
        }
    })
    return apiInfo;
}

const getDbInfo = async () => {
    return await Country.findAll ({
        include: {
            model: Activity,
            attributes: ["name", "difficult", "duration", "season"],
            through: {
                attributes: []
            }
        }
    })
}

const getAllCountrys = async () => {
    const apiInfo = await getApiInfo();
    const dbInfo = await getDbInfo();
    const infoTotal = apiInfo.concat(dbInfo);
    return infoTotal
};

module.exports = { getAllCountrys }