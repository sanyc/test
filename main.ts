/**
 * 使用此文件来定义自定义函数和图形块。
 * 想了解更详细的信息，请前往 https://makecode.microbit.org/blocks/custom
 */
/*
 * sanyc的积木块
 */
//% weight=100 color="#FFAB19" icon=""
namespace sanyc {
    /**
     * 判断一个数是否是质数
     */
    //% block="$value 为质数"
    //% value.min=0 value.max=9999
    export function isZhiShu(value: number): boolean {
        let flag = true;
        for (let i = 2; i <= value / 2; i++) {
            if (value % i === 0) {
                flag = false;
            }
        }
        return flag;
    }
}
