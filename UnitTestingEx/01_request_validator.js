function validateRequest(httpObj) {
    const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const uriRegex = /^[\w.]+$/;
    const messageRegex = /^[^<>\\&'"]*$/;

    const validMethod = httpObj.hasOwnProperty('method') && validMethods.includes(httpObj.method);
    const validURI = httpObj.hasOwnProperty('uri') && (httpObj.uri === '*' || uriRegex.test(httpObj.uri));
    const validVersion = httpObj.hasOwnProperty('version') && validVersions.includes(httpObj.version);
    const validMessage = httpObj.hasOwnProperty('message') && messageRegex.test(httpObj.message);

    // method validation
    if (!validMethod) {
        throw new Error('Invalid request header: Invalid Method');
    }

    // uri validation
    if (!validURI) {
        throw new Error('Invalid request header: Invalid URI');
    }

    // version validation
    if (!validVersion) {
        throw new Error('Invalid request header: Invalid Version');
    }

    // message validation
    if (!validMessage) {
        throw new Error('Invalid request header: Invalid Message');
    }

    return httpObj;
}

console.log(validateRequest({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}));