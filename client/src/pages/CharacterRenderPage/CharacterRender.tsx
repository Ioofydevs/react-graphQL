import { useParams } from 'react-router';
import ErrorComponent from '../../components/ErrorComponent';
import LoadingComponent from '../../components/LoadingComponent';
import { useCharacter } from './CharacterRender.query';

type QueryPageParams = {
  id: string;
};

type Ability = {
  ability: {
    id: number;
    url: String;
    name: String;
  };
};

type Pokemons = {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  abilities: Ability[];
};

const CharacterRender = () => {
  const { id } = useParams<QueryPageParams>();
  const { data, loading, error } = useCharacter(id);

  if (loading) return <LoadingComponent />;

  if (error) return <ErrorComponent />;

  const pokemon: Pokemons = data?.pokemon;

  return (
    <div className='p-5'>
      <p>Pokemon ID: {pokemon?.id}</p>
      <p>Pokemon Name: {pokemon?.name}</p>
      <p>Pokemon Base Experinece: {pokemon?.base_experience}</p>
      <p>Pokemon Height : {pokemon?.height}</p>
      <p>Pokemon Width: {pokemon?.weight}</p>
      {pokemon?.abilities.map(({ ability }) => {
        return <p>{ability.name}</p>;
      })}
    </div>
  );
};

export default CharacterRender;
