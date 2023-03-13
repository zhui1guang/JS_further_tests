console.log('running index.js');
// SyntaxError: Cannot use import statement outside a module 因为node环境不支持ES6 语法，要安装babel来转换ES6语法，但是又由于路径名有中文字符不合法，所以并没有安装babel
import { sum } from './sum.js';
console.log(sum(1, 2));

/*
输出： running sum.js
      running index.js
      3
import是在编译阶段指定的，在代码运行之前。所以是sum.js中先执行，index.js的后执行

如果是CommonJS中的require（）则是按语句顺序执行。因为此时可以在运行代码时根据需要加载依赖项
index.js
sum.js
3
*/