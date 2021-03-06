const Mock=require('mockjs');
import assign from 'core-js/library/fn/object/assign'
var Random = Mock.Random;
Random.extend({
    eventTypes: ['新增事件', '更新事件', '删除事件'],
    // eventTitles:['偷井盖了', '掉井盖里了', '找回井盖了'],
    // eventSites:['南湖', '关山', '光谷'],
    // eventSoures:['区级下派', '群众上报'],
    // eventDeadlines:['一年','一个月','一周','一天'],
    // constellation: function(date){
    //     return this.pick(this.eventTypes)
    // }
})
let db=Mock.mock({
    'data|15-20':[{
        'number|+1': 1,
        'id':'@id',
        'name':'@eventTypes',
        'age|18-32':1
        // 'eventSite':'@eventSites',
        // 'eventSoure':'@eventSoures',
        // 'eventType':'@eventTypes',
        // 'eventDeadline':'@eventDeadlines',
    }]
})
module.exports={
    [`POST /api/events`](req,res){
        let tem = assign({},db)
        tem = db.data;
        if(req.body.name){
          let data = db.data.filter( e => e.name.indexOf(req.body.name) !== -1)
          tem = data;
        }
        res.status(200).json(tem);
    },

    [`POST /api/remove`](req,res) {
          let t=req.body;
          console.log(`后台删除${t.id}`)
          let data = db.data.filter( e => e.id !== t.id )
          db.data = data;
          res.status(200).json(db);
        }
}

// export [`GET /api/users`] function getList(req,res) {
//   console.log(db);
//   res.status(200).json(db);
// }

// export function addEvent(req,res) {
//   let e=req.body;
//   console.log(req);
//   e.id=Mock.mock('@id');
//   e.number=db.data.length+1;
//   db.data.push(e);

//   res.status(200).json(e);
// }

// export function removeEvent(req,res) {
//   let t=req.body;
//   console.log(`后台删除${t.id}`)
//   let data = db.data.filter( e => e.id !== t.id )
//   db.data = data;
//   res.status(200).json(db);
// }
