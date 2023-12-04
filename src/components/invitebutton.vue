<!-- InviteButton.vue -->
<template>
    <div class="invite-button">
        <el-button @click="showDialog">生成邀请链接</el-button>
  
        <el-dialog title="邀请链接" :visible.sync="dialogVisible" width="400px">
            <el-input v-model="inviteLink" readonly></el-input>
            <el-button type="primary" @click="copyLink">复制链接</el-button>
        </el-dialog>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            dialogVisible: false,
            inviteLink: '',
        };
    },
    methods: {
        showDialog() {
        // Implement your logic for generating the invite link
        // For example, you can generate a random link or use some specific logic
            this.inviteLink = 'https://example.com/invite/' + Math.random().toString(36).substring(2, 10);
  
            // Show the dialog
            this.dialogVisible = true;
        },
        copyLink() {
        // Implement logic to copy the invite link to the clipboard
            const el = document.createElement('textarea');
            el.value = this.inviteLink;
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
            this.$message.success('链接已复制到剪贴板');
  
            // Close the dialog after copying
            this.dialogVisible = false;
        },
    },
};
</script>
  
  <style scoped>
    .invite-button {
        position: absolute;
        top: 20px;
        right: 190px;
    }
  </style>  