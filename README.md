1. npm init X
2. npm install webpack webpack-cli --save-dev X
3. git ignore node modules X
4. npm install --- install node modules X

5. create src directory X
    a. create index.js X
    b. write a console.log or alert X
    c. run npx webpack X
    d. npx webpack --watch  ---- live reloads changes X
6. create dist directory
    a. create index.html X
    b. set up an HTML skeleton X
        b1. include a  single <div id="content"></div> X
    c. after adding the src.index.js file and content and running npx webpack open index.html X
7. create webpack.config.js X
    a. setup webpack config 


8. create a bar Webpage
    a. dynamically create elements
    b. create a pageLoad() module
    c. import and call pageLoad() module from index.js
    d. set up the bar page to use tabbed browsing ---- index.js
        d1. https://eckben.github.io/bearysBreakfastBar/
            da1. put the contents of each tab inside it's own module
            da2. the tab's module creates a div, adds content and styles and appends it to the DOM
        d2. add event listeners for each tab that clears the current contents 
            db1.  runs the correct tab module to re-populate tab.
    e. bar page must include
        a. image
        b. headline
        c. brief summary

9. adapt bar page to be displayable using GH Pages due to Webpack.

