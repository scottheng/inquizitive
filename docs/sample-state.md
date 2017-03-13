# Sample State

```js
{
    currentUser: {
        id: 1
        username: "test-user"
        email: "test-user@example.com"
    },
    formErrors: {
        signUp: {errors: []},
        logIn: {errors: []},
        createFolder: {errors: ["title can't be blank"]},
        editFolder: {errors: []},
        createStudySet: {errors: ["title can't be blank"]},
        editStudySet: {errors: []},
        createCard: {errors: ["term can't be blank"]},
        editCard: {errors: []},
        createClass: {errors: ["name can't be blank"]},
        editClass: {errors: []}
    },
    studySets: {
        1: {
            title: "First study set",
            user_id: 1,
            folders: {
                1: {
                    id: 1,
                    name: "Folder 1",
                    description: "Optional description"
                }
            },
            classes: {
                1: {
                    id: 1,
                    name: "Class 1",
                    description: "Optional description"
                }
            }
        }
    },
    cards: {
        1: {
            term: "example term",
            definition: "example definition",
            study_set_id: 1
        }
    },
    flashcards: {
        1: {
            name: "Flashcards Set Name",
            user_id: 1,
            cards: {
                1: {
                    term: "example term",
                    definition: "example definition"
                }
            }
        }
    },
    classes: {
        1: {
            name: "Class 1",
            description: "Optional description",
            members: {
                1: {
                    username: "test-user",
                    email: "test-user@example.com"
                }
            }
        }
    },
    folders: {
        1: {
            name: "Folder 1",
            description: "Optional description",
            user_id: 1
        }
    }

}


```