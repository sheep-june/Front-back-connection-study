# Front-back-connection-study - React × Spring接続学習用アプリケーション

## 概要  
このプロジェクトは、React フロントエンドと Spring Boot バックエンドの連携方法を学ぶための学習用アプリケーションです。  
REST API を通じて投稿の作成、一覧、編集、削除といった基本的な CRUD 処理を実装し、フロントとバックの通信を確認します。

## 主な機能
- 投稿作成（タイトルと内容）
- 投稿一覧表示（ページネーション対応）
- 投稿詳細表示
- 投稿編集
- 投稿削除

## 使用技術スタック

- **Backend**
  - Java 17  
  - Spring Boot 3  
  - Spring Web  
  - Spring Data JPA  
  - Lombok  

- **Frontend**
  - React  
  - React Router DOM  
  - Axios  
  - CSS Modules  

- **Database**
  - MySQL  

- **その他**
  - REST API  
  - CORS 設定（WebConfig にて）  
  - .env による API ベースURL管理  

## プロジェクト構成
```
Front-back-connection-study
├── prac // Spring Boot バックエンド
│   ├── config
│   │   └── WebConfig.java
│   ├── controller
│   │   ├── HelloController.java
│   │   └── PostController.java
│   ├── model
│   │   └── Post.java
│   ├── repository
│   │   └── PostRepository.java
│   ├── service
│   │   └── PostService.java
│   └── PracApplication.java
│
├── react_p // React フロントエンド
│   ├── public
│   │   ├── index.html
│   │   ├── favicon.ico
│   │   ├── manifest.json
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   └── robots.txt
│   ├── src
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── css
│   │   │   ├── CreatePost.css
│   │   │   ├── Home.css
│   │   │   ├── PostDetail.css
│   │   │   └── PostEdit.css
│   │   ├── CreatePost.js
│   │   ├── Home.js
│   │   ├── PostDetail.js
│   │   └── PostEdit.js
│   ├── .env
│   └── package.json 他
```

## 参考  
- このプロジェクトは認証やアクセス制御を含まず、全てのユーザーが投稿の作成、編集、削除を自由に行えます。  
- REST API は認証なしでアクセスできる構成で、セキュリティ機能は今後の拡張にて対応可能です。  
- 現在の構成は React と Spring Boot の接続を確認する学習目的に焦点を当てています。

---

# Front-back-connection-study - React × Spring 연동 학습용 애플리케이션

## 개요  
이 프로젝트는 React 프론트엔드와 Spring Boot 백엔드의 연동 방법을 학습하기 위한 실습용 애플리케이션입니다.  
REST API를 활용하여 게시글 작성, 목록 조회, 수정, 삭제와 같은 기본적인 CRUD 동작을 구현하고, 프론트와 백의 연결 방식을 확인합니다.

## 주요 기능
- 게시글 작성 (제목과 내용 입력)
- 게시글 목록 조회 (페이지네이션 적용)
- 게시글 상세 보기
- 게시글 수정
- 게시글 삭제

## 사용 기술 스택

- **Backend**
  - Java 17  
  - Spring Boot 3  
  - Spring Web  
  - Spring Data JPA  
  - Lombok  

- **Frontend**
  - React  
  - React Router DOM  
  - Axios  
  - CSS 모듈  

- **Database**
  - MySQL  

- **기타**
  - REST API  
  - CORS 설정 (WebConfig에서 적용)  
  - .env를 통한 API 베이스 URL 관리  

## 프로젝트 구조
```
Front-back-connection-study
├── prac // Spring Boot 백엔드
│   ├── config
│   │   └── WebConfig.java
│   ├── controller
│   │   ├── HelloController.java
│   │   └── PostController.java
│   ├── model
│   │   └── Post.java
│   ├── repository
│   │   └── PostRepository.java
│   ├── service
│   │   └── PostService.java
│   └── PracApplication.java
│
├── react_p // React 프론트엔드
│   ├── public
│   │   ├── index.html
│   │   ├── favicon.ico
│   │   ├── manifest.json
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   └── robots.txt
│   ├── src
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── css
│   │   │   ├── CreatePost.css
│   │   │   ├── Home.css
│   │   │   ├── PostDetail.css
│   │   │   └── PostEdit.css
│   │   ├── CreatePost.js
│   │   ├── Home.js
│   │   ├── PostDetail.js
│   │   └── PostEdit.js
│   ├── .env
│   └── package.json 외
```

## 참고  
- 이 프로젝트는 인증 및 권한 제어 기능 없이 구성되어 있으며, 모든 사용자가 게시글을 자유롭게 작성, 수정, 삭제할 수 있습니다.  
- REST API는 인증 없이 접근 가능하도록 구성되어 있으며, 보안 기능은 이후 확장을 통해 추가할 수 있습니다.  
- 현재 구성은 React와 Spring Boot 간의 연동 실습을 목적으로 설계되었습니다.
