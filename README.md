# 🍋 LemonLog - Simplify Your Node.js Logging 🚀

Welcome to **LemonLog**! The zesty, easy-to-use logging solution for your Node.js applications. Whether you're debugging your latest feature or keeping an eye on production issues, LemonLog is here to brighten your day (and your console) with colorful, structured logs. 🌈

## 🌟 Features

- **Simple Setup**: Get up and running in no time. LemonLog is all about simplicity.
- **Colorful Logs**: Make your logs more readable with automatic color coding. Info, debug, warn, and error logs each have their own vibrant hue.
- **Console Bindings**: LemonLog ties neatly into the console, ensuring that your logs are both beautiful and functional.
- **Custom Callbacks**: Handle errors and debug information your way with custom callbacks.
- **Flexible**: Whether you're writing a quick script or a complex application, LemonLog adapts to your needs.

## 🚀 Getting Started 

1. **Install LemonLog**

   ```bash
   npm install lemonlog
   ```

2. **Usage**

   First, require and create a new instance of LemonLog in your project:

   ```javascript
   const LemonLog = require('lemonlog');
   const log = new LemonLog('MyApp');
   ```

   Then, log away:

   ```javascript
   log.info('This is an info message!');
   log.debug('Here’s something you might find interesting...');
   log.warn('Warning! Warning! ⚠️');
   log.error('Oops! Something went wrong. 🚨');
   ```

3. **Customize Your Callbacks**

   Handle logs with your own custom logic:

   ```javascript
   async function someAsyncFunction(fail, cbk) {

      if (fail) {
         cbk({ return: "error" }, null);
      } else {
         cbk(null, { return: "ok" });
      }
   }

   // Custom callback example
   someAsyncFunction(false, log.callback("Custom success message"));

   someAsyncFunction(true, log.callback("Custom error message"));


   // Exec example
   someAsyncFunction(false, log.exec(result => {
      log.debug('Success:', result);
   }));

   someAsyncFunction(true, log.exec(result => {
      log.debug('Error:', result);
   }));

   ```

## 🍋 Why LemonLog?

We believe that logging shouldn't just be about capturing information. It should be a delightful part of your development process. With LemonLog, we aim to bring a little joy and color to your console, making it easier and more fun to sift through your logs.

## 🤝 Contributing

Got ideas on how to make LemonLog even better? We'd love to hear from you! Check out our contribution guidelines to get started.

## Keep It Zesty! 

Thank you for choosing LemonLog for your logging needs. We hope it adds a splash of color to your projects and makes logging something to look forward to.

Happy coding!

## 📄 License
The MIT License (MIT)

Copyright (c) Martin Clasen

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.