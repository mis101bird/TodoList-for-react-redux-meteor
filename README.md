# TodoList-for-react-redux-meteor
### TodoList for react-redux-meteor

用到的知識： React, Redux, Meteor


更新React DOM的State分兩種:

1. UI state: 負責UI畫面顯示上的狀態更新
2. Domain state: 負責畫面"資料"上的更新

UI state使用Redux管理，本應用有使用react-redux套件的Provider和connect做協助，Provider和connect的原理來自context，connect使用Redux的store.subscribe( ()=> this.forceUpdate(); )強制更新React DOM，來做到UI元件的聯動更新，所以React DOM本身的local state其實沒有被使用到。

Domain state由mongoDB/miniMongo儲存，藉由Meteor的Tracker做data的連動追蹤並更新。只要使用createContainer包裹住React DOM即可完成目的。

* connect和createContainer可以一起用，同時追蹤UI state和Domain state! 詳見commits.

### 參考教學：

* [How we Redux](https://medium.com/front-end-developers/how-we-redux-part-1-introduction-18a24c3b7efe#.spbn7nau1)
* [自己的Evernote筆記](https://www.evernote.com/l/AR-uCWB6a4VJWLxL4gGDMKlnWyKnbMy5knQ)
