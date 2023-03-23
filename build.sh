# delete node modules and reinstall
rm -rf node_modules/
npm install --production --no-progress

# zip entire app into a package
zip -q -r ecs_restart_lambda.zip . -x "*.git*"