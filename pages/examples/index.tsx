import React from 'react';
import ClassComp from '../../components/Class';

function ExamplesPage(): React.ReactNode {
  return (
    <div>
      <ClassComp onClick={(): void => console.log('onClick')} defaultName="name" />
    </div>
  );
}

export default ExamplesPage;
