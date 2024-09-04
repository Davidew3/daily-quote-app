# Daily Quote App

## Description
This is a simple React-Bootstrap application that displays a daily quote to the user. It is one of the five capstone projects for the Frontend Development Libraries Certification. Originally, the quotes were scraped using puppeteer API and Node.js. The quotes were imported to an array where I created a Quotes.js file using an object array with the quotes and authors. During the build of the React application, I added the Quotes.js file. I could have imported the quotes using Puppeteer straight to the React app and alleviated the need for an additional .js file, but I had already done the work of editing the array. Maybe in a later version I will add the api to pull straight into the project and eliminate the Quotes.js file. 

I added my own styling through both css and module JavaScript. I created an array with background, backgroundColor, color, boxShadow, border, and btnBG (btn-background color). This was done merely to see if I could. It actually created nice gradient backgrounds for each quote card and the card's themselves were assigned a color from the index of the array of Colors.js. Again, this was a learning project and I did this on my own just to see if I could. It worked out pretty good for my first React App. 

## Installation
To install the application, follow these steps:

1. Clone the repository: `git clone https://github.com/Davidew3/daily-quote-app.git`
2. Navigate into the project directory: `cd daily-quote-app`
3. Install the dependencies: `npm install`

## Usage
To start the application, simply run `npm start` from the project directory.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
MIT

