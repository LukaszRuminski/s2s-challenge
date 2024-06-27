import moment from "moment";

export const optimizeCityData = (data) => {
    console.log('optimizeCityData', data)
    let optimized = {} as any
    optimized.coord = data.coord
    optimized.weather = {description: data.weather[0].main, icon: data.weather[0].icon}
    optimized.main = data.main
    optimized.visibility = data.visibility
    optimized.wind = data.wind
    optimized.clouds = data.clouds
    optimized.forecastDate = moment(data.dt).format("dd MMM Do YYYY kk:mm:ss")
    optimized.sun = {sunrise: moment(data.sys.sunrise*1000).format("kk:mm"), sunset: moment(data.sys.sunset*1000).format("kk:mm")}
    optimized.city = data.name
    console.log('optimized', optimized)
    return optimized
}
console.log(optimizeCityData)