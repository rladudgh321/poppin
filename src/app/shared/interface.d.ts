interface srcProps {
    src: string;
}

export interface imagesItems {
    id: number;
    title: string;
    price: number;
    images: srcProps[];
};

export interface newsItems {
    id: number;
    title: string;
    from: string;
    url:string;
    images: srcProps[];
}