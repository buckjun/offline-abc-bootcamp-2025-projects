# ATELIER Virtual Fitting Studio - Quick Start

## 빠른 시작 가이드

### 1단계: 의존성 설치
```bash
cd team-02/test04
pip install -r requirements.txt
```

### 2단계: 애플리케이션 실행
```bash
python app.py
```
또는
```bash
./run.sh
```

### 3단계: 브라우저 접속
http://localhost:8080

---

## 주요 파일 설명

- `app.py`: Flask 서버 (포트 8080)
- `templates/fitting_room.html`: 메인 웹페이지
- `static/clothes/`: 의류 이미지 폴더
- `requirements.txt`: Python 의존성 목록

## 기능 테스트

1. **사진 업로드**: Upload Photo 버튼으로 이미지 업로드
2. **컬렉션 탐색**: 오른쪽 패널에서 의류 아이템 클릭
3. **무신사 검색**: 검색창에 "티셔츠" 입력 후 Search 클릭
4. **가상 피팅**: 드래그로 위치 조정, 마우스 휠로 크기 조정
5. **룩북 저장**: Save Look 버튼으로 코디 저장

## 문제 해결

### 포트 8080이 이미 사용 중인 경우
app.py 마지막 줄을 다음과 같이 수정:
```python
app.run(debug=True, port=8081)
```

### 이미지가 표시되지 않는 경우
static/clothes/ 폴더에 이미지 파일들이 있는지 확인

### 무신사 검색이 작동하지 않는 경우
네트워크 연결을 확인하거나 샘플 데이터가 표시됩니다.
