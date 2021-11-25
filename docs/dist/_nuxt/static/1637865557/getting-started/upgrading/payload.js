__NUXT_JSONP__("/getting-started/upgrading", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y){return {data:[{document:{slug:"upgrading",description:"Upgrading NocoDB : Docker, npm, Heroku!",title:x,position:r,category:"Getting started",menuTitle:x,link:"https:\u002F\u002Fcodesandbox.io\u002Fembed\u002Fvigorous-firefly-80kq5?hidenavigation=1&theme=dark",toc:[{id:y,depth:r,text:z},{id:A,depth:k,text:B},{id:C,depth:k,text:D},{id:E,depth:k,text:F},{id:G,depth:k,text:H},{id:I,depth:r,text:J},{id:K,depth:r,text:L},{id:M,depth:k,text:N},{id:O,depth:k,text:P}],body:{type:"root",children:[{type:a,tag:t,props:{id:y},children:[{type:a,tag:e,props:{href:"#docker",ariaHidden:f,tabIndex:g},children:[{type:a,tag:d,props:{className:[h,i]},children:[]}]},{type:b,value:z}]},{type:b,value:c},{type:a,tag:l,props:{id:A},children:[{type:a,tag:e,props:{href:"#find-stop--delete-nocodb-docker-container",ariaHidden:f,tabIndex:g},children:[{type:a,tag:d,props:{className:[h,i]},children:[]}]},{type:b,value:B}]},{type:b,value:c},{type:a,tag:m,props:{className:[n]},children:[{type:a,tag:o,props:{className:[p,s]},children:[{type:a,tag:q,props:{},children:[{type:b,value:"docker ps\n\ndocker stop YOUR_CONTAINER_ID\"\n\ndocker rm YOUR_CONTAINER_ID\"\n"}]}]}]},{type:b,value:c},{type:a,tag:l,props:{id:C},children:[{type:a,tag:e,props:{href:"#find--remove-nocodb-docker-image",ariaHidden:f,tabIndex:g},children:[{type:a,tag:d,props:{className:[h,i]},children:[]}]},{type:b,value:D}]},{type:b,value:c},{type:a,tag:m,props:{className:[n]},children:[{type:a,tag:o,props:{className:[p,s]},children:[{type:a,tag:q,props:{},children:[{type:b,value:"docker images\n\ndocker rmi YOUR_IMAGE_ID\n"}]}]}]},{type:b,value:c},{type:a,tag:l,props:{id:E},children:[{type:a,tag:e,props:{href:"#pull-the-latest-nocodb-image-with-same-environment-variables",ariaHidden:f,tabIndex:g},children:[{type:a,tag:d,props:{className:[h,i]},children:[]}]},{type:b,value:F}]},{type:b,value:c},{type:a,tag:m,props:{className:[n]},children:[{type:a,tag:o,props:{className:[p,s]},children:[{type:a,tag:q,props:{},children:[{type:b,value:"docker run -d -p 8080:8080 \\\n    -e NC_DB=\"YOUR_NC_DB_URL\" \\\n    -e NC_AUTH_JWT_SECRET=\"YOUR_NC_AUTH_JWT_SECRET_IF_GIVEN\" \\\n    nocodb\u002Fnocodb:latest\n"}]}]}]},{type:b,value:c},{type:a,tag:j,props:{},children:[{type:b,value:"Updating nocodb docker container is similar to updating "},{type:a,tag:e,props:{href:"https:\u002F\u002Fwww.whitesourcesoftware.com\u002Ffree-developer-tools\u002Fblog\u002Fupdate-docker-images\u002F",rel:[Q,R,S],target:T},children:[{type:b,value:"any other docker container"}]},{type:b,value:"."}]},{type:b,value:c},{type:a,tag:l,props:{id:G},children:[{type:a,tag:e,props:{href:"#example-docker-upgrade",ariaHidden:f,tabIndex:g},children:[{type:a,tag:d,props:{className:[h,i]},children:[]}]},{type:b,value:H}]},{type:b,value:c},{type:a,tag:j,props:{},children:[{type:a,tag:u,props:{alt:"Screen Shot 2021-09-16 at 09 23 07",src:"https:\u002F\u002Fuser-images.githubusercontent.com\u002F5435402\u002F133578984-53c6b96b-3e8b-4a96-b6c2-36f3c09ffdde.png"},children:[]}]},{type:b,value:c},{type:a,tag:t,props:{id:I},children:[{type:a,tag:e,props:{href:"#node",ariaHidden:f,tabIndex:g},children:[{type:a,tag:d,props:{className:[h,i]},children:[]}]},{type:b,value:J}]},{type:b,value:c},{type:a,tag:j,props:{},children:[{type:b,value:"Updating docker container is similar to updating a npm package."}]},{type:b,value:c},{type:a,tag:j,props:{},children:[{type:b,value:"From your root folder"}]},{type:b,value:c},{type:a,tag:U,props:{id:"uninstall-nocodb-package"},children:[{type:a,tag:e,props:{href:"#uninstall-nocodb-package",ariaHidden:f,tabIndex:g},children:[{type:a,tag:d,props:{className:[h,i]},children:[]}]},{type:b,value:"Uninstall nocodb package"}]},{type:b,value:c},{type:a,tag:m,props:{className:[n]},children:[{type:a,tag:o,props:{className:[p,V]},children:[{type:a,tag:q,props:{},children:[{type:a,tag:d,props:{className:[v,w]},children:[{type:b,value:W}]},{type:b,value:" uninstall nocodb\n"}]}]}]},{type:b,value:c},{type:a,tag:U,props:{id:"install-nocodb-package"},children:[{type:a,tag:e,props:{href:"#install-nocodb-package",ariaHidden:f,tabIndex:g},children:[{type:a,tag:d,props:{className:[h,i]},children:[]}]},{type:b,value:"Install nocodb package"}]},{type:b,value:c},{type:a,tag:m,props:{className:[n]},children:[{type:a,tag:o,props:{className:[p,V]},children:[{type:a,tag:q,props:{},children:[{type:a,tag:d,props:{className:[v,w]},children:[{type:b,value:W}]},{type:b,value:" "},{type:a,tag:d,props:{className:[v,w]},children:[{type:b,value:"install"}]},{type:b,value:" --save nocodb\n"}]}]}]},{type:b,value:c},{type:a,tag:t,props:{id:K},children:[{type:a,tag:e,props:{href:"#heroku",ariaHidden:f,tabIndex:g},children:[{type:a,tag:d,props:{className:[h,i]},children:[]}]},{type:b,value:L}]},{type:b,value:c},{type:a,tag:l,props:{id:M},children:[{type:a,tag:e,props:{href:"#using-the-heroku-cli-login",ariaHidden:f,tabIndex:g},children:[{type:a,tag:d,props:{className:[h,i]},children:[]}]},{type:b,value:N}]},{type:b,value:c},{type:a,tag:m,props:{className:[n]},children:[{type:a,tag:o,props:{className:[p,s]},children:[{type:a,tag:q,props:{},children:[{type:b,value:"heroku container:login\ndocker pull nocodb\u002Fnocodb:latest\ndocker tag nocodb\u002Fnocodb:latest registry.heroku.com\u002F\u003CHeroku App Name\u003E\u002Fweb\ndocker push registry.heroku.com\u002F\u003CHeroku App Name\u003E\u002Fweb\nheroku container:release -a \u003CHeroku App Name\u003E web\n"}]}]}]},{type:b,value:c},{type:a,tag:l,props:{id:O},children:[{type:a,tag:e,props:{href:"#using-github",ariaHidden:f,tabIndex:g},children:[{type:a,tag:d,props:{className:[h,i]},children:[]}]},{type:b,value:P}]},{type:b,value:c},{type:a,tag:j,props:{},children:[{type:b,value:"Fork the "},{type:a,tag:e,props:{href:"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb-seed-heroku",rel:[Q,R,S],target:T},children:[{type:b,value:"nocodb-seed-heroku repository"}]},{type:b,value:" to your GitHub account.\nLogin to Heroku, go to your NocoDB app, and head to the \"Deploy\" tab.\nSelect \"GitHub\" in the \"Deployment method\" section."}]},{type:b,value:c},{type:a,tag:j,props:{},children:[{type:b,value:"In the \"Connect to GitHub\" section, search for your forked nocodb-seed-heroku repo. Connect to it:"}]},{type:b,value:c},{type:a,tag:j,props:{},children:[{type:a,tag:u,props:{alt:X,src:"https:\u002F\u002Fuser-images.githubusercontent.com\u002F55474996\u002F143479577-e8bdc1f0-99d1-4072-8d95-4879cc54ddb2.png"},children:[]}]},{type:b,value:c},{type:a,tag:j,props:{},children:[{type:b,value:"In the \"Automatic deploys\" section, select \"Enable Automatic Deploys\":"}]},{type:b,value:c},{type:a,tag:j,props:{},children:[{type:a,tag:u,props:{alt:X,src:"https:\u002F\u002Fuser-images.githubusercontent.com\u002F55474996\u002F143479705-b5280199-aa31-40db-a5aa-7586eb918c01.png"},children:[]}]},{type:b,value:c},{type:a,tag:j,props:{},children:[{type:b,value:"Head back to your forked nocodb-seed-heroku repo on your GitHub account. Edit one of your files and make a simple modification (example, add some random characters to the readme.md) and commit the change directly to the main branch."}]},{type:b,value:c},{type:a,tag:j,props:{},children:[{type:b,value:"This will trigger the Heroku deployment. Your app should now be updated to the latest release of NocoDB."}]}]},dir:"\u002Fen\u002Fgetting-started",path:"\u002Fen\u002Fgetting-started\u002Fupgrading",extension:".md",createdAt:Y,updatedAt:Y,to:"\u002Fgetting-started\u002Fupgrading"},prev:{slug:"installation",title:"Installation",to:"\u002Fgetting-started\u002Finstallation"},next:{slug:"demos",title:"Demos",to:"\u002Fgetting-started\u002Fdemos"}}],fetch:{},mutations:[]}}("element","text","\n","span","a","true",-1,"icon","icon-link","p",3,"h3","div","nuxt-content-highlight","pre","line-numbers","code",2,"language-text","h2","img","token","function","Upgrading","docker","Docker","find-stop--delete-nocodb-docker-container","Find, stop & delete nocodb docker container","find--remove-nocodb-docker-image","Find & remove nocodb docker image","pull-the-latest-nocodb-image-with-same-environment-variables","Pull the latest nocodb image with same environment variables","example-docker-upgrade","Example docker upgrade","node","Node","heroku","Heroku","using-the-heroku-cli-login","Using the Heroku CLI login","using-github","Using GitHub","nofollow","noopener","noreferrer","_blank","h4","language-bash","npm","image","2021-11-25T18:38:08.155Z")));