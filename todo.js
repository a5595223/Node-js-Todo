var fs = require('fs')  //文件信息系统  
const verb = process.argv[2]
const content = process.argv[3]
const content2 = process.argv[4]



if (verb === 'add') {
    fs.access("D:\\前端\\Node\\node-todo-demo\\db", function (err) {
        if (!err) {
            const fileContent = fs.readFileSync('D:\\前端\\Node\\node-todo-demo\\db').toString()
            const list = JSON.parse(fileContent)  //反序列化     
            const task = content //获取任务
            list.push([task, false]) //存入任务到list

            fs.writeFileSync('D:\\前端\\Node\\node-todo-demo\\db', JSON.stringify(list)) //序列化
        } else {
            fs.writeFileSync('D:\\前端\\Node\\node-todo-demo\\db', '')
            const list = []

            const task = content
            list.push([task, false])
            fs.writeFileSync('D:\\前端\\Node\\node-todo-demo\\db', JSON.stringify(list))
        }
    })
} else if (verb === 'list') {
    const fileContent = fs.readFileSync('D:\\前端\\Node\\node-todo-demo\\db').toString()
    const list = JSON.parse(fileContent)  //反序列化
    console.log(list)
} else if (verb === 'delete') {
    const fileContent = fs.readFileSync('D:\\前端\\Node\\node-todo-demo\\db').toString()
    const list = JSON.parse(fileContent)  //反序列化
    const n = content //从1开始
    list.splice(n - 1, n)
    fs.writeFileSync('D:\\前端\\Node\\node-todo-demo\\db', JSON.stringify(list))
} else if (verb === 'done') {
    const fileContent = fs.readFileSync('D:\\前端\\Node\\node-todo-demo\\db').toString()
    const list = JSON.parse(fileContent)  //反序列化
    const n = content
    list[n - 1][1] = true
    fs.writeFileSync('D:\\前端\\Node\\node-todo-demo\\db', JSON.stringify(list))
} else if (verb === 'edit') {
    const fileContent = fs.readFileSync('D:\\前端\\Node\\node-todo-demo\\db').toString()
    const list = JSON.parse(fileContent)
    const n = content
    list[n - 1][0] = content2
    fs.writeFileSync('D:\\前端\\Node\\node-todo-demo\\db', JSON.stringify(list))
} else {
    console.log('你的动词是' + verb + '，我不知道你想干啥')
}



















