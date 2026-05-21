import { _hexagramData as _data } from '../data/hexagrams.js';
import { _wuxingRelations as _wuxing } from '../data/wuxing.js';

let _index = 0;

export function _tossCoins() {
  const _lines = [];
  for (let _i = 0; _i < 6; _i++) {
    let _line = 0;
    for (let _j = 0; _j < 3; _j++) {
      _line += Math.floor(Math.random() * 2) + 2;
    }
    _lines.push(_line);
  }
  return _lines;
}

export function _getHexagramFromLines(_lines) {
  let _binary = '';
  let _changes = [];
  
  for (let _i = 0; _i < _lines.length; _i++) {
    const _line = _lines[_i];
    if (_line === 6) {
      _binary = '0' + _binary;
      _changes.push(_i);
    } else if (_line === 7) {
      _binary = '1' + _binary;
    } else if (_line === 8) {
      _binary = '0' + _binary;
    } else if (_line === 9) {
      _binary = '1' + _binary;
      _changes.push(_i);
    }
  }
  
  const _idx = parseInt(_binary, 2);
  return { _hexagram: _data[_idx], _changes };
}

export function _cycleHexagram() {
  _index = (_index + 1) % _data.length;
  return _data[_index];
}

export function _getHexagramIndex() {
  return _index;
}

export function _setHexagramIndex(_idx) {
  _index = _idx;
}