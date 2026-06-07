git checkout main
git push origin main
git checkout safe-main
git merge main -no-ff -m "merge main to safe-main"
git push safe-origin safe-main
git checkout main