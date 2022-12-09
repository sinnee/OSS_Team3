------------------
# OSS_Team3 - 전북대 bot
-------------------
## [전북대bot 프로젝트설명]

 + 전북대학생들을 위한 매크로 봇
 + 학사일정, 학식정보, 학과 사무실 등의 정보를 제공
------------------
## [전북대bot 기능설명]

### 0. 초기페이지
  + 각 기능 선택 창
  + 기능 선택 후 초기페이지에서 종료옵션이 추가됨 
  
### 1. 인사 - greeting
  + 사용자의 'hi'에 반응
  + 세가지의 인사말을 랜덤하게 출력
  
### 2. 전북대 학사일정 안내
  + 사용자의 '학사일정'에 반응
  + 안내 받을 날짜 입력시 그 날의 학사일정을 안내
  + 단 날짜 양식을 맞게 입력해야 응답(예. 12/21)

### 3.1 오늘의 메뉴 안내 및 평가
  + 사용자의 '오늘 밥 뭐야'에 반응
  + 오늘의 진수원 중식 식단 안내
  + 3단계로 진수원 식단 평가
  + 단 주말은 제외
### 3.2 주간 메뉴 안내
  + 사용자의 '이번주 뭐 나와'에 반응
  + 3단계로 진수원 주중 중식 평가
  
### 4. 학과 사무실 안내 - infoDeptOffice
  + 사용자의 '학과이름'에 반응
  + 해당 학과의 학과 사무실 위치 안내
  + 대/소문자 띄어쓰기 구분 없음
  + 잘못된 학과입력 시 가장 유사한 학과 정보 안내(levenshtein distance 기반)
  
----------------------
## [github 관리]

### 1. 브랜치 관리 전략
 #### 1) main  
  + lock branch, require approvals 2인 (본인 제외)
 #### 2) develop
  + lock branch, require approvals 1인 (대부분의 코드 리뷰는 성신, 성신 pr시 유하 코드리뷰)
 #### 3) release 
  + lock branch, require approvals 2인 (유하, 성신)
 #### 4) hotfix
  + main, release에서 분기
  + 긴급 버그 수정 브랜치
  + lock branch, require approvals 2인 (유하, 성신)
 #### 5) feature 
  + develop에서 분기 
  + 각 기능 개발시 기능을 알 수 있게 브랜치명에 표시(ex. feature_greeting)
  + 다른 보안을 걸지 않음

### 2. project - 간트차트
 + 개발 일정 관리를 위해 사용 
 + 해당 할일 개발자, 진행 현황 등을 표시
 + issue 관리를 간트차트에서 동시 진행
 + 해당 할일, issue 완료시 issue를 닫고 할일을 done으로 표기
 ![image](https://user-images.githubusercontent.com/77494780/206628445-dd43e15c-1947-4b8c-ad0f-722b680d6366.png)

-----------------------
## [전북대bot 코드규칙]

### 1. commit message 규칙

 #### 1) 7가지 규칙
  + 제목과 본문을 한 줄 띄어 구분
  + 제목은 50자 이내
  + 제목 첫 글자는 대문자 
  + 제목 끝 마침표 x
  + 제목은 명령문으로(과거형 x)
  + 본문의 각 행은 72자 이내
  + 본문은 어떻게보다 무엇을 왜에 대하여 설명
 #### 2) commit type
  + feat : 새로운 기능 추가, 기존의 기능을 요구 사항에 맞추어 수정
  + fix : 기능에 대한 버그 수정
  + docs : 문서(주석) 수정
  + style : 코드 스타일, 포맷팅에 대한 수정
  + test : 테스트 코드 추가/수정
  + release : 버전 릴리즈
 #### ex) feat: Add login api
 #### 참조 : https://velog.io/@jiheon/Git-Commit-message-%EA%B7%9C%EC%B9%99
 
### 2. eslint 사용
  + husky 사용
  + airbnb 규칙 사용
  + lint-staged : git repository에서 staging 상태인 파일에 대해서만 lint
  + 참조 : https://luniverse.io/2021/05/12/simple-git-hooks/?lang=ko

### 3. unit test
  + 각 기능별 unit test 진행
  + mocha test 로 진행
  + github action 을 통해 dev branch에 pr시 mocha 자동 수행

### 4. integrated test
 


-----------------------  
## [전북대bot url]
 + https://app.slack.com/client/T04745WSESW/D047E2WCP7X
 
