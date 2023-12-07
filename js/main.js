document.querySelectorAll('.tabs__btn').forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;
    document.querySelectorAll('.tabs__btn').forEach(function (btn) {
      btn.classList.remove('tabs__btn--active')
    });
    e.currentTarget.classList.add('tabs__btn--active');
    document.querySelectorAll('.tabs__content').forEach(function (tabsBtn) {
      tabsBtn.classList.remove('tabs__content--active')
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs__content--active');
  });
});

document.querySelectorAll('.tabs-2__btn').forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;
    document.querySelectorAll('.tabs-2__btn').forEach(function (btn) {
      btn.classList.remove('tabs-2__btn--active')
    });
    e.currentTarget.classList.add('tabs-2__btn--active');
    document.querySelectorAll('.tabs-2__content').forEach(function (tabsBtn) {
      tabsBtn.classList.remove('tabs-2__content--active')
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-2__content--active');
  });
});

// burger
const burger = document.getElementById('burger')
const nav = document.getElementById('nav')

burger.addEventListener('click', function () {
  nav.classList.toggle('header-nav--active')
  burger.classList.toggle('burger--active')
  document.body.classList.toggle('stop-scroll')
})

