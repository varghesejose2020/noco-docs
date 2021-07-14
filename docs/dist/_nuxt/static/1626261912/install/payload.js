__NUXT_JSONP__("/install", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$){return {data:[{document:{slug:E,description:t,title:"Setup and Usage",position:0,category:"Getting started",fullscreen:true,menuTitle:"Install",link:"https:\u002F\u002Fcodesandbox.io\u002Fembed\u002Fvigorous-firefly-80kq5?hidenavigation=1&theme=dark",toc:[{id:F,depth:G,text:t},{id:H,depth:j,text:I},{id:J,depth:G,text:K},{id:L,depth:j,text:M},{id:N,depth:j,text:O},{id:P,depth:j,text:Q},{id:R,depth:j,text:S},{id:T,depth:j,text:U},{id:V,depth:j,text:W}],body:{type:"root",children:[{type:b,tag:X,props:{id:F},children:[{type:b,tag:d,props:{href:"#simple-installation---takes-about-three-minutes",ariaHidden:f,tabIndex:g},children:[{type:b,tag:e,props:{className:[h,i]},children:[]}]},{type:a,value:t}]},{type:a,value:c},{type:b,tag:k,props:{id:H},children:[{type:b,tag:d,props:{href:"#prerequisites",ariaHidden:f,tabIndex:g},children:[{type:b,tag:e,props:{className:[h,i]},children:[]}]},{type:a,value:I}]},{type:a,value:c},{type:b,tag:u,props:{},children:[{type:a,value:c},{type:b,tag:l,props:{},children:[{type:b,tag:"strong",props:{},children:[{type:a,value:"Must haves"}]},{type:a,value:c},{type:b,tag:u,props:{},children:[{type:a,value:c},{type:b,tag:l,props:{},children:[{type:b,tag:d,props:{href:"https:\u002F\u002Fnodejs.org\u002Fen\u002Fdownload",rel:[o,p,q],target:r},children:[{type:a,value:"node.js \u003E= 12"}]},{type:a,value:v},{type:b,tag:d,props:{href:"https:\u002F\u002Fwww.docker.com\u002Fget-started",rel:[o,p,q],target:r},children:[{type:a,value:Y}]}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:b,tag:d,props:{href:"https:\u002F\u002Fdev.mysql.com\u002Fdownloads\u002Fmysql\u002F",rel:[o,p,q],target:r},children:[{type:a,value:"MySql"}]},{type:a,value:v},{type:b,tag:d,props:{href:"https:\u002F\u002Fwww.postgresql.org\u002Fdownload\u002F",rel:[o,p,q],target:r},children:[{type:a,value:"Postgres"}]},{type:a,value:v},{type:b,tag:d,props:{href:"https:\u002F\u002Fwww.microsoft.com\u002Fen-gb\u002Fsql-server\u002Fsql-server-downloads",rel:[o,p,q],target:r},children:[{type:a,value:"SQLserver"}]},{type:a,value:" \u002F SQLite Database"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:"Nice to haves\n"},{type:b,tag:u,props:{},children:[{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:"Existing schemas can help to create APIs quickly."}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:"An example database schema can be found :"},{type:b,tag:d,props:{className:["grey--text"],href:"https:\u002F\u002Fgithub.com\u002Flerocha\u002Fchinook-database\u002Ftree\u002Fmaster\u002FChinookDatabase\u002FDataSources"},children:[{type:a,value:c},{type:b,tag:"u",props:{},children:[{type:a,value:"here"}]},{type:a,value:c}]}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:X,props:{id:J},children:[{type:b,tag:d,props:{href:"#quick-try",ariaHidden:f,tabIndex:g},children:[{type:b,tag:e,props:{className:[h,i]},children:[]}]},{type:a,value:K}]},{type:a,value:c},{type:b,tag:k,props:{id:L},children:[{type:b,tag:d,props:{href:"#1-click-deploy",ariaHidden:f,tabIndex:g},children:[{type:b,tag:e,props:{className:[h,i]},children:[]}]},{type:a,value:M}]},{type:a,value:c},{type:b,tag:d,props:{href:"https:\u002F\u002Fheroku.com\u002Fdeploy?template=https:\u002F\u002Fgithub.com\u002Fnpgia\u002Fnocodb-seed-heroku"},children:[{type:a,value:"\n    "},{type:b,tag:"img",props:{src:"https:\u002F\u002Fwww.herokucdn.com\u002Fdeploy\u002Fbutton.svg",width:"300px",alt:"Deploy NocoDB to Heroku with 1-Click"},children:[]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:k,props:{id:N},children:[{type:b,tag:d,props:{href:"#node-app-or-docker",ariaHidden:f,tabIndex:g},children:[{type:b,tag:e,props:{className:[h,i]},children:[]}]},{type:a,value:O}]},{type:a,value:c},{type:b,tag:"code-group",props:{},children:[{type:a,value:m},{type:b,tag:w,props:{label:"NPX",active:""},children:[{type:a,value:" \n"},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A,B]},children:[{type:b,tag:C,props:{},children:[{type:a,value:"npx create-nocodb-app\n"}]}]}]},{type:a,value:m}]},{type:a,value:m},{type:b,tag:w,props:{label:Y},children:[{type:a,value:c},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A,B]},children:[{type:b,tag:C,props:{},children:[{type:a,value:"docker run -d --name nocodb -p "},{type:b,tag:e,props:{className:[n,"number"]},children:[{type:a,value:"8080"}]},{type:a,value:":8080 nocodb\u002Fnocodb\n"}]}]}]},{type:a,value:m}]},{type:a,value:m},{type:b,tag:w,props:{label:"Using Git"},children:[{type:a,value:c},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A,B]},children:[{type:b,tag:C,props:{},children:[{type:b,tag:e,props:{className:[n,s]},children:[{type:a,value:"git"}]},{type:a,value:" clone https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb-seed\n"},{type:b,tag:e,props:{className:[n,"builtin","class-name"]},children:[{type:a,value:"cd"}]},{type:a,value:" nocodb-seed\n"},{type:b,tag:e,props:{className:[n,s]},children:[{type:a,value:Z}]},{type:a,value:" "},{type:b,tag:e,props:{className:[n,s]},children:[{type:a,value:E}]},{type:a,value:c},{type:b,tag:e,props:{className:[n,s]},children:[{type:a,value:Z}]},{type:a,value:" start\n"}]}]}]},{type:a,value:m}]},{type:a,value:c}]},{type:a,value:"               \n"},{type:b,tag:k,props:{id:P},children:[{type:b,tag:d,props:{href:"#sample-app",ariaHidden:f,tabIndex:g},children:[{type:b,tag:e,props:{className:[h,i]},children:[]}]},{type:a,value:Q}]},{type:a,value:c},{type:b,tag:"code-sandbox",props:{":src":"link"},children:[{type:a,value:c}]},{type:a,value:c},{type:b,tag:"h1",props:{id:"sample-demos"},children:[{type:b,tag:d,props:{href:"#sample-demos",ariaHidden:f,tabIndex:g},children:[{type:b,tag:e,props:{className:[h,i]},children:[]}]},{type:a,value:"Sample Demos"}]},{type:a,value:c},{type:b,tag:k,props:{id:R},children:[{type:b,tag:d,props:{href:"#docker-deploying-with-one-command",ariaHidden:f,tabIndex:g},children:[{type:b,tag:e,props:{className:[h,i]},children:[]}]},{type:a,value:S}]},{type:a,value:c},{type:b,tag:D,props:{id:"K-UEecQyiOk"},children:[{type:a,value:c}]},{type:a,value:c},{type:b,tag:k,props:{id:T},children:[{type:b,tag:d,props:{href:"#using-npx",ariaHidden:f,tabIndex:g},children:[{type:b,tag:e,props:{className:[h,i]},children:[]}]},{type:a,value:U}]},{type:a,value:c},{type:b,tag:D,props:{id:_},children:[{type:a,value:c}]},{type:a,value:c},{type:b,tag:k,props:{id:V},children:[{type:b,tag:d,props:{href:"#heroku-deployment",ariaHidden:f,tabIndex:g},children:[{type:b,tag:e,props:{className:[h,i]},children:[]}]},{type:a,value:W}]},{type:a,value:c},{type:b,tag:D,props:{id:_},children:[{type:a,value:c}]}]},dir:"\u002Fen",path:"\u002Fen\u002Finstall",extension:".md",createdAt:$,updatedAt:$,to:"\u002Finstall"},prev:null,next:{slug:"apis-generated",title:"REST APIs",to:"\u002Fapis\u002Frest\u002Fapis-generated"}}],fetch:{},mutations:[]}}("text","element","\n","a","span","true",-1,"icon","icon-link",3,"h3","li","\n  ","token","nofollow","noopener","noreferrer","_blank","function","Simple installation - takes about three minutes!","ul"," \u002F ","code-block","div","nuxt-content-highlight","pre","language-bash","line-numbers","code","youtube","install","simple-installation---takes-about-three-minutes",2,"prerequisites","Prerequisites","quick-try","Quick try","1-click-deploy","1-Click Deploy","node-app-or-docker","Node app or docker","sample-app","Sample app","docker-deploying-with-one-command","Docker deploying with one command","using-npx","Using Npx","heroku-deployment","Heroku Deployment","h2","Docker","npm","v6Nn75P1p7I","2021-07-14T11:24:24.470Z")));