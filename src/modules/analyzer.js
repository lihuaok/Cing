import { _hexagramData as _data, _wuxingNames, _relationNames } from '../data/hexagrams.js';
import { _wuxingRelations as _wuxing } from '../data/wuxing.js';

export function _analyzeCareer(_hex, _changes) {
  const _wu = _hex._wuxing;
  const _rel = _wuxing[_wu._upper][_wu._lower];
  
  let _res = `【${_hex._name}】事业分析\n`;
  _res += `卦象：${_hex._symbol}\n`;
  _res += `卦辞：${_hex._text}\n`;
  _res += `核心含义：${_hex._core}\n\n`;
  _res += `五行分析：上卦属${_wuxingNames[_wu._upper]}，下卦属${_wuxingNames[_wu._lower]}，${_wuxingNames[_wu._upper]}与${_wuxingNames[_wu._lower]}为${_relationNames[_rel]}关系。\n\n`;
  
  if (_changes.length > 0) {
    _res += `变爻分析：有${_changes.length}个变爻，需要关注卦象的变化趋势。\n`;
    _changes.forEach((_c, _idx) => {
      _res += `第${_c + 1}爻变：${_hex._yaoci[_c]}\n`;
    });
  } else {
    _res += `静卦：无变爻，需关注本卦所显示的稳定趋势。\n`;
  }
  
  _res += `\n事业建议：\n`;
  if (_rel === '_xiangsheng' || _rel === '_bihe') {
    _res += `✓ 卦象五行相生比和，事业运势佳，适合积极进取。\n`;
  } else {
    _res += `⚠ 卦象五行相克，事业需谨慎行事，防患未然。\n`;
  }
  
  return _res;
}

export function _analyzeWealth(_hex, _changes) {
  let _res = `【${_hex._name}】财富分析\n`;
  _res += `卦象：${_hex._symbol}\n`;
  _res += `卦辞：${_hex._text}\n`;
  _res += `核心含义：${_hex._core}\n\n`;
  
  const _wu = _hex._wuxing;
  const _rel = _wuxing[_wu._upper][_wu._lower];
  _res += `五行分析：上卦属${_wuxingNames[_wu._upper]}，下卦属${_wuxingNames[_wu._lower]}，${_wuxingNames[_wu._upper]}与${_wuxingNames[_wu._lower]}为${_relationNames[_rel]}关系。\n\n`;
  
  if (_changes.length > 0) {
    _res += `变爻分析：有${_changes.length}个变爻，财运有波动变化。\n`;
  }
  
  const _lucky = _rel === '_xiangsheng' || _rel === '_bihe' || _rel === '_beisheng';
  if (_lucky) {
    _res += `✓ 此卦显示财富格局较好，可能有较好的财运。建议把握机遇，稳健投资。\n`;
  } else {
    _res += `⚠ 此卦财富格局需要谨慎，注意风险控制，不宜冒进。\n`;
  }
  
  _res += `\n财富建议：\n`;
  _res += `• 保持理性，不贪不躁\n`;
  _res += `• 分散投资，降低风险\n`;
  _res += `• 勤俭持家，积累财富\n`;
  
  return _res;
}

export function _analyzeRelationship(_hex, _gender) {
  let _res = `【${_hex._name}】姻缘分析\n`;
  _res += `卦象：${_hex._symbol}\n`;
  _res += `您的性别：${_gender === 'male' ? '男' : '女'}\n\n`;
  _res += `核心含义：${_hex._core}\n`;
  _res += `卦辞：${_hex._text}\n\n`;
  
  const _wu = _hex._wuxing;
  const _rel = _wuxing[_wu._upper][_wu._lower];
  _res += `五行分析：上卦属${_wuxingNames[_wu._upper]}，下卦属${_wuxingNames[_wu._lower]}，${_wuxingNames[_wu._upper]}与${_wuxingNames[_wu._lower]}为${_relationNames[_rel]}关系。\n\n`;
  
  const _lucky = _rel === '_xiangsheng' || _rel === '_bihe';
  if (_lucky) {
    _res += `✓ 此卦显示正缘桃花运势较佳，感情发展顺利。\n`;
  } else {
    _res += `⚠ 此卦姻缘需要更多耐心和沟通，不宜急躁。\n`;
  }
  
  _res += `\n感情建议：\n`;
  _res += `• 真诚待人，相互理解\n`;
  _res += `• 把握机遇，主动出击\n`;
  _res += `• 提升自我，增强魅力\n`;
  
  return _res;
}

export function _analyzeHealth(_hex, _year, _month) {
  const _yw = ['水', '火', '木', '土', '金'][_year % 5];
  let _res = `【${_hex._name}】健康分析\n`;
  _res += `出生年五行：${_yw}\n`;
  _res += `卦象五行：上${_wuxingNames[_hex._wuxing._upper]}，下${_wuxingNames[_hex._wuxing._lower]}\n\n`;
  _res += `核心含义：${_hex._core}\n\n`;
  
  const _adv = [
    '注意劳逸结合，保持规律作息。',
    '饮食宜清淡，避免过食辛辣油腻。',
    '适当运动，增强体质。',
    '保持心情舒畅，避免过度焦虑。'
  ];
  
  _res += `健康建议：\n`;
  _adv.forEach(_a => _res += `• ${_a}\n`);
  
  return _res;
}

export function _analyzeYearly(_hex, _byear, _tyear) {
  const _zs = ['鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪'];
  const _z = _zs[(_tyear - 4) % 12];
  const _a = _tyear - _byear;
  
  let _res = `【${_tyear}年】运势分析\n`;
  _res += `生肖：${_z}，年龄：${_a}岁\n`;
  _res += `流年卦象：${_hex._name} ${_hex._symbol}\n\n`;
  _res += `核心启示：${_hex._core}\n`;
  _res += `卦辞：${_hex._text}\n\n`;
  
  const _wu = _hex._wuxing;
  const _rel = _wuxing[_wu._upper][_wu._lower];
  _res += `五行分析：上卦属${_wuxingNames[_wu._upper]}，下卦属${_wuxingNames[_wu._lower]}，${_wuxingNames[_wu._upper]}与${_wuxingNames[_wu._lower]}为${_relationNames[_rel]}关系。\n\n`;
  
  _res += `年度建议：\n`;
  if (_rel === '_xiangsheng' || _rel === '_bihe') {
    _res += `• 把握机遇，积极进取\n`;
    _res += `• 保持谦逊，避免骄傲\n`;
    _res += `• 广结善缘，积累人脉\n`;
  } else {
    _res += `• 稳扎稳打，不宜冒进\n`;
    _res += `• 积蓄力量，等待时机\n`;
    _res += `• 注意健康，保持平和\n`;
  }
  
  return _res;
}

export function _analyzeDestiny(_hex, _year, _month, _day) {
  const _sum = parseInt(_year) + parseInt(_month) + parseInt(_day);
  const _dn = _sum % 9;
  
  const _dm = [
    '一生平顺，贵人相助，晚年安乐。',
    '聪慧机敏，才华横溢，事业有成。',
    '性格坚毅，能成大事，中晚年发达。',
    '家庭美满，财运亨通，福禄双全。',
    '贵人相助，机遇不断，功成名就。',
    '一生勤勉，踏实肯干，终有所成。',
    '家庭和睦，事业稳定，生活幸福。',
    '德才兼备，受人尊敬，声名远播。',
    '财运亨通，事业顺利，心想事成。'
  ];
  
  let _res = `【命格分析】\n`;
  _res += `出生日期：${_year}年${_month}月${_day}日\n`;
  _res += `命卦：${_hex._name} ${_hex._symbol}\n\n`;
  _res += `命运解析：${_dm[_dn]}\n\n`;
  _res += `卦象启示：${_hex._core}\n\n`;
  
  const _wu = _hex._wuxing;
  const _rel = _wuxing[_wu._upper][_wu._lower];
  _res += `五行分析：上卦属${_wuxingNames[_wu._upper]}，下卦属${_wuxingNames[_wu._lower]}，${_wuxingNames[_wu._upper]}与${_wuxingNames[_wu._lower]}为${_relationNames[_rel]}关系。\n\n`;
  
  _res += `人生建议：\n`;
  _res += `• 修身养性，品德为先\n`;
  _res += `• 自强不息，把握机遇\n`;
  _res += `• 积善之家，必有余庆\n`;
  
  return _res;
}