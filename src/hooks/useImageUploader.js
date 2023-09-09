import { useState } from 'react';

function useImageUploader() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [previewUrl, setPreviewUrl] = useState('');
    const [isImageSelected, setIsImageSelected] = useState(false);

    const handleImageSelect = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            setSelectedImage(selectedFile);
            setIsImageSelected(true);

            // eslint-disable-next-line no-undef
            const reader = new FileReader();
            reader.onload = () => {
                setPreviewUrl(reader.result);
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
