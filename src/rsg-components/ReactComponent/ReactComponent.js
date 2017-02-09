import React, { PropTypes } from 'react';
import Markdown from 'rsg-components/Markdown';
import Props from 'rsg-components/Props';
import Methods from 'rsg-components/Methods';
import Examples from 'rsg-components/Examples';
import ReactComponentRenderer from 'rsg-components/ReactComponent/ReactComponentRenderer';

export default function ReactComponent({ component }, { isolatedComponent = false }) {
	const { name, pathLine, examples } = component;
	const { description, props, methods } = component.props;
	return (
		<ReactComponentRenderer
			name={name}
			pathLine={pathLine}
			description={description && <Markdown text={description} />}
			props={props && <Props props={props} />}
			methods={methods.length > 0 && <Methods methods={methods} />}
			examples={examples && <Examples examples={examples} name={name} />}
			isolated={isolatedComponent}
		/>
	);
}

ReactComponent.propTypes = {
	component: PropTypes.object.isRequired,
};

ReactComponent.contextTypes = {
	isolatedComponent: PropTypes.bool,
};
