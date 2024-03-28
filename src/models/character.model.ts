class CharacterModel {
    name: string;
    height: string;
    mass: string;
    hairColor: string;
    skinColor: string;
    eyeColor: string;
    birthYear: string;
    gender: string;

    constructor(
        data: Partial<CharacterModel>
    ) {
        this.name = data.name ?? '';
        this.height = data.height ?? '';
        this.mass = data.mass ?? '';
        this.hairColor = data.hairColor ?? '';
        this.skinColor = data.skinColor ?? '';
        this.eyeColor = data.eyeColor ?? '';
        this.birthYear = data.birthYear ?? '';
        this.gender = data.gender ?? '';
    }
}

export default CharacterModel;