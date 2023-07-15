import {onMounted, onUnmounted} from 'vue';
import _ from 'lodash';

export default function useAutoResize(paperWidth = 1920, paperHeight = 1080) {

    const resizeThrottle = _.throttle(resize, 1000);


    onMounted(() => {
        resize();
        window.addEventListener("resize", resizeThrottle);
    });

    onUnmounted(() => {
        window.removeEventListener("resize", resizeThrottle);
    });


    function resize() {
        const paperRatio = paperWidth / paperHeight;
        const pageWidth = document.documentElement.clientWidth;
        const pageHeight = document.documentElement.clientHeight;
        const pageRatio = pageWidth / pageHeight;

        let scaleRatio = pageWidth / paperWidth;
        if (pageRatio > paperRatio) {
            scaleRatio = pageHeight / paperHeight;
            document.body.style = `width:${paperWidth}px;height:${paperHeight}px;transform:scale(${scaleRatio}) translateX(-50%);left:50%;`;
        } else {
            document.body.style = `width:${paperWidth}px;height:${paperHeight}px;transform:scale(${scaleRatio});`;
        }
    }
}
