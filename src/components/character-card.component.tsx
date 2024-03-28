import CharacterModel from '../models/character.model';

interface ICharacterCardProps {
    character: CharacterModel
}

const CharacterCardComponent = ({character}: ICharacterCardProps) => {
    return (
        <div className="bg-gray-900 rounded-xl shadow-md px-8 py-6 md:w-2/5 lg:w-1/5">
            <p className="text-indigo-500 text-xl font-bold mb-2">{character?.name}</p>
            <p className={'text-white'}><span className="font-semibold text-indigo-500 mr-1">Genero:</span> {character?.gender}</p>
            <p className={'text-white'}><span className="font-semibold text-indigo-500 mr-1">Color de Pelo:</span> {character?.hairColor}</p>
            <p className={'text-white'}><span className="font-semibold text-indigo-500 mr-1">Color de Ojos:</span> {character?.eyeColor}</p>
            <p className={'text-white'}><span className="font-semibold text-indigo-500 mr-1">Altura:</span> {(character?.height) / 100} m</p>
            <p className={'text-white'}><span className="font-semibold text-indigo-500 mr-1">Peso:</span> {character?.mass} kg</p>
            <p className={'text-white'}><span className="font-semibold text-indigo-500 mr-1">Año de Nacimiento:</span> {character?.birthYear}</p>
        </div>
    )
}

export default CharacterCardComponent;