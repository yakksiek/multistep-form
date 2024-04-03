import { ChangeEvent, useState } from 'react';

interface UseImageUploaderReturn {
    selectedImage: File | null;
    previewUrl: string;
    isImageSelected: boolean;
    handleImageSelect: (event: ChangeEvent<HTMLInputElement>) => void;
    clearImage: () => void;
}

function useImageUploader(): UseImageUploaderReturn {
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState('');
    const [isImageSelected, setIsImageSelected] = useState(false);

    const handleImageSelect = (event: ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files && event.target.files[0];
        if (selectedFile) {
            setSelectedImage(selectedFile);
            setIsImageSelected(true);

            const reader = new FileReader();
            reader.onload = () => {
                if (typeof reader.result === 'string') {
                    setPreviewUrl(reader.result);
                }
            };
            reader.readAsDataURL(selectedFile);
        }
    };

    const clearImage = () => {
        setSelectedImage(null);
        setPreviewUrl('');
        setIsImageSelected(false);
    };

    return {
        selectedImage,
        previewUrl,
        isImageSelected,
        handleImageSelect,
        clearImage,
    };
}

export default useImageUploader;
