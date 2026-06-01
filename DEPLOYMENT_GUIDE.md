# 과제 포트폴리오 웹사이트 - GitHub Pages 배포 가이드

## 📋 개요

이 웹사이트는 과제 1~4를 2x2 그리드 구조로 전시하는 포트폴리오 사이트입니다. 모든 과제가 웹사이트에 직접 임베드되어 있어 별도의 링크 클릭 없이 바로 확인할 수 있습니다.

---

## 🎨 디자인 특징

### 레이아웃
- **2x2 그리드 구조**: 정적 작품(좌상단, 우상단) → 동적 작품(좌하단, 우하단)
- **배치 순서**:
  - 좌상단: 과제 1 (정적 - 분홍색 꽃)
  - 우상단: 과제 2 (정적 - 안경 쓴 인물)
  - 좌하단: 과제 4 (동적 - 움직이는 꽃)
  - 우하단: 과제 3 (동적 - 애니메이션 인물)

### 시각적 특징
- **Modern Minimalism**: 부드러운 그림자와 라운드 코너로 현대적 감각 표현
- **타이포그래피**: Poppins(제목) + Inter(본문) 조합으로 명확한 계층 구조
- **애니메이션**: 
  - 페이지 로드 시 카드가 순차적으로 나타남 (스태거드 애니메이션)
  - 호버 시 카드가 부드럽게 올라오는 효과
  - 모든 전환은 300ms 이내의 부드러운 ease-out 곡선 사용

### 색상 팔레트
- **배경**: 따뜻한 크림색 그래디언트 (amber-50 → orange-50 → rose-50)
- **카드**: 순백색 (높은 명도 대비로 가독성 확보)
- **텍스트**: 진한 슬레이트 그레이 (gray-900)
- **배지**: 정적(파란색), 동적(보라색)

---

## 📦 핵심 기술 스택

### HTML/CSS/JavaScript
- **React 19**: 컴포넌트 기반 UI 구성
- **Tailwind CSS 4**: 유틸리티 기반 스타일링
- **CSS 애니메이션**: `@keyframes fadeInUp`으로 스태거드 진입 효과
- **Hover 상태 관리**: React `useState`로 호버 카드 추적

### 주요 코드 구조

#### Home.tsx
```tsx
// 과제 데이터 정의
const assignments: Assignment[] = [
  { id: 1, title: '과제 1', image: '/assignment1.png', type: 'static', order: 1 },
  { id: 2, title: '과제 2', image: '/assignment2.png', type: 'static', order: 2 },
  { id: 3, title: '과제 3', image: '/assignment3.gif', type: 'dynamic', order: 4 },
  { id: 4, title: '과제 4', image: '/assignment4.gif', type: 'dynamic', order: 3 },
];

// 2x2 그리드로 렌더링
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {sortedAssignments.map((assignment) => (
    <div className="assignment-card">...</div>
  ))}
</div>
```

#### index.css
```css
/* 카드 기본 스타일 */
.assignment-card {
  @apply relative bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 ease-out cursor-pointer;
  animation: fadeInUp 0.6s ease-out forwards;
}

/* 호버 효과 */
.assignment-card:hover {
  @apply shadow-2xl;
  transform: translateY(-8px) scale(1.02);
}

/* 스태거드 애니메이션 */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.assignment-card:nth-child(1) { animation-delay: 0ms; }
.assignment-card:nth-child(2) { animation-delay: 80ms; }
.assignment-card:nth-child(3) { animation-delay: 160ms; }
.assignment-card:nth-child(4) { animation-delay: 240ms; }
```

---

## 🚀 GitHub Pages 배포 방법

### 1단계: GitHub 저장소 생성
1. GitHub에 로그인하여 새 저장소 생성
2. 저장소 이름: `assignment-portfolio` (또는 원하는 이름)
3. Public으로 설정

### 2단계: 로컬 환경에서 빌드
```bash
# 프로젝트 디렉토리로 이동
cd /home/ubuntu/assignment-portfolio

# 의존성 설치
pnpm install

# 프로덕션 빌드
pnpm build

# 빌드 결과는 dist/ 디렉토리에 생성됨
```

### 3단계: GitHub에 푸시
```bash
# Git 초기화 (처음만)
git init
git add .
git commit -m "Initial commit: Assignment Portfolio"

# 원격 저장소 추가
git remote add origin https://github.com/YOUR_USERNAME/assignment-portfolio.git

# 메인 브랜치로 푸시
git branch -M main
git push -u origin main
```

### 4단계: GitHub Pages 설정
1. GitHub 저장소의 Settings 탭 이동
2. 좌측 메뉴에서 "Pages" 선택
3. "Build and deployment" 섹션에서:
   - Source: "Deploy from a branch" 선택
   - Branch: "main" 선택, 폴더: "/(root)" 선택
4. Save 클릭

### 5단계: 배포 확인
- GitHub Pages URL: `https://YOUR_USERNAME.github.io/assignment-portfolio/`
- 약 1-2분 후 웹사이트 접속 가능

---

## 📝 제출 정보

### 제출 파일
- **GitHub Pages URL**: `https://YOUR_USERNAME.github.io/assignment-portfolio/`

### 코멘트 (간략)
```
2x2 그리드 레이아웃으로 정적 작품(과제 1, 2)과 동적 작품(과제 3, 4)을 전시합니다.
Modern Minimalism 디자인 철학을 적용하여 부드러운 그림자, 라운드 코너, 스태거드 애니메이션으로 심미성을 강화했습니다.
Poppins와 Inter 폰트로 명확한 타이포그래피 계층 구조를 구성했습니다.
```

### 사용한 핵심 기술

#### HTML/CSS
- **Tailwind CSS 4**: 반응형 2x2 그리드 레이아웃 (`grid-cols-1 md:grid-cols-2`)
- **CSS 애니메이션**: `@keyframes fadeInUp`으로 스태거드 진입 효과
- **CSS 변수**: `--font-display`, `--font-body`로 타이포그래피 토큰 관리
- **Hover 상태**: `transition-all duration-300 ease-out`으로 부드러운 전환

#### JavaScript/React
- **React 19**: 함수형 컴포넌트로 UI 구성
- **useState Hook**: 호버 상태 관리 (`hoveredCard` 상태)
- **Array.map()**: 과제 데이터를 동적으로 카드로 렌더링
- **조건부 렌더링**: 정적/동적 배지 표시

#### AI 활용 (선택사항)
- 디자인 철학 및 레이아웃 구조 기획
- 타이포그래피 및 색상 팔레트 선정
- 애니메이션 타이밍 및 곡선 최적화

---

## 🎯 요구사항 충족 확인

✅ **정적/동적 작품 직접 확인**: 모든 과제가 웹사이트에 임베드되어 있음  
✅ **2행 2열 구조**: 정적 → 동적 순으로 배치 완료  
✅ **심미성**: Modern Minimalism 디자인, 애니메이션, 타이포그래피 적용  
✅ **링크 없음**: 각 과제를 별도로 열 필요 없음 (0점 방지)  
✅ **작동 확인**: 모든 이미지/GIF가 정상 표시됨  

---

## 🔧 커스터마이징 팁

### 색상 변경
`client/src/index.css`의 `:root` 섹션에서 OKLCH 색상값 수정

### 폰트 변경
`client/index.html`의 Google Fonts 링크 수정

### 애니메이션 속도 조정
`client/src/index.css`의 `animation-delay` 값 수정

### 카드 크기 조정
`client/src/pages/Home.tsx`의 `h-64 sm:h-72` 클래스 수정

---

## ✨ 추가 개선 사항 (선택사항)

1. **각 과제별 상세 페이지**: 클릭 시 과제에 대한 설명 페이지로 이동
2. **다크 모드**: ThemeProvider를 활용한 다크/라이트 테마 전환
3. **스크롤 애니메이션**: Intersection Observer로 스크롤 시 카드 나타나기
4. **필터링**: 정적/동적 작품 필터링 기능
5. **소셜 공유**: 포트폴리오 링크 공유 버튼

---

## 📞 문제 해결

### 이미지가 표시되지 않음
- `client/public/` 디렉토리에 `assignment1.png`, `assignment2.png`, `assignment3.gif`, `assignment4.gif` 파일 확인
- 파일명이 정확한지 확인 (대소문자 구분)

### 스타일이 적용되지 않음
- `pnpm build` 후 다시 배포
- 브라우저 캐시 삭제 (Ctrl+Shift+Delete)

### GitHub Pages에 배포되지 않음
- Repository Settings → Pages → Source가 "main" 브랜치로 설정되어 있는지 확인
- 약 1-2분 대기 후 재확인

---

## 📄 라이선스

MIT License - 자유롭게 사용, 수정, 배포 가능

---

**제작일**: 2026년 6월 1일  
**버전**: 1.0.0
