import {optimizeCityData} from "../helpers/data";

const apiUrl = (city: string) => {
    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=780423a3e416dc721fe457797ec5a832&units=metric`
}

export const getCityData = async (citiesArr: string[]) => {
    try {
        return await Promise.all(citiesArr.map(async (city, id) => {
            console.log(city)
            const res = await fetch(apiUrl(city))
            if(res.status === 200) {
                console.log('res', res)
                const data = await res.json()
                console.log('data', data)
                return optimizeCityData(data)
            }

            return res
        }))
    } catch (err) {
        console.error("getCityData: An error occurred:", err);
        return
    }
}
