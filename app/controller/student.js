const Controller=require('egg').Controller

class StudentController extends Controller{

    // restful:index/create/destroy/update
    async index(){
        let studentList=await this.app.model.Student.findAll()
        this.ctx.body=studentList
    }
    async create(){
        let name=this.ctx.request.body.name
        let grade=this.ctx.request.body.grade
        let clazz_id=this.ctx.request.body.clazz_id
        await this.app.model.Student.create({name,grade,clazz_id})
        this.ctx.body='添加成功'
    }
    // async destroy(){
    //     let id=this.ctx.params.id
    //     await this.app.model.Clazz.destroy({where:{id}})
    //     this.ctx.body='删除成功'
    // }

    // async update(){
    //     let id=this.ctx.params.id
    //     let name=this.ctx.request.body.name
    //     await this.app.model.Clazz.update({name},{where:{id}})
    //     this.ctx.body='修改成功'
    // }


}

module.exports=StudentController