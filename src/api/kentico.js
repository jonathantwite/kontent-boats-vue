import { DeliveryClient } from '@kentico/kontent-delivery';
import store from '@/store';

const deliveryClient = new DeliveryClient({
    projectId: '168e7186-c7d9-00db-38d9-641daf004c44'
});

/**
 * Fetch all classes with a specified classification (Taxonomy) and in the currently selected language.
 * @param {string} codename - The classification's codename.
 * @returns {Promise}
 */
export const getClassesByClassification = (codename) =>
    deliveryClient.items()
        .type('dinghy_class')
        .equalsFilter('elements.classification[contains]', codename)
        .languageParameter(store.getters.GET_SELECTED_LANGUAGE)
        .toPromise();

/**
 * Fetch a specific kontent item in the currently selected language.
 * @param {string} codename - The item's codename.
 * @returns {Promise}
 */
export const getItem = (codename) =>
    deliveryClient.item(codename)
        .languageParameter(store.getters.GET_SELECTED_LANGUAGE)
        .toPromise();

/**
 * Fetch all classifications (Taxonomy).
 * @returns {Promise}
 */
export const getClassifications = () =>
    deliveryClient.taxonomy('classification')
        .toPromise();

/**
 * Fetch all classes associated with a specified builder in the currently selected language.
 * @param {string} codename - The builder's codename
 * @returns {Promise}
 */
export const getClassesByBuilder = (codename) =>
    deliveryClient.items()
        .type('dinghy_class')
        .equalsFilter('elements.builders[contains]', codename)
        .languageParameter(store.getters.GET_SELECTED_LANGUAGE)
        .toPromise();
