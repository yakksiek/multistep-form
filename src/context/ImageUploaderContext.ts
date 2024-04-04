import { createContext, useContext } from 'react';

export interface ImageUploaderContextType {
    previewUrl: string;
    isImageSelected: boolean;
    clearImage: () => void;
}

const defaultContextValue: ImageUploaderContextType = {
    previewUrl: '',
    isImageSelected: false,
    clearImage: () => {},
};

export const ImageUploaderContext = createContext<ImageUploaderContextType>(defaultContextValue);

export function useImageUploaderContext() {
    return useContext(ImageUploaderContext);
}
