import React from 'react';

import { SelectContext } from './SelectContext';
import { ImageUploaderContext } from './ImageUploaderContext';

const ContextProviders = function ({ imageUploaderContextValue, selectContextValue, children }) {
    return (
        <ImageUploaderContext.Provider value={imageUploaderContextValue}>
            {children}
            <SelectContext.Provider value={selectContextValue} />
        </ImageUploaderContext.Provider>
    );
};

export default React.memo(ContextProviders);
