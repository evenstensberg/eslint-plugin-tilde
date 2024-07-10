import fs from "fs";

const pkg = JSON.parse(fs.readFileSync(new URL("./package.json", import.meta.url), "utf8"));


const checkForIndexOf = (context) => {
    return {
        IfStatement(node) {
            console.log(node)
            const notUsingBitwiseNot = false;
            if (!notUsingBitwiseNot) {
              context.report({
                node: node.consequent,
                message: 'Expected ~~ (Bitwise NOT) instead of indexOf',
                fix: function(fixer) {
/*                   const sourceCode = context.getSourceCode();
                  const consequentText = sourceCode.getText(node.consequent);
                  return fixer.replaceText(node.consequent, `{ ${consequentText} }`); */
                }
              });
            }}
        }
  };

const plugin = {
    meta: {
        name: pkg.name,
        version: pkg.version,
        type: 'problem',
        docs: {
          description: 'enforce bitwise not for indexOf',
        },
        fixable: "code",
        schema: []
    },
    configs: {},
    rules: {
        "no-indexof": {
            create: checkForIndexOf
        }
    }
};

export default plugin;