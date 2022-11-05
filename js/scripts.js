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

    alert(filaname)
    $.ajax({
        type:    "GET",
        url:     filaname,
        success: function(text) {
            alert(text)
            document.getElementById("fileBody").innerHTML = text
        },
        error:   function() {
            // An error occurred
        }
    });

    

}