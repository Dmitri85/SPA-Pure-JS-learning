function HomePage() {
  Page.call(this, 't-home');
}
HomePage.prototype = Object.create(Page.prototype);

function AboutPage() {
  Page.call(this, 't-about');
}
AboutPage.prototype = Object.create(Page.prototype);
