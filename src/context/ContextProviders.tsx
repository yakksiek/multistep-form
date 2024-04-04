import React from 'react';

import { SelectContext, SelectContextType } from './SelectContext';
import { ImageUploaderContext, ImageUploaderContextType } from './ImageUploaderContext';

interface ContextProvidersProps {
    imageUploaderContextValue: ImageUploaderContextType;
    selectContextValue: SelectContextType;
    children: React.ReactNode;
}

const ContextProviders = function ({ imageUploaderContextValue, selectContextValue, children }: ContextProvidersProps) {
    return (
        <ImageUploaderContext.Provider value={imageUploaderContextValue}>
            <SelectContext.Provider value={selectContextValue}>{children}</SelectContext.Provider>
        </ImageUploaderContext.Provider>
    );
};

export default React.memo(ContextProviders);
