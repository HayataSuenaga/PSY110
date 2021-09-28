import { configureStore } from "@reduxjs/toolkit";
import reducer from './experiment';

const store = configureStore({ reducer });

export default store;