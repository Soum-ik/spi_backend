# API Documentation

## Introduction
Welcome to the My Workspace API documentation. This API provides endpoints for managing teachers, notices, and events.

## Base URL
All endpoints are relative to the base URL: `http://localhost:6969/api/`

---

## Result Endpoints

### GET Result
- **URL**: `/result/243989`
- **Method**: `GET`


## Teacher Endpoints

### DELETE Teacher
- **URL**: `/teacher/delete/{teacher_id}`
- **Method**: `DELETE`
- **Success Response**: `200 OK`, `202 Accepted`, or `204 No Content`


### POST Teacher
- **URL**: `/teacher/create`
- **Method**: `POST`
- **Request Body**:
```json
{
    "name": "soumik",
    "department": "s",
    "fatherName": "s",
    "motherName": "s",
    "gender": "s",
    "address": "s",
    "image": "s",
    "shortDesc": "s",
    "email": "s",
    "phoneNumber": "s"
}
```

### GET Teacher
- **URL**: `/teacher/get`
- **Method**: `GET`

### PUT Teacher
- **URL**: `/teacher/update/{teacher_id}`
- **Method**: `PUT`
 
```json
{
    "name": "soumik",
    "department": "computer",
    "fatherName": "s",
    "motherName": "s",
    "gender": "s",
    "address": "s",
    "image": "s",
    "shortDesc": "s",
    "email": "s",
    "phoneNumber": "s"
}
```
- **Success Response**: `200 OK`, `201 Created`, or `204 No Content`

### PATCH Teacher
- **URL**: `/teacher/one/{teacher_name}`
- **Method**: `PATCH`

---

## Notice Endpoints

### DELETE Notice
- **URL**: `/notic/delete/{notice_id}`
- **Method**: `DELETE`
- **Success Response**: `200 OK`, `202 Accepted`, or `204 No Content`

### POST Notice
- **URL**: `/notic/create`
- **Method**: `POST`

```json
     {
    "notic_name": "festival",
    "details": "Sylhet Polytechnic Institute or SPI is a state supported technical academic institute located in Sylhet, Bangladesh. It was established in 1955 by the then East Pakistan government. It was named as Sylhet Polytechnic Institute in 1959",
    "date": "12 jun 2003"
}
```
- **Success Response**: `200 OK` or `201 Created`

### GET Notice
- **URL**: `/notic/get`
- **Method**: `GET`

### PUT Notice
- **URL**: `/notic/update/{notice_id}`
- **Method**: `PUT`

```json
     {
    "notic_name": "price",
    "details": "Sylhet Polytechnic Institute or SPI is a state supported technical academic institute located in Sylhet, Bangladesh. It was established in 1955 by the then East Pakistan government. It was named as Sylhet Polytechnic Institute in 1959",
    "date": "12 jun 2003"
}
```
- **Success Response**: `200 OK`, `201 Created`, or `204 No Content`

### PATCH Notice
- **URL**: `/notic/one/{notice_name}`
- **Method**: `PATCH`

---

## Event Endpoints

### DELETE Event
- **URL**: `/event/delete/{event_id}`
- **Method**: `DELETE`
- **Description**: Deletes an event by ID.
- **Success Response**: `200 OK`, `202 Accepted`, or `204 No Content`

### POST Event
- **URL**: `/event/create`
- **Method**: `POST`
- **Description**: Creates a new event.
- **Request Body**:
```json
{
    "event_name": "new event",
    "description": "Sylhet Polytechnic Institute or SPI is a state supported technical academic institute located in Sylhet, Bangladesh. It was established in 1955 by the then East Pakistan government. It was named as Sylhet Polytechnic Institute in 1959",
    "date": "12 june 2032",
    "thumbnail": "image.jpg",
    "detail": "Sylhet Polytechnic Institute or SPI is a state supported technical academic institute located in Sylhet, Bangladesh. It was established in 1955 by the then East Pakistan government. It was named as Sylhet Polytechnic Institute in 1959. Sylhet Polytechnic Institute or SPI is a state supported technical academic institute located in Sylhet, Bangladesh. It was established in 1955 by the then East Pakistan government. It was named as Sylhet Polytechnic Institute in 1959"
}
```
- Success Response: 200 OK or 201 Created

### GET Event
- **URL**: `/event/get
- **Method**: `GET` 
- **Success Response**: `200 OK`, `202 Accepted`, or `204 No Content`

### PUT Event
- **URL**: `/event/update/{event_id}`
- **Method**: `PUT`
- **Description**: Update event.
- **Request Body**:
```json
{
    "event_name": "new event",
    "description": "Sylhet Polytechnic Institute or SPI is a state supported technical academic institute located in Sylhet, Bangladesh. It was established in 1955 by the then East Pakistan government. It was named as Sylhet Polytechnic Institute in 1959",
    "date": "12 june 2032",
    "thumbnail": "image.jpg",
    "detail": "Sylhet Polytechnic Institute or SPI is a state supported technical academic institute located in Sylhet, Bangladesh. It was established in 1955 by the then East Pakistan government. It was named as Sylhet Polytechnic Institute in 1959. Sylhet Polytechnic Institute or SPI is a state supported technical academic institute located in Sylhet, Bangladesh. It was established in 1955 by the then East Pakistan government. It was named as Sylhet Polytechnic Institute in 1959"
}
```
- Success Response: 200 OK or 201 Created
- 
### PATCH Event
- **URL**: `/event/one/{event_name}`
- **Method**: `PATCH`


 @SOUMIK SARKAR
