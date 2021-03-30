# load-balancer
Implement layer 4 load balancer using Ha Proxy to serve two nodejs app servers.

## Getting Started 

### Requirements 

Install the following requirements for before proceeding to the app installation
- [Ha Proxy](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html/load_balancer_administration/install_haproxy_example1) 
- [Node](https://nodejs.org/en/download/)

### Getting Started

### Configure Ha Proxy 

- Copy haproxy [configuration file](https://github.com/ahmedmeshref/layer4-load-balancer/blob/main/haproxy.cfg) and paste it in your haproxy configuration file ('/etc/haproxy/' on linux). 
- Reload haproxy service. On linux, use ```sudo service haproxy reload```.

### Clone Repository

Navigate to your project folder on local machine and execute the following command from your terminal to clone the repository into your current directory locally.

```bash
git clone https://github.com/ahmedmeshref/load-balancer.git
```

### Install Dependencies

From your terminal, install all dependencies needed by executing ```npm install```.

### Run App 

From your terminal, run the application with ```npm start```. Two Application instances are going to be created. App can be accessed on [http://localhost:8888](http://localhost:8888).

### Test load balancer 

Run the python script [req.py](https://github.com/ahmedmeshref/layer4-load-balancer/blob/main/req.py), which sends 1000 requests to the application. Ha Proxy will use the two app servers interchangeably.

