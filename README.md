## VynilVerse

🎺 Welcome to VynilVerse, your ultimate music search engine 🎺

This readme describes the app's features and provides an overview of the development process.

### 🎶 What the app can do (and how)

#### Search results

The app takes a query and category (artist, track, album, or all) and returns results that include the query string. When the input or select is modified, the results array is set into the results state and adds isClicked (always set to false on this stage) and `isFavourite` (set to false unless found in the list of favorites) key-value pairs.

Results include a thumbnail picture (or, if there's none, the first letter of the result's title with a primary color background), a title, the type of the result, and two buttons: add to favourites and more info.

When the item is added to favorites, the result's `isFavourite` state changes (and the state of the favourites array), and the "Add to favorites" button changes its style and text to "In favorites."

When more info is clicked, it triggers a change in the result's isClicked state, which controls whether the result's card with additional information is opened or not. Given more time, I would have liked to make an additional API call to fetch more additional details (see Overview).

#### Favourites

The app renders a list of favorite items, which is controlled by the array of favourites that consists of the ID and title of items added into it. The delete button removes the item from the favorites list and updates `favourites` state and this item's `isFavourite` state.

#### Pagination

There is a simple pagination system with previous/next page functionality and a display of the current page and the total number of pages. If there are more than 99 results, the total pages number prints as 99+. The text is controlled by the object called `pagination` inside the results state, which has two key-value pairs: `page` (current page) and `pages` (total number of pages).

### 🎶 Structure

I created a folder called "components" where you can find the components. The styles are in the folder called "styles". There is the base.scss file where you can find all the rest of the SCSS files imported.

### 🎶 Styles

I used SCSS to organize my style sheets. I installed Material UI for the search text input and select box, and used Material Icons for pagination arrows, delete and close buttons. I decided to use TypeScript, and because app is quite small, I defined all the necessary types in one single file `interface.ts`.

## 🎶 GIT

I tried to imitate the regular Git flow by working with main and feature branches. I created a branch called "master", and every time I tackled a new step of creating my app, I tried to create a new branch for each major task (rendering the list of results, creating favorites list, setting up pagination, etc.). Once I considered the task finished, I would merge the working branch into master.

### 🎶 Overview

#### What I would improve

Given my limited time and having to balance this task with a full-time job, there were some things I couldn't include in the initial version of the app. With additional time, I would address the following points:

- Pagination: Add buttons to go to the first/last page.
- Results fetching: Add a spinner on results load (possibly a vinyl spinning!).
- Sort results by category.
- Open card: Include an API request to "resource_url" to fetch more information about each result, such as artist - descriptions or album track lists.
- Favourites: Save results to local storage.
- Style: Override focus styles on input and select elements, add a glowing animation on the Add to ❤️ button, and add a customized scrollbar.
- Structure: Move the fetch function from search container into the reducers file.

#### Challenges and accomplishments

While testing my app, I noticed that it was firing the API call way too many times, which was causing it to crash. I realized that I needed to implement a debouncer on the search query typing. It was the first time for me to implement debounce function in React, and it took me some time to figure out the solution. I had to sacrifice a couple of things from the above ⬆️ list to achieve the desirable result but I'm proud to say that I managed to solve the problem.

Despite some time pressure, I'm really happy with the final result. I was able to tackle all the main points of the task and create an app that looks and feels great. And since I had control over the design and functionality, I was able to incorporate my own ideas and make it my own. It was enjoyable to work on something fun, where I had the freedom to decide on the design and functionality.
