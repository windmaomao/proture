First time UI developer at DB

Onboard
Don't rush to be on-board, follow all standard onboard process, no rush. Computers won't catch up your speed. It takes time to populate your records from one server to another server. 

Developer Access
It's time to request "Developer Access". This will allow you to save files on computer and install new softwares. And don't forget to click "Add Account to Local Administrator Group (For 30 Days)". Yes, you click that button.

MSYSGIT
Request this software from MC7, i find some one is very useful. It mimic the linux command lines (no offense to windows DOS). I found it home when using it. 

NPM
Once you have "Deveoper Access", you can now install node package from official site. Afterwards fire git bash. We need some proxy to be able to access the external world, 

https://mydb.intranet.db.com/blogs/asayayu/2015/03/02/installing-nodejs-and-npm-on-windows

npm config set proxy http://surf-proxy.gslb.db.com:8080/  
npm config set https-proxy http://surf-proxy.gslb.db.com:8080/  
git config http.sslVerify "false"

The above will get your npm working, but we could also use npm proxy through artifactory.

https://mydb.intranet.db.com/docs/DOC-233961

Github
NPM requires quite a bit open source projects published on Github, you need to request github usage before you can have read access to these packages.

Request chrome, ctb
Working for project Global Prime Portal(NAR # 26838-3). Application has internal and external client who uses browsers IE, Chrome. So to test the app on the both the browsers, Chrome needs to be deployed on local machine. Also we have huge number of REST services so Chrome helps in testing them. Please let me know if you need more info to get it approved.

https://mydb.intranet.db.com/docs/DOC-230520            

Bower
npm install -g bower
https://mydb.intranet.db.com/docs/DOC-230503

Compass
Install Ruby Installer from http://rubyinstaller.org/downloads/
cd E:/Ruby22-x64/bin
gem install compass --http-proxy  http://surf-proxy.gslb.db.com:8080/

Python
Install Python from https://www.python.org/downloads/windows/

Frontend build

Chrome permanently
https://mydb.intranet.db.com/docs/DOC-211891


