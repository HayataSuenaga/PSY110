import { createSlice } from "@reduxjs/toolkit";
import { createOpDef, createVariable, createConfound } from "../data/dataTypes";

const initialState = {
  hypothesis: '',
  opDefs: [],
  variables: [],
  population: '',
  sample: '',
  confounds: []
};

const experimentSlice = createSlice({
  name: 'experiment',
  initialState,
  reducers: {
    updateHypothesis: (state, action) => {
      state.hypothesis = action.payload.hypothesis;
      return state;
    },
    addOpDef: (state, action) => {
      const { term, def } = action.payload;
      state.opDefs.push(createOpDef(term, def));
      return state;
    },
    deleteOpDef: (state, action) => {
      const { id } = action.payload;
      state.opDefs = state.opDefs.filter(def => def.id !== id);
      return state;
    },
    updateOpDef: (state, action) => {
      const { id } = action.payload;
      const index = state.opDefs.findIndex(opDef => opDef.id === id);
      state.opDefs[index] = action.payload;
      return state;
    },
    addVariable: (state, action) => {
      const { type, name, description } = action.payload;
      state.variables.push(createVariable(type, name, description));
      return state;
    },
    deleteVariable: (state, action) => {
      const { id } = action.payload;
      state.variables = state.variables.filter(variable => variable.id !== id);
      return state;
    },
    updateVariable: (state, action) => {
      const { id } = action.payload;
      const index = state.variables.findIndex(variable => variable.id === id);
      state.variable[index] = action.payload;
      return state;
    },
    addConfound: (state, action) => {
      const { name, measure } = action.payload;
      state.confounds.push(createConfound(name, measure));
      return state;
    },
    deleteConfound: (state, action) => {
      const { id } = action.payload;
      state.confounds = state.confounds.filter(confound => confound.id !== id);
      return state;
    },
    updateConfound: (state, action) => {
      const { id } = action.payload;
      const index = state.confounds.findIndex(confound => confound.id === id);
      state.confounds[index] = action.payload;
      return state;
    }
  }
});

// export const {
//   updateHypothesis,
//   addOpDef,
//   deleteOpDef,
//   updateOpDef,
//   addVariable,
//   deleteVariable,
//   updateVariable,
//   addConfound,
//   deleteConfound,
//   updateConfound
// } = experimentSlice.actions;

const { actions } = experimentSlice;
export const updateHypothesis = hypothesis => actions.updateHypothesis({ hypothesis });
export const addOpDef = (term, def) => actions.addOpDef({ term, def });
export const deleteOpDef = id => actions.deleteOpDef({ id });
export const updateOpDef = (id, term, def) => actions.updateOpDef({ id, term, def });
export const addVariable = (type, name, description) => actions.addVariable({ type, name, description });
export const deleteVariable = id => actions.deleteVariable({ id });
export const updateVariable = (id, type, name, description) => actions.updateVariable({ id, type, name, description });
export const addConfound = (name, measure) => actions.addConfound({ name, measure });
export const deleteConfound = id => actions.deleteConfound({ id });
export const updateConfound = (id, name, measure) => actions.updateConfound({id, name, measure});

export default experimentSlice.reducer;