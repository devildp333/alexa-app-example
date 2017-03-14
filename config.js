module.exports = {
    // the frequent list, you can define it for utterances if it is used frequently
    "dictionary": {
        "names": [
            "matt",
            "joe",
            "bob",
            "bill",
            "mary",
            "jane",
            "dawn"
        ]
    }
    ,
    // interaction model, you can define Alexa how to interact with you
    // intent name: the function name
    // slots: the parameter for the 
    // utterances: the sentances we may speak
    // response: the sentances Alexa will speak
    "interaction_model": [
        {
            "intent_name": "hi",
            "slots": {},
            "utterances": [
                "say hi"
            ],
            "response": "Hi. How are you."
        },
        {
            "intent_name": "hello",
            "slots": {},
            "utterances": [
                "say hello"
            ],
            "response": "Hello. How do you do."
        },
        {
            "intent_name": "nameIntent",
            "slots": {
                "NAME": "LITERAL"
            },
            "utterances": [
                "my {name is|name's} {names|NAME}",
                "set my name to {names|NAME}"
            ],
            "response": "Success."
        }
    ]
}