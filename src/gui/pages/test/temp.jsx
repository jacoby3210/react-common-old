

// page controller
const [currentPage, setCurrentPage] = useState(0);
const paginatorProps = {
	onChangeCallback: (pageIndex) => { setCurrentPage(pageIndex * 10); },
	buttons: 5,
	count: 250 / 10,
	value: 0,
}
const viewPropsForPaginator = {
	count: 250,
	from: currentPage,
	length: 10,
	src: Array.from({ length: 250 }, (_, i) => { return { text: `string_${i}` } }),
}



// tab controller
const [currentTab, setCurrentTab] = useState(0);
const tabControllerProps = {
	src: produceEntries(5, (v, i) => { return { caption: `Option #${i}`, id: i } }),
	onChangeCallback: (tabIndex) => { setCurrentTab(tabIndex) },
}
const viewPropsForTabController = {
	count: 250,
	from: currentTab,
	length: 1,
	src: Array.from({ length: 250 }, (_, i) => { return { text: `string_${i}` } }),
}


{/* Part III */}

<Common.Paginator {...paginatorProps} />
<Common.View  {...viewPropsForPaginator} />

