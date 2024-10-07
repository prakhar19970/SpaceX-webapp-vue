# spacex-webapp-vue 

This web App is a small project built with Vue 3, TS, Vuex and UI Framework Quasar.

This Web App shows you the Mission done by SpaceX with a temporary Payload.

There will be two Tabs, 
Home - to view all SpaceX launches, 
Launch Form - to add new launch data to the original data

Features in App: 
  -  pagination with an infinite scroll
  -  searching and sorting
  -  form input

Below are the instructions to run the code locally. 

## Install the dependencies
```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```


### Lint the files
```bash
yarn lint
# or
npm run lint
```



### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).

### Thought Process
```
I had planned firstly the components for the Home Page, and the Routes for the pages, as I progressed in the project, 
I took the UI reference from the main SpaceX website. I have picked up simple UI development references from there.
Like blur on the Toolbar on scroll after a specific scroll position, 
I felt if the payload had Image URLs, then Cards would have a cooler look (currently it is just data)

For Search, I had previously only thought to make it like how Google search works, 
we get a few prompts and then we can search for the string we entered or choose the result prompt in the list. 
(search will work by clicking on the search button or if you press enter or if you select the prompt from the list).

AI-generated help that I had taken was the understanding of declarations to be done with TypeScript, 
As I have previously never dealt with much of TypeScript in Vue. 

There were a few project setup challenges when using typescript with Quasar, and VueX too. 

I soon got the idea of interfaces and models. ( This was surely something to Learn ).

Rest it was fun to make this project. 

Thank you
```
