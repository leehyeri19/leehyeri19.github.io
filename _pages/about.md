---
permalink: /
title: "Introduce"
author_profile: false
redirect_from: 
  - /about/
  - /about.html
---

<style>
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
    transform: translateY(-4px);
    border-color: var(--global-dark-border-color);
    box-shadow: 0 8px 24px rgba(69, 168, 109, 0.12);
  }
  .card-title {
    font-size: 1.25em;
    font-weight: bold;
    margin-top: 0;
    margin-bottom: 6px;
    color: var(--global-base-color);
  }
  .card-subtitle {
    color: var(--global-text-color-light);
    font-size: 0.95em;
    margin-bottom: 12px;
    font-weight: 500;
  }
  .tech-badge {
    display: inline-block;
    background: var(--global-footer-bg-color);
    color: var(--global-base-color);
    padding: 5px 12px;
    border-radius: 8px;
    font-size: 0.85em;
    margin-right: 6px;
    margin-bottom: 8px;
    border: 1px solid var(--global-border-color);
    font-weight: 600;
    transition: var(--global-transition);
  }
  .tech-badge:hover {
    background: var(--global-base-color);
    color: #fff;
    border-color: var(--global-base-color);
  }
</style>

<div class="bio-header" style="display: flex; align-items: center; justify-content: space-between; gap: 40px; margin-bottom: 50px; flex-wrap: wrap-reverse;">
  <div class="bio-text" style="flex: 1; min-width: 320px;">
    <h1 style="margin-top: 0; font-size: 2.2em; line-height: 1.3; font-weight: 800; letter-spacing: -0.5px;">
      안녕하세요! <br>
      <span style="color: var(--global-base-color);">운영과 데이터 품질에 강한</span><br>
      백엔드 개발자 이혜리입니다. 🌱
    </h1>
    <p style="font-size: 1.05em; color: var(--global-text-color); line-height: 1.8; margin-bottom: 30px;">
      <strong style="color: var(--global-base-color);">
        동작하는 기능보다, 오래 운영될 수 있는 서비스를 만드는 것이 좋은 개발이라고 생각합니다.
      </strong><br><br>
      실무에서 Java 백엔드 개발자로 일하며, 기능 구현보다 운영 안정성·데이터 정합성·유지보수성을 함께 고민해왔습니다.
      문제가 발생하면 임시방편보다 원인을 먼저 파악하고, 백엔드 개발자지만 항상 사용자 화면을 함께 생각합니다.
    </p>
    <div class="bio-links" style="display: flex; gap: 14px; flex-wrap: wrap;">
      <a href="mailto:cabinkss02@naver.com" style="background: var(--global-base-color); color: #fff; padding: 10px 22px; border-radius: 30px; font-weight: bold; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; box-shadow: 0 4px 10px rgba(69, 168, 109, 0.25); transition: var(--global-transition);">
        <i class="fa-solid fa-envelope"></i> Email
      </a>
      <a href="https://github.com/leehyeri19" style="background: #24292e; color: #fff; padding: 10px 22px; border-radius: 30px; font-weight: bold; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: var(--global-transition);">
        <i class="fa-brands fa-github"></i> GitHub
      </a>
      <a href="https://www.linkedin.com/in/hyrilee0713/" target="_blank" rel="noopener noreferrer" style="background: #0A66C2; color: #fff; padding: 10px 22px; border-radius: 30px; font-weight: bold; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: var(--global-transition);">
        <i class="fa-brands fa-linkedin"></i> LinkedIn
      </a>
      <a href="https://hyeri-lee.tistory.com/" style="background: #e65f2b; color: #fff; padding: 10px 22px; border-radius: 30px; font-weight: bold; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: var(--global-transition);">
        <i class="fa-solid fa-blog"></i> Blog
      </a>
    </div>
  </div>
  <div class="bio-avatar" style="text-align: center; flex-shrink: 0; margin-left: auto; margin-right: auto;">
    <img src="/images/profile.png" alt="이혜리" style="width: 200px; height: 200px; border-radius: 50%; object-fit: cover; border: 5px solid var(--global-base-color); box-shadow: 0 10px 30px rgba(69, 168, 109, 0.2); transition: var(--global-transition);">
  </div>
</div>

---

## 🧭 개발 가치관

<style>
  .value-card {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-bottom: 32px;
  }
  @media (max-width: 700px) {
    .value-card { grid-template-columns: 1fr; }
  }
  .value-item {
    background: var(--global-bg-color);
    border: 1px solid var(--global-border-color);
    border-radius: var(--border-radius);
    padding: 20px 22px;
    box-shadow: var(--box-shadow);
    transition: var(--global-transition);
    border-left: 4px solid var(--global-base-color);
  }
  .value-item:hover {
    transform: translateY(-3px);
    border-left-color: var(--global-base-color);
    box-shadow: 0 8px 24px rgba(69, 168, 109, 0.15);
  }
  .value-icon {
    font-size: 1.5em;
    margin-bottom: 8px;
    display: block;
  }
  .value-title {
    font-size: 0.95em;
    font-weight: 700;
    color: var(--global-base-color);
    margin: 0 0 8px 0;
    line-height: 1.4;
  }
  .value-desc {
    font-size: 0.88em;
    color: var(--global-text-color);
    line-height: 1.7;
    margin: 0;
  }
  .value-desc em {
    font-style: normal;
    color: var(--global-text-color-light);
    display: block;
    margin-top: 6px;
    font-size: 0.95em;
  }
</style>

<div class="value-card">
  <div class="value-item">
    <span class="value-icon">🔍</span>
    <p class="value-title">원인을 이해해야 같은 문제를 반복하지 않는다고 믿습니다.</p>
    <p class="value-desc">
      오류가 발생하면 증상보다 원인을 먼저 찾습니다.<br>
      실행계획, 쿼리 구조, 데이터 흐름을 파고들어<br>
      근본적인 해결책을 찾는 개발을 지향합니다.
      <em>임시방편보다 구조적인 이해를 먼저 합니다.</em>
    </p>
  </div>
  <div class="value-item">
    <span class="value-icon">⚙️</span>
    <p class="value-title">운영되는 서비스를 만드는 것이 개발이라고 생각합니다.</p>
    <p class="value-desc">
      실무에서 배운 건 구현보다 운영이 더 어렵다는 것입니다.<br>
      확장성, 유지보수성, 안정성을 함께 고민하며<br>
      &ldquo;지금만 되는 코드&rdquo;가 아닌 &ldquo;나중에도 유지될 코드&rdquo;를 씁니다.
      <em>서비스 출시 이후가 개발의 진짜 시작이라고 믿습니다.</em>
    </p>
  </div>
  <div class="value-item">
    <span class="value-icon">🗄️</span>
    <p class="value-title">데이터가 신뢰받아야 서비스도 신뢰받습니다.</p>
    <p class="value-desc">
      데이터는 단순히 저장되는 정보가 아니라<br>
      서비스의 신뢰를 만드는 기반이라고 생각합니다.<br>
      정합성 검증과 정확한 데이터 처리를 개발의 핵심 원칙으로 삼습니다.
      <em>조회 성능, 데이터 검증, DB 구조 개선을 꾸준히 다뤄왔습니다.</em>
    </p>
  </div>
  <div class="value-item">
    <span class="value-icon">🪴</span>
    <p class="value-title">작은 개선이 쌓여 서비스 품질을 만든다고 생각합니다.</p>
    <p class="value-desc">
      거창한 아키텍처보다, 현장에서 쿼리 하나·UI 하나를<br>
      더 낫게 만들어가는 것이 실질적인 서비스 개선이라 믿습니다.<br>
      백엔드 개발자지만, 항상 사용자 화면까지 함께 생각합니다.
      <em>혼자 개발하는 것보다, 함께 운영하는 것을 중요하게 여깁니다.</em>
    </p>
  </div>
</div>

---

## 💼 Work Experience (경력)

<div class="card">
  <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 10px; margin-bottom: 6px;">
    <h3 class="card-title" style="margin: 0; font-size: 1.3em;">스파이어테크놀로지 (Spire Technology)</h3>
    <span style="font-weight: bold; color: var(--global-base-color); font-size: 0.95em;">2023.09 ~ 현재</span>
  </div>
  <div class="card-subtitle">Java 개발자 / 웹 UI 개발자</div>
  <p style="margin: 12px 0; font-size: 0.95em; line-height: 1.65; color: var(--global-text-color);">
    AI 기반 통신망 품질·빅데이터 솔루션 및 ICT 융합 장치 개발 전문 기업에 재직하며, 단말 장치 현황판과 국가산업에 필요한 다양한 UI 및 웹 화면 개발을 수행하고 있습니다.
  </p>
  <ul style="margin: 0; padding-left: 20px; font-size: 0.95em; line-height: 1.7; color: var(--global-text-color);">
    <li>단말 장치들의 실시간 작동 현황을 효율적으로 시각화하는 <strong>단말 장치 현황판 UI 개발</strong></li>
    <li>국가 산업 및 공공 ICT 프로젝트의 안정적인 가동을 돕는 웹 사용자 화면 개발</li>
    <li>Java 백엔드와의 비동기 데이터 송수신(API 연동) 및 화면 렌더링 최적화</li>
  </ul>
</div>

---

## 🎓 Education (학력)

<div class="card">
  <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 10px;">
    <h3 class="card-title" style="margin: 0;"><a href="https://community.bu.ac.kr/info/1803/subview.do" target="_blank" style="color: inherit; text-decoration: none; border-bottom: 1.5px dashed var(--global-base-color);">백석대학교 (Baekseok University)</a></h3>
    <span style="font-weight: bold; color: var(--global-base-color); font-size: 0.95em;">2019.03 ~ 2024.02</span>
  </div>
  <div class="card-subtitle" style="margin-bottom: 0;">컴퓨터공학부 소프트웨어학 전공 졸업 (학부생)</div>
</div>

<div class="card">
  <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 10px;">
    <h3 class="card-title" style="margin: 0;">분당영덕여자고등학교</h3>
    <span style="font-weight: bold; color: var(--global-base-color); font-size: 0.95em;">2017.03 ~ 2019.02</span>
  </div>
  <div class="card-subtitle" style="margin-bottom: 0;">자연계열 (이과) 졸업</div>
</div>

---

## 🛠️ Tech Stack (기술 스택)

<div class="card" style="padding-bottom: 16px;">
  <div style="margin-bottom: 14px;">
    <strong style="display: block; margin-bottom: 8px; font-size: 0.95em; color: var(--global-text-color);">Backend</strong>
    <span class="tech-badge">Java</span>
    <span class="tech-badge">Spring Framework</span>
  </div>
  <div style="margin-bottom: 14px;">
    <strong style="display: block; margin-bottom: 8px; font-size: 0.95em; color: var(--global-text-color);">Frontend</strong>
    <span class="tech-badge">HTML5 / CSS3</span>
    <span class="tech-badge">JavaScript</span>
    <span class="tech-badge">jQuery</span>
  </div>
  <div style="margin-bottom: 14px;">
    <strong style="display: block; margin-bottom: 8px; font-size: 0.95em; color: var(--global-text-color);">Database</strong>
    <span class="tech-badge">MySQL</span>
    <span class="tech-badge">Oracle</span>
    <span class="tech-badge">PostgreSQL</span>
  </div>
  <div>
    <strong style="display: block; margin-bottom: 8px; font-size: 0.95em; color: var(--global-text-color);">Tools</strong>
    <span class="tech-badge">Git & GitHub</span>
    <span class="tech-badge">IntelliJ</span>
    <span class="tech-badge">Eclipse</span>
  </div>
</div>
