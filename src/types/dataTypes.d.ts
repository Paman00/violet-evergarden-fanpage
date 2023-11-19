export interface Series {
    id: string;
    name: string;
    type: string;
    dateArrival: Date;
    website: string;
}

enum Language {
    Japanese = 'japanese',
    English = 'english',
    // Agrega más idiomas si es necesario
}

export interface CastVoice {
    id?: string;
    name?: string;
    language: Language;
    link?: string;
}

export interface Cast extends Omit<CastVoice, 'language'> {}

export interface Character {
    id: string;
    name: string;
    japaneseName: string;
    img: string;
    description: string[];
    height: number; // en cm
    cast: {
        [key in Language]?: Cast;
    };
    seriesId: string[];
}

export default interface Data {
    series: Series[];
    characters: Character[];
}