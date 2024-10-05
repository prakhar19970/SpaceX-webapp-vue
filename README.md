# spacex-webapp-vue (spacex-webapp-vue)

A Quasar Project

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


Here are the coding challenge instructions. Please keep the repository Private and invite the following GitHub handles:
- https://github.com/silashuereca
- https://github.com/moizjv
- https://github.com/philwhln
- https://github.com/azherf
- https://github.com/hashd

Please let me know if you have any questions.
Objective
Develop a feature-rich webapp following the requirements below.

Requirements
Data Fetching

Use the payload.json file provided attached
Then add it into local storage upon visiting the home tab so you can use it as a DB
Handle loading states
Add pagination with an infinite scroll
User Interface general overview

You will need two tabs on the web app (Home, Create Launch)

Home (to view all SpaceX launches but only show 5 and then load more on scroll)
Set each launch detail into a card that shows:
Mission Name
Launch Year
And details about the mission
Each card should be clickable in some fashion (could be the whole card or just a “view” button) that takes them to a launch page that shows more details about the launch
User should be able to reload the page and grab the launch details from the ID in the URL path
User should be able to go back to launch list
Search Functionality
Implement a search bar to filter launches by mission name, launch year, or rocket name
Implement sorting by launch year (ascending/descending)
Create Launch
Just a simple form that a user can create a new launch entity and add it to the payload (don’t worry about editing/deleting an entity).
Mission name
Mission details
Rocket name
Launch Year
Form validation: something else besides just adding a “required” attribute to the form input. We would prefer seeing red text under the input that says “required” if possible instead of the default web browser “required” popup
If you’re using React, feel free to use something like React Hook Form to help you out
If you’re using Vue, then something like Vuelidate (we use Vuelidate for all form validations in our Web App)
Security
Implement basic input sanitization to prevent XSS attacks
Ensure secure handling of local storage data.
What we are looking for

Code structure/how clean the code is
TypeScript (since everything is in TypeScript on our end)
State management
How you break different parts up into components
Accessibility
Responsiveness
UI design (I wouldn’t go overboard but don’t make it look like a BE engineer did it lol)
Feel free to use Tailwindcss (we use Tailwind in our Web app) and copy paste their UI components if you want!
A good and intuitive user experience
Bonus

Write some unit tests using a library of your choice (e.g vitest)
Deliverables

Framework: Feel free to build this webapp in any UI framework you prefer (Vue, React, or Angular)
GitHub Repo: Provide a URL to the repository with the code and a README.md file with setup instructions, usage guide, and project description.
Deployment: Deploy the app on a platform like Vercel or Netlify and provide the URL to the live app.
Transparency on AI Usage
While working on the assignment, you can use AI-generated code to assist you in writing your code. However, it is essential to remember that the AI-generated code should only be used as an aid and not as the primary source of your code. You are expected to demonstrate your understanding and thought process in the assignment. To ensure transparency and proper assessment of your work, clearly distinguish the AI-generated code from your own code. You can do this by:

Creating separate commits for AI-generated code and your own code or adding comments to the AI-generated code, such as “// AI-Generated Code” or “/* AI-Generated Code */“, to indicate that the code was generated using AI.
In your assignment submission, include a section in the README file that explains your thought process, the changes you made to the AI-generated code, and any additional information that will help in assessing your work. This will provide a clear understanding of your approach and the extent to which you relied on AI-generated code.