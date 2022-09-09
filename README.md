# gis-question-formulator

This repository, right now, contains two projects that contain some 
overlap:

1.  A `blockly` interface in JavaScript to allow the user to construct a 
    question in constrained natural language.
2.  A natural language parser, using machine learning and ANTLR, that 
    identifies functional roles from a question, and produces the 
    underlying transformation graph.

The first of these is at the root of the repository. The second is in 
the [`parser_module/`](parser_module/) subdirectory. We are working 
towards unifying this functionality; see [issue 
#1](https://github.com/quangis/geo-question-parser/issues/1) for 
details.


## Installation

First, you will need to install [NPM][npm]. Do so via your method of 
choice; note that it is available on [`conda-forge`][conda-nodejs]. 
After that, install the environment:

    npm install

To have [Parcel][parcel] run a test server at `http://localhost:1234`, 
do:

    npm run start


[npm]: https://www.npmjs.com/
[parcel]: https://parceljs.org/
[conda-nodejs]: https://anaconda.org/conda-forge/nodejs
