<template>
    <div class="el-row">
        <div class="el-col-12">
            <el-form :model="formData" label-width="80px">
                <el-form-item label="活动名称">
                    <el-input v-model="formData.name"></el-input>
                </el-form-item>
                <el-form-item label="推广地">
                    <el-input v-model="formData.region"></el-input>
                </el-form-item>
                <el-form-item label="活动形式">
                    <el-input v-model="formData.type"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click.native.prevent="clickHandler">立即创建</el-button>
                    <el-button @click.native.prevent="cancelHandler">取消</el-button>
                </el-form-item>
            </el-form>
        </div>

        <el-dialog title="提示" v-model="dialogVisible" size="tiny">
              <el-tag type="primary">{{formData.name}}</el-tag>
              <el-tag type="primary">{{formData.region}}</el-tag>
              <el-tag type="primary">{{formData.type}}</el-tag>
              <span slot="footer" class="dialog-footer">
                <el-button @click.native="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click.native="dialogVisible = false">确 定</el-button>
              </span>
        </el-dialog>
    </div>

</template>
<script>
    export default {
        name:"page2",
        data(){
            return {
                dialogVisible:false,
                formData: {
                    name: '',
                    region: '',
                    type: ''
                }
            }
        },
        methods: {
            clickHandler() {
                console.log('submit!');
                this.dialogVisible = true;
            },
            cancelHandler(){
                console.log("cancel!")
            }
        }
    }
</script>
<style>

</style>