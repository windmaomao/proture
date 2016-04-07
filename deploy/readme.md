# Deployment

## 1.4 - Launch

- forever start deploy/forever/local.json

## 1.5 - Entry
- http://localhost:7930
- http://localhost:7929/swagger/index.html#/
- http://localhost:7929/v1

## 1.6 - Mongodb

- Dump: mongodump --db proture --out proture-mongodb-040716
- Restore: mongorestore -h ds021989.mlab.com:21989 -d proture --drop -u <user> -p <password> <input db directory>
