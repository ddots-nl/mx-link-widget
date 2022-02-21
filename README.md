# Widget: Open link in new tab
Have full control over the behavior of a hyperlink in your Mendix application. You can open the link in a new browser tab, or in the parent frame if Mendix is included as an iframe.

## How to use the "open link in new tab" widget?

1. First, we have to configure the domain model and make an entity where your url will stored. **Note the url needs to be stored as an attribute String.**
   
   **Example of an configuration of the entity in the domain model**
   
   ![entity](https://user-images.githubusercontent.com/99649048/154936199-a162aa39-9fa9-4c87-8bcd-924dd5282e95.PNG)

2. Second, add a dataview to your page and set the Data source type to **Microflow or Nanoflow**.
3. Third, set up the microflow or nanaflow to return an object to your dataview.
   **Example of an Microflow**
   
   ![microflow](https://user-images.githubusercontent.com/99649048/154941341-27c01697-4e33-409f-98de-f2833ad2bc26.PNG)
    
    - The microflow first retrieves the entity we would like to access;
    - The decision checks if there is data in the entity;
    - If the entity is empty, it creates an object with the default value of https://www.ddots.nl;
    - If the entity is not empty, it returns the current value that exists in the database.
    
 4. When you configure the dataview with the microflow above, you can access the url attribute that exists in your entity in the "open link in new tab" widget. From there you
    set up the necessary data that is needed for the widget. (Hyperlink and Link Button text). 
    
    ![linkwidget configuration](https://user-images.githubusercontent.com/99649048/154944083-b5c18100-29ce-411b-9d06-69deac4cff00.PNG)

 5. If you want to change the current url link, you can use an NewEdit page for the entity, and use the default save button that Mendix uses as default.
    
    ![newedit page](https://user-images.githubusercontent.com/99649048/154943662-4b77edde-d673-42b1-a08c-e5e6486394ea.PNG)

## Sandbox environment

https://apptest732-sandbox.mxapps.io/index.html?profile=Responsive

## Development and contribution

1. Install NPM package dependencies by using: `npm install`. If you use NPM v7.x.x, which can be checked by executing `npm -v`, execute: `npm install --legacy-peer-deps`.
1. Run `npm start` to watch for code changes. On every change:
    - the widget will be bundled;
    - the bundle will be included in a `dist` folder in the root directory of the project;
    - the bundle will be included in the `deployment` and `widgets` folder of the Mendix test project.

[specify contribution]
