const buildResponse = (status, result, error) => ({
	status, result, error,
});

export const success = (result) =>
	buildResponse(true, result, null);

export const failure = (error) =>
	buildResponse(false, null, error);
