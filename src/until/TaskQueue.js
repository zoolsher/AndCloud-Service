let async = require('async');

class TaskQueue {
    constructor(size) {
        this.queue = async.queue(function(task, callback) {
            console.log("process task " + task.id);
            task.work(callback);
        });
        this.queue.saturated = function() {
            console.log("all phone device used");
        }
        this.queue.empty = function() {
            console.log("no more task waiting");
        }
        this.queue.drain = function() {
            console.log("all tasks have been processed");
        }
    }
    push(task) {
        this.queue.push({
            name: task.id,
            work: function(cb) {
                setTimeout(function() {
                    cb(task.id);
                }, parseInt(Math.random() * 10000));
            }
        }, function(err) {
            console.log("task" + task.id + " finish");
        });
    }
    kill() {
        this.queue.kill();
    }

}

export default TaskQueue