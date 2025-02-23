---

# Cloning and Setting Up a Submodule for Practice

In this guide, I'll walk you through the process of cloning a project and setting it up as a submodule. 

The project does not belong to me, and it's purely for practice to make it easy for people to see the project.

## Prerequisites
- Ensure you have Git installed on your machine.

## Step 1: Navigate to the Directory
Navigate to the directory where you want to add the submodule. 

In this example, we'll use the directory `Web-Development-BootCamp/section_27`.

```sh
cd Web-Development-BootCamp/section_27
```

## Step 2: Add as a Submodule
Add the project as a submodule. Replace `<URL-of-the-repo>` with the URL of the repository you want to clone.

```sh
git submodule add <URL-of-the-repo> using_gitclone
```

## Step 3: Initialize and Update the Submodule
Initialize and update the submodule to ensure everything is set up correctly.

```sh
git submodule init
git submodule update
```

## Step 4: Commit the Changes
Don't forget to commit the changes to your main repository.

```sh
git add .
git commit -m "Added submodule in section_27/using_gitclone"
git push origin main
```

## Step 5: Deploy the Project
Finally, deploy your project using your preferred platform. 

Here's an example using GitHub Pages:

1. Ensure your repository has a `gh-pages` branch.
2. Push your changes to the `gh-pages` branch.

```sh
git push origin gh-pages
```

3. Go to your repository's settings on GitHub and enable GitHub Pages.

For deployment with platforms like Netlify or Vercel, ensure your project is configured correctly and follow their deployment guidelines.

## Accessing the Original Project

To access the original project, click on the folder link below:

[Original Project Folder](https://github.com/alto-io/game3.js)

To try the game, click on the link below:
[Try the Game](https://alto-io.github.io/game3.js)

This guide is intended for practice and to make it easy for people to see the project. 

The original project belongs to its respective owner, and I do not claim any ownership.

Happy coding!

---
