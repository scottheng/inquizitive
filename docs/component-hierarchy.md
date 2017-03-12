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
      + ClassListContainer
        - ClassList 
          + ClassListItem

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

**ClassCreateSearchContainer**
 - ClassCreateSearch 
   + ClassSearchResults 
     + ClassSearchResultsItem

**ClassContainer**
 - Class 
   + StudySetList 
     + StudySetItem
   + ClassNavBarContainer 
     + ClassNavBar

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

**ClassFormContainer**
 - ClassForm 

**AddMembersContainer**
 - AddMembers


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
| "/class/:classId | "ClassContainer" |
| "/add-class" | "ClassCreateSearchContainer" |
| "/folders/:folderId" | "FolderContainer" |
| "/settings/" | "SettingsContainer" |


 