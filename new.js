const I = actor();
// import {
//     expect
// } from "chai";
// import CommonPage from "../common-page";
// import * as TempoServiceClient from "../../service-clients/tempo-service-client";
// import {
//     CarouselType
// } from "../../constants";
// import productCarouselSection from "../../sections/carousels/product-carousels";
// import SpotlightCarousel from "../../sections/carousels/spotlight-carousels";
// import {
//     getRequestsBy
// } from "../../helpers/request-store";
// import GoldenData from "../../data/backend/golden-data";

const magTileDivElement = {
    data: "mag-tile-section-wrapper"
};

export function getImageSrc(elementIndex) {
    return `//img[@src='${elementIndex}']`;
}

export function getBackgroundImageXpath(imageSrc) {
    return `//div[contains(@style,'${imageSrc}')]`;
}

export const openWebsite = async (url) => {
    await I.amOnPage(url);
};

class HomePage {
    

    // public async openDepartment(deptPosition = "first") {
    //     await I.waitForElement(categoryTileWrapper);
    //     await I.scrollTo(categoryTileWrapper);
    //     return this.grabAndClickDepartment(deptPosition);
    // }

    // public async getNumberOfElements(element) {
    //     const numberOfElements = await I.grabNumberOfVisibleElements(element);
    //     return numberOfElements;
    // }

    // public async verifyImageVisibilityAndCount(element) {
    //     await I.seeElementInDOM(element);
    //     const elemCount = await this.getNumberOfElements(element);
    //     expect(elemCount).to.equal(
    //         1,
    //         `FAIL: We have more than one element on the DOM`
    //     );
    //     return elemCount;
    // }
}
export default new HomePage();
