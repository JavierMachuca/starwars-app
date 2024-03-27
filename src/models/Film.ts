class Film {
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;
    characters: string[];
    planets: string[];
    starships: string[];
    vehicles: string[];
    species: string[];
    created: string;
    edited: string;
    url: string;

    constructor(data: Partial<Film>) {
        this.title = data.title ?? '';
        this.episode_id = data.episode_id ?? 0;
        this.opening_crawl = data.opening_crawl ?? '';
        this.director = data.director ?? '';
        this.producer = data.producer ?? '';
        this.release_date = data.release_date ?? '';
        this.characters = data.characters ?? [];
        this.planets = data.planets ?? [];
        this.starships = data.starships ?? [];
        this.vehicles = data.vehicles ?? [];
        this.species = data.species ?? [];
        this.created = data.created ?? '';
        this.edited = data.edited ?? '';
        this.url = data.url ?? '';
    }
}

export default Film;