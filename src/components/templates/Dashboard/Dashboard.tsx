import React, {useContext, useEffect, useState} from 'react'
import {
    AddCityButton,
    AddCityInput,
    AddCityWrapper,
    ButtonWrapper,
    CancelCityButton,
    DashboardStyled
} from './Dashboard.styles'
import CityButton from "../../molecules/CityButton/CityButton";
import {CitiesContexts, WeatherContext} from "../../../pages/contexts/contexts";
import {getCityData} from "../../../services/collectData";

export interface DashboardProps {
    data: any
}

const Dashboard: React.FunctionComponent<DashboardProps> = ({
                                                                data
}) => {
    const {cities, setCities} = useContext(CitiesContexts);
    const {weatherData, setWeatherData} = useContext(WeatherContext);
    const [showCitiInput, setShowCityInput] = useState(false);
    const [inputValue, setInputValue] = useState();
    const [addCityVisible, setAddCityVisible] = useState(true);

    useEffect(() => {
        if(cities.length > 2) {
            setAddCityVisible(false)
        }
    }, [cities])

    const cityButtons = data.map((value, id) => {
            const {main: {temp}, weather: {icon}, city} = value
            return  <CityButton key={id} city={city} icon={icon} temperature={temp} />
        })

    const handleChange = (e) => {
        console.log('e.target.value', e.target.value)
        setInputValue(e.target.value)
    }
    const toggleAddCity = () => {
        setShowCityInput(!showCitiInput)
    }

    const addCity = async () => {
        console.log('inputValue', inputValue)
        if(inputValue === undefined || inputValue.length === 0 ) {
            alert('Please fill the input with city Name')
            return
        }
        if(inputValue.length > 0 ) {
            const res = await getCityData([inputValue])
            if(res[0].status !== 200 ){
                setWeatherData([...weatherData, res[0]])
                setCities([...cities, inputValue])
                setAddCityVisible(false)
                setShowCityInput(!showCitiInput)
                return
            }
            alert(res[0].statusText)
        }

    }


    return (
        <DashboardStyled>
            {!showCitiInput && addCityVisible && <AddCityButton onClick={toggleAddCity}>add City</AddCityButton>}
            {showCitiInput && <AddCityWrapper>
                <AddCityInput onChange={handleChange}/>
                <ButtonWrapper >
                <AddCityButton onClick={addCity}>Add</AddCityButton>
                <CancelCityButton onClick={toggleAddCity}>Cancel</CancelCityButton>
                </ButtonWrapper>
            </AddCityWrapper> }
            {cityButtons}
        </DashboardStyled>
    )
}

export default Dashboard