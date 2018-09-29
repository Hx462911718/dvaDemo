// 使用 Mock
const Mock=require('mockjs');


let db=Mock.mock({
    //属性数组，包含3到6个元素
    'data|10-15':[{
        id:'@id',
        name:'@name',
        'age|18-32':1
    }]
});

module.exports={
    [`GET /api/users`](req,res){

        res.status(200).json(db);
    },

    [`POST /api/users`](req,res){

        let user=req.body;
        console.log(req);
        user.id=Mock.mock('@id');
        db.data.push(user);
        
        res.status(200).json(user);
    }
}
