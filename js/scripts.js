/*!
    * Start Bootstrap - SB Admin v7.0.5 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2022 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
// 
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

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

});

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
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById('placeholder').innerHTML = xhr.responseText;
        }
    }
    xhr.open('GET', filaname);
    xhr.send();
    alert(xhr)
    document.getElementById("fileBody").innerHTML = xhr.responseText

}