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
					'assets/css/solarizeddark.min.css': '_sass/solarizeddark/solarizeddark.scss'
				}
			}
		},
		watch: {
			css: {
				files: '_sass/solarizeddark/solarizeddark.scss',
				tasks: ['sass']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['watch']);
}
