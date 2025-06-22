# TaskManager

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.

![image](https://github.com/user-attachments/assets/e0300ee1-c00e-4ff0-8ef0-86e0e41514c8)


## Input Output property

`Flow`

Click on <div> in task-item → calls onToggle() → emits ID → 
Parent (task-list) receives it via (toggle) → calls toggleTask(id) → 
Service updates task → List is refreshed

User clicks <div> in task-item
        ↓
task-item.onToggle() called
        ↓
@Output() toggle.emit(taskId)
        ↓
task-list (toggle)="toggleTask($event)"
        ↓
task-list.toggleTask(id)
        ↓
TaskService updates task
        ↓
Task list refreshed


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
