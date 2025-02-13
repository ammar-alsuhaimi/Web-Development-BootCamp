1. **Setting Up GitHub Account**: You need to sign up on [GitHub](https://github.com), and after confirming your email, you can sign in and create a new repository.

2. **Creating a Remote Repository**: 
   - Go to GitHub, click the "+" icon at the top right, and select "New repository."
   - Choose the repository name (e.g., "Story") and a description (e.g., "My masterpiece").
   - Select whether to make it public or private.
   - Click "Create repository."

3. **Linking Local Repository to GitHub**:
   - Copy the URL of your GitHub repository.
   - In your terminal, navigate to your local project directory (e.g., "Story").
   - Add the remote repository using: `git remote add origin <repository URL>`.
   - Push your local repository to GitHub using: `git push -u origin main`.

4. **Commit History on GitHub**:
   - After pushing, you can see all your commits on GitHub, including the commit messages and changes made in each commit.
   - GitHub tracks changes, allowing you to see a timeline of your project.

In the next lesson, you'll learn how to use `.gitignore` to prevent uploading sensitive files (like API keys) to your GitHub repository.
