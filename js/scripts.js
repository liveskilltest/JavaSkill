function bodyLoad() {
    var userIp
    $.get("https://ipinfo.io", function(response) {
        userIp = response.ip
    }, "json")

    if (sessionStorage.getItem('sessionID') == 1) {
        document.getElementById("contentDiv").innerHTML = "<h1> Session Expired <h1> </hr> <h2> Please refrain from accessing this site</h2> </br>"
        alert("Session Expired")
    }
    else {
        sessionStorage.setItem('sessionID', '1');
    }

    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('candidateID');
    alert(myParam)

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
        type: "GET",
        url: filaname,
        success: function (text) {
            document.getElementById("fileBody").innerHTML = text
        },
        error: function () {
            // An error occurred
        }
    });



}