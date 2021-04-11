import { UrlGetLocationInfo, getInfo } from '../constants/common';

const getData = async (url: string) => {
    return fetch(url).then(res =>{
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    });
}

const getLocationInfo = async (location: any) => {
    const locInfo: any = getInfo(location);
    return getData(`${UrlGetLocationInfo}${locInfo.geo}`);
}

export const getForecastData = async(location: string) => {
    const response = await getLocationInfo(location);
    const forecastUrl = response.properties.forecastHourly;
    return getData(forecastUrl);
}
