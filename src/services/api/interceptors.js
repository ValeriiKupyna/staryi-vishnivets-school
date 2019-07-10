export const createInterceptors = () => {
    return {
        request: {
            onSuccess: onRequestSuccess,
            onError: handleError,
        },
        response: {
            onSuccess: onResponseSuccess,
            onError: handleError,
        },
    };

    function handleError(error) {
        return Promise.reject(error);
    }

    function onResponseSuccess(response) {
        return response;
    }

    function onRequestSuccess(request) {
        return request;
    }
};

export default createInterceptors();
