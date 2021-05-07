# Spec Sheet

## Git Commands

Process: 

The below are comomn git commands preceded by a 

* Note - Can never check "git status" too many times 

To check the status of your current working branch: $ git status  
To add all files in the directory: $ git add .  
To commit the files with a message: $ git commit -m <message>
To create a branch: $ git branch <branch>
To change branches: $ git checkout <branch>
To merge branches: $ git merge <branch>
To pull: $ git pull 

## Heroku Commands

To set up a git remote for an existing Heroku app:

$ heroku git:remote -a (Heroku app name)

To push to the main branch:

$ git push heroku main

Resources:
[Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli#download-and-install)

[Deploying to Heroku](https://devcenter.heroku.com/articles/git#tracking-your-app-in-git)
