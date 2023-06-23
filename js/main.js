$(function () {
    $(".wrap").fullpage({
        navigation: true,//네비게이션 유무
        navigationPosition: "left",//네비게이션 위치
        sectionsColor: ["#999", "#4bbfc3", "#7baabe", "#666"],//각 섹션 배경색, 배열의 형식
        navigationTooltips: ["1번", "2번", "3번", "4번"],//네비게이션 텍스트, 배열의 형식
        showActiveTooltip: true//네비게이션 선택 메뉴 활성화
    });
})
