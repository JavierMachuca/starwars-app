import CharacterModel from '../models/character.model';

interface ICharacterCardProps {
    character: CharacterModel
}

const CharacterCardComponent = ({character}: ICharacterCardProps) => {
    return (
        <div className="bg-white shadow-md rounded px-8 py-6 w-1/5">
            <p className="text-xl font-bold mb-2">{character?.name}</p>
            <p><span className="font-semibold">Gender:</span> {character?.gender}</p>
            <p><span className="font-semibold">Hair Color:</span> {character?.hairColor}</p>
            <p><span className="font-semibold">Eyes Color:</span> {character?.eyeColor}</p>
            <p><span className="font-semibold">Height:</span> {character?.height}</p>
            <p><span className="font-semibold">Height:</span> {character?.mass}</p>
        </div>
    )
}

export default CharacterCardComponent;