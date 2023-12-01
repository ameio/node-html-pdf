#!/bin/bash
# git fetch --all
# git reset --hard origin/master
# git pull origin master
chown -R ameio:ameio /home/ameio/public_html/subdomain/nodedocker
# find /home/ameio/public_html/subdomain/nodedocker -type d -exec chmod 755 {} \;
# find /home/ameio/public_html/subdomain/nodedocker -type f -exec chmod 644 {} \;
# sudo chmod -R 777 /home/ameio/public_html/subdomain/nodedocker/storage /home/ameio/public_html/subdomain/nodedocker/bootstrap
sudo chmod -R 777 /home/ameio/public_html/subdomain/nodedocker/postCommand.sh

#Start docker
sudo systemctl start docker

#Run for docker
sudo docker stop node16  
sudo docker rm node16
sudo docker build -t node16 . 
sudo docker image prune -f
sudo docker run -p 9001:3000 --name node16 -d node16
  
