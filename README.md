# Front-back-connection-study - ReactとJavaによるフロント・バック連携学習プロジェクト

## 概要
このプロジェクトは、フロントエンドとバックエンドの基本的な連携構造を学習するために作成されました。  
Reactで構築されたシンプルなユーザーインターフェースと、Javaで作られたバックエンドアプリケーションが、HTTP通信を通じて連携する動作を確認できます。

## 主な機能
- Reactによるフォーム入力・送信  
- Javaバックエンドによるリクエスト受信とレスポンス返却  
- HTTP通信（GET / POST）の基本挙動確認  

## 使用技術スタック
- **フロントエンド**
  - React
  - JavaScript
  - HTML, CSS
- **バックエンド**
  - Java
- **その他**
  - GitHub

## プロジェクト構成

Front-back-connection-study  
├── prac // Javaバックエンドプロジェクト  
│   └── src  
│       └── Main.java // エントリーポイント  
├── react_p // Reactフロントエンドプロジェクト  
│   ├── public  
│   └── src  
│       ├── App.js // メインアプリケーションコンポーネント  
│       └── ... // 他のReactコンポーネント  

## 起動方法
1. このリポジトリをクローン  
2. `react_p` ディレクトリで `npm install` → `npm start` を実行  
3. `prac/src/Main.java` をJava対応IDEで起動

## 注意事項
- このプロジェクトは学習目的で作成されており、セキュリティや例外処理などは簡略化されています。  
- 実際のサービス適用には追加の構造整理と保守設計が必要です。



# Front-back-connection-study - React와 Java 기반의 프론트-백엔드 연동 학습 프로젝트

## 개요
이 프로젝트는 프론트엔드와 백엔드 간의 기본 연동 구조를 학습하기 위해 제작되었습니다.  
React로 구성된 간단한 사용자 인터페이스와 Java로 작성된 백엔드 애플리케이션이 HTTP 통신을 통해 연결되는 동작을 직접 확인할 수 있습니다.

## 주요 기능
- React 기반의 폼 입력 및 전송  
- Java 백엔드의 요청 수신 및 응답 처리  
- HTTP 통신(GET / POST)의 기본 동작 확인  

## 사용 기술 스택
- **프론트엔드**
  - React
  - JavaScript
  - HTML, CSS
- **백엔드**
  - Java
- **기타**
  - GitHub

## 프로젝트 구조

Front-back-connection-study  
├── prac // Java 백엔드 프로젝트  
│   └── src  
│       └── Main.java // 진입점(Main 클래스)  
├── react_p // React 프론트엔드 프로젝트  
│   ├── public  
│   └── src  
│       ├── App.js // 메인 애플리케이션 컴포넌트  
│       └── ... // 기타 React 컴포넌트  

## 실행 방법
1. 해당 저장소를 클론  
2. `react_p` 디렉토리에서 `npm install` → `npm start` 실행  
3. `prac/src/Main.java` 파일을 Java 지원 IDE에서 실행  

## 참고 사항
- 이 프로젝트는 학습용으로 제작되었으며, 보안이나 예외처리 로직은 단순화되어 있습니다.  
- 실서비스 적용을 위해선 구조 개선과 유지보수 설계가 필요합니다。
