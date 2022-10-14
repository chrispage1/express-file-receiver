# Express File Receiver

### What this does

This is a really simple HTTP server implemented using Node.JS & Express that receives a
single file, and moves it to a folder within the projects current path.

### Why I made this

I had a need for a tiny web server to push files into an FTP server directory via HTTP.
I've published the code on GitHub for future reference and if it can be of use to anyone then great!

### Usage

Run the server by calling `node app.js` or run it as a service, as I did in my use case on an Alpine server.

`/etc/init.d/node-server:`
```bash
#!/sbin/openrc-run

user="ftpuser"
group="ftpuser"
command="/usr/bin/node"
directory="/home/ftpuser"
command_args="app.js"
command_user="${user}:${group}"
command_background="yes"
pidfile="/run/${RC_SVCNAME}.pid"
output_log="/var/log/${RC_SVCNAME}.log"
error_log="${output_log}"

depend() {
        use net
}
```