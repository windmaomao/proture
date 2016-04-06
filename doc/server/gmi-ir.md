#GMI IR

Dev
- Event service: http://cptxxu03.us.db.com:28189/v1
- Event client: http://cptxxu03.us.db.com:28190/
- Mongo: mongodb://cptxxu02.us.db.com/gmi

UAT
- Event service: http://cggmiu01.us.db.com:28189/v1
- Event client: http://cptxxu03.us.db.com:28190/
- Mongo: mongodb://cggmiu02.us.db.com/gmi

Prod

- Mongo: mongodb://cggmib03.us.db.com/gmi


Database
- Production: cprtrsprod/cggmip03.us.db.com, cggmib03.us.db.com, cggmib02.us.db.com
- Staging: http://cptxxu02.us.db.com

Deployment
- http-server -p 28190 -P http://localhost:28189

cptxxu03
- Path: . ~/.bashrc
