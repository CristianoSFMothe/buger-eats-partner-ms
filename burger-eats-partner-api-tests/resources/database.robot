*** Settings ***
Documentation       Database helpers connection


Library             RobotMongoDBLibrary.Find
Library             RobotMongoDBLibrary.Delete

*** Variables ***
&{MONGO_URI}        connection=
...                 mongodb+srv://burgereats:iUVEPxA1QDZg5YAM@cluster0.majlrpu.mongodb.net/PartnerDB?retryWrites=true&w=majority
...                 database=PartnerDB   collection=partner