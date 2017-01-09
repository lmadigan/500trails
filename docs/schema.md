# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## trips
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
description | text      |
location    | string    | not null
user_id     | integer   | not null, foreign key (references users), indexed

## photos
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key (will be referenced in cloudinary)
trip_id     | integer   | not null, foreign key (references trip), indexed
latitude    | integer   |
longitude   | integer   |

## saved trips

column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
trip_id     | integer   | not null
user_id     | integer   | not null
