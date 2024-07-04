# hodu-landing

이 페이지는 시멘틱한 코드 작성을 연습할 목적으로 PC/Mobile 반응형으로 제작되었습니다.

- HTML 파일: `./src/index.html`
- CSS 파일: `./src/input.css`
- 배포 링크: https://diayeri.github.io/hodu-landing/src/

## 기술 스택

HTML, tailwind CSS, JavaScript

## 작업 시 유의사항

tailwind CSS의 Watch 모드를 활성화하여, input.css 의 변경사항이 자동으로 output.css에 반영되도록 합니다.

- 파일경로 지정에 주의합니다.

```
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

HTML 파일의 위치가 src 폴더 내부가 아닌 경우, tailwind class로 상대경로를 이용할 경우 주의해야 합니다.

- 파일 위치는 HTML 파일 기준이 아니고, 작성한 CSS 위치 기준입니다. (빌드된 CSS 위치도 아님)
- 예) `test.html` 내 `bg-[url('./images/modal-bg-img.png')]`와 같은 클래스명으로 배경 이미지를 지정할 때, 이미지 경로는 실제 CSS 파일이 위치한 경로를 기준으로 해석됩니다. 이 경우 `input.css` 파일의 위치를 기준으로 경로가 해석됩니다.

## 버전 및 업데이트 정보

- 모바일 헤더 메뉴는 추후 작업 예정입니다.
- Top 버튼을 누르면 페이지가 자연스럽게 위로 스크롤 되는 기능도 추후 작업 예정입니다.

## 참고 및 출처

PC/Mobile 페이지 디자인 시안은 주식회사 위니브로부터 제공받았습니다.
