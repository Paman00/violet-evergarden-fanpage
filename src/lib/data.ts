import type Data from './dataTypes';
import type {
    Character,
    Series,
    CastVoice,
} from './dataTypes';
import { Language } from './dataTypes';

import violetImg from '@/images/VioletCharacter.jpg';
import claudiaImg from '@/images/ClaudiaCharacter.jpg';
import gilbertImg from '@/images/GilbertCharacter.jpg';
import cattleyaImg from '@/images/CattleyaCharacter.jpg';
import benedictImg from '@/images/BenedictCharacter.jpg';
import ericaImg from '@/images/EricaCharacter.jpg';
import irisImg from '@/images/IrisCharacter.jpg';

import lightNovelImg from '@/images/violet-evergarden-volume1.jpg';
import serieImg from '@/images/violet-evergarden-serie.jpg';
import movieMemoriesImg from '@/images/violet-evergarden-movie-memories.jpg';
import movieTheMovieImg from '@/images/violet-evergarden-themovie.jpg';

export const data: Data = {
    series: [
        {
            id: '1',
            name: 'Violet Evergarden',
            type: 'Novelas ligeras',
            dateArrival: new Date(2015, 12, 25),
            website: 'https://www.kyotoanimation.co.jp/books/violet/',
            imgPage: lightNovelImg.src
        },
        {
            id: '2',
            name: 'Violet Evergarden',
            type: 'Anime',
            dateArrival: new Date(2018, 1, 11),
            website: 'https://tv.violet-evergarden.jp/',
            imgPage: serieImg.src
        },
        {
            id: '3',
            name: 'Violet Evergarden: La eternidad y la Auto Memory Doll',
            type: 'Película',
            dateArrival: new Date(2019, 9, 6),
            website: 'https://violet-evergarden.jp/sidestory/',
            imgPage: movieMemoriesImg.src
        },
        {
            id: '4',
            name: 'Violet Evergarden: La Película',
            type: 'Película',
            dateArrival: new Date(2020, 9, 18),
            website: 'https://violet-evergarden.jp/',
            imgPage: movieTheMovieImg.src
        },
    ],
    characters: [
        {
            id: '1',
            name: 'Violet Evergarden',
            japaneseName: 'ヴァイオレット・エヴァーガーデン',
            img: violetImg.src,
            description: [
                'Participó en la Gran Guerra como soldado cuando era muy joven.',
                'Como solo sabía luchar, aún no sabe comprender los sentimientos de otras personas ni expresar los suyos propios.',
                'No entendía el significado de "ciertas palabras" que le decía su superior, Gilbert, en el campo de batalla, pero cuando encontró un trabajo como Auto Memory Doll, empieza a buscarle el significado a esas palabras.',
            ],
            height: 168,
            cast: {
                [Language.Japanese]: {
                    id: '1',
                    name: 'Yui Ishikawa',
                    link: 'https://www.behindthevoiceactors.com/Yui-Ishikawa/',
                },
                [Language.English]: {
                    id: '2',
                    name: 'Erika Harlacher',
                    link: 'https://www.behindthevoiceactors.com/Erika-Harlacher/',
                },
            },
            seriesId: ['1', '2', '3', '4'],
        },
        {
            id: '2',
            name: 'Gilbert Bougainvillea',
            japaneseName: 'ギルベルト・ブーゲンビリア',
            img: gilbertImg.src,
            description: [
                'Nació en una familia aristocrática que ha existido durante generaciones y se convirtió en mayor del ejército.',
                'Durante la guerra, conoció a la joven Violet y juntos lucharon contra el Ejército Imperial.',
                'Para Violet era más importante que cualquier otra cosa.',
            ],
            height: 185,
            cast: {
                [Language.Japanese]: {
                    id: '3',
                    name: 'Daisuke Namikawa',
                    link: 'https://www.behindthevoiceactors.com/Daisuke-Namikawa/',
                },
                [Language.English]: {
                    id: '4',
                    name: 'Tony Azzolino',
                    link: 'https://www.behindthevoiceactors.com/Tony-Azzolino/',
                },
            },
            seriesId: ['1', '2', '4'],
        },
        {
            id: '3',
            name: 'Claudia Hodings',
            japaneseName: 'クラウディア・ホッディングス',
            img: claudiaImg.src,
            description: [
                'Un amigo intimo de Gilbert de la academia militar.',
                'Fue teniente coronel en el ejército, pero lo abandono después de la guerra para fundar la Compañía Postal CH.',
                'Cuida de Violet a petición de Gilbert.',
                'También se está convirtiendo en un comerciante de talento gracias a su personalidad afable.',
            ],
            height: 192,
            cast: {
                [Language.Japanese]: {
                    id: '5',
                    name: 'Takehito Koyasu',
                    link: 'https://www.behindthevoiceactors.com/Takehito-Koyasu/',
                },
                [Language.English]: {
                    id: '6',
                    name: 'Kyle McCarley',
                    link: 'https://www.behindthevoiceactors.com/Kyle-McCarley/',
                },
            },
            seriesId: ['1', '2', '3', '4'],
        },
        {
            id: '4',
            name: 'Cattleya Baudelaire',
            japaneseName: 'カトレア・ボードレール',
            img: cattleyaImg.src,
            height: 167,
            description: [
                'Una de las empleadas que trabaja como Auto Memory Doll en la Compañía Postal CH.',
                'Tiene fama de ser capaz de expresar con palabras los delicados sentimientos que sus clientes no pueden expresar con palabras, y a menudo es designada para realizar encargos.',
                'Tiene una personalidad libre y generosa y, como empleada superior, organiza a Violet y a los demás empleados subalternos.',
            ],
            cast: {
                [Language.Japanese]: {
                    id: '7',
                    name: 'Aya Endo',
                    link: 'https://www.behindthevoiceactors.com/Aya-Endo/',
                },
                [Language.English]: {
                    id: '8',
                    name: 'Reba Buhr',
                    link: 'https://www.behindthevoiceactors.com/Reba-Buhr/',
                },
            },
            seriesId: ['1', '2', '3', '4'],
        },
        {
            id: '5',
            name: 'Benedict Blue',
            japaneseName: 'ベネディクト・ブルー',
            img: benedictImg.src,
            height: 172,
            description: [
                'Viejo conocido de Hodgins, es uno de los empleados que trabaja como repartidor (cartero) en la Compañía Postal CH.',
                'Es exigente con la ropa que usa, y viste ropa de civil en lugar del uniforme de repartidor.',
            ],
            cast: {
                [Language.Japanese]: {
                    id: '9',
                    name: 'Koki Uchiyama',
                    link: 'https://www.behindthevoiceactors.com/Koki-Uchiyama/',
                },
                [Language.English]: {
                    id: '10',
                    name: 'Ben Pronsky',
                    link: 'https://www.behindthevoiceactors.com/Ben-Pronsky/',
                },
            },
            seriesId: ['1', '2', '3', '4'],
        },
        {
            id: '6',
            name: 'Erica Brown',
            japaneseName: 'エリカ・ブラウン',
            img: ericaImg.src,
            description: [
                'Una de los empleadas que trabaja como Auto Memory Doll en la Compañía Postal CH.',
                'Aunque es mayor a Iris, su compañera, tiene problemas para comunicarse con los clientes y le falta confianza en su trabajo.',
            ],
            height: 155,
            cast: {
                [Language.Japanese]: {
                    id: '11',
                    name: 'Minori Chihara',
                    link: 'https://www.behindthevoiceactors.com/Minori-Chihara/',
                },
                [Language.English]: {
                    id: '12',
                    name: 'Christine Marie Cabanos',
                    link: 'https://www.behindthevoiceactors.com/Christine-Marie-Cabanos/',
                },
            },
            seriesId: ['2', '3', '4'],
        },
        {
            id: '7',
            name: 'Iris Cannary',
            japaneseName: 'アイリス・カナリー',
            img: irisImg.src,
            height: 160,
            description: [
                'Una de las nuevas contratadas que trabaja como Auto Memory Doll en la Compañía Postal CH.',
                'Ha venido del campo para trabajar como redactora.',
                'Admira a las mujeres trabajadoras y está decidida a hacerse un nombre en el trabajo lo antes posible.',
            ],
            cast: {
                [Language.Japanese]: {
                    id: '13',
                    name: 'Haruka Tomatsu',
                    link: 'https://www.behindthevoiceactors.com/Haruka-Tomatsu/',
                },

                [Language.English]: {
                    id: '14',
                    name: 'Cherami Leigh',
                    link: 'https://www.behindthevoiceactors.com/Cherami-Leigh/',
                },
            },
            seriesId: ['2', '3', '4'],
        },
    ],
};

export const series: Series[] = data.series;

export const characters: Character[] = data.characters;

export const castVoice = (() => {
    const tempArray: CastVoice[] = [];
    characters.forEach(character => {
        for (const lang of Object.values(Language)) {
            let tempObject: CastVoice;
            if (character.cast.hasOwnProperty(lang)) {
                tempObject = {
                    ...character.cast[lang as Language],
                    language: lang as Language,
                };
            } else {
                tempObject = {
                    name: 'No registrado',
                    language: lang as Language,
                };
            }
            tempArray.push(tempObject);
        }
    });
    return tempArray;
})();

export const languages: Language[] = (() => {
    return Array.from(new Set(castVoice.map(cast => cast.language)));
})();

export default data;
