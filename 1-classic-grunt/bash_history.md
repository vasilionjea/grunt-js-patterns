##  Here is how to get started


#### Create an new branch
	
	git checkout -b 1-classic-grunt
	

#### Copy the unbuilt directory to the new branch	
	cp -R 1-classic/ 1-classic-grunt/
	git add 1-classic-grunt/
	git commit -m "initial commit for grunt work"
	
	cd 1-classic-grunt/


#### Add package & Gruntfile files

	touch package.json
	touch Gruntfile.js
	git add package.json Gruntfile.js
	git commit -m "Created package.json and Gruntfile"
	

#### Add a gitignore file	
	
	touch .gitignore
	git add .gitignore
	git commit -m "Added .gitignore"


#### Add devDependencies to the package file

	git add package.json
	git commit package.json -m "Added Dev. dependencies"


#### Install the dependencies and grunt.loadNpmTasks()
	
	npm install
	git commit Gruntfile.js -m "Installing npm modules & loading in Grunt plugins"
	
#### When done with this pattern/tutorial

	git checkout master
	git merge 1-classic-grunt