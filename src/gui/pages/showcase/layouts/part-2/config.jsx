import PropTypes from 'prop-types';

// ========================================================================= //
// Constants.
// ========================================================================= //

export const produceEntries = (count, func) => Array.from(new Array(count), func);
export const defaultProps = {
	accordion: {
		src: produceEntries(5, (v, i) => { return { caption: `Option #${i}`, content: i } }),
	},
	// browser: {
	// 	length: 5,
	// 	src: produceEntries(5, (v, i) => { return { caption: `Option #${i}`, id: i } }),
		// onStateUpdate: (tabIndex) => { setBrowseTab(tabIndex * 10) },
	// },
	// viewForBrowser: {
		// length: 10,
		// src: Array.from({ length: 250 }, (_, i) => { return { text: `string_${i}` } }),
	// },
	// navigator: {
		// infinity: true,
		// length: 250,
	// },
	// viewForNavigator: {
		// length: 1,
		// src: Array.from({ length: 250 }, (_, i) => { return { text: `string_${i}` } }),
	// },
	// paginator: {
		// lengthBrowser: 5,
		// lengthNavigator: 25,
		// src: produceEntries(25, (v, i) => { return { caption: `Option #${i}`, id: i } }),
		// value: 0,
	// },
	viewForPaginator: {
		length: 10,
		src: Array.from({ length: 250 }, (_, i) => { return { text: `string_${i}` } }),
	}
};

// ========================================================================= //