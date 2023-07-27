/* eslint-disable prettier/prettier */
export interface typeProdutView {
    id: string;
    nameProduct: string;
    priceProduct: string;
    sold: number;
    trademark: {
        nameTrademark: string;
    };
    promotionProducts: [{
        timePromotion: number;
        numberPercent: number;
    }];
    'imageProduct-product': [{
        imagebase64: string;
    }];
    'classifyProduct-product': [
        {
            nameClassifyProduct: string;
            priceClassify: number;
        }
    ]
}