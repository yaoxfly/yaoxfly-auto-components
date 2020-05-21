//hellow-world 转为HelloWorld
let fs = require("fs");
let config = "";
fs.exists("auto-components.config.js", function(exists) {
  config = exists ? require("../../../auto-components.config.js") : "";
});

function format(compoenntName) {
  let str = "";
  compoenntName.split("-").forEach((item) => {
    str = str + `${item.substring(0, 1).toUpperCase()}${item.substring(1)}`;
  });
  return str;
}

module.exports = {
  vueTemplate: (compoenntName) => {
    return `<template>
 <div class="${compoenntName}">
   ${format(compoenntName)}组件
  </div>
</template>
<script>
export default {
  name: '${format(compoenntName)}'
}
</script>
<style  lang='${
      config && config.cssPrecompiler ? config.cssPrecompiler : "scss"
    }' scoped>
.${compoenntName} {

}
</style>
`;
  },
  entryTemplate: `import Main from './Main.vue'
export default Main`,
};
