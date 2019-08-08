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


### message.service

1. Run `ng generate service message --flat --skipTests=true`


## 2019/07/18

### ActivatedRoute service

## 2019/07/24

### Animation

### add map component
1. Run `ng generate module map-center/map-center --module app --flat --routing`
2. Run `ng generate component map-center/map-center --skipTests=true` as app.component
3. Run `ng generate component map-center/map-center-home --skipTests=true` just a host for map center
4. Run `ng generate component map-center/map-list --skipTests=true`
5. Run `ng generate component map-center/map-detail --skipTests=true`
6. Run `ng generate service map-center/map-center --flat --skipTests=true`


### popup component
1. Run `ng generate component compose-message --skipTests=true`
2. `<router-outlet name="popup"></router-outlet>`
3. `<a [routerLink]="[{ outlets: { popup: ['compose'] } }]">Contact</a>`

### admin

1. Run `ng generate module admin --routing`
2. Run `ng generate component admin/admin-dashboard --skipTests=true`
3. Run `ng generate component admin/admin --skipTests=true`
4. Run `ng generate component admin/manage-header --skipTests=true`
5. Run `ng generate component admin/manage-map --skipTests=true`

### guard

1. Run `ng generate guard auth/auth --skipTests=true`
2. Run `ng generate service auth/auth --skipTests=true`
3. Run `ng generate component auth/login --skipTests=true`
1. Run `ng generate module auth/auth --routing`

### CanDeactivate

## 2019/07/25

###  deploy to firebase hosting

1. install `npm install --save-dev firebase-tools`
2. Run `firebase init` select `hosting: xxxx` type derctory `dist/andromeda` rewrite `y` overwrite `N`
3. building project `ng build --prod`
4. deploy `firebase deploy`


### install firebase api
1. Run `npm install --save firebase`
2.  ```javascript 
    import * as firebase from 'firebase/app';
    constructor() {
        firebase.initializeApp(environment.firebase);
    }```


## 2019/07/26 

### map

1.  `npm install --save @types/googlemaps`
2.  Run `ng generate service google-map/map-loader --skipTests=true`

## 2019/07/27

### geolocation

1. `ng generate service google-map/geolocation  --skipTests=true`
2. add `HttpClientModule`
3. `https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyAXbjP-YQ-qwhOCqYRlfc_dx6DZYHG1uv8`

## 2019/07/28


## Realtime Database
#### CurrentPosition

| Name          | type          |
| ------------- | ------------- |
| uid           | string        |
| accuracy      | number        |
| latitude      | number        |
| longitude     | number        |
| timestamp     | number        |


## Cloud Firestore
### PositionHistory

| Name          | type          |
| ------------- | ------------- |
| uid           | string        |
| accuracy      | number        |
| latitude      | number        |
| longitude     | number        |
| timestamp     | number        |

## Local Storage
### LastPosition
| Name          | type          |
| ------------- | ------------- |
| uid           | string        |
| accuracy      | number        |
| latitude      | number        |
| longitude     | number        |
| timestamp     | number        |

## 2019/07/29
### firebase

1. Run `ng generate service firebase/cloud-firestore --skipTests=true`
1. Run `ng generate service firebase/authentication --skipTests=true`

## 2019/07/30
### todo

1. Run `ng generate module google-map/google-map --module app --flat --routing`
1. Run `ng generate component google-map/google-map --skipTests=true`


## 2019/07/31
### sign up & sign in

1. Run `ng generate component auth/sign-up --skipTests=true`
2. Run `ng generate component auth/sign-in --skipTests=true`
3. Run `ng generate component auth/auth-center --skipTests=true` 
4. Run `ng generate component auth/profile --skipTests=true`


###  animatable properties
 [animatable properties](https://www.quackit.com/css/css3/animations/animatable_properties/)


 ## 2019/08/02
 ### natours

 1. `ng generate module natours/natours --module app --flat --routing`
 

 ## 2019/08/04
 ### set * html and body in natours

 1. `encapsulation: ViewEncapsulation.None`

 ## 2019/08/07
 ### modern javascript
  1. `ng generate module modern-javascript/modern-javascript --module app --flat --routing`
  2. `ng generate component modern-javascript/dom --skipTests=true`
  2. `ng generate component modern-javascript/form --skipTests=true`