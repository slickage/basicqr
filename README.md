# basicqr - Simple QR Code API
A simple implementation of a QR code endpoint generated with an image.

### Environment Config

```PORT``` Port of the HTTP server. Default: 3000

### Development
Install node/npm.
```
git clone git@github.com:slickage/basicqr
cd basicqr
npm install
node index.js
```
### API
:string is the string to encode in a QR code.
```http://localhost:3000/qr/:string```

### Usage
Open your web browser to ```http://localhost:3000/qr/foo``` and you'll have a QR code image in your browser representing the string "foo".
