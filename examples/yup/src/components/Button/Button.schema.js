const { object, string } = require('yup');

const schema = object().shape({
	color: string()
		.required()
		.matches(/[0-9a-fA-F]+/, {
			message: 'Color must be a hexadecimal value',
			excludeEmptyString: true,
		}),
	size: string().required(),
});

module.exports = schema;
