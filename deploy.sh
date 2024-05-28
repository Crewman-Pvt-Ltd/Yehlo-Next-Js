git pull
yarn run build
pm2 delete "Yehlo-web-next-js-dev"
pm2 start npm --name "Yehlo-web-next-js-dev" -- start
