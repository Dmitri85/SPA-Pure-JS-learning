function Page(template) { 
  this.template = template;
}

Page.prototype.leave = function()   { };
Page.prototype.enter = function(el) { this._el = el; };
