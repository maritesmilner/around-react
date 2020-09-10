(this["webpackJsonparound-react"]=this["webpackJsonparound-react"]||[]).push([[0],{12:function(e,t,a){e.exports=a.p+"static/media/logo.8f7611ae.svg"},13:function(e,t,a){e.exports=a.p+"static/media/edit-button.93eceffd.svg"},15:function(e,t,a){e.exports=a(21)},20:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),i=a.n(o),c=(a(20),a(14)),s=a(1),l=a(12),u=a.n(l);function m(){return r.a.createElement("header",{className:"header"},r.a.createElement("img",{className:"header__logo",src:u.a,alt:"Around The USA logo"}))}var p=r.a.createContext();function d(e){var t=e.card,a=e.onCardClick,n=e.onCardLike,o=e.onCardDelete,i=r.a.useContext(p),c=t.owner._id===i._id,s="trash-button ".concat(c?"":"hide"),l=t.likes.some((function(e){return e._id===i._id})),u="like__button ".concat(l?"like__button_active":"");return r.a.createElement("li",{className:"place"},r.a.createElement("img",{className:"place__picture",alt:"place",src:t.link,onClick:function(){return a(t)}}),r.a.createElement("button",{className:s,onClick:function(){return o(t._id)}}),r.a.createElement("div",{className:"place__name-group"},r.a.createElement("h3",{className:"place__name"},t.name),r.a.createElement("div",{className:"like"},r.a.createElement("button",{className:u,onClick:function(){return n(t._id,l)}}),r.a.createElement("p",{className:"like__count"},t.likes.length))))}var f=a(13),h=a.n(f);function v(e){var t=r.a.useContext(p);return r.a.createElement("main",{className:"content"},r.a.createElement("section",{className:"profile"},r.a.createElement("div",{className:"profile__avatar-container"},r.a.createElement("img",{src:t.avatar,alt:"profile",className:"profile__avatar"}),r.a.createElement("img",{src:h.a,alt:"edit profile",className:"edit-button edit-button_place_avatar",onClick:e.onEditAvatar})),r.a.createElement("div",{className:"profile__info"},r.a.createElement("div",{className:"profile__person"},r.a.createElement("h1",{className:"profile__name"},t.name),r.a.createElement("button",{className:"edit-button",type:"button","aria-label":"edit profile",form:"edit-profile",id:"edit-profile-button",onClick:e.onEditProfile})),r.a.createElement("p",{className:"profile__title"},t.about)),r.a.createElement("button",{className:"add-button",type:"button",name:"open-button",onClick:e.onAddPlace})),r.a.createElement("section",{className:"elements"},r.a.createElement("ul",{className:"places"},e.cards.map((function(t,a){return r.a.createElement(d,{card:t,key:a,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete})})))))}function b(){return r.a.createElement("footer",null,r.a.createElement("p",{className:"footer"},"\xa9 2020 Around The U.S."))}function g(e){return r.a.createElement("section",{className:e.isOpen?"place-popup":"place-popup hide"},r.a.createElement("div",{className:"overlay overlay_opacity_darker"}),r.a.createElement("div",{className:"form form_display_pic"},r.a.createElement("img",{className:"form__pic",src:e.image,alt:e.title}),r.a.createElement("p",{className:"form__pic-name"},e.title),r.a.createElement("button",{type:"button",className:"form__close-button",onClick:e.onClose})))}var _=a(4),E=a(5),C="".concat("users/me","/avatar"),O="".concat("cards","/likes"),k=new(function(){function e(t,a){Object(_.a)(this,e),this._baseUrl=t,this._options=a}return Object(E.a)(e,[{key:"_getDataPromise",value:function(e){return fetch("".concat(this._baseUrl,"/").concat(e),this._options).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.statusText))}))}},{key:"getUserInfo",value:function(){return this._options.method="GET",this._getDataPromise("users/me")}},{key:"getCards",value:function(){return this._options.method="GET",this._getDataPromise("cards")}},{key:"updateUserInfo",value:function(e){return this._options.method="PATCH",this._options.body=JSON.stringify(e),this._getDataPromise("users/me")}},{key:"updateUserAvatar",value:function(e){return this._options.method="PATCH",this._options.body=JSON.stringify({avatar:e}),this._getDataPromise(C)}},{key:"addCard",value:function(e,t){return this._options.method="POST",this._options.body=JSON.stringify({name:e,link:t}),this._getDataPromise("cards")}},{key:"removeCard",value:function(e){return this._options.method="DELETE",this._getDataPromise("".concat("cards","/").concat(e))}},{key:"changeLikeCardStatus",value:function(e,t){return t?this._addCardLike(e):this._removeCardLike(e)}},{key:"_addCardLike",value:function(e){return this._options.method="PUT",this._getDataPromise("".concat(O,"/").concat(e))}},{key:"_removeCardLike",value:function(e){return this._options.method="DELETE",this._getDataPromise("".concat(O,"/").concat(e))}}]),e}())("https://around.nomoreparties.co/v1/group-3",{headers:{authorization:"aae17431-b773-4b38-a586-5c35cb6461b9","Content-Type":"application/json"}}),N=a(3),j=a(2);function y(e){var t=r.a.useState(!0),a=Object(s.a)(t,2),n=a[0],o=a[1];return r.a.useEffect((function(){if(e.errorFlags){var t=Object.keys(e.errorFlags);t.length===r.a.Children.count(e.children)&&o(t.some((function(t){return!0===e.errorFlags[t]})))}}),[e.errorFlags,e.children]),r.a.createElement("section",{className:e.isOpen?"".concat(e.name):"".concat(e.name," hide")},r.a.createElement("div",{className:"overlay"}),r.a.createElement("form",{className:"form",id:"edit-profile",onSubmit:e.onSubmit,noValidate:!0},r.a.createElement("h2",{className:"form__title"},e.title),e.children,r.a.createElement("button",{type:"submit",className:"form__save-button ".concat(n?"form__save-button_disabled":""),disabled:n},e.submitButtonLabel),r.a.createElement("button",{type:"button",className:"form__close-button",onClick:e.onClose})))}var S=a(9),L=a(8),P=function(e){Object(S.a)(a,e);var t=Object(L.a)(a);function a(e){var n;return Object(_.a)(this,a),(n=t.call(this,e)).validateChange=function(e){n.setState({inputName:e.target.name,inputValue:e.target.value,isInputError:!e.target.validity.valid,inputErrorMessage:e.target.validationMessage},(function(){return n.props.onInputChange(n.state)}))},n.state={},n}return Object(E.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{type:this.props.type,placeholder:this.props.placeHolder,name:this.props.name,className:"form__input form__input_type_".concat(this.props.name," ").concat(this.state.isInputError?"form__input_type_error-indicator":""),id:this.props.name,minLength:this.props.minLength,maxLength:this.props.maxLength,required:this.props.isRequired,onChange:this.validateChange,ref:this.props.refs,value:this.inputValue,defaultValue:this.props.defaultValue}),r.a.createElement("span",{className:"form__input-error ".concat(this.state.isInputError?"form__input-error-msg":""),id:"".concat(this.props.name,"-error")},this.state.inputErrorMessage))}}]),a}(r.a.Component);var I=function(e){var t=r.a.useState({}),a=Object(s.a)(t,2),n=a[0],o=a[1],i=r.a.useContext(p),c=r.a.useState({}),l=Object(s.a)(c,2),u=l[0],m=l[1];r.a.useEffect((function(){m(i)}),[i]);var d=function(e){var t=e.inputName,a=e.inputValue,r=e.isInputError;e.inputErrorMessage;m(Object(j.a)(Object(j.a)({},u),{},Object(N.a)({},t,a))),o(Object(j.a)(Object(j.a)({},n),{},Object(N.a)({},t,r)))};return r.a.createElement(y,{title:"Edit profile",name:"edit-profile-form",isOpen:e.isOpen,onClose:e.onClose,submitButtonLabel:e.isSaving?"Saving...":"Save",onSubmit:function(t){t.preventDefault(),e.onUpdateUser(Object(j.a)(Object(j.a)({},i),u)),m({})},errorFlags:n},r.a.createElement(P,{type:"text",name:"name",value:u.name,placeHolder:"Name",minLength:"2",maxLength:"40",isRequired:!0,onInputChange:d,defaultValue:u.name}),r.a.createElement(P,{type:"text",name:"about",value:u.about,placeHolder:"Title",minLength:"2",maxLength:"200",isRequired:!0,onInputChange:d,defaultValue:u.about}))},D=function(e){Object(S.a)(a,e);var t=Object(L.a)(a);function a(e){var n;return Object(_.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=e.inputName,a=e.isInputError;n.setState(Object(j.a)(Object(j.a)({},n.state),{},Object(N.a)({},t,a)))},n.handleSubmit=function(e){e.preventDefault(),n.props.onUpdateAvatar(n.avatarRef.current.value)},n.avatarRef=r.a.createRef(),n.state={},n}return Object(E.a)(a,[{key:"render",value:function(){return r.a.createElement(y,{title:"Change profile picture",name:"edit-profile-picture",isOpen:this.props.isOpen,onClose:this.props.onClose,submitButtonLabel:this.props.isSaving?"Saving...":"Save",onSubmit:this.handleSubmit,errorFlags:this.state},r.a.createElement(P,{type:"url",name:"image-link",refs:this.avatarRef,placeHolder:"Image Link",isRequired:!0,onInputChange:this.handleChange}))}}]),a}(r.a.Component),U=function(e){var t=r.a.useState({}),a=Object(s.a)(t,2),n=a[0],o=a[1],i=r.a.useState({}),c=Object(s.a)(i,2),l=c[0],u=c[1],m=function(e){var t=e.inputName,a=e.inputValue,r=e.isInputError;o(Object(j.a)(Object(j.a)({},n),{},Object(N.a)({},t,a))),u(Object(j.a)(Object(j.a)({},l),{},Object(N.a)({},t,r)))};return r.a.createElement(y,{title:"New place",name:"new-place-form",isOpen:e.isOpen,onClose:e.onClose,submitButtonLabel:e.isSaving?"Saving...":"Create",onSubmit:function(t){t.preventDefault(),e.onAddPlace(n.name,n.link)},errorFlags:l},r.a.createElement(P,{type:"text",name:"name",value:n.name,placeHolder:"Title",minLength:"0",maxLength:"30",isRequired:!0,onInputChange:m}),r.a.createElement(P,{type:"url",name:"link",value:n.link,placeHolder:"Image Link",isRequired:!0,onInputChange:m}))};var x=function(){var e=r.a.useState(!1),t=Object(s.a)(e,2),a=t[0],n=t[1],o=r.a.useState(!1),i=Object(s.a)(o,2),l=i[0],u=i[1],d=r.a.useState(!1),f=Object(s.a)(d,2),h=f[0],_=f[1],E=r.a.useState(!1),C=Object(s.a)(E,2),O=C[0],N=C[1],j=r.a.useState({}),y=Object(s.a)(j,2),S=y[0],L=y[1],P=r.a.useState({}),x=Object(s.a)(P,2),A=x[0],T=x[1],w=r.a.useState([]),R=Object(s.a)(w,2),V=R[0],F=R[1],H=r.a.useState(!1),q=Object(s.a)(H,2),B=q[0],J=q[1],M=r.a.useState(0),G=Object(s.a)(M,2),W=G[0],z=G[1];r.a.useEffect((function(){k.getUserInfo().then((function(e){T(e)})).catch((function(e){return console.log(e)})),k.getCards().then((function(e){return F(e)})).catch((function(e){return console.log(e)}))}),[]);var $=function(){a&&n(!1),l&&u(!1),h&&_(!1),O&&(L({}),N(!1))};return r.a.createElement("div",{className:"page"},r.a.createElement(p.Provider,{value:A},r.a.createElement(m,null),r.a.createElement(v,{onEditProfile:function(){n(!0)},onAddPlace:function(){u(!0)},onEditAvatar:function(){_(!0)},onCardClick:function(e){L(e),N(!0)},cards:V,onCardLike:function(e,t){k.changeLikeCardStatus(e,!t).then((function(t){var a=V.map((function(a){return a._id===e?t:a}));F(a)})).catch((function(e){return console.log(e)}))},onCardDelete:function(e){k.removeCard(e).then((function(t){console.log(t);var a=V.filter((function(t){return t._id!==e}));F(a)})).catch((function(e){return console.log(e)}))}}),r.a.createElement(I,{isOpen:a,onClose:$,onUpdateUser:function(e){J(!0),k.updateUserInfo(e).then((function(e){T(e),J(!1),n(!1)})).catch((function(e){return console.log(e)}))},isSaving:B,childCounter:function(e){z(e)},childCount:W}),r.a.createElement(D,{isOpen:h,onClose:$,onUpdateAvatar:function(e){J(!0),k.updateUserAvatar(e).then((function(e){T(e),J(!1),_(!1)})).catch((function(e){return console.log(e)}))},isSaving:B}),r.a.createElement(U,{isOpen:l,onClose:$,onAddPlace:function(e,t){J(!0),k.addCard(e,t).then((function(e){F([e].concat(Object(c.a)(V))),J(!1),u(!1)})).catch((function(e){return console.log(e)}))},isSaving:B}),r.a.createElement(g,{image:S.link,title:S.name,isOpen:O,onClose:$}),r.a.createElement(b,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.bfeec331.chunk.js.map