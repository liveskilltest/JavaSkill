/*!
    * Start Bootstrap - SB Admin v7.0.5 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2022 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
// 
// Scripts
// 



function bodyLoad(){

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

}

$("ul.treeRoot li span").on("click", function () {
    if ($(this).parent().hasClass("hasSubMenu")) {
        if ($(this).parent().find("ul").hasClass("activeSubMenu")) {
            $(this).parent().find("ul").removeClass("activeSubMenu");
        } else {
            $(this).parent().find("ul").addClass("activeSubMenu");
        }
    }
});

function loadFile(filaname) {


    $.ajax({
        type:    "GET",
        url:     filaname,
        success: function(text) {
            document.getElementById("fileBody").innerHTML = text
            var editor = CodeMirror.fromTextArea(document.getElementById("fileBody"), {
                lineNumbers: true,
                matchBrackets: true
            });
        },
        error:   function() {
            // An error occurred
        }
    });

    

}