import React from 'react';
import { observer } from 'mobx-react';
import { DropdownList } from 'react-widgets';
import 'react-widgets/lib/less/react-widgets.less'

export default observer(({ field }) => (
  <DropdownList
    value={field.value}
    onChange={field.sync}
    data={field.extra}
  />
));