git checkout only-safe
git merge main --no-commit --no-ff
git rm --cached -r --ignore-unmatch docs/posts/*X* docs/.vuepress/public/**/*X*
git status
git commit -m "merge main to only-safe"
git push safe-origin  
git checkout main