import { DeliveryClient } from '@kentico/kontent-delivery';

const deliveryClient = new DeliveryClient({
    projectId: '168e7186-c7d9-00db-38d9-641daf004c44'
});

export const getClassesByClassification = (codename) =>
    deliveryClient.items()
        .type('dinghy_class')
        .equalsFilter('elements.classification[contains]', codename)
        .toPromise();

export const getClass = (codename) =>
    deliveryClient.item(codename)
        .toPromise();

export const getClassifications = () =>
    deliveryClient.taxonomy('classification')
        .toPromise();

export const getClassesByBuilder = (codename) =>
    deliveryClient.items()
        .type('dinghy_class')
        .equalsFilter('elements.builders[contains]', codename)
        .toPromise();
