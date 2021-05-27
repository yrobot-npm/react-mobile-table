# @yrobot/react-mobile-table

## 特性

1. 适配 kbone，可在小程序端使用
2. table 宽度基于 MobileTable 外层元素宽度 100%
3. 自动计算每一列合适的默认宽度（a 保证完全展示 title）
4. 点击存在压缩的列会展开对应列的所有数据（保证此列所有数据都完整展开）
5. 展开列后可以左右滑动 table 查看
6. 点击展开列可以恢复收缩状态

## 利用 codesandbox 查看

[view in codesandbox](https://codesandbox.io/s/react-mobile-table-jrled?file=/src/App.js)

## 查看 demo

![](https://tva1.sinaimg.cn/large/007S8ZIlly1gfn15t5e25g30cg0qodly.gif)  
注意使用浏览器的手机模式查看[DEMO](https://yrobot.github.io/react-mobile-table/demo/dist)

## 使用

1. 安装`@yrobot/react-mobile-table`

```
yarn add @yrobot/react-mobile-table
```

2. 引入组件并使用

```js
import MobileTable from '@yrobot/react-mobile-table';
import '@yrobot/react-mobile-table/lib/index.css';

const data = [
  ['ID', 'Name', 'Age', 'Address'], // title line
  ['1', 'John Brown', 32, 'New York No. 1 Lake Park, New York No. 1 Lake Park'],
  ['2', 'Jim Green', 42, 'London No. 2 Lake Park, London No. 2 Lake Park'],
  ['3', 'Joe Black', 32, 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park'],
  ['4', 'Joe Green jsdkk sdkksdqww', 36, 'Sidney NOOOOOO'],
];

<MobileTable
  data={data} // 数据源:[[]]
  columnMinWidth={60} // 每一列的最小宽度, 假设屏宽为375, 默认值60: Int
  // table内部点击事件回调
  onClick={(param) => {
    const {
      column, //第几列，从0开始
      line, // 第几行，从0开始，包含header行
      collapse, // 当前列是否折叠,boolean
      event,
    } = param;
    console.log(param);
  }}
/>;
```

## 版本更新 log

#### v1.2.0 [feature]

1. 支持 onClick 事件，获取点击行列和展开状态

#### v1.1.4 [fix bug]

1. 修复使用 CRA 安装 mobile-table 时会安装两个版本 react

#### v1.1.3 [fix bug]

1. 适配仓库兼容 react 版本 15（使用 memoize-one 缓存计算结果）
2. 组件库添加 terser 压缩 js 代码
3. demo 添加分页效果

#### v1.1.2 [fix bug]

1. 添加 line-height，修复特殊字体中英文行高不一致的情况
