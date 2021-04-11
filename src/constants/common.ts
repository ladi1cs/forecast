export const UrlGetLocationInfo = "https://api.weather.gov/points/";//following lat and lon

export const Locations = {
    WASHINGTON:"Washington",
    MINNEAPOLIS:"Minneapolis",
    MIAMI: "Miami",
    SEATTLE: "Seattle"
}

export interface ILocationInfo  {
    id: string;
    city: string;
    geo: string;
}

export const LocationInfo : ILocationInfo[] = [
    {id:'WASHINGTON', city:"Washington", geo:'38.8894,-77.0352'},
    {id:'MINNEAPOLIS', city:"Minneapolis", geo:'45.0137,-93.2605'},
    {id:'MIAMI', city:"Miami", geo:'25.7723,-80.1918'},
    {id:'SEATTLE', city:"Seattle", geo: '47.594,-122.0324'}
]

export const getCity = (location: string): string =>{ 
    const info = getInfo(location);
    return info ?  info.city : '';
}

export const getInfo = (location: string): any =>{ 
    return LocationInfo.find(l => l.id === location);
}
