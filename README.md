# ![Sparkitecture](/navbar-logo.png "Sparkitecture") <!-- omit in toc -->

Sparkitecture is a series of solutions aimed at cutting down development time at project launch by providing a ready-to-use fullstack template

|Build|Status|
|:---|-----:|
|Sparkitecture-CI|![TFS Build Status](https://tfs.sparkhound.com/Sparkhound/_apis/public/build/definitions/81ae018a-0136-4767-9622-61e13d1d7541/150/badge)|
|Sparkitecture-Publish-Server|*(unavailible)*|
|Mobile - CI|*(unavailible)*|
|Mobile - Release - DEV|*(unavailible)*|
|Mobile - Release - QA|*(unavailible)*|

## Table of Contents <!-- omit in toc -->

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installing Prerequisites](#installing-prerequisites)
    - [Installing Node.js and npm](#installing-nodejs-and-npm)
    - [Installing the Angular CLI](#installing-the-angular-cli)
  - [Setting Up Sparkitecture](#setting-up-sparkitecture)
    - [Getting the files and connecting to source control](#getting-the-files-and-connecting-to-source-control)
    - [Setting up the Server solution (Web Project)](#setting-up-the-server-solution-web-project)
    - [Setting up a local database](#setting-up-a-local-database)
    - [Running the web app](#running-the-web-app)
      - [Running with the Angular CLI](#running-with-the-angular-cli)
- [Common Operations](#common-operations)
- [Deployment](#deployment)
- [Built With](#built-with)
- [Versioning](#versioning)
- [Contributors](#contributors)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

- [Node.js & npm](https://nodejs.org/en/)
- [Angular CLI](google.com)

### Installing Prerequisites

The following series of examples will guide you in getting Sparkitecture working in your development enviorment for the first time.

#### Installing Node.js and npm

- Navigate to the [Node](https://nodejs.org/en/) site
- Download and install the latest stable version (this installs npm as well)

You can run the following commands to check the that the installation was successful and view the current version.

``` npm
node -v
npm -v
```

#### Installing the Angular CLI

To install the Angular CLI run the following command in your terminal window.

``` npm
npm install -g @angular/cli
```

You can run the following command to check the that the installation was successful and view the current version.

``` npm
ng v
```

### Setting Up Sparkitecture

#### Getting the files and connecting to source control

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

``` comment
placeholder
```

## Deployment

``` comment
placeholder
```

## Built With

- [Angular](https://angular.io/) - The web framework used
- [TypeScript](https://www.typescriptlang.org/) - Front-end language used
- [C#](https://docs.microsoft.com/en-us/dotnet/csharp/) - Back-end language used
- [Node.js](https://nodejs.org/en/) - JavaScript runtime
- [Bootstrap](https://getbootstrap.com/) - Responsive layouts and styling
- [Ngx-Formly](https://github.com/ngx-formly/ngx-formly#readme) - Dynamic JSON powered form library for Angular

## Versioning

``` comment
placeholder
```

## Contributors

- **Steve Schaneville** - *Initial work* - [Sparkhound](http://www.sparkhound.com/)
- **Seth Valdetero** - *(placeholder)* - [Sparkhound](http://www.sparkhound.com/)
- **Vance Fontenot** - *(placeholder)* - [Sparkhound](http://www.sparkhound.com/)
- **John Harvey** - *(placeholder)* - [Sparkhound](http://www.sparkhound.com/)
- **Claudia Meredith** - *(placeholder)* - [Sparkhound](http://www.sparkhound.com/)
- **David Silver** - *(placeholder)* - [Sparkhound](http://www.sparkhound.com/)
- **Sam North** - *(placeholder)* - [Sparkhound](http://www.sparkhound.com/)

## License

**Example**: This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- Hat tip to anyone whose code was used
- Coffee
- Mom
- Inspirational kitten posters
- The Croatian Armed Forces
