#!/bin/sh

green='\033[0;32m'
magenta='\033[0;35m'

alias Reset="tput sgr0"

cecho() {
  echo "${2}${1}"
  Reset # Reset to normal.
  return
}

CONTINUE=false

cecho "What do you want to name your component?" $green
read component
echo ""
cecho "Nice, $component sounds awesome, what directory do you want it in? (relative to src/ folder)" $green
read directory
echo ""

mkdir -p src/$directory/$component
# echo "export { default as $component } from './$directory/$component';" >> ./src/index.js
cd src/$directory/$component


# Make PasCal case dasherized for sass
dasherizedcomponent=$(echo $component \
     | sed 's/\(.\)\([A-Z]\)/\1-\2/g' \
     | tr '[:upper:]' '[:lower:]')

bemizedcomponent=$(echo $component   \
     | sed 's/\(.\)\([A-Z]\)/\1\2/g' \
     | tr '[:upper:]' '[:lower:]')

echo "@import 'src/styles/variables';
.$bemizedcomponent {
  // yay!
}" >> index.scss;

echo "import React, { FC } from 'react';
import './index.scss';

interface ${component}Props {
  text: string;
}

const $component: FC<${component}Props> = ({ text }) => {
  return (
    <div className='$bemizedcomponent'>
      {text}
    </div>
  );
};

export default $component;" >> index.tsx

# Create Boilerplate For Testing
echo "import React from 'react';
import { render } from '@testing-library/react';
import $component from './index';

const setup = (customProps ={}) => {
  const defaultProps = {};
  const props = { ...defaultProps, ...customProps };
  return render(<$component {...props} />);
};

beforeEach(() => {
  jest.resetAllMocks();
});

describe('$component', () => {

  it('should render the text $component in the document', () => {
    const { getByText } = setup({ text: '$component' });
    expect(getByText('$component')).toBeInTheDocument();
  });

});" >> index.test.js


cecho "===================================" $magenta
echo  ""
cecho "Successfully created $component!" $magenta
echo  ""
cecho "===================================" $magenta
