/**
 * grunt任务nodemon
 * @Author   weiber
 * @DateTime 2016-04-24T03:14:43+0800
 * @param    {[type]}                 grunt [description]
 * @return   {[type]}                       [description]
 */
module.exports = function(grunt) {

    grunt.config.set('nodemon', {
        dev: {
            script: './bin/www',
            options: {
                nodeArgs: ['--debug'],
                ignore: ['node_modules/**', 'static'],
                ext: 'js,html',
                watch: ['./'],
                env: {
                    "NODE_ENV": "dev",
                    "PORT": "3000"
                },
                callback: function(nodemon) {
                    nodemon.on('log', function(event) {
                        console.log(event.colour);
                    });
                    nodemon.on('restart', function() {
                        setTimeout(function() {
                            require('fs').writeFileSync('.rebooted', 'rebooted');
                        }, 1000);
                    });
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-nodemon');
};