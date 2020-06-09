import React, { useState } from 'react';

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".table-view{position:relative;width:100%;overflow-x:scroll}.table-view .column-holder{position:relative;white-space:nowrap}.table-view .column-holder .table-column{display:inline-block;font-size:14px;font-weight:400;color:rgba(0,0,0,.65)}.table-view .column-holder .table-column .item{box-sizing:border-box;padding:10px 16px;text-align:left;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;border-bottom:1px solid #f9f9f9}.table-view .column-holder .table-column .item:first-child{background:#fafafa;font-size:14px;font-weight:500;color:rgba(0,0,0,.85);overflow:visible}";
styleInject(css_248z);

const getArray = len => fn => [...Array(len)].map((v, i) => fn(i)); // 获取string的字节宽度：中文字符=》2字节宽


String.prototype.getCharSize = function () {
  return this.replace(/[^\u0000-\u00ff]/g, '  ').length;
}; // 根据传入的data配置每一列的宽度百分比


const getWidthPercent = data => {
  const widthLen = [];
  let count = 0;
  data[0].map((str, i) => {
    widthLen[i] = str.getCharSize();
    count += str.getCharSize();
  });
  return widthLen.map(v => v * 100 / count);
};

const MobileTable = ({
  data = [[]]
}) => {
  const _useState = useState(data[0].map(() => true)),
        _useState2 = _slicedToArray(_useState, 2),
        columnFolds = _useState2[0],
        setFolds = _useState2[1];

  const switchFold = i => {
    let newColumnFolds = columnFolds.slice();
    newColumnFolds[i] = !newColumnFolds[i];
    setFolds(newColumnFolds);
  };

  const lineSize = data.length || 0;
  const columnSize = data[0].length || 0;
  const widthPercent = getWidthPercent(data);
  return /*#__PURE__*/React.createElement("div", {
    className: "table-view"
  }, /*#__PURE__*/React.createElement("div", {
    className: "column-holder"
  }, getArray(columnSize)(columnIndex => /*#__PURE__*/React.createElement("div", {
    key: "cloumn".concat(columnIndex),
    className: "table-column",
    style: {
      minWidth: widthPercent[columnIndex] + '%',
      width: columnFolds[columnIndex] ? widthPercent[columnIndex] + '%' : 'auto'
    },
    onClick: () => {
      switchFold(columnIndex);
    }
  }, getArray(lineSize)(lineIndex => /*#__PURE__*/React.createElement("div", {
    key: "cloumn".concat(columnIndex, "line").concat(lineIndex),
    className: "item"
  }, data[lineIndex][columnIndex]))))));
};

export default MobileTable;
