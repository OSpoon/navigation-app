/**
 * 上传打包后的dist文件夹内容到阿里OSS
 * npm install ali-oss --save
 */
const path = require("path");
const fs = require("fs");
const OSS = require("ali-oss");

const client = new OSS({
  bucket: "it200",
  region: "oss-cn-beijing",
  accessKeyId: "",
  accessKeySecret: ""
});

const rootPath = path.resolve(__dirname, "./important");
let filepaths = [];
let putCount = 0;

function readFileSync(filepath) {
  let files = fs.readdirSync(filepath);
  files.forEach(filename => {
    let p = path.join(filepath, filename);
    let stats = fs.statSync(p);
    if (stats.isFile()) {
      filepaths.push(p);
    } else if (stats.isDirectory()) {
      readFileSync(p);
    }
  });
}

function put(filepath) {
  const p = filepath.replace(rootPath, "").substr(1);
  return client.put(p.replace("\\", "/"), filepath);
}

async function update() {
  try {
    // 递归获取所有待上传文件路径
    readFileSync(rootPath);
    let retAll = await filepaths.map(filepath => {
      putCount++;
      console.log(`任务添加: ${path.basename(filepath)}`);
      return put(filepath);
    });
    Promise.all(retAll).then(res => {
      const resAll = res.map(r => {
        return r.res.statusCode === 200;
      });
      if (Object.keys(resAll).length === putCount) {
        console.log("发布成功");
      }
    });
  } catch (e) {
    console.log(e);
  }
}

// 上传发布
update();
