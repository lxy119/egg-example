module.exports = app => {
    app.beforeStart(async function() {
        // await app.model.sync({ force: true }); // 开发环境使用，会删除数据表,重启服务器都会清空数据库
        await app.model.sync({})
    });
};
