import React from 'react';

import { SelectContext } from './SelectContext';
import { ImageUploaderContext } from './ImageUploaderContext';

const ContextProviders = function ({ imageUploaderContextValue, selectContextValue, children }) {
    return (
        <ImageUploaderContext.Provider value={imageUploaderContextValue}>
            <SelectContext.Provider value={selectContextValue}>{children}</SelectContext.Provider>
        </ImageUploaderContext.Provider>
    );
};

export default React.memo(ContextProviders);
