import { _tossCoins, _getHexagramFromLines, _cycleHexagram } from './utils/divination.js';
import {
  _analyzeCareer,
  _analyzeWealth,
  _analyzeRelationship,
  _analyzeHealth,
  _analyzeYearly,
  _analyzeDestiny
} from './modules/analyzer.js';

function showSection(sectionId) {
  document.querySelectorAll('.section').forEach(section => {
    section.classList.remove('active');
  });
  document.querySelectorAll('.nav a').forEach(link => {
    link.classList.remove('nav-active');
  });
  document.getElementById(sectionId).classList.add('active');
  event.target?.classList.add('nav-active');
}

function startDivination() {
  const question = document.getElementById('div-question').value;
  if (!question.trim()) {
    alert('请先输入您想询问的问题');
    return;
  }

  const coins = document.querySelectorAll('.coin');
  coins.forEach(coin => coin.classList.add('shaking'));
  document.getElementById('result-area').style.display = 'none';

  setTimeout(() => {
    coins.forEach(coin => coin.classList.remove('shaking'));
    const lines = _tossCoins();
    const result = _getHexagramFromLines(lines);
    displayDivinationResult(result._hexagram, result._changes, question);
  }, 3000);
}

function displayDivinationResult(hex, changes, question) {
  document.getElementById('result-hexagram').textContent = hex._symbol;
  document.getElementById('hexagram-name').textContent = `${hex._num}、${hex._name} (${hex._pinyin})`;
  document.getElementById('hexagram-meaning').textContent = hex._meaning;

  let interpretation = `<p><strong>您的问题：</strong>${question}</p>`;
  interpretation += `<p><strong>卦辞：</strong>${hex._text}</p>`;
  interpretation += `<p><strong>象曰：</strong>${hex._xiang}</p>`;
  interpretation += `<p><strong>核心含义：</strong>${hex._core}</p>`;

  if (changes.length > 0) {
    interpretation += `<p><strong>变爻分析（共${changes.length}个）：</strong></p><ul>`;
    changes.forEach(c => {
      interpretation += `<li>${hex._yaoci[c]}</li>`;
    });
    interpretation += `</ul>`;
  }

  document.getElementById('interpretation').innerHTML = interpretation;
  document.getElementById('result-area').style.display = 'block';
  saveReading('divination', { question, hex, changes, timestamp: new Date().toISOString() });
}

function calculateCareer() {
  const year = document.getElementById('career-year').value;
  const question = document.getElementById('career-question').value;

  if (!year || !question.trim()) {
    alert('请填写完整信息');
    return;
  }

  const lines = _tossCoins();
  const result = _getHexagramFromLines(lines);
  const analysis = _analyzeCareer(result._hexagram, result._changes);
  document.getElementById('career-result').innerHTML = `<pre style="white-space: pre-wrap; font-family: inherit;">${analysis}</pre>`;
  saveReading('career', { year, question, hex: result._hexagram, changes: result._changes, timestamp: new Date().toISOString() });
}

function calculateWealth() {
  const year = document.getElementById('wealth-year').value;
  const question = document.getElementById('wealth-question').value;

  if (!year || !question.trim()) {
    alert('请填写完整信息');
    return;
  }

  const lines = _tossCoins();
  const result = _getHexagramFromLines(lines);
  const analysis = _analyzeWealth(result._hexagram, result._changes);
  document.getElementById('wealth-result').innerHTML = `<pre style="white-space: pre-wrap; font-family: inherit;">${analysis}</pre>`;
  saveReading('wealth', { year, question, hex: result._hexagram, changes: result._changes, timestamp: new Date().toISOString() });
}

function calculateRelationship() {
  const gender = document.getElementById('rel-gender').value;
  const year = document.getElementById('rel-year').value;
  const question = document.getElementById('rel-question').value;

  if (!year || !question.trim()) {
    alert('请填写完整信息');
    return;
  }

  const lines = _tossCoins();
  const result = _getHexagramFromLines(lines);
  const analysis = _analyzeRelationship(result._hexagram, gender);
  document.getElementById('rel-result').innerHTML = `<pre style="white-space: pre-wrap; font-family: inherit;">${analysis}</pre>`;
  saveReading('relationship', { gender, year, question, hex: result._hexagram, changes: result._changes, timestamp: new Date().toISOString() });
}

function calculateHealth() {
  const year = document.getElementById('health-year').value;
  const month = document.getElementById('health-month').value;

  if (!year || !month) {
    alert('请填写完整信息');
    return;
  }

  const lines = _tossCoins();
  const result = _getHexagramFromLines(lines);
  const analysis = _analyzeHealth(result._hexagram, year, month);
  document.getElementById('health-result').innerHTML = `<pre style="white-space: pre-wrap; font-family: inherit;">${analysis}</pre>`;
  saveReading('health', { year, month, hex: result._hexagram, changes: result._changes, timestamp: new Date().toISOString() });
}

function calculateYearly() {
  const birthYear = document.getElementById('yearly-year').value;
  const targetYear = document.getElementById('target-year').value || new Date().getFullYear();

  if (!birthYear) {
    alert('请填写出生年份');
    return;
  }

  const lines = _tossCoins();
  const result = _getHexagramFromLines(lines);
  const analysis = _analyzeYearly(result._hexagram, birthYear, targetYear);
  document.getElementById('yearly-result').innerHTML = `<pre style="white-space: pre-wrap; font-family: inherit;">${analysis}</pre>`;
  saveReading('yearly', { birthYear, targetYear, hex: result._hexagram, changes: result._changes, timestamp: new Date().toISOString() });
}

function calculateDestiny() {
  const year = document.getElementById('lifetime-year').value;
  const month = document.getElementById('lifetime-month').value;
  const day = document.getElementById('lifetime-day').value;

  if (!year || !month || !day) {
    alert('请填写完整信息');
    return;
  }

  const lines = _tossCoins();
  const result = _getHexagramFromLines(lines);
  const analysis = _analyzeDestiny(result._hexagram, year, month, day);
  document.getElementById('lifetime-result').innerHTML = `<pre style="white-space: pre-wrap; font-family: inherit;">${analysis}</pre>`;
  saveReading('lifetime', { year, month, day, hex: result._hexagram, changes: result._changes, timestamp: new Date().toISOString() });
}

function saveReading(type, data) {
  const readings = JSON.parse(localStorage.getItem('zhouyi_readings') || '[]');
  readings.push({ type, ...data });
  localStorage.setItem('zhouyi_readings', JSON.stringify(readings));
}

(function() {
  'use strict';

  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    return false;
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'F12') {
      e.preventDefault();
      return false;
    }
    if (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key.toUpperCase())) {
      e.preventDefault();
      return false;
    }
    if (e.ctrlKey && e.key.toUpperCase() === 'U') {
      e.preventDefault();
      return false;
    }
    if (e.ctrlKey && e.key.toUpperCase() === 'S') {
      e.preventDefault();
      return false;
    }
  });

function showQuote(index) {
  const cards = document.querySelectorAll('.quote-card');
  const indicators = document.querySelectorAll('.indicator');
  
  cards.forEach((card, i) => {
    card.classList.remove('active');
    indicators[i].classList.remove('active');
  });
  
  cards[index].classList.add('active');
  indicators[index].classList.add('active');
}

function startQuoteCarousel() {
  let currentIndex = 0;
  const totalQuotes = document.querySelectorAll('.quote-card').length;
  
  setInterval(() => {
    currentIndex = (currentIndex + 1) % totalQuotes;
    showQuote(currentIndex);
  }, 6000);
}

  window.showSection = showSection;
  window.startDivination = startDivination;
  window.calculateCareer = calculateCareer;
  window.calculateWealth = calculateWealth;
  window.calculateRelationship = calculateRelationship;
  window.calculateHealth = calculateHealth;
  window.calculateYearly = calculateYearly;
  window.calculateDestiny = calculateDestiny;
  window.showQuote = showQuote;

  document.addEventListener('DOMContentLoaded', function() {
    const homeHex = document.getElementById('home-hexagram');
    if (homeHex) {
      const currentHex = _cycleHexagram();
      homeHex.textContent = currentHex._symbol;
      setInterval(() => {
        const hex = _cycleHexagram();
        homeHex.textContent = hex._symbol;
      }, 3000);
    }
    
    startQuoteCarousel();
  });
})();
