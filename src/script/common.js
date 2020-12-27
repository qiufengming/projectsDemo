var qfm = {};

// 数组对象针对某个属性排序
qfm.sortArrObj = function(property){
    return function(a, b){
        let val1 = a[property];
        let val2 = b[property];
        return val1 - val2;
    }
}
/**
 * 将数组根据父子关系转换成树结构
 * @param {*} arr 
 */
qfm.objInsertChild = function(arr){
    let newArr = [];
    let firstLevel = [];
    let noFirstLevel = [];
    // 遍历一级
    arr.forEach(item => {
        if(!item.parentId){
            newArr.push({...item})
            firstLevel.push({...item})
        }else{
            noFirstLevel.push({...item});
        }
    });
    if(!noFirstLevel.length) return newArr;

    // 遍历其他
    return qfm.eachChildrenInsertParent(newArr, noFirstLevel) || [];

}
qfm.eachChildrenInsertParent = function(parentArr, arr){
    let noFindParent = [];
    arr.forEach(item => {
        let hasParent = false;
        let parentIndex = 0;
        let isChildFindParent = false;
        parentArr.forEach((p, pI) => {
            if(item.parentId == p.id){
                hasParent = true;
                parentIndex = pI;
            }else if(!!p.children && !!p.children.length){
                let findParent = qfm.childInsertParent(p.children, item);
                if(!!findParent){
                    parentArr[pI].children = findParent;
                    isChildFindParent = true;
                }
            }
        })
        if(hasParent){
            if(!parentArr[parentIndex].children){
                parentArr[parentIndex].children = [];
            }
            parentArr[parentIndex].children.push({...item})
        }
        if(!hasParent && !isChildFindParent){
            noFindParent.push({...item});
        }
    });

    if(!noFindParent.length){
        return parentArr;
    }else{
        qfm.eachChildrenInsertParent(parentArr, noFindParent)
    }
};
qfm.childInsertParent = function(parentArr, objItem){
    let newArr = [];
    let hasParent = false;
    let parentIndex = 0;
    let isChildFindParent = false;
    parentArr.forEach((item, i) => {
        if(item.id == objItem.parentId){
            hasParent = true;
            parentIndex = i;
        }else if(!!item.children && !!item.children.length){
            let findParent = qfm.childInsertParent(item.children, objItem);
            if(!!findParent){
                parentArr[i].children = findParent;
                isChildFindParent = true;
            }
            
        }
    })

    if(hasParent){
        if(!parentArr[parentIndex].children){
            parentArr[parentIndex].children = [];
        }
        parentArr[parentIndex].children.push({...objItem})
    }

    if(hasParent || isChildFindParent){
        return parentArr;
    }else{
        false;
    }
};
/**
 * 深拷贝
 */
qfm.deepClone = (function(){
    // 这个方法用来获取对象的类型 返回值为字符串类型 "Object RegExp Date Array..."
    var classof = function(o) {
        if (o === null) {
            return "null";
        }
        if (o === undefined) {
            return "undefined";
        }
        // 这里的Object.prototype.toString很可能用的就是Object.prototype.constructor.name
        // 这里使用Object.prototype.toString来生成类型字符串
        var className = Object.prototype.toString.call(o).slice(8, -1);
        return className;
    };

    // 这里这个变量我们用来存储已经保存过的属性，目的在于处理循环引用的问题
    var references = null;

    // 遇到不同类型的对象的处理方式
    var handlers = {
        // 正则表达式的处理
        'RegExp': function(reg) {
            var flags = '';
            flags += reg.global ? 'g' : '';
            flags += reg.multiline ? 'm' : '';
            flags += reg.ignoreCase ? 'i' : '';
            return new RegExp(reg.source, flags);
        },

        // 时间对象处理
        'Date': function(date) {
            return new Date(+date);
        },

        // 数组处理 第二个参数为是否做浅拷贝
        'Array': function(arr, shallow) {
            var newArr = [],
            i;
            for (i = 0; i < arr.length; i++) {
                if (shallow) {
                    newArr[i] = arr[i];
                } else {
                    //这里我们通过reference数组来处理循环引用问题
                    if (references.indexOf(arr[i]) !== -1) {
                        continue;
                    }
                    var handler = handlers[classof(arr[i])];
                    if (handler) {
                        references.push(arr[i]);
                        newArr[i] = handler(arr[i], false);
                    } else {
                        newArr[i] = arr[i];
                    }
                }
            }
            return newArr;
        },

        // 正常对象的处理 第二个参数为是否做浅拷贝
        'Object': function(obj, shallow) {
            var newObj = {}, prop, handler;
            for (prop in obj) {
                // 关于原型中属性的处理太过复杂，我们这里暂时不做处理
                // 所以只对对象本身的属性做拷贝
                if (obj.hasOwnProperty(prop)) {
                    if (shallow) {
                        newObj[prop] = obj[prop];
                    } else {
                        // 这里还是处理循环引用的问题
                        if (references.indexOf(obj[prop]) !== -1) {
                            continue;
                        }
                        
                        handler = handlers[classof(obj[prop])];
                        // 如果没有对应的处理方式，那么就直接复制
                        if (handler) {
                            references.push(obj[prop]);
                            newObj[prop] = handler(obj[prop], false);
                        } else {
                            newObj[prop] = obj[prop];
                        }
                    }
                }
            }
            return newObj;
        }
    };

    return function(obj, shallow) {
        // 首先重置我们用来处理循环引用的这个变量
        references = [];
        // 我们默认处理为浅拷贝
        shallow = shallow === undefined ? true : false;
        var handler = handlers[classof(obj)];
        return handler ? handler(obj, shallow) : obj;
    };
}());

export default qfm;

