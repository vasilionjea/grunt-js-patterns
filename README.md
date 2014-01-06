## GruntJS Patterns

`1-classic/` is a non-grunt project.

`1-classic-grunt/` is the same project's directory but can be built with Grunt. Both exist so one can compare/contrast. To build it just do the following: 

    cd 1-classic-grunt/
    npm install # install the devDependencies
    grunt # execute Grunt's default task


Now a `dist/` directory should appear in the same folder and should include the distribution ready CSS and JavaScript files.

**Note:** it's assumed that you have already installed NodeJS, NPM, and the Grunt CLI.
