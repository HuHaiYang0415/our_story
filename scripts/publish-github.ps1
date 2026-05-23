# 发布到 GitHub（需先登录：gh auth login）
# 在 demo 目录 PowerShell 中运行：.\scripts\publish-github.ps1

$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot\..

$repoName = "our-story"
Write-Host "将创建并推送到 GitHub 仓库: $repoName"

gh auth status
if ($LASTEXITCODE -ne 0) {
  Write-Host "请先运行: gh auth login"
  exit 1
}

gh repo create $repoName --public --source=. --remote=origin --push --description "Our Story 展柜与 520 互动 H5"

Write-Host ""
Write-Host "完成。请在 GitHub 仓库 Settings -> Pages 中启用："
Write-Host "  Branch: master"
Write-Host "  Folder: / (root)"
