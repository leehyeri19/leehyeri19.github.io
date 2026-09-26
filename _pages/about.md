---
permalink: /
title: "Introduce"
author_profile: false
redirect_from: 
  - /about/
  - /about.html
---

<style>
  /* Base & Global Hover Effects */
  .bio-links a:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(69, 168, 109, 0.3) !important;
  }
  .card {
    background: var(--global-bg-color);
    border: 1px solid var(--global-border-color);
    border-radius: var(--border-radius);
    padding: 24px;
    margin-bottom: 24px;
    box-shadow: var(--box-shadow);
    transition: var(--global-transition);
  }
  .card:hover {
    transform: translateY(-3px);
    border-color: var(--global-dark-border-color);
    box-shadow: 0 8px 24px rgba(69, 168, 109, 0.12);
  }
  .card-title {
    font-size: 1.2em;
    font-weight: 700;
    margin-top: 0;
    margin-bottom: 6px;
    color: var(--global-text-color);
  }
  .card-subtitle {
    color: var(--global-text-color-light);
    font-size: 0.93em;
    margin-bottom: 12px;
    font-weight: 500;
  }

  /* Notice Banner */
  .notice-banner {
    display: flex;
    align-items: center;
    gap: 12px;
    background: rgba(110, 189, 141, 0.08);
    border: 1px solid rgba(110, 189, 141, 0.3);
    border-radius: 12px;
    padding: 14px 20px;
    margin-bottom: 24px;
    font-size: 0.95em;
    color: var(--global-text-color);
  }
  .notice-banner i {
    color: var(--global-base-color);
    font-size: 1.1em;
  }

  /* Stats Container (Highlights) */
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    margin-bottom: 36px;
  }
  .stat-card {
    background: var(--global-bg-color);
    border: 1px solid var(--global-border-color);
    border-radius: var(--border-radius);
    padding: 22px 16px;
    text-align: center;
    box-shadow: var(--box-shadow);
    transition: var(--global-transition);
  }
  .stat-card:hover {
    transform: translateY(-3px);
    border-color: var(--global-base-color);
  }
  .stat-number {
    font-size: 2.1em;
    font-weight: 800;
    color: var(--global-base-color);
    line-height: 1.2;
    margin-bottom: 6px;
    font-family: inherit;
  }
  .stat-label {
    font-size: 0.82em;
    font-weight: 700;
    letter-spacing: 0.5px;
    color: var(--global-text-color-light);
    text-transform: uppercase;
  }
  @media (max-width: 650px) {
    .stats-grid {
      grid-template-columns: 1fr;
      gap: 12px;
    }
  }

  /* 3-Column Highlights Cards (유용우님 이력서 사진 2 스타일) */
  .highlight-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    margin-bottom: 40px;
  }
  .highlight-card {
    background: var(--global-bg-color);
    border: 1px solid var(--global-border-color);
    border-radius: var(--border-radius);
    padding: 22px;
    box-shadow: var(--box-shadow);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: var(--global-transition);
  }
  .highlight-card:hover {
    transform: translateY(-3px);
    border-color: var(--global-dark-border-color);
    box-shadow: 0 8px 24px rgba(69, 168, 109, 0.12);
  }
  .highlight-card-title {
    font-size: 1.08em;
    font-weight: 700;
    color: var(--global-text-color);
    margin: 0 0 10px 0;
    line-height: 1.35;
  }
  .highlight-card-desc {
    font-size: 0.9em;
    line-height: 1.65;
    color: var(--global-text-color-light);
    margin: 0 0 16px 0;
    flex-grow: 1;
    word-break: keep-all;
  }
  .highlight-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }
  .highlight-tag {
    font-size: 0.76em;
    padding: 3px 10px;
    border-radius: 20px;
    background: transparent;
    color: var(--global-base-color);
    border: 1px solid rgba(110, 189, 141, 0.4);
    font-weight: 600;
  }
  @media (max-width: 850px) {
    .highlight-grid {
      grid-template-columns: 1fr;
    }
  }

  /* Introduce Story Layout (유용우님 사진 3 스타일) */
  .intro-section {
    display: flex;
    gap: 36px;
    margin-bottom: 44px;
    align-items: flex-start;
  }
  .intro-title-col {
    width: 140px;
    flex-shrink: 0;
    font-size: 1.1em;
    font-weight: 800;
    letter-spacing: 1px;
    color: var(--global-base-color);
    text-transform: uppercase;
    position: relative;
    padding-bottom: 8px;
    border-bottom: 2px solid var(--global-base-color);
  }
  .intro-body-col {
    flex: 1;
    font-size: 1em;
    line-height: 1.85;
    color: var(--global-text-color);
    word-break: keep-all;
  }
  .intro-body-col p {
    margin-top: 0;
    margin-bottom: 16px;
  }
  @media (max-width: 700px) {
    .intro-section {
      flex-direction: column;
      gap: 16px;
    }
    .intro-title-col {
      width: 100%;
    }
  }

  /* Projects Card Styles */
  .project-item {
    background: var(--global-bg-color);
    border: 1px solid var(--global-border-color);
    border-radius: var(--border-radius);
    padding: 24px;
    margin-bottom: 20px;
    box-shadow: var(--box-shadow);
    transition: var(--global-transition);
  }
  .project-item:hover {
    transform: translateY(-3px);
    border-color: var(--global-dark-border-color);
    box-shadow: 0 8px 24px rgba(69, 168, 109, 0.12);
  }
  .project-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 8px;
  }
  .project-name {
    font-size: 1.25em;
    font-weight: 700;
    color: var(--global-text-color);
    margin: 0;
  }
  .project-role {
    font-size: 0.9em;
    font-weight: 600;
    color: var(--global-base-color);
  }
  .project-link-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 0.82em;
    padding: 4px 12px;
    border-radius: 6px;
    background: rgba(110, 189, 141, 0.12);
    color: var(--global-base-color);
    text-decoration: none;
    font-weight: 600;
    border: 1px solid rgba(110, 189, 141, 0.3);
    transition: var(--global-transition);
    margin-left: 8px;
  }
  .project-link-btn:hover {
    background: var(--global-base-color);
    color: #fff;
    text-decoration: none;
  }

  /* SKILL Group Layout (유용우님 사진 1 스타일) */
  .skill-group {
    display: flex;
    align-items: flex-start;
    padding: 16px 0;
    border-bottom: 1px solid var(--global-border-color);
    gap: 20px;
  }
  .skill-group:last-child {
    border-bottom: none;
  }
  .skill-group-title {
    width: 200px;
    flex-shrink: 0;
    font-weight: 700;
    font-size: 0.95em;
    color: var(--global-text-color);
    text-align: right;
    padding-top: 5px;
  }
  .skill-chips {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  .skill-chip {
    display: inline-block;
    background: var(--global-footer-bg-color);
    color: var(--global-text-color);
    padding: 5px 14px;
    border-radius: 20px;
    font-size: 0.85em;
    font-weight: 500;
    border: 1px solid var(--global-border-color);
    transition: var(--global-transition);
  }
  .skill-chip:hover {
    background: var(--global-base-color);
    color: #fff;
    border-color: var(--global-base-color);
    transform: translateY(-2px);
  }
  @media (max-width: 650px) {
    .skill-group {
      flex-direction: column;
      gap: 8px;
    }
    .skill-group-title {
      width: 100%;
      text-align: left;
      color: var(--global-base-color);
    }
  }

  /* Education & ETC Timeline Style */
  .edu-timeline, .etc-timeline {
    border-top: 1.5px solid var(--global-border-color);
    margin-top: 16px;
    margin-bottom: 24px;
  }
  .edu-item, .etc-item {
    display: flex;
    align-items: baseline;
    padding: 20px 10px;
    border-bottom: 1px solid var(--global-border-color);
    transition: var(--global-transition);
  }
  .edu-item:hover, .etc-item:hover {
    background-color: rgba(110, 189, 141, 0.05);
    border-radius: 8px;
    padding-left: 16px;
  }
  .edu-date, .etc-date {
    width: 220px;
    flex-shrink: 0;
    font-size: 0.95em;
    font-weight: 600;
    color: var(--global-text-color-light);
    letter-spacing: -0.2px;
  }
  .edu-content, .etc-content {
    flex: 1;
    min-width: 0;
  }
  .edu-title, .etc-title {
    font-size: 1.05em;
    font-weight: 700;
    color: var(--global-text-color);
    margin: 0 0 6px 0;
    line-height: 1.4;
    word-break: keep-all;
  }
  .edu-title a, .etc-title a {
    color: inherit;
    text-decoration: none;
    transition: var(--global-transition);
  }
  .edu-title a:hover, .etc-title a:hover {
    color: var(--global-base-color);
  }
  .edu-desc, .etc-desc {
    font-size: 0.9em;
    font-style: italic;
    color: var(--global-text-color-light);
    margin: 0;
    line-height: 1.6;
    word-break: keep-all;
  }
  .edu-desc a, .etc-desc a {
    color: var(--global-base-color);
    text-decoration: underline;
    font-style: normal;
  }
  @media (max-width: 650px) {
    .edu-item, .etc-item {
      flex-direction: column;
      align-items: flex-start;
      gap: 6px;
      padding: 16px 6px;
    }
    .edu-item:hover, .etc-item:hover {
      padding-left: 6px;
    }
    .edu-date, .etc-date {
      width: 100%;
      font-size: 0.88em;
      color: var(--global-base-color);
    }
  }

  /* Foldable Toggle Button */
  .etc-fold-wrapper {
    text-align: center;
    margin-top: 14px;
    margin-bottom: 24px;
  }
  .etc-fold-btn {
    background: var(--global-bg-color);
    border: 1px solid var(--global-border-color);
    color: var(--global-text-color);
    padding: 8px 24px;
    border-radius: 20px;
    font-size: 0.88em;
    font-weight: 600;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    transition: var(--global-transition);
  }
  .etc-fold-btn:hover {
    background: var(--global-footer-bg-color);
    border-color: var(--global-base-color);
    color: var(--global-base-color);
  }
</style>

<!-- Profile Header -->
<div class="bio-header" style="display: flex; align-items: center; justify-content: space-between; gap: 40px; margin-bottom: 30px; flex-wrap: wrap-reverse;">
  <div class="bio-text" style="flex: 1; min-width: 320px;">
    <h1 style="margin-top: 0; font-size: 2.2em; line-height: 1.3; font-weight: 800; letter-spacing: -0.5px;">
      이혜리 <span style="font-size: 0.6em; font-weight: 500; color: var(--global-text-color-light);">(HyeRi Lee)</span><br>
      <span style="font-size: 0.68em; font-weight: 600; color: var(--global-base-color);">from Web UI to Reliable Backend Developer</span>
    </h1>
    <p style="font-size: 1.05em; color: var(--global-text-color); line-height: 1.8; margin-bottom: 24px;">
      <strong style="color: var(--global-base-color);">
        "동작하는 기능보다, 오래 안정적으로 운영되는 서비스를 만듭니다."
      </strong><br>
      실시간 IoT 데이터 관제 대시보드와 공공 솔루션 개발 경험을 바탕으로, 데이터 정합성과 응답 성능을 끊임없이 고민하는 백엔드 개발자입니다.
    </p>
    <div class="bio-links" style="display: flex; gap: 12px; flex-wrap: wrap;">
      <a href="mailto:cabinkss02@naver.com" style="background: var(--global-base-color); color: #fff; padding: 9px 20px; border-radius: 30px; font-weight: bold; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; box-shadow: 0 4px 10px rgba(69, 168, 109, 0.25); transition: var(--global-transition);">
        <i class="fa-solid fa-envelope"></i> Email
      </a>
      <a href="https://github.com/leehyeri19" style="background: #24292e; color: #fff; padding: 9px 20px; border-radius: 30px; font-weight: bold; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: var(--global-transition);">
        <i class="fa-brands fa-github"></i> GitHub
      </a>
      <a href="https://hyeri-lee.tistory.com/" style="background: #e65f2b; color: #fff; padding: 9px 20px; border-radius: 30px; font-weight: bold; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: var(--global-transition);">
        <i class="fa-solid fa-blog"></i> Blog
      </a>
      <a href="https://www.linkedin.com/in/hyrilee0713/" target="_blank" rel="noopener noreferrer" style="background: #0A66C2; color: #fff; padding: 9px 20px; border-radius: 30px; font-weight: bold; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: var(--global-transition);">
        <i class="fa-brands fa-linkedin"></i> LinkedIn
      </a>
    </div>
  </div>
  <div class="bio-avatar" style="text-align: center; flex-shrink: 0; margin-left: auto; margin-right: auto;">
    <img src="/images/profile.png" alt="이혜리" style="width: 190px; height: 190px; border-radius: 50%; object-fit: cover; border: 4px solid var(--global-base-color); box-shadow: 0 10px 30px rgba(69, 168, 109, 0.2); transition: var(--global-transition);">
  </div>
</div>

<!-- Notice Banner -->
<div class="notice-banner">
  <i class="fa-solid fa-bell"></i>
  <span>프로젝트 제안 및 채용 관련 문의는 <strong>이메일(cabinkss02@naver.com)</strong>로 편하게 연락 부탁드립니다.</span>
</div>

<!-- Stats Highlights Cards (3개 핵심 수치 지표) -->
<div class="stats-grid">
  <div class="stat-card">
    <div class="stat-number">3년 1개월</div>
    <div class="stat-label">Total Experience</div>
  </div>
  <div class="stat-card">
    <div class="stat-number">3+</div>
    <div class="stat-label">Key Public Projects</div>
  </div>
  <div class="stat-card">
    <div class="stat-number">1.5년+</div>
    <div class="stat-label">Tech Blogging</div>
  </div>
</div>

<!-- INTRODUCE Story (유용우님 이력서 사진 3 스타일) -->
<div class="intro-section">
  <div class="intro-title-col">Introduce</div>
  <div class="intro-body-col">
    <p>
      스파이어테크놀로지에서 <strong>3년 1개월(현장실습 4개월 + 재직 2년 9개월)</strong> 동안 공공 IoT 관제 및 빅데이터 솔루션 개발을 담당해 왔습니다. 수성구 스마트 주차정보 시스템, 과천시 기후환경 관리시스템, 대구시 데이터허브 등 대규모 공공 인프라 프로젝트에서 실시간 데이터 시각화와 웹/백엔드 인터페이스를 주도적으로 구축했습니다.
    </p>
    <p>
      대량으로 유입되는 센서 및 단말 데이터를 안정적으로 처리하기 위해 <strong>Redis 인메모리 캐싱</strong>을 도입하여 응답 지연을 최소화하고 데이터베이스 부하를 낮추는 등, 단순한 기능 구현을 넘어 <strong>"운영 지속성과 데이터 품질"</strong>을 개선하는 개발을 지향합니다.
    </p>
    <p>
      2023년 2월부터는 개인 기술 블로그를 운영하며 실무에서 겪은 트러블슈팅과 Java/Spring 핵심 개념을 꾸준히 기록하고 있습니다. 혼자 알고 넘어가는 것보다 원인을 정리하고 공유할 때 더 깊이 있는 엔지니어가 된다고 믿으며, 팀과 사용자 모두에게 신뢰받는 개발자로 성장하고 있습니다.
    </p>
  </div>
</div>

<!-- 3-Column Highlights Cards (유용우님 이력서 사진 2 스타일) -->
<div class="highlight-grid">
  <div class="highlight-card">
    <div>
      <h3 class="highlight-card-title">Public & IoT Solutions</h3>
      <p class="highlight-card-desc">
        수성구 주차관제, 과천시 환경관리, 대구시 데이터허브 등 시민과 관리자가 신뢰하는 대규모 공공 인프라 웹 솔루션 구축 경험
      </p>
    </div>
    <div class="highlight-tags">
      <span class="highlight-tag">Public Projects</span>
      <span class="highlight-tag">IoT Dashboard</span>
      <span class="highlight-tag">Real-time</span>
    </div>
  </div>

  <div class="highlight-card">
    <div>
      <h3 class="highlight-card-title">Data Reliability & Speed</h3>
      <p class="highlight-card-desc">
        Redis 인메모리 캐싱을 통한 실시간 센서 데이터 지연 최소화, 데이터 정합성 검증 및 안정적인 대시보드 렌더링 최적화
      </p>
    </div>
    <div class="highlight-tags">
      <span class="highlight-tag">Redis Caching</span>
      <span class="highlight-tag">Performance</span>
      <span class="highlight-tag">DB Tuning</span>
    </div>
  </div>

  <div class="highlight-card">
    <div>
      <h3 class="highlight-card-title">Continuous Archiving</h3>
      <p class="highlight-card-desc">
        2023년 2월부터 운영해온 기술 블로그를 통해 실무 트러블슈팅 과정과 백엔드 학습 내역을 체계적으로 기록하고 공유
      </p>
    </div>
    <div class="highlight-tags">
      <span class="highlight-tag">Tech Blog</span>
      <span class="highlight-tag">Troubleshooting</span>
      <span class="highlight-tag">Growth</span>
    </div>
  </div>
</div>

---

## 💼 Work Experience (경력)
<p style="margin-top: -6px; margin-bottom: 20px; font-weight: 600; color: var(--global-base-color); font-size: 0.98em;">
  <i class="fa-solid fa-clock"></i> TOTAL : 3년 1개월 (2023.09 ~ 현재)
</p>

<!-- 1. 정규직 재직 -->
<div class="card">
  <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 10px; margin-bottom: 6px;">
    <h3 class="card-title" style="margin: 0; font-size: 1.25em;">스파이어테크놀로지 (Spire Technology)</h3>
    <span style="font-weight: bold; color: var(--global-base-color); font-size: 0.95em;">2024.01 ~ 현재 (재직 중 / 2년 9개월)</span>
  </div>
  <div class="card-subtitle">정규직 · Java 백엔드 및 실시간 관제 웹 개발</div>
  <p style="margin: 12px 0; font-size: 0.95em; line-height: 1.7; color: var(--global-text-color);">
    AI 기반 통신망 품질 솔루션 및 공공 ICT 단말 관제 시스템을 개발하는 전문 기업에서, 실시간 단말 현황판 웹 UI 개발 및 Java 백엔드 API 연동을 수행하고 있습니다.
  </p>
  <ul style="margin: 0; padding-left: 20px; font-size: 0.95em; line-height: 1.75; color: var(--global-text-color);">
    <li><strong>실시간 단말 관제 대시보드 웹 개발</strong>: 대량의 통신/환경 센서 단말 작동 상태를 직관적으로 모니터링하는 웹 화면 구축</li>
    <li><strong>Java & Spring 백엔드 API 연동</strong>: RESTful API 설계 및 연동, 데이터 정합성 검증 및 화면 렌더링 최적화</li>
    <li><strong>Redis 캐싱 연동을 통한 성능 개선</strong>: 빈번한 센서 수집 데이터의 DB 부하를 줄이고 UI 실시간 표출 지연 단축</li>
    <li><strong>공공 ICT 프로젝트 안정적 운영 지원</strong>: 수성구 주차정보, 과천시 기후환경, 대구시 데이터허브 등 공공 서비스 개발 참여</li>
  </ul>
</div>

<!-- 2. 현장실습 -->
<div class="card">
  <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 10px; margin-bottom: 6px;">
    <h3 class="card-title" style="margin: 0; font-size: 1.25em;">스파이어테크놀로지 (Spire Technology)</h3>
    <span style="font-weight: bold; color: var(--global-base-color); font-size: 0.95em;">2023.09 ~ 2023.12 (4개월)</span>
  </div>
  <div class="card-subtitle">산학협력 현장실습 (인턴) · 웹 개발</div>
  <p style="margin: 12px 0; font-size: 0.95em; line-height: 1.7; color: var(--global-text-color);">
    학부 연계 산학협력 현장실습생으로 참여하여 실무 웹 개발 프로세스를 습득하고, 단말 현황판 컴포넌트 개발 업무를 수행했습니다. 성실한 과업 완수와 실무 적응력을 인정받아 <strong>정규직으로 연계 채용</strong>되었습니다.
  </p>
  <ul style="margin: 0; padding-left: 20px; font-size: 0.95em; line-height: 1.75; color: var(--global-text-color);">
    <li>단말 장치 현황판의 기초 웹 UI 레이아웃 및 반응형 컴포넌트 제작</li>
    <li>사내 코드 컨벤션 습득 및 프론트엔드-백엔드 비동기 통신 기초 프로세스 참여</li>
  </ul>
</div>

---

## 🚀 Projects (주요 프로젝트)
<p style="margin-top: -6px; margin-bottom: 20px; color: var(--global-text-color-light); font-size: 0.9em;">
  * 회사 보안 및 기밀 유지를 위해 시스템 아키텍처와 기술적 문제 해결(Troubleshooting) 역량 중심으로 기술하였습니다.
</p>

<!-- 프로젝트 1: 수성구 -->
<div class="project-item">
  <div class="project-header">
    <div>
      <h3 class="project-name" style="display: inline-block;">수성구 스마트 주차정보 시스템 관제 대시보드</h3>
      <a href="https://parking.suseong.kr/dashboard/index" target="_blank" rel="noopener noreferrer" class="project-link-btn">
        <i class="fa-solid fa-arrow-up-right-from-square"></i> 서비스 바로가기
      </a>
    </div>
    <span class="project-role">웹 프론트엔드 및 데이터 연동 개발</span>
  </div>
  <p style="font-size: 0.92em; color: var(--global-text-color-light); margin-bottom: 12px;">
    <strong>공공 프로젝트</strong> · 대구 수성구 관내 공영주차장 실시간 주차면 잔여 현황 및 모니터링 관제 시스템
  </p>
  <ul style="margin: 0; padding-left: 20px; font-size: 0.93em; line-height: 1.75; color: var(--global-text-color);">
    <li>시민과 관리자가 한눈에 수성구 공영주차장별 <strong>실시간 잔여 주차면 수</strong>를 확인할 수 있는 관제 대시보드 화면 개발</li>
    <li>비동기 REST API 통신을 통해 주기적으로 갱신되는 주차 데이터를 차트 및 현황판 UI에 효율적으로 렌더링</li>
    <li>다양한 해상도와 모니터 환경에서 원활하게 관제할 수 있도록 반응형 UI 레이아웃 최적화</li>
  </ul>
  <div style="margin-top: 14px;">
    <span class="highlight-tag">Web UI</span>
    <span class="highlight-tag">REST API</span>
    <span class="highlight-tag">Public Service</span>
    <span class="highlight-tag">Real-time Dashboard</span>
  </div>
</div>

<!-- 프로젝트 2: 과천시 -->
<div class="project-item">
  <div class="project-header">
    <h3 class="project-name">과천시 기후환경 관리시스템</h3>
    <span class="project-role">Redis 캐싱 및 실시간 관제 UI 개발</span>
  </div>
  <p style="font-size: 0.92em; color: var(--global-text-color-light); margin-bottom: 12px;">
    <strong>공공/환경 프로젝트</strong> · 관내 다량의 기후·환경 센서 측정 데이터 실시간 모니터링 시스템
  </p>
  <ul style="margin: 0; padding-left: 20px; font-size: 0.93em; line-height: 1.75; color: var(--global-text-color);">
    <li>초 단위로 대량 유입되는 기후·환경 센서 수집 데이터를 지연 없이 표출하기 위해 <strong>Redis 인메모리 캐시 레이어 도입</strong></li>
    <li>반복적인 DB 조회를 캐시로 분산하여 데이터베이스 부하 경감 및 대시보드 응답 속도 대폭 개선</li>
    <li>환경 이상 징후 발생 시 관리자가 즉각 인지할 수 있는 실시간 데이터 바인딩 및 시각화 화면 구축</li>
  </ul>
  <div style="margin-top: 14px;">
    <span class="highlight-tag">Redis</span>
    <span class="highlight-tag">In-Memory Cache</span>
    <span class="highlight-tag">IoT Sensor Data</span>
    <span class="highlight-tag">Performance Tuning</span>
  </div>
</div>

<!-- 프로젝트 3: 대구시 -->
<div class="project-item">
  <div class="project-header">
    <h3 class="project-name">대구시 데이터허브 API 신청 및 이용현황 서비스</h3>
    <span class="project-role">OpenAPI 신청 및 사용 통계 시각화 웹 개발</span>
  </div>
  <p style="font-size: 0.92em; color: var(--global-text-color-light); margin-bottom: 12px;">
    <strong>공공 데이터 플랫폼</strong> · 대구 스마트시티 데이터허브 OpenAPI 신청/승인 및 트래픽 현황 모니터링
  </p>
  <ul style="margin: 0; padding-left: 20px; font-size: 0.93em; line-height: 1.75; color: var(--global-text-color);">
    <li>사용자가 원하는 공공 OpenAPI를 손쉽게 신청하고 승인 상태를 실시간으로 확인할 수 있는 신청·관리 플로우 개발</li>
    <li>대용량 API 호출 이력 및 이용 통계 데이터를 그리드 및 통계 차트로 시각화하여 데이터 조회 편의성 향상</li>
    <li>신청 폼 유효성 검증 및 비동기 API 통신을 통해 새로고침 없는 매끄러운 사용자 경험 제공</li>
  </ul>
  <div style="margin-top: 14px;">
    <span class="highlight-tag">OpenAPI</span>
    <span class="highlight-tag">Data Hub</span>
    <span class="highlight-tag">Statistics Dashboard</span>
    <span class="highlight-tag">Async UI</span>
  </div>
</div>

---

## 🛠️ SKILL (기술 스택)

<div class="card" style="padding: 10px 24px;">
  <!-- Languages -->
  <div class="skill-group">
    <div class="skill-group-title">Languages</div>
    <div class="skill-chips">
      <span class="skill-chip">Java</span>
      <span class="skill-chip">JavaScript</span>
      <span class="skill-chip">HTML5 / CSS3</span>
      <span class="skill-chip">SQL</span>
    </div>
  </div>

  <!-- Frameworks & Libraries -->
  <div class="skill-group">
    <div class="skill-group-title">Frameworks & Libraries</div>
    <div class="skill-chips">
      <span class="skill-chip">Spring Framework</span>
      <span class="skill-chip">Spring Boot</span>
      <span class="skill-chip">jQuery</span>
      <span class="skill-chip">Bootstrap</span>
    </div>
  </div>

  <!-- Infrastructure & Databases -->
  <div class="skill-group">
    <div class="skill-group-title">Infrastructure & DB</div>
    <div class="skill-chips">
      <span class="skill-chip">Redis</span>
      <span class="skill-chip">MySQL</span>
      <span class="skill-chip">Oracle</span>
      <span class="skill-chip">PostgreSQL</span>
      <span class="skill-chip">Docker</span>
      <span class="skill-chip">Linux</span>
    </div>
  </div>

  <!-- Tools & IDEs -->
  <div class="skill-group">
    <div class="skill-group-title">Tools & IDEs</div>
    <div class="skill-chips">
      <span class="skill-chip">IntelliJ IDEA</span>
      <span class="skill-chip">Eclipse</span>
      <span class="skill-chip">Git</span>
      <span class="skill-chip">GitHub</span>
      <span class="skill-chip">VS Code</span>
    </div>
  </div>

  <!-- Domains & Specialties -->
  <div class="skill-group">
    <div class="skill-group-title">Domain Specialties</div>
    <div class="skill-chips">
      <span class="skill-chip">Real-time IoT Dashboard</span>
      <span class="skill-chip">RESTful API</span>
      <span class="skill-chip">Public Data Integration</span>
      <span class="skill-chip">Data Reliability</span>
    </div>
  </div>
</div>

---

## 🎓 Education (학력)

<div class="edu-timeline">
  <div class="edu-item">
    <div class="edu-date">2019. 03 ~ 2024. 02</div>
    <div class="edu-content">
      <div class="edu-title">
        <a href="https://community.bu.ac.kr/info/1803/subview.do" target="_blank" rel="noopener noreferrer">백석대학교 (Baekseok University)</a>
      </div>
      <div class="edu-desc">컴퓨터공학부 소프트웨어공학과 학사 졸업 · 학점 (3.65 / 4.5)</div>
    </div>
  </div>

  <div class="edu-item">
    <div class="edu-date">2017. 03 ~ 2019. 02</div>
    <div class="edu-content">
      <div class="edu-title">분당영덕여자고등학교</div>
      <div class="edu-desc">자연계열(이과) 졸업 (경기도 성남시)</div>
    </div>
  </div>
</div>

---

## 📌 ETC (기타 활동 및 수상)

<div class="etc-timeline" id="etc-timeline-list">
  <!-- 항목 1: 재직 -->
  <div class="etc-item">
    <div class="etc-date">2024. 01 ~ 현재</div>
    <div class="etc-content">
      <div class="etc-title">스파이어테크놀로지 (Spire Technology) 재직</div>
      <div class="etc-desc">Java 백엔드 및 실시간 단말 현황판 웹 UI 개발</div>
    </div>
  </div>

  <!-- 항목 2: 기술블로그 -->
  <div class="etc-item">
    <div class="etc-date">2023. 02 ~ 현재</div>
    <div class="etc-content">
      <div class="etc-title"><a href="https://hyeri-lee.tistory.com/" target="_blank" rel="noopener noreferrer">기술 블로그 운영 및 지식 아카이빙</a></div>
      <div class="etc-desc">Java / Spring 학습 과정 및 실무 트러블슈팅 경험 기록 공유 (<a href="https://hyeri-lee.tistory.com/" target="_blank" rel="noopener noreferrer">Tistory Blog</a>)</div>
    </div>
  </div>

  <!-- 항목 3: 백석대 경진대회 -->
  <div class="etc-item">
    <div class="etc-date">2022. 12 ~</div>
    <div class="etc-content">
      <div class="etc-title">백석대학교 프로그래밍 경진대회 장려상</div>
      <div class="etc-desc">백석대학교 주최 JAVA 프로그래밍 경진대회 수상 (알고리즘 및 객체지향 프로그래밍 역량 검증)</div>
    </div>
  </div>

  <!-- 항목 4: IIBC 공모전 -->
  <div class="etc-item">
    <div class="etc-date">2022. 11 ~</div>
    <div class="etc-content">
      <div class="etc-title">IIBC Start up Invention Contest 단체상 수상</div>
      <div class="etc-desc">(사)한국인터넷방송통신학회 주최 · 외국인 관광객 맞춤형 여행 추천 프로젝트 (공공데이터 및 지도 API 연동, 웹 퍼블리싱)</div>
    </div>
  </div>

  <!-- 항목 5: 학부 캡스톤 프로젝트 (5개 이상 폴더블 테스트 및 어필용) -->
  <div class="etc-item">
    <div class="etc-date">2019. 03 ~</div>
    <div class="etc-content">
      <div class="etc-title">백석대학교 컴퓨터공학부 입학 및 프로그래밍 입문</div>
      <div class="etc-desc">C/Java 기초 알고리즘 및 객체지향 프로그래밍, 데이터베이스 전공 기초 이수</div>
    </div>
  </div>
</div>

<!-- Foldable Toggle Button (5개 이상 시 동적 활성화) -->
<div class="etc-fold-wrapper" id="etc-fold-wrapper" style="display: none;">
  <button type="button" class="etc-fold-btn" id="etc-toggle-btn" data-expanded="false">
    <i class="fa-solid fa-chevron-down"></i> 더보기
  </button>
</div>

