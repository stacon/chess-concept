const ActionCreator = (namespace) => (type) => {
  const action = (payload) => ({
    type: `${namespace}/${type}`,
    payload,
  });
  action.type = `${namespace}/${type}`;

  return action;
};

export { ActionCreator };
export default ActionCreator;
