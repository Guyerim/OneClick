# T Map API KEY

> public/index.html
> script 태그의 appkey 를 변경해주세요.

# Init Setting

> npm install

# start

> npm start

# 구조설명

> ./server : node.js / mysql / sequelize, 보실필요 없습니다
>
> ./public/index.html : 실제 렌더링 될 html
>
> ./src : 렌더링할 React 코드들
> - ./src/app.js : React root
> - ./src/utils : 커스텀 훅 및 함수
> - ./src/pages : 보여질 페이지들. login, signup, main
> - ./src/component : page의 컴포넌트를 분할하여 관리
> - ./src/resource : 이미지 등 화면에 필요한 파일 