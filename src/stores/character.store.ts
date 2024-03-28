import {create} from 'zustand';
import CharacterModel from '../models/character.model';

type CharactersStore = {
    characters: CharacterModel[];
    isLoading: boolean;
    addCharacters: (newCharacters: CharacterModel[]) => void;
    setLoading: (loading: boolean) => void;
};

const useCharacterStore = create<CharactersStore>((set) => ({
    characters: [],
    isLoading: false,
    addCharacters: (newCharacters: CharacterModel[]) => set((state) => ({characters: newCharacters})),
    setLoading: (loading: boolean) => set({isLoading: loading})
}));

export default useCharacterStore;