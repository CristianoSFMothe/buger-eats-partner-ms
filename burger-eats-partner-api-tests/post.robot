*** Settings ***
Documentation       POST /partner Tests
...                 Teste do POST API

Library             RequestsLibrary
Library             RobotMongoDBLibrary.Find
Library             RobotMongoDBLibrary.Delete

*** Variables ***
${BASE_URL}         http://localhost:3333/partners
&{MONGO_URI}        connection=mongodb+srv://burgereats:iUVEPxA1QDZg5YAM@cluster0.majlrpu.mongodb.net/PartnerDB?retryWrites=true&w=majority      database=PartnerDB      collection=partner


*** Test Cases ***
Should Create a New Partner
    # payload é 'carga util'
    ${payload}      Create Dictionary
    ...             name=Pizzas Mother
    ...             email=contato@mother.com.br
    ...             whatsapp=21988775567
    ...             business=Restaurante

    ${headers}      Create Dictionary
    ...             Content-Type=application/json
    ...             auth_user=qa
    ...             auth_password=ninja

    ${filter}       Create Dictionary
    ...             name=Pizzas Mother

    DeleteOne       ${MONGO_URI}        ${filter}


    ${response}     POST        ${BASE_URL}
    ...             json=${payload}
    ...             headers=${headers}

    Status Should Be  201

    ${results}     Find    ${MONGO_URI}    ${filter}

    Should Be Equal     ${response.json()}[partner_id]    ${results}[0][_id]