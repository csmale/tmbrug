
const mqtt = require('mqtt');

const tmbrug_url = "https://www.vaarweginformatie.nl/frp/api/geodynamic/bridge/details/?isrs=NLMSS002270445300084";
const mqtt_host = "mqtt://192.168.0.151";
const mqtt_opts = {
    topic: "termeerbrug"
};

void (async () => {

    let tmbrug;
    await fetch(tmbrug_url).then(function (response) {
        // The API call was successful!
        return response.json();
    }).then(function (data) {
        // This is the JSON from our response
        tmbrug = data;
    }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
    });

    const client = mqtt.connect(mqtt_host, mqtt_opts);

    client.on("connect", () => {
        client.publish("termeerbrug", JSON.stringify({
            status: tmbrug.status
        }), {retain: true});
        client.end();
    });

})();
