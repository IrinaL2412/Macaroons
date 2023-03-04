module.exports = function (grunt) {
    grunt.initConfig({
        less: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'dist/styles.css': 'src/css/styles.less'
                }
            }
        },
        cssmin: {
            options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'dist/styles.min.css': ['dist/styles.css']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['less', 'cssmin']);
};