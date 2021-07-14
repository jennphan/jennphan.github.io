$(function() {
    // Get the form.
    var form = $('#contact-form');

    // Get the messages div.
    var sendStatus = $('#send-status');

    // Set up an event listener for the contact form.
    $(form).submit(function(event) {
        // Stop the browser from submitting the form.
        $(sendStatus).show();
        event.preventDefault();

        // TODO

        // Serialize the form data.
        var formData = $(form).serialize();

        // Submit the form using AJAX.
        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formData
            }).done(function(response) {
                // Make sure that the send-status div has the 'success' class.
                $(sendStatus).removeClass('error');
                $(sendStatus).addClass('success');

                // Set the message text.
                $(sendStatus).text(response);

                // Clear the form.
                $('#name').val('');
                $('#company').val('');
                $('#email').val('');
                $('#message').val('');
            })
            
            .fail(function(data) {
            // Make sure that the send-status div has the 'error' class.
            $(sendStatus).removeClass('success');
            $(sendStatus).addClass('error');

            // Set the message text.
            if (data.responseText !== '') {
                $(sendStatus).text(data.responseText);
            } else {
                $(sendStatus).text('Oops! An error occured and your message could not be sent.');
            }
        });    
    });
});