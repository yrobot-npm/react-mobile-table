import React from 'react';
import './App.css';
import MobileTable from '@yrobot/react-mobile-table';
import '@yrobot/react-mobile-table/lib/index.css';

const data1 = [
	['ID', '姓名', 'Age', 'Address'], // title line
	['1', '杨弱爆', 32, 'New York No. 1 Lake Park, New York No. 1 Lake Park'],
	['2', '杨弱爆', 42, 'London No. 2 Lake Park, London No. 2 Lake Park'],
	['3', '杨弱爆', 32, 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park'],
	['4', '杨弱爆 jsdkk sdkksdqww', 36, 'Sidney NOOOOOO'],
];
const data2 = [
	['ID', 'Name', 'Age', 'Address'], // title line
	['1', 'John Brown', 32, '2New York No. 1 Lake Park, New York No. 1 Lake Park'],
	['2', 'Jim Green', 42, '2London No. 2 Lake Park, London No. 2 Lake Park'],
	['3', 'Joe Black', 32, '2Sidney No. 1 Lake Park, Sidney No. 1 Lake Park'],
	['4', 'Joe Green jsdkk sdkksdqww', 36, '2Sidney NOOOOOO'],
];

const datas = [data1, data2];

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			i: 0,
		};
	}
	render() {
		return (
			<div className='app'>
				<div className='table-holder'>
					<MobileTable
						data={datas[this.state.i]} // 数据源:[[]]
						columnMinWidth={60} // 每一列的最小宽度, 假设屏宽为375, 默认值60: Int
					/>
				</div>
				<div
					className='change-button'
					onClick={() => {
						this.setState({
							i: this.state.i === 0 ? 1 : 0,
						});
					}}
				>
					分页效果测试
				</div>
			</div>
		);
	}
}

export default App;
