    var buttonImage = document.getElementById('buttonImage');
    var isClicked = false;

    function changeImage(clicked) {
      if (clicked) {
        buttonImage.src = 'clickedButton.png';
      } else {
        buttonImage.src = 'button.png';
      }
      isClicked = clicked;
    }