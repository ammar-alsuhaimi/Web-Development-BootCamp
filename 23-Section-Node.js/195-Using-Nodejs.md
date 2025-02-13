```markdown
# Using Node.js

So now that you've successfully installed Node.js, let's go ahead and see how we can use it to start creating applications.

## Check Node Version

First, perform a version check using this command in the command line:
```sh
node -v
```

Open up Visual Studio Code and open a new window. In this new window, you won't have any files, but that's not important. Go to `View` and open up the Terminal. Another way to open the Terminal is to hover down right to the bottom until you see a little arrow pop up. Click and drag it up to open the Terminal.

Inside the terminal, write the command:
```sh
node -v
```
This will check the version of Node. Hopefully, if you've completed all the installation steps correctly, you're on the same version as me.

If you don't see the same version, it might be because you are on a more recent version, so maybe the number is higher. Alternatively, maybe you've installed Node in the past and have a lower version for some reason. Have a look at the text and the FAQs in the last lesson where we did the installation, and you'll find some instructions on how to fix this.

Hopefully, when you check your Node version, you should see a version number show up, starting with a `v` and it should be 18 or higher (e.g., 19, 20, whatever it may be).

## Using Node REPL

The next thing to learn to use is the Node REPL. REPL stands for Read Eval Print Loop, and this is not unique to Node. It's something that we can do with most programming languages, and it's basically an environment like the Node runtime environment where we can input user code, which is then read, evaluated, and printed back to us in the command line or console.

To initiate the Node REPL, type the command:
```sh
node
```

In Visual Studio Code, type the `node` command. You should see:
```
Welcome to Node.js
```
and a little arrow (`>`) that indicates you have successfully entered the Node REPL.

In the Node REPL, type commands such as:
```sh
.help
```
This gives you some of the other commands that you can use, like `.break`, `.clear`, `.editor`, etc.

To exit the REPL, use the command:
```sh
.exit
```
Alternatively, you can press `Ctrl+C` twice.

## Writing JavaScript Files and Running with Node

As useful as a REPL is in the command line, what we actually need to do is write full code files and use Node as the runtime environment.

### Writing Code

Head over to the course resources in this lesson and download a zipped file called `2.1 Using Node`. Extract that file and open the folder inside VS Code.

In the folder, you'll find a blank `index.js` file. Write the following code into this file:
```javascript
console.log("Hello from Node");
```

Save the file. Open the terminal and navigate to that folder using the `cd` command. For example:
```sh
cd path/to/your/folder
```

In the command line, type the `node` command followed by the name of your file. You can use the Tab key to autofill the rest of the file name. For example:
```sh
node index.js
```

Node will find this file, use the Node runtime to run the code inside `index.js`, and you should see the outcome:
```
Hello from Node
```

### Practice

Create another JavaScript file inside the same folder, write some code in there, and use Node to run that file. This will give you practice using Node.

In the next lesson, we'll look at some of the native Node modules and see how we can leverage them to add more power to our Node applications. For all of that and more, I'll see you there.
```
