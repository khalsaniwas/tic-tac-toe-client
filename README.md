# tic-tac-toe game

Tic Tac Toe is a game that takes seconds to learn but minutes to master! This game will be browser based game. It will require user authentication before playing.

## User Stories

1. [x] As a user, I want to be able to signup with email and password.
1. [x] As a user, I want to create a signin.
1. [x] As a user, I want to change my password.
1. [x] As a user, I want to sign-out.

1. [x] As a user, I want to see the game when signed in.
1. [x] As a user, I want to hide signup form after signin.
1. [x] As a user, I want to show signout and change password after signin.
1. [x] As a user, I want to hide changepassword/gameboard and show signup/signin after signout.

1. [x] As a user, I want to click start button to play game.
1. [x] As a user, I want to click a box to mark X or O.
1. [x] As a user, I want to take every other turn.
1. [x] As a user, I want to see an error when I make wrong move.
1. [x] As a user, I want to see when I win or lose.

1. [x] As a user, I want to restart game using button.
1. [x] As a user, I want to store the game data so that I can see my total games.

## Technologies Used

- jQuery
- HTML/CSS
- Bootstrap
- Javascript
- GitHub
- Google Chrome (dev tools)
- Atom
- Git
- Terminal

## Wireframe

```
https://imgur.com/0XsJqRt
```

## Story

### Document your planning.

I created a wireframe to begin with design. I did a research about tic tac toe game designs on Google. I have written user stories for functionalities that I wanted to put in my game.

### Tell a story about your development process.

I begin with reading user stories, Taking my directions from  user story and started with html. I had an idea in my mind and by looking at my wire frame, I had very clear picture of where and how I am going to lay out content on my single page application.

I created boiler plate, the basic html start up code that begins with !DOCTYPE html> and contain html,head and body tags. I gave my game a "title" and then continue with creating signup form and button on the page. In order to make the button to work and accept form data to eb submitted by user, I created event listner that triggers the event when user signup by filling out their email and password and submit that form.

Next thing I worked on was to display a massage on screen So that a user can get a confirmation if they are able to signUp successfully or if the signup failed. I used "bootstrap"  for displaying all the success and failure massages. Then I also added a functionality to clear out th form once user has successfully signedup.

I picked up next user stories and continue to create buttons for signIn, signOut and ChangePassword and applied same strategy for submission and to clear forms. Then used an object "store" to store all the user data and game data.

After the authentication part was done, I moved on to game section, started to think about how can I show the game on page that can take inputs from user in form of 'x' and 'o', For that I used bootstrap grid and used flex box to display them in 3 x 3 matrix.

### Problem-solving strategy.

I was facing challenges during development process, Most of the time I was using console log to debug the problems. I was executing the application again and again and was running dev tools to test the code. I had to search online for errors that I could not resolve on my own. I tested my code after finishing each code snippet.

##  Problems to be fixed in future iterations.

- I will be working on scss to have better UX.
## Tasks

Developers should run these often!

- `grunt nag` or just `grunt`: runs code quality analysis tools on your code
    and complains
- `grunt make-standard`: reformats all your code in the JavaScript Standard Style
- `grunt <server|serve|s>`: generates bundles, watches, and livereloads
- `grunt build`: place bundled styles and scripts where `index.html` can find
    them
- `grunt deploy`: builds and deploys master branch

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
