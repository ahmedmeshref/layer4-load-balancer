const express = require('express');


function run_server(port_num) {
    const app = express();
    const port = port_num;
    app.get('/*', (req, res) => {
        res.status(200).json({
            success: true,
            port: port
        });
    });


    app.listen(port, () => {
        console.log(`Server running at port ${port}`);
    });
}


ports = [4000, 5000]
for (let prt of ports) {
    run_server(prt);
}