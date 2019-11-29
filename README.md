# Game Stats Web App
It is a react single-page application that displays information about players and matches that are retrived from a <a href="https://github.com/zyxago/gameStatsApp"> backend</a>. It uses bulma and react so you need to run: `npm install` to get the project to run

<b>OBS: This wont work whitout a backend and database --> backend and database that was used can be found here: https://github.com/zyxago/gameStatsApp</b>

## Components
`App.js` is the main component

`Nav.js` is the component responsible of showing admin options and changing between the two sites that are rendered by: `Matches.js` and `Teams.js`

`Teams.js` displays infromation about the diffrent teams

`Team.js` displays information about a team

`Matches.js` displays information about all the matches

`Match.js` displays some information about a specific match

`Popup.js` Renders diffrent popup modal cards depending on what admin option was pressed from `Nav.js`

`Header.js` simple header component

`Footer.js` simple footer component

---

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
