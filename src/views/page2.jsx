 export default {
     data(){
         return {
             formAlignRight: {
                 name: '',
                 region: '',
                 type: ''
             }
         }
     },
    methods: {
      clickHandler() {
        console.log('submit!');
        console.log(this.formAlignRight)
      }
    },
    render(h){
        return (
            <div>
                <p>
                    {this.formAlignRight.name}-
                    {this.formAlignRight.region}-
                    {this.formAlignRight.type}
                </p>
                <el-form model={this.formAlignRight} label-width="80px">
                    <el-form-item label="活动名称">
                        <el-input v-model={this.formAlignRight.name}></el-input>
                    </el-form-item>
                    <el-form-item label="推广地">
                        <el-input v-model={this.formAlignRight.region}></el-input>
                    </el-form-item>
                    <el-form-item label="活动形式">
                        <el-input v-model={this.formAlignRight.type}></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" on-click={this.clickHandler}>立即创建</el-button>
                    </el-form-item>
            </el-form>
            </div>
           
        )
    }
}