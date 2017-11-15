import React from 'react';
import PropTypes from 'prop-types';
import Slot from 'rsg-components/Slot';

export default function SchemaRenderer({ slotName, slotProps, children, ...rest }) {
	return (
		<SchemaRenderer toolbar={<Slot name={slotName} props={slotProps} />} {...rest}>
			{children}
		</SchemaRenderer>
	);
}

SchemaRenderer.propTypes = {
	children: PropTypes.node,
	slotName: PropTypes.string.isRequired,
	slotProps: PropTypes.object.isRequired,
	depth: PropTypes.number.isRequired,
	deprecated: PropTypes.bool,
};
