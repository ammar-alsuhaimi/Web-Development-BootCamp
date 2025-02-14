$(document).ready(function() {
    // DOM Manipulation
    $('#changeText').click(function() {
        $('#content p').text('The text has been changed!');
    });

    // AJAX Request
    $('#fetchData').click(function() {
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            method: 'GET',
            success: function(data) {
                $('#data').html(`
                    <h3>${data.title}</h3>
                    <p>${data.body}</p>
                `);
            },
            error: function() {
                $('#data').text('An error occurred while fetching data.');
            }
        });
    });

    // Event Handling and Animation
    $('#content').hover(
        function() {
            $(this).css('background-color', '#f9f9f9');
            $(this).find('p').fadeOut(500).fadeIn(500);
        },
        function() {
            $(this).css('background-color', 'white');
        }
    );
});
