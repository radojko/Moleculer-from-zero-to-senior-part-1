
const { ServiceBroker } = require("moleculer");

const broker = new ServiceBroker({
	nodeID: "node-1",
	transporter: "nats://localhost:4222" || "TCP",
	logLevel: "debug",
	requestTimeout: 5 * 1000
});

broker.loadServices("./services", "*");

broker.start().then( () => console.log("Broker started"));
// .then( () => broker.call("hello.sayHi"))
// .then( res => console.log(res))
// .catch( error => console.error(error))
  
// .then( () => broker.call("hello.add", {firstNumber: "1", secondNumber: "2"}))
// .then( res => console.log(res))
// .catch( error => console.error(error))
  
// .then( () => broker.call("hello.max", {firstNumber: "11", secondNumber: "22"}))
// .then( res => console.log(res))
// .catch( error => console.error(error))
  
// .then( () => broker.call("hello.sayBye", {name: "Fabrigeas"}))
// .then( res => console.log(res))
// .catch( error => console.error(error));

