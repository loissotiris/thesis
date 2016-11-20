(function() {
  var chineseWallChangeColors, chineseWallResetColors;

  chineseWallResetColors = function() {
    $('svg#ChineseWallSvg .green').css("fill", "lightgreen");
    $('svg#ChineseWallSvg .red').css("fill", "tomato");
    return $('svg#ChineseWallSvg .black').css("fill", "grey");
  };

  chineseWallChangeColors = function() {
    $('svg#ChineseWallSvg .togreen').css("fill", "lightgreen");
    $('svg#ChineseWallSvg .tored').css("fill", "tomato");
    return $('svg#ChineseWallSvg .toblack').css("fill", "grey");
  };

  $(document).ready(function() {
    chineseWallResetColors();
    $(document).on('impress:stepenter', function(e) {
      var currentSlide;
      currentSlide = $(e.target).attr('id');
      console.log(currentSlide);
      $('svg .only').not('svg .' + currentSlide).hide();
      $('svg .' + currentSlide).show(1000);
      switch (currentSlide) {
        case "ChineseWall1":
          return chineseWallResetColors();
        case "ChineseWall2":
          return chineseWallResetColors();
        case "ChineseWall3":
          return chineseWallChangeColors();
      }
    });
  });

}).call(this);
