# 💁🏻 OpenMat **v1.0.0**

---
<img width="324" alt="스크린샷 2021-12-19 오후 6 42 24" src="https://user-images.githubusercontent.com/76994774/147832666-07ffd307-c3b8-4309-b430-550d36b2ba73.png">

## **🌟 서비스 소개**

🥋 주짓수 오픈매트, 세미나, 대회일정을 확인, 등록할 수 있는 주짓수 웹 서비스🥋

배포 : [https://openmat.herokuapp.com/](https://openmat.herokuapp.com/)

### **개발 배경**

2020년 부터 주짓수에 빠져 열심히 수련하다, 대회를 나가고 싶어 대회를 찾아보던 중, 주짓수 커뮤니티에는 대회일정을 한번에 확인 할 수 있는 웹 서비스가 없다는 걸 알았습니다. 또, 주짓수에는 ‘오픈매트’, ‘세미나’같은 대외활동들이 활발하게 일어나는데, 이러한 일정을 확인할 수 있는 곳이 **체육관 인스타 계정 혹은 주최사 인스타 계정 밖에 없었기 때문에 많은 불편함(문제)이 있다는 걸 깨달았습니다.**

이후에, **웹으로 한눈에 주짓수 행사를 볼 수 있는 서비스를 만들고 싶어 오픈매트를 기획하고 개발했습니다.**

로그인기능, 결제서비스 등과 같은 기능을 구현한뒤 실제 서비스를 런칭할 계획입니다.

### **개발 기술**

## Frontend

- HTML, CSS, JS(ES6)
- React, React-router

## Backend

- Node.js

## DevOps

- AWS - RDS
- MySQL

## Tools

- heroku
- VS Code
- Git

## **🌟 주요 기능**

### **👌 메인 페이지**

<img width="1433" alt="스크린샷 2021-12-31 오후 6 15 09" src="https://user-images.githubusercontent.com/76994774/147832646-23b4388d-1871-402c-a7a7-5abd20e14323.png">

### **👌 CRUD**

- 오픈매트 일정을 데이터베이스에서 읽어와 클라이언트에서  추가 삭제할 수 있습니다.
- 모달창을 이용하여 오픈맷등록
- 버튼을 클릭하여 삭제가 가능합니다.
<img width="740" alt="스크린샷 2022-01-01 오전 1 47 31" src="https://user-images.githubusercontent.com/76994774/147832948-a8632c56-3a4c-4aa7-932d-1ed70ab9397a.png">

### **👌 반응형 구현**

- 카드섹션에 대한 반응형 구현

<img width="718" alt="스크린샷 2022-01-01 오전 1 49 02" src="https://user-images.githubusercontent.com/76994774/147832982-540174bf-fd06-425f-b854-98ec0fd048bd.png">



### **🧐 날짜 선택**

- 확인하고 싶은 날짜를 선택가능(디자인만 구현)

<img width="350" alt="스크린샷 2022-01-01 오전 1 49 29" src="https://user-images.githubusercontent.com/76994774/147832997-646a2958-a76c-4ca6-b60d-1dd6a96a3207.png">


## **🌟 구조 및 배포**

<img width="669" alt="스크린샷 2022-01-01 오전 1 52 26" src="https://user-images.githubusercontent.com/76994774/147833074-57f43efb-0842-420c-806b-493d28d7b7fb.png">


- 프론트앤드는 리액트 웹프레임워크를 이용하여 개발
- 백앤드는 익스프레스 웹프레임워크를 이용하여 개발
- AWS-RDS와 서버를 연결하여 클라이언트상에서 데이터를 읽기 추가 삭제 기능 구현
- Heroku서비스를 이용하여 배포
