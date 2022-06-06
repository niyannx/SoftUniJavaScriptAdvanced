function encodeAndDecodeMessages() {
    const html = {
        encodeButton: document.getElementsByTagName('button')[0],
        decodeButton: document.getElementsByTagName('button')[1],
        sendMessageArea: document.getElementsByTagName('textarea')[0],
        recieveMessageArea: document.getElementsByTagName('textarea')[1]
    };

    html.encodeButton.addEventListener('click', encode);
    html.decodeButton.addEventListener('click', decode);

    function encode() {
        let message = html.sendMessageArea.value;

        let encodedMessage = '';

        for (let i = 0; i < message.length; i++) {
            encodedMessage += String.fromCharCode(message[i].charCodeAt(0) + 1);
        }

        html.recieveMessageArea.value = encodedMessage;
        html.sendMessageArea.value = '';
    }

    function decode() {
        let message = html.recieveMessageArea.value;

        let decodedMessage = '';

        for (let i = 0; i < message.length; i++) {
            decodedMessage += String.fromCharCode(message[i].charCodeAt(0) - 1)
        }

        html.sendMessageArea.value = decodedMessage;
        html.recieveMessageArea.value = '';
    }
}