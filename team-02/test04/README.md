# ATELIER - Virtual Fitting Studio

보그 매거진 스타일의 현대적이고 세련된 가상 피팅룸 애플리케이션입니다.

## 주요 기능

### ✨ 핵심 기능
- **가상 피팅**: 사용자 사진 업로드 후 옷을 드래그 앤 드롭으로 가상 피팅
- **룩북 저장**: 완성된 코디를 저장하고 불러오기
- **무신사 API 연동**: 실시간 패션 아이템 검색 및 추가
- **로컬 컬렉션**: 16개의 ATELIER 브랜드 의류 아이템

### 🎨 디자인 특징
- **보그 매거진 스타일**: 고급스럽고 미니멀한 디자인
- **반응형 디자인**: 모바일, 태블릿, 데스크톱 최적화
- **Google Fonts**: Playfair Display, Inter, Cormorant Garamond 폰트 사용
- **색상 팔레트**: 블랙, 화이트, 크림, 골드 조합

### 🔧 기술적 특징
- **드래그 앤 드롭**: 직관적인 옷 배치 시스템
- **리사이즈**: 마우스 휠 및 핸들로 크기 조절
- **로컬 스토리지**: 사용자 사진 및 룩북 데이터 저장
- **API 통합**: 무신사 검색 API와 로컬 데이터 하이브리드

## 설치 및 실행

### 1. 의존성 설치
```bash
pip install -r requirements.txt
```

### 2. 애플리케이션 실행
```bash
python app.py
```

### 3. 브라우저에서 접속
```
http://localhost:8080
```

## 프로젝트 구조

```
test04/
├── app.py                 # Flask 메인 애플리케이션
├── requirements.txt       # Python 의존성
├── README.md             # 프로젝트 설명서
├── templates/
│   └── fitting_room.html # 메인 HTML 파일
└── static/
    └── clothes/          # 의류 이미지 폴더
        ├── white_shirt.png
        ├── blue_tshirt.png
        ├── classic_jeans.png
        ├── summer_dress.png
        └── leather_jacket.png
```

## API 엔드포인트

### `/api/musinsa-search`
무신사 상품 검색
- **Parameters**: `keyword`, `page`, `size`
- **Response**: JSON 형태의 상품 데이터

### `/api/clothes`
로컬 의류 데이터
- **Parameters**: `category`, `search`, `page`, `per_page`
- **Response**: JSON 형태의 의류 데이터

## 사용 방법

1. **사진 업로드**: "Upload Photo" 버튼으로 전신 사진 업로드
2. **옷 선택**: 컬렉션에서 원하는 의류 클릭
3. **가상 피팅**: 드래그로 위치 조정, 휠로 크기 조정
4. **무신사 검색**: 키워드로 추가 의류 검색
5. **룩북 저장**: "Save Look" 버튼으로 코디 저장

## 기술 스택

- **Backend**: Flask 2.3.3
- **Frontend**: Vanilla JavaScript, CSS Grid, HTML5
- **API**: Musinsa REST API
- **Storage**: Browser LocalStorage
- **Fonts**: Google Fonts
- **Icons**: Unicode Emoji

## 브라우저 호환성

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 개발 정보

- **개발 환경**: Python 3.8+
- **포트**: 8080 (기본값)
- **디버그 모드**: 개발 시 활성화

## 라이센스

이 프로젝트는 교육 목적으로 개발되었습니다.
