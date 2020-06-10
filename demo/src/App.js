import React from 'react'
import './App.css'
import MobileTable from '@yrobot/react-mobile-table'
import '@yrobot/react-mobile-table/lib/index.css'

const data = [
	['ID', 'Name', 'Age', 'Address'], // title line
	['3301888888888888', 'John Brown', 32, 'New York No. 1 Lake Park, New York No. 1 Lake Park'],
	['3301888888888882', 'Jim Green', 42, 'London No. 2 Lake Park, London No. 2 Lake Park'],
	['3301888888888881', 'Joe Black', 32, 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park'],
	['3301888888888885', 'Joe Green jsdkk sdkksdqww', 36, 'Sidney NOOOOOO'],
]

function App() {
	return (
		<div className="app">
			<div className="table-holder">
				<MobileTable
					data={data} // 数据源:[[]]
				/>
			</div>
		</div>
	)
}

export default App
