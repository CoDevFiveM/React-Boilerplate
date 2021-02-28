///////////////////////////
///// Imports /////
///////////////////////////
import React from 'react';
// we impoty useSelector from the index, so we can access the types.
import { useSelector } from '../../index';
import clsx from 'clsx';
import './Main.scss';

///////////////////////////
///// Default /////
///////////////////////////
export default function Default() {
	const values = useSelector(state => state.Default);
	return (
		<div className={clsx('container', {
				'container-Show': values.isShowing,
			})}
		></div>
	);
}
