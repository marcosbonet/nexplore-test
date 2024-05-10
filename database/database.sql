CREATE DATABASE taskdatabase;

CREATE TABLE tasks(
    id SERIAL PRIMARY KEY,
    taskName VARCHAR(40),
    description TEXT
):

INSERT INTO tasks (taskName, description)
 VALUES ('estudiar','typescript'),
        ('trabajar','conNext.js');