var fs = require('fs');

var PATH = './types'; // 目录

//  遍历目录得到文件信息
function walk(path, callback) {
    var files = fs.readdirSync(path);
    files.forEach(function(file){
        const newP = path + '/' + file;
        if (fs.statSync(newP).isFile()) {
            callback(path, file);
        } else {
            walk(newP, callback)
        }
    });
}

// 修改文件名称
function rename (oldPath, newPath) {
    fs.rename(oldPath, newPath, function(err) {
        if (err) {
            throw err;
        }
    });
}

// 运行
walk(PATH, function (path, fileName) {
    var oldPath = path + '/' + fileName, // 源文件路径
        newPath = path + '/'+ fileName.replace(/\.js/, '.ts'); // 新路径

    rename(oldPath, newPath);
});