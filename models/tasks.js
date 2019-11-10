module.exports = app => {
    return{
        findAll: (params, callback) => {
            return callback([
                {title: "Fazer Compras - Models"},
                {title: "Consertar PC - Models"},
            ]);
        }
    };
};