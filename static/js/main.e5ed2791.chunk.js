(this["webpackJsonparound-react"]=this["webpackJsonparound-react"]||[]).push([[0],[,,,,function(e,t,a){e.exports=a.p+"static/media/logo.8f7611ae.svg"},,,function(e,t,a){e.exports=a.p+"static/media/edit-button.93eceffd.svg"},function(e,t,a){e.exports=a(14)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(3),i=a.n(r),c=(a(13),a(1)),l=a(4),s=a.n(l);function m(){return o.a.createElement("header",{className:"header"},o.a.createElement("img",{className:"header__logo",src:s.a,alt:"Around The USA logo"}))}function u(e){var t=e.onClose;return o.a.createElement("button",{type:"button",className:"form__close-button",onClick:t})}function p(e){return o.a.createElement("section",{className:e.isOpen?"".concat(e.name):"".concat(e.name," hide")},o.a.createElement("div",{className:"overlay"}),o.a.createElement("form",{className:"form",id:"edit-profile",noValidate:!0},o.a.createElement("h2",{className:"form__title"},e.title),e.children,o.a.createElement("button",{type:"submit",className:"form__save-button form__save-button_disabled",disabled:!0},e.submitButtonLabel),o.a.createElement(u,{onClose:e.onClose})))}function d(e){return o.a.createElement("section",{className:e.isOpen?"place-popup":"place-popup hide"},o.a.createElement("div",{className:"overlay overlay_opacity_darker"}),o.a.createElement("div",{className:"form form_display_pic"},o.a.createElement("img",{className:"form__pic",src:e.image,alt:e.title}),o.a.createElement("p",{className:"form__pic-name"},e.title),o.a.createElement(u,{onClose:e.onClose})))}function f(e){var t=e.type,a=e.name,n=e.placeHolder,r=e.minLength,i=e.maxLength,c=e.isRequired;return o.a.createElement(o.a.Fragment,null,o.a.createElement("input",{type:t,placeholder:n,name:a,className:"form__input form__input_type_".concat(a),id:a,minLength:r,maxLength:i,required:c}),o.a.createElement("span",{className:"form__input-error",id:"".concat(a,"-error")}))}var E=a(5),_=a(6),h="".concat("users/me","/avatar"),b="".concat("cards","/likes"),g=new(function(){function e(t,a){Object(E.a)(this,e),this._baseUrl=t,this._options=a}return Object(_.a)(e,[{key:"_getDataPromise",value:function(e){return fetch("".concat(this._baseUrl,"/").concat(e),this._options).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.statusText))}))}},{key:"getUserInfo",value:function(){return this._options.method="GET",this._getDataPromise("users/me")}},{key:"getCards",value:function(){return this._options.method="GET",this._getDataPromise("cards")}},{key:"updateUserInfo",value:function(e){return this._options.method="PATCH",this._options.body=JSON.stringify(e),this._getDataPromise("users/me")}},{key:"updateUserAvatar",value:function(e){return this._options.method="PATCH",this._options.body=JSON.stringify({avatar:e}),this._getDataPromise(h)}},{key:"addCard",value:function(e,t){return this._options.method="POST",this._options.body=JSON.stringify({name:e,link:t}),this._getDataPromise("cards")}},{key:"removeCard",value:function(e){return this._options.method="DELETE",this._getDataPromise("".concat("cards","/").concat(e))}},{key:"addCardLike",value:function(e){return this._options.method="PUT",this._getDataPromise("".concat(b,"/").concat(e))}},{key:"removeCardLike",value:function(e){return this._options.method="DELETE",this._getDataPromise("".concat(b,"/").concat(e))}}]),e}())("https://around.nomoreparties.co/v1/group-3",{headers:{authorization:"aae17431-b773-4b38-a586-5c35cb6461b9","Content-Type":"application/json"}});function v(e){var t=e.card,a=e.onCardClick;return o.a.createElement("li",{className:"place",key:t._id},o.a.createElement("img",{className:"place__picture",alt:"place",src:t.link,onClick:function(){return a(t)}}),o.a.createElement("button",{className:"trash-button"}),o.a.createElement("div",{className:"place__name-group"},o.a.createElement("h3",{className:"place__name"},t.name),o.a.createElement("div",{className:"like"},o.a.createElement("button",{className:"like__button"}),o.a.createElement("p",{className:"like__count"},t.likes.length))))}var N=a(7),k=a.n(N);function C(e){var t=o.a.useState(),a=Object(c.a)(t,2),n=a[0],r=a[1],i=o.a.useState(),l=Object(c.a)(i,2),s=l[0],m=l[1],u=o.a.useState(),E=Object(c.a)(u,2),_=E[0],h=E[1],b=o.a.useState([]),N=Object(c.a)(b,2),C=N[0],y=N[1];return o.a.useEffect((function(){g.getUserInfo().then((function(e){r(e.name),m(e.about),h(e.avatar)})).catch((function(e){return console.log(e)}))}),[]),o.a.useEffect((function(){g.getCards().then((function(e){return y(e)})).catch((function(e){return console.log(e)}))}),[]),o.a.createElement("main",{className:"content"},o.a.createElement("section",{className:"profile"},o.a.createElement("div",{className:"profile__avatar-container"},o.a.createElement("img",{src:_,alt:"profile",className:"profile__avatar"}),o.a.createElement("img",{src:k.a,alt:"edit profile",className:"edit-button edit-button_place_avatar",onClick:e.onEditAvatar})),o.a.createElement("div",{className:"profile__info"},o.a.createElement("div",{className:"profile__person"},o.a.createElement("h1",{className:"profile__name"},n),o.a.createElement("button",{className:"edit-button",type:"button","aria-label":"edit profile",form:"edit-profile",id:"edit-profile-button",onClick:e.onEditProfile})),o.a.createElement("p",{className:"profile__title"},s)),o.a.createElement("button",{className:"add-button",type:"button",name:"open-button",onClick:e.onAddPlace})),o.a.createElement("section",{className:"elements"},o.a.createElement("ul",{className:"places"},C.map((function(t){return o.a.createElement(v,{card:t,key:t._id,onCardClick:e.onCardClick})})))),o.a.createElement(p,{title:"Edit profile",name:"edit-profile-form",isOpen:e.isEditProfilePopupOpen,onClose:e.onClose,submitButtonLabel:"Save"},o.a.createElement(f,{type:"text",name:"name",placeHolder:"Name",minLength:"2",maxLength:"40",isRequired:!0}),o.a.createElement(f,{type:"text",name:"about",placeHolder:"Title",minLength:"2",maxLength:"200",isRequired:!0})),o.a.createElement(p,{title:"New place",name:"new-place-form",isOpen:e.isAddPlacePopupOpen,onClose:e.onClose,submitButtonLabel:"Create"},o.a.createElement(f,{type:"text",name:"name",placeHolder:"Title",minLength:"0",maxLength:"30",isRequired:!0}),o.a.createElement(f,{type:"url",name:"link",placeHolder:"Image Link",isRequired:!0})),o.a.createElement(p,{title:"Change profile picture",name:"edit-profile-picture",isOpen:e.isEditAvatarPopupOpen,onClose:e.onClose,submitButtonLabel:"Save"},o.a.createElement(f,{type:"url",name:"image-link",placeHolder:"Image Link",isRequired:!0})),o.a.createElement(d,{image:e.card.link,title:e.card.name,isOpen:e.isImagePopupOpen,onClose:e.onClose}))}function y(){return o.a.createElement("footer",null,o.a.createElement("p",{className:"footer"},"\xa9 2020 Around The U.S."))}var P=function(){var e=o.a.useState(!1),t=Object(c.a)(e,2),a=t[0],n=t[1],r=o.a.useState(!1),i=Object(c.a)(r,2),l=i[0],s=i[1],u=o.a.useState(!1),p=Object(c.a)(u,2),d=p[0],f=p[1],E=o.a.useState(!1),_=Object(c.a)(E,2),h=_[0],b=_[1],g=o.a.useState({}),v=Object(c.a)(g,2),N=v[0],k=v[1];return o.a.createElement("div",{className:"page"},o.a.createElement(m,null),o.a.createElement(C,{onEditProfile:function(){n(!0)},isEditProfilePopupOpen:a,onAddPlace:function(){s(!0)},isAddPlacePopupOpen:l,onEditAvatar:function(){f(!0)},isEditAvatarPopupOpen:d,onCardClick:function(e){k(e),b(!0)},isImagePopupOpen:h,onClose:function(){a&&n(!1),l&&s(!1),d&&f(!1),h&&(k({}),b(!1))},card:N}),o.a.createElement(y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.e5ed2791.chunk.js.map