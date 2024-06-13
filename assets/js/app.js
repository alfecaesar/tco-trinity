// An object literal
var app = {
  init: function() {
    console.log('🟢 Kevin Cooper Ministries ⛪');
  },
  scrollTop: function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
};
(function() {
  app.init();
})();
