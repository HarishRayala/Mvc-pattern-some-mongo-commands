## MongoDB some important Commands

Initially Follow the link for Installing Mongodb and do as per link steps:-
For Windows:- https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/
For Macos:- https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/
For Linux:- https://www.mongodb.com/docs/manual/administration/install-on-linux/


After installation 

Step1:- In terminal type mongosh / mongod. This gives or connects to mongodb server

Command 1:- To create a database intially we need to check is there any databases or not 
we use command:- <b><h3>Show dbs</h3></b>
This command shows the databases in our mongodb there will be <h3>test</h3> database which is created by mongodb

command 2:- To use the test database type <b><h3>use test</h3></b> this will enter inside test database

command 3:- To check the collections inside any database we need to use the database and then type 
<b><h3>show collections</h3></b>

command 4:- If we want to create a new database simply type Ex:<b><h3>use mern<h3></b> this will create a database of mern

command 5:- To create collections <b><h3>db.createCollection("users")</h3></b>. This will create collections of name users.

commad 6:- To see the data inside users collection <b><h3>db.users.find()</h3></b>

command 7:- To insert data inside users 
        <b><h3>db.users.insert({"name":"harish","age":25});</h3></b>
        <h4>Or</h4>
        <b><h3>db.users.insertMany([{},{}])</h3></b> This is to insert many objects or data at a time

        when we insert data it automatically created id for every particular object

command 8:- To make data look good use <b><h3>db.users.find().pretty()</h3></b>

command 9:- To delete particular data <b><h3>db.users.deleteOne({"_id":"paste the id value here which we want to delete"})</h3></b>

command 10:- To update the data

this has two arguments first argument is to select which we want to change and second is what we want to update 
<b><h3>db.users.updateOne({"age":2},{$set:{"address":"vizag"}});</h3></b>--> this is example to update the address as vizag if address is present in age which has 2 otherwise it will add the <b>{"address":vizag}</b> in which age was 2.

<u>To update Many</u>

<b><h3>db.users.updateMany({},{$set:{"country":"India"}});</h3></b>-->this command will add country:india to all the objects.

command 11:- To increment values

<b><h3>db.users.updateMany({name:"Harish"},{$inc:{"age":1}});</h3></b>-->this command will increase age +1 for all which has name harish
<b><h3>db.users.updateMany({age:30}.{$inc:{age:-5}})</h3></b> -->this decreases -5

command 12:- To delete the database first use the database like use test then after entering to database type <b><h3>db.dropDatabase();</h3></b>

<u><h3>Comparision Operators</h3></u>

GreaterThan

<b><h3>db.users.find({age:{$gt:18}}).pretty()</h3></b>

LessThan
<b><h3>db.users.find({age:{$lt:18}}).pretty()</h3></b>

command 13:- sort

<b><h3>db.users.find().sort({"population":-1})</h3></b>--->Descending order
<b><h3>db.users.find().sort({"age":1})</h3></b> --->Ascending order

command 14:- To check even

<b><h3>db.users.find({"enter key value here what we need to find like age/id":{$mod:[2,0]}}).pretty()</h3></b>
