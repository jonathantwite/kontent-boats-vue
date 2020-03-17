import { ImageUrlBuilder, ImageCompressionEnum, ImageFitModeEnum } from '@kentico/kontent-delivery';

export const getImageUrl = function(url, width, height, quality, fitMode) {
    const imageUrlBuilder = new ImageUrlBuilder(url)
        .withDpr(2)
        .withCompression(ImageCompressionEnum.Lossless)
        .withQuality(quality || 80);

    if (width) {
        imageUrlBuilder.withWidth(width);
    }
    if (height) {
        imageUrlBuilder.withHeight(height);
    }
    if (fitMode) {
        imageUrlBuilder.withFitMode(fitMode);
    }

    // get url to image with query parameters
    return imageUrlBuilder.getUrl();
};

export const getFullWidthImageUrl = (url) => getImageUrl(url, 1920);

export const getOGImageUrl = (url) => getImageUrl(url, 1200, 630, 80, ImageFitModeEnum.Crop);
