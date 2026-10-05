window.Portfolio = {
components: {},
images: {
 workspace:'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=85',
 laptop:'https://images.unsplash.com/photo-1586244346603-b97b4fdb87e4?auto=format&fit=crop&w=1000&q=85',
 code:'https://images.unsplash.com/photo-1681408969415-34cb37122508?auto=format&fit=crop&w=1000&q=85'
},
projects: [
 {tag:'웹사이트 제작 · 기획 프로젝트',title:'브랜드의 첫인상을 만드는 웹사이트',date:'제작 분야',location:'브랜드 · 소상공인',image:'laptop',description:'소개부터 서비스 안내, 문의 동선까지. 작은 브랜드의 이야기를 담은 모바일 중심의 웹사이트를 구상합니다.',detail:'브랜드의 분위기를 정리하고 방문자가 필요한 정보를 쉽게 찾도록 화면을 구성합니다. 소개, 서비스, 자주 묻는 질문, 문의 영역을 컴포넌트로 나눠 관리하기 편한 구조로 설계하는 프로젝트입니다.'},
 {tag:'업무 자동화 · 기획 프로젝트',title:'반복 업무를 줄이는 나만의 도구',date:'제작 분야',location:'1인 사업자 · 소규모 팀',image:'code',description:'매일 반복하는 정리와 확인을 더 간단하게. 문의 관리와 업무 현황을 한곳에 모으는 도구를 구상합니다.',detail:'복사와 붙여넣기, 목록 정리, 진행 상태 확인처럼 반복되는 작업을 살펴보고 자동화할 흐름을 찾습니다. 문의 목록, 필터, 상태 변경, 요약 화면을 갖춘 내부 도구를 제안하는 프로젝트입니다.'},
 {tag:'아이디어 검증 · 기획 프로젝트',title:'아이디어를 직접 써볼 수 있는 서비스로',date:'제작 분야',location:'초기 서비스 · 개인 프로젝트',image:'workspace',description:'처음부터 모든 기능을 만들기보다 중요한 경험부터. 핵심 기능을 담은 시제품으로 아이디어의 가능성을 확인합니다.',detail:'누가 어떤 상황에서 사용할지 정리한 뒤, 가장 중요한 한 가지 경험을 먼저 만듭니다. 사용자의 반응을 확인할 수 있는 최소 기능과 화면 흐름에 집중하는 서비스 시제품 프로젝트입니다.'}
],
services: [
 {icon:'education',title:'웹사이트 제작',copy:'브랜드 소개, 개인 포트폴리오, 서비스 안내 페이지를 목적에 맞게 구성합니다.'},
 {icon:'growth',title:'업무 자동화',copy:'반복되는 업무를 정리하고, 시간과 수고를 줄여주는 간단한 도구를 만듭니다.'},
 {icon:'community',title:'서비스 시제품',copy:'떠오른 아이디어를 실제로 눌러보고 사용할 수 있는 화면으로 구체화합니다.'},
 {icon:'health',title:'화면 개선과 유지보수',copy:'모바일 배치, 사용 흐름, 콘텐츠 구조를 살펴보고 더 편하게 다듬습니다.'}
],
notes: [
 {category:'작업 방식',date:'기획 노트 01',title:'좋은 질문이 좋은 결과물을 만듭니다',image:'workspace',body:'바이브코딩의 시작은 원하는 결과를 구체적으로 설명하는 일이라고 생각합니다. 누가 사용하는지, 어떤 문제를 해결하는지, 꼭 필요한 기능이 무엇인지부터 정리합니다. 큰 요청을 작은 작업으로 나누고, 화면과 동작을 확인하며 질문을 다듬는 방식으로 작업을 이어갑니다.'},
 {category:'화면 설계',date:'기획 노트 02',title:'모바일에서 먼저 생각하는 이유',image:'laptop',body:'작은 화면에서는 정보의 우선순위가 분명해야 합니다. 가장 중요한 내용과 행동을 먼저 배치하고, 버튼의 크기와 문장의 길이를 살핍니다. 모바일에서 편하게 읽히는 구조를 바탕으로 넓은 화면의 배치를 확장합니다.'},
 {category:'자동화 아이디어',date:'기획 노트 03',title:'작은 반복부터 줄여봅니다',image:'code',body:'매일 하는 일이지만 의외로 많은 시간을 쓰는 작업이 있습니다. 문의를 목록에 옮기거나, 진행 상태를 확인하거나, 비슷한 문서를 작성하는 일입니다. 지금의 작업 순서를 먼저 기록하고, 한 단계씩 줄일 수 있는 작은 도구부터 구상합니다.'}
]
};
Portfolio.image = function(key, alt, className = '', eager = false) {
return `<img class="${className}" src="${Portfolio.images[key]}" alt="${alt}" loading="${eager?'eager':'lazy'}" ${eager?'fetchpriority="high"':''} data-image-fallback>`;
};
