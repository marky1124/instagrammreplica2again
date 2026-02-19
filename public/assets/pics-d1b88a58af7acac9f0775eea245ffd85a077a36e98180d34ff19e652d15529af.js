(function() {
  $(function() {
    return $('#pics').imagesLoaded(function() {
      return $('#pics').masonry({
        itemSelector: '.box',
        isFitWidth: true
      });
    });
  });

}).call(this);
