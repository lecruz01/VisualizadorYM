module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options : {
				hoist_funs: false
			},
			prod_build : {
				files : {
					'../build/compressed.min.js' : 
					[
						'../build/jquery-3.2.1.min.js',
						'src/*.js',
					]
				}
			}
        },
        cssmin: {
            compress : {
				files : {
					"../build/compressed.min.css" : ['css/bootstrap.css','css/estilos.css', 'css/font-awesome.css']
				}
			}
        },
        watch: {
			scripts: {
				files: ['src/*.js', 'css/*.css'],
				tasks: ['cssmin','uglify'],
				options: {
					interrupt: true,
				},
			},
		},
    });

    grunt.loadNpmTasks('grunt-contrib-qunit');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['uglify', 'cssmin']);
};
