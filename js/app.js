document.addEventListener('error', event => {
  const image = event.target;
  if (image instanceof HTMLImageElement && image.hasAttribute('data-image-fallback')) {
    image.removeAttribute('data-image-fallback');
    image.src = 'assets/workspace.svg';
  }
}, true);
// 파일을 직접 열어도 실행되도록 일반 스크립트로 컴포넌트를 조립합니다.
Object.entries(Portfolio.components).forEach(([name, render]) => {
  document.getElementById(`${name}-root`).innerHTML = render();
});

let projectIndex = 0;
Portfolio.renderProject(projectIndex);
document.querySelector('#about-panel').innerHTML = Portfolio.aboutPanels.about;

function selectTab(tab) {
  document.querySelectorAll('[data-tab]').forEach(button => {
    const selected = button === tab;
    button.classList.toggle('active', selected);
    button.setAttribute('aria-selected', String(selected));
    button.tabIndex = selected ? 0 : -1;
  });
  const panel = document.querySelector('#about-panel');
  panel.innerHTML = Portfolio.aboutPanels[tab.dataset.tab];
  panel.setAttribute('aria-labelledby', tab.id);
}

document.querySelector('.about-tabs').addEventListener('keydown', event => {
  const tabs = [...document.querySelectorAll('[data-tab]')];
  const index = tabs.indexOf(document.activeElement);
  if (index < 0) return;
  let next;
  if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
  if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
  if (event.key === 'Home') next = 0;
  if (event.key === 'End') next = tabs.length - 1;
  if (next === undefined) return;
  event.preventDefault();
  selectTab(tabs[next]);
  tabs[next].focus();
});

function closeMenu() {
  document.querySelector('.main-nav').classList.remove('is-open');
  const toggle = document.querySelector('.menu-toggle');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', '메뉴 열기');
}

document.addEventListener('click', event => {
  const tab = event.target.closest('[data-tab]');
  if (tab) selectTab(tab);

  const step = event.target.closest('[data-project-step]');
  const dot = event.target.closest('[data-project-index]');
  if (step || dot) {
    projectIndex = dot ? Number(dot.dataset.projectIndex) : (projectIndex + Number(step.dataset.projectStep) + Portfolio.projects.length) % Portfolio.projects.length;
    Portfolio.renderProject(projectIndex);
  }

  if (event.target.closest('[data-contact]')) {
    closeMenu();
    document.querySelector('#contact-dialog').showModal();
  }

  const projectButton = event.target.closest('[data-project-detail]');
  if (projectButton) {
    const project = Portfolio.projects[Number(projectButton.dataset.projectDetail)];
    document.querySelector('#article-content').innerHTML = `${Portfolio.image(project.image, project.title, 'article-cover')}<span class="eyebrow">${project.tag}</span><h2 id="article-title">${project.title}</h2><p>${project.detail}</p><p class="form-note">실제 수행 실적이 아닌 제안용 기획 프로젝트입니다.</p>`;
    document.querySelector('#article-dialog').showModal();
  }
  const articleButton = event.target.closest('[data-article]');
  if (articleButton) {
    const article = Portfolio.notes[Number(articleButton.dataset.article)];
    document.querySelector('#article-content').innerHTML = `${Portfolio.image(article.image, article.title, 'article-cover')}<span class="eyebrow">${article.category} · ${article.date}</span><h2 id="article-title">${article.title}</h2><p>${article.body}</p>`;
    document.querySelector('#article-dialog').showModal();
  }

  if (event.target.closest('.dialog-close')) event.target.closest('dialog').close();
  if (event.target.closest('.main-nav a')) closeMenu();
  if (event.target.closest('.menu-toggle')) {
    const isOpen = document.querySelector('.main-nav').classList.toggle('is-open');
    document.querySelector('.menu-toggle').setAttribute('aria-expanded', String(isOpen));
    document.querySelector('.menu-toggle').setAttribute('aria-label', isOpen ? '메뉴 닫기' : '메뉴 열기');
  } else if (!event.target.closest('.site-header')) {
    closeMenu();
  }
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeMenu();
});

document.querySelectorAll('dialog').forEach(dialog => {
  dialog.addEventListener('click', event => {
    const bounds = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
  });
  dialog.addEventListener('close', () => {
    if (dialog.id === 'contact-dialog') {
      document.querySelector('#form-status').hidden = true;
      document.querySelector('#contact-form button[type="submit"]').disabled = false;
      document.querySelector('#contact-form').reset();
    }
  });
});

document.querySelector('#contact-form').addEventListener('submit', event => {
  event.preventDefault();
  const status = document.querySelector('#form-status');
  status.textContent = '입력 내용을 확인했습니다. 미리보기이므로 실제로 전송되거나 저장되지는 않습니다.';
  status.hidden = false;
  event.target.querySelector('button[type="submit"]').disabled = true;
});

const navigationObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    document.querySelectorAll('.nav-link').forEach(link => link.classList.toggle('active', link.hash === `#${entry.target.id}`));
  });
}, { rootMargin: '-15% 0px -55% 0px', threshold: 0 });
document.querySelectorAll('#home, #about, #projects, #services, #process, #notes').forEach(section => navigationObserver.observe(section));
