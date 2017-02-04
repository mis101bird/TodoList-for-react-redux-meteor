# TodoList-for-react-redux-meteor
### TodoList for react-redux-meteor

用到的知識： React, Redux, Meteor


更新React DOM的State分兩種:

1. UI state: 負責畫面"顯示"上的更新
2. Domain state: 負責畫面"資料"上的更新

UI state 使用 Redux 管理，本應用有使用 react-redux 套件的 Provider 和 connect 做協助，Provider 和 connect 的原理來自 context，connect 使用 Redux 的 store.subscribe( ()=> this.forceUpdate(); ) 強制更新 React DOM，來做到 UI元件 的聯動更新，所以 React DOM 本身的 local state 其實沒有被使用到。

Domain state 由 mongoDB/miniMongo 儲存，藉由 Meteor 的 Tracker 做 data 的連動追蹤並更新。只要使用 createContainer 包裹住 React DOM 即可完成目的。

* connect 和 createContainer 可以一起用，同時追蹤 UI state 和 Domain state! 詳見 commits.
* meteor container所包覆的component如果unmount，會一起取消DB的subscription

### 參考教學：

* [How we Redux](https://medium.com/front-end-developers/how-we-redux-part-1-introduction-18a24c3b7efe#.spbn7nau1)
* [自己的Evernote筆記](https://www.evernote.com/l/AR-uCWB6a4VJWLxL4gGDMKlnWyKnbMy5knQ)
