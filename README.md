##appstrapular

A quick start for a JS application, which includes testing &amp; building operations


###Key technologies
	* Backbone 			Client-side MV* framework
	* RequireJS			Dependency management & async loading
	* Underscore		General utilities & templating
	* jQuery			DOM manipulation & animations
	* Bootstrap			Front-end framework for CSS on UI component standardization 
	* Grunt				Workflow operations
	* Jasmine			Unit testing


###Goals
	* code quality checks
	* code beautification process
	* code documentation process
	* performance engineering
	* bi-directional data binding
	* unit testing
	* pre-compilation of templates


###Instructions

	1. Clone this repository to your desired directory, referred to as the "webapp" dir from here out
	2. cd into the webapp directory
	3. Run `npm install` from the command line

###Workflows from command line

	`grunt`
		This will show you the options available

	`grunt pre-commit`
		This will execute the following
			* Format applicable source files (within src folder) that don't match the formatting standards.  This will not affect external libs
			* Run JSHint against the src files.  Results are outputted to hintresults.xml
			* To come:
				- Unit tests
				- Auto documentation from JSDoc
			If anything fails in this build task, it is meant to break/stop.  These items must be resolved! 

	`grunt optimize'
		This will create modules, minify and compress files, and place them into the "target" directory
