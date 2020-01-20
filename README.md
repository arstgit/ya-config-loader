# ya-config-loader

[![Build Status](https://travis-ci.org/derekchuank/ya-config-loader.svg?branch=master)](https://travis-ci.org/derekchuank/ya-config-loader)
[![npm version](https://badge.fury.io/js/ya-config-loader.svg)](http://badge.fury.io/js/ya-config-loader)

## Super simple to use

A simple config loader, support `json` only.

## Installation

```
npm install ya-config-loader
```

## Usage

Usually, you will create a `config` directory including `default.json`, `test.json` and `production.json` in your project root directory. And using `NODE_ENV=test` to overwrite(merge) `default.json` with `test.json` is very helpful. Specifing environment variables such as `PORT=3000` can also be used to overwrite with highest priority.

First, Invoking the module without params to load the `config` in `process current working dir` is necessary:

```js
require("ya-config-loader").load();
const config = require("ya-config-loader");
```

or

```js
const config = require("ya-config-loader").load();
```

Alternatively, invoking with path string can be used to overwrite(merge) the `config` of `process current working dir`:

```js
require("ya-config-loader").load("path/to/config");
const config = require("ya-config-loader");
```

or

```js
const config = require("ya-config-loader").load("path/to/config");
```

After step 1, `require("ya-config-loader")` will become one `global` plain javascript object with only configs entries in it. When you need it:

```js
const config = require("ya-config-loader");
```

And you can modify this plain object freely.
