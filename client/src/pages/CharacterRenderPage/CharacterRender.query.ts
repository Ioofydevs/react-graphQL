import { gql, useQuery } from '@apollo/client';

const GET_CHARACTER = gql`
  query GetCharacter($name: String!) {
    pokemon(name: $name) {
      id
      name
      height
      weight
      base_experience
      abilities {
        ability {
          name
        }
      }
    }
  }
`;

export const useCharacter = (name: string) => {
  const { data, error, loading } = useQuery(GET_CHARACTER, {
    variables: {
      name,
    },
  });
  console.log(data);
  return {
    data,
    error,
    loading,
  };
};
