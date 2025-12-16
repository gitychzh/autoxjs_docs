import { defineConfig } from "rspress/config";

export default defineConfig({
    // 文档根目录
    root: "docs",
    outDir: "rspressPage", //新增的，与目标目录一致，方便写部署代码
    // base: "/Autox_ozobi_Docs", // 如果是生成 autox app 的本地文档，需要注释掉这一行
    title: "Autox_ozobi_Docs",
    markdown: {
        showLineNumbers: true,
    },
    icon: "./docs/src/img/logo.png",
    logo: "/logo.png",
});
