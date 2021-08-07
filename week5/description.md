- 일러스트 만들 때 SVG 확장자의 이미지를 만듦
- SVG 파일 안을 보면 이상한 태그들로 구성 되어 있음
- 예를 들어서 다음과 같은 태그로 구성 되어 있다.
```
<svg width="100" height="100">
  <rect x="25%" y="25%" width="50%" height="50%" fill="green"/>
</svg>
```
- D3.js의 장점 : 벡터이미지라서 늘어나도 계단 현상이 없다.

 - D3.js의 버전
`<script src="http://d3js.org/d3.v1.min.js"></script>`
`<script src="http://d3js.org/d3.v2.min.js"></script>`
`<script src="http://d3js.org/d3.v3.min.js"></script>`
`<script src="http://d3js.org/d3.v4.min.js"></script>`
- 최신 버전인 v4를 사용한다.
- 기본적인 D3.js의 기능이 들어 있다.
