let opDefId = 0;
let variableId = 0;
let confoundId = 0;

const createOpDef = (term, def) => {
  opDefId += 1;
  return { id: opDefId, term, def };
};
const createVariable = (type, name, description) => {
  variableId += 1;
  return { id: variableId, type, name, description };
};
const createConfound = (name, measure) => {
  confoundId += 1;
  return { id: confoundId, name, measure };
};

export { createOpDef, createVariable, createConfound };