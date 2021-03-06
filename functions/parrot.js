exports.handler = async function(event, context) {
    json_body = JSON.parse(event.body);
    if (json_body.message){
        return {
            statusCode: 200,
            body: JSON.stringify({ message: json_body.message }),
        };
    } else {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: "You need to send a JSON with a \"message\" entry" }),
        };
    }
};