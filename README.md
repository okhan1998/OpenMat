# 💁🏻 OpenMat **v1.0.0**

---

![LogoSample_ByTailorBrands.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1db97d37-8757-4948-8c2c-1fe4d17b2040/LogoSample_ByTailorBrands.jpg)

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

![스크린샷 2021-12-31 오후 6.15.09.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/79646970-d838-4731-b9e5-609676b95d8c/스크린샷_2021-12-31_오후_6.15.09.png)

### **👌 CRUD**

- 오픈매트 일정을 데이터베이스에서 읽어와 클라이언트에서  추가 삭제할 수 있습니다.
- 모달창을 이용하여 오픈맷등록
- 버튼을 클릭하여 삭제가 가능합니다.

![스크린샷 2021-12-31 오후 6.09.43.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e14121ac-8a22-4828-8f97-dd9bd211c81d/스크린샷_2021-12-31_오후_6.09.43.png)

![스크린샷 2021-12-31 오후 6.09.58.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ff4e3b71-e6da-45ca-bb18-7c0392329bc6/스크린샷_2021-12-31_오후_6.09.58.png)

![스크린샷 2021-12-31 오후 6.09.48.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5826b7c3-c7ad-4ff6-9cb8-6776188ca3b9/스크린샷_2021-12-31_오후_6.09.48.png)

![스크린샷 2021-12-31 오후 6.10.06.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/83cf9e6f-0ae9-49a6-8308-0eeaa9ae29b5/스크린샷_2021-12-31_오후_6.10.06.png)

### **👌 반응형 구현**

- 카드섹션에 대한 반응형 구현

![스크린샷 2021-12-31 오후 6.17.07.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6ef6304a-9e5d-4cb6-8185-2632153f5991/스크린샷_2021-12-31_오후_6.17.07.png)

![스크린샷 2021-12-31 오후 6.17.15.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b60bfed4-a969-486b-83bd-fe0d01fb4f60/스크린샷_2021-12-31_오후_6.17.15.png)

### **🧐 날짜 선택**

- 확인하고 싶은 날짜를 선택가능(디자인만 구현)

![스크린샷 2021-12-31 오후 6.21.38.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f2086f21-833e-42be-b532-ad972b496e1b/스크린샷_2021-12-31_오후_6.21.38.png)

## **🌟 구조 및 배포**

![스크린샷 2021-12-31 오후 7.00.38.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5e7b9549-b0c2-427c-9f60-4ed88834eae2/스크린샷_2021-12-31_오후_7.00.38.png)

- 프론트앤드는 리액트 웹프레임워크를 이용하여 개발
- 백앤드는 익스프레스 웹프레임워크를 이용하여 개발
- AWS-RDS와 서버를 연결하여 클라이언트상에서 데이터를 읽기 추가 삭제 기능 구현
- Heroku서비스를 이용하여 배포
