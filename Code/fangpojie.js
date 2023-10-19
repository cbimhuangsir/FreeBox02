/*Right click prohibited*/
/*document.oncontextmenu = function () {
    new Vue({
        data:function(){
            this.$notify({
                title:"嗯？没有右键菜单",
                message:"复制请用键盘快捷键[Ctrl+C]",
                position: 'bottom-right',
                offset: 50,
                showClose: false,
                type:"warning"
            });
            return{visible:false}
        }
    })
    return false;
    }*/
    /*Prohibit <a target="_blank" href="https://www.zlsw.cc/" title="View all posts in F12">F12</a>*/
    document.onkeydown = function () {
    if (window.event && window.event.keyCode == 123) {
      event.keyCode = 0;
      event.returnValue = false;
        new Vue({
                data:function(){
                    this.$notify({
                        title:"呃！别瞎按",
                        message:"你按这个想干嘛！再按就找不到我咯",
                        position: 'bottom-right',
                        offset: 50,
                        showClose: false,
                        type:"error"
                    });
                    return{visible:false}
                }
            })
      return false;
    }
    /*Prohibit Ctrl+U*/
        if (event.ctrlKey && window.event.keyCode == 85) {
            new Vue({
                data: function() {
                    this.$notify({
                        title: "嘿！Brother",
                        message: "老弟，源码得换方式获取哦~",
                        position: 'bottom-right',
                        offset: 50,
                        showClose: true,
                        type: "error"
                    });
                    return {
                        visible: false
                    }
                }
            })
            return false;
        }
    /*Prohibit Ctrl+S*/
        if (event.ctrlKey && window.event.keyCode == 83) {
            new Vue({
                data: function() {
                    this.$notify({
                        title: "哎！你瞧瞧你",
                        message: "网页得换方法保存哦~",
                        position: 'bottom-right',
                        offset: 50,
                        showClose: true,
                        type: "error"
                    });
                    return {
                        visible: false
                    }
                }
            })
            return false;
        }
    /*Prohibit Ctrl+Shift+I*/
    if ((event.ctrlKey) && (event.shiftKey) && (event.keyCode == 73)) {
    event.keyCode = 0;
      event.returnValue = false;
        new Vue({
                data:function(){
                    this.$notify({
                        title:"呐！这个也不行",
                        message:"还是按点别的吧！",
                        position: 'bottom-right',
                        offset: 50,
                        showClose: false,
                        type:"error"
                    });
                    return{visible:false}
                }
            })
                   return false;
    }};
    /*Copy Remind*/
    document.addEventListener("copy", function(e) {
        new Vue({
            data: function() {
                if((window.getSelection ? window.getSelection() : document.selection.createRange().text) != ''){
                    this.$notify({
                        title: "叮！复制成功",
                        message: "若要转载请务必保留原文链接！谢谢~",
                        position: 'bottom-right',
                        offset: 50,
                        showClose: true,
                        type: "success"
                    });
                }else{
                    this.$notify({
                        title: "咦？复制失败",
                        message: "啊噢...你没还没选择内容呢！",
                        position: 'bottom-right',
                        offset: 50,
                        showClose: true,
                        type: "success"
                    });
                }
                return {
                    visible: false
                }
            }
        })
    })
