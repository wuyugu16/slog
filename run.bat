git checkout only-safe
git merge main --no-commit --no-ff
bash -c "git reset -- docs/posts/*X* docs/.vuepress/**/*X* 2>/dev/null || true"
git status
git commit -m "merge main to only-safe"
git checkout main