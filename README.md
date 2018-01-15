# JSON Resume to vCard
[![Greenkeeper](https://badges.greenkeeper.io/maartenpaauw/json-resume-to-vcard.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/maartenpaauw/json-resume-to-vcard.svg?branch=master)](https://travis-ci.org/maartenpaauw/json-resume-to-vcard)
[![Dependencies Status](https://david-dm.org/maartenpaauw/json-resume-to-vcard/status.svg)](https://david-dm.org/maartenpaauw/json-resume-to-vcard)
[![Development Dependencies Status](https://david-dm.org/maartenpaauw/json-resume-to-vcard/dev-status.svg)](https://david-dm.org/maartenpaauw/json-resume-to-vcard?type=dev)
[![npm (tag)](https://img.shields.io/npm/v/json-resume-to-vcard.svg)](https://www.npmjs.com/package/json-resume-to-vcard)
> Converts a JSON Resume file to a vCard

## Installation

Install with Yarn:

`yarn add json-resume-to-vcard`

Install with NPM:

`npm install json-resume-to-vcard --save`

## Usage
```javascript
import VCard from 'json-resume-to-vcard'
import resume from './path/to/resume.json'

const vcard = new VCard(resume)

vcard.toFile()
```
