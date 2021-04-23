export const ADD_ORDER = "ADD_ORDER";

// export const add_order = () => {
//   return {
    // type: ADD_ORDER,
//   };
// };

export const add_order = (item) => ({
  type: ADD_ORDER,
  payload: item
});
