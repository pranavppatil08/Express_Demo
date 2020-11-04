## Path

The Path module provides a way of working with directories and file paths.

## Cookie-parser

To use cookies with express we use cookie-parser as a middleware.

## Express.json()

Parses only JSON format data/

## express.urlencoded()

Returns middleware that only parses urlencoded

## path.join(\_\_dirname,'public')

Using path.join(\_\_dirname, 'public') will create an absolute path, using the directory where app.js is located as the base

## app.use()

app.use() is a method we need to invoke middlewares.

# Restful API

## GET

GET method is used to retrieve data from the server. This is a read-only method

## POST

The POST method sends data to the server and creates a new resource

## PUT

The PUT method is most often used to update an existing resource. If you want to update a specific resource.

## PATCH

The PATCH method is very similar to the PUT method because it also modifies an existing resource. The difference is that for the PUT method, the request body contains the complete new version, whereas for the PATCH method, the request body only needs to contain the specific changes to the resource, specifically a set of instructions describing how that resource should be changed.

## DELETE

DELETE method is used to delete a resource specified by its URI

# HTTP Status Codes

## 200

OK, Request was fulfiled.

## 201

After POST, indicates sucess.

## 202

Request has been accepted for processing.

## 204

No Response from server.

## 400

Bad Request

## 401

Unauthorized

## 402

Payment Required

## 404

Not Found

## 500

Internal Server Error

