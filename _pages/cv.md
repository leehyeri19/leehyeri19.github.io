---
layout: archive
title: "CV"
permalink: /cv/
author_profile: false
redirect_from:
  - /resume
---

{% include base_path %}

<style>
  .cv-action-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(110, 189, 141, 0.08);
    border: 1px solid rgba(110, 189, 141, 0.35);
    border-radius: 10px;
    padding: 12px 20px;
    margin-bottom: 24px;
    flex-wrap: wrap;
    gap: 12px;
  }
  .cv-action-text {
    font-size: 0.92em;
    color: var(--global-text-color);
  }
  .cv-print-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: var(--global-base-color);
    color: #fff !important;
    padding: 6px 16px;
    border-radius: 20px;
    font-size: 0.88em;
    font-weight: 700;
    text-decoration: none !important;
    cursor: pointer;
    border: none;
    transition: var(--global-transition);
  }
  .cv-print-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(69, 168, 109, 0.3);
  }
  @media print {
    .masthead, .page__footer, .cv-action-bar, #theme-toggle {
      display: none !important;
    }
    body {
      background: #fff !important;
      color: #111 !important;
      font-size: 11pt;
    }
    .page__content {
      width: 100% !important;
      max-width: 100% !important;
      margin: 0 !important;
      padding: 0 !important;
    }
    a {
      text-decoration: none !important;
      color: #000 !important;
    }
    h1, h2, h3 {
      page-break-after: avoid;
    }
  }
</style>

<div class="cv-action-bar">
  <div class="cv-action-text">
    <i class="fa-solid fa-file-pdf" style="color: var(--global-base-color); margin-right: 6px;"></i>
    서류 제출용 <strong>PDF 경력기술서</strong>가 필요하시면 인쇄 버튼을 눌러 바로 저장하실 수 있습니다.
  </div>
  <button onclick="window.print()" class="cv-print-btn">
    <i class="fa-solid fa-print"></i> PDF 저장 / 인쇄 (Ctrl+P)
  </button>
</div>

# 이혜리 (HyeRi Lee)
**Backend Engineer | Java & Spring Boot**

* **Email**: cabinkss02@naver.com
* **GitHub**: [github.com/leehyeri19](https://github.com/leehyeri19)
* **Tech Blog**: [hyeri-lee.tistory.com](https://hyeri-lee.tistory.com)
* **LinkedIn**: [linkedin.com/in/hyrilee0713](https://www.linkedin.com/in/hyrilee0713/)

---

## 📌 Summary
* **3년 1개월(정규직 2년 9개월 + 실습 4개월)** 경력의 Java/Spring 기반 백엔드 엔지니어입니다.
* 공공 IoT 단말 관제 및 실시간 솔루션에서 대량의 센서 데이터를 안정적으로 처리하고 시각화하는 파이프라인을 구축해 왔습니다.
* **1분 주기 Polling 방식을 Redis 인메모리 캐싱으로 전환**하여 데이터 지연을 **최대 60초에서 1초 미만(98% 단축)**으로 개선하고 **RDBMS 부하를 80% 이상 절감**한 경험이 있습니다.
* 2023년 2월부터 기술 블로그를 꾸준히 운영하며 Spring 내부 아키텍처와 실무 트러블슈팅 경험을 기록 및 공유하고 있습니다.

---

## 💼 Work Experience
### 스파이어테크놀로지 (Spire Technology)
**2023.09 - Present (총 3년 1개월)** | *공공 ICT 단말 관제 및 통신망 품질 솔루션 기업*

#### 정규직 · Java 백엔드 및 실시간 관제 시스템 개발 (2024.01 - Present / 2년 9개월)
* 대규모 공공 IoT 단말 관제 시스템의 실시간 데이터 처리 및 RESTful API 아키텍처 설계·개발
* **Redis 인메모리 캐시 레이어 도입**: 실시간 센서 데이터 지연 시간 단축 및 RDBMS 단순 조회 부하 80% 이상 경감
* 지자체 공공 서비스(과천시 기후환경, 수성구 스마트 주차, 대구시 데이터허브) 핵심 솔루션 개발 및 안정적 납품

#### 산학협력 현장실습 (인턴) · 웹 및 데이터 연동 개발 (2023.09 - 2023.12 / 4개월)
* 단말 현황판 웹 컴포넌트 레이아웃 및 비동기 API 통신 프로세스 참여
* 실무 프로세스 적응력과 업무 완성도를 인정받아 정규직으로 연계 채용

---

## 🚀 Key Projects

### 1. 과천시 기후환경 관리시스템
**관내 대량 기후·환경 센서 측정 데이터 실시간 모니터링 시스템**
* **역할**: Redis 캐싱 아키텍처 설계 및 실시간 관제 시스템 개발
* **Problem**: 
  * 기존 1분(60초) 주기 HTTP Polling 방식은 침수/미세먼지 급증 등 기후 이상 발생 시 최대 60초의 정보 지연이 발생하여 즉각적인 초동 대응이 어려웠음.
  * 다수 관제 화면의 반복적인 주기적 폴링으로 인해 RDBMS에 불필요한 읽기 쿼리 부하가 지속 발생.
* **Solution**: 
  * 센서 데이터 인입 즉시 최신 상태를 유지할 수 있도록 **Redis 인메모리 캐시 레이어** 구축.
  * 데이터 유효시간(TTL) 정책과 갱신 파이프라인을 수립하여 화면에서 캐시된 실시간 데이터를 지연 없이 조회하도록 전환.
* **Impact**: 
  * 데이터 표출 지연 시간: **최대 60초 ➔ 1초 미만(약 98% 단축)**으로 개선하여 환경 이상 징후 골든타임 내 즉각 대응 환경 확보.
  * **RDBMS 단순 조회 쿼리 부하 약 80% 이상 절감**.
* **Tech Stack**: Java, Spring Boot, Redis, In-Memory Cache, MySQL, Linux

---

### 2. 수성구 스마트 주차정보 시스템 관제 대시보드
**대구 수성구 관내 공영주차장 실시간 잔여면 현황 및 모니터링 관제 시스템** ([서비스 링크](https://parking.suseong.kr/dashboard/index))
* **역할**: RESTful API 연동 및 관제 대시보드 웹 개발
* **Problem**: 
  * 센서 네트워크 변동 및 잦은 입출차로 인한 데이터 누락/중복 표출 가능성과, 잦은 화면 갱신에 따른 렌더링 지연 발생.
* **Solution**: 
  * RESTful API 응답 구조 표준화 및 데이터 정합성 검증 로직 구현.
  * 화면 갱신 시 변경된 주차면 데이터만 선별 갱신하는 비동기 렌더링 최적화 적용.
* **Impact**: 
  * 관내 공영주차장 실시간 잔여면 **데이터 정합성 99% 이상 유지**.
  * 시민 대상 대시보드 및 종합상황실 다중 모니터 환경에서 무중단 안정적 관제 지원.
* **Tech Stack**: Java, Spring Boot, RESTful API, JavaScript, HTML5/CSS3

---

### 3. 대구시 데이터허브 API 신청 및 이용현황 서비스
**대구 스마트시티 데이터허브 OpenAPI 신청/승인 및 트래픽 현황 모니터링**
* **역할**: OpenAPI 신청 프로세스 및 통계 시각화 서비스 개발
* **Problem**: 
  * 대용량 OpenAPI 호출 로그 통계 집계 시 쿼리 복잡도로 인한 응답 지연 및 폼 유효성 검증 누락에 따른 불필요한 백엔드 예외 발생.
* **Solution**: 
  * 비동기 통신 기반 통계 데이터 조회 구조 수립 및 2단계 폼 유효성 검증 체계 구축.
* **Impact**: 
  * 대용량 통계 조회 응답 속도 개선 및 백엔드 예외 발생률 감소.
  * 새로고침 없는 비동기 통계 차트 시각화로 사용자 편의성 향상.
* **Tech Stack**: Java, Spring Boot, OpenAPI, Statistics Query, RESTful API

---

## ✍️ Tech Articles & Writing (Tistory)
* 블로그 주소: [https://hyeri-lee.tistory.com/](https://hyeri-lee.tistory.com/) (2023.02 ~ 현재 운영 중)
* **대표 아티클**:
  * [동기와 비동기 차이 쉽게 이해하기](https://hyeri-lee.tistory.com/entry/%EB%8F%99%EA%B8%B0Synchronous%EC%99%80-%EB%B9%84%EB%8F%99%EA%B8%B0Asynchronous-%EC%B0%A8%EC%9D%B4-%EC%89%BD%EA%B2%8C-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0)
  * [[Spring] Spring Security 로그인 구조 이해 (Filter 기반 구조)](https://hyeri-lee.tistory.com/entry/Spring-Spring-Security-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EA%B5%AC%EC%A1%B0-%EC%9D%B4%ED%95%B4)
  * [[Spring] Spring Bean 생성 과정 (IoC Container 동작 이해)](https://hyeri-lee.tistory.com/entry/Spring-Spring-Bean-%EC%83%9D%EC%84%B1-%EA%B3%BC%EC%A0%95-IoC-Container-%EB%8F%99%EC%9E%91-%EC%9D%B4%ED%95%B4)

---

## 🛠️ Technical Skills
* **Languages**: Java, JavaScript, SQL, HTML5/CSS3
* **Backend**: Spring Boot, Spring Framework, Spring Security, MyBatis, RESTful API
* **Database & Cache**: Redis, MySQL, PostgreSQL, Oracle
* **DevOps & Tools**: Docker, Linux, Git, GitHub, IntelliJ IDEA, Postman
* **Key Strengths**: In-Memory Caching (Redis), Real-time IoT Systems, Data Reliability, Troubleshooting

---

## 🎓 Education
* **백석대학교 (Baekseok University)**, 2019.03 - 2024.02
  * 컴퓨터공학부 소프트웨어공학과 학사 졸업 (학점: 3.65 / 4.5)
* **분당영덕여자고등학교**, 2017.03 - 2019.02
  * 자연계열(이과) 졸업

---

## 🏆 Activities & Awards
* **백석대학교 JAVA 프로그래밍 경진대회 (장려상)**, 2022.12
* **IIBC Start up Invention Contest (단체상)**, (사)한국인터넷방송통신학회, 2022.11
* **기술 블로그 운영 및 지식 아카이빙**, 2023.02 - Present
