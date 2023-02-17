import { Ifunction } from "../models/function";

export const functions: Ifunction[] = [
    {
        "function_code": "XML-SEPA-SALARY",
        "function_name": "Bonifico XML Stipendi"
    },
    {
        "function_code": "EBILL",
        "function_name": "EBILL"
    },
    {
        "function_code": "XML-INTERNATIONAL-TRANSFER",
        "function_name": "CBI_XML_INTERNATIONAL_TRANSFER"
    },
    {
        "function_code": "XML-URGENT-TRANSFER",
        "function_name": "Bonifico XML Urgente"
    },
    {
        "function_code": "F24-PAYMENT",
        "function_name": "F24"
    },
    {
        "function_code": "RAV-SLIP",
        "function_name": "RAV"
    },
    {
        "function_code": "SEPA-TRANSFER",
        "function_name": "Bonifico SEPA"
    },
    {
        "function_code": "TRANSFER",
        "function_name": "Bonifico Italia"
    },
    {
        "function_code": "BANKBOOK-STATEMENT",
        "function_name": "Bankbook statement"
    },
    {
        "function_code": "MAV-SLIP",
        "function_name": "MAV"
    },
    {
        "function_code": "F24-ACCOUNTANT-PAYMENT",
        "function_name": "F24 Accountant"
    },
    {
        "function_code": "XML-SEPA-TRANSFER",
        "function_name": "XML SEPA"
    }
].map(fn => { return {
        title: fn.function_name,
        functionCode: fn.function_code
    }
})