AuthFormContainer
  -AuthForm

IndexContainer
  -Index
  -Filter Buttons
  -Metrics

UniversityContainer
  -UniversityDetail

SearchContainer
  -Search

ProfileContainer
  -UserProfile

  ## Routes

  |Path   | Component   |
  |-------|-------------|
  | "/sign-up" | "AuthFormContainer" |
  | "/sign-in" | "AuthFormContainer" |
  | "/api/universities" | "IndexContainer" |
  | "/api/universities/:uniId" | "UniversityContainer" |
  | "/api/universities/search-results" | "SearchContainer" |
  | "/api/users/:userId" | "ProfileContainer" |
