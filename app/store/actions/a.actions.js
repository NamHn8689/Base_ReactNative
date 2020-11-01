export const A_RESET = "A_RESET";

export function reset() {
  return (dispatch) => dispatch({
    type: A_RESET,
  });
}
