module.exports = function(grunt) {
    // 插件配置
    grunt.initConfig({
        
        watch: {
            //lesswatch
            less: {
                files: ['public/css/index.less'],
                tasks: ['less'],
                options: {
                    spawn: false,
                }
            }
        },
        //less编译
        less: {
            development: {
                // options: {
                //     paths: ['css']
                // },
                files: {
                    'public/css/index.css': 'public/css/index.less'
                }
            }
        }
    });
    // 插件导入
    // grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // grunt.loadNpmTasks('grunt-contrib-concat');
    // grunt.loadNpmTasks('grunt-contrib-cssmin');
    // grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-less');
    // 注册插件
    grunt.registerTask('default', ['watch','less']);

};
