## LinkWidget
Widget that let you configure how you want to target the url

##Usage
![mendix-configure](https://user-images.githubusercontent.com/99649048/154851343-27566104-c258-44a9-8915-765599697831.PNG)

First you will have to setup a entity in the domain model that stores the Url in a String Attribute.

After that you can access the attribute where your string URL will be stored. Also, when you have configured the Url in a string attribute, you can configure the text that needs to be display for the link button in your application, you can configure a icon from the mendix icon library, configure a tooltip if it is needed, and you can specify how you want to target the url. You have the following options for targetting the url:

![target values](https://user-images.githubusercontent.com/99649048/154851575-a92662f1-90e3-4bfb-b1dd-fba7ee34dc3d.PNG)

## Microflow configuration to update and access your attribute value in a listview and dataview

##Microflow: DS_LinkHelperMf

![DS_LinkHelperMF](https://user-images.githubusercontent.com/99649048/154851769-de59d945-1a74-4d59-b644-f490222e59cd.PNG)

1. The microflow will first check if the database is empty, this is necessary when we want to change the url with a input field.]
2. If the database is empty it will create a new object and configure the url that is passed in the input field.
3. If the database is not empty it will change the current value of the string attribute to the new value that is entered in the input field.

![inputs](https://user-images.githubusercontent.com/99649048/154852009-8287e0f1-43c3-440e-9819-a607f69b5afd.PNG)

The microflow that will fire the when the save button in de edit_view is clicked. 


## Development and contribution

1. Install NPM package dependencies by using: `npm install`. If you use NPM v7.x.x, which can be checked by executing `npm -v`, execute: `npm install --legacy-peer-deps`.
1. Run `npm start` to watch for code changes. On every change:
    - the widget will be bundled;
    - the bundle will be included in a `dist` folder in the root directory of the project;
    - the bundle will be included in the `deployment` and `widgets` folder of the Mendix test project.

[specify contribution]
