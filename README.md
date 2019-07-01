# BYOB

BYOB, or **B**uild **Y**our **O**wn **B**ackend, is a project intended to test the devleopers skills and knowledge of Express and Knex. The student was to build a relational database as well as a backend with corresponding get, post, and delete endpoints.

## Deployment
This app is deployed [here](https://last-murder-onthe-left-la.herokuapp.com/).

## API Endpoints Available
There are a total of seven endpoints to hit with this API, four GET, two POST, and one DELETE. They are described below.

### GET

#### `/api/v1/crimes/`

In order to retreive all the crimes, simply fetch the crimes with the url `http://localhost:3000/api/v1/crimes/`. Here's a snippet of what you would receive back:

```
[
  {
        "id": 5,
        "year": "1937",
        "name": "Three Little Inglewood Girls",
        "location": "Baldwin Hills",
        "neighborhood_id": 4,
        "created_at": "2019-06-27T16:48:43.018Z",
        "updated_at": "2019-06-27T16:48:43.018Z"
    },
    {
        "id": 6,
        "year": "1994",
        "name": "Nicole Brown Simpson & Ron Goldman",
        "location": "879 South Bundy Drive",
        "neighborhood_id": 7,
        "created_at": "2019-06-27T16:48:43.019Z",
        "updated_at": "2019-06-27T16:48:43.019Z"
    }
]
```

#### `/api/v1/neighborhoods/`

In order to retreive and view all the neighborhoods, simply fetch the neighborhoods with the url `http://localhost:3000/api/v1/neighborhoods/`. Here's what you would get back:

```
[ {
        "id": 6,
        "city": "Beverly Hills",
        "population": 34109,
        "created_at": "2019-06-27T16:48:42.975Z",
        "updated_at": "2019-06-27T16:48:42.975Z"
    },
    {
        "id": 7,
        "city": "Brentwood",
        "population": 2069,
        "created_at": "2019-06-27T16:48:42.976Z",
        "updated_at": "2019-06-27T16:48:42.976Z"
    }]
```

#### `/api/v1/crimes/:id`

If you'd like to see a specific crime, you'll need to request it from the url. For instance, if you want to see the crime with the id of 30, you'd need to fetch from `http://localhost:3000/api/v1/crimes/30`. The response you would get would look like the following:

```
[
    {
        "id": 30,
        "year": null,
        "name": "William Bonin",
        "location": "Freeways",
        "neighborhood_id": 19,
        "created_at": "2019-06-27T16:48:43.038Z",
        "updated_at": "2019-06-27T16:48:43.038Z"
    }
]
```

If you input a crime with an id that is not available, you'll receive a response of the following:

```
{
    "error": "Error! 💥 Could not find crime with id 299"
}
```

#### `/api/v1/neighborhood/:id`

Should you want to look at a specific neighborhood, you could fetch from `http://localhost:3000/api/v1/neighborhoods/6`. You would receive as a response:

```[
    {
        "id": 6,
        "city": "Beverly Hills",
        "population": 34109,
        "created_at": "2019-06-27T16:48:42.975Z",
        "updated_at": "2019-06-27T16:48:42.975Z"
    }
]
```

Should you input a neighborhood id that is not available, you'll receive:

```
{
    "error": "Error! 💥 Could not find neighborhood with id 299"
}
```

### POST
#### `/api/v1/crimes/`
A user can post a new crime if they wanted to. In order to do so, they would need to include a couple pieces of information including: `name`, `year`, `location`. If they include the correct parameters, they'll get back the id of the new crime they've just added. The messages described are taken from postman so they are in JSON format.

Happy path:
A User could submit the following as their new crime:

```
{
	"name": "Darth Vader",
	"year": "2019",
	"location": "Death Star"
}
```

They would receive the following back as an indication the post worked properly.

```
{
    "id": 103
}
```

Sad path:
While attempting to post a new crime but the user doesn't include the proper information:

```
{
    "error": "Expected format: {name: <String>, year: <Number>, location: <String>. 🎯 You're missing a year property.}"
}
```

#### `api/v1/neighborhoods/`

A user could post a new neighborhood were a crime was committed. Should they want to do so, they need to include both `city` and `population` properties. It would look like so:

```
{
	"city": "Mordor",
	"population": "20685"
}
```

The happy response would look like this:

```


```

If a user did not include the correct information, they would receive the following error:

```
{
    "error": "Expected format: {city: <String>, population: <Number>. 🎯 You're missing a population property.}"
}
```

### DELETE
A user can delete a crime from the database. Doing so would be fetching with a type of DELETE from the url `http://localhost:3000/api/v1/crimes/:id`. Should the user want to delete crime number 1, they'll use the url `http://localhost:3000/api/v1/crimes/1`. 

As a response that they have deleted the crime properly, they'll receive:

`"Deleted! 🦖"`

If no crime exists with the requested id, in this instance 1, the user would receive:

```
"Error! 💥 This crime does not exist! ...yet..."
```

## Stack Used
- Knex
- Express

## Screenshots


### Schema


## Learning Goals
- Major learning points for this project were to really dig deep into using Knex and learn how to effetively make a relational database. In addition, the developer was to utilize and cement their skills with Node to create corresponding endpoints.

## Contributors
