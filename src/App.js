import React, { useState } from 'react';
import ImpeachmentVisualizer from './components/ImpeachmentVisualizer';
import './App.css';

function App() {
  const [impeachmentData] = useState({
    title: '대한민국 탄핵 시각화',
    description: '대한민국 탄핵 과정을 시각적으로 보여주는 애플리케이션입니다.',
    cases: [
      {
        id: 1,
        title: '노무현 대통령 탄핵',
        year: 2004,
        description: '2004년 국회의 탄핵 소추안 가결 후 헌법재판소에서 기각됨',
        result: '기각',
        votes: {
          for: 193,
          against: 2,
          abstain: 0
        }
      },
      {
        id: 2,
        title: '박근혜 대통령 탄핵',
        year: 2016,
        description: '2016년 국회의 탄핵 소추안 가결 후 헌법재판소에서 인용됨',
        result: '인용',
        votes: {
          for: 234,
          against: 56,
          abstain: 2
        }
      }
    ]
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>{impeachmentData.title}</h1>
        <p>{impeachmentData.description}</p>
      </header>
      <main>
        <ImpeachmentVisualizer cases={impeachmentData.cases} />
      </main>
      <footer>
        <p>© 2025 탄핵 시각화 프로젝트</p>
      </footer>
    </div>
  );
}

export default App; 