const RESOURCES = ['REQUEST', 'SUCCESS', 'FAILURE'];

export function createReducer(initialState, actionHandlers) {
  return (state = initialState, action) => {
    const handler = actionHandlers[action.type];

    return handler ? handler(state, action) : state;
  };
}

export const createActionTypes = (base) => {
  const res = {};

  RESOURCES.forEach((type) => {
    res[type] = `${base}_${type}`;
  });

  return res;
};

export const createAction = type => (req, args) => ({ type, payload: req, args });
export const createOfflineRecoveryAction = type => (req, args) => ({
  type, payload: req, args, meta: { retry: true }
});
