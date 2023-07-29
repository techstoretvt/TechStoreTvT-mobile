/* eslint-disable prettier/prettier */
export interface typeProdutView {
  id: string;
  nameProduct: string;
  priceProduct: string;
  sold: number;
  isSell: string;
  trademark: {
    nameTrademark: string;
    nameTrademarkEn: string;
    idTypeProduct: string;
  };
  promotionProducts: [
    {
      idProduct: string;
      timePromotion: number;
      numberPercent: number;
    },
  ];
  'imageProduct-product': [
    {
      idProduct: string;
      STTImage: number;
      imagebase64: string;
    },
  ];
  'classifyProduct-product': [
    {
      id: string;
      idProduct: string;
      amount: number;
      STTImg: number;
      nameClassifyProduct: string;
      priceClassify: number;
    },
  ];
  typeProduct: {
    nameTypeProduct: string;
    nameTypeProductEn: string;
    imageTypeProduct: string;
    stt: number;
  };
}
