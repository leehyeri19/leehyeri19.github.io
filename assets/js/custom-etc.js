document.addEventListener('DOMContentLoaded', function () {
  const list = document.getElementById('etc-timeline-list');
  const btnWrapper = document.getElementById('etc-fold-wrapper');
  const btn = document.getElementById('etc-toggle-btn');
  if (!list || !btn) return;

  const items = list.querySelectorAll('.etc-item');
  const LIMIT = 4; // 4개 초과 시 (5번째 항목부터) 접기

  if (items.length > LIMIT) {
    if (btnWrapper) btnWrapper.style.display = 'block';
    for (let i = LIMIT; i < items.length; i++) {
      items[i].style.display = 'none';
    }
  } else {
    if (btnWrapper) btnWrapper.style.display = 'none';
  }

  btn.addEventListener('click', function (e) {
    e.preventDefault();
    const isExpanded = btn.getAttribute('data-expanded') === 'true';

    for (let i = LIMIT; i < items.length; i++) {
      items[i].style.display = isExpanded ? 'none' : 'flex';
    }

    if (isExpanded) {
      btn.innerHTML = '<i class="fa-solid fa-chevron-down"></i> 더보기';
      btn.setAttribute('data-expanded', 'false');
    } else {
      btn.innerHTML = '<i class="fa-solid fa-chevron-up"></i> 접기';
      btn.setAttribute('data-expanded', 'true');
    }
  });
});
