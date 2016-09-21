function ClickerPage(el) {
  Page.call(this, 't-clicker');
  this.val = 0;
}

ClickerPage.prototype = Object.create(Page.prototype);

ClickerPage.prototype.enter = function(el) {
  Page.prototype.enter.call(this, el);
  
  this.el = {
    root: el,      
    btn: el.querySelector('button'),
    panel: el.querySelector(".panel")
  };
  
  this.el.btn.addEventListener('click', this.clicked.bind(this));
};

ClickerPage.prototype.clicked = function() {
  this.el.panel.innerHTML = this.val++;
};
