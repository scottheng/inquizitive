# API Endpoints 

## HTML API 

### Root

- `GET /` - loads React web app

## JSON API

### Users 

- `POST api/users`
  - returns a new user
- `GET api/users/:id` 
  - returns information for specific user for settings
- `PATCH api/users/:id`
  - returns an updated user
- `DELETE api/users/:id` 
  - returns a deleted user

### Session

- `POST api/session`
  - returns a new session
- `DELETE api/users`
  - returns an old/deleted session

### Study Sets 

- `GET api/study_sets`
  - returns index of all study sets 
  - accepts "requested_info" query param to retrieve search results
  - accepts "user_id" query param to retrieve all study sets for specific user
  - accepts "folder_id" query param to retrieve all study sets for specific folder
  - accepts "class_id" query param to retrieve all study sets for specific class
- `POST api/study_sets`
  - returns a new study set
- `GET api/study_sets/:id`
  - returns information about a study set
- `PATCH api/study_sets/:id`
  - returns an updated study set
- `DELETE api/study_sets/:id`
  - returns a deleted study set

### Cards 

- `GET api/cards`
  - returns index of all cards
  - accepts "study_set_id" query param to retrieve all cards for a specific study set
- `POST api/cards` 
  - returns a new card 
- `GET api/cards/:id`
  - returns information about a card
- `PATCH api/cards/:id`
  - returns an updated card 
- `DELETE api/cards/:id`
  - returns a deleted card

### Flashcard Sets 

- `POST api/flashcard_sets`
  - returns a new flashcard set
- `GET api/flashcard_sets/:id`
  - returns information about a flashcard set
- `PATCH api/flashcard_sets/:id` 
  - returns an updated flashcard set
- `DELETE api/flashcard_sets/:id` 
  - returns a deleted flashcard set

<!--### Classes 

- `GET api/classes`
  - returns index of all classes 
  - accepts "request_class" query param to retrieve class search results
  - accepts "user_id" query param to retrieve all classes for a user 
  - accepts "study_set_id" query param to retrieve all classes for a study set
- `POST api/classes`
  - returns a new class
- `GET api/classes/:id`
  - returns information about a class
- `PATCH api/classes/:id`
  - returns an updated class
- `DELETE api/classes/:id` 
  - returns a deleted class-->

### Folders 

- `GET api/folders`
  - returns index of all folders 
  - accepts "user_id" query param to retrieve all folders for a user 
- `POST api/folders`
  - returns a new folder
- `GET api/folders/:id`
  - returns information about a folder
- `PATCH api/folders/:id`
  - returns an updated folder
- `DELETE api/folders/:id`
  - returns a deleted folder
