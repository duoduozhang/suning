$(function () {
    /*轮播图*/
    /*1. 自动轮播图 无缝*/
    /*2. 点对应改变*/
    /*3. 手势切换*/

    /*获取元素*/
    var $banner = $('.sn_banner');
    var width = $banner.width();
    //console.log(width);

    var $imageBox = $banner.find('ul:first');
    var $point = $banner.find('ul:eq(1)');

    /*1. 自动轮播图 无缝*/
    var index = 1;
    var animateFuc = function () {
        /*动画的切换*/
        $imageBox.animate({'transform': 'translateX(' + (-index * width) + 'px)'}, 200, function () {
            /*动画结束回调*/
            if(index >= 9){
                index = 1;
                /*瞬间定位*/
                $imageBox.css({'transform': 'translateX(' + (-index * width) + 'px)'});
            }else if(index <= 0){
                index = 8;
                /*瞬间定位*/
                $imageBox.css({'transform': 'translateX(' + (-index * width) + 'px)'});
            }
            /*2. 点对应改变*/
            $point.find('li').removeClass('now').eq(index -1).addClass('now');
        });
    }
    var timer = setInterval(function () {
        index++;
        animateFuc();
    }, 5000);
    /*3. 手势切换*/
    $imageBox.on('swipeLeft',function () {
        /*左滑手势  下一张*/
        index ++;
        /*动画*/
        animateFuc();
    });
    $imageBox.on('swipeRight',function () {
        /*右滑手势  上一张*/
        index --;
        /*动画*/
        animateFuc();
    });
});