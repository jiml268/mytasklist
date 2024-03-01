<h1 align="center">Todo List Web App</h1>

## Table of Contents

- [Tech Stack](#tech_stack)
- [Installation](#installation)
- [Backend](#backend)
- [Requirements](#requirements)

# 💻 Tech Stack:

![My Tech Stack](https://github-readme-tech-stack.vercel.app/api/cards?lineCount=2&theme=hacker&bg=%23101010&badge=%23222222&border=%23222222&titleColor=%231DDB07&line1=react%2Creact%2Cbe3c55%3Bmui%2Cmaterial+UI%2Ce14b7f%3Bredux%2Credux%2C7624f0%3B&line2=express%2Cexpress%2Ccd5fd8%3Bnode.js%2Cnode.js%2Cb2dd90%3Bmongodb%2Cmongodb%2Ca4f6f3%3B)

## Installation

### Cloning from GitHub Repository

To get started with the Mytasklist App, you can clone the repository from GitHub using the following steps:

**Prerequisite**:

Make sure you have an LTS version of Node.js installed on your computer.
[Download and install](https://nodejs.org/en/) if needed.

To varify if Node.js is installed open a Terminal Window and type npm node --v
This will show you a version number if installed

1. **Clone the repository**:

   ```bash
   git clone https://github.com/jiml268/mytasklist

   ```

2. Navigate to the project folder:
   ```bash
   cd mytasklist

   ```
3. Install the project's base dependencies with the `npm install` or `npm i` command:

4. Start development mode by running the `npm start` command:
   This should open your browers to [http://localhost:3000](http://localhost:3000). This
   page will automatically reload after making changes to the project files and saving them.

### Installing from ZIP Archive

1. Download the zip file <a href="https://github.com/jiml268/mytasklist/archive/refs/heads/main.zip">mytasklist.zip</a>

2. Extract the ZIP archive to your desired location on your computer.

3. Navigate to the project folder:

4. Install the project's base dependencies with the `npm install` or `npm i` command:

5. Start development mode by running the `npm start` command:
   This should open your browers to [http://localhost:3000](http://localhost:3000). This
   page will automatically reload after making changes to the project files and saving them.

## Backend

The Backend repo can be found at [https://github.com/jiml268/tasks-backend](https://github.com/jiml268/tasks-backend)

## Requirements

1. This tasklist was created to fulfull the following criteria

2. By default, it should show a board with 4 tasks like in the design.

3. Users can edit task name, description, icon, and status.

4. Users can delete tasks by selecting `Delete` button.

5. When users select `Add new task` option, a new task is added with a default name.

6. Users can edit board name and optionally, users can edit board description as well.

7. When users first visit the app, a new board with a unique id is created and saved to the database or alternatively a board is created after users make the first change.

8. Each board can be accessed by a unique id, e.g: /board/:board-id
