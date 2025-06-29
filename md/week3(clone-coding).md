## 3주차 과제

### 과제 수행내용
> 컴포넌트 클론 개발(개선 반영) <br />

3가지의 과제 중 탭(Tabs) 기능도 아직 제대로 익히지 못한 것 같아 클론 개발 중 탭(Tabs) 기능을 구현하면서 개선하는 방향을 선택하였다. <br />
그 중 토스(Toss) 사이트를 선택하였고, 클론 개발을 하며 다음과 같은 기능을 개선해보았다.  <br />
먼저, 클론 개발이 무엇인지에 대해서 알아보았고 서비스를 제공하고 있는 기존 웹사이트의 디자인 및 기능을 구현하는 것으로 확인하였다. <br />
사이트를 세세하게 분석하여 완성도 높게 기능개선을 하지는 못했지만 과제를 마무리해본다.. <br /><br />
🔁 **키보드 포커싱** <br />

*📌토스페이지* <br />
채용하는 분야인 Homepage 와 Interaction UX 에는 포커싱이 되지않음 <br />
<img src="https://github.com/user-attachments/assets/1f9ba019-de73-4ef8-9897-eb94212d8868" width=500>

*✨구현 페이지* <br />
키보드(tab키)로 이동 시 포커싱이 되도록 기능 개선 <br />
<img src="https://github.com/user-attachments/assets/ccf28d96-18f4-4329-9a94-4a7e53f0f181" width=500>
<img src="https://github.com/user-attachments/assets/375f09c1-02a3-426d-ad24-c31afe163d75" width=500>

<br />

🔁 **HTML문법검사 오류** <br />

*📌토스페이지* <br />
1) img 태그 alt 누락 및 잘못된 속성(size) 사용 <br />
img 태그 내 alt 누락오류발생 <br />
<img src="https://github.com/user-attachments/assets/eb260572-66e0-4be8-8b6b-fca614f60419" width=700> <br />
img 태그 내 size 속성 사용 -> sizes가 입력되어야하는데 오타로 생각됨 <br />
<img src="https://github.com/user-attachments/assets/c83220ab-3a20-4472-9ee8-db736b0875c5" width=700>

3) 잘못된 태그 위치 <br />
style 태그는 head에 위치하여야하는데, body에서 사용하여 오류발생 <br />
<img src="https://github.com/user-attachments/assets/bb90ba97-11f4-48da-a423-ca6cd2b43577" width=700> 
<img src="https://github.com/user-attachments/assets/c2a37455-a998-40a0-bbf1-ce0d03c141c1" width=700> <br />

*✨구현 페이지* <br />
img 태그 내 alt를 입력하여 문법검사 오류발견이 되지않도록 개선 <br />
<img src="https://github.com/user-attachments/assets/5fab9fa0-d8ac-43c4-91b3-e590210c5107" width=700>

🔁 **최종 lighthouse 점수** <br />

실제 토스페이지는 더 많은 기능이 담겨져있고, 구현한 페이지는 일부 기능만 포함된 점 감안필요 <br />

*📌토스페이지* <br />
![image](https://github.com/user-attachments/assets/a93e4084-fd04-448e-8b2a-ab79272e130c) <br />
Accessibility항목 오류 중 배경색과 글자색의 명암 대비가 충분하지 않다는 오류 발생 -> 개선되지않음❌

*✨구현 페이지* <br />
![image](https://github.com/user-attachments/assets/2b23aebc-669c-48c3-9670-6235521b2225) <br />
Accessibility항목 오류 중 배경색과 글자색의 명암 대비가 충분하지 않다는 오류 발생 <br />
-> 색상 변경 *(전체적인 글자색상/버튼의 배경색)* 으로 개선완료⭕

### 회고📝 <br />
3번 직접 디자인을 진행하는 건 시간도 상당히 필요하고, 아직은 도전하기에 조금 더 연습이 필요할 것으로 생각되었다. <br />
자연스레 1번 캐러셀 구현과 2번을 고민하게 되었고 캐러셀 기능구현에 앞서 탭(Tabs) 기능 구현도 완벽하게 하는 정도가 아니라 판단되어 <br />
기능 구현도 해보고, 현재 서비스하고 있는 유명 사이트들에도 오류가 있긴한건지 궁금하여 2번으로 선택하였다. <br />
사실 1번보다 조금이라도 낫지않을까.. 하는 생각도 있었는데 막상 시작해보니 내가 쉽게 생각했다는걸 깨달았다. <br />

오랜만에 전체적인 마크업과 CSS부터 시작하려니 예상한 시간보다 오래걸렸고, js도 막히는 부분은 역시나 수업자료를 참고하여 진행하였다. <br />
일단 페이지 구현부터 하자! 라는 생각에 나름 구현을 한 이 후, 기존 사이트에서 내가 개선한 부분이 있을까? 라는 생각이 들었다. <br />
아무런 부분도 개선한 점이 없으면 어쩌지 하는생각에 `문법검사`와 `접근성 검사(lighthouse)`를 진행하였고.. <br />
생각보다 기본적인 부분을 놓친 오류(*img 태그 내 alt 속성누락*)와 낮은 점수의 접근성 검사를 보니 오잉??? 싶었다. <br />
모든 부분을 분석하지는 못했지만, 기본적인 부분을 지키지 않은 채 서비스가 될 수 있다는 점과 그런 서비스를 이용하고 있었다는 점이 <br />
앞으로 <ins>기본기가 탄탄한</ins> 프론트엔드 개발자가 되고싶다는 생각을 들게 하였다. <br />

열정가득 수업을 해주시는 야무쌤께 죄송한 마음이 들 정도로 수업내용을 흡수하지 못하는 것 같아 조금은 슬픈 3주차였다... <br />
그래도 별다른 방법이 없으니 부트캠프 시작전 제출했던 자기소개 장점에 적은 `성실함` 으로 앞으로 나아가는 수 밖에 없! 다!
