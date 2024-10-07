# spacex-webapp-vue 

This web App is small project built with Vue 3, TS , Vuex and UI Framework Quasar

This Web App shows you Mission done by SpaceX with a temporary Payload.
There will be two Tabs, 
Home - to view all SpaceX launches , 
Launch Form - to add new launch data to original data

Features in App: 
 1] pagination with an infinite scroll
 2] searching and sorting 
 3] Form Input

Below are the instructions to run the code Loacally. 

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
I had planned firstly the components for the Home Page,and the Routes for the pages, as I progressed in project, I felt like taking the UI reference from the the main SpaceX website. I have picked up upon simple UI developments references from there.
Like blur on Toolbar on scroll after a specific scroll position, 
I felt if the payload had Image URLs, then Cards would have a more cooler look (currenlty its just data)

For Search I had previous only thought to make it like how google search works, 
we get a few prompts and then we can either search for the string we have entered or choose the result propmt in the list. 
(search will work with click on the search button or if you press enter or if you select the prompt from the list).

AI generated help that I had taken was, the understanding of declarations to be done with TypeScript, As I have previously never delt with much of TypeScript in Vue. 

There were a few project setup challenges, when using typescript with Quasar, and VueX too. 

I soon got the idea of interfaces and models. ( This was surely something to Learn ).

Rest it was fun to make this project. 

Thankyou
```
Creating separate commits for AI-generated code and your own code or adding comments to the AI-generated code, such as “// AI-Generated Code” or “/* AI-Generated Code */“, to indicate that the code was generated using AI.
In your assignment submission, include a section in the README file that explains your thought process, the changes you made to the AI-generated code, and any additional information that will help in assessing your work. This will provide a clear understanding of your approach and the extent to which you relied on AI-generated code.