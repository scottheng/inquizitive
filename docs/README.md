# inQuizitive

[Heroku link][heroku]

[Trello][trello]

[heroku]: https://inquizitive-app.herokuapp.com
[trello]: https://trello.com/b/voY8wjB6/inquizitive

## Minimum Viable Product

inQuizitive is a full-stack web application based on Quizlet built using Ruby on Rails and React/Redux. By March 24, this app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data, and sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] Production README
- [ ] New account creation, login, and guest/demo login
- [ ] Create study sets 
- [ ] Search for study sets 
- [ ] Folders
- [ ] Display study set as flashcards 

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: /docs/wireframes
[components]: /docs/component-hierarchy.md
[sample-state]: /docs/sample-state.md
[api-endpoints]: /docs/api-endpoints.md
[schema]: /docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication; can make the necessary ajax requests to the backend

### Phase 2: Cards Model, API, and components (2 days)

**Objective:** Ability to create, update, read, and delete cards through the API

### Phase 3: Study Sets (2 days) 

**Objective:** Cards belong to study sets that can be created, updated, read, and deleted through the API. Study sets can be searched by the user.

### Phase 4: Display Study Sets as Flashcards (2 days) 

**Objective:** Allow users to click on flashcards to toggle between term and definition 

### Phase 5: Folders (1 day)

**Objective:** Allow users to organize study sets into folders

### Bonus Features (TBD)

- [ ] BONUS: Organize study sets into classes
- [ ] BONUS: Add own profile picture 
- [ ] BONUS: Create image study set 
- [ ] BONUS: Match Learn game