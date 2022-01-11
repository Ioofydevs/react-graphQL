import { gql, useQuery } from '@apollo/client';

const GET_CHARACTERS = gql`
  query GetCharacters {
    pokemons(limit: 98, offset: 5) {
      results {
        url
        name
        image
      }
    }
  }
`;

export const useCharacters = () => {
  const { error, loading, data } = useQuery(GET_CHARACTERS);

  return {
    error,
    data,
    loading,
  };
};
