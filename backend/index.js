
//const mongoose = require('mongoose');

// For backend and express
const express = require("express");
const bodyParser = require("body-parser");

const apicache = require("apicache");
const v1WorkoutRouter = require("./src/routes/workoutRoutes");
const { swaggerDocs: V1SwaggerDocs } = require("./src/swagger");

const app = express();
const cache = apicache.middleware;
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const log4js = require('log4js');
const data = require('./products.json') ;


const logger = log4js.getLogger();
logger.level = "info";
logger.info('INFO message : Server setup going on');

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

//app.use(cache("2 minutes"));
app.use("/api/v1/workouts", v1WorkoutRouter);

//MongoDB Connection

/* 
const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
}); */


app.get("/", (req, resp) => {

	resp.send("App is Working");
	// You can check backend is working or not by 
	// entering http://loacalhost:5000
	
	// If you see App is working means
	// backend working properly
});

app.get("/api/products", (req, res) => { 
    res.json(data) 
});

app.get("/api/users", async (req, res) => { 
    const users = await User.find({});
    res.json(users)
   // res.json(data) 
});

app.post("/register", async (req, resp) => {
	try {
		const user = new User(req.body);
		let result = await user.save();
		result = result.toObject();
		if (result) {
			delete result.password;
			resp.send(req.body);
			console.log(result);
		} else {
			console.log("User already register");
		}

	} catch (e) {
		resp.send("Something Went Wrong");
	}
});

app.listen(PORT, () => {  
    console.log('Server started on port 5000');  
    logger.info('INFO message : Server started on port 5000');
    V1SwaggerDocs(app, PORT);
});
