///////////////////////////
///// Imports /////
///////////////////////////
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, useSelector as useReduxSelector, TypedUseSelectorHook } from 'react-redux';
import { createStore } from 'redux';
import reducer from './Reducer';
import { EventListener } from './containers/Nui/NuiHandler';
import App from './containers/App/Main';
import './index.scss';

///////////////////////////
///// Store Stoof /////
///////////////////////////
export const store = createStore(reducer, {});
type RootState = ReturnType<typeof reducer>
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

///////////////////////////
///// Main /////
///////////////////////////
ReactDOM.render(
	<Provider store={store}>
		<App />
		<EventListener />
	</Provider>,
	document.getElementById('root')
);
