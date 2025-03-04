$(document).ready(function() {
    // Add new task to the list
    $('#addTaskBtn').click(function() {
        const taskText = $('#taskInput').val();
        if (taskText !== '') {
            const taskItem = $('<li>' + taskText + ' <button class="completeTaskBtn">Complete</button> <button class="removeTaskBtn">Remove</button></li>');
            $('#taskList').append(taskItem);
            $('#taskInput').val('');
        }
    });

    // Complete task
    $('#taskList').on('click', '.completeTaskBtn', function() {
        $(this).parent().toggleClass('completed');
    });

    // Remove task
    $('#taskList').on('click', '.removeTaskBtn', function() {
        $(this).parent().fadeOut(300, function() {
            $(this).remove();
        });
    });

    // Fetch a motivational quote from an external API and display it
    $('#fetchQuoteBtn').click(function() {
        $('#quoteDisplay').html('Fetching quote...');
        $.ajax({
            url: 'https://api.quotable.io/random',
            method: 'GET',
            success: function(data) {
                $('#quoteDisplay').html('<p>"' + data.content + '"</p><p>- ' + data.author + '</p>');
            },
            error: function() {
                $('#quoteDisplay').html('An error occurred while fetching the quote.');
            }
        });
    });
});
