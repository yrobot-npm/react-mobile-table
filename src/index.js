/**
 * @author Yrobot
 * @time 2020.6.9
 */
import React from 'react';
import memoize from 'memoize-one';
// import React, { useState, useMemo } from 'react';
import './index.less';

// 生成一个长度为len的数组，并返回以index为参数的闭包
const getArray = (len) => (fn) => [...Array(len)].map((v, i) => fn(i));

// 获取string的字节宽度：中文字符=》2字节宽
String.prototype.getCharSize = function () {
  return this.replace(/[^\u0000-\u00ff]/g, '  ').length;
};

// 根据传入的宽度百分比，自动优化，防止过小的列
const autoSize = memoize((arr = [], MIN_SIZE) => {
  // const MIN_SIZE = (Math.max(...titles.map((v) => (v + '').getCharSize())) / 2) * fontSize + 16 // 根据(最长title字长+padding=计算MIN_SIZE)计算MIN_SIZE
  const MIN_WIDTH_P = (MIN_SIZE / 375) * 100;
  const LEN = arr.length;

  // 如果平均宽度都到不了MIN_WIDTH_P，直接返回arr
  if (MIN_WIDTH_P > 100 / LEN) return arr;

  let subCount = 0; // 记录所有小于MIN_WIDTH_P的缺值和
  let overCount = 0; // 记录所有大于MIN_WIDTH_P的超值和
  arr.map((v) => {
    if (v > MIN_WIDTH_P) {
      overCount += v - MIN_WIDTH_P;
    } else {
      subCount += MIN_WIDTH_P - v;
    }
  });

  if (subCount === 0) return arr; // 所有数据都大于MIN_WIDTH_P，直接返回arr

  const overRate = (overCount - subCount) / overCount; // 计算超出值的缩放比例

  return arr.map((v) => {
    if (v > MIN_WIDTH_P) {
      return MIN_WIDTH_P + (v - MIN_WIDTH_P) * overRate;
    } else {
      return MIN_WIDTH_P;
    }
  });
});

// 根据传入的data配置每一列的宽度百分比
const getWidthPercent = memoize((data, titleWeigth = 10, contentWeight = 1) => {
  const widthLen = [];
  let count = 0;
  data.map((arr = [], index) => {
    const base = (index > 0 ? contentWeight : titleWeigth) / 1;
    arr.map((item, i) => {
      widthLen[i] = (widthLen[i] || 0) + (item + '').getCharSize() * base;
    });
  });
  widthLen.map((len) => {
    count += len;
  });
  return widthLen.map((v) => (v * 100) / count);
});

class MobileTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  switchFold(i) {
    const { data = [[]] } = this.props;
    const { columnFolds = data[0].map(() => true) } = this.state;
    let newColumnFolds = columnFolds.slice();
    newColumnFolds[i] = !newColumnFolds[i];
    this.setState({
      columnFolds: newColumnFolds,
    });
  }

  render() {
    const { data = [[]], columnMinWidth = 69, onClick = () => {} } = this.props;
    const widthPercent = autoSize(getWidthPercent(data), columnMinWidth);
    const { columnFolds = data[0].map(() => true) } = this.state;
    const lineSize = data.length || 0;
    const columnSize = data[0].length || 0;
    return (
      <div className='react-mobile-table'>
        <div className='react-mobile-table-column-holder'>
          {getArray(columnSize)((columnIndex) => (
            <div
              key={`cloumn${columnIndex}`}
              className='react-mobile-table-table-column'
              style={{
                minWidth: widthPercent[columnIndex] + '%',
                width: !!columnFolds[columnIndex] ? widthPercent[columnIndex] + '%' : 'auto',
              }}
              onClick={() => {
                this.switchFold(columnIndex);
              }}
            >
              {getArray(lineSize)((lineIndex) => (
                <div
                  key={`cloumn${columnIndex}line${lineIndex}`}
                  className='react-mobile-table-item'
                  onClick={(event) => {
                    onClick({
                      column: columnIndex,
                      line: lineIndex,
                      collapse: !columnFolds[columnIndex],
                      event,
                    });
                  }}
                >
                  {data[lineIndex][columnIndex]}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default MobileTable;
