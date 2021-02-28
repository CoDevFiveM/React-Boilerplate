///////////////////////////
///// Imports /////
///////////////////////////
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import './Main.scss';

///////////////////////////
///// Default /////
///////////////////////////
export default function Default() {
	const values = useSelector(state => state.Default);
	return (
		<div
			className={clsx('container', {
				'container-Show': values.isShowing,
			})}
		></div>
	);
}
