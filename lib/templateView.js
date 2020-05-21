//HelloWorld 转为Hello-world
let fs = require("fs");
let config = "";
fs.exists("auto-components.config.js", function(exists) {
  config = exists ? require("../../../auto-components.config.js") : "";
});

function format(compoenntName) {
  let str = "";
  for (let index = 0; index < compoenntName.length; index++) {
    if (checkLowercase(compoenntName.charAt(index))) {
      str =
        index !== 0
          ? str + "-" + compoenntName.charAt(index).toLowerCase()
          : str + compoenntName.charAt(index).toLowerCase();
    } else {
      str = str + compoenntName.charAt(index);
    }
  }
  return str;
}

//判断大写
function checkLowercase(value) {
  if (/^[A-Z]+$/.test(value)) {
    return true;
  }
  return false;
}
module.exports = {
  vueTemplate: (compoenntName) => {
    return `<template>
 <div class="${format(compoenntName)}">
 ${compoenntName}
  </div>
</template>
<script>
export default {
  name: '${compoenntName}'
}
</script>
<style lang='${
      config && config.cssPrecompiler ? config.cssPrecompiler : "scss"
    }' scoped>
.${format(compoenntName)} {
}
</style>
`;
  },
  entryTemplate: `import Main from './Main.vue'
export default Main`,
};
