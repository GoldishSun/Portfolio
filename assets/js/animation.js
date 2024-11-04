$(document).ready(function() {
  const career = {
    1: [
      "2024.07 Usen Eyes Cloud SD-Card 제어 모듈 개발",
      "2024.01 Usen Eyes Cloud WebRTC Streaming 모듈 개발",
      "2023.11 EDGE 특장차 자율주행 관제 개발",
      "2023.08 VMS, ADCM 자율주행 관제 개발",
      "2023.07 HMI 자율주행 제어 인터페이스 개발",
    ],
    2: [
      "2022.09 MyUniverse 앱 백엔드 구축",
      "2022.04 YESS24 앱 백엔드 구축",
      "2022.01 대학 화상상담 모듈 및 매칭 시스템 개발",
      "2021.06 전자서명인증 모듈 개발",
      "2021.01 EAP 리뉴얼 시스템 개발 및 성능 이슈 개선",
      "2020.07 학사 전공 / 비전공 학생 인증제 개발",
      "2020.04 핵심역량진단 검사도구 개발",
      "2020.02 기초학습능력진단 도구개발",
      "2019.12 부천대학교 SELP 빅데이터 기반 취업추천시스템 구축",
      "2019.10 백석대학교 TBCS 핵심역량 성과환류 시스템 구축",
      "2019.08 명지전문대 MPU 경력마일리지 장학시스템 구축",
      "2019.01 전남도립대 CDS 현장실습 시스템구축",
      "2018.02 한남대학교 HTQM 비교과 핵심역량 관리 시스템 구축",
    ]
  };

  // 모달 관련 코드
  const modalOverlay = $('.modal-overlay');
  const modalBody = $('.modal-body');

  $('.detail-link').on('click', function(e) {
    e.preventDefault();
    const dotIndex = $(this).data('dot'); 
    const dot = $('.dot').eq(dotIndex - 1); 
    $('.dot').removeClass('active');
    dot.addClass('active');

    // 모달에 내용 추가
    modalBody.html(career[dotIndex].map(item => `<p>${item}</p>`).join(''));
    modalOverlay.show(); // 모달 표시
  });

  // 모달 닫기 버튼 클릭 시
  $('.close-button').on('click', function() {
    modalOverlay.hide(); // 모달 숨기기
  });

  // 모달 외부 클릭 시 닫기
  modalOverlay.on('click', function(e) {
    if ($(e.target).is('.modal-overlay')) {
      modalOverlay.hide(); // 모달 숨기기
    }
  });
});