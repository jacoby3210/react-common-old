const [currentNavigatorSlide, setCurrentNavigatorSlide] = useState(0);
const navigatorProps = {
	infinity: true,
	onChangeCallback: (slideIndex) => { setCurrentNavigatorSlide(slideIndex); },
	count: 250,
}
const viewPropsForNavigator = {
	count: 250,
	from: currentNavigatorSlide,
	length: 1,
	src: Array.from({ length: 250 }, (_, i) => { return { text: `string_${i}` } }),
}

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

// scrollbar
const area = React.useRef(null)
const TestAreaForScroll = () =>
	<div style={{ height: "100px", "overflowY": "scroll" }} ref={area}>
		<div style={{ height: "200px" }} />
	</div>
const scrollbarProps = { target: area,}

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
<Common.Navigator {...navigatorProps} />
<Common.View  {...viewPropsForNavigator} />

<Common.Paginator {...paginatorProps} />
<Common.View  {...viewPropsForPaginator} />

