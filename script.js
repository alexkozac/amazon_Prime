document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('click', function () {
        changeCursor();
    });
});

function changeCursor() {
    document.body.style.cursor = 'url("img/2.png"), auto';
}



function navigateToAnotherPage() {
    
    window.location.href = "another-page.html";
}

function showDetails(title, description, rating) {
    const detailsTitle = document.getElementById('detailsTitle');
    const detailsImage = document.getElementById('detailsImage');
    const detailsDescription = document.getElementById('detailsDescription');
    const detailsRating = document.getElementById('detailsRating');

    detailsTitle.textContent = title;
    detailsImage.src = `images/${title.toLowerCase().replace(/\s+/g, '-')}-details.jpg`;
    detailsImage.alt = `${title} Details`;
    detailsDescription.textContent = description;
    detailsRating.textContent = rating;
    document.getElementById('movieDetails').style.display = 'block';
}

function searchContent() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const searchResultsContainer = document.getElementById('searchResults');
    searchResultsContainer.innerHTML = "";

   
    const searchResultsData = [
        { title: "Movie 1", description: "Description for Movie 1", rating: 8 },
        { title: "Movie 2", description: "Description for Movie 2", rating: 7.5 },
        { title: "TV Show 1", description: "Description for TV Show 1", rating: 9 },
        { title: "TV Show 2", description: "Description for TV Show 2", rating: 8.5 },
    ];

    const searchResults = searchResultsData.filter(item => item.title.toLowerCase().includes(searchInput));

    searchResults.forEach(result => {
        const resultItem = document.createElement('div');
        resultItem.classList.add('media-item');
        resultItem.innerHTML = `
            <img src="images/${result.title.toLowerCase().replace(/\s+/g, '-')}-thumbnail.jpg" alt="${result.title}">
            <h3 onclick="showDetails('${result.title}', '${result.description}', ${result.rating})">${result.title}</h3>
        `;
        searchResultsContainer.appendChild(resultItem);
    });
}

function addToWatchlist() {
    const detailsTitle = document.getElementById('detailsTitle').textContent;
    
    alert(`Added "${detailsTitle}" to your watchlist!`);
}


document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('movieDetails').style.display = 'none';
});


document.addEventListener('DOMContentLoaded', function () {
    const movieList = document.querySelector('.movie-list');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    let currentIndex = 0;
    const totalItems = movieList.children.length;

    nextBtn.addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    });

    prevBtn.addEventListener('click', function () {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateCarousel();
    });

    function updateCarousel() {
        movieList.style.transform = `translateX(-${currentIndex * (33.33 + 20)}%)`;
    }
});

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
  


