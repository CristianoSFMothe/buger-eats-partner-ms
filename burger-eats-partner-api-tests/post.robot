*** Settings ***
Documentation       POST /partner Tests
...                 Teste do POST API

Library             RequestsLibrary
Library             RobotMongoDBLibrary.Delete

*** Variables ***
${BASE_URL}         http://localhost:3333/partners
&{MONGO_URI}        connection=
...                 mongodb+srv://burgereats:iUVEPxA1QDZg5YAM@cluster0.majlrpu.mongodb.net/PartnerDB?retryWrites=true&w=majority
...                 database=PartnerDB   collection=partner


*** Test Cases ***
Should Create a New Partner
    # payload é 'carga util'
    ${payload}      Create Dictionary
    ...             name=Pizzas Mothe
    ...             email=contato@mothe.com.br
    ...             whatsapp=21988775566
    ...             business=Restaurante

    ${headers}      Create Dictionary
    ...             Content-Type=application/json
    ...             auth_user=qa
    ...             auth_password=ninja

    # Nestes dois comandos abaixo, o usuário será deletado antes de realizar o POST novamente.
    # Assim, não haverá problemas de duplicidade.
    ${filter}       Create Dictionary
    ...             name=Pizzas Mothe

    DeleteOne      ${MONGO_URI}            ${filter}

    ${resposnse}    POST            ${BASE_URL}
    ...             json=${payload}
    ...             headers=${headers}

    Status Should Be  201