import React from 'react';

// 메모이제이션을 통한 성능 최적화
const CardGrid = React.memo(({ cards, activeTab, expandedCard, setExpandedCard }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {cards.map(card => (
      // 카드 렌더링 로직
    ))}
  </div>
));

export default CardGrid; 