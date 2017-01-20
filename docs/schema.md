# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
background_photo| string    |
thumbnail       | string    |

## trips
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
description | text      |
location    | string    | not null
user_id     | integer   | not null, foreign key (references users)

##images
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
image_url   | string    | not null
trip_id     | integer   | not null, foreign key (references trip)

image_url   | url       | not null


## likes

column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
trip_id     | integer   | not null
user_id     | integer   | not null
