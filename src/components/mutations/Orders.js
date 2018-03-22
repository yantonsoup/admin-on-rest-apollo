import gql from 'graphql-tag';

const updateOrder = ({data}) => {
  const {id} = data
  return {
    mutation: gql`
      mutation ($input: UpdateOrderInputType) {
        updateOrder (input:$input) {
          id
        }
      }
    `,
    variables: { input: {id} },
  }
};

export default {
  updateOrder,
}
