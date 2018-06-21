# Simple Minesweeper in Angular

## Introduction

The goal of this task is to create a simple game called Minesweeper using Angular. 
There are no restrictions of using libraries, however, consider avoiding usage of large or complex libraries (as you don't need anything special for this task)

![image](https://upload.wikimedia.org/wikipedia/en/3/31/Minesweeper_XP.png)

## Game logic requirements

- marking possible mines with a flag
  - `+` using mouse right click for purpose of flag
- empty fields evaluation
- end game on explosion
  - `+` show all the mines on field when game has ended

## Requirements
- generate new project using angular cli ([quickstart](https://angular.io/guide/quickstart))
- a simple UI that should allow users to generate new map and play it (start new game)
- analyse the task to determine how to structure your app
- use angular service to store the state of the game
- use more components, don't stick everything into one component
- no backward compatibility for browsers is required (use latest Chrome/FF)
- no backend is required (client only)

## Evaluation

`+` playability

`+` Angular features

`+` state management *(ngrx/redux/rxjs+service/...)*

`+` nice UI

`+` version control (GIT)

`-` game logic problems

`-` bad library choices

`-` error-prone (exceptions, errors)
