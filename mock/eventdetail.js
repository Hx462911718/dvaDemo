// 使用 Mock
const Mock=require('mockjs');


let db=Mock.mock({
    //属性数组，包含3到6个元素
    'data|1-2':[{
        id:'@id',
    }]
});

module.exports={
    [`GET /api/detail`](req,res){

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
