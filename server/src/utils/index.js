export const generateCode = (input, prefix, size) => {
	if (!input || !prefix || !size) {
		return;
	}
	const s = "000000000" + input;
  return prefix + s.substr(s.length-size);
};