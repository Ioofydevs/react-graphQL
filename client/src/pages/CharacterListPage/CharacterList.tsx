import { Link } from 'react-router-dom';
import ErrorComponent from '../../components/ErrorComponent';
import LoadingComponent from '../../components/LoadingComponent';
import { useCharacters } from './CharacterList.query';

export default function CharacterList() {
  const { error, loading, data } = useCharacters();

  if (loading) {
    return <LoadingComponent />;
  }

  if (error) {
    return <ErrorComponent />;
  }

  const pokemon = data?.pokemons;

  return (
    <>
      <h1 className='text-3xl p-1 md:p-4'>List Of Pokemons</h1>

      <div className='flex flex-wrap justify-evenly items-center mt-5'>
        {pokemon.results?.map((data: any, index: number) => {
          return (
            <Link to={`/pokemon/${data.name}`} key={index}>
              <div className='max-w-sm rounded overflow-hidden shadow-lg cursor-pointer'>
                <img
                  className='w-15 h-15 ml-auto mr-auto mt-2'
                  src={data.image}
                  alt='Mountain'
                />
                <div className='px-6 py-4'>
                  <div className='font-bold text-sm mb-2'>{data.name}</div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
