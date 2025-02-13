
# Lesson: Understanding Node.js

Hey, guys. In this lesson, we're going to be learning all about Node.js—what it is, and why we're choosing to use it.

So we know that we can use lots of different languages to write the backend of our web application. And we've also seen that depending on the language we want to choose, we can also find a compatible framework to go along with it.

Now why would you need a framework anyways? Why can't you just write all the code from scratch using the chosen programming language and create your web server that way?

Well, in some ways, a framework is a bit like mayonnaise. You know me, I love my food analogies. So let's say you're a chef and you wanted to make some sort of recipe, and a great recipe using mayonnaise, by the way, is chocolate cake. It sounds really weird, but Google it and try it—it actually tastes really, really delicious.

Anyways, now let's say you're hungry at lunch and you wanted to make a Tuna Mayo sandwich. You could, of course, make your own mayonnaise, but alternatively, you could also just use store-bought mayonnaise, and in that way, the mayonnaise is kind of like a framework. You need all those components—the egg and the vinegar—in order to create the end product, which is your web app, or in this case our Tuna Mayo sandwich.

And you could write all of your own code, or because this is such a commonly used functionality or in this case a commonly used condiment, you could also just get the mayonnaise framework. And in that way, a Web-framework provides pre-built components and structures that can be used to build an application without the need for us to write every single line of code from scratch.

But when we think about Node, it's actually not quite a framework. It's, "An asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications." And this is according to Node.js themselves. So pretty much straight from the horse's mouth. So it can't get more accurate than that.

Now what does it mean? Let's break it down.

## JavaScript Runtime

It's a JavaScript runtime. Now what is a runtime environment? The important thing to remember here is that when JavaScript was first created, it was designed to run in the browser. This means that it was impossible to use JavaScript to write any kind of program that's not a website. But Node uses the V8 engine—not this eight-cylinder V8 engine, but this V8 engine which comes from Chromium. It's written in C and C++. It's blazingly fast and it powers the Chrome browser.

So we know that we can write JavaScript code to run in the browser and to provide functionality to our websites, but in many ways, the JavaScript code that we have is locked in the browser land jail. And when Node came along it effectively liberated the JavaScript out of browser land and gave it the freedom to allow us to use it to write any sort of application, desktop or server side.

Now that Node provides us with this JavaScript runtime so that we can run JavaScript on a machine such as your own local computer, it means that we can use JavaScript to accomplish pretty much anything that other popular server-side languages like Ruby, PHP, C-sharp, Python can do, while maintaining our full JavaScript stack from frontend to backend.

## Asynchronous and Event-Driven

Now what about the other part of this sentence? It's asynchronous and event-driven. What does this mean? Essentially, asynchronous means that your JavaScript code doesn't have to do everything sequentially. If we think back to the scripts that we've written before, our code kind of runs from top to bottom and we can have some functions, but essentially everything is going to happen from beginning to end in a synchronous way.

Now, what does asynchronous mean? Well, let's say that you went on to Amazon—not that kind of Amazon, this Amazon—and you ordered yourself something. Now, if this process was synchronous, then it means that you would have to sit there and wait until your parcel gets delivered and you can't do anything else in the meantime. That's what it means to run synchronous code such as our previous scripts written in JavaScript. It's effectively tying up the resources until some sort of event resolves, which in this case is the delivery of your Amazon parcel.

Can you imagine a world where you had to wait for your Amazon parcel and you just had to stand at the door and do nothing else after you've ordered it? Now, I don't know what Amazon Prime is like where you live, but where I live, it takes a long time to get one of these parcels and it would be terrible if this process was synchronous.

Node, on the other hand, is asynchronous and it's event-driven, so it means that you can initiate this order and instead of having to wait for it, it can free up the resources and only when the event of the parcel being delivered does it then continue to run the next bits of code. So effectively, we can parcel up these bits of code into an event so that we know that our code can be triggered when this event happens.

## Why We Need Node.js

In summary, the reason why we need Node is because it allows us to build an application often on a computer using JavaScript. As we saw earlier, the application is a key aspect of our backend. Now that application is going to be running on our server and that server, if you remember, is just a computer, but it's not a browser, and Node.js is what allows us to happen.

Now, as we saw earlier, there are many, many different choices in terms of languages or technologies that we could use for the backend. So why are we choosing Node? Well, the reason is because if we use Node, which is one of the most popular choices as of today, then it means that our frontend could be written in JavaScript plus HTML and CSS of course, but our backend could also be written in JavaScript.

So effectively, that allows us to use JavaScript everywhere inside our web application and this allows us to use one language to rule them all.

## Key Benefits of Node.js

The key benefits of Node.js are the fact that it allows us to use JavaScript across the entire stack, which means that developers are using a language they're already familiar with, and it makes it easy for them to transition from frontend to backend developer. If you're writing a project yourself, then you only really need to be familiar with one language, and you can share your code between your client and server side.

In addition, Node.js allows for easy scaling of applications, making it really good for large-scale professional projects. It's fast and it's non-blocking. Because of this asynchronous event-driven nature of Node.js, it can be really fast and really efficient, instead of having to wait for things to happen or blocking the resources.

Finally, it's got a huge ecosystem. It's got a really vibrant community and people have contributed thousands of open-source modules and packages to the Node Package Manager, which allows us to easily add functionality to our own applications. This also means that there's a lot of resources out there in terms of documentation, tutorials, help, people on StackOverflow who can answer your questions. Plus, we're not the only people choosing it. Everything from LinkedIn to Twitter to Netflix is built on top of Node.js, and even NASA uses Node.js. I recently came across this report about how NASA started using Node.js in order to keep their astronauts safe and make their data accessible. So if it's good enough for NASA, it's probably good enough for our projects.

Now, I don't think you needed any more convincing why we are choosing the best possible path, but every single time I give a talk on Node.js, people always ask me, "Why don't we use C-sharp? Why don't we use Python? Or why don't we use PHP?" People are particularly obsessed with PHP for some reason, and as we saw already in the last video, Node is just dominant. It's the thing that you're going to need to know if you want to get a job. It's the thing that most people look for as a key skill in a web developer, and we're trying to become web developers, right?

If you want to learn about Python and Python-based backends, which are really great if you're working with machine learning projects or anything to do with machine learning and AI, then be sure to check out my Python course where we cover the use of Flask in the backend and using Python.

Now one final piece of interesting stat from GitHub which looks at the programming languages of code that is committed across the entirety of GitHub, and you can see that JavaScript is just still king. Python is growing in popularity and for example, PHP—for some reason I always get asked about this—"Why are you not teaching PHP?" Well, it's because it's not really a very good idea to teach you PHP at this point. In fact, if you see any Web Development Bootcamp that's teaching PHP or Ruby on Rails, then you should probably be asking yourself if they have updated their curriculum within the last ten years.

There you have it. You should now understand what Node.js is, what it allows us to accomplish, and why we're choosing it to build our backend.

## What's Next

In the next lesson, I'm going to be showing you how to install Node.js on your local computer so we can get started building applications using Node. So for all of that and more, I'll see you there.


