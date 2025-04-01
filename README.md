# 여기가봤어? (Have You Been Here?)

'여기가봤어?'는 사용자가 다녀온 여행을 기록하는 인터랙티브 웹 서비스입니다. SVG 기반의 대한민국 지도를 통해 사용자가 방문한 지역을 클릭하여 기록을 남기고, 기록이 쌓일수록 해당 지역의 색상이 진하게 표시되는 시각적 피드백을 제공합니다.

## 📌 주요 기능

- **인터랙티브 지도**: SVG 기반의 대한민국 지도로 각 행정구역별 클릭 가능
- **지역별 기록 관리**: 각 지역을 클릭하여 관련 여행 기록을 저장하고 확인
- **시각적 피드백**: 기록 수에 따라 지역 색상 강도가 변경됨
- **사용자 인증**: Firebase 기반 이메일/비밀번호 로그인 및 회원가입

## 🛠️ 기술 스택

- **프론트엔드**: Vue 3, Vue Router, Pinia (상태 관리)
- **스타일링**: TailwindCSS
- **백엔드/인증**: Firebase Authentication, Firestore Database
- **배포**: Vercel

## 🔍 프로젝트 구조

```
src/
├── components/          # 재사용 가능한 컴포넌트
│   ├── MapBox.vue       # 인터랙티브 지도 컴포넌트
│   ├── NavBar.vue       # 네비게이션 바
│   ├── buttons/         # 버튼 컴포넌트
│   ├── icons/           # 아이콘 컴포넌트
│   └── modals/          # 모달 컴포넌트 (로그인, 등록, 지역 정보)
├── firebase.js          # Firebase 설정
├── router/              # Vue Router 설정
├── stores/              # Pinia 스토어
│   └── user.js          # 사용자 및 지역 데이터 관리
└── views/               # 페이지 컴포넌트
    └── HomeView.vue     # 메인 페이지
```

## 🚀 시작하기

### 사전 요구사항

- Node.js (v14 이상)
- npm 또는 yarn
- Firebase 계정 및 프로젝트

### 설치 및 설정

1. 저장소 클론하기
   ```bash
   git clone https://github.com/yourusername/haveyoubeenhere.git
   cd haveyoubeenhere
   ```

2. 의존성 설치
   ```bash
   npm install
   # 또는
   yarn install
   ```

3. Firebase 설정
   - Firebase 콘솔에서 새 프로젝트 생성
   - Authentication 및 Firestore Database 활성화
   - 웹 앱 등록 후 환경 변수 설정

4. 환경 변수 설정
   - 프로젝트 루트에 `.env.local` 파일 생성
   ```
   VITE_APP_API_KEY=your-api-key
   VITE_APP_AUTH_DOMAIN=your-auth-domain
   VITE_APP_PROJECT_ID=your-project-id
   VITE_APP_STORAGE_BUCKET=your-storage-bucket
   VITE_APP_MESSAGING_SENDER_ID=your-messaging-sender-id
   VITE_APP_APP_ID=your-app-id
   VITE_APP_MEASUREMENT_ID=your-measurement-id
   ```

5. 개발 서버 실행
   ```bash
   npm run dev
   # 또는
   yarn dev
   ```

6. 빌드
   ```bash
   npm run build
   # 또는
   yarn build
   ```

## 💡 구현 특징

- **반응형 디자인**: 다양한 화면 크기에 맞게 최적화된 UI
- **모듈화된 컴포넌트**: 재사용 가능한 버튼, 모달 등으로 구성
- **상태 관리**: Pinia를 활용한 효율적인 상태 관리
- **실시간 데이터 동기화**: Firestore를 활용한 실시간 데이터 업데이트

## 📝 추가 개발 계획

- [ ] 사용자 프로필 페이지 추가
- [ ] 소셜 로그인 지원
- [ ] 지역별 여행 통계 제공
- [ ] 사용자 간 여행 경험 공유 기능

## 📄 라이선스

MIT 라이선스

## 👨‍💻 개발자

이 프로젝트는 TailwindCSS 학습 목적으로 개발되었습니다.
