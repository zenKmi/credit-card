# LevelUp Internship challenge resolution October 2023

Name: Rodrigo Enrique Marín Larios

Graduate for Information Systems Engineering

Universidad Católica de El Salvador

## Instructions to run this script

Make sure you have `npm` installed in your computer and after downloading the source code from github, run `npm install`. After a few seconds it should be complete, so you can go ahead and run `npm start`, to start the `React` app, and in another terminal or tab, run `node BackEndAPI.js`,  to run `Express` server along.

It should automatically open on your default browser, and so you can start testing this app.

## Libraries used on project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

-`Material UI / MUI`

-`NodeJS`

-`React`

-`create-react-app`

-`react-tsparticles`

-`react-helmet-async`

-`Express`


## More info

This project was created using `JavaScript` as the main programming language, with help of `HTML`, and `CSS`, for frontend.

It consists in a simple page for credit card payment, where:

-Expiration date must be AFTER present time.

-CVV must be exactly 3 digits long, unless it is an American Express card.

-PAN must be between 16 and 19 digits long.

-Last PAN number is checked using Luhn's algorithm.

Every function that does backend functionalities is stored in `Utils.js`, while `PaymentForm.js` is the file which has most of the frontend configurations and all the form layout created through JS, and finally `App.js` is the main file that imports `PaymentForm.js` in order to show it in the main view. There's also an additional script called `Particles.jsx`, that is used as a configuration file for the particles effect on the main view.

Some validations are done while running on frontend, just to give a more graphical feedback if you are making a mistake, and will trigger as you change the fields content. When `PAY NOW` button is pressed, it calls a file called `BackEndAPI.js`, which is the Express server's API running along, to make a last moment check before deciding if all info is ready to be exported to a server or Bank API. You will see a small snackbar on your screen's bottom left, showing if BackEndAPI was success or not.

# Additional (default) React info

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
