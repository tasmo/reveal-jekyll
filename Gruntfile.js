module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				options: {
					style: 'compressed',
					cacheLocation: '_sass/.sass-cache'
				},
				files: {
					//'style/style.css' : 'sass/style.scss'
					'assets/css/solarized.min.css': '_sass/solarized/solarized.scss'
				}
			}
		},
		watch: {
			css: {
				files: '_sass/solarized/solarized.scss',
				tasks: ['sass']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['watch']);
}
