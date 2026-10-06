# 可公开发布证据

本目录仅包含合成测量/验收JSON、脱敏命令日志和批准内容的普通浏览器截图。profiles、备份、原私人工作恢复记录均不入仓。prior-*为10月5–6日优化测量，数字原样保留；其余为10月6日真实发布链复验。

详见 [发布记录](../../osm-map-loading-release-2026-10-06.md) 和 [计划第11节](../../osm-map-loading-plan-2026-10-05.md)。

公开命令日志使用.txt（仓库忽略*.log）：[verify](verify-push-final.txt)、[30单测](unit-all-final.txt)、[正式build:site](build-site-push-final.txt)、[真实publisher G1](g1-ready-final.txt)、[资源浏览器检查](resources-final.txt)、[干净npm ci](npm-ci-clean-final.txt)、[干净依赖verify](verify-clean-dependencies.txt)、[干净依赖单测](unit-clean-dependencies.txt)。

线上A→B只有命令观察摘要，原始明细误覆写，详见online-upgrade-observation.json；后续官方host CDP阻断current-only报告独立存储，不能将其视为重新完成A→B。线上版本14项抽查和实际HTTP缓存headers见online-version.json。所有缺口保留在发布记录。

后续安装链兼容：[npm10 ci](npm10-ci-final.txt)、[npm10 verify](verify-npm10-clean.txt)、[npm10单测](unit-npm10-clean.txt)、[正式根临时回滚](root-rollback.json)。

最终：[CI/Pages](ci-pages.json)、[全部发布文件](all-release-files.json)、[原目录保护](preservation-final.json)。源码及根应用验收对应1225702/3117df1，后续仅文档回填。
