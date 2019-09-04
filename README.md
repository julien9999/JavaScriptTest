# JavaScript test

In this exercise, you would get history of events from an e-commerce website using
an API returning JSON that looks like the following mocked file:
[test/history-api-mock.json](https://github.com/OVNICap/JavaScriptTest/blob/master/test/history-api-mock.json)

We expect you to make unit tests from [test/index.spec.js](https://github.com/OVNICap/JavaScriptTest/blob/master/test/index.spec.js)
pass.

## Install

### Option 1: GitPod

[Open this repository in GitPod](https://www.gitpod.io/#https://github.com/OVNICap/JavaScriptTest).

### Option 2: local machine

Install [Node.js](https://nodejs.org)

Install [Git](https://git-scm.com)

Create a GitHub account if you don't have one and fork this project (top
right hand corner button).

Clone your fork to work on it on a local machine:
```shell
git clone https://github.com/<your-username>/JavaScriptTest
cd JavaScriptTest
```

Install dependencies: `npm install`

## Develop

Modify/create files inside the **src** directory (you should not need to
edit any other file to succeed).

Then fill the methods in [src/analytics.js](https://github.com/OVNICap/JavaScriptTest/blob/master/src/analytics.js)
and add intermediate methods if it can help the readability of the code.

## Test

You can test your code using `npm test`

You can debug your code using [src/index.js](https://github.com/OVNICap/JavaScriptTest/blob/master/src/index.js)
and running `npm start`

## Submit your solution

Create a ZIP or TAR archive with modified files (**src** directory should be enough
for this test, but you can include **package.json** if you added packages).

On GitPod, you can right-click on the **src** folder and click "Download".

Then send us the archive by mail.

## Evaluation

You should first try to get outputs of methods as close as possible
to the values unit test expect.

We will take into consideration:
- the clarity of your code: variables names, indentation, comments,
commit messages;
- the respect of best practices;
- the optimization of the code: significant optimizations like caching
results or reducing number of loops would be appreciated.
