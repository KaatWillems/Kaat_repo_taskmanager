# My Task Manager Terminal-level 3
- Repository: `my-task-manage-level-3`
- Type of Challenge: `learning challenge`
- Duration: `2 day`

## Learning Objectives

##### Setup, design and manage a database management system
* Perform CRUD operations on a Database from the front end
* Discover a full app setup


## Mission objectives

Hello hello hello Everybody!

Today, we will continue our learning approach of a simple relational database system that speaks with a frontend and a backend application.

On the same topic we already began to work on, you will create today an Task Manager.

Last time you did that, your task manager was running in your terminal. Today, you will make it run on your browser by having a frontend and a working backend.

A few operations are to perform with your task manager.

You need to:

- __Create__ a new entry of task in the db.
- __Read__ all the entries present in your db.
- __Update__ a task by marking the fact that its done.
- __Delete__ a task if you don't want to see it anymore.


To help you in your journey, i would reccomend that you take inspiration from our movie app code we corrected together yesterday.
The tables are different, but the logic is the same.

You might then say, But Snoop, we did not see how to delete or update stuff yesterday...

I know and i got you covered. When you arrive at that step, don't be shy and check out:

- [Update data](https://www.sqlitetutorial.net/sqlite-nodejs/update/)
- [Deleting data](https://www.sqlitetutorial.net/sqlite-nodejs/delete/)

Allright. After a few discussions, lets divide your work into smaller steps.
I'll do it for adding an entry to the db, you'll do tha same brain exercise for the other features.

### Steps to achieve to add data to the database.

1. Add an event listener to the "add a new task" btn.
2. Be sure that the event is working by logging something.
3. On click on this btn I want to retrieve the actual value of the input.
4. On click on this btn connect our frontend to the brain then to the backend.
5. On click on this btn Send data to the backend.
6. On click on this btn send the __RIGHT__ data to the backend.
7. In the backend, add the right data to the database.
8. In the frontend be sure to update the list with the new data.

Nice once all this tasks are completed, you should be able to add tasks to your database.

### Tips

- Don't forget to create your db by going inside the db folder in your terminal and running:

```
sqlite3 db.nameOfYourDb
```

- Don't focus yourself on the end product, try to divide tasks one at the time.

- Before starting to work don't forget to run

```
npm install
```


### Bonus Challenges

- Add the possibility for a user to upload an image linked to the task using an external storage provider.
check out:
[CLoudinary](https://cloudinary.com/documentation)
[CLoudinary really easy widget integration](https://cloudinary.com/documentation/upload_widget)

- Use the __NPM__ library to install _sortablejs_ and add the feature of being able to rearrange the order of tasks. The new order should be saved on the database.


I know you can do it!


![](https://media.giphy.com/media/TilmLMmWrRYYHjLfub/giphy.gif)














