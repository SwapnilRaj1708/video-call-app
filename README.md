## React-VideoCall
Demo app: https://morning-escarpment-67980.onrender.com  

<img align="right" width="420" src="https://raw.githubusercontent.com/nguymin4/react-videocall/master/screenshots/1.png"  alt =" " style="border: solid 1px #d4d4d4" />
  
Video call to your friend without registering. 
Simply send your friend your auto-generated unique ID to make the call.  
Everytime you open a new tab, the server gives you a totally different unique ID.

### Installation

```
npm install -g yarn

yarn install
```

### Development

Run server
```
yarn watch:server
```

Run webpack-dev-server - http://localhost:9000
```
yarn watch:client
```

### Using with ngrok (for remote access)

To make your local server accessible from anywhere:

1. Install ngrok: https://ngrok.com/download
2. Start your server: `yarn start` (or `yarn watch:server` for development)
3. In a new terminal, run: `ngrok http 5000`
4. Copy the ngrok URL (e.g., https://abc123.ngrok.io)
5. Share this URL with anyone to make video calls!

**Note:** For development with webpack-dev-server, use `ngrok http 9000` instead.


### Deployment

**Render** (Free - Recommended)

<a href="https://render.com/deploy?repo=https://github.com/nguymin4/react-videocall/tree/production" style="display: block; margin-bottom: 20px">
  <img src="https://render.com/images/deploy-to-render-button.svg" alt="Deploy to Render" width="160">
</a>

**Heroku**

<a href="https://render.com/deploy?repo=https://github.com/nguymin4/react-videocall/tree/production" style="display: block; margin-bottom: 20px">
  <img src="https://www.herokucdn.com/deploy/button.svg" alt="Deploy to Heroku" width="160">
</a>

**Custom**
```
# Install dependencies
yarn install

# Build front-end assets
yarn build

# Run server
yarn start
```
