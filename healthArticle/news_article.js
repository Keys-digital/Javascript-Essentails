// Declare a variable for XMLHttpRequest
var xhr = new XMLHttpRequest();

// Declare a variable for the URL of the JSON file
var url = './news_articles.json';

// Configure it: GET-request for the URL defined in the variable
xhr.open('GET', url, true);

// Set the response type to JSON
xhr.responseType = 'json';

// Define the onload function
xhr.onload = function() {
  if (xhr.status >= 200 && xhr.status < 300) {
    // Retrieve the articles array from the JSON response
    var articles = xhr.response.articles;

    // Retrieve the HTML element with the ID 'articles'
    var articlesDiv = document.getElementById('articles');

    // Iterate over each article and create HTML elements dynamically
    articles.forEach(function(article) {
      // Create HTML elements dynamically
      var articleDiv = document.createElement('div');
      articleDiv.classList.add('article');

      var title = document.createElement('h2');
      title.textContent = article.title;

      var description = document.createElement('p');
      description.textContent = article.description;

      var detailsHeader = document.createElement('h3');
      detailsHeader.textContent = 'Details:';

      var detailsList = document.createElement('ul');
      article.details.forEach(function(detail) {
        var listItem = document.createElement('li');
        listItem.textContent = detail;
        detailsList.appendChild(listItem);
      });

      var benefitsHeader = document.createElement('h3');
      benefitsHeader.textContent = 'Benefits:';

      var benefitsList = document.createElement('ul');
      article.benefits.forEach(function(benefit) {
        var listItem = document.createElement('li');
        listItem.textContent = benefit;
        benefitsList.appendChild(listItem);
      });

      // Attach these elements to the articlesDiv to display each article's details on the webpage
      articleDiv.appendChild(title);
      articleDiv.appendChild(description);
      articleDiv.appendChild(detailsHeader);
      articleDiv.appendChild(detailsList);
      articleDiv.appendChild(benefitsHeader);
      articleDiv.appendChild(benefitsList);
      articlesDiv.appendChild(articleDiv);
    });
  } else {
    console.error('Failed to load articles:', xhr.statusText);
  }
};

// Send the request
xhr.send();
