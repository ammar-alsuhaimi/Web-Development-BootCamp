# How to add a submodule to a git repository:

1. Go to your github account and create a new repository.
1. INSIDE the repository you'd like to have as "parent repository", use the following command:
```pwsh
$ git submodule add <link_to_child_repository> <folder_name_to_be_createdd_with_files>

# for example:
$ git submodule add https://github.com/ammar-alsuhaimi/WebBootcamp-PersonalSite.git personal-site
```
1. work on changes (when and if necessary on this repository) then push the changes made on the files from   `<folder_name_to_be_created_with_files>`
1. go to the main repository and stage + commit the changes made on the submodule

For more details / reference:
[Project by von Schappler](https://github.com/vonschappler/Project)
