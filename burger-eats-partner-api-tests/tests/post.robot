*** Settings ***
Documentation       POST /partner Tests
...                 Teste do POST API

Resource        ../resources/base.robot



*** Test Cases ***
Should Create a New Partner
    ${payload}      Create Dictionary
    ...             name=Pizzar Mothe
    ...             email=contact@mothe.com
    ...             whatsapp=21988775566
    ...             business=Restaurante

    ${headers}      Create Dictionary
    ...             Content-Type=application/json
    ...             auth_user=qa
    ...             auth_password=ninja

    ${filter}       Create Dictionary
    ...             name=Pizzar Mothe

    DeleteOne       ${MONGO_URI}        ${filter}
    
    ${response}     POST            ${BASE_URL}     
    ...             json=${payload}
    ...             headers=${headers}
    
    Status Should Be  201

    ${results}        Find      ${MONGO_URI}        ${filter}
    
    Should Be Equal    ${response.json()}[partner_id]      ${results}[0][_id]
