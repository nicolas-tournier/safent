export interface CountrySelect {
    name: string;
    nativeName: string;
    population: number;
    region: string;
    subregion: string;
    capital: string;
    topLevelDomain: string;
    currencies: string[];
    languages: string[];
    borders: { cioc: string, name: string }[];
    alpha3Code: string;
    flag: string;
}