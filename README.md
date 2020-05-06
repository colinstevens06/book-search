# MERN Book Search

## Overview
I created a React-based Google Books Search app. I did this be creating React components, utilizing React lifecycle methods to query and display books based on user searches. I also used Node, Express and MongoDB so that users can save books to review or purchase later.

## React
I used React Components for the saved book search section and for the search results rows. Depending on the number of results generated or the number of books saved, the components will dynamically generate and encoorporate that information.

I also used ternary operators to show placeholder images/text if the information requested from the Google Books Search API is not available.

## MongoDB
I am using MongoDB to save users results and to serve those results on the 'saved' page. When I user clicks to save the books, the information about that title is captured and sent to the database. When a user visits the saved books page, a query to find all saved books is made and the data is served dynamically.

## ExpressJS
I am using ExpressJS for my server, routing for the pages and routing for the API.

## NodeJS
I used NodeJS to manage the different packages I used for my project.