import React from 'react';
import './App.css';
import MobileTable from '@yrobot/react-mobile-table';
import '@yrobot/react-mobile-table/lib/index.css';

const data = [
	['ID', 'Name', 'Age', 'Address'], // title line
	['1', 'John Brown', 32, 'New York No. 1 Lake Park, New York No. 1 Lake Park'],
	['2', 'Jim Green', 42, 'London No. 2 Lake Park, London No. 2 Lake Park'],
	['3', 'Joe Black', 32, 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park'],
	['4', 'Joe Green jsdkk sdkksdqww', 36, 'Sidney NOOOOOO'],
];

function App() {
	return (
		<div className='app'>
			<div className='table-holder'>
				<MobileTable
					data={data} // 数据源:[[]]
					columnMinWidth={60} // 每一列的最小宽度, 假设屏宽为375, 默认值60: Int
				/>
			</div>
		</div>
	);
}

export default App;
