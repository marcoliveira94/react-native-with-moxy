(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{156:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(2),r=n(9),i=(n(0),n(159)),o={id:"android-app-signing",title:"Android app signing",sidebar_label:"Android app signing"},l={id:"welcome/instructions/android-app-signing",title:"Android app signing",description:"To distribute an Android app via Google Play store it is required to digitally sign it with a certificate. If you're not yet familiar with how app signing works, have a look at Android Developers' official documentation.",source:"@site/docs/welcome/instructions/android-app-signing.md",permalink:"/docs/welcome/instructions/android-app-signing",sidebar_label:"Android app signing",sidebar:"docs",previous:{title:"Project setup",permalink:"/docs/welcome/instructions/project-setup"},next:{title:"Splash screen",permalink:"/docs/welcome/instructions/splash-screen"}},c=[{value:"Enviroment variables",id:"enviroment-variables",children:[]},{value:"Properties file",id:"properties-file",children:[]},{value:"Properties file and macOS keychain (macOS users only)",id:"properties-file-and-macos-keychain-macos-users-only",children:[]}],p={rightToc:c};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"To distribute an Android app via Google Play store it is required to digitally sign it with a certificate. If you're not yet familiar with how app signing works, have a look at ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.android.com/studio/publish/app-signing"}),"Android Developers' official documentation"),". "),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u2139\ufe0f Debug builds are automatically signed but your app should have its own, unique secure signing configuration for release builds. Otherwise, you won't be able to publish your app to Google Play. ")),Object(i.b)("p",null,"The first step is to ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.android.com/studio/publish/app-signing#sign-apk"}),"generate an upload key and a keystore")," and follow the instructions and recommendations therein. The second step is to configure the boilerplate to use them."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u2757\ufe0f Keep your keystore file private and in safe place! Never check it in into source control. By default, files ending in ",Object(i.b)("inlineCode",{parentName:"p"},".jks")," and ",Object(i.b)("inlineCode",{parentName:"p"},".keystore")," are already added to ",Object(i.b)("inlineCode",{parentName:"p"},".gitignore"),".")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\ud83d\udca1 You can securely save your keystore file, keystore password and upload key password in a password manager such as 1Password.")),Object(i.b)("p",null,"The boilerplate offers three configuration options to sign release builds:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Environment variables"),Object(i.b)("li",{parentName:"ol"},"Properties file"),Object(i.b)("li",{parentName:"ol"},"Properties file and macOS keychain")),Object(i.b)("p",null,"Regardless of the option you chose, all the following variables ",Object(i.b)("em",{parentName:"p"},"MUST")," be defined at build time:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Identifier"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"ANDROID_SIGNING_KEYSTORE_FILE"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The absolute path to the keystore file.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"ANDROID_SIGNING_KEYSTORE_PASSWORD"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The password you chose when generating the keystore.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"ANDROID_SIGNING_KEY_PASSWORD"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The password you chose when generating the upload key.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"ANDROID_SIGNING_KEY_ALIAS"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The name you chose to identify your key when generating it.")))),Object(i.b)("h3",{id:"enviroment-variables"},"Enviroment variables"),Object(i.b)("p",null,"This is the default option if nothing else is done. Define the variables to reflect your signing configuration accordingly."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u2139\ufe0f Configuration is only picked up from the environment if the secrets' properties file does not exist. In other words, the environment does not override the configuration provided by the file. ")),Object(i.b)("h3",{id:"properties-file"},"Properties file"),Object(i.b)("p",null,"The boilerplate ships with ",Object(i.b)("inlineCode",{parentName:"p"},"sample.secrets.properties")," file which you can find in the ",Object(i.b)("inlineCode",{parentName:"p"},"android/")," directory. Rename the file to ",Object(i.b)("inlineCode",{parentName:"p"},"secrets.properties")," and edit each property value to reflect your signing configuration accordingly."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u2757\ufe0f Never check your ",Object(i.b)("inlineCode",{parentName:"p"},"secrets.properties")," file into source control! By default, this file is already added to ",Object(i.b)("inlineCode",{parentName:"p"},".gitignore"),".")),Object(i.b)("h3",{id:"properties-file-and-macos-keychain-macos-users-only"},"Properties file and macOS keychain (macOS users only)"),Object(i.b)("p",null,"For increased security, instead of storing your keystore and upload key passwords in plaintext you can opt-in to store them in macOS' Keychain Access app."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u2139\ufe0f You still need to create a ",Object(i.b)("inlineCode",{parentName:"p"},"secrets.properties")," file for this configuration option. If you haven't done it yet, confer section ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#properties-file"}),"Properties file"),". ")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Edit the file ",Object(i.b)("inlineCode",{parentName:"li"},"android/gradle.properties")," and replace the values of the variables below:")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"macos.keychain.service=<your-project-name>\nmacos.keychain.account.key=android-upload-key-password\nmacos.keychain.account.keystore=android-upload-keystore-password\n")),Object(i.b)("p",null,"If you'd like, you can use the values already specified for ",Object(i.b)("inlineCode",{parentName:"p"},"macos.keychain.account.key")," and ",Object(i.b)("inlineCode",{parentName:"p"},"macos.keychain.account.keystore")," properties. Replace ",Object(i.b)("inlineCode",{parentName:"p"},"<your-app-name>")," with the actual name of your app."),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"Open the Keychain Access app."),Object(i.b)("li",{parentName:"ol"},"Select the Passwords category."),Object(i.b)("li",{parentName:"ol"},"Press the plus sign to create a new Password entry."),Object(i.b)("li",{parentName:"ol"},'Fill in "Keychain Item Name" field with the value you defined for ',Object(i.b)("inlineCode",{parentName:"li"},"macos.keychain.service"),"."),Object(i.b)("li",{parentName:"ol"},'Fill in "Account Name" field with value you defined for ',Object(i.b)("inlineCode",{parentName:"li"},"macos.keychain.account.keystore"),"."),Object(i.b)("li",{parentName:"ol"},'Fill in "Password" field with the password you chose when generating the keystore.'),Object(i.b)("li",{parentName:"ol"},'Click "Add" button to save the Password.'),Object(i.b)("li",{parentName:"ol"},"Repeat steps 4-8 but this time to create a Password entry for the upload key password."),Object(i.b)("li",{parentName:"ol"},"Remove ",Object(i.b)("inlineCode",{parentName:"li"},"ANDROID_SIGNING_KEYSTORE_PASSWORD")," and ",Object(i.b)("inlineCode",{parentName:"li"},"ANDROID_SIGNING_KEY_PASSWORD")," properties from the ",Object(i.b)("inlineCode",{parentName:"li"},"secrets.properties")," file.")))}s.isMDXComponent=!0},159:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=s(n),u=a,m=b["".concat(o,".").concat(u)]||b[u]||d[u]||i;return n?r.a.createElement(m,l(l({ref:t},p),{},{components:n})):r.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);