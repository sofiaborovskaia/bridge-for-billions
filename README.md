<h1 align="center">🎺 VinylVerse 🎺</h1>

<p align="center">
Welcome to VinylVerse, your ultimate music search engine

This readme describes the app's features and provides an overview of the development process.

</p>

## 🎶 Demo

#### Full preview is available [here](https://sofiaborovskaia.github.io/vinylverse/).

[![Demo VinylVerse](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDYwZjA2ZTAxYjM5MmNmZWYzN2M4MTFkMzZkNDgzMDE2MWZmZGIxNyZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/yy42zBHuOSyRjDFwSf/giphy.gif)](https://sofiaborovskaia.github.io/vinylverse)

## 🎶 What the app can do (and how)

### Search results

The app takes a query and category (artist, track, album, or all) and returns results that include the query string. When the input or select is modified, the results array is set into the `results` state and adds `isClicked` (always set to `false` on this stage) and `isFavourite` (set to `false` unless found in the list of favorites) key-value pairs.

Results include a thumbnail picture (or, if there's none, the first letter of the result's title with a primary color background), a title, the type of the result, and two buttons: add to favourites and more info.

When the item is added to favorites, the result's `isFavourite` state changes (and the state of the favourites list), and the "Add to favorites" button changes its style and text to "In favorites."

When more info is clicked, it triggers a change in the result's `isClicked` state, which controls whether the result's card with additional information is opened or not. Given more time, I would have liked to make an additional API call to fetch more details about the result (see Overview). Right now it renders a bigger picture related to the result item, its title, type, year and available formats (last two only for releases).

### Favourites

The app renders a list of favorite items, which is controlled by the array of favourites that consists of search results (= objects of two key-value pairs of `id` and `title`). The delete button removes the item from the favorites list and updates `favourites` state and this item's `isFavourite` state.

### Pagination

There is a simple pagination system with previous/next page functionality and a display of the current page and the total number of pages. If there are more than 99 results, the total page number prints as 99+. The text is controlled by the object called `pagination` inside the results state, which has two key-value pairs: `page` (current page) and `pages` (total number of pages).

## 🎶 Structure

I organized the codebase into three main folders: "components", "styles" and "app". The "components" folder contains all of the React components used in the app, while the "styles" folder contains the SCSS files used to style the app. "app" folder contains TypeScript and Redux files.

To ensure type safety, I used TypeScript for this project. Since the app is relatively small, I defined all the necessary types in a single file called `interface.ts`. However, for larger projects, it's usually best to create separate interface files for each feature or module.

For state management, I chose to use Redux Toolkit's `createSlice` function to define all of the reducers in a single file called `globalSlice.ts`. In a larger app, it would be more scalable to split the reducers into separate slice files based on their respective features, but as our app has limited features, I found it easier to work with a single source of state.

## 🎶 Styles

I used SCSS to organize my style sheets. Roughly every component has its own SCSS file, even though I did unify some of them (footer styles are inside `page.scss`, card's ones are in `search-results.scss`). I defined variables, mixins and some classes that are used globally across the app in `global.scss`. All the SCSS files are imported into `base.scss`. Also, I installed Material UI for the search text input and select box, and used Material Icons for pagination arrows, delete and close buttons.

## 🎶 GIT

I tried to imitate the regular Git flow by working with main and feature branches. I created a branch named "master", and every time I tackled a new step of creating my app, I tried to create a new branch for each major task (rendering the list of results, creating favorites list, setting up pagination, etc.). Once I considered the task finished, I would merge the working branch into master. I did, however, work on minor changes (restyling, changing texts, uploading favicon, updating readme, etc.) directly on `master` branch, which is not something I would do if there were other people working on this task.

## 🎶 Overview

### What I would improve

Given my limited time and having to balance this task with a full-time job, there were some things I couldn't include in the initial version of the app. With additional time, I would address the following points:

- Pagination: Add buttons to go to the first/last page.
- Results fetching: Add a spinner on results load (possibly a vinyl spinning!).
- Sort results by category.
- Open card: Include an API request to "resource_url" to fetch more information about each result, such as artist - descriptions or album track lists.
- Favourites: Save results to local storage.
- Style: Override focus styles on input and select elements, add a glowing animation on the Add to ❤️ button, and add a customized scrollbar.
- Structure: Move the fetch function from search container into the reducers file.
- Redux: separate global reducer into search (controls search query), results (array of results), pagination and favourites. Use Redux Toolkit `useAppDispatch` and `useAppSelector` instead the plane Redux `useDispatch` and `useSelector`.
- Performance: Refactor the code in Search Container to remove the double loop where I iterate through favourites for each new search result. While it may not noticeably impact loading times with small data sets (the user only loads 7 results and I doubt they will have millions of favourite items), it's good practice to avoid unnecessary looping and improve scalability. Talking in terms of Big O notation, by reducing the time complexity from O(n²) to O(n), we can ensure better performance with larger data sets.

### Challenges and accomplishments

While working on the installation of Redux, I decided to try Redux Toolkit for the first time. It was a bit of a challenge, but I was able to make it work and integrate it into my project. Although I would need to spend some more time to discover its features in depth, it was nice to see that I could successfully use this tool for state management.

When testing my app, I noticed that it was firing the API call way too many times, which was causing it to crash. I realized that I needed to implement a debouncer on the search query typing. It was the first time for me to implement debounce function in React, and it took me some time to figure out the solution. I had to sacrifice a couple of things from the above ⬆️ list to achieve the desirable result but I'm proud to say that I managed to solve the problem.

Despite some time pressure, I'm really happy with the final result. I was able to tackle all the main points of the task and create an app that looks and feels great. And since I had control over the design and functionality, I was able to incorporate my own ideas and make it my own. It was enjoyable to work on something fun, where I had the freedom to decide on the design and functionality.
