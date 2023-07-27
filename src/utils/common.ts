/* eslint-disable prettier/prettier */


export const formatNumberToThousands = (number:number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const formatNumber = (number:number) =>{
    let result = new Intl.NumberFormat('en-GB', {
        notation: 'compact',
        compactDisplay: 'short',
      }).format(number);
      return result;
// eslint-disable-next-line eol-last
};