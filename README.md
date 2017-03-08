# Knowledge
This repository exists because of knowledge that is shared **[here](https://github.com/flowup/knowledge/wiki)**

## Contribution Notes

Contribution notes are rules that should be respected during contributions to every project at FlowUp. These notes are mainly inspired by Angular and Golang contribution notes.

> :robot: Please make sure to read the notes carefully

> :sunny: Last Updated: 3. March 2017

### Note organization

- :zap: - important note
- :bulb: - good to know
- :beetle: - possible bug alert
- :octocat: - github has your back in this!

### Task Management

Each project is divided into multiple parts - also called **milestones**(on github) or **sprints**(commonly used). Every sprint has it's timespan (commonly 2 weeks) and tasks that should solved during this timespan.

> :bulb: you are free to use any tool accepted by your director if that makes task management more transparent to you. Currently accepted tool is only [overv.io](over.io).

> :octocat: github supports filtering based on labels and milestones. This makes it perfect if you want to stay on the same platform

**Tasks (or issues)** are always **labeled**. Labels makes it easy for us to manage what is importnat and how much time it needs to be done. Most important labels are called **Pipeline labels**. These are used to know what is the current implementation state of a feature. **Additional labels** are then used to categorize the task such as *bug*, *discussion*, *design*, etc.

**Pipeline labels**
- *in progress* - the issue is already in progress by assigned member
- *qa* - the issue is already submitted for a review or in staging process waiting for customer approval

> :bulb: if there is no pipeline label on *open* issue, that means the issue is at the start of the pipeline (not started). If there is no pipeline label on *closed* issue, that means it's at the end of the pipeline (done)

> :zap: note that github will not automatically unassign the labels for you. When moving the task from *in progress* to *qa*, you must first unassign the *in progress* label and than assign *qa*. Tools like Overv will do this for you

**Additional labels (not all included)**
- priority: (low|medium|high) - decides what should be the priority of implementations
- esimated: (0.5, 1, 2, 3, 5, 7. 13) - estimated story points for the task
- consumed: (0.5, 1, 2, 3, 5, 7, 13) - consumed story points by the task
- discussion - this task should be discussed before implementation
- refactor - this tasks involves significant refactoring
- documentation - involves documentation writing (graphs, inline doc., etc.)

> :zap: never assign or unassign *priority*, *estimated*, and *consumed* labels by yourself. Always let your team-lead do that. This information is generally changed only to tasks *not* in current sprint and only on team meetings

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
