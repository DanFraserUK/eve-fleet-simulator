/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _base_derived_stats = __webpack_require__(1);

//const shipBaseJSON = require('./../src/shipBaseJSON.js');
//const fs = require('../fs');
var fs = require('fs');
//import fs from 'fs';
var baseShips = JSON.parse(_base_derived_stats.shipBaseJSON);

var resizedWidths = ['src', '35', '80'];

var _loop = function _loop(widthBase) {
  var width = widthBase === 'src' ? '' : 'w' + widthBase;
  var widthDir = widthBase === 'src' ? '' : 'w' + widthBase + '/';
  fs.open('./../src/eve_icons/renders/renderIcons' + width.toUpperCase() + '.js', 'w', function (err, fd) {
    fs.writeSync(fd, '// @flow\n');
    var exportRef = '';
    var coveredIds = {};
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = baseShips[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var _ship = _step3.value;

        if (!coveredIds[_ship.typeID]) {
          coveredIds[_ship.typeID] = 1;
          var id = _ship.typeID.toString();
          var impStr = 'import i' + id + width + ' from \'./Renders/' + widthDir + id + '.png\';\n';
          fs.writeSync(fd, impStr);
        }
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3.return) {
          _iterator3.return();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }

    var objName = 'renderIcons' + width.toUpperCase();
    exportRef += '' + objName;
    fs.writeSync(fd, 'const ' + objName + ' = { ');
    coveredIds = {};
    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
      for (var _iterator4 = baseShips[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
        var _ship2 = _step4.value;

        if (!coveredIds[_ship2.typeID]) {
          coveredIds[_ship2.typeID] = 1;
          var _id = _ship2.typeID.toString();
          var _impStr = '\'i' + _id + '\': i' + _id + width + ', ';
          fs.writeSync(fd, _impStr);
        }
      }
    } catch (err) {
      _didIteratorError4 = true;
      _iteratorError4 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion4 && _iterator4.return) {
          _iterator4.return();
        }
      } finally {
        if (_didIteratorError4) {
          throw _iteratorError4;
        }
      }
    }

    fs.writeSync(fd, '};\n');
    fs.writeSync(fd, 'export default ' + exportRef + ';');
  });
};

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = resizedWidths[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var widthBase = _step.value;

    _loop(widthBase);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

var i = 0;
var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  for (var _iterator2 = baseShips[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    var ship = _step2.value;

    // console.log(`./../Renders/${ship.typeID.toString()}.png`, i);
    i++;
  }
} catch (err) {
  _didIteratorError2 = true;
  _iteratorError2 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion2 && _iterator2.return) {
      _iterator2.return();
    }
  } finally {
    if (_didIteratorError2) {
      throw _iteratorError2;
    }
  }
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetMaxEHP = exports.shipBaseJSON = undefined;

var _shipBaseJSON = __webpack_require__(2);

var _ship_data_class = __webpack_require__(3);

var _ship_data_class2 = _interopRequireDefault(_ship_data_class);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getOmniResMod(type, quality, isActive) {
  if (type === 'shield') {
    if (!isActive) {
      return 0;
    }
    if (quality <= 2) {
      return 0.3;
    } else if (quality === 3) {
      return 0.406; // pithc
    } else if (quality === 4) {
      return 0.469;
    }
  } else if (type === 'armor') {
    if (quality === 1) {
      return 0.25;
    } else if (quality === 2) {
      return 0.28125;
    } else if (quality === 3) {
      return 0.305;
    } else if (quality === 4) {
      return 0.35375;
    }
  } else if (type === 'hull') {
    return 0;
  }
  return 0;
}
function getSingleResMod(type, quality, isActive) {
  // q1 = t2, q2 = pith c deadspace, q3+ = pithx
  var n = 0;
  if (type === 'shield') {
    if (quality === 1) {
      n = isActive ? 0.55 : 0.46875;
    } else if (quality === 2) {
      n = isActive ? 0.573 : 0.51625;
    } else if (quality >= 3) {
      n = isActive ? 0.64 : 0.56375;
    }
  } else if (type === 'armor') {
    if (quality === 1) {
      n = isActive ? 0.55 : 0.46875;
    } else if (quality === 2) {
      n = isActive ? 0.573 : 0.51875;
    } else if (quality >= 3) {
      n = isActive ? 0.64 : 0.55625;
    }
  } else if (type === 'hull') {
    return 0;
  }
  return n;
}

function getMultiMod(type, quality) {
  if (type === 'shield') {
    return 0;
  } else if (type === 'armor') {
    return 0.15;
  } else if (type === 'hull') {
    if (quality === 1) {
      return 0.25;
    }
    return 0.27;
  }
  return 0;
}

function getBufferMod(type, rigSize, groupID) {
  var pendingCapMulti = 0;
  if (type === 'shield') {
    if (rigSize === 1) {
      return 1100;
    } else if (rigSize === 2 || rigSize === 3) {
      return 2600;
    } else if (rigSize === 4) {
      pendingCapMulti = 79200;
    }
  } else if (type === 'armor') {
    if (rigSize === 1) {
      return 1200;
    } else if (rigSize === 2 || rigSize === 3) {
      return 4800;
    } else if (rigSize === 4) {
      pendingCapMulti = 82500;
    }
  } else if (type === 'hull') {
    return 0;
  }
  if (groupID === 659) {
    pendingCapMulti *= 5; // Super carriers
  } else if (groupID === 30) {
    pendingCapMulti *= 6; // Titans
  }
  return pendingCapMulti;
}

function multiRes(res, multi) {
  return {
    em: res.em * multi, therm: res.therm * multi, kin: res.kin * multi, exp: res.exp * multi
  };
}

function applyEffectSet(base, effects) {
  // These are actually 1 / Math.exp(((-i) / 2.67) ** 2) (where i is the index)
  // This solution is used instead for speed reasons
  var stackingPenelties = [1, 0.869, 0.571, 0.283, 0.106, 0.03, 0];
  var value = base;
  for (var i = 0; i < effects.length; i += 1) {
    value *= 1 - effects[i] * stackingPenelties[i];
  }
  return value;
}

function getBaseRes(res) {
  var resistToFactorOut = 1.27551; // 1 / (1 - 0.216)
  return multiRes(res, resistToFactorOut);
}

function getEHP(resonance, hp) {
  var sRes = (resonance.shield.em + resonance.shield.therm + resonance.shield.kin + resonance.shield.exp) / 4;
  var shield = hp.shield / sRes;
  var aRes = (resonance.armor.em + resonance.armor.therm + resonance.armor.kin + resonance.armor.exp) / 4;
  var armor = hp.armor / aRes;
  var hRes = (resonance.hull.em + resonance.hull.therm + resonance.hull.kin + resonance.hull.exp) / 4;
  var hull = hp.hull / hRes;
  return shield + armor + hull;
}

function calcResonance(base, effects) {
  effects.em.sort(function (a, b) {
    return b - a;
  });
  effects.therm.sort(function (a, b) {
    return b - a;
  });
  effects.kin.sort(function (a, b) {
    return b - a;
  });
  effects.exp.sort(function (a, b) {
    return b - a;
  });
  var emRes = applyEffectSet(base.em, effects.em);
  var thermRes = applyEffectSet(base.therm, effects.therm);
  var kinRes = applyEffectSet(base.kin, effects.kin);
  var expRes = applyEffectSet(base.exp, effects.exp);
  return {
    em: emRes, therm: thermRes, kin: kinRes, exp: expRes
  };
}

function tryResMod(resTypes, value, fullResBaseStr, tankType, effects, hp) {
  var fullResBase = JSON.parse(fullResBaseStr);
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = resTypes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var resType = _step.value;

      effects[resType].push(value);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var res = calcResonance(fullResBase[tankType], effects);
  var fullRes = fullResBase;
  fullRes[tankType] = res;
  var ehp = getEHP(fullRes, hp);
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = resTypes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var _resType = _step2.value;

      var ind = effects[_resType].indexOf(value);
      effects[_resType].splice(ind, 1);
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return ehp;
}

function GetMaxEHP(fit, side, tankType, quality, isActive) {
  if (side !== 1 || fit.resonance === undefined) {
    return 0;
  }
  var bufferModHP = getBufferMod(tankType, fit.rigSize, fit.groupID);

  var commandBufferMulti = 1.215625;
  var skillBufferMulti = 1.25; // shield management and hull upgrades
  bufferModHP *= commandBufferMulti * skillBufferMulti;
  var slotsLeft = tankType === 'shield' ? fit.midSlots : fit.lowSlots;
  var resBase = getBaseRes(fit.resonance[tankType]);
  var fullResBaseObj = {
    shield: fit.resonance.shield, armor: fit.resonance.armor, hull: fit.resonance.hull
  };
  fullResBaseObj[tankType] = resBase;
  var cmdBase = 0.216;
  var effects = {
    em: [cmdBase], therm: [cmdBase], kin: [cmdBase], exp: [cmdBase]
  };
  var hp = { shield: fit.hp.shield, armor: fit.hp.armor, hull: fit.hp.hull };
  var omniResMod = getOmniResMod(tankType, quality, isActive);
  var singleResMod = getSingleResMod(tankType, quality, isActive);
  var multiMod = getMultiMod(tankType, quality);
  var dcuResMod = { shield: 0.125, armor: 0.15, hull: 0.4 };
  var dcuApplied = false;
  if (tankType === 'shield') {
    var newFullResBaseObj = {};
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = Object.keys(fullResBaseObj)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var hpType = _step3.value;

        newFullResBaseObj[hpType] = {};
        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
          for (var _iterator4 = Object.keys(fullResBaseObj[hpType])[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var resistType = _step4.value;

            newFullResBaseObj[hpType][resistType] = fullResBaseObj[hpType][resistType] * (1 - dcuResMod[hpType]);
          }
        } catch (err) {
          _didIteratorError4 = true;
          _iteratorError4 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion4 && _iterator4.return) {
              _iterator4.return();
            }
          } finally {
            if (_didIteratorError4) {
              throw _iteratorError4;
            }
          }
        }
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3.return) {
          _iterator3.return();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }

    fullResBaseObj = newFullResBaseObj;
    dcuApplied = true;
  } else if (tankType === 'hull') {
    effects = {
      em: [], therm: [], kin: [], exp: []
    };
  }
  for (; slotsLeft > 0; slotsLeft -= 1) {
    var fullResBase = JSON.stringify(fullResBaseObj);
    var emVal = tryResMod(['em'], singleResMod, fullResBase, tankType, effects, hp);
    var thermVal = tryResMod(['therm'], singleResMod, fullResBase, tankType, effects, hp);
    var kinVal = tryResMod(['kin'], singleResMod, fullResBase, tankType, effects, hp);
    var expVal = tryResMod(['exp'], singleResMod, fullResBase, tankType, effects, hp);
    var omniVal = tryResMod(['em', 'therm', 'kin', 'exp'], omniResMod, fullResBase, tankType, effects, hp);
    var hpWithBuffer = { shield: hp.shield, armor: hp.armor, hull: hp.hull };
    hpWithBuffer[tankType] += bufferModHP;
    var bufferVal = tryResMod([], 0, fullResBase, tankType, effects, hpWithBuffer);
    var hpWithMulti = { shield: hp.shield, armor: hp.armor, hull: hp.hull };
    hpWithMulti[tankType] *= 1 + multiMod;
    var multiVal = tryResMod([], 0, fullResBase, tankType, effects, hpWithMulti);
    var dcuVal = 0;
    if (dcuApplied === false) {
      var dcuBase = {};
      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = Object.keys(fullResBaseObj)[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          var _hpType = _step5.value;

          dcuBase[_hpType] = {};
          var _iteratorNormalCompletion6 = true;
          var _didIteratorError6 = false;
          var _iteratorError6 = undefined;

          try {
            for (var _iterator6 = Object.keys(fullResBaseObj[_hpType])[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
              var _resistType = _step6.value;

              dcuBase[_hpType][_resistType] = fullResBaseObj[_hpType][_resistType] * (1 - dcuResMod[_hpType]);
            }
          } catch (err) {
            _didIteratorError6 = true;
            _iteratorError6 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion6 && _iterator6.return) {
                _iterator6.return();
              }
            } finally {
              if (_didIteratorError6) {
                throw _iteratorError6;
              }
            }
          }
        }
      } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion5 && _iterator5.return) {
            _iterator5.return();
          }
        } finally {
          if (_didIteratorError5) {
            throw _iteratorError5;
          }
        }
      }

      var dcuResBase = JSON.stringify(dcuBase);
      dcuVal = tryResMod([], 0, dcuResBase, tankType, effects, hp);
    }
    var valArray = [emVal, thermVal, kinVal, expVal, omniVal, bufferVal, multiVal, dcuVal];
    var resTypes = [];
    var resValue = 0;
    var _newFullResBaseObj = void 0;
    valArray.sort(function (a, b) {
      return b - a;
    });
    switch (valArray[0]) {
      case emVal:
        effects.em.push(singleResMod);
        break;
      case thermVal:
        effects.therm.push(singleResMod);
        break;
      case kinVal:
        effects.kin.push(singleResMod);
        break;
      case expVal:
        effects.exp.push(singleResMod);
        break;
      case omniVal:
        resTypes = ['em', 'therm', 'kin', 'exp'];
        resValue = omniResMod;
        break;
      case bufferVal:
        hp = hpWithBuffer;
        break;
      case multiVal:
        hp = hpWithMulti;
        break;
      case dcuVal:
        _newFullResBaseObj = {};
        var _iteratorNormalCompletion7 = true;
        var _didIteratorError7 = false;
        var _iteratorError7 = undefined;

        try {
          for (var _iterator7 = Object.keys(fullResBaseObj)[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
            var _hpType2 = _step7.value;

            _newFullResBaseObj[_hpType2] = {};
            var _iteratorNormalCompletion8 = true;
            var _didIteratorError8 = false;
            var _iteratorError8 = undefined;

            try {
              for (var _iterator8 = Object.keys(fullResBaseObj[_hpType2])[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                var _resistType2 = _step8.value;

                _newFullResBaseObj[_hpType2][_resistType2] = fullResBaseObj[_hpType2][_resistType2] * (1 - dcuResMod[_hpType2]);
              }
            } catch (err) {
              _didIteratorError8 = true;
              _iteratorError8 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion8 && _iterator8.return) {
                  _iterator8.return();
                }
              } finally {
                if (_didIteratorError8) {
                  throw _iteratorError8;
                }
              }
            }
          }
        } catch (err) {
          _didIteratorError7 = true;
          _iteratorError7 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion7 && _iterator7.return) {
              _iterator7.return();
            }
          } finally {
            if (_didIteratorError7) {
              throw _iteratorError7;
            }
          }
        }

        fullResBaseObj = _newFullResBaseObj;
        dcuApplied = true;
        break;
      default:
    }
    var _iteratorNormalCompletion9 = true;
    var _didIteratorError9 = false;
    var _iteratorError9 = undefined;

    try {
      for (var _iterator9 = resTypes[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
        var resType = _step9.value;

        effects[resType].push(resValue);
      }
    } catch (err) {
      _didIteratorError9 = true;
      _iteratorError9 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion9 && _iterator9.return) {
          _iterator9.return();
        }
      } finally {
        if (_didIteratorError9) {
          throw _iteratorError9;
        }
      }
    }
  }
  var rigMulti = void 0;
  if (fit.groupID === 30 || fit.groupID === 659 || quality >= 3) {
    rigMulti = tankType !== 'hull' ? Math.pow(1.2, fit.rigSlots) : Math.pow(1.25, fit.rigSlots);
  } else {
    rigMulti = tankType !== 'hull' ? Math.pow(1.15, fit.rigSlots) : Math.pow(1.2, fit.rigSlots);
  }
  hp[tankType] *= rigMulti;
  var fullResBaseJson = JSON.stringify(fullResBaseObj);
  var ehp = tryResMod([], 0, fullResBaseJson, tankType, effects, hp);
  return ehp;
}
exports.shipBaseJSON = _shipBaseJSON.shipBaseJSON;
exports.GetMaxEHP = GetMaxEHP;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ShipData = function () {
  function ShipData() {
    _classCallCheck(this, ShipData);

    this.isFit = false;
  }

  _createClass(ShipData, null, [{
    key: 'getMaxShieldEHP',
    value: function getMaxShieldEHP(shipData) {
      return shipData.maxShieldEHP;
    }
  }, {
    key: 'getMaxArmorEHP',
    value: function getMaxArmorEHP(shipData) {
      return shipData.maxArmorEHP;
    }
  }, {
    key: 'getMaxHullEHP',
    value: function getMaxHullEHP(shipData) {
      return shipData.maxHullEHP;
    }
  }, {
    key: 'getCapRecharge',
    value: function getCapRecharge(shipData) {
      return shipData.capRecharge;
    }
  }, {
    key: 'getDroneVolley',
    value: function getDroneVolley(shipData) {
      return shipData.droneVolley;
    }
  }, {
    key: 'getCapUsed',
    value: function getCapUsed(shipData) {
      return shipData.capUsed;
    }
  }, {
    key: 'getEffectiveTurrets',
    value: function getEffectiveTurrets(shipData) {
      return shipData.effectiveTurrets;
    }
  }, {
    key: 'getAlignTime',
    value: function getAlignTime(shipData) {
      return shipData.alignTime;
    }
  }, {
    key: 'getMidSlots',
    value: function getMidSlots(shipData) {
      return shipData.midSlots;
    }
  }, {
    key: 'getTurretSlots',
    value: function getTurretSlots(shipData) {
      return shipData.turretSlots;
    }
  }, {
    key: 'getRigSize',
    value: function getRigSize(shipData) {
      return shipData.rigSize;
    }
  }, {
    key: 'getEffectiveDroneBandwidth',
    value: function getEffectiveDroneBandwidth(shipData) {
      return shipData.effectiveDroneBandwidth;
    }
  }, {
    key: 'getTypeID',
    value: function getTypeID(shipData) {
      return shipData.typeID;
    }
  }, {
    key: 'getMaxTargetRange',
    value: function getMaxTargetRange(shipData) {
      return shipData.maxTargetRange;
    }
  }, {
    key: 'getMaxSpeed',
    value: function getMaxSpeed(shipData) {
      return shipData.maxSpeed;
    }
  }, {
    key: 'getGroupID',
    value: function getGroupID(shipData) {
      return shipData.groupID;
    }
  }, {
    key: 'getScanStrength',
    value: function getScanStrength(shipData) {
      return shipData.scanStrength;
    }
  }, {
    key: 'getScanRes',
    value: function getScanRes(shipData) {
      return shipData.scanRes;
    }
  }, {
    key: 'getWeaponDPS',
    value: function getWeaponDPS(shipData) {
      return shipData.weaponDPS;
    }
  }, {
    key: 'getLauncherSlots',
    value: function getLauncherSlots(shipData) {
      return shipData.launcherSlots;
    }
  }, {
    key: 'getLowSlots',
    value: function getLowSlots(shipData) {
      return shipData.lowSlots;
    }
  }, {
    key: 'getRigSlots',
    value: function getRigSlots(shipData) {
      return shipData.rigSlots;
    }
  }, {
    key: 'getHighSlots',
    value: function getHighSlots(shipData) {
      return shipData.highSlots;
    }
  }, {
    key: 'getMaxTargets',
    value: function getMaxTargets(shipData) {
      return shipData.maxTargets;
    }
  }, {
    key: 'getSignatureRadius',
    value: function getSignatureRadius(shipData) {
      return shipData.signatureRadius;
    }
  }, {
    key: 'getEffectiveLaunchers',
    value: function getEffectiveLaunchers(shipData) {
      return shipData.effectiveLaunchers;
    }
  }, {
    key: 'getPowerOutput',
    value: function getPowerOutput(shipData) {
      return shipData.powerOutput;
    }
  }, {
    key: 'getDroneDPS',
    value: function getDroneDPS(shipData) {
      return shipData.droneDPS;
    }
  }, {
    key: 'getTotalVolley',
    value: function getTotalVolley(shipData) {
      return shipData.totalVolley;
    }
  }, {
    key: 'getWeaponVolley',
    value: function getWeaponVolley(shipData) {
      return shipData.weaponVolley;
    }
  }, {
    key: 'processing',
    value: function processing(shipStats) {
      shipStats.id = Math.random();
      var fullNameBreak = shipStats.name.indexOf(':');
      if (fullNameBreak > -1) {
        var baseName = shipStats.name;
        shipStats.name = baseName.slice(fullNameBreak + 2);
        shipStats.shipType = baseName.slice(0, fullNameBreak);
        shipStats.isFit = true;
      } else {
        shipStats.shipType = undefined;
        shipStats.isFit = false;
        // Handle subsystem processing for t3c.
        if (shipStats.groupID === 963) {
          var subsystems = {};
          var subTypes = ['Defensive', 'Offensive', 'Propulsion', 'Core'];

          var _loop = function _loop(sub) {
            var subName = shipStats.moduleNames.find(function (n) {
              return n.includes(sub);
            }) || '';
            var specificSubName = subName.substring(subName.indexOf(sub) + 2 + sub.length);
            subsystems[sub] = specificSubName;
          };

          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = subTypes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var sub = _step.value;

              _loop(sub);
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          shipStats.subsystems = subsystems;
        }
        // Handle mode processing for t3d.
        if (shipStats.groupID === 1305) {
          var modes = ['Defense Mode', 'Sharpshooter Mode', 'Propulsion Mode'];
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = modes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var mode = _step2.value;

              var modeInd = shipStats.name.indexOf(mode);
              var modeStr = shipStats.name.substring(modeInd);
              if (modeStr === mode) {
                shipStats.mode = mode;
                shipStats.name = shipStats.name.substring(0, modeInd - 1);
              }
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        }
      }
    }
  }]);

  return ShipData;
}();

exports.default = ShipData;

/***/ })
/******/ ]);