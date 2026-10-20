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

  /* Section Headings (Minimal & Modern Style) */
  .section-heading-wrap {
    display: flex;
    align-items: baseline;
    gap: 12px;
    margin-top: 48px;
    margin-bottom: 22px;
    border-bottom: 1.5px solid var(--global-border-color);
    padding-bottom: 8px;
  }
  .section-title-en {
    font-size: 1.25em;
    font-weight: 800;
    letter-spacing: 1.2px;
    color: var(--global-text-color);
    text-transform: uppercase;
    margin: 0;
  }
  .section-title-kr {
    font-size: 0.88em;
    font-weight: 500;
    color: var(--global-text-color-light);
    letter-spacing: -0.2px;
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
    margin-bottom: 28px;
    font-size: 0.95em;
    color: var(--global-text-color);
  }
  .notice-banner i {
    color: var(--global-base-color);
    font-size: 1.1em;
  }

  /* Stats Container */
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

  /* 3-Column Highlights Cards */
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
    font-size: 1.05em;
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

  /* Introduce Story Layout */
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
    letter-spacing: 1.5px;
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

  /* Projects Card Styles with PSI (Problem-Solution-Impact) */
  .project-item {
    background: var(--global-bg-color);
    border: 1px solid var(--global-border-color);
    border-radius: var(--border-radius);
    padding: 24px;
    margin-bottom: 24px;
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
    margin-bottom: 6px;
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
  .project-summary-text {
    font-size: 0.93em;
    color: var(--global-text-color-light);
    margin-bottom: 16px;
    line-height: 1.6;
  }

  /* PSI (Problem-Solution-Impact) Breakdown */
  .project-psi-block {
    display: flex;
    flex-direction: column;
    gap: 12px;
    background: rgba(0, 0, 0, 0.02);
    border-radius: 8px;
    padding: 16px;
    margin-top: 14px;
    margin-bottom: 16px;
    border: 1px dashed var(--global-border-color);
  }
  .psi-row {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    font-size: 0.93em;
    line-height: 1.7;
  }
  .psi-badge {
    flex-shrink: 0;
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 0.78em;
    font-weight: 700;
    letter-spacing: 0.5px;
    margin-top: 2px;
  }
  .psi-badge-problem {
    background: rgba(220, 53, 69, 0.12);
    color: #e05353;
    border: 1px solid rgba(220, 53, 69, 0.25);
  }
  .psi-badge-solution {
    background: rgba(13, 110, 253, 0.12);
    color: #3b82f6;
    border: 1px solid rgba(13, 110, 253, 0.25);
  }
  .psi-badge-impact {
    background: rgba(110, 189, 141, 0.16);
    color: var(--global-base-color);
    border: 1px solid rgba(110, 189, 141, 0.35);
  }
  .psi-desc {
    flex: 1;
    color: var(--global-text-color);
    word-break: keep-all;
  }
  @media (max-width: 650px) {
    .psi-row {
      flex-direction: column;
      gap: 4px;
    }
  }

  /* Article Cards (Knowledge Sharing) */
  .article-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    margin-bottom: 24px;
  }
  .article-card {
    background: var(--global-bg-color);
    border: 1px solid var(--global-border-color);
    border-radius: var(--border-radius);
    padding: 20px;
    box-shadow: var(--box-shadow);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-decoration: none !important;
    color: inherit;
    transition: var(--global-transition);
  }
  .article-card:hover {
    transform: translateY(-3px);
    border-color: var(--global-base-color);
    box-shadow: 0 8px 24px rgba(69, 168, 109, 0.15);
  }
  .article-card-title {
    font-size: 1.02em;
    font-weight: 700;
    color: var(--global-text-color);
    margin: 0 0 10px 0;
    line-height: 1.45;
    word-break: keep-all;
  }
  .article-card-desc {
    font-size: 0.88em;
    color: var(--global-text-color-light);
    line-height: 1.6;
    margin: 0 0 16px 0;
    flex-grow: 1;
    word-break: keep-all;
  }
  .article-card-meta {
    font-size: 0.82em;
    color: var(--global-base-color);
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 6px;
  }
  @media (max-width: 850px) {
    .article-grid {
      grid-template-columns: 1fr;
    }
  }

  /* SKILL Group Layout */
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
      <span style="font-size: 0.68em; font-weight: 700; color: var(--global-base-color); letter-spacing: 0.5px;">Backend Engineer</span>
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

<!-- INTRODUCE Story -->
<div class="intro-section">
  <div class="intro-title-col">Introduce</div>
  <div class="intro-body-col">
    <p>
      스파이어테크놀로지에서 <strong>3년 1개월(현장실습 4개월 + 정규직 2년 9개월)</strong> 동안 공공 IoT 관제 및 실시간 솔루션 개발을 담당해 왔습니다. 수성구 스마트 주차정보 시스템, 과천시 기후환경 관리시스템, 대구시 데이터허브 등 대규모 공공 인프라 프로젝트에서 실시간 데이터 파이프라인과 웹/백엔드 인터페이스를 주도적으로 구축했습니다.
    </p>
    <p>
      대량으로 유입되는 센서 데이터의 지연을 해결하기 위해 기존 1분 주기 Polling 방식을 <strong>Redis 인메모리 캐시 레이어로 전환하여 데이터 표출 지연을 최대 60초에서 1초 미만(98% 단축)으로 개선</strong>하고, RDBMS 단순 조회 부하를 80% 이상 절감하는 등 <strong>"데이터 정합성과 운영 신뢰성"</strong>을 최우선으로 두는 백엔드 개발을 지향합니다.
    </p>
    <p>
      2023년 2월부터 개인 기술 블로그를 운영하며 실무에서 겪은 트러블슈팅과 Spring/Java 핵심 아키텍처를 꾸준히 기록해 왔습니다. 단순한 기능 구현을 넘어 원인을 분석하고 문서화하여 팀과 공유할 때 지속 가능한 엔지니어링이 가능하다고 믿습니다.
    </p>
  </div>
</div>

<!-- 3-Column Highlights Cards -->
<div class="highlight-grid">
  <div class="highlight-card">
    <div>
      <h3 class="highlight-card-title">Real-time IoT & Reliability</h3>
      <p class="highlight-card-desc">
        Redis 인메모리 캐싱 도입으로 데이터 지연 98% 단축, 대량 센서 데이터의 정합성 보장 및 무중단 관제 환경 구현
      </p>
    </div>
    <div class="highlight-tags">
      <span class="highlight-tag">Redis Cache</span>
      <span class="highlight-tag">Sub-second</span>
      <span class="highlight-tag">Data Consistency</span>
    </div>
  </div>

  <div class="highlight-card">
    <div>
      <h3 class="highlight-card-title">Public Mission-Critical Systems</h3>
      <p class="highlight-card-desc">
        수성구 주차관제, 과천시 기후환경, 대구시 데이터허브 등 지자체 시민과 관리자가 신뢰하는 대규모 공공 솔루션 개발
      </p>
    </div>
    <div class="highlight-tags">
      <span class="highlight-tag">Public Projects</span>
      <span class="highlight-tag">RESTful API</span>
      <span class="highlight-tag">Monitoring</span>
    </div>
  </div>

  <div class="highlight-card">
    <div>
      <h3 class="highlight-card-title">Continuous Archiving & Growth</h3>
      <p class="highlight-card-desc">
        기술 블로그 포스팅을 통해 Spring IoC/Security, 비동기 통신 원리, 실무 트러블슈팅을 꾸준히 기록하고 체화
      </p>
    </div>
    <div class="highlight-tags">
      <span class="highlight-tag">Tech Blog</span>
      <span class="highlight-tag">Spring Core</span>
      <span class="highlight-tag">Troubleshooting</span>
    </div>
  </div>
</div>

<!-- EXPERIENCE -->
<div class="section-heading-wrap">
  <h2 class="section-title-en">Experience</h2>
  <span class="section-title-kr">경력</span>
</div>
<p style="margin-top: -10px; margin-bottom: 22px; font-weight: 600; color: var(--global-base-color); font-size: 0.95em;">
  TOTAL : 3년 1개월 (2023.09 ~ 현재)
</p>

<!-- 1. 정규직 재직 -->
<div class="card">
  <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 10px; margin-bottom: 6px;">
    <h3 class="card-title" style="margin: 0; font-size: 1.25em;">스파이어테크놀로지 (Spire Technology)</h3>
    <span style="font-weight: bold; color: var(--global-base-color); font-size: 0.95em;">2024.01 ~ 현재 (재직 중 / 2년 9개월)</span>
  </div>
  <div class="card-subtitle">정규직 · Java 백엔드 및 실시간 관제 시스템 개발</div>
  <p style="margin: 12px 0; font-size: 0.95em; line-height: 1.7; color: var(--global-text-color);">
    공공 ICT 단말 관제 및 통신망 품질 솔루션 기업에서 실시간 대시보드 API 설계, 데이터 수집 파이프라인 최적화, Redis 캐싱 레이어 구축 업무를 수행하고 있습니다.
  </p>
  <ul style="margin: 0; padding-left: 20px; font-size: 0.95em; line-height: 1.75; color: var(--global-text-color);">
    <li><strong>실시간 센서 데이터 캐싱 및 지연 최적화</strong>: Redis 인메모리 캐시를 적용하여 주기적 폴링에 따른 DB 부하를 약 80% 절감하고 응답 지연을 1초 미만으로 단축</li>
    <li><strong>Java & Spring 기반 RESTful API 설계 및 연동</strong>: 관제 대시보드용 표준 API 명세 작성, 입력 유효성 검증 및 예외 처리 아키텍처 정립</li>
    <li><strong>공공 인프라 프로젝트 개발 및 안정적 납품</strong>: 수성구 스마트 주차정보, 과천시 기후환경 관리, 대구시 데이터허브 등 지자체 핵심 과업 완수</li>
  </ul>
</div>

<!-- 2. 현장실습 -->
<div class="card">
  <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 10px; margin-bottom: 6px;">
    <h3 class="card-title" style="margin: 0; font-size: 1.25em;">스파이어테크놀로지 (Spire Technology)</h3>
    <span style="font-weight: bold; color: var(--global-base-color); font-size: 0.95em;">2023.09 ~ 2023.12 (4개월)</span>
  </div>
  <div class="card-subtitle">산학협력 현장실습 (인턴) · 웹 및 데이터 연동 개발</div>
  <p style="margin: 12px 0; font-size: 0.95em; line-height: 1.7; color: var(--global-text-color);">
    산학협력 실습생으로 참여하여 실무 관제 UI 컴포넌트 개발과 비동기 데이터 통신을 수행하였으며, 적극적인 과업 완수와 기술 습득력을 인정받아 <strong>정규직으로 연계 채용</strong>되었습니다.
  </p>
  <ul style="margin: 0; padding-left: 20px; font-size: 0.95em; line-height: 1.75; color: var(--global-text-color);">
    <li>단말 장치 현황판 웹 컴포넌트 레이아웃 및 반응형 화면 제작</li>
    <li>사내 코드 컨벤션 습득 및 프론트엔드-백엔드 비동기 통신 프로세스 참여</li>
  </ul>
</div>

<!-- PROJECTS -->
<div class="section-heading-wrap" id="projects">
  <h2 class="section-title-en">Projects</h2>
  <span class="section-title-kr">주요 프로젝트 및 문제 해결</span>
</div>
<p style="margin-top: -10px; margin-bottom: 22px; color: var(--global-text-color-light); font-size: 0.9em;">
  * 회사 보안 및 기밀 유지를 위해 기술적 문제 해결(Troubleshooting)과 아키텍처 성과 중심으로 기술하였습니다.
</p>

<!-- 프로젝트 1: 과천시 기후환경 (가장 강력한 Redis 사례를 맨 위로 배치) -->
<div class="project-item">
  <div class="project-header">
    <h3 class="project-name">과천시 기후환경 관리시스템</h3>
    <span class="project-role">Redis 캐싱 아키텍처 및 실시간 관제 시스템 개발</span>
  </div>
  <div class="project-summary-text">
    <strong>공공/환경 인프라 프로젝트</strong> · 관내 다량의 기후·환경 센서 측정 데이터 실시간 모니터링 시스템
  </div>

  <div class="project-psi-block">
    <div class="psi-row">
      <span class="psi-badge psi-badge-problem">PROBLEM</span>
      <div class="psi-desc">
        기존 화면의 1분(60초) 주기 HTTP Polling 방식은 기후 이상(미세먼지 급증, 침수 등) 발생 시 최대 60초의 정보 지연이 발생하여 골든타임 내 긴급 대응이 어려웠고, 다수 클라이언트의 주기적 폴링으로 인해 RDBMS에 불필요한 반복 조회 쿼리 부하가 상존함.
      </div>
    </div>
    <div class="psi-row">
      <span class="psi-badge psi-badge-solution">SOLUTION</span>
      <div class="psi-desc">
        센서 데이터 인입 즉시 최신 상태를 관리할 수 있도록 <strong>Redis 인메모리 캐시 레이어를 구축</strong>하고, 데이터 유효시간(TTL)과 갱신 파이프라인을 정립하여 화면에서 캐시된 실시간 데이터를 지연 없이 조회하도록 전환.
      </div>
    </div>
    <div class="psi-row">
      <span class="psi-badge psi-badge-impact">IMPACT</span>
      <div class="psi-desc">
        데이터 표출 지연 시간을 <strong>최대 60초 ➔ 1초 미만(약 98% 단축)</strong>으로 대폭 개선하여 환경 이상 징후 발생 시 즉각적인 초동 대응 환경을 확보하였으며, <strong>RDBMS 단순 읽기 쿼리 부하를 80% 이상 절감</strong>함.
      </div>
    </div>
  </div>

  <div style="margin-top: 14px;">
    <span class="highlight-tag">Redis</span>
    <span class="highlight-tag">In-Memory Cache</span>
    <span class="highlight-tag">Java</span>
    <span class="highlight-tag">Spring Boot</span>
    <span class="highlight-tag">Sub-second Latency</span>
    <span class="highlight-tag">Performance Tuning</span>
  </div>
</div>

<!-- 프로젝트 2: 수성구 스마트 주차정보 시스템 -->
<div class="project-item">
  <div class="project-header">
    <div>
      <h3 class="project-name" style="display: inline-block;">수성구 스마트 주차정보 시스템 관제 대시보드</h3>
      <a href="https://parking.suseong.kr/dashboard/index" target="_blank" rel="noopener noreferrer" class="project-link-btn">
        <i class="fa-solid fa-arrow-up-right-from-square"></i> 서비스 바로가기
      </a>
    </div>
    <span class="project-role">RESTful API 연동 및 관제 대시보드 구축</span>
  </div>
  <div class="project-summary-text">
    <strong>공공 서비스 프로젝트</strong> · 대구 수성구 관내 공영주차장 실시간 잔여 주차면 현황 및 모니터링 관제 시스템
  </div>

  <div class="project-psi-block">
    <div class="psi-row">
      <span class="psi-badge psi-badge-problem">PROBLEM</span>
      <div class="psi-desc">
        현장 센서 및 입출차 감지 장치의 네트워크 변동으로 인한 데이터 누락/중복 표출 가능성과, 잦은 주차면 변동 데이터 갱신 시 전체 화면 리렌더링으로 인한 화면 깜빡임 및 렌더링 지연 발생.
      </div>
    </div>
    <div class="psi-row">
      <span class="psi-badge psi-badge-solution">SOLUTION</span>
      <div class="psi-desc">
        RESTful API 응답 구조를 표준화하고 데이터 정합성 검증 로직을 구현함. 화면 갱신 시 전체 요소를 다시 그리지 않고 상태가 변경된 주차면 컴포넌트만 선별적으로 갱신하도록 비동기 렌더링 로직 최적화.
      </div>
    </div>
    <div class="psi-row">
      <span class="psi-badge psi-badge-impact">IMPACT</span>
      <div class="psi-desc">
        관내 공영주차장 실시간 잔여면 <strong>데이터 정합성 99% 이상 유지</strong> 및 대시보드 렌더링 성능 최적화 달성. 시민 대상 웹 서비스 및 종합상황실 다중 모니터 환경에서 원활한 무중단 관제 운영 지원.
      </div>
    </div>
  </div>

  <div style="margin-top: 14px;">
    <span class="highlight-tag">Java</span>
    <span class="highlight-tag">Spring Boot</span>
    <span class="highlight-tag">RESTful API</span>
    <span class="highlight-tag">Data Validation</span>
    <span class="highlight-tag">Web Dashboard</span>
  </div>
</div>

<!-- 프로젝트 3: 대구시 데이터허브 -->
<div class="project-item">
  <div class="project-header">
    <h3 class="project-name">대구시 데이터허브 API 신청 및 이용현황 서비스</h3>
    <span class="project-role">OpenAPI 신청 및 통계 시각화 서비스 개발</span>
  </div>
  <div class="project-summary-text">
    <strong>공공 데이터 플랫폼</strong> · 대구 스마트시티 데이터허브 OpenAPI 신청/승인 및 트래픽 현황 모니터링
  </div>

  <div class="project-psi-block">
    <div class="psi-row">
      <span class="psi-badge psi-badge-problem">PROBLEM</span>
      <div class="psi-desc">
        공공 OpenAPI 호출 이력 및 트래픽 로그가 방대해짐에 따라 통계 집계 쿼리 실행 시 응답 지연이 발생하고, 사용자 입력 폼의 유효성 검증 누락으로 인한 불필요한 백엔드 예외 처리 비용 발생.
      </div>
    </div>
    <div class="psi-row">
      <span class="psi-badge psi-badge-solution">SOLUTION</span>
      <div class="psi-desc">
        비동기 통신 기반의 통계 데이터 조회 구조를 수립하고, 클라이언트-서버 2단계 입력 유효성 검증 체계를 구축하여 비정상 요청을 원천 차단.
      </div>
    </div>
    <div class="psi-row">
      <span class="psi-badge psi-badge-impact">IMPACT</span>
      <div class="psi-desc">
        대용량 API 이용 현황 통계 조회 응답 속도 개선 및 예외 발생률 감소. 새로고침 없는 비동기 통계 차트 시각화로 공공 플랫폼 사용자 편의성 대폭 향상.
      </div>
    </div>
  </div>

  <div style="margin-top: 14px;">
    <span class="highlight-tag">OpenAPI</span>
    <span class="highlight-tag">Java</span>
    <span class="highlight-tag">Spring Boot</span>
    <span class="highlight-tag">Statistics Query</span>
    <span class="highlight-tag">Async UI</span>
  </div>
</div>

<!-- TECH ARTICLES (지식 공유 & 킬러 포스트) -->
<div class="section-heading-wrap">
  <h2 class="section-title-en">Tech Articles</h2>
  <span class="section-title-kr">지식 공유 및 기술 아티클 (Tistory)</span>
</div>
<p style="margin-top: -10px; margin-bottom: 22px; color: var(--global-text-color-light); font-size: 0.9em;">
  실무 트러블슈팅과 백엔드 핵심 원리를 정리한 기술 블로그(<a href="https://hyeri-lee.tistory.com/" target="_blank" rel="noopener noreferrer">hyeri-lee.tistory.com</a>)의 대표 글입니다.
</p>

<div class="article-grid">
  <a href="https://hyeri-lee.tistory.com/entry/%EB%8F%99%EA%B8%B0Synchronous%EC%99%80-%EB%B9%84%EB%8F%99%EA%B8%B0Asynchronous-%EC%B0%A8%EC%9D%B4-%EC%89%BD%EA%B2%8C-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0" target="_blank" rel="noopener noreferrer" class="article-card">
    <div>
      <h3 class="article-card-title">동기와 비동기 차이 쉽게 이해하기</h3>
      <p class="article-card-desc">
        API 호출과 실시간 데이터 처리에서 필수적인 동기/비동기 동작 원리와 스레드 블로킹 문제를 실무 흐름 기준으로 분석
      </p>
    </div>
    <div class="article-card-meta">
      <i class="fa-solid fa-arrow-up-right-from-square"></i> Read Article
    </div>
  </a>

  <a href="https://hyeri-lee.tistory.com/entry/Spring-Spring-Security-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EA%B5%AC%EC%A1%B0-%EC%9D%B4%ED%95%B4" target="_blank" rel="noopener noreferrer" class="article-card">
    <div>
      <h3 class="article-card-title">Spring Security 로그인 구조 이해</h3>
      <p class="article-card-desc">
        Controller 이전 SecurityFilterChain의 Filter 기반 동작 구조와 인증 토큰, 세션 생성 프로세스를 도식화하여 정리
      </p>
    </div>
    <div class="article-card-meta">
      <i class="fa-solid fa-arrow-up-right-from-square"></i> Read Article
    </div>
  </a>

  <a href="https://hyeri-lee.tistory.com/entry/Spring-Spring-Bean-%EC%83%9D%EC%84%B1-%EA%B3%BC%EC%A0%95-IoC-Container-%EB%8F%99%EC%9E%91-%EC%9D%B4%ED%95%B4" target="_blank" rel="noopener noreferrer" class="article-card">
    <div>
      <h3 class="article-card-title">Spring Bean 생성 과정 (IoC Container)</h3>
      <p class="article-card-desc">
        Spring Container가 Bean을 탐색, 등록하고 의존성(DI)을 주입하는 라이프사이클을 심층적으로 추적
      </p>
    </div>
    <div class="article-card-meta">
      <i class="fa-solid fa-arrow-up-right-from-square"></i> Read Article
    </div>
  </a>
</div>

<!-- SKILLS -->
<div class="section-heading-wrap">
  <h2 class="section-title-en">Skills</h2>
  <span class="section-title-kr">기술 스택</span>
</div>

<div class="card" style="padding: 10px 24px;">
  <!-- Languages -->
  <div class="skill-group">
    <div class="skill-group-title">Languages</div>
    <div class="skill-chips">
      <span class="skill-chip">Java</span>
      <span class="skill-chip">JavaScript</span>
      <span class="skill-chip">SQL</span>
      <span class="skill-chip">HTML5 / CSS3</span>
    </div>
  </div>

  <!-- Frameworks & Libraries -->
  <div class="skill-group">
    <div class="skill-group-title">Frameworks & Libraries</div>
    <div class="skill-chips">
      <span class="skill-chip">Spring Boot</span>
      <span class="skill-chip">Spring Framework</span>
      <span class="skill-chip">Spring Security</span>
      <span class="skill-chip">MyBatis</span>
      <span class="skill-chip">RESTful API</span>
    </div>
  </div>

  <!-- Infrastructure & Databases -->
  <div class="skill-group">
    <div class="skill-group-title">Infrastructure & DB</div>
    <div class="skill-chips">
      <span class="skill-chip">Redis</span>
      <span class="skill-chip">MySQL</span>
      <span class="skill-chip">PostgreSQL</span>
      <span class="skill-chip">Oracle</span>
      <span class="skill-chip">Docker</span>
      <span class="skill-chip">Linux</span>
    </div>
  </div>

  <!-- Tools & IDEs -->
  <div class="skill-group">
    <div class="skill-group-title">Tools & IDEs</div>
    <div class="skill-chips">
      <span class="skill-chip">IntelliJ IDEA</span>
      <span class="skill-chip">Git / GitHub</span>
      <span class="skill-chip">VS Code</span>
      <span class="skill-chip">Postman</span>
    </div>
  </div>

  <!-- Domains & Strengths -->
  <div class="skill-group">
    <div class="skill-group-title">Key Strengths</div>
    <div class="skill-chips">
      <span class="skill-chip">Real-time IoT Caching</span>
      <span class="skill-chip">In-Memory Architecture</span>
      <span class="skill-chip">Data Reliability</span>
      <span class="skill-chip">Technical Documentation</span>
    </div>
  </div>
</div>

<!-- EDUCATION -->
<div class="section-heading-wrap">
  <h2 class="section-title-en">Education</h2>
  <span class="section-title-kr">학력</span>
</div>

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

<!-- ACTIVITIES -->
<div class="section-heading-wrap">
  <h2 class="section-title-en">Activities</h2>
  <span class="section-title-kr">기타 활동 및 수상</span>
</div>

<div class="etc-timeline" id="etc-timeline-list">
  <!-- 항목 1: 재직 -->
  <div class="etc-item">
    <div class="etc-date">2024. 01 ~ 현재</div>
    <div class="etc-content">
      <div class="etc-title">스파이어테크놀로지 (Spire Technology) 재직</div>
      <div class="etc-desc">Java 백엔드 및 실시간 관제 시스템 개발</div>
    </div>
  </div>

  <!-- 항목 2: 기술블로그 -->
  <div class="etc-item">
    <div class="etc-date">2023. 02 ~ 현재</div>
    <div class="etc-content">
      <div class="etc-title"><a href="https://hyeri-lee.tistory.com/" target="_blank" rel="noopener noreferrer">기술 블로그 운영 및 지식 아카이빙</a></div>
      <div class="etc-desc">Java / Spring 핵심 아키텍처 및 실무 트러블슈팅 경험 기록 공유 (<a href="https://hyeri-lee.tistory.com/" target="_blank" rel="noopener noreferrer">Tistory Blog</a>)</div>
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
      <div class="etc-desc">(사)한국인터넷방송통신학회 주최 · 외국인 관광객 맞춤형 여행 추천 프로젝트 (공공데이터 및 지도 API 연동)</div>
    </div>
  </div>

  <!-- 항목 5: 학부 활동 -->
  <div class="etc-item">
    <div class="etc-date">2019. 03 ~</div>
    <div class="etc-content">
      <div class="etc-title">백석대학교 컴퓨터공학부 입학 및 프로그래밍 입문</div>
      <div class="etc-desc">자료구조, 알고리즘, 객체지향 프로그래밍, 데이터베이스 전공 기초 이수</div>
    </div>
  </div>
</div>

<!-- Foldable Toggle Button (5개 이상 시 동적 활성화) -->
<div class="etc-fold-wrapper" id="etc-fold-wrapper" style="display: none;">
  <button type="button" class="etc-fold-btn" id="etc-toggle-btn" data-expanded="false">
    <i class="fa-solid fa-chevron-down"></i> 더보기
  </button>
</div>
