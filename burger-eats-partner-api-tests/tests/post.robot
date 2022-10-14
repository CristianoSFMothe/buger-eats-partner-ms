*** Settings ***
Documentation       POST /partner Tests
...                 Teste do POST API

Resource            ../resources/base.robot


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

    ${filter}       Create Dictionary
    ...             name=Pizzas Mothe

    DeleteOne       ${MONGO_URI}     ${filter}

    ${response}     POST        ${BASE_URL}
    ...             json=${payload}
    ...             headers=${headers}

    Status Should Be  201

    ${results}        Find      ${MONGO_URI}        ${filter}

    Should Be Equal    ${response.json()}[partner_id]    ${results}[0][_id]