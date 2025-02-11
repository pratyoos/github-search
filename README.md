# GitHub Profile Search

This is a simple React project for learning API integration by fetching GitHub user profiles.

## Features
- Search for a GitHub user by username
- Display user details such as avatar, bio, public repos, followers, and following
- Handles errors for invalid usernames

## API Integration
This project fetches data from GitHub's public API:
```js
const response = await axios.get(`https://api.github.com/users/${username}`);
```

## Dependencies
- React
- Axios
- Tailwind CSS
- Lucide React (for icons)

## Learning Outcome
- Making API calls in React using `axios`
- Handling loading states and errors
- Displaying dynamic data in a React component