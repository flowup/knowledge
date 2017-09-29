# Knowledge
This repository exists because of knowledge that is shared **[here](https://github.com/flowup/knowledge/wiki)**

## Contribution Notes

Contribution notes are rules that should be respected during contributions to every project at FlowUp. These notes are mainly inspired by Angular and Golang contribution notes.

> :robot: Please make sure to read the notes carefully

> :sunny: Last Updated: 14. June 2017

### Note organization

- :zap: - important note
- :bulb: - good to know
- :beetle: - possible bug alert
- :octocat: - github has your back in this!

### Task Management

Each project is divided into multiple parts - also called **milestones**(on github) or **sprints**(commonly used). Every sprint has its timespan (commonly 2 weeks) and tasks that should solved during this timespan.

> :octocat: github supports filtering based on labels and milestones. This makes it perfect if you want to stay on the same platform

**Task status**
> :bulb: labels are a good way to let everybody know what is the task about

### Task Solving and Submittion

Task solving and submittion is a process that mostly relies on [git-flow](https://danielkummer.github.io/git-flow-cheatsheet/). This method is commonly applied to any task that is being solved. Please make sure to go through the cheatsheet.

> :zap: don't solve many tasks in one feature branch. This may set the whole process on :fire: as some tasks way rely on other and many merges could be required

> :zap: always create feature branches for your tasks

**Commiting changes**

> :bulb: this section is mostly taken from the [Angular Contribution Notes](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-guidelines), copied here just to make sure it won't change without us knowing

Each commit message consists of a **header**, a **body** and a **footer**. The header has a special format that includes a type, a scope and a subject:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** is mandatory and the **scope** of the header is optional.

**Type**
Must be one of the following:

* **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
* **ci**: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
* **docs**: Documentation only changes
* **feat**: A new feature
* **fix**: A bug fix
* **perf**: A code change that improves performance
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing
  semi-colons, etc)
* **test**: Adding missing tests or correcting existing tests
