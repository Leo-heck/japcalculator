exports.handler = async function(event, context) {
    json_body = JSON.parse(event.body);
    if (json_body.message){
        return {
            statusCode: 200,
            body: JSON.stringify({ message: event.body.message }),
        };
    } else {
        return {
            statusCode: 418,
            body: JSON.stringify({ message: "Hello" }),
        };
    }
};