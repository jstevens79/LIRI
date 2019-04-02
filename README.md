# LIRI
### Language Interpretation and Recognition Interface

This CLI application will fetch Spotify info, Concert info, Movie info and more - all right from the CLI of your choice.

#### View a demo (click the image): 

[![LIRI Demo](http://img.youtube.com/vi/Jub7VOdh9Xk/0.jpg)](http://www.youtube.com/watch?v=Jub7VOdh9Xk)


## Requirements
- Node
- NPM
- A command line interface (like Terminal or Bash)


## Installation
1. Clone or download the repository to your computer.
2. Open your CLI and navigate to the folder.
3. Run `npm install`

All dependencies should now be installed and LIRI is ready for use


## Using LIRI

**1. Get a song listing from Spotify**
`node liri spotify-this-song [song here]`
- Returns a list of songs from Spotify. Results are from all artists with song titles matching your query, along with details like album, Spotify preview link and more.

**2. Get a concert listing**
`node liri concert-this [band here]`
- Returns a list of upcoming concerts from bandsintown.com based on the user input.

**3. Get movie info**
`node liri movie-this [movie here]`
- Returns details from OMDB about the movie you've chosen.

**4. Do what it says**
`node lirir do-what-it-says`
- Runs a query based on contents in a text file in the repository.






