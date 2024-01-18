    var downloadButton = document.getElementById('downloadButton');
    var isClicked = false;

    function changeButton(clicked) {
      if (clicked) {
        downloadButton.src = 'pictures/clickedlinkdocv.png';
      } else {
        downloadButton.src = 'pictures/linkdocv.png';
      }
      isClicked = clicked;
    }