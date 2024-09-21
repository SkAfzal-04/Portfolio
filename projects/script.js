$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }
    });
});

document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Projects | Portfolio Sk Mahammad Afzal";
            $("#favicon").attr("href", "/assets/images/favicon.png");
        }
        else {
            document.title = "Come Back To Portfolio";
            $("#favicon").attr("href", "/assets/images/favhand.png");
        }
    });


// fetch projects start
function getProjects() {
    return fetch("projects.json")
        .then(response => response.json())
        .then(projects => {
            return projects
        });
}


function showProjects(projects) {

    let projectsContainer = document.querySelector(".work .box-container");
    let projectsHTML = "";
    projects.forEach(project => {
        projectsHTML += `
        <div class="grid-item ${project.category}">
        <div class="box tilt" style="width: 380px; margin: 1rem">
      <img draggable="false" src="/assets/images/projects/${project.image}.png" alt="project" />
      <div class="content">
        <div class="tag">
        <h3>${project.name}</h3>
        </div>
        <div class="desc">
          <p>${project.desc}</p>
          <div class="btns">
            <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
            <a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
          </div>
        </div>
      </div>
    </div>
    </div>`
    });
    projectsContainer.innerHTML = projectsHTML;


    // isotope filter products
    var $grid = $('.box-container').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows',
        masonry: {
            columnWidth: 200
        }
    });

    // filter items on button click
    $('.button-group').on('click', 'button', function () {
        $('.button-group').find('.is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
}

getProjects().then(data => {
    showProjects(data);
})
// fetch projects end

// Start of Tawk.to Live Chat
// var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
// (function () {
//     var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
//     s1.async = true;
//     s1.src = 'https://embed.tawk.to/60df10bf7f4b000ac03ab6a8/1f9jlirg6';
//     s1.charset = 'UTF-8';
//     s1.setAttribute('crossorigin', '*');
//     s0.parentNode.insertBefore(s1, s0);
// })();
// End of Tawk.to Live Chat

// disable developer mode
document.onkeydown = function (e) {
    if (e.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const themeIcon = document.getElementById('theme-icon');
    const header = document.querySelector('header');
    const menu = document.getElementById('menu');
    const btnHoverStyle=document.querySelector('.backbtn .btn');
    const checkedButton = document.querySelector('.work .button-group .btn.is-checked');
    const buttonGroup = document.querySelectorAll('.work .button-group .btn');


    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        applyDarkTheme();  // Apply dark theme if saved
    }

    themeIcon.addEventListener('click', () => {
        if (document.body.classList.contains('dark-theme')) {
            applyLightTheme();  // Switch to light theme
            localStorage.setItem('theme', 'light');  // Save theme preference
        } else {
            applyDarkTheme();  // Switch to dark theme
            localStorage.setItem('theme', 'dark');  // Save theme preference
        }
    });

    // Functions to apply themes
    function applyDarkTheme() {
        document.body.classList.add('dark-theme');
        header.classList.add('dark-theme');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        themeIcon.style.color = "#ffffff";  // Change icon color
        menu.style.color = "#ffffff";  // Change menu icon color
        btnHoverStyle.addEventListener('mouseover', () => {
            btnHoverStyle.style.background = "#000";
            btnHoverStyle.style.color = "cyan";
            btnHoverStyle.style.border= '2px solid #000';
        });
        btnHoverStyle.addEventListener('mouseout', () => {
            btnHoverStyle.style.background = "";  // Reset when not hovering
            btnHoverStyle.style.color = "#fff";
            btnHoverStyle.style.border= '';
        });
        checkedButton.style.backgroundColor = "#000";  // Dark theme background
        checkedButton.style.color = "cyan";
        buttonGroup.forEach(button => {
            button.addEventListener('mouseover', () => {
                button.style.backgroundColor = "#000";  // Dark theme hover background
                button.style.color = "cyan";  // Dark theme hover text color
            });
            button.addEventListener('mouseout', () => {
                button.style.backgroundColor = "#010124";  // Reset background
                button.style.color = "#fff";  // Reset text color
            });
        });
    }

    function applyLightTheme() {
        document.body.classList.remove('dark-theme');
        header.classList.remove('dark-theme');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        themeIcon.style.color = "";  // Reset icon color
        menu.style.color = "";  // Reset menu icon color
        btnHoverStyle.addEventListener('mouseover', () => {
            btnHoverStyle.style.background = "";
            btnHoverStyle.style.color = "";
        });
        btnHoverStyle.addEventListener('mouseout', () => {
            btnHoverStyle.style.background = "";  // Reset when not hovering
            btnHoverStyle.style.color = "";
        });
        checkedButton.style.backgroundColor = "";  // Dark theme background
        checkedButton.style.color = "";
              // Reset hover styles for light theme
              buttonGroup.forEach(button => {
                button.addEventListener('mouseover', () => {
                    button.style.backgroundColor = "#fff";  // Light theme hover background
                    button.style.color = "#000";  // Light theme hover text color
                });
                button.addEventListener('mouseout', () => {
                    button.style.backgroundColor = "";  // Reset background
                    button.style.color = "";  // Reset text color
                });
            });
    }
});
