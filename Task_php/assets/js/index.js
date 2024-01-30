/*$(document).ready(function(){
    $("#myForm").submit(function(event){
        // Prevent form submission
        event.preventDefault();

        // Serialize form data
        var formData = $(this).serialize();

        // Ajax request
        $.ajax({
            type: 'POST',
            url: 'index.php', 
            data: formData,
            success: function(response){
                alert(response);
            }
        });
    });
});*/

$(document).ready(function(){
    $("#fetchButton").click(function(){
        // Get input values
        var first_name = $("#first_name").val();
        var middle_name = $("#middle_name").val();
        var last_name = $("#last_name").val();

       

        // Ajax request
        $.ajax({
            type: 'POST',
            url: 'result.php',
            data: {
                first_name: first_name,
                middle_name: middle_name,
                last_name:last_name
            },
            success: function(response){
                var $final = response.first_name + " " + response.middle_name + " " + response.last_name;

                // Display values
                alert($final);
                
                    
                }
        });
    });
});
