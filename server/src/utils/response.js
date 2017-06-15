const buildResponse = (success, result, error) => ({
	success, result, error,
});

export const success = (result) =>
	buildResponse(true, result, null);

export const failure = (error) =>
	buildResponse(false, null, error);
