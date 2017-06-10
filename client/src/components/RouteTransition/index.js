import React from 'react';
import { RouteTransition } from 'react-router-transition';
import ContentWrapper from 'components/ContentWrapper';
import presets from './presets.js';

export const FadeTransition = props => (
  <Transition 
  	preset={presets.fade} 
  	{...props}
	/>
);

export const SlideLeftTransition = props => (
  <Transition 
  	preset={presets.slideLeft} 
  	{...props}
	/>
);

const Transition = (props) => (
	<div>
		<RouteTransition
			className="transition-wrapper"
			pathname={props.pathname}
  	  {...props.preset}
		>
			<ContentWrapper>
				{ props.children }
			</ContentWrapper>
		</RouteTransition>
	</div>
);
