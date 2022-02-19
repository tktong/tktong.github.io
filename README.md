# tktong.github.io

My personal GitHub pages created using React. 
Is it overkill? 
Probably, but I wanted to learn React.

## Creating your own GitHub pages using React.

For others that come across this and want to do something similar:
1. Create your GitHub repository.
2. Create your React app.
```
npx create-react-app <name>
```
4. Navigate to the React app directory.
5. For local development, you can run `npm start`.
6. Install `gh-pages` package.
```
npm install gh-pages --save-dev
```
6. Modify package.json
   1. Add a new field `homepage` field with the GitHub pages URL for the repository created in step 1.
   2. Within the `scripts` block, add a `predeploy` script and a `deploy` script.
```
# package.json
{
  "name": "tktong.github.io"
  ...
  "homepage": "https://tktong.github.io"
  ...
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```
7. When ready, deploy GitHub page.
```
npm run deploy
```