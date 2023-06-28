# A 25 + 5 Clock FCC

## Introduction

This project is called "A 25 + 5 Clock FCC" and it aims to provide a timer functionality with configurable break and session lengths. It is built using Vite React and utilizes the useContext hook for managing state. The user stories describe the specific actions and behaviors expected from the project.

## User Stories

The user stories for this project are as follows:

### User Story #1

**Description:** When the user clicks the decrement button for break length, the break length value should decrease by 1.

### User Story #2

**Description:** When the user clicks the increment button for break length, the break length value should increase by 1.

### User Story #3

**Description:** The break length value should not be set to less than or equal to 1.

### User Story #4

**Description:** The break length value should not be set to more than 60.

### User Story #5

**Description:** When the user starts the timer, the timer should begin counting down from the current session length.

### User Story #6

**Description:** When the session countdown reaches zero, the timer label should change to "Break" and a new countdown should start from the current break length.

### User Story #7

**Description:** When the break countdown reaches zero, the timer label should change back to "Session" and a new countdown should start from the current session length.

### User Story #8

**Description:** When a countdown reaches zero, a sound indicating that time is up should play.

### User Story #9

**Description:** The sound played should have a duration of at least 1 second.

### User Story #10

**Description:** When the user clicks the reset button, the timer should stop, the break length should be reset to 5, the session length should be reset to 25, and the timer display should reset to its default state.

Apologies for the confusion. If you're using Vite, the default port might not be 3000. Here's an updated version specifying that the project uses Vite and providing the correct localhost port:

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository to your local machine.

```shell
git clone https://github.com/ardiandev/a-25-5-clock-fcc.git
```

2. Change to the project directory.

```shell
cd a-25-5-clock-fcc
```

3. Install the dependencies using npm.

```shell
npm install
```

## Usage

To start the development server and run the project, use the following command:

```shell
npm run dev
```

This will start the development server, and you can access the project in your browser at the specified port (typically `http://localhost:3000` or a different port indicated by Vite).

## Conclusion

You're now ready to use the "A 25 + 5 Clock FCC" project. Follow the instructions to download, install dependencies, and run the project. Feel free to explore and customize the code according to your needs. Enjoy!
