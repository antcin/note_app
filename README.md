# Single page note app and testing framework
Week 7 - The Boundless Eagles - @antcin @durranee @raefey @rewitt94

## Summary

This is a single page app, for creating and viewing a list of notes. The app comes with its own testing framework.

## Objectives

The objective was to build our own, fully tested single-page app, without using any libraries or frameworks, with the exception of `http-server`.

## Instructions

###### Prerequisites
-Node installed on the computer

###### Running
```sh
$ git clone https://github.com/antcin/note_app.git
$ cd note_app
$ npm install http-server
$ http-server -c-1 index.html
```
###### Testing
To see the list of passed unit and feature tests, run
```sh
$ http-server -c-1 jerryRunner.html
```

## Reflections
Although we did not create a standalone testing framework, we used Javascript methods to make sure our code was tested. This allowed us to explore Javascript in much greater detail. We learnt a decent amount about servers and we were proud of how we were able to run feature tests in the browser, on the specRunner.html page.

## To do
- Build a testing framework for Jerry
- Add deleting or editing notes
- Create full stack capability; with saved notes
- Improve Front-end design

## Highlights
- Good team cohesion
- Solving a promise to overcome asynchronicity problems
- Mob programming
- Using and understanding `XMLHttpRequest` object interactions

## Lowlights
- Didn't create a scalable testing framework
