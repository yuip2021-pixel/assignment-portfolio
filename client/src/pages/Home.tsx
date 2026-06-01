/**
 * Assignment Portfolio Home Page
 * 
 * Design Philosophy: Modern Minimalism with Playful Accents
 * - 2x2 grid layout with static assignments (top) and dynamic (bottom)
 * - Soft shadows and rounded corners for depth
 * - Staggered entrance animations
 * - Hover effects with smooth transitions
 */

import { useState } from 'react';

interface Assignment {
  id: number;
  title: string;
  description: string;
  image: string;
  type: 'static' | 'dynamic';
  order: number;
}

  const assignments: Assignment[] = [
  {
    id: 1,
    title: '과제 1',
    description: '정적 작품 - 추상화',
    image: '/assignment1.png',
    type: 'static',
    order: 1,
  },
  {
    id: 2,
    title: '과제 2',
    description: '정적 작품 - 나의 캐리커처',
    image: '/assignment2.png',
    type: 'static',
    order: 2,
  },
  {
    id: 3,
    title: '과제 3',
    description: '동적 작품 - 나의 캐리커처 움직이기',
    image: '/assignment3.gif',
    type: 'dynamic',
    order: 4,
  },
  {
    id: 4,
    title: '과제 4',
    description: '동적 작품 - 추상화 움직이기',
    image: '/assignment4.gif',
    type: 'dynamic',
    order: 3,
  },
];

// Sort assignments: static first (1,2), then dynamic (4,3)
const sortedAssignments = assignments.sort((a, b) => a.order - b.order);

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
      {/* Header Section */}
      <header className="pt-16 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            나의 과제 포트폴리오
          </h1>

        </div>
      </header>

      {/* Main Content */}
      <main className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* 2x2 Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {sortedAssignments.map((assignment) => (
              <div
                key={assignment.id}
                className="assignment-card"
                onMouseEnter={() => setHoveredCard(assignment.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden bg-gray-100 h-64 sm:h-72">
                  <img
                    src={assignment.image}
                    alt={assignment.title}
                    className="assignment-card-image"
                  />
                  {/* Type Badge */}
                  <div className="absolute top-4 right-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        assignment.type === 'static'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-purple-100 text-purple-700'
                      }`}
                    >
                      {assignment.type === 'static' ? '정적' : '동적'}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="assignment-card-content">
                  <h2 className="assignment-card-title">
                    {assignment.title}
                  </h2>
                  <p className="assignment-card-description">
                    {assignment.description}
                  </p>

                  {/* View Button */}
                  <button
                    className={`mt-4 inline-block px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      hoveredCard === assignment.id
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    자세히 보기
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Info */}
          <div className="mt-16 pt-12 border-t border-gray-200">
            <div className="text-center">
              <p
                className="text-gray-600 text-sm sm:text-base"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                모든 과제는 창의성과 기술을 바탕으로 제작되었습니다.
              </p>
              <p
                className="text-gray-500 text-xs sm:text-sm mt-2"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                © 2026 Assignment Portfolio. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
