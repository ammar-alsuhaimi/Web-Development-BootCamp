```markdown
# Directory Creation, File Creation, and Directory Manipulation

In this lesson, I want to introduce you to directory creation, file creation, and directory manipulation. We'll be doing all of this inside the command line, just with our keyboards.

## Creating a Directory

Starting in the root directory, let's create a new folder:
```bash
mkdir Angela
```
This creates a new folder named "Angela".

### Navigating to the New Directory

To navigate into the new directory:
```bash
cd Angela
```
Inside this directory, there are no files or folders yet.

## Creating a File

In a Graphical User Interface (GUI), you might open an application like TextEdit to create a file. Instead, let's create a file using the command line:
```bash
touch Text2.txt
```
You can open the file with:
```bash
open Text2.txt
```
To specify an application, use the `-a` flag:
```bash
open -a TextEdit Text2.txt
```

## Deleting Files

To delete a file:
```bash
rm Text.rtf
```
This command removes the specified file.

### Removing Multiple Files

To remove multiple files at once:
```bash
rm *.txt
```
This removes all files with the `.txt` extension in the current directory.

## Directory Manipulation

To print the working directory (current directory):
```bash
pwd
```
To go back to the parent directory:
```bash
cd ..
```

### Removing a Directory

To remove a directory, you need the `-r` flag:
```bash
rm -r Angela
```
This command removes the directory and all its contents.

### Warning: Use with Caution

Command line operations offer great power, but also come with great responsibility. Always check your location before running destructive commands. Misuse can lead to data loss.

## Additional Resources

For more in-depth command line tutorials, check out [Learn Enough Command Line to Be Dangerous](https://www.learnenough.com/command-line-tutorial).

---

```

