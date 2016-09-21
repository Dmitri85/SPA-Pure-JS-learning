function Application(el) {
  this.el = el;  
  
  window.addEventListener('hashchange', this.setPageFromHash.bind(this));
  this.setPageFromHash();  
}

Application.prototype.setPageFromHash = function() {
  var hash = window.location.hash.substr(1);
  
  if (hash === 'about') {
    this.showPage(AboutPage);
  } else if ( hash === 'clicker' ) {
    this.showPage(ClickerPage);
  } else {
    this.showPage(HomePage);
  }  
};

Application.prototype.showPage = function(Page) {
  if (this.activePage) {
    this.activePage.leave();
  }
  
  var nextPage = new Page();
  var html = document.getElementById(nextPage.template).innerHTML;
  this.el.innerHTML = html;
  this.activePage = nextPage;
  
  this.activePage.enter(this.el);
};
