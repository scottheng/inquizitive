# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
demo_user = User.create({username: "demoUser", email: "demo@example.com", password: "demopassword"})

StudySet.destroy_all
study_set1 = StudySet.create({title: "Alphabet" , user_id: demo_user.id})
study_set2 = StudySet.create({title: "Basketball" , user_id: demo_user.id})
study_set3 = StudySet.create({title: "Programming" , user_id: demo_user.id})
study_set4 = StudySet.create({title: "Sports", user_id: demo_user.id})
study_set5 = StudySet.create({title: "Games", user_id: demo_user.id})
study_set6 = StudySet.create({title: "React/Redux", user_id: demo_user.id})
study_set7 = StudySet.create({title: "Rails", user_id: demo_user.id})

Folder.destroy_all
folder1 = Folder.create({name: "Programming Flashcards", description: "Flashcards relating to programming", user_id: demo_user.id})
folder2 = Folder.create({name: "Sports Flashcards", description: "Flashcards relating to sports", user_id: demo_user.id})

StudySetFolder.destroy_all
study_set_folder1 = StudySetFolder.create({folder_id: folder1.id, study_set_id: study_set3.id})
study_set_folder2 = StudySetFolder.create({folder_id: folder1.id, study_set_id: study_set6.id})
study_set_folder3 = StudySetFolder.create({folder_id: folder1.id, study_set_id: study_set7.id})
study_set_folder4 = StudySetFolder.create({folder_id: folder2.id, study_set_id: study_set2.id})
study_set_folder5 = StudySetFolder.create({folder_id: folder2.id, study_set_id: study_set4.id})


Card.destroy_all
Card.create({term: "A", definition: "apple", study_set_id: study_set1.id})
Card.create({term: "B", definition: "basketball", study_set_id: study_set1.id})
Card.create({term: "C", definition: "cat", study_set_id: study_set1.id})
Card.create({term: "D", definition: "dog", study_set_id: study_set1.id})
Card.create({term: "E", definition: "elephant", study_set_id: study_set1.id})
Card.create({term: "F", definition: "fan", study_set_id: study_set1.id})
Card.create({term: "G", definition: "goat", study_set_id: study_set1.id})
Card.create({term: "H", definition: "hat", study_set_id: study_set1.id})
Card.create({term: "I", definition: "insect", study_set_id: study_set1.id})
Card.create({term: "J", definition: "jack", study_set_id: study_set1.id})
Card.create({term: "K", definition: "kangaroo", study_set_id: study_set1.id})
Card.create({term: "L", definition: "lion", study_set_id: study_set1.id})
Card.create({term: "M", definition: "monkey", study_set_id: study_set1.id})
Card.create({term: "N", definition: "newspaper", study_set_id: study_set1.id})
Card.create({term: "O", definition: "orange", study_set_id: study_set1.id})
Card.create({term: "P", definition: "pen", study_set_id: study_set1.id})
Card.create({term: "Q", definition: "quilt", study_set_id: study_set1.id})
Card.create({term: "R", definition: "raccoon", study_set_id: study_set1.id})
Card.create({term: "S", definition: "shark", study_set_id: study_set1.id})
Card.create({term: "T", definition: "tree", study_set_id: study_set1.id})
Card.create({term: "U", definition: "underwear", study_set_id: study_set1.id})
Card.create({term: "V", definition: "vacuumn", study_set_id: study_set1.id})
Card.create({term: "W", definition: "washing machine", study_set_id: study_set1.id})
Card.create({term: "X", definition: "xylophone", study_set_id: study_set1.id})
Card.create({term: "Y", definition: "yak", study_set_id: study_set1.id})
Card.create({term: "Z", definition: "zipper", study_set_id: study_set1.id})

Card.create({term: "Steph Curry", definition: "Three point king" , study_set_id: study_set2.id})
Card.create({term: "Lebron James", definition: "King", study_set_id: study_set2.id})
Card.create({term: "Shaq", definition: "Broken backboard", study_set_id: study_set2.id})
Card.create({term: "Draymond Green", definition: "Beast", study_set_id: study_set2.id})
Card.create({term: "Michael Jordan", definition: "GOAT", study_set_id: study_set2.id})
Card.create({term: "Vince Carter", definition: "Vinsanity", study_set_id: study_set2.id})
Card.create({term: "Derrick Rose", definition: "Always injured", study_set_id: study_set2.id})
Card.create({term: "Blake Griffin", definition: "Clipper frontcourt", study_set_id: study_set2.id})
Card.create({term: "Warriors", definition: "NBA Champs", study_set_id: study_set2.id})
Card.create({term: "Kobe Bryant", definition: "Lakers MVP", study_set_id: study_set2.id})

Card.create({term: "Programming", definition: "The art of creating a program", study_set_id: study_set3.id})
Card.create({term: "Loop", definition: "To do an action over and over", study_set_id: study_set3.id})
Card.create({term: "Decompose", definition: "To break down to smaller pieces", study_set_id: study_set3.id})
Card.create({term: "Debugging", definition: "Finding and fixing errors in programs", study_set_id: study_set3.id})
Card.create({term: "Code", definition: "1 or more commands/algorithm", study_set_id: study_set3.id})
Card.create({term: "Bug", definition: "An error in a program", study_set_id: study_set3.id})
Card.create({term: "Algorithm", definition: "A list of steps to finish a task", study_set_id: study_set3.id})
Card.create({term: "Abstraction", definition: "Pulling out specific differences to make one solution work for multiple problems", study_set_id: study_set3.id})
Card.create({term: "Function", definition: "A piece of code that you can easily call over and over again.", study_set_id: study_set3.id})

Card.create({term: "Tennis", definition: "Raquet, Ball, Tennis shoes, Shorts, T-shirt",study_set_id: study_set4.id})
Card.create({term: "Swimming", definition: "Swimsuit, Googles, Swimming pool",study_set_id: study_set4.id})
Card.create({term: "Gymnastics", definition: "Tracksuit, Headband, Overall",study_set_id: study_set4.id})
Card.create({term: "Baseball", definition: "Bat, Ball, Helmet, Uniform, Team, Kneepads",study_set_id: study_set4.id})
Card.create({term: "Karate", definition: "Mat, Belt, Uniform",study_set_id: study_set4.id})
Card.create({term: "Roller skating", definition: "Roller skates, Helmet",study_set_id: study_set4.id})
Card.create({term: "Soccer", definition: "Ball, Tennis shoes, Gloves, T-shirt, Shorts, Socks",study_set_id: study_set4.id})
Card.create({term: "Basketball", definition: "Ball, jersey",study_set_id: study_set4.id})

Card.create({term: "Flappy bird", definition: "RAGE", study_set_id: study_set5.id})
Card.create({term: "Madden 14", definition: "touchdown!", study_set_id: study_set5.id})
Card.create({term: "NBA 2K13", definition: "ballin''", study_set_id: study_set5.id})
Card.create({term: "Call of Duty Ghosts", definition: "360 NO SCOPE!", study_set_id: study_set5.id})
Card.create({term: "Minecraft", definition: "blocks only!", study_set_id: study_set5.id})
Card.create({term: "Monopoly", definition: "all about the money", study_set_id: study_set5.id})
Card.create({term: "Crossy Road", definition: "YES, new high score!", study_set_id: study_set5.id})

Card.create({term: "component", definition: "in react, the view part of mvc is represented in a ___", study_set_id: study_set6.id})
Card.create({term: "props", definition: "The component has an immutable property bag called ____", study_set_id: study_set6.id})
Card.create({term: "state", definition: "What is the property name of the component's user driven state of the UI?", study_set_id: study_set6.id})
Card.create({term: "render", definition: "Each component provides an implementation of the ___ method which creates the intermediate dom.", study_set_id: study_set6.id})
Card.create({term: "intermediate", definition: "The ____ DOM is converted into the real HTML DOM.", study_set_id: study_set6.id})
Card.create({term: "JSX", definition: "___ is an XML based extension to javascript which builds the component tree as a set of xml nodes", study_set_id: study_set6.id})
Card.create({term: "one", definition: "in react, data flow is ___ way", study_set_id: study_set6.id})
Card.create({term: "Flux", definition: "	
In the ____ pattern, the Store is the central authority for all data; any mutations to the data must occur within the store", study_set_id: study_set6.id})

Card.create({term: "app", definition: "where Models, Views and Controllers are. It's where most of Rails code goes", study_set_id: study_set7.id})
Card.create({term: "config", definition: "where the routes are, which handle requests from the browser", study_set_id: study_set7.id})
Card.create({term: "db", definition: "database and migration files", study_set_id: study_set7.id})
Card.create({term: "Gemfile", definition: "where gem files are. Gems add special features to a Rails app", study_set_id: study_set7.id})
Card.create({term: "ERB", definition: "Embedded Ruby-a way to insert Ruby code/objects in an HTML page", study_set_id: study_set7.id})
Card.create({term: "associations", definition: "has_many, belongs_to", study_set_id: study_set7.id})