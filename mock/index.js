const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);
server.get('/typeahead', (req, res, next) => {
    const keywords = req.query.keywords;
    console.log(keywords);
    let result = [
        {id: 1, name: "南方数媒工场-品牌部"},
        {id: 2, name: "南方数媒工场-销售部"},
        {id: 3, name: "南方数媒工场-公关部"},
        {id: 4, name: "南方数媒工场-市场部"},
        {id: 5, name: "南方数媒工场-财务部"},
        {id: 6, name: "南方数媒工场-人事部"},
        {id: 7, name: "南方周末-品牌部"},
        {id: 8, name: "南方周末-销售部"},
        {id: 9, name: "南方周末-公关部"}
    ];
    res.status(200).send(result.filter(item=>item.name.indexOf(keywords) > -1));
});

// Use default router
server.use(router);

server.listen(8080, () => {
    console.log('JSON Server is running at http://localhost:8080');
});