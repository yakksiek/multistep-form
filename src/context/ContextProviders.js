import React from 'react';

import { SelectContext } from './SelectContext';

const ContextProviders = function ({ selectContextValue, children }) {
    return <SelectContext.Provider value={selectContextValue}>{children}</SelectContext.Provider>;
};

export default React.memo(ContextProviders);
