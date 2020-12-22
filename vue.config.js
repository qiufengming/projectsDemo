module.exports = {
    devServer: {
        overlay: {
            warnings: false,
            errors: false // 页面将不会有error遮罩层
        }
    },
    lintOnsave: false // 关了 eslint 检查
};