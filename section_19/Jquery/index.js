$(document).ready(function() {
    // Add new item to the list
    $('#addItemBtn').click(function() {
        const newItemText = $('#newItem').val();
        if (newItemText !== '') {
            $('#itemList').append('<li>' + newItemText + ' <button class="removeItemBtn">Remove</button></li>');
            $('#newItem').val('');
        }
    });

    // Remove item from the list
    $('#itemList').on('click', '.removeItemBtn', function() {
        $(this).parent().remove();
    });

    // Fetch data from an external API and display it
    $('#fetchDataBtn').click(function() {
        $('#dataDisplay').html('Fetching data...');
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            method: 'GET',
            success: function(data) {
                $('#dataDisplay').html('<p>Title: ' + data.title + '</p><p>Body: ' + data.body + '</p>');
            },
            error: function() {
                $('#dataDisplay').html('An error occurred while fetching data.');
            }
        });
    });
});
