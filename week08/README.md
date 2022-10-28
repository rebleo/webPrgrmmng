##### node.js
### Intro to Node + Express

[Node.js](https://nodejs.org/en/)(aka Node) is a version of Javascript that works outside the browser. It can run on the command line and on servers.

Node was originally used for writing backend applications without a browser, though it can be used to manage the server in addition to the software you write for a browser ECMAScript engine for builidng server side apps. Uses [V8](https://v8.dev/)

#### Event / Callback driven 
A callback function is registered for a specific event. When that event occurs the callback method is run.

#### Prototyping a Server
In order to run node serves that are accessible via the web, we'll need somewhere to host it. Luckily our Storm servers have node configured. For today, we are going to be using code that will mimick a server so that we can prototype using a local port - in leiu of the python local server ;)


#### Step 1: Installing / Accessing Node
Check to see if you have Node installed. On your command line - in your project folder type:

```
node -v
```

* If you have Windows: [dwnld node](https://nodejs.org/en/)
* If you have MacOS (if you have [Homebrew](https://brew.sh/) installed): brew install node

like python once installed you can run node by typing "node" into the command line
```
node [then start writing javascript]
```
To quit out of node:
```
CNTRL / CNTRL C
```

#### Step 2: Initiating Node Packages w/ NPM
npm is the node package manager. It's a common way to install any node package which add to the base functionality.  
[search for packages](https://www.npmjs.com/).

Go to yr project directory + type: 
```
npm init
```
To install a package: 
```
npm install <module_name> -- save
```
To install a node package globablly: 
```
install -g
```
#### Step 3: Installing Express
[Express](https://expressjs.com) is a framework for making HTTP servers w/ node. Express is one of the most popular frameworks for Node. It acts as a web server, querying input, directing routing for mobile and web applications. You can use it to create your own API, aka your own interface between programs.

1. Start by creating a directory for your project + place a previous website project inside it. We will create a .js server file to then server up the client side .html, .css + .js files. 
pr ojectFolder --> clientFolder

2. To install you use npm in the directory that will contain yr project. In your terminal cd into yr project folder + type: 
```
npm init 
```
which will trigger a guide, asking you some questions, and generating a basic package.json file that will list all of your needed node.js packages to be installed from npm and any other basic info relating to your project.

3. After this is completed, we need to tell npm to install the Express package. 
```
npm install express --save
```
***
#### Step 4: Writing our API in a new .js file
1. Now we can create and open up our javascript file. I’ll name the sample code theServer.js. Inside our main JavasScript file - in our text editor - we’ll need to require Express so we can use it. 
```
const theExpress = require('express');.
```
2. Now that we’ve pulled in the Express framework, we can use it. We’ll create an express app
```
const theApp = express();
```
3. At this point, we have only added two lines to our file. We’ve created an app instance of Express and can now add functionality to that instance. Let’s listen to connections on a specified TCP port from our local machine.
```
const thePort = theApp.listen(12345);
```
4. We can easily serve static files from the front end software folder we've already created. 
```
localhost:12345/
```
#### Running the Server
In your terminal:
```
node myServer.js
```
to quit yr server
```
command C
```
##### Server Reloading
While you are developing you may make lots of changes to your code and it may be annoying to have to stop and restart your server constantly.

There are various npm packages to deal with this. One simple one is nodemon which will run a server and watch for changes to your code. If your code changes because you saved updated code in your text editor, nodemon will watch and re-serve the updated page. To install globally for use in all yr projects:
```
npm install nodemon -g
```
Now instead of node theServer.js you'll use the command:
```
nodemon theServer.js
```
#### Building your own API w/ Express
#### Routes
Simplified explanation: A REST API stands for a REpresentational State Transfer. This allows you to create an API that accepts GET requests to serve information. A “route” is how the server responds to a specific request based on the request’s “path”. 
Using Express, we can serve a route. By typing in a url such as website.com/search/sriracha, this route search/sriracha gets interpreted by our server through its API to search for our object and then send back particular data

Here is a basic Express server which responds with “Hello World” when the client requests the path “/”:
```
const theExpress = require('express');
const theApp = theExpress();
const thePort = 12345;

theApp.get('/', function (theRequest, theResponse) {
  theResponse.send('Hello Worlds!!')
})

theApp.listen(thePort, function () {
  console.log('Example app listening on port 12345!')
})
```

[Express Routing Guide](https://expressjs.com/en/guide/routing.html)

#### Other Routes
Of course a route can be for any “path”, here is an example for “/otherData”:
```
theApp.get('/otherData', function (theRequest, theResponse) {
  theResponse.send('Hello Worlds!!')
})
```
When a user makes a request, we send back a response.

Routing is particularly useful for executing specific code based on the user’s specific route.
```
theApp.get('/this_route', specialFunction);
```
Our created function looks like:
```
function specialFunction(theRequest, theResponse) {
  theResponse.send("Running our special function.");
}
```
We pass the parameters request and response, which references http’s request-response protocol. You can also pass html, either inside the send request, or more conveniently, as a passed variable containing your html.
```
function specialFunction(theRequest, theResponse) {
  let theMessage = '<h1>Headline</h1><p>Some information on this topic.</p>';
  theResponse.send(theMessage);
}
```
#### Serving a Static Webpage (HTML, CSS, + front end JS)
```
theApp.use(theExpress.static('pages/viewer'))
```


### Express + HTTP Methods
#### Routing + Route paths
Routing refers to how an application’s endpoints (URIs) respond to client requests. You define routing using Express methods that correspond to HTTP methods .get() to handle GET requests + .post() for POST requests.

These methods specify a callback function triggered when the application receives a request at a specified route or endpoint + HTTP method.

Route paths, in combination with a request method, define the endpoints at which requests can be made. Route paths can be strings, string patterns, or regular expressions.

This route path will match requests to the root route, /.
```
theApp.get('/', function (theRequest, theResponse) {
  theResponse.send('root')
})
```
This route path will match requests to /about.
```
theApp.get('/potato', function (theRequest, theResponse) {
 theResponse.send('potato')
})
```
#### Static + Dynamic files
Express can be configured to serve static files as well as dynamic routes. In this example any file in the “viewer” directory will be served if it’s name is requested:
```
theApp.use(theExpress.static('viewer'));
```
If you would like to dynamically serve a file based upon a request to a “route” you can use the “sendFile” function:
```
theApp.get('/randomTxt', function(theRequest, theResponse) {
	var fileToSend = "theRandom.txt";
	// Files inside "viewer" folder
  theResponse.sendfile(fileToSend, {root: './viewer'});
});
```
#### HTML Forms
Forms allow the page to take input from a user and send it to a server for processing. Also, using JavaScript the page can be made responsive or interactive by respond to form related data or events.

Putting a form on a page is as simple as using the various form tags nested within a <form> element.

```
	<form>

	</form>
```
There is an entire class of INPUT type form elements
##### Text Field:
Allows text to be entered. The “value” attribute can be used to specify a default value.
```
<input type="text" name="userName" value="..." />
```
##### Hidden Field:
Allows a value to be in the form but not displayed to the user. The “value” attribute specifies the value.
```
<input type="hidden" name="inVisible" value="..." />
```

##### Button:
Button that can be pressed by the user. The “value” attribute is what displays on the page. Generally this is used to trigger an event that will call some JavaScript.
```
<input type="button" name="theButton" value="click!" />

```
##### Submit:
button that is used to submit the form to the server. The “value” attribute is what display inside the button.
```
<input type="submit" name="theSubmitButton" value="Submit" />

```
##### Reset:
A button that is used to reset the form to the state it was when loaded. The “value” attribute is what display inside the button.
```
<input type="reset" name="theResetButton" value="Reset" />
```
##### Radio Buttons:
A series of radio buttons that allow the user to choose between a series of options. Each one has the same “name” attribute but a different “value” attribute.
```
<input type="radio" name="radioButton" value="Radio 1" />
<input type="radio" name="radioButton" value="Radio 2" />
```
#### Sending Data
In order for a form to submit information to a server for processing, we need to use the “action” and “method” attributes.

#### HTTP Method ”POST”
Using method=”POST” on an HTML form sends the data along with the request to the server behind the scenes (with the HTTP headers) and isn’t visible to the user so it can’t be book marked or otherwise saved. It might be a bit more private in this manner.

#### HTTP Method ”GET”
Using method=”GET” on a form sends the data “url encoded” as a query string to the server which displays on the URL. You would want to use this for search results that are to be shared or bookmarked for later retrieval.

#### action attribute
The “action” attribute is where to send the form data when the submit button is pressed.
```
<form method="GET" action="/getTheData">
	<input type="text" name="userName" value="..." />
	<input type="submit" name="theSubmitButton" value="Submit" />
</form>
```

#### Receiving Data
Express receives the data from the form as part of the request. You have to make a “route” for “post” if the method is post or “get” if the method is get.

First we need to install a piece of “middleware” to work with POST data in Express. The [body-parser](https://github.com/expressjs/body-parser) will take care of parsing the post as it comes in making the variables available to us in the the “route”. On the command line in our project folder we install the package.
```
npm install body-parser
```
then in our theServer.js file we use:
```
var bodyParser = require('body-parser');
// for parsing form data
var urlencodedParser = bodyParser.urlencoded({ extended: true });
theApp.use(urlencodedParser);
```
Now, each “name” from the form elements will come in as part of the theRequest.body object.
#### POST Route
The POST method is used to submit an entity to the specified resource, often causing a change in state or side effects on the server.
```
theApp.post('/getTheData', function(theRequest, theResponse) {
    var textValue = theRequest.body.userName;

  theRequest.send("You submitted: " + textValue);
});
```
#### GET Route
The GET method requests a representation of the specified resource. Requests using GET should only retrieve data. If a form is submitted with ”GET” the data will come in on the query string and can be parsed as follows:
```
theApp.get('/getTheData', function(theRequest, theResponse) {
    var textValue = theRequest.query.userName;

    res.send("You submitted: " + textValue);
});
```
#### Response Methods
The methods on the response object (res) in the following table can send a response to the client, and terminate the request-response cycle. If none of these methods are called from a route handler, the client request will be left hanging.
* [res.download()](https://expressjs.com/en/4x/api.html#res.download) - Prompt a file to be downloaded
* [res.end()](https://expressjs.com/en/4x/api.html#res.end) - end the response process
* [res.json()](https://expressjs.com/en/4x/api.html#res.json) - send a json response
* [res.redirect()](https://expressjs.com/en/4x/api.html#res.redirect) - redirect a request
* more [here](https://expressjs.com/en/guide/routing.html)
