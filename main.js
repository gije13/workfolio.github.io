const navLinks = document.querySelectorAll('.nav-menu a');
function setActiveLink() {
    const currentURL = window.location.hash;  

    navLinks.forEach(link => {
        
        link.classList.remove('active');

        if (link.getAttribute('href') === currentURL) {
            link.classList.add('active');
        }
    });
}


window.addEventListener('load', setActiveLink);


window.addEventListener('hashchange', setActiveLink);

function showContent(contentId) {

    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.classList.remove('active'));

    const menuItems = document.querySelectorAll('.nav-menu ul li');
    menuItems.forEach(item => item.classList.remove('active'));

   
    document.getElementById(contentId).classList.add('active');

  
    const activeItem = Array.from(menuItems).find(
        item => item.textContent.trim().toLowerCase().replace(' ', '-') === contentId
    );
    if (activeItem) {
        activeItem.classList.add('active');
    }
}


function toggleAnswer(answerId) {
    
    var answers = document.querySelectorAll('.faq-answer');
    
  
    answers.forEach(function(answer) {
        answer.style.display = 'none';
    });
    
    
    var answerToShow = document.getElementById(answerId);
    answerToShow.style.display = 'block';
}

