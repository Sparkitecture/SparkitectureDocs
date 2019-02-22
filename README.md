<!--# ![Sparkitecture](./Assets/Images/navbar-logo.png "Sparkitecture")  omit in toc -->

# <!-- omit in toc -->

Sparkitecture is a series of solutions aimed at cutting down development time at project launch by providing a ready-to-use fullstack template

| Build | Status |
| :---- | -----: |
| Sparkitecture-CI | ![TFS Build Status](https://tfs.sparkhound.com/Sparkhound/_apis/public/build/definitions/81ae018a-0136-4767-9622-61e13d1d7541/150/badge) |
| Mobile - CI | ![TFS Build Status](https://tfs.sparkhound.com/Sparkhound/_apis/public/build/definitions/81ae018a-0136-4767-9622-61e13d1d7541/151/badge) |

## Table of Contents <!-- omit in toc -->

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
    - [Installing Prerequisites](#installing-prerequisites)
      - [Installing Node.js and npm](#installing-nodejs-and-npm)
      - [Installing the Angular CLI](#installing-the-angular-cli)
  - [Setting Up Sparkitecture](#setting-up-sparkitecture)
    - [Getting the files and connecting to source control](#getting-source-code-and-connecting-to-TFS)
    - [Setting up the Server solution (Web Project)](#setting-up-the-server-solution-web-project)
    - [Setting up a local database](#setting-up-a-local-database)
    - [Running the web app](#running-the-web-app)
      - [Running with the Angular CLI](#running-with-the-angular-cli)
- [Common Operations](#common-operations)
  - [Create a New Component](#create-a-new-component)
  - [Adding a Search Row](#adding-a-search-row)
- [Mobile](./Docs/mobile.md#mobile)
  - [App Store](./Docs/mobile.md#app-store)
    - [Create a New App](./Docs/mobile.md#create-a-new-app)
    - [Set Rating (App Store)](./Docs/mobile.md#set-rating-(app-store))
    - [Set Category (App Store)](./Docs/mobile.md#set-category-(app-store))
  - [Play Store](./Docs/mobile.md#play-store)
    - [Set Rating (Play Store)](./Docs/mobile.md#set-rating-(play-store))
    - [Set Category (Play Store)](./Docs/mobile.md#set-category-(play-store))
    - [Additional Questions](./Docs/mobile.md#additional-questions)
- [Built With](#built-with)
- [Contributors](#contributors)
- [Angular CLI Cheat Sheet](#angular-cli-cheat-sheet)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

- [Node.js & npm](https://nodejs.org/en/)
- [Angular CLI](google.com)

#### Installing Prerequisites

The following series of examples will guide you in getting Sparkitecture working in your development enviorment for the first time.

##### Installing Node.js and npm

- Navigate to the [Node](https://nodejs.org/en/) site
- Download and install the latest stable version (this installs npm as well)

You can run the following commands to check the that the installation was successful and view the current version.

``` npm
node -v
npm -v
```

##### Installing the Angular CLI

To install the Angular CLI run the following command in your terminal window.

``` npm
npm install -g @angular/cli
```

You can run the following command to check the that the installation was successful and view the current version.

``` npm
ng v
```

### Setting Up Sparkitecture

#### Getting source code and connecting to TFS

- Open Visual Studio and navigate to "Team Explorer"
- Click the green plug at the top of the window
- Click "Manage Connections" just below the plug
- Select "Connect To a Project..."
- Click "Add TFS Server" and enter "tfs.sparkhound.com"
- Click "Add"
- Open the "Sparkhound" repository
- Click "Sparkitecture"
- Click "Connect"
- Click "Sync" in the "Team Explorer" window
- Click "Fetch"
- Click "Pull"

#### Setting up the Server solution (Web Project)

- Open the "Server" solution in Visual Studio
- Open a command terminal
- Change the directory to the "ClientApp" folder where the "node_modules" folder resides

Run the following commands:

``` npm
npm i
```

This installs all of the project dependencies via npm

``` npm
ng b
```

This builds the Angular project and will notify you if any errors occurred in the build

#### Setting up a local database

- Open SSMS (SQL Server Management Studio)
- Connect to your local instance
- Right click the "Database" folder
- Click "New Database..."
- Enter "Sparkitecture" as the "Database name"
- Click OK
- In Visual Studio locate the "Database" project
- Open the "PublishProfiles" folder
- Double click the file "local.publish.xml"
- Edit the target data source to match your local instance if necessary
- If data source was modified save your publish profile
- Click "Publish"

Your local Sparkitecture database schema should now match that of source control

#### Running the web app

- In Visual Studio, ensure the "Web" project is set as the startup project
- Press F5 to run

##### Running with the Angular CLI

- Open a terminal and ensure directory is set to the "ClientApp" folder
- Run the following command

``` npm
ng serve
```

- In Visual Studio press F5

This builds and serves your app, rebuilding on file changes

## Common Operations

### Create a New Component

- Open a command prompt
- Change directory to the component folder
- Replace `[componentName]` and type the following command in your command prompt:

  ```angularcli
  ng generate c [componentName]
  ```

- A new folder with you component name will be created under the component folder
- This new folder contains 4 files:
  - componentName.component.ts
    - This is a Typescript file which will contain client-side logic
  - componentName.component.spec.ts
    - This is a Karma test file
      - This file can be removed if tests **will not** be written for this component
  - componentName.component.scss
    - This is a Sassy CSS file where you can add Sass or CSS exclusive to this component
  - componentName.component.html
    - This a HTML file where the UI is created
- This command also imports and declares your new component in app.module.ts

### Adding a Search Row

- Create Table in SSMS
- Create Table in Database\dbo\Tables
- Create View in Database\dbo\Views
- Publish Profile from Database\PublishProfiles
- Create SearchRow Class in Core\Models\SearchRows
- Above each searchable string property add:

``` c#
[SearchCriteriaParameterConfiguration(ComparisonOperator = ComparisonOperator.Contains)]
```

- Create Base Class in Core\Models
- Add a Dictionary Mapping Reference to DataAccess\Search\SearchTypeToEntityFrameworkTypeProvider.cs
- Add DBSet For SearchRow Class in DataAccess\Contexts\SparkitectureDBContext.cs
- Create new Component folder for search page in Web\ClientApp\src\app\components
  - The new folder will need the associated .ts .html and .scss files which can be found in Web\ClientApp\src\app\components\examples\search-grid-format-example folder
  - You can copy these files and paste them into the folder you created
    - Change the search-grid-format-example portion of the name to the name of the new folder
- In the new .ts file remove any unnecessary code and update the Component Decorator with the correct name and update the Class name
- In the new .html file remove any unnecessary code and update the title and list
- Import and add an Export to Web\ClientApp\src\app\components\index.ts
- Import and add a Declaration to Web\ClientApp\src\app\app.module.ts
- Import and add routing functionality to Web\ClientApp\src\app\app-routing.module.ts

## Built With

- [Angular](https://angular.io/) - The web framework used
- [TypeScript](https://www.typescriptlang.org/) - Front-end language used
- [C#](https://docs.microsoft.com/en-us/dotnet/csharp/) - Back-end language used
- [Node.js](https://nodejs.org/en/) - JavaScript runtime
- [Bootstrap](https://getbootstrap.com/) - Responsive layouts and styling
- [Ngx-Formly](https://github.com/ngx-formly/ngx-formly#readme) - Dynamic JSON powered form library for Angular

## Contributors

- **Steve Schaneville** - *Initial work* - [Sparkhound](http://www.sparkhound.com/)
- **Seth Valdetero** - *(placeholder)* - [Sparkhound](http://www.sparkhound.com/)
- **Vance Fontenot** - *(placeholder)* - [Sparkhound](http://www.sparkhound.com/)
- **John Harvey** - *(placeholder)* - [Sparkhound](http://www.sparkhound.com/)
- **Claudia Meredith** - *(placeholder)* - [Sparkhound](http://www.sparkhound.com/)
- **David Silver** - *(placeholder)* - [Sparkhound](http://www.sparkhound.com/)
- **Sam North** - *(placeholder)* - [Sparkhound](http://www.sparkhound.com/)

## Angular CLI Cheat Sheet

| Command | Alias | Description |
| :-----: | :---: | :---------- |
| [add](https://angular.io/cli/add) | | Adds support for an external library to your project. |
| [build](https://angular.io/cli/build) | b | Compiles an Angular app into an output directory named dist/ at the given output path. Must be executed from within a workspace directory.|
| [config](https://angular.io/cli/config) | | Retrieves or sets Angular configuration values in the angular.json file for the workspace. |
| [doc](https://angular.io/cli/doc) | d | Opens the official Angular documentation [angular.io](angular.io) in a browser, and searches for a given keyword. |
| [e2e](https://angular.io/cli/e2e) | e | Builds and serves an Angular app, then runs end-to-end tests using Protractor. |
| [generate](https://angular.io/cli/generate) | g | Generates and/or modifies files based on a schematic. |
| [help](https://angular.io/cli/help) |  | Lists available commands and their short descriptions. |
| [lint](https://angular.io/cli/lint) | l | Runs linting tools on Angular app code in a given project folder. |
| [new](https://angular.io/cli/new) | n | Creates a new workspace and an Angular app |
| [serve](https://angular.io/cli/serve) | s | Builds and serves your app, rebuilding on file changes. |
| [run](https://angular.io/cli/run) |  | Runs an Architect target with an optional custom builder configuration defined in your project. |
| [test](https://angular.io/cli/test) | t | Runs unit tests in a project. |
| [update](https://angular.io/cli/update) |  | Updates your application and its dependencies. See the [update](https://update.angular.io/) guide. |
| [version](https://angular.io/cli/version) | v | Outputs Angular CLI version. |
| [xi18n](https://angular.io/cli/xi18n) |  | Extracts i18n messages from source code. |
