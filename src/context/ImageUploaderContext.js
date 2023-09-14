import { createContext, useContext } from 'react';

export const ImageUploaderContext = createContext();

export function useImageUploaderContext() {
    return useContext(ImageUploaderContext);
}
