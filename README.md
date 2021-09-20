# Tech Assessment

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The current iteration has the following featues:

Mobile Friendly.  
Infinity Scroll.  
Search bar to filter by name or office.  
CrossBrowser support:

    "last 1 chrome version"  
    "last 1 firefox version"  
    "last 1 safari version"  

It uses animations written in vanilla CSS and no UI frameworks, besides React, were used.

My initial goal was to add screen reader and keyboard only function as well, as I consider those to be bare minimums for A11y.
However I ended up spending about 8 hours on the project so I figured it was time to stop since I think that that is as much part of the tests as the actual features requested.  
For the same reason the project is lacking tests and some of the components could be further abstracted.

If I had more time, I would also further streamline the CSS by adding global styles and variables and create custom Proptypes for the CardGrid.js `props.children`.

All in all, what I wanted to show was that I have understanding of React beyond the basics, which is why I implemented my own hooks for infinity scroll and fetch.

## Run Locally:

Install dependencies with `npm install`  
Add a .env.development.local file with the following variable `REACT_APP_TRETTON_API` in which the value should be a valid token for the provided API.  
Finally, start local server with `npm start`


## Available Scripts

In the project directory, you can run the following scripts either with npm or yarn:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
