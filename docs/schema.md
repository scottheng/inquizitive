# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
prof_pic_url    | string    | null
type            | string    | default("student")

## study_sets 
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
title           | string    | not null
user_id         | integer   | not null, foreign key (references users), indexed
visitable_option| string    | not null, default ("everyone") 
editable_option | string    | not null, default ("only me") 

## study_set_folders 
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
study_set_id    | integer   | not null, foreign key (references study_sets), indexed 
folder_id       | integer   | not null, foreign key (references folders), indexed

## study_set_classes
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
study_set_id    | integer   | not null, foreign key (references study_sets), indexed 
class_id        | integer   | not null, foreign key (references classes), indexed

## cards 
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key 
term            | string    | not null
definition      | text      | not null 
study_set_id    | integer   | not null, indexed
starred         | boolean   | not null, default ("false")

## flashcard_sets 
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key 
name            | string    | not null
user_id         | integer   | not null, foreign key (references users), indexed

## flashcards 
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key 
card_id         | integer   | not null, foreign key (references cards), indexed
flashcard_set_id| integer   | not null, foreign key (references flashcards), indexed

## classes 
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key 
name            | string    | not null
description     | text      | null 
share_privileges| boolean   | not null, default (TRUE)
owner_id        | integer   | not null, foreign key (references users), indexed


## members 
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key 
user_id         | integer   | not null, foreign key (references users), indexed 
class_id        | integer   | not null, foreign key (references classes), indexed

## folders 
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key 
name            | string    | not null 
description     | text      | null 
user_id         | integer   | not null, foreign key  (references users), indexed