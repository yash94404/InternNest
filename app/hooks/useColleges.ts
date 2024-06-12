import countries from 'world-countries';
import fetch from 'node-fetch';
//import cities from 'all-the-cities';
const universityNames: any[] = [];
(async () => {
    const response = await fetch(
    'https://parseapi.back4app.com/classes/Usuniversitieslist_University?limit=3000&order=name',
    {
        headers: {
        'X-Parse-Application-Id': 'GC6qtPaVyOjVnA2r5OilFwH0dPkB7kNs0oLG1Fau', // This is your app's application id
        'X-Parse-REST-API-Key': 'kfn2qRaWbsSlTbUpiyHRQOCzVVQi3WHA9OJgqvnU', // This is your app's REST API key
        }
    }
    );
    const data = await response.json(); // Here you have the data that you need
    let counter = 0;
    for (const obj of data.results){
        universityNames.push({
            value: counter,
            label: obj.name
        });
        counter++;
    }
    //console.log(JSON.stringify(data, null, 2));
    console.log(universityNames);
})();
/*
const formattedColleges = [
    {
        value: "1",
        label: "New York",
        latlng: [41, 74],
        region: "USA"
      },
      {
        value: "2",
        label: "Boston",
        latlng: [42, 71],
        region: "USA"
      },
      {
        value: "3",
        label: "San Francisco",
        latlng: [37, 122],
        region: "USA"
      },
      {
        value: "4",
        label: "Chicago",
        latlng: [42, 88],
        region: "USA"
      },
      {
        value: "5",
        label: "Atlanta",
        latlng: [34, 84],
        region: "USA"
      },
      {
        value: "6",
        label: "Palo Alto",
        latlng: [37, 122],
        region: "USA"
      },
      {
        value: "7",
        label: "Raleigh",
        latlng: [36, 79],
        region: "USA"
      },
      {
        value: "13",
        label: "Los Angeles",
        latlng: [34, 118],
        region: "USA"
      },
      {
        value: "8",
        label: "Philadelphia",
        latlng: [40, 75],
        region: "USA"
      },
]
*/
/*const formattedCities = cities.map((city: { cityId: any; name: any; loc: { coordinates: any; }; country: any; }) => ({
  value: city.cityId,
  label: city.name,
  latlng: city.loc.coordinates,
  region: city.country
}));*/
const formattedCountries = countries.map((country) => ({
  value: country.cca2,
  label: country.name.common,
  flag: country.flag,
  latlng: country.latlng,
  region: country.region,
}));

const useColleges = () => {
  const getAll = () => universityNames;

  const getByValue = (value: string) => {
    return universityNames.find((item: { value: string; }) => item.value === value);
  }

  return {
    getAll,
    getByValue
  }
};

export default useColleges;
