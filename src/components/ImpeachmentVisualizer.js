import React, { useState } from 'react';

const ImpeachmentVisualizer = ({ cases }) => {
  const [expandedCase, setExpandedCase] = useState(null);

  const toggleExpand = (id) => {
    setExpandedCase(expandedCase === id ? null : id);
  };

  const renderVoteBar = (votes) => {
    const total = votes.for + votes.against + votes.abstain;
    const forPercent = (votes.for / total) * 100;
    const againstPercent = (votes.against / total) * 100;
    const abstainPercent = (votes.abstain / total) * 100;

    return (
      <div className="mt-4">
        <p className="font-bold mb-2">투표 결과:</p>
        <div className="w-full h-8 flex rounded-lg overflow-hidden">
          <div 
            className="bg-green-500 flex items-center justify-center text-white text-xs"
            style={{ width: `${forPercent}%` }}
          >
            찬성: {votes.for}
          </div>
          <div 
            className="bg-red-500 flex items-center justify-center text-white text-xs"
            style={{ width: `${againstPercent}%` }}
          >
            반대: {votes.against}
          </div>
          <div 
            className="bg-gray-400 flex items-center justify-center text-white text-xs"
            style={{ width: `${abstainPercent}%` }}
          >
            기권: {votes.abstain}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {cases.map((impeachmentCase) => (
        <div 
          key={impeachmentCase.id}
          className={`p-4 border rounded-lg shadow-md transition-all duration-300 ${
            expandedCase === impeachmentCase.id ? 'md:col-span-2 bg-blue-50' : 'bg-white'
          }`}
          onClick={() => toggleExpand(impeachmentCase.id)}
        >
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">{impeachmentCase.title}</h2>
            <span className={`px-3 py-1 rounded-full text-sm ${
              impeachmentCase.result === '인용' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
            }`}>
              {impeachmentCase.result}
            </span>
          </div>
          
          <p className="text-gray-700 mt-2">{impeachmentCase.year}</p>
          <p className="mt-2">{impeachmentCase.description}</p>
          
          {renderVoteBar(impeachmentCase.votes)}
          
          {expandedCase === impeachmentCase.id && (
            <div className="mt-4 p-4 bg-white rounded-lg">
              <h3 className="font-bold text-lg mb-2">상세 정보</h3>
              <p>탄핵 소추안 표결일: {impeachmentCase.year}</p>
              <p>투표 총원: {impeachmentCase.votes.for + impeachmentCase.votes.against + impeachmentCase.votes.abstain}명</p>
              <p>탄핵 결과: {impeachmentCase.result}</p>
              <p className="italic text-sm mt-4">
                * 클릭하여 상세 정보를 닫을 수 있습니다.
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ImpeachmentVisualizer; 