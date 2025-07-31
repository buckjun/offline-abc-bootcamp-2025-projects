#!/bin/bash

# ATELIER Virtual Fitting Studio 실행 스크립트

echo "🎨 ATELIER Virtual Fitting Studio 시작 중..."
echo "========================================"

# Python 버전 확인
python_version=$(python3 --version 2>/dev/null || python --version 2>/dev/null)
echo "Python 버전: $python_version"

# 가상환경 확인 및 생성 (선택사항)
if [ ! -d "venv" ]; then
    echo "가상환경을 생성하시겠습니까? (y/N)"
    read -r create_venv
    if [[ $create_venv =~ ^[Yy]$ ]]; then
        echo "가상환경 생성 중..."
        python3 -m venv venv 2>/dev/null || python -m venv venv
        echo "가상환경이 생성되었습니다."
        echo "가상환경을 활성화하려면 다음 명령어를 실행하세요:"
        echo "source venv/bin/activate"
    fi
fi

# 의존성 설치 확인
echo "의존성 확인 중..."
if ! pip list | grep -q Flask; then
    echo "의존성을 설치하시겠습니까? (Y/n)"
    read -r install_deps
    if [[ ! $install_deps =~ ^[Nn]$ ]]; then
        echo "의존성 설치 중..."
        pip install -r requirements.txt
    fi
fi

# static 폴더 확인
if [ ! -d "static/clothes" ]; then
    echo "⚠️  static/clothes 폴더가 없습니다. 이미지 파일을 확인해주세요."
fi

echo ""
echo "🚀 애플리케이션 시작 중..."
echo "브라우저에서 http://localhost:8080 으로 접속하세요"
echo ""
echo "종료하려면 Ctrl+C를 누르세요"
echo "========================================"

# Flask 애플리케이션 실행
python app.py
