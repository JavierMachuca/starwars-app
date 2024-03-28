import CharacterModel from '../models/character.model';

interface ICharacterCardProps {
    character: CharacterModel
}

const CharacterCardComponent = ({character}: ICharacterCardProps) => {
    return (
        <div className="bg-gray-900 rounded-xl shadow-md px-8 py-6 w-1/5">
            <p className="text-indigo-500 text-xl font-bold mb-2">{character?.name}</p>
            <p className={'text-white'}><span className="font-semibold text-indigo-500">Genero:</span> {character?.gender}</p>
            <p className={'text-white'}><span className="font-semibold text-indigo-500">Color de Pelo:</span> {character?.hairColor}</p>
            <p className={'text-white'}><span className="font-semibold text-indigo-500">Color de Ojos:</span> {character?.eyeColor}</p>
            <p className={'text-white'}><span className="font-semibold text-indigo-500">Altura:</span> {character?.height}</p>
            <p className={'text-white'}><span className="font-semibold text-indigo-500">Peso:</span> {character?.mass} kg</p>
        </div>
    )
}

export default CharacterCardComponent;