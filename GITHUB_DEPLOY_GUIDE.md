# GitHub Pages 배포 완벽 가이드

이 가이드를 따라 하면 5분 안에 나의 포트폴리오 웹사이트를 GitHub Pages에 배포할 수 있습니다.

---

## 📋 필수 준비물

- GitHub 계정 (없으면 https://github.com/signup 에서 무료 가입)
- Git 설치 (대부분의 컴퓨터에 이미 설치됨)

---

## 🚀 배포 단계 (5단계)

### 1단계: GitHub에서 새 저장소 생성

1. GitHub에 로그인 (https://github.com)
2. 우측 상단의 **+** 아이콘 클릭 → **New repository** 선택
3. 저장소 설정:
   - **Repository name**: `assignment-portfolio` (또는 원하는 이름)
   - **Description**: `나의 과제 포트폴리오` (선택사항)
   - **Public** 선택 (중요!)
   - **Add a README file** 체크 해제
4. **Create repository** 클릭

**결과**: GitHub 저장소 생성 완료
- 저장소 URL 형식: `https://github.com/YOUR_USERNAME/assignment-portfolio`

---

### 2단계: 로컬 컴퓨터에서 프로젝트 빌드

터미널/명령 프롬프트를 열고 다음 명령어를 실행합니다:

```bash
# 프로젝트 디렉토리로 이동
cd /home/ubuntu/assignment-portfolio

# 의존성 설치 (처음만)
pnpm install

# 프로덕션 빌드 생성
pnpm build
```

**결과**: `dist/` 폴더에 배포할 파일들이 생성됨

---

### 3단계: Git 설정 및 GitHub에 푸시

터미널에서 계속 다음 명령어를 실행합니다:

```bash
# 프로젝트 디렉토리에서 Git 초기화
git init

# 모든 파일을 Git에 추가
git add .

# 첫 번째 커밋 생성
git commit -m "Initial commit: Assignment Portfolio"

# 원격 저장소 추가 (YOUR_USERNAME을 자신의 GitHub 사용자명으로 변경)
git remote add origin https://github.com/YOUR_USERNAME/assignment-portfolio.git

# 메인 브랜치 이름 변경
git branch -M main

# GitHub에 푸시
git push -u origin main
```

**주의**: `YOUR_USERNAME`을 자신의 GitHub 사용자명으로 바꾸세요!

**예시**:
```bash
git remote add origin https://github.com/john-doe/assignment-portfolio.git
```

**결과**: 모든 파일이 GitHub에 업로드됨

---

### 4단계: GitHub Pages 설정

1. GitHub 저장소 페이지에서 **Settings** 탭 클릭
2. 좌측 메뉴에서 **Pages** 클릭
3. **Build and deployment** 섹션에서:
   - **Source**: "Deploy from a branch" 선택
   - **Branch**: "main" 선택
   - **Folder**: "/(root)" 선택
4. **Save** 클릭

**결과**: GitHub Pages 배포 시작 (1-2분 소요)

---

### 5단계: 배포 확인

1. GitHub 저장소 페이지의 **Settings** → **Pages** 다시 방문
2. 상단에 다음과 같은 메시지 확인:
   ```
   Your site is live at https://YOUR_USERNAME.github.io/assignment-portfolio/
   ```

3. 링크를 클릭하여 웹사이트 확인

**축하합니다! 배포 완료!** 🎉

---

## 📝 제출 정보

### 제출할 URL
```
https://YOUR_USERNAME.github.io/assignment-portfolio/
```

### 코멘트 (간략)
```
2x2 그리드 레이아웃으로 정적 작품(과제 1, 2)과 동적 작품(과제 3, 4)을 전시합니다.
Modern Minimalism 디자인 철학을 적용하여 부드러운 그림자, 라운드 코너, 스태거드 애니메이션으로 심미성을 강화했습니다.
Poppins와 Inter 폰트로 명확한 타이포그래피 계층 구조를 구성했습니다.
```

### 사용한 핵심 기술

**HTML/CSS**:
- Tailwind CSS 4로 반응형 2x2 그리드 레이아웃 구현
- CSS 애니메이션(`@keyframes fadeInUp`)으로 스태거드 진입 효과
- CSS 변수로 타이포그래피 토큰 관리
- 300ms ease-out 전환으로 부드러운 호버 효과

**JavaScript/React**:
- React 19 함수형 컴포넌트로 UI 구성
- useState Hook으로 호버 상태 관리
- Array.map()으로 과제 데이터 동적 렌더링
- 조건부 렌더링으로 정적/동적 배지 표시

---

## 🔧 문제 해결

### Q: "git command not found" 오류
**A**: Git이 설치되지 않았습니다. 다음에서 설치하세요:
- Windows: https://git-scm.com/download/win
- Mac: `brew install git`
- Linux: `sudo apt-get install git`

### Q: "Permission denied" 오류
**A**: SSH 키 설정이 필요합니다. 대신 HTTPS 사용:
```bash
git remote set-url origin https://github.com/YOUR_USERNAME/assignment-portfolio.git
```

### Q: 웹사이트가 표시되지 않음
**A**: 다음을 확인하세요:
1. 저장소가 **Public**으로 설정되어 있는가?
2. GitHub Pages가 **main** 브랜치에서 배포되도록 설정되어 있는가?
3. 1-2분 대기 후 페이지 새로고침 (Ctrl+F5)

### Q: 이미지가 표시되지 않음
**A**: `dist/` 폴더의 이미지 파일을 확인하세요:
```bash
ls -la dist/assignment*.{png,gif}
```

### Q: 변경사항을 업데이트하고 싶음
**A**: 다음 명령어로 다시 배포:
```bash
pnpm build
git add .
git commit -m "Update: [변경 내용]"
git push origin main
```

---

## 💡 추가 팁

### 커스텀 도메인 사용 (선택사항)
1. 도메인 구매 (GoDaddy, Namecheap 등)
2. GitHub Pages Settings → Custom domain에 도메인 입력
3. 도메인 DNS 설정 (제공자의 가이드 참조)

### 로컬에서 미리보기
배포 전에 로컬에서 확인하고 싶다면:
```bash
pnpm preview
```
그 후 http://localhost:4173 에서 확인

### 자동 배포 (GitHub Actions)
변경사항을 push할 때마다 자동으로 배포하려면:
- `.github/workflows/deploy.yml` 파일 생성 (고급 설정)

---

## ✅ 배포 체크리스트

- [ ] GitHub 계정 생성
- [ ] 새 저장소 생성 (`assignment-portfolio`)
- [ ] 저장소를 **Public**으로 설정
- [ ] `pnpm install` 실행
- [ ] `pnpm build` 실행
- [ ] `git init` 및 `git add .` 실행
- [ ] `git commit -m "Initial commit"` 실행
- [ ] `git remote add origin` 실행 (YOUR_USERNAME 변경)
- [ ] `git push -u origin main` 실행
- [ ] GitHub Pages 설정 완료
- [ ] 배포 URL 확인 및 테스트
- [ ] 제출 URL 복사: `https://YOUR_USERNAME.github.io/assignment-portfolio/`

---

## 🎉 완료!

모든 단계를 따랐다면 이제 나의 포트폴리오 웹사이트가 GitHub Pages에 배포되었습니다!

**제출할 URL**: `https://YOUR_USERNAME.github.io/assignment-portfolio/`

이 URL을 과제 제출 시스템에 제출하면 됩니다.

---

**배포 완료 시간**: 약 5분  
**배포 비용**: 무료 (GitHub Pages는 공개 저장소에서 무료)  
**유지보수**: 자동 (GitHub Pages가 자동으로 호스팅)

행운을 빕니다! 🚀
