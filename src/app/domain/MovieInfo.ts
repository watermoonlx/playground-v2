export interface MovieInfo {
    rating: {
        max: number,
        average: number,
        stars: number,
        min: number
    },
    genres: string[],
    title: string,
    casts: Person[],
    collect_count: number,
    original_title: string,
    subtype: string,
    directors: Person[],
    year: string,
    images: {
        small: string,
        large: string,
        medium: string
    },
    alt: string,
    id: string
}

export interface Person {
    alt: string,
    avatars: {
        small: string,
        large: string,
        medium: string
    },
    name: string,
    id: string
}
