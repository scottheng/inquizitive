## Component Hierarchy

### Containers

**AppContainer**
  - NavigationContainer 
    + Navigation 
      + RightNav
      - SearchContainer 
        + Search
  - SidebarContainer
    + Sidebar
      + FolderListContainer 
        - FolderList
          + FolderListItem

**HomeContainer**
 - Home
   + HomePreviewItem

**SearchFormContainer**
 - SearchForm

**SearchContainer**
 - Search 
   + SearchResultItems

**LatestActivityContainer**
 - LatestActivity
   + WelcomeContainer 
     + Welcome
       + WelcomeItem
   + StudySetListContainer 
     + StudySetList 
       + StudySetListItem
       + StudySetFilterContainer 
         + StudySetFilter 

**StudySetIndexContainer**
 - StudySetIndex 
   + StudySetItem
   + StudySetNavBarContainer
     + StudySetNavBar 

**StudySetContainer**
 - StudySet
   + CardListContainer 
     + CardList 
       + CardListItem

**StudySetFormContainer**
 - StudySetForm 
   + StudySetTermList 
     + StudySetTermListItem

**FlashcardsContainer** 
 - Flashcards 
   + Flashcard 
   + FlashcardsSidebarContainer 
     + FlashcardsSidebar

**FolderContainer**
 - StudySetListContainer 
   + StudySetList 
     + StudySetListItem

**SettingsContainer**
 - Settings
   + ProfilePicListContainer 
     + ProfilePicList 
       + ProfilePicListItem

### Modals

**SessionFormContainer**
 - SessionForm

**FolderFormContainer**
 - FolderForm

**AddSetContainer**
 - AddSet

 ## Routes

|Path   | Component   |
|-------|-------------|
| "/home" | "HomeContainer" |
| "/search/:searchQuery | "SearchContainer" |
| "/latest" | "LatestActivityContainer" |
| "/study-sets" | "StudySetIndexContainer" |
| "/study-sets/:study_setId/study-set" | "StudySetContainer" |
| "/study-sets/:study_setId/create" | "StudySetFormContainer" |
| "/study-sets/:study_setId/edit" | "StudySetFormContainer" |
| "/study-sets/:study_setId/flashcards" | "FlashcardsContainer" |
| "/folders/:folderId" | "FolderContainer" |
| "/settings/" | "SettingsContainer" |


 