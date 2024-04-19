
// {images}:imagesProps object
export interface imagesProps {
    images: imagesItems;
}

export interface imagesItems {
    id: number;
    src: string;
    fake: string;
    title: string;
    price: number;
};