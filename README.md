# SpongeBob FlashCards

This app is a Quizlet-inspired set of flashcards, built using React, Vite, HTML, JavaScript, and CSS. This project includes flashcards made for quizzing on Spongebob characters :)

Time spent: **6** hours spent in total

## Usage

In this project, users can use information presented in a flashcard-like manner to study, learn something new, or play a guessing game. Users will be able to study cards in a randomized order.

## Required Features

The following **required** functionality is completed:

- [x] **The title of the card set and some information about it, such as a short description and the total number of cards are displayed**
- [x] **A single card at a time is displayed, only showing one of the components of the information pair**
- [x] **A list of card pairs is created**
- [x] **Clicking on the card shows the corresponding component of the information pair**
- [x] **Clicking the next button displays a random new card**
- [x] **The user can enter their guess in a box before seeing the flipside of the card**
- [x] **Clicking on a submit button shows visual feedback about whether the answer was correct or incorrect**
- [x] **A back button is displayed on the card and can be used to return to the previous card in a set sequence**
- [x] **A next button is displayed on the card and can be used to navigate to the next card in a set sequence**

The following **optional** features are implemented:

- [x] Cards contains images in addition to or in place of text
- [x] Cards have different visual styles such as color based on their category
- [x] A shuffle button is used to randomize the order of the cards
- [x] A user's answer may be counted as correct even when it is slightly different from the target answer
- [x] A counter displays the user's current and longest streak of correct responses

The following **additional** features are implemented:

- [x] Added custom background
- [x] Added custom title font

## Video Walkthrough

Here's a walkthrough of implemented required features:

Part 1:
<img src='https://github.com/gabrielaliera/SpongeBob_FlashCards/blob/master/spongebob-walkthroughP1.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

Part 2:
<img src='https://github.com/gabrielaliera/SpongeBob_FlashCards/blob/master/spongebob-walkthroughP2.gif' title='Video Walkthrough' width='' alt='Video Walkthrough with updates' />


GIF created with <a href="https://www.cockos.com/licecap/">LICEcap.</a> 

### Dependencies

* [Vite](https://www.npmjs.com/package/vite)
* [Vite React Plugin](https://www.npmjs.com/package/@vitejs/plugin-react)
* [React](https://www.npmjs.com/package/react)
* [React-DOM](https://www.npmjs.com/package/react-dom)

---

### Install Dependencies

Note: In the 'required features only' version of this lab, the individual flashcards have no color, however the current state of this repo includes the stretch features, where the individual flashcards have been color coordinated based on difficulty.

Before installing dependiencies, you will need `node` and `npm` installed globally on your machine by installing [NodeJS](https://nodejs.org/en/download/) onto your machine.

To install the dependencies, run:

```sh
npm install
```

### Run Flashcards pt. 1

In the repo directory, run the following in your terminal:

```sh
npm run dev
```

Visit the web application in the browser

```console
http://localhost:5173/
```

## Notes

During this lab, I learned to useState() to create state variables of different types. I used state variables to change the visual appearance of the app and check chanfes to other states are valid. I also use the onClick() and onChange() events to call methods to adjust or reset state variables. In addition, I created nested components in order to handle increasing complexity.

## License

    Copyright 2023 Gabriela Liera

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
---
*Last Updated: March 2023*
