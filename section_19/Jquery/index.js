$(document).ready(function() {
    // Change text of paragraph
    $('#changeText').click(function() {
      $('#paragraph').text('The text has been changed!');
    });
  
    // Add class to paragraph
    $('#addClass').click(function() {
      $('#paragraph').addClass('highlight');
    });
  
    // Remove class from paragraph
    $('#removeClass').click(function() {
      $('#paragraph').removeClass('highlight');
    });
  
    // Toggle class on paragraph
    $('#toggleClass').click(function() {
      $('#paragraph').toggleClass('highlight');
    });
  
    // Change attribute of image
    $('#changeAttr').click(function() {
      $('#image').attr('src', 'https://via.placeholder.com/300');
    });
  
    // Add new element
    $('#addElement').click(function() {
      $('<p>New element added!</p>').appendTo('body');
    });
  
    // Remove last element
    $('#removeElement').click(function() {
      $('p').last().remove();
    });
  
    // Animate the box
    $('#animate').click(function() {
      $('#animationBox').animate({
        left: '+=100px',
        height: '+=50px',
        width: '+=50px'
      });
    });
  });
  