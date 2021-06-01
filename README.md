I have hosted this project https://gg.paulglazzard.co.uk/, alternatively you can view the code here: https://github.com/GlazzardP/getground. 

To view the code locally, please clone the code base and then use yarn install, yarn start.

I have used React and Redux to build the web app, all components are functional apart from InputField where I have built in a class component. 

For the optional points, I have set up a reducer and store for search criteria meaning the app could be taken further where the users search criteria could be used to refine the search results. Therefore, I have left the inputs for these on the live site. 



optional
search field 
material ui x
loading state 

Requirements
1. Using React, build a webapp that queries this paginated endpoint. Use Redux to save the results and then
print out the results as a list on the page.
2. The app should be paginated with the pagination reflected in the url (so when the page is refreshed, the
same results are shown).
3. Write at least one component as a React class based component (the rest can be functional components).
4. Write at least one unit test.
5. Host your code on Github, put all the code in a Pull Request against the (probably) empty repo.
Optional
1. Add a search field to the app that upon request populates the filters post param as follows:
filters:[{type: "all", values: ["YOUR_SEARCH_FIELD_CONTENTS"]}]
2. Use Material-UI as a component library.
3. Add loading state

