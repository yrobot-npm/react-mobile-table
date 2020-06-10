import React, { useState } from 'react';

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
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

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var getArray = function getArray(len) {
  return function (fn) {
    return _toConsumableArray(Array(len)).map(function (v, i) {
      return fn(i);
    });
  };
}; // 获取string的字节宽度：中文字符=》2字节宽


String.prototype.getCharSize = function () {
  return this.replace(/[^\u0000-\u00ff]/g, '  ').length;
}; // 根据传入的data配置每一列的宽度百分比


var getWidthPercent = function getWidthPercent(data) {
  var widthLen = [];
  var count = 0;
  data[0].map(function (str, i) {
    widthLen[i] = str.getCharSize();
    count += str.getCharSize();
  });
  return widthLen.map(function (v) {
    return v * 100 / count;
  });
};

var MobileTable = function MobileTable(_ref) {
  var _ref$data = _ref.data,
      data = _ref$data === void 0 ? [[]] : _ref$data;

  var _useState = useState(data[0].map(function () {
    return true;
  })),
      _useState2 = _slicedToArray(_useState, 2),
      columnFolds = _useState2[0],
      setFolds = _useState2[1];

  var switchFold = function switchFold(i) {
    var newColumnFolds = columnFolds.slice();
    newColumnFolds[i] = !newColumnFolds[i];
    setFolds(newColumnFolds);
  };

  var lineSize = data.length || 0;
  var columnSize = data[0].length || 0;
  var widthPercent = getWidthPercent(data);
  return /*#__PURE__*/React.createElement("div", {
    className: "react-mobile-table"
  }, /*#__PURE__*/React.createElement("div", {
    className: "react-mobile-table-column-holder"
  }, getArray(columnSize)(function (columnIndex) {
    return /*#__PURE__*/React.createElement("div", {
      key: "cloumn".concat(columnIndex),
      className: "react-mobile-table-table-column",
      style: {
        minWidth: widthPercent[columnIndex] + '%',
        width: columnFolds[columnIndex] ? widthPercent[columnIndex] + '%' : 'auto'
      },
      onClick: function onClick() {
        switchFold(columnIndex);
      }
    }, getArray(lineSize)(function (lineIndex) {
      return /*#__PURE__*/React.createElement("div", {
        key: "cloumn".concat(columnIndex, "line").concat(lineIndex),
        className: "react-mobile-table-item"
      }, data[lineIndex][columnIndex]);
    }));
  })));
};

export default MobileTable;
