<a name="readme-top"></a>


<!-- PROJECT LOGO -->
<br />
<div align="center">


  <h3 align="center">Tanto Cuore Randomizer</h3>

  <p align="center">
   The big sister of Tanto Cuore Funnel, randomizing cards to make towns for the card game Tanto Cuore
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project


This project allows the user to choose between many different filters and receive a town that adheres to those filters and can be played in a game of Tanto Cuore. 

Here's how:
* The user chooses which sets of the game to use and the application calls the external server to return all cards that match the set(s) chosen
* User input for optional rules and slants gets saved in a large "filterObject"
* Cards are filtered based on the object and an array of "townMaterial" is returned
* Ten cards are picked semi-randomly with Math.random() and returned to the user in the GUI for a finished town!


<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* Angular
* TypeScript
* 
<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Image Gallery
<div align="center">
  
![Top-Options](https://github.com/ArchangeLillith/tanto-cuore-randomizer/blob/master/Top-Tanto-Cuore-Options.png)
![Bottom-Options](https://github.com/ArchangeLillith/tanto-cuore-randomizer/blob/master/Bottom-Tanto-Cuore-Options.png)
![Finished-Town](https://github.com/ArchangeLillith/tanto-cuore-randomizer/blob/master/Finished-Town.png)

</div>
<!-- GETTING STARTED -->
## Getting Started

This project only runs if a server of cards (from Tanto Cuore Funnel) is running on http://localhost:5000

### Prerequisites

A web browser, preferably Chrome, and the database from Tanto Cuore Funnel running on http://localhost:5000

<p align="right">(<a href="#readme-top">back to top</a>)</p>

# TantoCuoreRandomizer

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
