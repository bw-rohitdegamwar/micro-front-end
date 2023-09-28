# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

Developers are limited to use https://mui.com/
We are not in a position to drop this and use something else at the moment .Tomorrow if we are starting anything from scratch we can discuss mui.com strictly and tightly implements Material design’s styles https://m3.material.io/
Material design is opinionated, It has its own rules about stuff like colour palette and it inherits colours in that colour palette into various components by default, transitions, animations etc
This is the color palette that mui.com exposes https://mui.com/material-ui/customization/palette/
We cannot tell mui.com’s theme or components to completely remove the material design styles, We can either add our own styles or over ride existing styles one by one https://mui.com/material-ui/customization/theming/
The easiest way to customize this is to make your own color palette which is at least analogous to the colors present and the designers should use a MUI Kit in Figma
It is fine if the designers add additional colors and have opinions about how those new colors will be used
However if the designers exercise their creative liberty to the fullest and ignore the above barriers then developers are caught in a soup where we now have to fight with the MUI theme to
Somehow suppress/remove the default MUI colours/styles
Somehow add our own colours
One point still remains unsolvable - Our designers use and inherit the color palette differently than how MUI inherits and uses its own color palette, Developers cant do anything about this and have to force style components out of MUI’s theme
To summarize the above, We are left with two extreme solutions
Developers stop using MUI and use a headless component library which is devoid of any styles and then implement styles given by desginers from scratch
We are not in a position to do above given that it would be a crazy rewrite and our timelines are short
Designers limit their creative liberty to just customize mui.com by using its kit and designing in the ambits of Material design
Again we are probably not in a position where we build our wireframes from scratch
So the only practical solution at the moment is that
Developers have to bite a bullet by somehow fighting MUI’s theming and force our design system on it
The consequences of this are that this is going to slow us down by a huge margin
Note - We are doing Micro frontends where our code base is scattered in multiple repositories and we are keen on enforcing a central styling solution to ensure consistency across the UI, Else in Demo calls Developers and designers will fight that the colour shade if off by 5%, padding, margin, spacing is off by 2 pixels. And tomorrow we wont be able to switch our theme to Dark/Light/XYZ without crazy effort
mui.commui.com
MUI: The React component library you always wanted
MUI provides a simple, customizable, and accessible library of React components. Follow your own design system, or start with Material Design. (25 kB)
https://mui.com/

m3.material.iom3.material.io
Material Design
Build beautiful, usable products faster. Material Design is an adaptable system—backed by open-source code—that helps teams build high quality digital experiences. (35 kB)
https://m3.material.io/

mui.commui.com
Palette - Material UI
The palette enables you to modify the color of the components to suit your brand.
mui.commui.com
Theming - Material UI
Customize Material UI with your theme. You can change the colors, the typography and much more.