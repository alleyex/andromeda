## 2019/07/17

### deploy to github

1. Run `npm install angular-cli-ghpages --save-dev` 
2. Run `ng build --prod --aot --base-href "https://alleyex.github.io/andromeda/"` 
3. Run `npx ngh --dir=dist/andromeda`
4. website  [andromeda](https://alleyex.github.io/andromeda/)

### add app-routing.module

1. Run `ng generate module app-routing --module app --flat`

### add headers component

1. Run `ng generate module headers/header --module app --flat --routing`
2. Run `ng generate component headers/header-detail --spec false`
3. Run `ng generate component headers/header-list --spec false`
4. Run `ng generate service headers/header --flat --skipTests=true`


### add message.service

1. Run `ng generate service message --flat --skipTests=true`


