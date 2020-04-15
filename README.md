<img src="https://github.com/matiassingers/awesome-readme/blob/master/icon.png" align="right" />

# VSAE 

VSEA or Visualization of solving arithmetic expressions

<hr/>

VSAE is a web library with an api endpoint (written in [Flask](https://palletsprojects.com/p/flask/)) for providing the solving steps of a given aritmetric expression, we can do this through the input field on the webapp or just by uploading an image of an expression to the webapp (doesn't support handwriting). The frontend of the application will draw the expression in a binary tree structure and give us the solving steps of the given expression. The frontend is written in [React](https://reactjs.org) and on top of that we use the [P5.js](https://p5js.org) library to draw the binary tree to the end user...

```diff
- Disclaimer: Everything on the frontend of the application is in Slovene...
```

![banner-img](https://github.com/JanezSedeljsak/vsae/blob/new-primary-branch/test/screen.jpg)

## Getting Started

> 1. pip install -r requirements.txt --no-index --find-links file:///tmp/packages<br/>
> 2. run server with: python -m flask run<br/>
> 3. open a diff. bash console
> 4. get into the frontend directory (cd frontend) and run: yarn <br/>
> 5. run yarn start, the app will run on localhost:3000

### Prerequisites

* NodeJS >= v10.0.0
* Python >= v3.6
* Tesseract
* Yarn

## Built With

* [Flask](https://palletsprojects.com/p/flask/)
* [React](https://reactjs.org)
* [P5.js](https://p5js.org)

## License

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

## Authors

```JS
const AUTHOR = 'Janez Sedeljsak' //https://github.com/JanezSedeljsak;
```
