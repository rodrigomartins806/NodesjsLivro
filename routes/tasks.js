module.exports = app => {
    const Tasks = app.models.tasks;
        app.get('/task',(req,res)=>{
        Tasks.findAll({}, (tasks) => {
            res.json({tasks: tasks});
        });
    });
};

module.exports = app => {
    app.get('/',(req,res)=>{
        res.json({status: "Ntask API"});
    });
};