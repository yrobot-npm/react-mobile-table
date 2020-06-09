/**
 * @author Yrobot
 * @time 2020.6.9
 */
import React, { useState } from 'react'
import './index.scss'

// 生成一个长度为len的数组，并返回以index为参数的闭包
const getArray = (len) => (fn) => [...Array(len)].map((v, i) => fn(i))

// 获取string的字节宽度：中文字符=》2字节宽
String.prototype.getCharSize = function () {
	return this.replace(/[^\u0000-\u00ff]/g, '  ').length
}

// 根据传入的data配置每一列的宽度百分比
const getWidthPercent = (data) => {
	const widthLen = []
	let count = 0
	data[0].map((str, i) => {
		widthLen[i] = str.getCharSize()
		count += str.getCharSize()
	})
	return widthLen.map((v) => (v * 100) / count)
}

const MobileTable = ({ data = [[]] }) => {
	const [columnFolds, setFolds] = useState(data[0].map(() => true))
	const switchFold = (i) => {
		let newColumnFolds = [...columnFolds]
		newColumnFolds[i] = !newColumnFolds[i]
		setFolds(newColumnFolds)
	}
	const lineSize = data.length || 0
	const columnSize = data[0].length || 0
	const widthPercent = getWidthPercent(data)
	return (
		<div className="table-view">
			<div className="column-holder">
				{getArray(columnSize)((columnIndex) => (
					<div
						className="table-column"
						style={{
							minWidth: widthPercent[columnIndex] + '%',
							width: columnFolds[columnIndex]
								? widthPercent[columnIndex] + '%'
								: 'auto',
						}}
						onClick={() => {
							switchFold(columnIndex)
						}}
					>
						{getArray(lineSize)((lineIndex) => (
							<div className="item">{data[lineIndex][columnIndex]}</div>
						))}
					</div>
				))}
			</div>
		</div>
	)
}

export default MobileTable
