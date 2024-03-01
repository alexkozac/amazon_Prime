//home voce
/* const logo = document.querySelector('.logo');

logo.addEventListener("click", () => {
    logo.innerHTML = "<img src=\"img/logoHover.png\" alt=\"logohover\" class=\"logo\">"
}); */

// popup
document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("start")) {
            toggleVideoPopup();
            videoItemDetails(e.target.closest(".card-episode"));
        }

        if (e.target.classList.contains("video-popup-close")) {
            toggleVideoPopup();
        }
    });

    function toggleVideoPopup() {
        const videoPopup = document.querySelector(".video-popup");
        videoPopup.classList.toggle("openpopup");

        // Aggiungi l'event listener solo quando la popup è aperta
        if (videoPopup.classList.contains("openpopup")) {
            document.querySelector(".video-popup-close").addEventListener("click", toggleVideoPopup);
        } else {
            // Rimuovi l'event listener quando la popup è chiusa
            document.querySelector(".video-popup-close").removeEventListener("click", toggleVideoPopup);
        }
    }

    function videoItemDetails(videoItem) {
        document.querySelector(".details-title").textContent = videoItem.querySelector(".episode-title").textContent;
        document.querySelector(".details-description").textContent = videoItem.querySelector(".epdescription").textContent;
    }
});


function toggleVideoPopup() {
    const videoPopup = document.querySelector(".video-popup");
    videoPopup.classList.toggle("openpopup");

    if (videoPopup.classList.contains("openpopup")) {
        document.querySelector(".pp-thumbnail").play();
        document.querySelector(".video-popup-close").addEventListener("click", toggleVideoPopup);
    } else {
        document.querySelector(".pp-thumbnail").pause();
        document.querySelector(".video-popup-close").removeEventListener("click", toggleVideoPopup);
    }
}

/* section */

const nav = document.querySelector(".list"),
            navList = nav.querySelectorAll("li"),
            totalNavList = navList.length,
            allSection = document.querySelectorAll(".section"),
            totalSection = allSection.length

for(let i = 0; i<totalNavList; i++ ) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function() {
        removeBackSection();
        for(let j = 0; j<totalNavList; j++) {
            if(navList[j].querySelector("a").classList.contains("active")) {
                addBackSection(j);
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        showSection(this);
        /* if(window.innerWidth<1200) {
            asideSectionTogglerBtn();
        } */
    });
}

function removeBackSection() {
  for(let i = 0; i<totalSection; i++) {
    allSection[i].classList.remove("back-section");
  }
}

function addBackSection(num) {
  allSection[num].classList.add("back-section");
}

function showSection(element) {
  for(let i = 0; i<totalSection; i++) {
      allSection[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}

function updateNav(element) {
  for(let i = 0; i<totalNavList; i++)
  {
      navList[i].querySelector("a").classList.remove("active");
      const target = element.getAttribute("href").split("#")[1];
      if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
          navList[i].querySelector("a").classList.add("active");
      }
  }
}

/* read more */
const readMoreButton = document.querySelector(".read-more"),
            readMoreContent = document.querySelector(".not-visible");

readMoreButton.addEventListener("click", () => {
    readMoreContent.classList.toggle('visible');
    readMoreButton.innerHTML = "Leggi di meno";
});

/* modale */
document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById("myModal");
    var modalText = document.getElementById("modal-text");
    
    // Array to store text for each team member
    var teamMemberText = [
      "Text for team member 1",
      "Text for team member 2",
      "Text for team member 3",
      // Add text for other team members here
    ];
    
    // Get all team members
    var teamMembers = document.querySelectorAll('.team-member');
    
    // Loop through each team member and add click event
    teamMembers.forEach(function(member, index) {
      member.addEventListener('click', function() {
        modal.style.display = "block";
        modalText.innerText = teamMemberText[index]; // Set modal text based on index
      });
    });
    
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    
    // When the user clicks on <span> (x), close the modal
    span.addEventListener('click', function() {
      modal.style.display = "none";
    });
    
    // When the user clicks anywhere outside of the modal, close it
    window.addEventListener('click', function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
  });