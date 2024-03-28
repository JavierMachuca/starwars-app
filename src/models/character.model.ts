class CharacterModel {
    name: string;
    height: number;
    mass: string;
    hairColor: string;
    skinColor: string;
    eyeColor: string;
    birthYear: string;
    gender: string;

    constructor(data: any) {
        console.log("CharacterModel",data);
        this.name = data.name ?? '';
        this.height = data.height ?? '';
        this.mass = data.mass ?? '';
        this.hairColor = data.hair_color ?? '';
        this.skinColor = data.skin_color ?? '';
        this.eyeColor = data.eye_color ?? '';
        this.birthYear = data.birth_year ?? '';
        this.gender = data.gender ?? '';
    }
}

export default CharacterModel;