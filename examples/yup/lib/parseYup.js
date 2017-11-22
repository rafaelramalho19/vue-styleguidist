const path = require('path');
const fs = require('fs');

module.exports = function parseYup(filePath) {
	const parseObject = require('vue-docgen-api').parse(filePath);

	const fileSchema = path.join(
		path.dirname(filePath),
		path.basename(filePath).slice(0, -4) + '.schema.js'
	);

	if (fs.existsSync(fileSchema)) {
		const yupSchema = require(fileSchema);
		console.log(JSON.stringify(yupSchema, null, 2)); // eslint-disable-line

		/**
		 * This will be a new way for add columns in props table
		 */
		Object.keys(parseObject.props).forEach(key => {
			const prop = parseObject.props[key];
			parseObject.props[key] = Object.assign({}, prop, {
				columns: [
					{
						caption: 'Schema',
						description: 'Hello World', // TODO: Add Yup's schema
					},
				],
			});
		});
	}

	return parseObject;
};
