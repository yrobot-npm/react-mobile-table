# @yrobot/react-mobile-table  

## 特性  
1. 适配kbone，可在小程序端使用
2. table宽度基于 MobileTable 外层元素宽度100%
3. 自动计算每一列合适的默认宽度（a保证完全展示title）
4. 点击存在压缩的列会展开对应列的所有数据（保证此列所有数据都完整展开）
5. 展开列后可以左右滑动table查看
6. 点击展开列可以恢复收缩状态

## 查看demo

之后完善线上demo的url

## 使用

1. 安装`@yrobot/react-mobile-table` 
```
yarn add @yrobot/react-mobile-table
```

2. 引入组件并使用
```
import MobileTable from '@yrobot/react-mobile-table'

const data = [
	['ID', 'Name', 'Age', 'Address'], // title line
	['1', 'John Brown', 32, 'New York No. 1 Lake Park, New York No. 1 Lake Park'],
	['2', 'Jim Green', 42, 'London No. 2 Lake Park, London No. 2 Lake Park'],
	['3', 'Joe Black', 32, 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park'],
	['4', 'Joe Green jsdkk sdkksdqww', 36, 'Sidney NOOOOOO'],
]

<MobileTable data={data} />

```
