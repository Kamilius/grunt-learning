module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
				compress: false,
				beautify: true
			},
			my_target: {
				files: {
					'build/scripts/<%= pkg.name %>.min.js': ['src/scripts/*.js']
				}
			}
		},
		haml: {
			dist: {
				options: {
					format: 'html5'
				},
				files: {
					'build/index.html': 'src/index.haml'
				}
			}
		},
		jshint: {
    		all: ['Gruntfile.js', 'src/scripts/*.js']
		},
		sass: {
			dist: {
				options: {
					//style: 'compressed',
					style: 'expanded',
					lineNumbers: true,
					banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */'
				},
				files: {
					'build/styles/<%= pkg.name %>.css': 'src/styles/style.sass'
				}
			}
		},
		watch: {
			sass: {
				files: ['src/styles/*.sass'],
				tasks: 'sass'
			},
			haml: {
				files: ['src/index.haml'],
				tasks: 'haml'
			},
			scripts: {
				files: ['src/scripts/*.js'],
				tasks: 'uglify'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-haml');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['watch']);
};