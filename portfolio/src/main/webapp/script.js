// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  const greetings =
      ['Hello world!', '¡Hola Mundo!', '你好，世界！', 'Bonjour le monde!'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}

function getIntroduction() {
    const text = document.getElementById("text").value;

    const introductionContainer = document.getElementById('introduction-container');
    if(text != "")
        introductionContainer.innerText = "You typed " + text;
    else
        introductionContainer.innerText = "";
}

async function getServerTime() {
    const responseFromServer = await fetch('/date');
    const textFromResponse = await responseFromServer.text();

    const dateContainer = document.getElementById('date-container');
    dateContainer.innerText = textFromResponse;
}

async function getHelloMessage() {
    const responseFromServer = await fetch('/hello');
    const textFromResponse = await responseFromServer.text();

    const helloContainer = document.getElementById('hello-container');
    helloContainer.innerText = textFromResponse;
}

async function getServerStats() {
    const responseFromServer = await fetch('/server-stats');
    const textFromResponse = await responseFromServer.text();

    const peopleContainer = document.getElementById('people-container');

    const attributes = textFromResponse.split(" ");
    let result = "";
    for(let i = 0; i < attributes.length-1; i++)
    {
        if(i%3 == 0)
            result += attributes[i] + " is ";
        else if(i%3 == 1)
            result += attributes[i] + " years old.";
        else if(i%3 == 2)
        {
            if(attributes[i] == "N/a")
                result += " It has no gender.";
            else if(attributes[i] == "female")
                result += " She is female.";
            else
                result += " He is male.";
            result += "\n";
        }
    }
    peopleContainer.innerText = result;
}